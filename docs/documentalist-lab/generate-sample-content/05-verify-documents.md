## 📋 The Situation

Before moving on, you want to verify that the documents were uploaded correctly. For this, check the payslip for your first employee.

## 💬 Prompt to Bob

::: warning ⚠️ Important
Replace the example values below with your actual employee data from the script output.
:::

1. Make sure **Agent Mode** is selected and enter the following prompt:

    ```
    Can you verify that <FIRST_THREE_CHARS_OF_LASTNAME>001's January 2024 
    payslip was uploaded correctly? Show me its properties. My folder is
    <YOUR_LASTNAME>.
    ```

## 🔍 What Bob Does Behind the Scenes

- Calls `lookup_documents_by_path` with two path levels:
  - Level 1: `["DUPONT"]` — targets the participant's namespace folder
  - Level 2: `["payslip", "January", "2024"]` — matches the document's name within it
- Calls `get_document_properties` with the document ID returned by the first call (`{A0F70520-0000-C139-8A2E-AD79B79AB60E}`).
- Returns the full property set.

## ✅ Expected Output from Bob

::: info
The document was found and here are its properties — but there's a **notable issue** flagged:

---

#### 📄 DUP001 — January 2024 Payslip

---

| Property | Value |
|---|---|
| **Document ID** | `{A0F70520-0000-C139-8A2E-AD79B79AB60E}` |
| **Name** | `DUP001_Payslip_2024_01` |
| **Path** | `/BOB_LAB/DUPONT/DUP001_Antoine Muller/04_Payroll/` |
| **Class** | `Document` ⚠️ |
| **MIME Type** | `text/plain` |
| **Content Size** | 2,345 bytes |
| **Version** | 1.0 (current) |
| **Creator** | `cpmanager` |
| **Date Created** | 2026-10-01 |
| **Date Checked In** | 2026-10-01 |
| **Last Modified** | 2026-10-01 |

---

##### ⚠️ Issue Detected: Wrong Document Class

The payslip was uploaded under the generic **`Document`** class instead of the expected **`HRDocument`** class. This is confirmed both by:

1. The `className` field returning `Document` (all other employees' payslips — DUP002 through DUP005 — are correctly classified as `HRDocument`).
2. The AI summary embedded in the document explicitly notes: *"The document was incorrectly uploaded as a generic Document class without the required EmployeeID metadata, which must be corrected."*

As a result, **HR-specific metadata properties** (such as `EmployeeID`) are missing from this document.

Would you like me to reclassify it to `HRDocument` and populate the missing properties?
:::

## 💡 Key Insights

Verification is an important step in the document upload process. By checking a sample document, you can spot problems that are invisible in the file system — like a document filed under the wrong class with missing metadata. In this case, the check revealed exactly that: a seeded error that will be corrected in the next lab.