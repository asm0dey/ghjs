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
import { CommentAttachmentsActivityItemAllOf } from './commentAttachmentsActivityItemAllOf';
import { FilterField } from './filterField';
import { IssueAttachment } from './issueAttachment';
import { IssueComment } from './issueComment';
import { MultiValueActivityItem } from './multiValueActivityItem';
import { User } from './user';

/**
* Represents a change in the `attachments` attribute of an IssueComment.
*/
export class CommentAttachmentsActivityItem extends MultiValueActivityItem {
    'target'?: IssueComment;
    'removed'?: Array<IssueAttachment>;
    'added'?: Array<IssueAttachment>;

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
            "type": "Array<IssueAttachment>"
        },
        {
            "name": "added",
            "baseName": "added",
            "type": "Array<IssueAttachment>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CommentAttachmentsActivityItem.attributeTypeMap);
    }
}
