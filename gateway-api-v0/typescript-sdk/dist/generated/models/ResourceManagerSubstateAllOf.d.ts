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
import type { ResourceManagerSubstateAllOfMetadata } from './ResourceManagerSubstateAllOfMetadata';
import type { ResourceType } from './ResourceType';
/**
 *
 * @export
 * @interface ResourceManagerSubstateAllOf
 */
export interface ResourceManagerSubstateAllOf {
    /**
     *
     * @type {ResourceType}
     * @memberof ResourceManagerSubstateAllOf
     */
    resource_type: ResourceType;
    /**
     *
     * @type {number}
     * @memberof ResourceManagerSubstateAllOf
     */
    fungible_divisibility?: number;
    /**
     *
     * @type {Array<ResourceManagerSubstateAllOfMetadata>}
     * @memberof ResourceManagerSubstateAllOf
     */
    metadata: Array<ResourceManagerSubstateAllOfMetadata>;
    /**
     * A decimal-string-encoded integer between 0 and 2^255-1, which represents the total number of 10^(-18) subunits in
     * the total supply of this resource.
     * @type {string}
     * @memberof ResourceManagerSubstateAllOf
     */
    total_supply_attos: string;
}
/**
 * Check if a given object implements the ResourceManagerSubstateAllOf interface.
 */
export declare function instanceOfResourceManagerSubstateAllOf(value: object): boolean;
export declare function ResourceManagerSubstateAllOfFromJSON(json: any): ResourceManagerSubstateAllOf;
export declare function ResourceManagerSubstateAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): ResourceManagerSubstateAllOf;
export declare function ResourceManagerSubstateAllOfToJSON(value?: ResourceManagerSubstateAllOf | null): any;
