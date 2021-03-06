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
import { CustomField } from './customField';

export class CustomFilterFieldAllOf {
    'customField'?: CustomField;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "customField",
            "baseName": "customField",
            "type": "CustomField"
        }    ];

    static getAttributeTypeMap() {
        return CustomFilterFieldAllOf.attributeTypeMap;
    }
}

