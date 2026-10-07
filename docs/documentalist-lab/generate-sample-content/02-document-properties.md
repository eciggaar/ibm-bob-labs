## 📋 The Situation

Before uploading anything, you want Bob to tell you exactly which properties matter for HR documents — so you know what metadata to include when creating each document.

## 💬 Prompt to Bob

1. Make sure **Agent Mode** is selected and enter the following prompt:
    ```
    Before we upload HR documents to the repository, tell me which 
    properties I should set on each document? What's the difference between 
    mandatory and optional properties for HRDocument?
    ```

## 🔍 What Bob Does Behind the Scenes

- Calls `determine_class` with keyword `"HRDocument"` → confirms symbolic name
- Calls `get_class_property_descriptions` on `"HRDocument"` → retrieves all HR-specific properties
- Categorizes them by importance for document creation

## ✅ Expected Output from Bob

::: info

Good — I have all the properties. Let me now present them clearly, split into system-owned vs. custom business properties, and highlight what the script actually sets.

The `HRDocument` class has **110 total properties** returned by the API. The ones that matter for your lab uploads are the **custom business properties** (not system-owned). Here's a breakdown:

---

#### HRDocument Properties

---

##### Custom business properties — set these on upload

The repository doesn't enforce requiredness at the API level (all fields technically optional), but from a **lab data quality perspective** there are effectively two tiers:

---

##### Core — set on every document (Lab 2 & 3 expect these)

| Property | Symbolic Name | Type | What to put |
|---|---|---|---|
| Document Title | `DocumentTitle` | STRING | Filename or descriptive title |
| Employee ID | `EmployeeID` | STRING | e.g. `DUP001` |
| First Name | `FirstName` | STRING | e.g. `Antoine` |
| Last Name | `LastName` | STRING | e.g. `Muller` |
| Doc Type | `DocType` | STRING | e.g. `Payslip`, `EmploymentContract` |
| Department | `Department` | STRING | e.g. `Human Resources` |

---

##### Enrichment — set when known (improves searchability)

| Property | Symbolic Name | Type | What to put |
|---|---|---|---|
| Job Role | `JobRole` | STRING | e.g. `HR Specialist` |
| Company | `Company` | STRING | `Acme Corporation` |
| Company Code | `CompanyCode` | STRING | `ACME-FR` |
| Cost Center | `CostCenter` | STRING | e.g. `CC-HR-001` |
| Location | `Location` | STRING | e.g. `Paris, France` |
| Start Date | `StartDate` | DATE | e.g. `2021-01-10` |

---

##### Rarely needed in this lab

| Property | Symbolic Name | Type | Notes |
|---|---|---|---|
| Personal ID | `PersonalID` | STRING | National ID — redacted in generated docs |
| Birthdate | `Birthdate` | DATE | Not in generated data |
| Job Function / Code / Level / Status | various | STRING | Not populated by script |
| Employment Type / Current Status | various | STRING | Not populated by script |
| Termination Date | `TerminationDate` | DATE | Only for exit documents |
| SAP fields (`SAPEmployeeID`, `SAPDocId`, …) | various | STRING | SAP integration — not relevant here |
| Salesforce fields | various | — | Salesforce integration — not relevant here |

---

#### System-owned properties — set automatically, never touch

These are managed by Content Cortex and you cannot (and should not) set them manually:

| Property | Set by |
|---|---|
| `Creator`, `DateCreated`, `LastModifier`, `DateLastModified` | Repository on create/update |
| `Id`, `VersionSeries`, `MajorVersionNumber`, `MinorVersionNumber` | Repository versioning engine |
| `ContentSize`, `MimeType` | Repository on content upload |
| `IsCurrentVersion`, `IsReserved`, `IsFrozenVersion` | Check-in/check-out system |
| `DateCheckedIn`, `VersionStatus` | Check-in system |

---

#### The Lab 3 difference — what the seeded errors break

The 5 seeded errors all violate the **core properties** tier:

| Error type | Missing/wrong core property |
|---|---|
| Base `Document` class (DUP001, DUP004) | **All** — wrong class, no properties at all |
| Wrong class `Contract` (DUP002) | Wrong class + missing `Department` |
| Wrong EmployeeID (DUP003) | `EmployeeID` = `000000` instead of `DUP003` |
| Missing fields (DUP005) | Missing `Department` + `DocType` |

The metadata comment block at the bottom of each generated `.txt` file tells you exactly which properties to set for that specific document when uploading.
:::

## 💡 Key Insight

Notice that `DocType` is what distinguishes a Payslip from a Performance Review — they're both `HRDocument` instances. This is the design pattern we discussed in the first lab: *"use properties to differentiate, not separate classes"*. 

When we search for "all payslips for employee DUP001", we'll search for `HRDocument` where `EmployeeID = DUP001` AND `DocType = Payslip`.