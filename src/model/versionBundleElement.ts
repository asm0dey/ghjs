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
import { BundleElement } from './bundleElement';
import { FieldStyle } from './fieldStyle';
import { VersionBundleElementAllOf } from './versionBundleElementAllOf';

/**
* Represents a version in YouTrack.
*/
export class VersionBundleElement extends BundleElement {
    'archived'?: boolean;
    'releaseDate'?: number;
    'released'?: boolean;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "archived",
            "baseName": "archived",
            "type": "boolean"
        },
        {
            "name": "releaseDate",
            "baseName": "releaseDate",
            "type": "number"
        },
        {
            "name": "released",
            "baseName": "released",
            "type": "boolean"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(VersionBundleElement.attributeTypeMap);
    }
}

