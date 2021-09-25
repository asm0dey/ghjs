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
import { ProjectCustomField } from './projectCustomField';
import { TextFieldValue } from './textFieldValue';
import { TextIssueCustomFieldAllOf } from './textIssueCustomFieldAllOf';

/**
* Represents the issue custom field of the `text` type.
*/
export class TextIssueCustomField extends IssueCustomField {
    'value'?: TextFieldValue;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "value",
            "baseName": "value",
            "type": "TextFieldValue"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(TextIssueCustomField.attributeTypeMap);
    }
}

