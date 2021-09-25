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
import { BaseBundle } from './baseBundle';
import { StateBundleAllOf } from './stateBundleAllOf';
import { StateBundleElement } from './stateBundleElement';

/**
* Represents a set of states in YouTrack.
*/
export class StateBundle extends BaseBundle {
    'values'?: Array<StateBundleElement>;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "values",
            "baseName": "values",
            "type": "Array<StateBundleElement>"
        }    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(StateBundle.attributeTypeMap);
    }
}

