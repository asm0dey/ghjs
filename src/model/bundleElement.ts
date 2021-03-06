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
import { Bundle } from './bundle';
import { FieldStyle } from './fieldStyle';

/**
* Represents a field value in YouTrack.
*/
export class BundleElement {
    'name'?: string;
    'bundle'?: Bundle;
    'description'?: string;
    'ordinal'?: number;
    'color'?: FieldStyle;
    'hasRunningJob'?: boolean;
    'id'?: string;
    '$type'?: string;

    static discriminator: string | undefined = "$type";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "bundle",
            "baseName": "bundle",
            "type": "Bundle"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "ordinal",
            "baseName": "ordinal",
            "type": "number"
        },
        {
            "name": "color",
            "baseName": "color",
            "type": "FieldStyle"
        },
        {
            "name": "hasRunningJob",
            "baseName": "hasRunningJob",
            "type": "boolean"
        },
        {
            "name": "id",
            "baseName": "id",
            "type": "string"
        },
        {
            "name": "$type",
            "baseName": "$type",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return BundleElement.attributeTypeMap;
    }
}

