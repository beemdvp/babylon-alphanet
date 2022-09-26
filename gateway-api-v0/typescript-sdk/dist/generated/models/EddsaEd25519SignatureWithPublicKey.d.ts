/**
 * Babylon Alphanet v0 API
 * No description provided (generated by Openapi Generator https://github.com/openapitools/openapi-generator)
 *
 * The version of the OpenAPI document: 0.1.0
 *
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */
import type { EddsaEd25519PublicKey } from './EddsaEd25519PublicKey';
import type { EddsaEd25519Signature } from './EddsaEd25519Signature';
import type { PublicKeyType } from './PublicKeyType';
/**
 * The EDDSA public key and signature
 * @export
 * @interface EddsaEd25519SignatureWithPublicKey
 */
export interface EddsaEd25519SignatureWithPublicKey {
    /**
     *
     * @type {PublicKeyType}
     * @memberof EddsaEd25519SignatureWithPublicKey
     */
    key_type: PublicKeyType;
    /**
     *
     * @type {EddsaEd25519PublicKey}
     * @memberof EddsaEd25519SignatureWithPublicKey
     */
    public_key: EddsaEd25519PublicKey;
    /**
     *
     * @type {EddsaEd25519Signature}
     * @memberof EddsaEd25519SignatureWithPublicKey
     */
    signature: EddsaEd25519Signature;
}
/**
 * Check if a given object implements the EddsaEd25519SignatureWithPublicKey interface.
 */
export declare function instanceOfEddsaEd25519SignatureWithPublicKey(value: object): boolean;
export declare function EddsaEd25519SignatureWithPublicKeyFromJSON(json: any): EddsaEd25519SignatureWithPublicKey;
export declare function EddsaEd25519SignatureWithPublicKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): EddsaEd25519SignatureWithPublicKey;
export declare function EddsaEd25519SignatureWithPublicKeyToJSON(value?: EddsaEd25519SignatureWithPublicKey | null): any;
