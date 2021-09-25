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
import { FilterField } from './filterField';
import { SimpleValueActivityItem } from './simpleValueActivityItem';
import { User } from './user';
import { UsesMarkupActivityItemAllOf } from './usesMarkupActivityItemAllOf';

/**
* Represents the change of the boolean flag that indicates whether YouTrack Wiki or Markdown is used in the target entity as a markup language. If \"true\", then the markdown is used. Otherwise, YouTrack Wiki markup.
*/
export class UsesMarkupActivityItem extends SimpleValueActivityItem {
    // @ts-ignore
    'removed'?: boolean;
    // @ts-ignore
    'added'?: boolean;
    'markup'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "removed",
            "baseName": "removed",
            "type": "boolean"
        },
        {
            "name": "added",
            "baseName": "added",
            "type": "boolean"
        },
        {
            "name": "markup",
            "baseName": "markup",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(UsesMarkupActivityItem.attributeTypeMap);
    }
}

