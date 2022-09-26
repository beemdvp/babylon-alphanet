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
/**
 *
 * @export
 * @interface V0TransactionStatusRequest
 */
export interface V0TransactionStatusRequest {
    /**
     * A hex-encoded transaction intent hash. SHA256(SHA256(compiled_transaction_intent))
     * @type {string}
     * @memberof V0TransactionStatusRequest
     */
    intent_hash: string;
}
/**
 * Check if a given object implements the V0TransactionStatusRequest interface.
 */
export declare function instanceOfV0TransactionStatusRequest(value: object): boolean;
export declare function V0TransactionStatusRequestFromJSON(json: any): V0TransactionStatusRequest;
export declare function V0TransactionStatusRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0TransactionStatusRequest;
export declare function V0TransactionStatusRequestToJSON(value?: V0TransactionStatusRequest | null): any;
