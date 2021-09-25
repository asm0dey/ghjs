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
import { IssueLinkType } from './issueLinkType';

/**
* Represents issue links of a particular link type (for example, \'relates to\').
*/
export class IssueLink {
    'direction'?: IssueLink.DirectionEnum;
    'linkType'?: IssueLinkType;
    'issues'?: Array<Issue>;
    'trimmedIssues'?: Array<Issue>;
    'id'?: string;
    '$type'?: string;

    static discriminator: string | undefined = "$type";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "direction",
            "baseName": "direction",
            "type": "IssueLink.DirectionEnum"
        },
        {
            "name": "linkType",
            "baseName": "linkType",
            "type": "IssueLinkType"
        },
        {
            "name": "issues",
            "baseName": "issues",
            "type": "Array<Issue>"
        },
        {
            "name": "trimmedIssues",
            "baseName": "trimmedIssues",
            "type": "Array<Issue>"
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
        return IssueLink.attributeTypeMap;
    }
}

export namespace IssueLink {
    export enum DirectionEnum {
        Outward = <any> 'OUTWARD',
        Inward = <any> 'INWARD',
        Both = <any> 'BOTH'
    }
}