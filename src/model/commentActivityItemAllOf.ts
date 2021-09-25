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
import { IssueComment } from './issueComment';
import { UserGroup } from './userGroup';

export class CommentActivityItemAllOf {
    'target'?: IssueComment;
    'removed'?: Array<IssueComment>;
    'added'?: Array<IssueComment>;
    'authorGroup'?: UserGroup;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "target",
            "baseName": "target",
            "type": "IssueComment"
        },
        {
            "name": "removed",
            "baseName": "removed",
            "type": "Array<IssueComment>"
        },
        {
            "name": "added",
            "baseName": "added",
            "type": "Array<IssueComment>"
        },
        {
            "name": "authorGroup",
            "baseName": "authorGroup",
            "type": "UserGroup"
        }    ];

    static getAttributeTypeMap() {
        return CommentActivityItemAllOf.attributeTypeMap;
    }
}

