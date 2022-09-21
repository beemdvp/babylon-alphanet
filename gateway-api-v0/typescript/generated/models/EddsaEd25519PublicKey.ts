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
import type { PublicKeyType } from './PublicKeyType';
import {
    PublicKeyTypeFromJSON,
    PublicKeyTypeFromJSONTyped,
    PublicKeyTypeToJSON,
} from './PublicKeyType';

/**
 * 
 * @export
 * @interface EddsaEd25519PublicKey
 */
export interface EddsaEd25519PublicKey {
    /**
     * 
     * @type {PublicKeyType}
     * @memberof EddsaEd25519PublicKey
     */
    keyType: PublicKeyType;
    /**
     * The hex-encoded compressed EdDSA Ed25519 public key (32 bytes)
     * @type {string}
     * @memberof EddsaEd25519PublicKey
     */
    keyHex: string;
}

/**
 * Check if a given object implements the EddsaEd25519PublicKey interface.
 */
export function instanceOfEddsaEd25519PublicKey(value: object): boolean {
    let isInstance = true;
    isInstance = isInstance && "keyType" in value;
    isInstance = isInstance && "keyHex" in value;

    return isInstance;
}

export function EddsaEd25519PublicKeyFromJSON(json: any): EddsaEd25519PublicKey {
    return EddsaEd25519PublicKeyFromJSONTyped(json, false);
}

export function EddsaEd25519PublicKeyFromJSONTyped(json: any, ignoreDiscriminator: boolean): EddsaEd25519PublicKey {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    return {
        
        'keyType': PublicKeyTypeFromJSON(json['key_type']),
        'keyHex': json['key_hex'],
    };
}

export function EddsaEd25519PublicKeyToJSON(value?: EddsaEd25519PublicKey | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    return {
        
        'key_type': PublicKeyTypeToJSON(value.keyType),
        'key_hex': value.keyHex,
    };
}

