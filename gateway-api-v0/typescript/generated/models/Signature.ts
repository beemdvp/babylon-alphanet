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

import {
    EcdsaSecp256k1Signature,
    instanceOfEcdsaSecp256k1Signature,
    EcdsaSecp256k1SignatureFromJSON,
    EcdsaSecp256k1SignatureFromJSONTyped,
    EcdsaSecp256k1SignatureToJSON,
} from './EcdsaSecp256k1Signature';
import {
    EddsaEd25519Signature,
    instanceOfEddsaEd25519Signature,
    EddsaEd25519SignatureFromJSON,
    EddsaEd25519SignatureFromJSONTyped,
    EddsaEd25519SignatureToJSON,
} from './EddsaEd25519Signature';

/**
 * @type Signature
 * 
 * @export
 */
export type Signature = { keyType: 'EcdsaSecp256k1' } & EcdsaSecp256k1Signature | { keyType: 'EddsaEd25519' } & EddsaEd25519Signature;

export function SignatureFromJSON(json: any): Signature {
    return SignatureFromJSONTyped(json, false);
}

export function SignatureFromJSONTyped(json: any, ignoreDiscriminator: boolean): Signature {
    if ((json === undefined) || (json === null)) {
        return json;
    }
    switch (json['keyType']) {
        case 'EcdsaSecp256k1':
            return {...EcdsaSecp256k1SignatureFromJSONTyped(json, true), keyType: 'EcdsaSecp256k1'};
        case 'EddsaEd25519':
            return {...EddsaEd25519SignatureFromJSONTyped(json, true), keyType: 'EddsaEd25519'};
        default:
            throw new Error(`No variant of Signature exists with 'keyType=${json['keyType']}'`);
    }
}

export function SignatureToJSON(value?: Signature | null): any {
    if (value === undefined) {
        return undefined;
    }
    if (value === null) {
        return null;
    }
    switch (value['keyType']) {
        case 'EcdsaSecp256k1':
            return EcdsaSecp256k1SignatureToJSON(value);
        case 'EddsaEd25519':
            return EddsaEd25519SignatureToJSON(value);
        default:
            throw new Error(`No variant of Signature exists with 'keyType=${value['keyType']}'`);
    }

}

