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
import { BundleProjectCustomField } from './bundleProjectCustomField';
import { CustomField } from './customField';
import { EnumBundle } from './enumBundle';
import { EnumBundleCustomFieldDefaultsAllOf } from './enumBundleCustomFieldDefaultsAllOf';
import { EnumBundleElement } from './enumBundleElement';
import { Project } from './project';

/**
* Represents project settings for the enum field.
*/
export class EnumProjectCustomField extends BundleProjectCustomField {
    'bundle'?: EnumBundle;
    'defaultValues'?: Array<EnumBundleElement>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bundle",
            "baseName": "bundle",
            "type": "EnumBundle"
        },
        {
            "name": "defaultValues",
            "baseName": "defaultValues",
            "type": "Array<EnumBundleElement>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(EnumProjectCustomField.attributeTypeMap);
    }
}
