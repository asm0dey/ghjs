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
import { VersionBundle } from './versionBundle';
import { VersionBundleElement } from './versionBundleElement';

export class VersionBundleCustomFieldDefaultsAllOf {
    'bundle'?: VersionBundle;
    'defaultValues'?: Array<VersionBundleElement>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bundle",
            "baseName": "bundle",
            "type": "VersionBundle"
        },
        {
            "name": "defaultValues",
            "baseName": "defaultValues",
            "type": "Array<VersionBundleElement>"
        }    ];

    static getAttributeTypeMap() {
        return VersionBundleCustomFieldDefaultsAllOf.attributeTypeMap;
    }
}

