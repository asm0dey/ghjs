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
import { AgileColumnFieldValueAllOf } from './agileColumnFieldValueAllOf';
import { DatabaseAttributeValue } from './databaseAttributeValue';

/**
* Represents a single swimlane in case of AttributeBasedSwimlaneSettings.
*/
export class SwimlaneEntityAttributeValue extends DatabaseAttributeValue {
    'name'?: string;
    'isResolved'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "isResolved",
            "baseName": "isResolved",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SwimlaneEntityAttributeValue.attributeTypeMap);
    }
}

