/* tslint:disable */
/* eslint-disable */
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

import { exists, mapValues } from '../runtime';
/**
 * 
 * @export
 * @interface SystemSubstateAllOf
 */
export interface SystemSubstateAllOf {
    /**
     * An integer between 0 and 10^10, marking the current epoch
     * @type {number}
     * @memberof SystemSubstateAllOf
     */
    epoch: number;
}

/**
 * Check if a given object implements the SystemSubstateAllOf interface.
 */
export function instanceOfSystemSubstateAllOf(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "epoch" in value;

    return isInstance;
}

export function SystemSubstateAllOfFromJSON(json: any): SystemSubstateAllOf {
    return SystemSubstateAllOfFromJSONTyped(json, false);
}

export function SystemSubstateAllOfFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemSubstateAllOf {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'epoch': json['epoch'],
    };
}

export function SystemSubstateAllOfToJSON(value?: SystemSubstateAllOf | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'epoch': value.epoch,
    };
}

