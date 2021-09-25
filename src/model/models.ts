import localVarRequest from 'request';

export * from './activityCategory';
export * from './activityCursorPage';
export * from './activityItem';
export * from './agile';
export * from './agileColumn';
export * from './agileColumnFieldValue';
export * from './agileColumnFieldValueAllOf';
export * from './agileStatus';
export * from './appearanceSettings';
export * from './article';
export * from './articleAllOf';
export * from './articleAttachment';
export * from './articleComment';
export * from './attachmentActivityItem';
export * from './attachmentActivityItemAllOf';
export * from './attributeBasedSwimlaneSettings';
export * from './attributeBasedSwimlaneSettingsAllOf';
export * from './backupError';
export * from './backupFile';
export * from './backupStatus';
export * from './baseArticle';
export * from './baseBundle';
export * from './baseBundleAllOf';
export * from './buildBundle';
export * from './buildBundleAllOf';
export * from './buildBundleCustomFieldDefaults';
export * from './buildBundleCustomFieldDefaultsAllOf';
export * from './buildBundleElement';
export * from './buildBundleElementAllOf';
export * from './buildProjectCustomField';
export * from './bundle';
export * from './bundleCustomFieldDefaults';
export * from './bundleElement';
export * from './bundleProjectCustomField';
export * from './colorCoding';
export * from './columnSettings';
export * from './commandLimitedVisibility';
export * from './commandLimitedVisibilityAllOf';
export * from './commandList';
export * from './commandUnlimitedVisibility';
export * from './commandVisibility';
export * from './commentActivityItem';
export * from './commentActivityItemAllOf';
export * from './commentAttachmentsActivityItem';
export * from './commentAttachmentsActivityItemAllOf';
export * from './createdDeletedActivityItem';
export * from './customField';
export * from './customFieldActivityItem';
export * from './customFieldActivityItemAllOf';
export * from './customFieldDefaults';
export * from './customFilterField';
export * from './customFilterFieldAllOf';
export * from './databaseAttributeValue';
export * from './databaseBackupSettings';
export * from './databaseMultiValueIssueCustomField';
export * from './databaseSingleValueIssueCustomField';
export * from './dateFormatDescriptor';
export * from './dateIssueCustomField';
export * from './dateIssueCustomFieldAllOf';
export * from './duplicateVote';
export * from './durationValue';
export * from './emailSettings';
export * from './enumBundle';
export * from './enumBundleAllOf';
export * from './enumBundleCustomFieldDefaults';
export * from './enumBundleCustomFieldDefaultsAllOf';
export * from './enumBundleElement';
export * from './enumProjectCustomField';
export * from './externalArticle';
export * from './externalIssue';
export * from './fieldBasedColorCoding';
export * from './fieldBasedColorCodingAllOf';
export * from './fieldStyle';
export * from './fieldType';
export * from './filterField';
export * from './generalUserProfile';
export * from './globalSettings';
export * from './globalTimeTrackingSettings';
export * from './groupProjectCustomField';
export * from './groupProjectCustomFieldAllOf';
export * from './issue';
export * from './issueAttachment';
export * from './issueBasedSwimlaneSettings';
export * from './issueBasedSwimlaneSettingsAllOf';
export * from './issueComment';
export * from './issueCountResponse';
export * from './issueCreatedActivityItem';
export * from './issueCreatedActivityItemAllOf';
export * from './issueCustomField';
export * from './issueFolder';
export * from './issueLink';
export * from './issueLinkType';
export * from './issueResolvedActivityItem';
export * from './issueResolvedActivityItemAllOf';
export * from './issueTag';
export * from './issueTagAllOf';
export * from './issueTimeTracker';
export * from './issueVoters';
export * from './issueWatcher';
export * from './issueWatchers';
export * from './issueWorkItem';
export * from './jabberSettings';
export * from './license';
export * from './limitedVisibility';
export * from './limitedVisibilityAllOf';
export * from './linksActivityItem';
export * from './localeDescriptor';
export * from './localeSettings';
export * from './localizableBundleElement';
export * from './localizableBundleElementAllOf';
export * from './logo';
export * from './me';
export * from './multiBuildIssueCustomField';
export * from './multiBuildIssueCustomFieldAllOf';
export * from './multiEnumIssueCustomField';
export * from './multiEnumIssueCustomFieldAllOf';
export * from './multiGroupIssueCustomField';
export * from './multiGroupIssueCustomFieldAllOf';
export * from './multiOwnedIssueCustomField';
export * from './multiOwnedIssueCustomFieldAllOf';
export * from './multiUserIssueCustomField';
export * from './multiUserIssueCustomFieldAllOf';
export * from './multiValueActivityItem';
export * from './multiValueActivityItemAllOf';
export * from './multiVersionIssueCustomField';
export * from './multiVersionIssueCustomFieldAllOf';
export * from './notificationSettings';
export * from './notificationsUserProfile';
export * from './onlineUsers';
export * from './ownedBundle';
export * from './ownedBundleAllOf';
export * from './ownedBundleCustomFieldDefaults';
export * from './ownedBundleCustomFieldDefaultsAllOf';
export * from './ownedBundleElement';
export * from './ownedBundleElementAllOf';
export * from './ownedProjectCustomField';
export * from './parsedCommand';
export * from './periodFieldFormat';
export * from './periodIssueCustomField';
export * from './periodIssueCustomFieldAllOf';
export * from './periodProjectCustomField';
export * from './periodValue';
export * from './predefinedFilterField';
export * from './project';
export * from './projectActivityItem';
export * from './projectAllOf';
export * from './projectBasedColorCoding';
export * from './projectBasedColorCodingAllOf';
export * from './projectColor';
export * from './projectCustomField';
export * from './projectTimeTrackingSettings';
export * from './restCorsSettings';
export * from './savedQuery';
export * from './savedQueryAllOf';
export * from './searchSuggestions';
export * from './simpleIssueCustomField';
export * from './simpleProjectCustomField';
export * from './simpleValueActivityItem';
export * from './singleBuildIssueCustomField';
export * from './singleBuildIssueCustomFieldAllOf';
export * from './singleEnumIssueCustomField';
export * from './singleEnumIssueCustomFieldAllOf';
export * from './singleGroupIssueCustomField';
export * from './singleGroupIssueCustomFieldAllOf';
export * from './singleOwnedIssueCustomField';
export * from './singleOwnedIssueCustomFieldAllOf';
export * from './singleUserIssueCustomField';
export * from './singleUserIssueCustomFieldAllOf';
export * from './singleValueActivityItem';
export * from './singleVersionIssueCustomField';
export * from './singleVersionIssueCustomFieldAllOf';
export * from './sprint';
export * from './sprintActivityItem';
export * from './sprintActivityItemAllOf';
export * from './sprintsSettings';
export * from './stateBundle';
export * from './stateBundleAllOf';
export * from './stateBundleCustomFieldDefaults';
export * from './stateBundleCustomFieldDefaultsAllOf';
export * from './stateBundleElement';
export * from './stateBundleElementAllOf';
export * from './stateIssueCustomField';
export * from './stateIssueCustomFieldAllOf';
export * from './stateProjectCustomField';
export * from './storageEntry';
export * from './suggestion';
export * from './swimlaneEntityAttributeValue';
export * from './swimlaneSettings';
export * from './swimlaneValue';
export * from './systemSettings';
export * from './tagsActivityItem';
export * from './tagsActivityItemAllOf';
export * from './telemetry';
export * from './textCustomFieldActivityItem';
export * from './textCustomFieldActivityItemAllOf';
export * from './textFieldValue';
export * from './textIssueCustomField';
export * from './textIssueCustomFieldAllOf';
export * from './textMarkupActivityItem';
export * from './textMarkupActivityItemAllOf';
export * from './textProjectCustomField';
export * from './timeTrackingUserProfile';
export * from './timeZoneDescriptor';
export * from './unlimitedVisibility';
export * from './user';
export * from './userBundle';
export * from './userBundleAllOf';
export * from './userCustomFieldDefaults';
export * from './userCustomFieldDefaultsAllOf';
export * from './userGroup';
export * from './userProfiles';
export * from './userProjectCustomField';
export * from './usesMarkupActivityItem';
export * from './usesMarkupActivityItemAllOf';
export * from './vcsChangeActivityItem';
export * from './vcsChangeActivityItemAllOf';
export * from './vcsUnresolvedUser';
export * from './vcsUnresolvedUserAllOf';
export * from './versionBundle';
export * from './versionBundleAllOf';
export * from './versionBundleCustomFieldDefaults';
export * from './versionBundleCustomFieldDefaultsAllOf';
export * from './versionBundleElement';
export * from './versionBundleElementAllOf';
export * from './versionProjectCustomField';
export * from './visibility';
export * from './visibilityActivityItem';
export * from './visibilityActivityItemAllOf';
export * from './visibilityGroupActivityItem';
export * from './visibilityGroupActivityItemAllOf';
export * from './visibilityUserActivityItem';
export * from './visibilityUserActivityItemAllOf';
export * from './votersActivityItem';
export * from './votersActivityItemAllOf';
export * from './wIPLimit';
export * from './watchFolder';
export * from './watchFolderAllOf';
export * from './workItemActivityItem';
export * from './workItemActivityItemAllOf';
export * from './workItemAuthorActivityItem';
export * from './workItemAuthorActivityItemAllOf';
export * from './workItemDurationActivityItem';
export * from './workItemDurationActivityItemAllOf';
export * from './workItemType';
export * from './workItemTypeActivityItem';
export * from './workItemTypeActivityItemAllOf';
export * from './workTimeSettings';

import * as fs from 'fs';

export interface RequestDetailedFile {
    value: Buffer;
    options?: {
        filename?: string;
        contentType?: string;
    }
}

export type RequestFile = string | Buffer | fs.ReadStream | RequestDetailedFile;


import { ActivityCategory } from './activityCategory';
import { ActivityCursorPage } from './activityCursorPage';
import { ActivityItem } from './activityItem';
import { Agile } from './agile';
import { AgileColumn } from './agileColumn';
import { AgileColumnFieldValue } from './agileColumnFieldValue';
import { AgileColumnFieldValueAllOf } from './agileColumnFieldValueAllOf';
import { AgileStatus } from './agileStatus';
import { AppearanceSettings } from './appearanceSettings';
import { Article } from './article';
import { ArticleAllOf } from './articleAllOf';
import { ArticleAttachment } from './articleAttachment';
import { ArticleComment } from './articleComment';
import { AttachmentActivityItem } from './attachmentActivityItem';
import { AttachmentActivityItemAllOf } from './attachmentActivityItemAllOf';
import { AttributeBasedSwimlaneSettings } from './attributeBasedSwimlaneSettings';
import { AttributeBasedSwimlaneSettingsAllOf } from './attributeBasedSwimlaneSettingsAllOf';
import { BackupError } from './backupError';
import { BackupFile } from './backupFile';
import { BackupStatus } from './backupStatus';
import { BaseArticle } from './baseArticle';
import { BaseBundle } from './baseBundle';
import { BaseBundleAllOf } from './baseBundleAllOf';
import { BuildBundle } from './buildBundle';
import { BuildBundleAllOf } from './buildBundleAllOf';
import { BuildBundleCustomFieldDefaults } from './buildBundleCustomFieldDefaults';
import { BuildBundleCustomFieldDefaultsAllOf } from './buildBundleCustomFieldDefaultsAllOf';
import { BuildBundleElement } from './buildBundleElement';
import { BuildBundleElementAllOf } from './buildBundleElementAllOf';
import { BuildProjectCustomField } from './buildProjectCustomField';
import { Bundle } from './bundle';
import { BundleCustomFieldDefaults } from './bundleCustomFieldDefaults';
import { BundleElement } from './bundleElement';
import { BundleProjectCustomField } from './bundleProjectCustomField';
import { ColorCoding } from './colorCoding';
import { ColumnSettings } from './columnSettings';
import { CommandLimitedVisibility } from './commandLimitedVisibility';
import { CommandLimitedVisibilityAllOf } from './commandLimitedVisibilityAllOf';
import { CommandList } from './commandList';
import { CommandUnlimitedVisibility } from './commandUnlimitedVisibility';
import { CommandVisibility } from './commandVisibility';
import { CommentActivityItem } from './commentActivityItem';
import { CommentActivityItemAllOf } from './commentActivityItemAllOf';
import { CommentAttachmentsActivityItem } from './commentAttachmentsActivityItem';
import { CommentAttachmentsActivityItemAllOf } from './commentAttachmentsActivityItemAllOf';
import { CreatedDeletedActivityItem } from './createdDeletedActivityItem';
import { CustomField } from './customField';
import { CustomFieldActivityItem } from './customFieldActivityItem';
import { CustomFieldActivityItemAllOf } from './customFieldActivityItemAllOf';
import { CustomFieldDefaults } from './customFieldDefaults';
import { CustomFilterField } from './customFilterField';
import { CustomFilterFieldAllOf } from './customFilterFieldAllOf';
import { DatabaseAttributeValue } from './databaseAttributeValue';
import { DatabaseBackupSettings } from './databaseBackupSettings';
import { DatabaseMultiValueIssueCustomField } from './databaseMultiValueIssueCustomField';
import { DatabaseSingleValueIssueCustomField } from './databaseSingleValueIssueCustomField';
import { DateFormatDescriptor } from './dateFormatDescriptor';
import { DateIssueCustomField } from './dateIssueCustomField';
import { DateIssueCustomFieldAllOf } from './dateIssueCustomFieldAllOf';
import { DuplicateVote } from './duplicateVote';
import { DurationValue } from './durationValue';
import { EmailSettings } from './emailSettings';
import { EnumBundle } from './enumBundle';
import { EnumBundleAllOf } from './enumBundleAllOf';
import { EnumBundleCustomFieldDefaults } from './enumBundleCustomFieldDefaults';
import { EnumBundleCustomFieldDefaultsAllOf } from './enumBundleCustomFieldDefaultsAllOf';
import { EnumBundleElement } from './enumBundleElement';
import { EnumProjectCustomField } from './enumProjectCustomField';
import { ExternalArticle } from './externalArticle';
import { ExternalIssue } from './externalIssue';
import { FieldBasedColorCoding } from './fieldBasedColorCoding';
import { FieldBasedColorCodingAllOf } from './fieldBasedColorCodingAllOf';
import { FieldStyle } from './fieldStyle';
import { FieldType } from './fieldType';
import { FilterField } from './filterField';
import { GeneralUserProfile } from './generalUserProfile';
import { GlobalSettings } from './globalSettings';
import { GlobalTimeTrackingSettings } from './globalTimeTrackingSettings';
import { GroupProjectCustomField } from './groupProjectCustomField';
import { GroupProjectCustomFieldAllOf } from './groupProjectCustomFieldAllOf';
import { Issue } from './issue';
import { IssueAttachment } from './issueAttachment';
import { IssueBasedSwimlaneSettings } from './issueBasedSwimlaneSettings';
import { IssueBasedSwimlaneSettingsAllOf } from './issueBasedSwimlaneSettingsAllOf';
import { IssueComment } from './issueComment';
import { IssueCountResponse } from './issueCountResponse';
import { IssueCreatedActivityItem } from './issueCreatedActivityItem';
import { IssueCreatedActivityItemAllOf } from './issueCreatedActivityItemAllOf';
import { IssueCustomField } from './issueCustomField';
import { IssueFolder } from './issueFolder';
import { IssueLink } from './issueLink';
import { IssueLinkType } from './issueLinkType';
import { IssueResolvedActivityItem } from './issueResolvedActivityItem';
import { IssueResolvedActivityItemAllOf } from './issueResolvedActivityItemAllOf';
import { IssueTag } from './issueTag';
import { IssueTagAllOf } from './issueTagAllOf';
import { IssueTimeTracker } from './issueTimeTracker';
import { IssueVoters } from './issueVoters';
import { IssueWatcher } from './issueWatcher';
import { IssueWatchers } from './issueWatchers';
import { IssueWorkItem } from './issueWorkItem';
import { JabberSettings } from './jabberSettings';
import { License } from './license';
import { LimitedVisibility } from './limitedVisibility';
import { LimitedVisibilityAllOf } from './limitedVisibilityAllOf';
import { LinksActivityItem } from './linksActivityItem';
import { LocaleDescriptor } from './localeDescriptor';
import { LocaleSettings } from './localeSettings';
import { LocalizableBundleElement } from './localizableBundleElement';
import { LocalizableBundleElementAllOf } from './localizableBundleElementAllOf';
import { Logo } from './logo';
import { Me } from './me';
import { MultiBuildIssueCustomField } from './multiBuildIssueCustomField';
import { MultiBuildIssueCustomFieldAllOf } from './multiBuildIssueCustomFieldAllOf';
import { MultiEnumIssueCustomField } from './multiEnumIssueCustomField';
import { MultiEnumIssueCustomFieldAllOf } from './multiEnumIssueCustomFieldAllOf';
import { MultiGroupIssueCustomField } from './multiGroupIssueCustomField';
import { MultiGroupIssueCustomFieldAllOf } from './multiGroupIssueCustomFieldAllOf';
import { MultiOwnedIssueCustomField } from './multiOwnedIssueCustomField';
import { MultiOwnedIssueCustomFieldAllOf } from './multiOwnedIssueCustomFieldAllOf';
import { MultiUserIssueCustomField } from './multiUserIssueCustomField';
import { MultiUserIssueCustomFieldAllOf } from './multiUserIssueCustomFieldAllOf';
import { MultiValueActivityItem } from './multiValueActivityItem';
import { MultiValueActivityItemAllOf } from './multiValueActivityItemAllOf';
import { MultiVersionIssueCustomField } from './multiVersionIssueCustomField';
import { MultiVersionIssueCustomFieldAllOf } from './multiVersionIssueCustomFieldAllOf';
import { NotificationSettings } from './notificationSettings';
import { NotificationsUserProfile } from './notificationsUserProfile';
import { OnlineUsers } from './onlineUsers';
import { OwnedBundle } from './ownedBundle';
import { OwnedBundleAllOf } from './ownedBundleAllOf';
import { OwnedBundleCustomFieldDefaults } from './ownedBundleCustomFieldDefaults';
import { OwnedBundleCustomFieldDefaultsAllOf } from './ownedBundleCustomFieldDefaultsAllOf';
import { OwnedBundleElement } from './ownedBundleElement';
import { OwnedBundleElementAllOf } from './ownedBundleElementAllOf';
import { OwnedProjectCustomField } from './ownedProjectCustomField';
import { ParsedCommand } from './parsedCommand';
import { PeriodFieldFormat } from './periodFieldFormat';
import { PeriodIssueCustomField } from './periodIssueCustomField';
import { PeriodIssueCustomFieldAllOf } from './periodIssueCustomFieldAllOf';
import { PeriodProjectCustomField } from './periodProjectCustomField';
import { PeriodValue } from './periodValue';
import { PredefinedFilterField } from './predefinedFilterField';
import { Project } from './project';
import { ProjectActivityItem } from './projectActivityItem';
import { ProjectAllOf } from './projectAllOf';
import { ProjectBasedColorCoding } from './projectBasedColorCoding';
import { ProjectBasedColorCodingAllOf } from './projectBasedColorCodingAllOf';
import { ProjectColor } from './projectColor';
import { ProjectCustomField } from './projectCustomField';
import { ProjectTimeTrackingSettings } from './projectTimeTrackingSettings';
import { RestCorsSettings } from './restCorsSettings';
import { SavedQuery } from './savedQuery';
import { SavedQueryAllOf } from './savedQueryAllOf';
import { SearchSuggestions } from './searchSuggestions';
import { SimpleIssueCustomField } from './simpleIssueCustomField';
import { SimpleProjectCustomField } from './simpleProjectCustomField';
import { SimpleValueActivityItem } from './simpleValueActivityItem';
import { SingleBuildIssueCustomField } from './singleBuildIssueCustomField';
import { SingleBuildIssueCustomFieldAllOf } from './singleBuildIssueCustomFieldAllOf';
import { SingleEnumIssueCustomField } from './singleEnumIssueCustomField';
import { SingleEnumIssueCustomFieldAllOf } from './singleEnumIssueCustomFieldAllOf';
import { SingleGroupIssueCustomField } from './singleGroupIssueCustomField';
import { SingleGroupIssueCustomFieldAllOf } from './singleGroupIssueCustomFieldAllOf';
import { SingleOwnedIssueCustomField } from './singleOwnedIssueCustomField';
import { SingleOwnedIssueCustomFieldAllOf } from './singleOwnedIssueCustomFieldAllOf';
import { SingleUserIssueCustomField } from './singleUserIssueCustomField';
import { SingleUserIssueCustomFieldAllOf } from './singleUserIssueCustomFieldAllOf';
import { SingleValueActivityItem } from './singleValueActivityItem';
import { SingleVersionIssueCustomField } from './singleVersionIssueCustomField';
import { SingleVersionIssueCustomFieldAllOf } from './singleVersionIssueCustomFieldAllOf';
import { Sprint } from './sprint';
import { SprintActivityItem } from './sprintActivityItem';
import { SprintActivityItemAllOf } from './sprintActivityItemAllOf';
import { SprintsSettings } from './sprintsSettings';
import { StateBundle } from './stateBundle';
import { StateBundleAllOf } from './stateBundleAllOf';
import { StateBundleCustomFieldDefaults } from './stateBundleCustomFieldDefaults';
import { StateBundleCustomFieldDefaultsAllOf } from './stateBundleCustomFieldDefaultsAllOf';
import { StateBundleElement } from './stateBundleElement';
import { StateBundleElementAllOf } from './stateBundleElementAllOf';
import { StateIssueCustomField } from './stateIssueCustomField';
import { StateIssueCustomFieldAllOf } from './stateIssueCustomFieldAllOf';
import { StateProjectCustomField } from './stateProjectCustomField';
import { StorageEntry } from './storageEntry';
import { Suggestion } from './suggestion';
import { SwimlaneEntityAttributeValue } from './swimlaneEntityAttributeValue';
import { SwimlaneSettings } from './swimlaneSettings';
import { SwimlaneValue } from './swimlaneValue';
import { SystemSettings } from './systemSettings';
import { TagsActivityItem } from './tagsActivityItem';
import { TagsActivityItemAllOf } from './tagsActivityItemAllOf';
import { Telemetry } from './telemetry';
import { TextCustomFieldActivityItem } from './textCustomFieldActivityItem';
import { TextCustomFieldActivityItemAllOf } from './textCustomFieldActivityItemAllOf';
import { TextFieldValue } from './textFieldValue';
import { TextIssueCustomField } from './textIssueCustomField';
import { TextIssueCustomFieldAllOf } from './textIssueCustomFieldAllOf';
import { TextMarkupActivityItem } from './textMarkupActivityItem';
import { TextMarkupActivityItemAllOf } from './textMarkupActivityItemAllOf';
import { TextProjectCustomField } from './textProjectCustomField';
import { TimeTrackingUserProfile } from './timeTrackingUserProfile';
import { TimeZoneDescriptor } from './timeZoneDescriptor';
import { UnlimitedVisibility } from './unlimitedVisibility';
import { User } from './user';
import { UserBundle } from './userBundle';
import { UserBundleAllOf } from './userBundleAllOf';
import { UserCustomFieldDefaults } from './userCustomFieldDefaults';
import { UserCustomFieldDefaultsAllOf } from './userCustomFieldDefaultsAllOf';
import { UserGroup } from './userGroup';
import { UserProfiles } from './userProfiles';
import { UserProjectCustomField } from './userProjectCustomField';
import { UsesMarkupActivityItem } from './usesMarkupActivityItem';
import { UsesMarkupActivityItemAllOf } from './usesMarkupActivityItemAllOf';
import { VcsChangeActivityItem } from './vcsChangeActivityItem';
import { VcsChangeActivityItemAllOf } from './vcsChangeActivityItemAllOf';
import { VcsUnresolvedUser } from './vcsUnresolvedUser';
import { VcsUnresolvedUserAllOf } from './vcsUnresolvedUserAllOf';
import { VersionBundle } from './versionBundle';
import { VersionBundleAllOf } from './versionBundleAllOf';
import { VersionBundleCustomFieldDefaults } from './versionBundleCustomFieldDefaults';
import { VersionBundleCustomFieldDefaultsAllOf } from './versionBundleCustomFieldDefaultsAllOf';
import { VersionBundleElement } from './versionBundleElement';
import { VersionBundleElementAllOf } from './versionBundleElementAllOf';
import { VersionProjectCustomField } from './versionProjectCustomField';
import { Visibility } from './visibility';
import { VisibilityActivityItem } from './visibilityActivityItem';
import { VisibilityActivityItemAllOf } from './visibilityActivityItemAllOf';
import { VisibilityGroupActivityItem } from './visibilityGroupActivityItem';
import { VisibilityGroupActivityItemAllOf } from './visibilityGroupActivityItemAllOf';
import { VisibilityUserActivityItem } from './visibilityUserActivityItem';
import { VisibilityUserActivityItemAllOf } from './visibilityUserActivityItemAllOf';
import { VotersActivityItem } from './votersActivityItem';
import { VotersActivityItemAllOf } from './votersActivityItemAllOf';
import { WIPLimit } from './wIPLimit';
import { WatchFolder } from './watchFolder';
import { WatchFolderAllOf } from './watchFolderAllOf';
import { WorkItemActivityItem } from './workItemActivityItem';
import { WorkItemActivityItemAllOf } from './workItemActivityItemAllOf';
import { WorkItemAuthorActivityItem } from './workItemAuthorActivityItem';
import { WorkItemAuthorActivityItemAllOf } from './workItemAuthorActivityItemAllOf';
import { WorkItemDurationActivityItem } from './workItemDurationActivityItem';
import { WorkItemDurationActivityItemAllOf } from './workItemDurationActivityItemAllOf';
import { WorkItemType } from './workItemType';
import { WorkItemTypeActivityItem } from './workItemTypeActivityItem';
import { WorkItemTypeActivityItemAllOf } from './workItemTypeActivityItemAllOf';
import { WorkTimeSettings } from './workTimeSettings';

/* tslint:disable:no-unused-variable */
let primitives = [
                    "string",
                    "boolean",
                    "double",
                    "integer",
                    "long",
                    "float",
                    "number",
                    "any"
                 ];

let enumsMap: {[index: string]: any} = {
        "DatabaseBackupSettings.ArchiveFormatEnum": DatabaseBackupSettings.ArchiveFormatEnum,
        "EmailSettings.MailProtocolEnum": EmailSettings.MailProtocolEnum,
        "IssueLink.DirectionEnum": IssueLink.DirectionEnum,
}

let typeMap: {[index: string]: any} = {
    "ActivityCategory": ActivityCategory,
    "ActivityCursorPage": ActivityCursorPage,
    "ActivityItem": ActivityItem,
    "Agile": Agile,
    "AgileColumn": AgileColumn,
    "AgileColumnFieldValue": AgileColumnFieldValue,
    "AgileColumnFieldValueAllOf": AgileColumnFieldValueAllOf,
    "AgileStatus": AgileStatus,
    "AppearanceSettings": AppearanceSettings,
    "Article": Article,
    "ArticleAllOf": ArticleAllOf,
    "ArticleAttachment": ArticleAttachment,
    "ArticleComment": ArticleComment,
    "AttachmentActivityItem": AttachmentActivityItem,
    "AttachmentActivityItemAllOf": AttachmentActivityItemAllOf,
    "AttributeBasedSwimlaneSettings": AttributeBasedSwimlaneSettings,
    "AttributeBasedSwimlaneSettingsAllOf": AttributeBasedSwimlaneSettingsAllOf,
    "BackupError": BackupError,
    "BackupFile": BackupFile,
    "BackupStatus": BackupStatus,
    "BaseArticle": BaseArticle,
    "BaseBundle": BaseBundle,
    "BaseBundleAllOf": BaseBundleAllOf,
    "BuildBundle": BuildBundle,
    "BuildBundleAllOf": BuildBundleAllOf,
    "BuildBundleCustomFieldDefaults": BuildBundleCustomFieldDefaults,
    "BuildBundleCustomFieldDefaultsAllOf": BuildBundleCustomFieldDefaultsAllOf,
    "BuildBundleElement": BuildBundleElement,
    "BuildBundleElementAllOf": BuildBundleElementAllOf,
    "BuildProjectCustomField": BuildProjectCustomField,
    "Bundle": Bundle,
    "BundleCustomFieldDefaults": BundleCustomFieldDefaults,
    "BundleElement": BundleElement,
    "BundleProjectCustomField": BundleProjectCustomField,
    "ColorCoding": ColorCoding,
    "ColumnSettings": ColumnSettings,
    "CommandLimitedVisibility": CommandLimitedVisibility,
    "CommandLimitedVisibilityAllOf": CommandLimitedVisibilityAllOf,
    "CommandList": CommandList,
    "CommandUnlimitedVisibility": CommandUnlimitedVisibility,
    "CommandVisibility": CommandVisibility,
    "CommentActivityItem": CommentActivityItem,
    "CommentActivityItemAllOf": CommentActivityItemAllOf,
    "CommentAttachmentsActivityItem": CommentAttachmentsActivityItem,
    "CommentAttachmentsActivityItemAllOf": CommentAttachmentsActivityItemAllOf,
    "CreatedDeletedActivityItem": CreatedDeletedActivityItem,
    "CustomField": CustomField,
    "CustomFieldActivityItem": CustomFieldActivityItem,
    "CustomFieldActivityItemAllOf": CustomFieldActivityItemAllOf,
    "CustomFieldDefaults": CustomFieldDefaults,
    "CustomFilterField": CustomFilterField,
    "CustomFilterFieldAllOf": CustomFilterFieldAllOf,
    "DatabaseAttributeValue": DatabaseAttributeValue,
    "DatabaseBackupSettings": DatabaseBackupSettings,
    "DatabaseMultiValueIssueCustomField": DatabaseMultiValueIssueCustomField,
    "DatabaseSingleValueIssueCustomField": DatabaseSingleValueIssueCustomField,
    "DateFormatDescriptor": DateFormatDescriptor,
    "DateIssueCustomField": DateIssueCustomField,
    "DateIssueCustomFieldAllOf": DateIssueCustomFieldAllOf,
    "DuplicateVote": DuplicateVote,
    "DurationValue": DurationValue,
    "EmailSettings": EmailSettings,
    "EnumBundle": EnumBundle,
    "EnumBundleAllOf": EnumBundleAllOf,
    "EnumBundleCustomFieldDefaults": EnumBundleCustomFieldDefaults,
    "EnumBundleCustomFieldDefaultsAllOf": EnumBundleCustomFieldDefaultsAllOf,
    "EnumBundleElement": EnumBundleElement,
    "EnumProjectCustomField": EnumProjectCustomField,
    "ExternalArticle": ExternalArticle,
    "ExternalIssue": ExternalIssue,
    "FieldBasedColorCoding": FieldBasedColorCoding,
    "FieldBasedColorCodingAllOf": FieldBasedColorCodingAllOf,
    "FieldStyle": FieldStyle,
    "FieldType": FieldType,
    "FilterField": FilterField,
    "GeneralUserProfile": GeneralUserProfile,
    "GlobalSettings": GlobalSettings,
    "GlobalTimeTrackingSettings": GlobalTimeTrackingSettings,
    "GroupProjectCustomField": GroupProjectCustomField,
    "GroupProjectCustomFieldAllOf": GroupProjectCustomFieldAllOf,
    "Issue": Issue,
    "IssueAttachment": IssueAttachment,
    "IssueBasedSwimlaneSettings": IssueBasedSwimlaneSettings,
    "IssueBasedSwimlaneSettingsAllOf": IssueBasedSwimlaneSettingsAllOf,
    "IssueComment": IssueComment,
    "IssueCountResponse": IssueCountResponse,
    "IssueCreatedActivityItem": IssueCreatedActivityItem,
    "IssueCreatedActivityItemAllOf": IssueCreatedActivityItemAllOf,
    "IssueCustomField": IssueCustomField,
    "IssueFolder": IssueFolder,
    "IssueLink": IssueLink,
    "IssueLinkType": IssueLinkType,
    "IssueResolvedActivityItem": IssueResolvedActivityItem,
    "IssueResolvedActivityItemAllOf": IssueResolvedActivityItemAllOf,
    "IssueTag": IssueTag,
    "IssueTagAllOf": IssueTagAllOf,
    "IssueTimeTracker": IssueTimeTracker,
    "IssueVoters": IssueVoters,
    "IssueWatcher": IssueWatcher,
    "IssueWatchers": IssueWatchers,
    "IssueWorkItem": IssueWorkItem,
    "JabberSettings": JabberSettings,
    "License": License,
    "LimitedVisibility": LimitedVisibility,
    "LimitedVisibilityAllOf": LimitedVisibilityAllOf,
    "LinksActivityItem": LinksActivityItem,
    "LocaleDescriptor": LocaleDescriptor,
    "LocaleSettings": LocaleSettings,
    "LocalizableBundleElement": LocalizableBundleElement,
    "LocalizableBundleElementAllOf": LocalizableBundleElementAllOf,
    "Logo": Logo,
    "Me": Me,
    "MultiBuildIssueCustomField": MultiBuildIssueCustomField,
    "MultiBuildIssueCustomFieldAllOf": MultiBuildIssueCustomFieldAllOf,
    "MultiEnumIssueCustomField": MultiEnumIssueCustomField,
    "MultiEnumIssueCustomFieldAllOf": MultiEnumIssueCustomFieldAllOf,
    "MultiGroupIssueCustomField": MultiGroupIssueCustomField,
    "MultiGroupIssueCustomFieldAllOf": MultiGroupIssueCustomFieldAllOf,
    "MultiOwnedIssueCustomField": MultiOwnedIssueCustomField,
    "MultiOwnedIssueCustomFieldAllOf": MultiOwnedIssueCustomFieldAllOf,
    "MultiUserIssueCustomField": MultiUserIssueCustomField,
    "MultiUserIssueCustomFieldAllOf": MultiUserIssueCustomFieldAllOf,
    "MultiValueActivityItem": MultiValueActivityItem,
    "MultiValueActivityItemAllOf": MultiValueActivityItemAllOf,
    "MultiVersionIssueCustomField": MultiVersionIssueCustomField,
    "MultiVersionIssueCustomFieldAllOf": MultiVersionIssueCustomFieldAllOf,
    "NotificationSettings": NotificationSettings,
    "NotificationsUserProfile": NotificationsUserProfile,
    "OnlineUsers": OnlineUsers,
    "OwnedBundle": OwnedBundle,
    "OwnedBundleAllOf": OwnedBundleAllOf,
    "OwnedBundleCustomFieldDefaults": OwnedBundleCustomFieldDefaults,
    "OwnedBundleCustomFieldDefaultsAllOf": OwnedBundleCustomFieldDefaultsAllOf,
    "OwnedBundleElement": OwnedBundleElement,
    "OwnedBundleElementAllOf": OwnedBundleElementAllOf,
    "OwnedProjectCustomField": OwnedProjectCustomField,
    "ParsedCommand": ParsedCommand,
    "PeriodFieldFormat": PeriodFieldFormat,
    "PeriodIssueCustomField": PeriodIssueCustomField,
    "PeriodIssueCustomFieldAllOf": PeriodIssueCustomFieldAllOf,
    "PeriodProjectCustomField": PeriodProjectCustomField,
    "PeriodValue": PeriodValue,
    "PredefinedFilterField": PredefinedFilterField,
    "Project": Project,
    "ProjectActivityItem": ProjectActivityItem,
    "ProjectAllOf": ProjectAllOf,
    "ProjectBasedColorCoding": ProjectBasedColorCoding,
    "ProjectBasedColorCodingAllOf": ProjectBasedColorCodingAllOf,
    "ProjectColor": ProjectColor,
    "ProjectCustomField": ProjectCustomField,
    "ProjectTimeTrackingSettings": ProjectTimeTrackingSettings,
    "RestCorsSettings": RestCorsSettings,
    "SavedQuery": SavedQuery,
    "SavedQueryAllOf": SavedQueryAllOf,
    "SearchSuggestions": SearchSuggestions,
    "SimpleIssueCustomField": SimpleIssueCustomField,
    "SimpleProjectCustomField": SimpleProjectCustomField,
    "SimpleValueActivityItem": SimpleValueActivityItem,
    "SingleBuildIssueCustomField": SingleBuildIssueCustomField,
    "SingleBuildIssueCustomFieldAllOf": SingleBuildIssueCustomFieldAllOf,
    "SingleEnumIssueCustomField": SingleEnumIssueCustomField,
    "SingleEnumIssueCustomFieldAllOf": SingleEnumIssueCustomFieldAllOf,
    "SingleGroupIssueCustomField": SingleGroupIssueCustomField,
    "SingleGroupIssueCustomFieldAllOf": SingleGroupIssueCustomFieldAllOf,
    "SingleOwnedIssueCustomField": SingleOwnedIssueCustomField,
    "SingleOwnedIssueCustomFieldAllOf": SingleOwnedIssueCustomFieldAllOf,
    "SingleUserIssueCustomField": SingleUserIssueCustomField,
    "SingleUserIssueCustomFieldAllOf": SingleUserIssueCustomFieldAllOf,
    "SingleValueActivityItem": SingleValueActivityItem,
    "SingleVersionIssueCustomField": SingleVersionIssueCustomField,
    "SingleVersionIssueCustomFieldAllOf": SingleVersionIssueCustomFieldAllOf,
    "Sprint": Sprint,
    "SprintActivityItem": SprintActivityItem,
    "SprintActivityItemAllOf": SprintActivityItemAllOf,
    "SprintsSettings": SprintsSettings,
    "StateBundle": StateBundle,
    "StateBundleAllOf": StateBundleAllOf,
    "StateBundleCustomFieldDefaults": StateBundleCustomFieldDefaults,
    "StateBundleCustomFieldDefaultsAllOf": StateBundleCustomFieldDefaultsAllOf,
    "StateBundleElement": StateBundleElement,
    "StateBundleElementAllOf": StateBundleElementAllOf,
    "StateIssueCustomField": StateIssueCustomField,
    "StateIssueCustomFieldAllOf": StateIssueCustomFieldAllOf,
    "StateProjectCustomField": StateProjectCustomField,
    "StorageEntry": StorageEntry,
    "Suggestion": Suggestion,
    "SwimlaneEntityAttributeValue": SwimlaneEntityAttributeValue,
    "SwimlaneSettings": SwimlaneSettings,
    "SwimlaneValue": SwimlaneValue,
    "SystemSettings": SystemSettings,
    "TagsActivityItem": TagsActivityItem,
    "TagsActivityItemAllOf": TagsActivityItemAllOf,
    "Telemetry": Telemetry,
    "TextCustomFieldActivityItem": TextCustomFieldActivityItem,
    "TextCustomFieldActivityItemAllOf": TextCustomFieldActivityItemAllOf,
    "TextFieldValue": TextFieldValue,
    "TextIssueCustomField": TextIssueCustomField,
    "TextIssueCustomFieldAllOf": TextIssueCustomFieldAllOf,
    "TextMarkupActivityItem": TextMarkupActivityItem,
    "TextMarkupActivityItemAllOf": TextMarkupActivityItemAllOf,
    "TextProjectCustomField": TextProjectCustomField,
    "TimeTrackingUserProfile": TimeTrackingUserProfile,
    "TimeZoneDescriptor": TimeZoneDescriptor,
    "UnlimitedVisibility": UnlimitedVisibility,
    "User": User,
    "UserBundle": UserBundle,
    "UserBundleAllOf": UserBundleAllOf,
    "UserCustomFieldDefaults": UserCustomFieldDefaults,
    "UserCustomFieldDefaultsAllOf": UserCustomFieldDefaultsAllOf,
    "UserGroup": UserGroup,
    "UserProfiles": UserProfiles,
    "UserProjectCustomField": UserProjectCustomField,
    "UsesMarkupActivityItem": UsesMarkupActivityItem,
    "UsesMarkupActivityItemAllOf": UsesMarkupActivityItemAllOf,
    "VcsChangeActivityItem": VcsChangeActivityItem,
    "VcsChangeActivityItemAllOf": VcsChangeActivityItemAllOf,
    "VcsUnresolvedUser": VcsUnresolvedUser,
    "VcsUnresolvedUserAllOf": VcsUnresolvedUserAllOf,
    "VersionBundle": VersionBundle,
    "VersionBundleAllOf": VersionBundleAllOf,
    "VersionBundleCustomFieldDefaults": VersionBundleCustomFieldDefaults,
    "VersionBundleCustomFieldDefaultsAllOf": VersionBundleCustomFieldDefaultsAllOf,
    "VersionBundleElement": VersionBundleElement,
    "VersionBundleElementAllOf": VersionBundleElementAllOf,
    "VersionProjectCustomField": VersionProjectCustomField,
    "Visibility": Visibility,
    "VisibilityActivityItem": VisibilityActivityItem,
    "VisibilityActivityItemAllOf": VisibilityActivityItemAllOf,
    "VisibilityGroupActivityItem": VisibilityGroupActivityItem,
    "VisibilityGroupActivityItemAllOf": VisibilityGroupActivityItemAllOf,
    "VisibilityUserActivityItem": VisibilityUserActivityItem,
    "VisibilityUserActivityItemAllOf": VisibilityUserActivityItemAllOf,
    "VotersActivityItem": VotersActivityItem,
    "VotersActivityItemAllOf": VotersActivityItemAllOf,
    "WIPLimit": WIPLimit,
    "WatchFolder": WatchFolder,
    "WatchFolderAllOf": WatchFolderAllOf,
    "WorkItemActivityItem": WorkItemActivityItem,
    "WorkItemActivityItemAllOf": WorkItemActivityItemAllOf,
    "WorkItemAuthorActivityItem": WorkItemAuthorActivityItem,
    "WorkItemAuthorActivityItemAllOf": WorkItemAuthorActivityItemAllOf,
    "WorkItemDurationActivityItem": WorkItemDurationActivityItem,
    "WorkItemDurationActivityItemAllOf": WorkItemDurationActivityItemAllOf,
    "WorkItemType": WorkItemType,
    "WorkItemTypeActivityItem": WorkItemTypeActivityItem,
    "WorkItemTypeActivityItemAllOf": WorkItemTypeActivityItemAllOf,
    "WorkTimeSettings": WorkTimeSettings,
}

export class ObjectSerializer {
    public static findCorrectType(data: any, expectedType: string) {
        if (data == undefined) {
            return expectedType;
        } else if (primitives.indexOf(expectedType.toLowerCase()) !== -1) {
            return expectedType;
        } else if (expectedType === "Date") {
            return expectedType;
        } else {
            if (enumsMap[expectedType]) {
                return expectedType;
            }

            if (!typeMap[expectedType]) {
                return expectedType; // w/e we don't know the type
            }

            // Check the discriminator
            let discriminatorProperty = typeMap[expectedType].discriminator;
            if (discriminatorProperty == null) {
                return expectedType; // the type does not have a discriminator. use it.
            } else {
                if (data[discriminatorProperty]) {
                    var discriminatorType = data[discriminatorProperty];
                    if(typeMap[discriminatorType]){
                        return discriminatorType; // use the type given in the discriminator
                    } else {
                        return expectedType; // discriminator did not map to a type
                    }
                } else {
                    return expectedType; // discriminator was not present (or an empty string)
                }
            }
        }
    }

    public static serialize(data: any, type: string) {
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.serialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return data.toISOString();
        } else {
            if (enumsMap[type]) {
                return data;
            }
            if (!typeMap[type]) { // in case we dont know the type
                return data;
            }

            // Get the actual type of this object
            type = this.findCorrectType(data, type);

            // get the map for the correct type.
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            let instance: {[index: string]: any} = {};
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.baseName] = ObjectSerializer.serialize(data[attributeType.name], attributeType.type);
            }
            return instance;
        }
    }

    public static deserialize(data: any, type: string) {
        // polymorphism may change the actual type.
        type = ObjectSerializer.findCorrectType(data, type);
        if (data == undefined) {
            return data;
        } else if (primitives.indexOf(type.toLowerCase()) !== -1) {
            return data;
        } else if (type.lastIndexOf("Array<", 0) === 0) { // string.startsWith pre es6
            let subType: string = type.replace("Array<", ""); // Array<Type> => Type>
            subType = subType.substring(0, subType.length - 1); // Type> => Type
            let transformedData: any[] = [];
            for (let index = 0; index < data.length; index++) {
                let datum = data[index];
                transformedData.push(ObjectSerializer.deserialize(datum, subType));
            }
            return transformedData;
        } else if (type === "Date") {
            return new Date(data);
        } else {
            if (enumsMap[type]) {// is Enum
                return data;
            }

            if (!typeMap[type]) { // dont know the type
                return data;
            }
            let instance = new typeMap[type]();
            let attributeTypes = typeMap[type].getAttributeTypeMap();
            for (let index = 0; index < attributeTypes.length; index++) {
                let attributeType = attributeTypes[index];
                instance[attributeType.name] = ObjectSerializer.deserialize(data[attributeType.baseName], attributeType.type);
            }
            return instance;
        }
    }
}

export interface Authentication {
    /**
    * Apply authentication settings to header and query params.
    */
    applyToRequest(requestOptions: localVarRequest.Options): Promise<void> | void;
}

export class HttpBasicAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        requestOptions.auth = {
            username: this.username, password: this.password
        }
    }
}

export class HttpBearerAuth implements Authentication {
    public accessToken: string | (() => string) = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            const accessToken = typeof this.accessToken === 'function'
                            ? this.accessToken()
                            : this.accessToken;
            requestOptions.headers["Authorization"] = "Bearer " + accessToken;
        }
    }
}

export class ApiKeyAuth implements Authentication {
    public apiKey: string = '';

    constructor(private location: string, private paramName: string) {
    }

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (this.location == "query") {
            (<any>requestOptions.qs)[this.paramName] = this.apiKey;
        } else if (this.location == "header" && requestOptions && requestOptions.headers) {
            requestOptions.headers[this.paramName] = this.apiKey;
        } else if (this.location == 'cookie' && requestOptions && requestOptions.headers) {
            if (requestOptions.headers['Cookie']) {
                requestOptions.headers['Cookie'] += '; ' + this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
            else {
                requestOptions.headers['Cookie'] = this.paramName + '=' + encodeURIComponent(this.apiKey);
            }
        }
    }
}

export class OAuth implements Authentication {
    public accessToken: string = '';

    applyToRequest(requestOptions: localVarRequest.Options): void {
        if (requestOptions && requestOptions.headers) {
            requestOptions.headers["Authorization"] = "Bearer " + this.accessToken;
        }
    }
}

export class VoidAuth implements Authentication {
    public username: string = '';
    public password: string = '';

    applyToRequest(_: localVarRequest.Options): void {
        // Do nothing
    }
}

export type Interceptor = (requestOptions: localVarRequest.Options) => (Promise<void> | void);
