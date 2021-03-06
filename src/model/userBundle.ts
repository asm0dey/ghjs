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
import { Bundle } from './bundle';
import { User } from './user';
import { UserBundleAllOf } from './userBundleAllOf';
import { UserGroup } from './userGroup';

/**
* Represents a set of values that contains users. You can add to the set both individual user accounts and groups of users.
*/
export class UserBundle extends Bundle {
    'groups'?: Array<UserGroup>;
    'individuals'?: Array<User>;
    'aggregatedUsers'?: Array<User>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "groups",
            "baseName": "groups",
            "type": "Array<UserGroup>"
        },
        {
            "name": "individuals",
            "baseName": "individuals",
            "type": "Array<User>"
        },
        {
            "name": "aggregatedUsers",
            "baseName": "aggregatedUsers",
            "type": "Array<User>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(UserBundle.attributeTypeMap);
    }
}

