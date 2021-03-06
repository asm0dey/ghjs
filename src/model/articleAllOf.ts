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
import { Article } from './article';
import { ArticleAttachment } from './articleAttachment';
import { ArticleComment } from './articleComment';
import { ExternalArticle } from './externalArticle';
import { Project } from './project';
import { User } from './user';
import { Visibility } from './visibility';

export class ArticleAllOf {
    'reporter'?: User;
    'visibility'?: Visibility;
    'summary'?: string;
    'content'?: string;
    'attachments'?: Array<ArticleAttachment>;
    'project'?: Project;
    'parentArticle'?: Article;
    'childArticles'?: Array<Article>;
    'hasChildren'?: boolean;
    'updatedBy'?: User;
    'updated'?: number;
    'created'?: number;
    'idReadable'?: string;
    'ordinal'?: number;
    'comments'?: Array<ArticleComment>;
    'hasStar'?: boolean;
    'externalArticle'?: ExternalArticle;

    static discriminator: string | undefined = undefined;

    static attributeTypeMap: Array<{name: string, baseName: string, type: string}> = [
        {
            "name": "reporter",
            "baseName": "reporter",
            "type": "User"
        },
        {
            "name": "visibility",
            "baseName": "visibility",
            "type": "Visibility"
        },
        {
            "name": "summary",
            "baseName": "summary",
            "type": "string"
        },
        {
            "name": "content",
            "baseName": "content",
            "type": "string"
        },
        {
            "name": "attachments",
            "baseName": "attachments",
            "type": "Array<ArticleAttachment>"
        },
        {
            "name": "project",
            "baseName": "project",
            "type": "Project"
        },
        {
            "name": "parentArticle",
            "baseName": "parentArticle",
            "type": "Article"
        },
        {
            "name": "childArticles",
            "baseName": "childArticles",
            "type": "Array<Article>"
        },
        {
            "name": "hasChildren",
            "baseName": "hasChildren",
            "type": "boolean"
        },
        {
            "name": "updatedBy",
            "baseName": "updatedBy",
            "type": "User"
        },
        {
            "name": "updated",
            "baseName": "updated",
            "type": "number"
        },
        {
            "name": "created",
            "baseName": "created",
            "type": "number"
        },
        {
            "name": "idReadable",
            "baseName": "idReadable",
            "type": "string"
        },
        {
            "name": "ordinal",
            "baseName": "ordinal",
            "type": "number"
        },
        {
            "name": "comments",
            "baseName": "comments",
            "type": "Array<ArticleComment>"
        },
        {
            "name": "hasStar",
            "baseName": "hasStar",
            "type": "boolean"
        },
        {
            "name": "externalArticle",
            "baseName": "externalArticle",
            "type": "ExternalArticle"
        }    ];

    static getAttributeTypeMap() {
        return ArticleAllOf.attributeTypeMap;
    }
}

