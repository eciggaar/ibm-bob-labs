## 📋 The Situation

A business analyst in the room asks: *"Why does HRDocument have 108 properties? That seems like a lot."* You ask Bob to explain the inheritance model.

## 💬 Prompt to Bob

1. Make sure **Ask Mode** is selected and enter the following prompt:

    ```
    Can you explain the relationship between the base Document class and 
    HRDocument? Why does HRDocument have so many properties? What does it 
    inherit and what does it add?
    ```

## ✅ Expected Output from Bob

Bob should provide an explaination similar to:

::: info

Based on the property data in the file:

---

#### `Document` → `HRDocument` Inheritance

---

##### The base `Document` class — 63 inherited system properties

Every custom document class is a subclass of `Document`. You get 63 system-owned properties automatically — IBM manages them, you cannot remove or rename any of them:

| Group | Examples |
|---|---|
| **Identity & audit** | `Id`, `Creator`, `DateCreated`, `LastModifier`, `DateLastModified` |
| **Security** | `Owner`, `Permissions`, `SecurityPolicy`, `SecurityFolder`, `ActiveMarkings` |
| **Versioning** | `IsCurrentVersion`, `MajorVersionNumber`, `MinorVersionNumber`, `VersionStatus`, `IsReserved` |
| **Content & storage** | `ContentSize`, `MimeType`, `ContentElements`, `StoragePolicy`, `StorageArea` |

---

#### What `HRDocument` adds — 45 custom properties

On top of the 63 inherited ones, `HRDocument` carries 45 custom properties. But **not all 45 were defined by the HR team**.

---

##### ✅ Genuine HR-domain properties (36)

These were defined specifically for HR business use:

| Group | Properties | Count |
|---|---|---|
| **Employee identity** | `FirstName`, `LastName`, `PersonalID`, `Birthdate`, `EmployeeID` | 5 |
| **Job & employment** | `JobRole`, `JobFunction`, `JobCode`, `JobLevel`, `JobStatus`, `EmploymentType`, `CurrentStatus`, `StartDate`, `TerminationDate` | 9 |
| **Organisation** | `Company`, `CompanyCode`, `BusinessUnit`, `Division`, `Department`, `CostCenter`, `Location` | 7 |
| **SAP integration** | `SAPEmployeeID`, `SapLinkTrigger`, `sapLinked`, `SAPDocId`, `SAPDocProt`, `SAPComps`, `SAPContType`, `SAPCompVersion` | 8 |
| **Salesforce integration** | `SFLinkTrigger`, `SfSalesforceRelationships` | 2 |
| **DocuFlow integration** | `docuflowTimestamp`, `docuflowUsername` | 2 |
| **Classification** | `DocType`, `DocumentCategory`, `ClassDocType` | 3 |

---

##### ⚙️ Platform-level or integration properties (9)

These are custom (not system-owned) but were **not defined by the HR team** — they were added by the Content Services platform setup or AI infrastructure and exist across many classes:

| Property | Origin |
|---|---|
| `DocumentTitle` | Generic CS platform metadata |
| `ComponentBindingLabel` | IBM Content Navigator platform |
| `IgnoreRedirect` | IBM Content Navigator platform |
| `EntryTemplateObjectStoreName` | Entry template infrastructure |
| `EntryTemplateLaunchedWorkflowNumber` | Entry template infrastructure |
| `EntryTemplateId` | Entry template infrastructure |
| `ClbSecurityController` | CLB security infrastructure |
| `GenaiDateIndexed` | watsonx AI platform |
| `GenaiWatsonxSummary` | watsonx AI platform |

---

#### Why so many properties?

Two structural reasons:

1. **One class, many document types.** `DocType` distinguishes a Job Application from a Payslip from a Performance Review — all stored as `HRDocument`. That single class must carry fields for every HR use case at once.

2. **Three external systems integrated directly.** SAP (8 properties), Salesforce (2), and DocuFlow (2) each stamped their own linking fields onto the class.

---

#### Numbers at a glance

| Layer | Count |
|---|---|
| Inherited from `Document` (system) | 63 |
| Added by HR team (genuine HR) | 36 |
| Added by platform/integrations | 9 |
| **Total** | **108** |
:::

## 💡 The "Class vs Property" Design Decision

This is a fundamental IBM Content Services design question: *"Should I create a new class, or add a property to an existing class?"*

### Create a new class when:
- The document type has fundamentally different properties
- Different security policies apply
- Different lifecycle/retention rules apply
- Different workflows are triggered

### Add a property when:
- The document type is a variant of an existing type
- The same properties apply, just with different values
- You want to avoid class proliferation

In case you find a lot of duplicate classes in your repository this is largely caused by teams choosing *"Create a new class"* when they also chould have added a property to a matching existing class.