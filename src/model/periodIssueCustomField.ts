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
import { IssueCustomField } from './issueCustomField';
import { PeriodIssueCustomFieldAllOf } from './periodIssueCustomFieldAllOf';
import { PeriodValue } from './periodValue';
import { ProjectCustomField } from './projectCustomField';

/**
* Represents the period field in the issue.
*/
export class PeriodIssueCustomField extends IssueCustomField {
    'value'?: PeriodValue;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "PeriodValue"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(PeriodIssueCustomField.attributeTypeMap);
    }
}

