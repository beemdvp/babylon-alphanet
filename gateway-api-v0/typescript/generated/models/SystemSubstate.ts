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
import type { SubstateBase } from './SubstateBase';
import {
    SubstateBaseFromJSON,
    SubstateBaseFromJSONTyped,
    SubstateBaseToJSON,
} from './SubstateBase';
import type { SubstateType } from './SubstateType';
import {
    SubstateTypeFromJSON,
    SubstateTypeFromJSONTyped,
    SubstateTypeToJSON,
} from './SubstateType';
import type { SystemSubstateAllOf } from './SystemSubstateAllOf';
import {
    SystemSubstateAllOfFromJSON,
    SystemSubstateAllOfFromJSONTyped,
    SystemSubstateAllOfToJSON,
} from './SystemSubstateAllOf';

/**
 * 
 * @export
 * @interface SystemSubstate
 */
export interface SystemSubstate {
    /**
     * 
     * @type {EntityType}
     * @memberof SystemSubstate
     */
    entityType: EntityType;
    /**
     * 
     * @type {SubstateType}
     * @memberof SystemSubstate
     */
    substateType: SubstateType;
    /**
     * An integer between 0 and 10^10, marking the current epoch
     * @type {number}
     * @memberof SystemSubstate
     */
    epoch: number;
}

/**
 * Check if a given object implements the SystemSubstate interface.
 */
export function instanceOfSystemSubstate(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "entityType" in value;
    isInstance = isInstance && "substateType" in value;
    isInstance = isInstance && "epoch" in value;

    return isInstance;
}

export function SystemSubstateFromJSON(json: any): SystemSubstate {
    return SystemSubstateFromJSONTyped(json, false);
}

export function SystemSubstateFromJSONTyped(json: any, ignoreDiscriminator: boolean): SystemSubstate {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'entityType': EntityTypeFromJSON(json['entity_type']),
        'substateType': SubstateTypeFromJSON(json['substate_type']),
        'epoch': json['epoch'],
    };
}

export function SystemSubstateToJSON(value?: SystemSubstate | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'entity_type': EntityTypeToJSON(value.entityType),
        'substate_type': SubstateTypeToJSON(value.substateType),
        'epoch': value.epoch,
    };
}

