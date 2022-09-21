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
import type { DataStruct } from './DataStruct';
import {
    DataStructFromJSON,
    DataStructFromJSONTyped,
    DataStructToJSON,
} from './DataStruct';

/**
 * Only present if the non fungible isn't deleted
 * @export
 * @interface NonFungibleData
 */
export interface NonFungibleData {
    /**
     * 
     * @type {DataStruct}
     * @memberof NonFungibleData
     */
    immutableData: DataStruct;
    /**
     * 
     * @type {DataStruct}
     * @memberof NonFungibleData
     */
    mutableData: DataStruct;
}

/**
 * Check if a given object implements the NonFungibleData interface.
 */
export function instanceOfNonFungibleData(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "immutableData" in value;
    isInstance = isInstance && "mutableData" in value;

    return isInstance;
}

export function NonFungibleDataFromJSON(json: any): NonFungibleData {
    return NonFungibleDataFromJSONTyped(json, false);
}

export function NonFungibleDataFromJSONTyped(json: any, ignoreDiscriminator: boolean): NonFungibleData {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'immutableData': DataStructFromJSON(json['immutable_data']),
        'mutableData': DataStructFromJSON(json['mutable_data']),
    };
}

export function NonFungibleDataToJSON(value?: NonFungibleData | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'immutable_data': DataStructToJSON(value.immutableData),
        'mutable_data': DataStructToJSON(value.mutableData),
    };
}

