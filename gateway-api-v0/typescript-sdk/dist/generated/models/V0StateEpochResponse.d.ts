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
 * @interface V0StateEpochResponse
 */
export interface V0StateEpochResponse {
    /**
     * An integer between 0 and 10^10, marking the current epoch
     * @type {number}
     * @memberof V0StateEpochResponse
     */
    epoch: number;
}
/**
 * Check if a given object implements the V0StateEpochResponse interface.
 */
export declare function instanceOfV0StateEpochResponse(value: object): boolean;
export declare function V0StateEpochResponseFromJSON(json: any): V0StateEpochResponse;
export declare function V0StateEpochResponseFromJSONTyped(json: any, ignoreDiscriminator: boolean): V0StateEpochResponse;
export declare function V0StateEpochResponseToJSON(value?: V0StateEpochResponse | null): any;
