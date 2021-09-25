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
import { CustomFieldActivityItemAllOf } from './customFieldActivityItemAllOf';
import { FilterField } from './filterField';
import { Issue } from './issue';
import { SingleValueActivityItem } from './singleValueActivityItem';
import { User } from './user';

/**
* Represents the change in the project attribute on an Issue.
*/
export class ProjectActivityItem extends SingleValueActivityItem {
    'target'?: Issue;
    'removed'?: object;
    'added'?: object;

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
            "type": "object"
        },
        {
            "name": "added",
            "baseName": "added",
            "type": "object"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(ProjectActivityItem.attributeTypeMap);
    }
}
