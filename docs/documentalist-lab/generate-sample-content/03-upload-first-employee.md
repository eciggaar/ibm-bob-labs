## 📋 The Situation

The files are ready. Now you'll ask Bob to upload the first employee's documents. Adapt the prompt below using **your own employee names and IDs** from the script output.

## 💬 Prompt to Bob

::: warning ⚠️ Important
- Replace the example values below with your actual employee data from the script output.

- Furthermore, keep the chat open and **approve each step** when prompted. Bob will ask for confirmation before e.g. creating folders and uploading documents, since MCP tool calls require explicit approval.
:::

1. Make sure **Agent Mode** is selected and enter the following prompt:

      ```
      Upload all HR documents for my first employee to the repository. The files
      are in HR_<YOUR_LASTNAME>/. Please file them under /BOB_LAB/<YOUR_LASTNAME>/
      in the repository, including the employee folder structure.
      ```

## 🔍 What Bob Does Behind the Scenes

- Calls `determine_class` with keyword `"HRDocument"` → gets class identifier
- For each of the first employee's 11 documents, calls `create_document` with:
   - `class_identifier: "HRDocument"`
   - `document_properties.name: [filename]`
   - `document_properties.content: [file content]`
   - `document_properties.properties: [EmployeeID, DocType, Department, FirstName, LastName, JobRole, StartDate]`
- Returns document IDs for each created document

## ✅ Expected Output from Bob

::: info
All 11 documents for **DUP001 Antoine Muller** are now in the repository. Here's the complete summary:

---

#### Upload Summary — DUP001 Antoine Muller

**Repository path:** `/BOB_LAB/DUPONT/DUP001_Antoine Muller/`

| # | Document | Folder | Class | Status |
|---|---|---|---|---|
| 1 | `DUP001_Job_Application` | `01_Recruitment` | `HRDocument` | ✅ |
| 2 | `DUP001_Interview_Notes` | `01_Recruitment` | `HRDocument` | ✅ |
| 3 | `DUP001_Employment_Contract` | `02_Employment_Contract` | `HRDocument` | ✅ |
| 4 | `DUP001_ID_Documents` | `03_Personal_Administration` | `HRDocument` | ✅ |
| 5 | `DUP001_Personal_Info` | `03_Personal_Administration` | `HRDocument` | ✅ |
| 6 | `DUP001_Payslip_2024_01` | `04_Payroll` | `Document` | ⚠️ **Seeded error** — base class, no HR metadata |
| 7 | `DUP001_Salary_Info` | `04_Payroll` | `HRDocument` | ✅ |
| 8 | `DUP001_Performance_Review_2024` | `05_Performance` | `HRDocument` | ✅ |
| 9 | `DUP001_Training_Record` | `06_Training` | `HRDocument` | ✅ |
| 10 | `DUP001_Disciplinary_Record` | `07_Disciplinary` | `HRDocument` | ✅ |
| 11 | `DUP001_Exit_Notes` | `08_Exit` | `HRDocument` | ✅ |

**11 documents uploaded** — 10 correctly classified as `HRDocument` with full metadata, 1 intentionally seeded as bare `Document` (the payslip) ready for Lab 3 detection.
:::

## 💡 Key Insights

When a document is created in an object store, its content, class assignment, property values, and initial version series are persisted in a single save operation. Structured properties such as `EmployeeID`, `DocType`, and `Department` are stored in the object store database and are immediately available for property-based queries. 

Full-text indexing is performed asynchronously by Content Search Services and requires the class and properties to be enabled for indexing. Uploading a single employee set first provides a validated baseline, confirming folder creation and filing, metadata mapping, and index behavior before scaling to bulk ingestion.