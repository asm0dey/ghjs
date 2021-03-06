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
import { ExternalIssue } from './externalIssue';
import { IssueAttachment } from './issueAttachment';
import { IssueComment } from './issueComment';
import { IssueCustomField } from './issueCustomField';
import { IssueLink } from './issueLink';
import { IssueTag } from './issueTag';
import { IssueVoters } from './issueVoters';
import { IssueWatchers } from './issueWatchers';
import { Project } from './project';
import { User } from './user';
import { Visibility } from './visibility';

/**
* Represents an issue in YouTrack.
*/
export class Issue {
    'idReadable'?: string;
    'created'?: number;
    'updated'?: number;
    'resolved'?: number;
    'numberInProject'?: number;
    'project'?: Project;
    'summary'?: string;
    'description'?: string;
    'usesMarkdown'?: boolean;
    'wikifiedDescription'?: string;
    'reporter'?: User;
    'updater'?: User;
    'draftOwner'?: User;
    'isDraft'?: boolean;
    'visibility'?: Visibility;
    'votes'?: number;
    'comments'?: Array<IssueComment>;
    'commentsCount'?: number;
    'tags'?: Array<IssueTag>;
    'links'?: Array<IssueLink>;
    'externalIssue'?: ExternalIssue;
    'customFields'?: Array<IssueCustomField>;
    'voters'?: IssueVoters;
    'watchers'?: IssueWatchers;
    'attachments'?: Array<IssueAttachment>;
    'subtasks'?: IssueLink;
    'parent'?: IssueLink;
    'id'?: string;
    '$type'?: string;

    static discriminator: string | undefined = "$type";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "idReadable",
            "baseName": "idReadable",
            "type": "string"
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
            "name": "resolved",
            "baseName": "resolved",
            "type": "number"
        },
        {
            "name": "numberInProject",
            "baseName": "numberInProject",
            "type": "number"
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "Project"
        },
        {
            "name": "summary",
            "baseName": "summary",
            "type": "string"
        },
        {
            "name": "description",
            "baseName": "description",
            "type": "string"
        },
        {
            "name": "usesMarkdown",
            "baseName": "usesMarkdown",
            "type": "boolean"
        },
        {
            "name": "wikifiedDescription",
            "baseName": "wikifiedDescription",
            "type": "string"
        },
        {
            "name": "reporter",
            "baseName": "reporter",
            "type": "User"
        },
        {
            "name": "updater",
            "baseName": "updater",
            "type": "User"
        },
        {
            "name": "draftOwner",
            "baseName": "draftOwner",
            "type": "User"
        },
        {
            "name": "isDraft",
            "baseName": "isDraft",
            "type": "boolean"
        },
        {
            "name": "visibility",
            "baseName": "visibility",
            "type": "Visibility"
        },
        {
            "name": "votes",
            "baseName": "votes",
            "type": "number"
        },
        {
            "name": "comments",
            "baseName": "comments",
            "type": "Array<IssueComment>"
        },
        {
            "name": "commentsCount",
            "baseName": "commentsCount",
            "type": "number"
        },
        {
            "name": "tags",
            "baseName": "tags",
            "type": "Array<IssueTag>"
        },
        {
            "name": "links",
            "baseName": "links",
            "type": "Array<IssueLink>"
        },
        {
            "name": "externalIssue",
            "baseName": "externalIssue",
            "type": "ExternalIssue"
        },
        {
            "name": "customFields",
            "baseName": "customFields",
            "type": "Array<IssueCustomField>"
        },
        {
            "name": "voters",
            "baseName": "voters",
            "type": "IssueVoters"
        },
        {
            "name": "watchers",
            "baseName": "watchers",
            "type": "IssueWatchers"
        },
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<IssueAttachment>"
        },
        {
            "name": "subtasks",
            "baseName": "subtasks",
            "type": "IssueLink"
        },
        {
            "name": "parent",
            "baseName": "parent",
            "type": "IssueLink"
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
        return Issue.attributeTypeMap;
    }
}

