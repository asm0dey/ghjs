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
import { IssueWorkItem } from './issueWorkItem';
import { WorkItemType } from './workItemType';

export class WorkItemTypeActivityItemAllOf {
    'target'?: IssueWorkItem;
    'removed'?: Array<WorkItemType>;
    'added'?: Array<WorkItemType>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "target",
            "baseName": "target",
            "type": "IssueWorkItem"
        },
        {
            "name": "removed",
            "baseName": "removed",
            "type": "Array<WorkItemType>"
        },
        {
            "name": "added",
            "baseName": "added",
            "type": "Array<WorkItemType>"
        }    ];

    static getAttributeTypeMap() {
        return WorkItemTypeActivityItemAllOf.attributeTypeMap;
    }
}
