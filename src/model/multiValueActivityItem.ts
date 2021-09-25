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
import { ActivityItem } from './activityItem';
import { FilterField } from './filterField';
import { MultiValueActivityItemAllOf } from './multiValueActivityItemAllOf';
import { User } from './user';

/**
* Represents a change in an entity attribute that has type of `Array of &lt;Entities&gt;`.
*/
export class MultiValueActivityItem extends ActivityItem {
    'removed'?: object;
    'added'?: object;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
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
        return super.getAttributeTypeMap().concat(MultiValueActivityItem.attributeTypeMap);
    }
}

