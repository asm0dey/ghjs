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
import { DatabaseSingleValueIssueCustomField } from './databaseSingleValueIssueCustomField';
import { ProjectCustomField } from './projectCustomField';
import { SingleVersionIssueCustomFieldAllOf } from './singleVersionIssueCustomFieldAllOf';
import { VersionBundleElement } from './versionBundleElement';

/**
* Represents the issue custom field of the `version` type that can only have a single value.
*/
export class SingleVersionIssueCustomField extends DatabaseSingleValueIssueCustomField {
    'value'?: VersionBundleElement;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "VersionBundleElement"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(SingleVersionIssueCustomField.attributeTypeMap);
    }
}

