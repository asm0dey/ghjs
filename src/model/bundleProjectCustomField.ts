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
import { CustomField } from './customField';
import { Project } from './project';
import { ProjectCustomField } from './projectCustomField';

/**
* Represents project settings for the field with a defined set of values.
*/
export class BundleProjectCustomField extends ProjectCustomField {

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
    ];

    static getAttributeTypeMap() {
        return super.getAttributeTypeMap().concat(BundleProjectCustomField.attributeTypeMap);
    }
}
