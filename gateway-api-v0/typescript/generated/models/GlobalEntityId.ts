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
import type { EntityType } from './EntityType';
import {
    EntityTypeFromJSON,
    EntityTypeFromJSONTyped,
    EntityTypeToJSON,
} from './EntityType';

/**
 * 
 * @export
 * @interface GlobalEntityId
 */
export interface GlobalEntityId {
    /**
     * 
     * @type {EntityType}
     * @memberof GlobalEntityId
     */
    entityType: EntityType;
    /**
     * The hex-encoded bytes of the entity address
     * @type {string}
     * @memberof GlobalEntityId
     */
    entityAddressHex: string;
    /**
     * The hex-encoded bytes of the entity's global address. This is currently the same as entity_address, but may change in future.
     * @type {string}
     * @memberof GlobalEntityId
     */
    globalAddressHex: string;
    /**
     * The Bech32m-encoded human readable version of the entity's global address
     * @type {string}
     * @memberof GlobalEntityId
     */
    globalAddress: string;
}

/**
 * Check if a given object implements the GlobalEntityId interface.
 */
export function instanceOfGlobalEntityId(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "entityType" in value;
    isInstance = isInstance && "entityAddressHex" in value;
    isInstance = isInstance && "globalAddressHex" in value;
    isInstance = isInstance && "globalAddress" in value;

    return isInstance;
}

export function GlobalEntityIdFromJSON(json: any): GlobalEntityId {
    return GlobalEntityIdFromJSONTyped(json, false);
}

export function GlobalEntityIdFromJSONTyped(json: any, ignoreDiscriminator: boolean): GlobalEntityId {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entityType': EntityTypeFromJSON(json['entity_type']),
        'entityAddressHex': json['entity_address_hex'],
        'globalAddressHex': json['global_address_hex'],
        'globalAddress': json['global_address'],
    };
}

export function GlobalEntityIdToJSON(value?: GlobalEntityId | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entity_type': EntityTypeToJSON(value.entityType),
        'entity_address_hex': value.entityAddressHex,
        'global_address_hex': value.globalAddressHex,
        'global_address': value.globalAddress,
    };
}

