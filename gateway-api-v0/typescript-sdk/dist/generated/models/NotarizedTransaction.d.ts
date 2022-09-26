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
import type { Signature } from './Signature';
import type { SignedTransactionIntent } from './SignedTransactionIntent';
/**
 *
 * @export
 * @interface NotarizedTransaction
 */
export interface NotarizedTransaction {
    /**
     * The hex-encoded double-SHA256 hash of the notarized transaction payload. Also known as the payload_hash or the notarized_transaction_hash.
     * @type {string}
     * @memberof NotarizedTransaction
     */
    hash: string;
    /**
     * The hex-encoded full notarized transaction payload
     * @type {string}
     * @memberof NotarizedTransaction
     */
    payload_hex: string;
    /**
     *
     * @type {SignedTransactionIntent}
     * @memberof NotarizedTransaction
     */
    signed_intent: SignedTransactionIntent;
    /**
     *
     * @type {Signature}
     * @memberof NotarizedTransaction
     */
    notary_signature: Signature;
}
/**
 * Check if a given object implements the NotarizedTransaction interface.
 */
export declare function instanceOfNotarizedTransaction(value: object): boolean;
export declare function NotarizedTransactionFromJSON(json: any): NotarizedTransaction;
export declare function NotarizedTransactionFromJSONTyped(json: any, ignoreDiscriminator: boolean): NotarizedTransaction;
export declare function NotarizedTransactionToJSON(value?: NotarizedTransaction | null): any;
