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
import { CommandLimitedVisibilityAllOf } from './commandLimitedVisibilityAllOf';
import { CommandVisibility } from './commandVisibility';
import { User } from './user';
import { UserGroup } from './userGroup';

/**
* Stores the restricted visibility settings for the command.
*/
export class CommandLimitedVisibility extends CommandVisibility {
    'permittedGroups'?: Array<UserGroup>;
    'permittedUsers'?: Array<User>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "permittedGroups",
            "baseName": "permittedGroups",
            "type": "Array<UserGroup>"
        },
        {
            "name": "permittedUsers",
            "baseName": "permittedUsers",
            "type": "Array<User>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(CommandLimitedVisibility.attributeTypeMap);
    }
}

