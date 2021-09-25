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
import { BuildBundle } from './buildBundle';
import { BuildBundleCustomFieldDefaultsAllOf } from './buildBundleCustomFieldDefaultsAllOf';
import { BuildBundleElement } from './buildBundleElement';
import { BundleCustomFieldDefaults } from './bundleCustomFieldDefaults';
import { CustomField } from './customField';

/**
* Default settings for the build-type field.
*/
export class BuildBundleCustomFieldDefaults extends BundleCustomFieldDefaults {
    'bundle'?: BuildBundle;
    'defaultValues'?: Array<BuildBundleElement>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bundle",
            "baseName": "bundle",
            "type": "BuildBundle"
        },
        {
            "name": "defaultValues",
            "baseName": "defaultValues",
            "type": "Array<BuildBundleElement>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BuildBundleCustomFieldDefaults.attributeTypeMap);
    }
}
