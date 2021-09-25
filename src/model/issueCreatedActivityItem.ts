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
import { ActivityCategory } from './activityCategory';
import { CreatedDeletedActivityItem } from './createdDeletedActivityItem';
import { FilterField } from './filterField';
import { Issue } from './issue';
import { IssueCreatedActivityItemAllOf } from './issueCreatedActivityItemAllOf';
import { User } from './user';

/**
* Represents an event when a user creates a new issue.
*/
export class IssueCreatedActivityItem extends CreatedDeletedActivityItem {
    'target'?: Issue;
    'removed'?: Array<Issue>;
    'added'?: Array<Issue>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "target",
            "baseName": "target",
            "type": "Issue"
        },
        {
            "name": "removed",
            "baseName": "removed",
            "type": "Array<Issue>"
        },
        {
            "name": "added",
            "baseName": "added",
            "type": "Array<Issue>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(IssueCreatedActivityItem.attributeTypeMap);
    }
}
