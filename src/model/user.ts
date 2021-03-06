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
import { IssueTag } from './issueTag';
import { SavedQuery } from './savedQuery';
import { UserProfiles } from './userProfiles';

/**
* Represents a user in YouTrack. Please note that the read-only properties of a user account, like              credentials, or email and so on, you can only change in               <a href=\"https://www.jetbrains.com/help/youtrack/devportal/?Hub-REST-API\">Hub REST API</a>.
*/
export class User {
    'login'?: string;
    'fullName'?: string;
    'email'?: string;
    'jabberAccountName'?: string;
    'ringId'?: string;
    'guest'?: boolean;
    'online'?: boolean;
    'banned'?: boolean;
    'tags'?: Array<IssueTag>;
    'savedQueries'?: Array<SavedQuery>;
    'avatarUrl'?: string;
    'profiles'?: UserProfiles;
    'id'?: string;
    '$type'?: string;

    static discriminator: string | undefined = "$type";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "login",
            "baseName": "login",
            "type": "string"
        },
        {
            "name": "fullName",
            "baseName": "fullName",
            "type": "string"
        },
        {
            "name": "email",
            "baseName": "email",
            "type": "string"
        },
        {
            "name": "jabberAccountName",
            "baseName": "jabberAccountName",
            "type": "string"
        },
        {
            "name": "ringId",
            "baseName": "ringId",
            "type": "string"
        },
        {
            "name": "guest",
            "baseName": "guest",
            "type": "boolean"
        },
        {
            "name": "online",
            "baseName": "online",
            "type": "boolean"
        },
        {
            "name": "banned",
            "baseName": "banned",
            "type": "boolean"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<IssueTag>"
        },
        {
            "name": "savedQueries",
            "baseName": "savedQueries",
            "type": "Array<SavedQuery>"
        },
        {
            "name": "avatarUrl",
            "baseName": "avatarUrl",
            "type": "string"
        },
        {
            "name": "profiles",
            "baseName": "profiles",
            "type": "UserProfiles"
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
        return User.attributeTypeMap;
    }
}

