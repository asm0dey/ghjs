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
import { DateIssueCustomFieldAllOf } from './dateIssueCustomFieldAllOf';
import { IssueCustomField } from './issueCustomField';
import { ProjectCustomField } from './projectCustomField';

/**
* Represents the all custom fields that may have multiple values in the issue.
*/
export class DatabaseMultiValueIssueCustomField extends IssueCustomField {
    'value'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(DatabaseMultiValueIssueCustomField.attributeTypeMap);
    }
}
