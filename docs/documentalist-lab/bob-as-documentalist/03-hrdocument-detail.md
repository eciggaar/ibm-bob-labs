## 📋 The Situation

In our sample scenario, the HR team is your biggest user group. You want to understand the `HRDocument` class deeply — all its properties, what's searchable, what's inherited from the base class, and what's HR-specific.

## 💬 Prompt to Bob

1. For this, switch to **Ask Mode** and enter the following prompt:

    ```
    Show me everything about the HRDocument class. I want to see all its 
    properties — their data types, whether they're searchable, and which 
    ones are system-owned vs custom business properties.
    ```

## 🔍 What Bob Does Behind the Scenes

- Calls `determine_class` with keyword `"HRDocument"` to confirm the symbolic name.
- Calls `get_class_property_descriptions HRDocument` → returns all properties including inherited ones.
- Categorizes properties by origin (system vs custom) and purpose.

## ✅ Expected Output from Bob

Bob should return a structured property breakdown:

::: info 

All equations check out. Here is the full report.

#### HRDocument — Class Property Report

---

##### Summary

| Metric | Count | Equation check |
|---|---|---|
| **Total properties** | **108** | — |
| System-owned | 63 | 63 + 45 = 108 ✓ |
| Custom / business | 45 | |
| Searchable | 84 | 84 + 24 = 108 ✓ |
| Not searchable | 24 | |
| Hidden | 42 | 42 + 66 = 108 ✓ |
| Visible | 66 | |

---

<details>
<summary><b>Complete flat list — all 108 properties</b></summary>

| # | Symbolic Name | Display Name | Data Type | Cardinality | Owned | Searchable | Hidden |
|---|---|---|---|---|---|---|---|
| 1 | ClassDescription | Class Description | OBJECT | SINGLE | system | ✓ | hidden |
| 2 | This | This | OBJECT | SINGLE | system | ✓ | hidden |
| 3 | ReplicationGroup | Replication Group | OBJECT | SINGLE | system | ✓ | hidden |
| 4 | ExternalReplicaIdentities | External Replica Identities | OBJECT | LIST | system | ✓ | hidden |
| 5 | CmHoldRelationships | Hold Relationships | OBJECT | ENUM | system | — | visible |
| 6 | Creator | Creator | STRING | SINGLE | system | ✓ | visible |
| 7 | DateCreated | Date Created | DATE | SINGLE | system | ✓ | visible |
| 8 | LastModifier | Last Modifier | STRING | SINGLE | system | ✓ | visible |
| 9 | DateLastModified | Date Last Modified | DATE | SINGLE | system | ✓ | visible |
| 10 | Id | ID | GUID | SINGLE | system | ✓ | visible |
| 11 | Name | Name | STRING | SINGLE | system | — | hidden |
| 12 | AuditedEvents | Audited Events | OBJECT | ENUM | system | — | hidden |
| 13 | Owner | Owner | STRING | SINGLE | system | — | hidden |
| 14 | Permissions | Permissions | OBJECT | LIST | system | — | hidden |
| 15 | ActiveMarkings | Active Markings | OBJECT | LIST | system | — | visible |
| 16 | Containers | Containers | OBJECT | ENUM | system | — | hidden |
| 17 | Annotations | Annotations | OBJECT | ENUM | system | — | hidden |
| 18 | LockToken | Lock Token | GUID | SINGLE | system | ✓ | hidden |
| 19 | LockTimeout | Lock Timeout | LONG | SINGLE | system | ✓ | hidden |
| 20 | LockOwner | Lock Owner | STRING | SINGLE | system | ✓ | hidden |
| 21 | SecurityPolicy | Security Policy | OBJECT | SINGLE | system | ✓ | hidden |
| 22 | CoordinatedTasks | Coordinated Tasks | OBJECT | ENUM | system | — | visible |
| 23 | FoldersFiledIn | Folders Filed In | OBJECT | ENUM | system | — | hidden |
| 24 | SecurityParent | Security Parent | OBJECT | SINGLE | system | — | hidden |
| 25 | SecurityFolder | Security Folder | OBJECT | SINGLE | system | ✓ | hidden |
| 26 | IsReserved | Is Reserved | BOOLEAN | SINGLE | system | ✓ | visible |
| 27 | IsCurrentVersion | Is Current Version | BOOLEAN | SINGLE | system | ✓ | visible |
| 28 | IsFrozenVersion | Is Frozen Version | BOOLEAN | SINGLE | system | ✓ | visible |
| 29 | VersionSeries | Version Series | OBJECT | SINGLE | system | ✓ | hidden |
| 30 | Versions | Versions | OBJECT | ENUM | system | — | hidden |
| 31 | CurrentVersion | Current Version | OBJECT | SINGLE | system | — | hidden |
| 32 | Reservation | Reservation | OBJECT | SINGLE | system | — | hidden |
| 33 | IsVersioningEnabled | Is Versioning Enabled | BOOLEAN | SINGLE | system | ✓ | visible |
| 34 | MajorVersionNumber | Major Version Number | LONG | SINGLE | system | ✓ | visible |
| 35 | MinorVersionNumber | Minor Version Number | LONG | SINGLE | system | ✓ | visible |
| 36 | VersionStatus | Version Status | LONG | SINGLE | system | ✓ | visible |
| 37 | ReservationType | Reservation Type | LONG | SINGLE | system | ✓ | visible |
| 38 | ReleasedVersion | Released Version | OBJECT | SINGLE | system | — | hidden |
| 39 | DateCheckedIn | Date Checked In | DATE | SINGLE | system | ✓ | visible |
| 40 | CmIsMarkedForDeletion | Is Marked For Deletion | BOOLEAN | SINGLE | system | — | visible |
| 41 | StoragePolicy | Storage Policy | OBJECT | SINGLE | system | ✓ | hidden |
| 42 | StorageLocation | Storage Location | STRING | SINGLE | system | ✓ | hidden |
| 43 | ContentElementsPresent | Content Elements Present | STRING | LIST | system | — | hidden |
| 44 | ContentElements | Content Elements | OBJECT | LIST | system | — | hidden |
| 45 | ContentSize | Content Size | DOUBLE | SINGLE | system | ✓ | visible |
| 46 | MimeType | Mime Type | STRING | SINGLE | system | ✓ | visible |
| 47 | DateContentLastAccessed | Date Content Last Accessed | DATE | SINGLE | system | ✓ | visible |
| 48 | ContentRetentionDate | Content Retention Date | DATE | SINGLE | system | ✓ | visible |
| 49 | DocumentLifecyclePolicy | Document Lifecycle Policy | OBJECT | SINGLE | system | ✓ | hidden |
| 50 | CurrentState | Current State | STRING | SINGLE | system | ✓ | visible |
| 51 | IsInExceptionState | Is In Exception State | BOOLEAN | SINGLE | system | ✓ | visible |
| 52 | WorkflowSubscriptions | Workflow Subscriptions | OBJECT | ENUM | system | — | hidden |
| 53 | ClassificationStatus | Classification Status | LONG | SINGLE | system | ✓ | visible |
| 54 | StorageArea | Storage Area | OBJECT | SINGLE | system | ✓ | hidden |
| 55 | IndexationId | Indexation Id | GUID | SINGLE | system | ✓ | visible |
| 56 | CmIndexingFailureCode | Indexing Failure Code | LONG | SINGLE | system | ✓ | visible |
| 57 | CompoundDocumentState | Compound Document State | LONG | SINGLE | system | ✓ | hidden |
| 58 | ChildDocuments | Child Documents | OBJECT | ENUM | system | — | hidden |
| 59 | ChildRelationships | Child Relationships | OBJECT | ENUM | system | — | hidden |
| 60 | ParentDocuments | Parent Documents | OBJECT | ENUM | system | — | hidden |
| 61 | ParentRelationships | Parent Relationships | OBJECT | ENUM | system | — | hidden |
| 62 | CmRetentionDate | Retention Date | DATE | SINGLE | system | ✓ | hidden |
| 63 | CmThumbnails | Thumbnails | OBJECT | ENUM | system | — | hidden |
| 64 | DocumentTitle | Document Title | STRING | SINGLE | **custom** | ✓ | visible |
| 65 | ComponentBindingLabel | Component Binding Label | STRING | SINGLE | **custom** | ✓ | hidden |
| 66 | IgnoreRedirect | Ignore Redirect | BOOLEAN | SINGLE | **custom** | ✓ | hidden |
| 67 | EntryTemplateObjectStoreName | Entry Template Object Store Name | STRING | SINGLE | **custom** | ✓ | hidden |
| 68 | EntryTemplateLaunchedWorkflowNumber | Entry Template Launched Workflow Number | STRING | SINGLE | **custom** | ✓ | hidden |
| 69 | EntryTemplateId | Entry Template Id | GUID | SINGLE | **custom** | ✓ | hidden |
| 70 | ClbSecurityController | Security Controller | OBJECT | SINGLE | **custom** | ✓ | hidden |
| 71 | GenaiDateIndexed | Gen AI Date Indexed | DATE | SINGLE | **custom** | ✓ | visible |
| 72 | GenaiWatsonxSummary | Watsonx Summary | STRING | SINGLE | **custom** | ✓ | visible |
| 73 | FirstName | First Name | STRING | SINGLE | **custom** | ✓ | visible |
| 74 | LastName | Last Name | STRING | SINGLE | **custom** | ✓ | visible |
| 75 | PersonalID | Personal ID | STRING | SINGLE | **custom** | ✓ | visible |
| 76 | Birthdate | Birthdate | DATE | SINGLE | **custom** | ✓ | visible |
| 77 | EmployeeID | Employee ID | STRING | SINGLE | **custom** | ✓ | visible |
| 78 | JobRole | Job Role | STRING | SINGLE | **custom** | ✓ | visible |
| 79 | JobFunction | Job Function | STRING | SINGLE | **custom** | ✓ | visible |
| 80 | JobCode | Job Code | STRING | SINGLE | **custom** | ✓ | visible |
| 81 | JobLevel | Job Level | STRING | SINGLE | **custom** | ✓ | visible |
| 82 | JobStatus | Job Status | STRING | SINGLE | **custom** | ✓ | visible |
| 83 | EmploymentType | Employment Type | STRING | SINGLE | **custom** | ✓ | visible |
| 84 | CurrentStatus | Current Status | STRING | SINGLE | **custom** | ✓ | visible |
| 85 | Company | Company | STRING | SINGLE | **custom** | ✓ | visible |
| 86 | CompanyCode | Company Code | STRING | SINGLE | **custom** | ✓ | visible |
| 87 | BusinessUnit | Business Unit | STRING | SINGLE | **custom** | ✓ | visible |
| 88 | Division | Division | STRING | SINGLE | **custom** | ✓ | visible |
| 89 | Department | Department | STRING | SINGLE | **custom** | ✓ | visible |
| 90 | CostCenter | Cost Center | STRING | SINGLE | **custom** | ✓ | visible |
| 91 | Location | Location | STRING | SINGLE | **custom** | ✓ | visible |
| 92 | StartDate | Start Date | DATE | SINGLE | **custom** | ✓ | visible |
| 93 | TerminationDate | Termination Date | DATE | SINGLE | **custom** | ✓ | visible |
| 94 | SAPEmployeeID | SAP Employee ID | STRING | SINGLE | **custom** | ✓ | visible |
| 95 | SapLinkTrigger | SapLinkTrigger | BOOLEAN | SINGLE | **custom** | ✓ | visible |
| 96 | sapLinked | sapLinked | STRING | SINGLE | **custom** | ✓ | visible |
| 97 | SAPDocId | SAPDocId | STRING | SINGLE | **custom** | ✓ | visible |
| 98 | SAPDocProt | SAPDocProt | STRING | SINGLE | **custom** | ✓ | visible |
| 99 | SAPComps | SAPComps | STRING | SINGLE | **custom** | ✓ | visible |
| 100 | SAPContType | SAPContType | STRING | SINGLE | **custom** | ✓ | visible |
| 101 | SAPCompVersion | SAPCompVersion | STRING | SINGLE | **custom** | ✓ | visible |
| 102 | SFLinkTrigger | SFLinkTrigger | BOOLEAN | SINGLE | **custom** | ✓ | visible |
| 103 | SfSalesforceRelationships | Salesforce Relationships | OBJECT | SINGLE | **custom** | ✓ | visible |
| 104 | docuflowTimestamp | docuflowTimestamp | DATE | SINGLE | **custom** | ✓ | visible |
| 105 | docuflowUsername | docuflowUsername | STRING | SINGLE | **custom** | ✓ | visible |
| 106 | DocType | DocType | STRING | SINGLE | **custom** | ✓ | visible |
| 107 | DocumentCategory | Document Category | STRING | SINGLE | **custom** | ✓ | visible |
| 108 | ClassDocType | ClassDocType | STRING | SINGLE | **custom** | ✓ | visible |

**Total: 108 properties.**

</details>

---

<details>
<summary><b>System-owned properties (63)</b></summary>

| # | Symbolic Name | Display Name | Data Type | Searchable | Hidden |
|---|---|---|---|---|---|
| 1 | ClassDescription | Class Description | OBJECT | ✓ | hidden |
| 2 | This | This | OBJECT | ✓ | hidden |
| 3 | ReplicationGroup | Replication Group | OBJECT | ✓ | hidden |
| 4 | ExternalReplicaIdentities | External Replica Identities | OBJECT | ✓ | hidden |
| 5 | CmHoldRelationships | Hold Relationships | OBJECT | — | visible |
| 6 | Creator | Creator | STRING | ✓ | visible |
| 7 | DateCreated | Date Created | DATE | ✓ | visible |
| 8 | LastModifier | Last Modifier | STRING | ✓ | visible |
| 9 | DateLastModified | Date Last Modified | DATE | ✓ | visible |
| 10 | Id | ID | GUID | ✓ | visible |
| 11 | Name | Name | STRING | — | hidden |
| 12 | AuditedEvents | Audited Events | OBJECT | — | hidden |
| 13 | Owner | Owner | STRING | — | hidden |
| 14 | Permissions | Permissions | OBJECT | — | hidden |
| 15 | ActiveMarkings | Active Markings | OBJECT | — | visible |
| 16 | Containers | Containers | OBJECT | — | hidden |
| 17 | Annotations | Annotations | OBJECT | — | hidden |
| 18 | LockToken | Lock Token | GUID | ✓ | hidden |
| 19 | LockTimeout | Lock Timeout | LONG | ✓ | hidden |
| 20 | LockOwner | Lock Owner | STRING | ✓ | hidden |
| 21 | SecurityPolicy | Security Policy | OBJECT | ✓ | hidden |
| 22 | CoordinatedTasks | Coordinated Tasks | OBJECT | — | visible |
| 23 | FoldersFiledIn | Folders Filed In | OBJECT | — | hidden |
| 24 | SecurityParent | Security Parent | OBJECT | — | hidden |
| 25 | SecurityFolder | Security Folder | OBJECT | ✓ | hidden |
| 26 | IsReserved | Is Reserved | BOOLEAN | ✓ | visible |
| 27 | IsCurrentVersion | Is Current Version | BOOLEAN | ✓ | visible |
| 28 | IsFrozenVersion | Is Frozen Version | BOOLEAN | ✓ | visible |
| 29 | VersionSeries | Version Series | OBJECT | ✓ | hidden |
| 30 | Versions | Versions | OBJECT | — | hidden |
| 31 | CurrentVersion | Current Version | OBJECT | — | hidden |
| 32 | Reservation | Reservation | OBJECT | — | hidden |
| 33 | IsVersioningEnabled | Is Versioning Enabled | BOOLEAN | ✓ | visible |
| 34 | MajorVersionNumber | Major Version Number | LONG | ✓ | visible |
| 35 | MinorVersionNumber | Minor Version Number | LONG | ✓ | visible |
| 36 | VersionStatus | Version Status | LONG | ✓ | visible |
| 37 | ReservationType | Reservation Type | LONG | ✓ | visible |
| 38 | ReleasedVersion | Released Version | OBJECT | — | hidden |
| 39 | DateCheckedIn | Date Checked In | DATE | ✓ | visible |
| 40 | CmIsMarkedForDeletion | Is Marked For Deletion | BOOLEAN | — | visible |
| 41 | StoragePolicy | Storage Policy | OBJECT | ✓ | hidden |
| 42 | StorageLocation | Storage Location | STRING | ✓ | hidden |
| 43 | ContentElementsPresent | Content Elements Present | STRING | — | hidden |
| 44 | ContentElements | Content Elements | OBJECT | — | hidden |
| 45 | ContentSize | Content Size | DOUBLE | ✓ | visible |
| 46 | MimeType | Mime Type | STRING | ✓ | visible |
| 47 | DateContentLastAccessed | Date Content Last Accessed | DATE | ✓ | visible |
| 48 | ContentRetentionDate | Content Retention Date | DATE | ✓ | visible |
| 49 | DocumentLifecyclePolicy | Document Lifecycle Policy | OBJECT | ✓ | hidden |
| 50 | CurrentState | Current State | STRING | ✓ | visible |
| 51 | IsInExceptionState | Is In Exception State | BOOLEAN | ✓ | visible |
| 52 | WorkflowSubscriptions | Workflow Subscriptions | OBJECT | — | hidden |
| 53 | ClassificationStatus | Classification Status | LONG | ✓ | visible |
| 54 | StorageArea | Storage Area | OBJECT | ✓ | hidden |
| 55 | IndexationId | Indexation Id | GUID | ✓ | visible |
| 56 | CmIndexingFailureCode | Indexing Failure Code | LONG | ✓ | visible |
| 57 | CompoundDocumentState | Compound Document State | LONG | ✓ | hidden |
| 58 | ChildDocuments | Child Documents | OBJECT | — | hidden |
| 59 | ChildRelationships | Child Relationships | OBJECT | — | hidden |
| 60 | ParentDocuments | Parent Documents | OBJECT | — | hidden |
| 61 | ParentRelationships | Parent Relationships | OBJECT | — | hidden |
| 62 | CmRetentionDate | Retention Date | DATE | ✓ | hidden |
| 63 | CmThumbnails | Thumbnails | OBJECT | — | hidden |

**Total system-owned: 63 properties.**

</details>

---

<details>
<summary><b>Custom / business properties (45)</b></summary>

| # | Symbolic Name | Display Name | Data Type | Searchable | Hidden |
|---|---|---|---|---|---|
| 1 | DocumentTitle | Document Title | STRING | ✓ | visible |
| 2 | ComponentBindingLabel | Component Binding Label | STRING | ✓ | hidden |
| 3 | IgnoreRedirect | Ignore Redirect | BOOLEAN | ✓ | hidden |
| 4 | EntryTemplateObjectStoreName | Entry Template Object Store Name | STRING | ✓ | hidden |
| 5 | EntryTemplateLaunchedWorkflowNumber | Entry Template Launched Workflow Number | STRING | ✓ | hidden |
| 6 | EntryTemplateId | Entry Template Id | GUID | ✓ | hidden |
| 7 | ClbSecurityController | Security Controller | OBJECT | ✓ | hidden |
| 8 | GenaiDateIndexed | Gen AI Date Indexed | DATE | ✓ | visible |
| 9 | GenaiWatsonxSummary | Watsonx Summary | STRING | ✓ | visible |
| 10 | FirstName | First Name | STRING | ✓ | visible |
| 11 | LastName | Last Name | STRING | ✓ | visible |
| 12 | PersonalID | Personal ID | STRING | ✓ | visible |
| 13 | Birthdate | Birthdate | DATE | ✓ | visible |
| 14 | EmployeeID | Employee ID | STRING | ✓ | visible |
| 15 | JobRole | Job Role | STRING | ✓ | visible |
| 16 | JobFunction | Job Function | STRING | ✓ | visible |
| 17 | JobCode | Job Code | STRING | ✓ | visible |
| 18 | JobLevel | Job Level | STRING | ✓ | visible |
| 19 | JobStatus | Job Status | STRING | ✓ | visible |
| 20 | EmploymentType | Employment Type | STRING | ✓ | visible |
| 21 | CurrentStatus | Current Status | STRING | ✓ | visible |
| 22 | Company | Company | STRING | ✓ | visible |
| 23 | CompanyCode | Company Code | STRING | ✓ | visible |
| 24 | BusinessUnit | Business Unit | STRING | ✓ | visible |
| 25 | Division | Division | STRING | ✓ | visible |
| 26 | Department | Department | STRING | ✓ | visible |
| 27 | CostCenter | Cost Center | STRING | ✓ | visible |
| 28 | Location | Location | STRING | ✓ | visible |
| 29 | StartDate | Start Date | DATE | ✓ | visible |
| 30 | TerminationDate | Termination Date | DATE | ✓ | visible |
| 31 | SAPEmployeeID | SAP Employee ID | STRING | ✓ | visible |
| 32 | SapLinkTrigger | SapLinkTrigger | BOOLEAN | ✓ | visible |
| 33 | sapLinked | sapLinked | STRING | ✓ | visible |
| 34 | SAPDocId | SAPDocId | STRING | ✓ | visible |
| 35 | SAPDocProt | SAPDocProt | STRING | ✓ | visible |
| 36 | SAPComps | SAPComps | STRING | ✓ | visible |
| 37 | SAPContType | SAPContType | STRING | ✓ | visible |
| 38 | SAPCompVersion | SAPCompVersion | STRING | ✓ | visible |
| 39 | SFLinkTrigger | SFLinkTrigger | BOOLEAN | ✓ | visible |
| 40 | SfSalesforceRelationships | Salesforce Relationships | OBJECT | ✓ | visible |
| 41 | docuflowTimestamp | docuflowTimestamp | DATE | ✓ | visible |
| 42 | docuflowUsername | docuflowUsername | STRING | ✓ | visible |
| 43 | DocType | DocType | STRING | ✓ | visible |
| 44 | DocumentCategory | Document Category | STRING | ✓ | visible |
| 45 | ClassDocType | ClassDocType | STRING | ✓ | visible |

**Total custom: 45 properties.**

**Equation check: 63 (system) + 45 (custom) = 108 (total) ✓**

</details>

---

<details>
<summary><b>Searchable properties (84)</b></summary>

| # | Symbolic Name | Display Name | Data Type | Cardinality | Owned | Hidden |
|---|---|---|---|---|---|---|
| 1 | ClassDescription | Class Description | OBJECT | SINGLE | system | hidden |
| 2 | This | This | OBJECT | SINGLE | system | hidden |
| 3 | ReplicationGroup | Replication Group | OBJECT | SINGLE | system | hidden |
| 4 | ExternalReplicaIdentities | External Replica Identities | OBJECT | LIST | system | hidden |
| 5 | Creator | Creator | STRING | SINGLE | system | visible |
| 6 | DateCreated | Date Created | DATE | SINGLE | system | visible |
| 7 | LastModifier | Last Modifier | STRING | SINGLE | system | visible |
| 8 | DateLastModified | Date Last Modified | DATE | SINGLE | system | visible |
| 9 | Id | ID | GUID | SINGLE | system | visible |
| 10 | LockToken | Lock Token | GUID | SINGLE | system | hidden |
| 11 | LockTimeout | Lock Timeout | LONG | SINGLE | system | hidden |
| 12 | LockOwner | Lock Owner | STRING | SINGLE | system | hidden |
| 13 | SecurityPolicy | Security Policy | OBJECT | SINGLE | system | hidden |
| 14 | SecurityFolder | Security Folder | OBJECT | SINGLE | system | hidden |
| 15 | IsReserved | Is Reserved | BOOLEAN | SINGLE | system | visible |
| 16 | IsCurrentVersion | Is Current Version | BOOLEAN | SINGLE | system | visible |
| 17 | IsFrozenVersion | Is Frozen Version | BOOLEAN | SINGLE | system | visible |
| 18 | VersionSeries | Version Series | OBJECT | SINGLE | system | hidden |
| 19 | IsVersioningEnabled | Is Versioning Enabled | BOOLEAN | SINGLE | system | visible |
| 20 | MajorVersionNumber | Major Version Number | LONG | SINGLE | system | visible |
| 21 | MinorVersionNumber | Minor Version Number | LONG | SINGLE | system | visible |
| 22 | VersionStatus | Version Status | LONG | SINGLE | system | visible |
| 23 | ReservationType | Reservation Type | LONG | SINGLE | system | visible |
| 24 | DateCheckedIn | Date Checked In | DATE | SINGLE | system | visible |
| 25 | StoragePolicy | Storage Policy | OBJECT | SINGLE | system | hidden |
| 26 | StorageLocation | Storage Location | STRING | SINGLE | system | hidden |
| 27 | ContentSize | Content Size | DOUBLE | SINGLE | system | visible |
| 28 | MimeType | Mime Type | STRING | SINGLE | system | visible |
| 29 | DateContentLastAccessed | Date Content Last Accessed | DATE | SINGLE | system | visible |
| 30 | ContentRetentionDate | Content Retention Date | DATE | SINGLE | system | visible |
| 31 | DocumentLifecyclePolicy | Document Lifecycle Policy | OBJECT | SINGLE | system | hidden |
| 32 | CurrentState | Current State | STRING | SINGLE | system | visible |
| 33 | IsInExceptionState | Is In Exception State | BOOLEAN | SINGLE | system | visible |
| 34 | ClassificationStatus | Classification Status | LONG | SINGLE | system | visible |
| 35 | StorageArea | Storage Area | OBJECT | SINGLE | system | hidden |
| 36 | IndexationId | Indexation Id | GUID | SINGLE | system | visible |
| 37 | CmIndexingFailureCode | Indexing Failure Code | LONG | SINGLE | system | visible |
| 38 | CompoundDocumentState | Compound Document State | LONG | SINGLE | system | hidden |
| 39 | CmRetentionDate | Retention Date | DATE | SINGLE | system | hidden |
| 40 | DocumentTitle | Document Title | STRING | SINGLE | custom | visible |
| 41 | ComponentBindingLabel | Component Binding Label | STRING | SINGLE | custom | hidden |
| 42 | IgnoreRedirect | Ignore Redirect | BOOLEAN | SINGLE | custom | hidden |
| 43 | EntryTemplateObjectStoreName | Entry Template Object Store Name | STRING | SINGLE | custom | hidden |
| 44 | EntryTemplateLaunchedWorkflowNumber | Entry Template Launched Workflow Number | STRING | SINGLE | custom | hidden |
| 45 | EntryTemplateId | Entry Template Id | GUID | SINGLE | custom | hidden |
| 46 | ClbSecurityController | Security Controller | OBJECT | SINGLE | custom | hidden |
| 47 | GenaiDateIndexed | Gen AI Date Indexed | DATE | SINGLE | custom | visible |
| 48 | GenaiWatsonxSummary | Watsonx Summary | STRING | SINGLE | custom | visible |
| 49 | FirstName | First Name | STRING | SINGLE | custom | visible |
| 50 | LastName | Last Name | STRING | SINGLE | custom | visible |
| 51 | PersonalID | Personal ID | STRING | SINGLE | custom | visible |
| 52 | Birthdate | Birthdate | DATE | SINGLE | custom | visible |
| 53 | EmployeeID | Employee ID | STRING | SINGLE | custom | visible |
| 54 | JobRole | Job Role | STRING | SINGLE | custom | visible |
| 55 | JobFunction | Job Function | STRING | SINGLE | custom | visible |
| 56 | JobCode | Job Code | STRING | SINGLE | custom | visible |
| 57 | JobLevel | Job Level | STRING | SINGLE | custom | visible |
| 58 | JobStatus | Job Status | STRING | SINGLE | custom | visible |
| 59 | EmploymentType | Employment Type | STRING | SINGLE | custom | visible |
| 60 | CurrentStatus | Current Status | STRING | SINGLE | custom | visible |
| 61 | Company | Company | STRING | SINGLE | custom | visible |
| 62 | CompanyCode | Company Code | STRING | SINGLE | custom | visible |
| 63 | BusinessUnit | Business Unit | STRING | SINGLE | custom | visible |
| 64 | Division | Division | STRING | SINGLE | custom | visible |
| 65 | Department | Department | STRING | SINGLE | custom | visible |
| 66 | CostCenter | Cost Center | STRING | SINGLE | custom | visible |
| 67 | Location | Location | STRING | SINGLE | custom | visible |
| 68 | StartDate | Start Date | DATE | SINGLE | custom | visible |
| 69 | TerminationDate | Termination Date | DATE | SINGLE | custom | visible |
| 70 | SAPEmployeeID | SAP Employee ID | STRING | SINGLE | custom | visible |
| 71 | SapLinkTrigger | SapLinkTrigger | BOOLEAN | SINGLE | custom | visible |
| 72 | sapLinked | sapLinked | STRING | SINGLE | custom | visible |
| 73 | SAPDocId | SAPDocId | STRING | SINGLE | custom | visible |
| 74 | SAPDocProt | SAPDocProt | STRING | SINGLE | custom | visible |
| 75 | SAPComps | SAPComps | STRING | SINGLE | custom | visible |
| 76 | SAPContType | SAPContType | STRING | SINGLE | custom | visible |
| 77 | SAPCompVersion | SAPCompVersion | STRING | SINGLE | custom | visible |
| 78 | SFLinkTrigger | SFLinkTrigger | BOOLEAN | SINGLE | custom | visible |
| 79 | SfSalesforceRelationships | Salesforce Relationships | OBJECT | SINGLE | custom | visible |
| 80 | docuflowTimestamp | docuflowTimestamp | DATE | SINGLE | custom | visible |
| 81 | docuflowUsername | docuflowUsername | STRING | SINGLE | custom | visible |
| 82 | DocType | DocType | STRING | SINGLE | custom | visible |
| 83 | DocumentCategory | Document Category | STRING | SINGLE | custom | visible |
| 84 | ClassDocType | ClassDocType | STRING | SINGLE | custom | visible |

**Total searchable: 84 properties.**

</details>
:::

## 💡 Key Insights

#### For Business Analysts
Notice the `DocType` property — this is how we distinguish between a Job Application, a Payslip, a Performance Review, and an Employment Contract. They're all `HRDocument` instances, but `DocType` tells you which kind. This is a key design pattern in IBM Content Services: **use properties to differentiate, not separate classes**.

#### For Administrators
The SAP integration properties (`SAPDocId`, `SapLinkTrigger`, `sapLinked`) show that this class is likely connected to an external system. So, before modifying or deprecating this class, you'd need to check with the SAP integration team. Bob can help you identify these dependencies.