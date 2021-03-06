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
import { Issue } from './issue';
import { User } from './user';

/**
* Represents a user who subscribed for notifications about an issue.
*/
export class IssueWatcher {
    'user'?: User;
    'issue'?: Issue;
    'isStarred'?: boolean;
    'id'?: string;
    '$type'?: string;

    static discriminator: string | undefined = "$type";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "user",
            "baseName": "user",
            "type": "User"
        },
        {
            "name": "issue",
            "baseName": "issue",
            "type": "Issue"
        },
        {
            "name": "isStarred",
            "baseName": "isStarred",
            "type": "boolean"
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
        return IssueWatcher.attributeTypeMap;
    }
}

