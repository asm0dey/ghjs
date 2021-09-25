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
import { Project } from './project';

/**
* Represents custom field settings for the particular project.
*/
export class ProjectCustomField {
    'field'?: CustomField;
    'project'?: Project;
    'canBeEmpty'?: boolean;
    'emptyFieldText'?: string;
    'ordinal'?: number;
    'isPublic'?: boolean;
    'hasRunningJob'?: boolean;
    'id'?: string;
    '$type'?: string;

    static discriminator: string | undefined = "$type";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "field",
            "baseName": "field",
            "type": "CustomField"
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "Project"
        },
        {
            "name": "canBeEmpty",
            "baseName": "canBeEmpty",
            "type": "boolean"
        },
        {
            "name": "emptyFieldText",
            "baseName": "emptyFieldText",
            "type": "string"
        },
        {
            "name": "ordinal",
            "baseName": "ordinal",
            "type": "number"
        },
        {
            "name": "isPublic",
            "baseName": "isPublic",
            "type": "boolean"
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
        return ProjectCustomField.attributeTypeMap;
    }
}

