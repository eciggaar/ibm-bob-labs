---
title: "Upload First Employee"
lab_series: "generate-sample-content"
section_number: 3
duration: "~10 minutes"
description: "Upload the HR documents for your first employee"
---

## The Situation

The files are ready. Now you'll ask Bob to upload the first employee's documents. Adapt the prompt below using **your own employee names and IDs** from the script output.

## 💬 Prompt to Bob

> ⚠️ Important - Replace the example values below with your actual employee data from the script output.

```
Bob, please upload all HR documents for my first employee to the repository. The files are in HR_<YOUR_LASTNAME>/. 
Please file them under /BOB_LAB/<YOUR_LASTNAME>/ in the repository, including the employee folder structure.
```

## 🔍 What Bob Does Behind the Scenes

1. Calls `determine_class` with keyword `"HRDocument"` → gets class identifier
2. For each of the first employee's 11 documents, calls `create_document` with:
   - `class_identifier: "HRDocument"`
   - `document_properties.name: [filename]`
   - `document_properties.content: [file content]`
   - `document_properties.properties: [EmployeeID, DocType, Department, FirstName, LastName, JobRole, StartDate]`
3. Returns document IDs for each created document

## ✅ Expected Output from Bob

```
✅ Antoine Muller's Documents Uploaded Successfully
═══════════════════════════════════════════════════

Employee: Antoine Muller (ID: DUP001)
Department: Human Resources | Role: HR Specialist | Start: 2021-01-10
Namespace: /BOB_LAB/DUPONT/

Documents Created:
┌─────────────────────────────────────────┬──────────────────────────────────────┐
│ Document Name                           │ Document ID                          │
├─────────────────────────────────────────┼──────────────────────────────────────┤
│ DUP001_Job_Application.txt              │ {GUID-001}                           │
│ DUP001_Interview_Notes.txt              │ {GUID-002}                           │
│ DUP001_Employment_Contract.txt          │ {GUID-003}                           │
│ DUP001_ID_Documents.txt                 │ {GUID-004}                           │
│ DUP001_Personal_Info.txt                │ {GUID-005}                           │
│ DUP001_Payslip_2024_01.txt              │ {GUID-006}                           │
│ DUP001_Salary_Info.txt                  │ {GUID-007}                           │
│ DUP001_Performance_Review_2024.txt      │ {GUID-008}                           │
│ DUP001_Training_Record.txt              │ {GUID-009}                           │
│ DUP001_Disciplinary_Record.txt          │ {GUID-010}                           │
│ DUP001_Exit_Notes.txt                   │ {GUID-011}                           │
└─────────────────────────────────────────┴──────────────────────────────────────┘

11 documents created. All properties set correctly.
```

## 💡 What Happens at Creation

When Bob calls `create_document`, in the live FNCM repository:
1. A new document object is created with a unique GUID
2. The class is set to `HRDocument` (inheriting all 109 properties)
3. The text content is stored
4. The metadata properties are set (EmployeeID, DocType, etc.)
5. Major version 1.0 of the document is created

The document is now searchable by any of its properties — you can find it by EmployeeID, by DocType, by Department, or by full-text content search.