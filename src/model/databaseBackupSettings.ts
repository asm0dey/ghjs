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
import { BackupStatus } from './backupStatus';
import { User } from './user';

/**
* Represents database backup settings of the YouTrack instance.
*/
export class DatabaseBackupSettings {
    'location'?: string;
    'filesToKeep'?: number;
    'cronExpression'?: string;
    'archiveFormat'?: DatabaseBackupSettings.ArchiveFormatEnum;
    'isOn'?: boolean;
    'availableDiskSpace'?: number;
    'notifiedUsers'?: Array<User>;
    'backupStatus'?: BackupStatus;
    'id'?: string;
    '$type'?: string;

    static discriminator: string | undefined = "$type";

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "location",
            "baseName": "location",
            "type": "string"
        },
        {
            "name": "filesToKeep",
            "baseName": "filesToKeep",
            "type": "number"
        },
        {
            "name": "cronExpression",
            "baseName": "cronExpression",
            "type": "string"
        },
        {
            "name": "archiveFormat",
            "baseName": "archiveFormat",
            "type": "DatabaseBackupSettings.ArchiveFormatEnum"
        },
        {
            "name": "isOn",
            "baseName": "isOn",
            "type": "boolean"
        },
        {
            "name": "availableDiskSpace",
            "baseName": "availableDiskSpace",
            "type": "number"
        },
        {
            "name": "notifiedUsers",
            "baseName": "notifiedUsers",
            "type": "Array<User>"
        },
        {
            "name": "backupStatus",
            "baseName": "backupStatus",
            "type": "BackupStatus"
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
        return DatabaseBackupSettings.attributeTypeMap;
    }
}

export namespace DatabaseBackupSettings {
    export enum ArchiveFormatEnum {
        TarGz = <any> 'TAR_GZ',
        Zip = <any> 'ZIP'
    }
}