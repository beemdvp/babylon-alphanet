import { err, ok, ResultAsync } from "neverthrow";
import { errorIdentity } from "./error-identity";
import { fromResponse } from "./utils";
import { ErrorResponse } from "./_types";

export const intentStatus = {
  CommittedSuccess: "CommittedSuccess",
  CommittedFailure: "CommittedFailure",
  InMempool: "InMempool",
  Rejected: "Rejected",
  Unknown: "Unknown",
} as const;

export const transactionStatus = {
  Succeeded: "Succeeded",
  Failed: "Failed",
  Rejected: "Rejected",
} as const;

export type IntentStatus = keyof typeof intentStatus;

type SignatureWithPublicKey = {};

type TransactionHeader = {};

type TransactionIntent = {
  hash: string;
  header: TransactionHeader;
  manifest: string;
};

type SignedTransactionIntent = {
  hash: string;
  intent: TransactionIntent;
  intent_signatures: SignatureWithPublicKey[];
};

type Signature = {};

type NotarizedTransaction = {
  hash: string;
  payload: string;
  signed_intent: SignedTransactionIntent;
  notary_signature: Signature;
};

type FeeSummary = {};

type EntityType = {};

type GlobalEntityId = {
  entity_type: EntityType;
  entity_address_hex: string;
  global_address_hex: string;
  global_address: string;
};

type StateUpdates = {
  new_global_entities: GlobalEntityId[];
};

type SborData = {
  data_bytes: string;
  data_json: string;
};

export type TransactionReceipt = {
  status: keyof typeof transactionStatus;
  fee_summary: FeeSummary;
  state_updates: StateUpdates;
};

type CommittedTransaction = {
  state_version: number;
  notarized_transaction: NotarizedTransaction;
  receipt: TransactionReceipt;
};

const CoreApi = (baseUrl: string) => {
  const request = <T>(data: any, ...input: Parameters<typeof fetch>) => {
    const headers = input[1]?.headers || {};
    return ResultAsync.fromPromise(
      fetch(input[0], {
        ...input[1],
        method: "POST",
        headers: {
          ...headers,
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }),
      (error) => error as Error
    )
      .andThen((response) => fromResponse<T>(response))
      .andThen(({ data, status }) => {
        return status === 200
          ? ok<T, never>(data)
          : err<never, ErrorResponse>(data as ErrorResponse);
      })
      .mapErr(errorIdentity("Core API error"));
  };

  return {
    /**
     * Get the current epoch for transaction building
     */
    epoch: () => request<{ epoch: number }>({}, `${baseUrl}/v0/state/epoch`),
    /**
     * submit a notarized transaction
     */
    submitTransaction: (notarized_transaction_hex: string) =>
      request<{ duplicate: boolean }>(
        {
          notarized_transaction_hex,
        },
        `${baseUrl}/v0/transaction/submit`
      ),

    /**
     * poll until it’s committed (using the intent hash you have saved)
     */
    status: (intent_hash: string) =>
      request<{ intent_status: keyof typeof intentStatus }>(
        { intent_hash },
        `${baseUrl}/v0/transaction/status`
      ),
    /**
     *
     * see the receipt
     */
    receipt: (intent_hash: string) =>
      request<{
        committed: CommittedTransaction;
      }>({ intent_hash }, `${baseUrl}/v0/transaction/receipt`),
  };
};

export const coreApi = CoreApi("https://alphanet.radixdlt.com");
