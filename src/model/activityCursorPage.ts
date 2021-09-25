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
import { ActivityItem } from './activityItem';

/**
* Represents a page object that wraps a list of issue activities. The main advantage of the page in comparision to a list of activities is cursors. The page provides boundary marks that allow continuous iteration over the activities from the place the page is finished.
*/
export class ActivityCursorPage {
    'reverse'?: boolean;
    'beforeCursor'?: string;
    'afterCursor'?: string;
    'hasBefore'?: boolean;
    'hasAfter'?: boolean;
    'activities'?: Array<ActivityItem>;
    'id'?: string;
    '$type'?: string;

    static discriminator: string | undefined = "$type";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reverse",
            "baseName": "reverse",
            "type": "boolean"
        },
        {
            "name": "beforeCursor",
            "baseName": "beforeCursor",
            "type": "string"
        },
        {
            "name": "afterCursor",
            "baseName": "afterCursor",
            "type": "string"
        },
        {
            "name": "hasBefore",
            "baseName": "hasBefore",
            "type": "boolean"
        },
        {
            "name": "hasAfter",
            "baseName": "hasAfter",
            "type": "boolean"
        },
        {
            "name": "activities",
            "baseName": "activities",
            "type": "Array<ActivityItem>"
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
        return ActivityCursorPage.attributeTypeMap;
    }
}

