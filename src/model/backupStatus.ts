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
import { BackupError } from './backupError';

/**
* Represents the current status of the backup process.
*/
export class BackupStatus {
    'backupInProgress'?: boolean;
    'backupCancelled'?: boolean;
    'backupError'?: BackupError;
    'id'?: string;
    '$type'?: string;

    static discriminator: string | undefined = "$type";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "backupInProgress",
            "baseName": "backupInProgress",
            "type": "boolean"
        },
        {
            "name": "backupCancelled",
            "baseName": "backupCancelled",
            "type": "boolean"
        },
        {
            "name": "backupError",
            "baseName": "backupError",
            "type": "BackupError"
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
        return BackupStatus.attributeTypeMap;
    }
}

