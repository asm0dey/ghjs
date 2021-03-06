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
import { User } from './user';
import { UserGroup } from './userGroup';

export class WatchFolderAllOf {
    'owner'?: User;
    'visibleFor'?: UserGroup;
    'updateableBy'?: UserGroup;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "owner",
            "baseName": "owner",
            "type": "User"
        },
        {
            "name": "visibleFor",
            "baseName": "visibleFor",
            "type": "UserGroup"
        },
        {
            "name": "updateableBy",
            "baseName": "updateableBy",
            "type": "UserGroup"
        }    ];

    static getAttributeTypeMap() {
        return WatchFolderAllOf.attributeTypeMap;
    }
}

