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
import { LocalizableBundleElementAllOf } from './localizableBundleElementAllOf';

/**
* Represents field value that can be localized.
*/
export class LocalizableBundleElement extends BundleElement {
    'localizedName'?: string;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "localizedName",
            "baseName": "localizedName",
            "type": "string"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(LocalizableBundleElement.attributeTypeMap);
    }
}

