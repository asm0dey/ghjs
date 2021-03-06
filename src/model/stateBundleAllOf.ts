/**
 * YouTrack REST API
 * YouTrack issue tracking and project management system
 *
 * The version of the OpenAPI document: 2021.4
 * 
 *
 * NOTE: This class is auto generated by OpenAPI Generator (https://openapi-generator.tech).
 * https://openapi-generator.tech
 * Do not edit the class manually.
 */

import { RequestFile } from './models';
import { StateBundleElement } from './stateBundleElement';

export class StateBundleAllOf {
    'values'?: Array<StateBundleElement>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<StateBundleElement>"
        }    ];

    static getAttributeTypeMap() {
        return StateBundleAllOf.attributeTypeMap;
    }
}

