import {
  AccountAddressType,
  BasicType,
  Bucket,
  ComponentAddress,
  ComponentAddressType,
  Decimal,
  NonFungibleId,
  PackageAddress,
  PackageAddressType,
  Proof,
  ResourceAddress,
  ResourceAddressType,
  TreeSet,
  Blob,
} from './transaction-spec'

export class Manifest {
  instructions: string[]

  constructor(instructions: string[]) {
    this.instructions = instructions
  }

  public toString(): string {
    return this.instructions.join('\n')
  }
}

export class ManifestBuilder {
  private readonly instructions: string[]
  private readonly buckets: Map<string, number>
  private readonly proofs: Map<string, number>
  private id_allocator: number

  constructor() {
    this.instructions = []
    this.buckets = new Map<string, number>()
    this.proofs = new Map<string, number>()
    this.id_allocator = 512
  }

  /**
   * Take all the given resource from worktop.
   *
   * @param resourceAddress The resource address
   * @param bucketName The name of the new bucket
   * @returns
   */
  takeFromWorktop(
    resourceAddress: ResourceAddressType,
    bucketName: string
  ): ManifestBuilder {
    this.instructions.push(
      `TAKE_FROM_WORKTOP ${ResourceAddress(resourceAddress)} ${Bucket(
        bucketName
      )};`
    )
    this.buckets.set(bucketName, this.id_allocator++)
    return this
  }

  /**
   * Take some amount of resource from worktop.
   *
   * @param amount The amount
   * @param resourceAddress The resource address
   * @param bucketName The name of the new bucket
   * @returns
   */
  takeFromWorktopByAmount(
    amount: number,
    resourceAddress: ResourceAddressType,
    bucketName: string
  ): ManifestBuilder {
    this.instructions.push(
      `TAKE_FROM_WORKTOP_BY_AMOUNT ${Decimal(amount)} ${ResourceAddress(
        resourceAddress
      )} ${Bucket(bucketName)};`
    )
    this.buckets.set(bucketName, this.id_allocator++)
    return this
  }

  /**
   * Take some non-fungibles from worktop.
   *
   * @param nonFungibleIds The non-fungible IDs
   * @param resourceAddress The resource address
   * @param bucketName The name of the new bucket
   * @returns
   */
  takeFromWorktopByIds(
    nonFungibleIds: string[],
    resourceAddress: ResourceAddressType,
    bucketName: string
  ): ManifestBuilder {
    this.instructions.push(
      `TAKE_FROM_WORKTOP_BY_IDS ${this.formatNonFungibleIds(
        nonFungibleIds
      )} ${ResourceAddress(resourceAddress)} ${Bucket(bucketName)};`
    )
    this.buckets.set(bucketName, this.id_allocator++)
    return this
  }

  /**
   * Returns a bucket to worktop.
   *
   * @param bucketName The bucket name
   * @returns
   */
  returnToWorktop(bucketName: string) {
    this.instructions.push(`RETURN_TO_WORKTOP ${Bucket(bucketName)};`)
    return this
  }

  /**
   * Asserts worktop contains resource.
   *
   * @param resourceAddress The resource address
   * @returns
   */
  assertWorktopContains(resourceAddress: ResourceAddressType): ManifestBuilder {
    this.instructions.push(
      `ASSERT_WORKTOP_CONTAINS ${ResourceAddress(resourceAddress)};`
    )
    return this
  }

  /**
   * Asserts worktop contains some amount of resource.
   *
   * @param amount The amount
   * @param resourceAddress The resource address
   * @returns
   */
  assertWorktopContainsByAmount(
    amount: number,
    resourceAddress: ResourceAddressType
  ): ManifestBuilder {
    this.instructions.push(
      `ASSERT_WORKTOP_CONTAINS_BY_AMOUNT ${Decimal(amount)} ${ResourceAddress(
        resourceAddress
      )};`
    )
    return this
  }

  /**
   * Asserts worktop contains some non-fungibles.
   *
   * @param nonFungibleIds The non-fungible IDs
   * @param resourceAddress The resource address
   * @returns
   */
  assertWorktopContainsByIds(
    nonFungibleIds: string[],
    resourceAddress: ResourceAddressType
  ): ManifestBuilder {
    this.instructions.push(
      `ASSERT_WORKTOP_CONTAINS_BY_IDS ${this.formatNonFungibleIds(
        nonFungibleIds
      )} ${ResourceAddress(resourceAddress)};`
    )
    return this
  }

  /**
   * Pops the most recent proof from the auth zone.
   *
   * @param proofName The name of the new proof
   * @returns
   */
  popFromAuthZone(proofName: string): ManifestBuilder {
    this.instructions.push(`POP_FROM_AUTH_ZONE ${Proof(proofName)};`)
    this.proofs.set(proofName, this.id_allocator++)
    return this
  }

  /**
   * Pushes a proof onto the auth zone.
   *
   * @param proofName The proof name
   * @returns
   */
  pushToAuthZone(proofName: string): ManifestBuilder {
    this.instructions.push(`PUSH_TO_AUTH_ZONE ${Proof(proofName)};`)
    return this
  }

  /**
   * Clears the auth zone.
   *
   * @returns
   */
  clearAuthZone(): ManifestBuilder {
    this.instructions.push('CLEAR_AUTH_ZONE;')
    return this
  }

  /**
   * Creates a composite proof from the auth zone with all the given resource.
   *
   * @param resourceAddress The resource address
   * @param proofName The name of the new proof
   * @returns
   */
  createProofFromAuthZone(
    resourceAddress: ResourceAddressType,
    proofName: string
  ): ManifestBuilder {
    this.instructions.push(
      `CREATE_PROOF_FROM_AUTH_ZONE ${ResourceAddress(resourceAddress)} ${Proof(
        proofName
      )};`
    )
    this.proofs.set(proofName, this.id_allocator++)
    return this
  }

  /**
   * Creates a composite proof from the auth zone for the given amount.
   *
   * @param amount The amount
   * @param resourceAddress The resource address
   * @param proofName The name of the new proof
   * @returns
   */
  createProofFromAuthZoneByAmount(
    amount: number,
    resourceAddress: ResourceAddressType,
    proofName: string
  ): ManifestBuilder {
    this.instructions.push(
      `CREATE_PROOF_FROM_AUTH_ZONE_BY_AMOUNT ${Decimal(
        amount
      )} ${ResourceAddress(resourceAddress)} ${Proof(proofName)};`
    )
    this.proofs.set(proofName, this.id_allocator++)
    return this
  }

  /**
   * Creates a composite proof from the auth zone for the give non-fungibles.
   *
   * @param nonFungibleIds The non-fungible IDs
   * @param resourceAddress The resource address
   * @param proofName The name of the new proof
   * @returns
   */
  createProofFromAuthZoneByIds(
    nonFungibleIds: string[],
    resourceAddress: ResourceAddressType,
    proofName: string
  ): ManifestBuilder {
    this.instructions.push(
      `CREATE_PROOF_FROM_AUTH_ZONE_BY_IDS ${this.formatNonFungibleIds(
        nonFungibleIds
      )} ${ResourceAddress(resourceAddress)} ${Proof(proofName)};`
    )
    this.proofs.set(proofName, this.id_allocator++)
    return this
  }

  /**
   * Creates a proof from a bucket
   *
   * @param bucketName The bucket name
   * @param proofName The name of the new proof
   * @returns
   */
  createProofFromBucket(
    bucketName: string,
    proofName: string
  ): ManifestBuilder {
    this.instructions.push(
      `CREATE_PROOF_FROM_BUCKET ${Bucket(bucketName)} ${Proof(proofName)};`
    )
    this.proofs.set(proofName, this.id_allocator++)
    return this
  }

  /**
   * Clones a proof.
   *
   * @param proofName The proof name
   * @param cloneName The clone proof name
   * @returns
   */
  cloneProof(proofName: string, cloneName: string): ManifestBuilder {
    this.instructions.push(
      `CLONE_PROOF ${Proof(proofName)} ${Proof(cloneName)};`
    )
    this.proofs.set(cloneName, this.id_allocator++)
    return this
  }

  /**
   * Drops a proof.
   *
   * @param proofName The proof name
   * @returns
   */
  dropProof(proofName: string): ManifestBuilder {
    this.instructions.push(`DROP_PROOF ${Proof(proofName)};`)
    return this
  }

  /**
   * Calls a function on a blueprint.
   *
   * @param packageAddress  The package address
   * @param blueprintName  The blueprint name
   * @param functionName  The function name
   * @param args The arguments, which must be in manifest format, e.g. `1u8`, `"string"`, `Bucket("name")`
   */
  callFunction(
    packageAddress: PackageAddressType,
    blueprintName: string,
    functionName: string,
    args: string[]
  ): ManifestBuilder {
    this.instructions.push(
      `CALL_FUNCTION ${PackageAddress(
        packageAddress
      )} "${blueprintName}" "${functionName}" ${args.join(' ')};`
    )
    return this
  }

  /**
   * Calls a method on a component.
   *
   * @param componentAddress  The component address
   * @param methodName The method name
   * @param args The arguments, which must be in manifest format, e.g. `1u8`, `"string"`, `Bucket("name")`
   * @returns
   */
  callMethod(
    componentAddress: ComponentAddressType,
    methodName: string,
    args: string[]
  ): ManifestBuilder {
    this.instructions.push(
      `CALL_METHOD ${ComponentAddress(
        componentAddress
      )} "${methodName}" ${args.join(' ')};`
    )
    return this
  }

  /**
   * Publishes a package.
   * @param code_hash The package wasm code hash
   * @param abi_hash The package ABI hash
   */
  publishPackage(code_hash: string, abi_hash: string): ManifestBuilder {
    this.instructions.push(
      `PUBLISH_PACKAGE ${Blob(code_hash)} ${Blob(abi_hash)};`
    )
    return this
  }

  /**
   * Withdraws all the given resource from account.
   *
   * @param accountAddress The account component address
   * @param resourceAddress The resource address
   * @returns
   */
  withdrawFromAccount(
    accountAddress: AccountAddressType,
    resourceAddress: ResourceAddressType
  ): ManifestBuilder {
    this.instructions.push(
      `CALL_METHOD ${ComponentAddress(
        accountAddress
      )} "withdraw" ${ResourceAddress(resourceAddress)};`
    )
    return this
  }

  /**
   * Withdraws some amount of resource from account.
   *
   * @param accountAddress The account component address
   * @param amount The amount
   * @param resourceAddress The resource address
   * @returns
   */
  withdrawFromAccountByAmount(
    accountAddress: AccountAddressType,
    amount: number,
    resourceAddress: ResourceAddressType
  ): ManifestBuilder {
    this.instructions.push(
      `CALL_METHOD ${ComponentAddress(
        accountAddress
      )} "withdraw_by_amount" ${Decimal(amount)} ${ResourceAddress(
        resourceAddress
      )};`
    )
    return this
  }

  /**
   * Withdraws some non-fungibles from account.
   *
   * @param accountAddress The account component address
   * @param nonFungibleIds The non-fungible IDs
   * @param resourceAddress The resource address
   * @returns
   */
  withdrawFromAccountByIds(
    accountAddress: AccountAddressType,
    nonFungibleIds: string[],
    resourceAddress: ResourceAddressType
  ): ManifestBuilder {
    this.instructions.push(
      `CALL_METHOD ${ComponentAddress(
        accountAddress
      )} "withdraw_by_ids" ${this.formatNonFungibleIds(
        nonFungibleIds
      )} ${ResourceAddress(resourceAddress)};`
    )
    return this
  }

  /**
   * Creates proof of all the given resource from account.
   *
   * @param accountAddress The account component address
   * @param resourceAddress The resource address
   * @returns
   */
  createProofFromAccount(
    accountAddress: AccountAddressType,
    resourceAddress: ResourceAddressType
  ): ManifestBuilder {
    this.instructions.push(
      `CALL_METHOD ${ComponentAddress(
        accountAddress
      )} "create_proof" ${ResourceAddress(resourceAddress)};`
    )
    return this
  }

  /**
   * Creates proof of some amount of resource from account.
   *
   * @param accountAddress The account component address
   * @param amount The amount
   * @param resourceAddress The resource address
   * @returns
   */
  createProofFromAccountByAmount(
    accountAddress: AccountAddressType,
    amount: number,
    resourceAddress: ResourceAddressType
  ): ManifestBuilder {
    this.instructions.push(
      `CALL_METHOD ${ComponentAddress(
        accountAddress
      )} "create_proof_by_amount" ${Decimal(amount)} ${ResourceAddress(
        resourceAddress
      )};`
    )
    return this
  }

  /**
   * Creates proof of some non-fungibles from account.
   *
   * @param accountAddress The account component address
   * @param nonFungibleIds The non-fungible IDs
   * @param resourceAddress The resource address
   * @returns
   */
  createProofFromAccountByIds(
    accountAddress: ComponentAddressType,
    nonFungibleIds: string[],
    resourceAddress: ResourceAddressType
  ): ManifestBuilder {
    this.instructions.push(
      `CALL_METHOD ${ComponentAddress(
        accountAddress
      )} "create_proof_by_ids" ${this.formatNonFungibleIds(
        nonFungibleIds
      )} ${ResourceAddress(resourceAddress)};`
    )
    return this
  }

  /**
   * Burns a bucket
   *
   * @param bucketName The name of the bucket to burn
   * @returns
   */
  burnBucket(bucketName: string): ManifestBuilder {
    this.instructions.push(`BURN_BUCKET ${Bucket(bucketName)};`)
    return this
  }

  /**
   * Mints additional fungible token
   *
   * @param resourceAddress The resource address of the fungible resource
   * @param amount The amount to mint
   * @returns
   */
  mintFungible(
    resourceAddress: ResourceAddressType,
    amount: number
  ): ManifestBuilder {
    this.instructions.push(
      `MINT_FUNGIBLE ${ResourceAddress(resourceAddress)} ${Decimal(amount)};`
    )
    return this
  }

  /**
   * Builds a transaction manifest.
   *
   * @returns a transaction manifest
   */
  build(): Manifest {
    return new Manifest(this.instructions)
  }

  private formatNonFungibleIds(nonFungibleIds: string[]) {
    let ids = nonFungibleIds.map((id) => NonFungibleId(id))
    return TreeSet(BasicType.NonFungibleId, ids)
  }
}
