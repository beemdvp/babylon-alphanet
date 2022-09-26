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
 * @interface V0StateComponentRequest
 */
export interface V0StateComponentRequest {
    /**
     * The Bech32m-encoded human readable version of the component's global address
     * @type {string}
     * @memberof V0StateComponentRequest
     */
    component_address: string;
}
/**
 * Check if a given object implements the V0StateComponentRequest interface.
 */
export declare function instanceOfV0StateComponentRequest(value: object): boolean;
export declare function V0StateComponentRequestFromJSON(json: any): V0StateComponentRequest;
export declare function V0StateComponentRequestFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0StateComponentRequest;
export declare function V0StateComponentRequestToJSON(value?: V0StateComponentRequest | null): any;
