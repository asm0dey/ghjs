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
import { IssueComment } from './issueComment';
import { User } from './user';
import { Visibility } from './visibility';

/**
* Represents a file that is attached to an issue or a comment.
*/
export class IssueAttachment {
    'name'?: string;
    'author'?: User;
    'created'?: number;
    'updated'?: number;
    'size'?: number;
    'extension'?: string;
    'charset'?: string;
    'mimeType'?: string;
    'metaData'?: string;
    'draft'?: boolean;
    'removed'?: boolean;
    'base64Content'?: string;
    'url'?: string;
    'visibility'?: Visibility;
    'issue'?: Issue;
    'comment'?: IssueComment;
    'thumbnailURL'?: string;
    'id'?: string;
    '$type'?: string;

    static discriminator: string | undefined = "$type";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "name",
            "baseName": "name",
            "type": "string"
        },
        {
            "name": "author",
            "baseName": "author",
            "type": "User"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "number"
        },
        {
            "name": "size",
            "baseName": "size",
            "type": "number"
        },
        {
            "name": "extension",
            "baseName": "extension",
            "type": "string"
        },
        {
            "name": "charset",
            "baseName": "charset",
            "type": "string"
        },
        {
            "name": "mimeType",
            "baseName": "mimeType",
            "type": "string"
        },
        {
            "name": "metaData",
            "baseName": "metaData",
            "type": "string"
        },
        {
            "name": "draft",
            "baseName": "draft",
            "type": "boolean"
        },
        {
            "name": "removed",
            "baseName": "removed",
            "type": "boolean"
        },
        {
            "name": "base64Content",
            "baseName": "base64Content",
            "type": "string"
        },
        {
            "name": "url",
            "baseName": "url",
            "type": "string"
        },
        {
            "name": "visibility",
            "baseName": "visibility",
            "type": "Visibility"
        },
        {
            "name": "issue",
            "baseName": "issue",
            "type": "Issue"
        },
        {
            "name": "comment",
            "baseName": "comment",
            "type": "IssueComment"
        },
        {
            "name": "thumbnailURL",
            "baseName": "thumbnailURL",
            "type": "string"
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
        return IssueAttachment.attributeTypeMap;
    }
}

