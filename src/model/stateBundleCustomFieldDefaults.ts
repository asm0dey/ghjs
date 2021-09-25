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
import { BundleCustomFieldDefaults } from './bundleCustomFieldDefaults';
import { CustomField } from './customField';
import { StateBundle } from './stateBundle';
import { StateBundleCustomFieldDefaultsAllOf } from './stateBundleCustomFieldDefaultsAllOf';
import { StateBundleElement } from './stateBundleElement';

/**
* Default settings for the state-type field.
*/
export class StateBundleCustomFieldDefaults extends BundleCustomFieldDefaults {
    'bundle'?: StateBundle;
    'defaultValues'?: Array<StateBundleElement>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "bundle",
            "baseName": "bundle",
            "type": "StateBundle"
        },
        {
            "name": "defaultValues",
            "baseName": "defaultValues",
            "type": "Array<StateBundleElement>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StateBundleCustomFieldDefaults.attributeTypeMap);
    }
}

