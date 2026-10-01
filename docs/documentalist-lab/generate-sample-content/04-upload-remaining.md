---
title: "Upload Remaining Employees"
lab_series: "generate-sample-content"
section_number: 4
duration: "~10 minutes"
description: "Batch upload the remaining 4 employees"
---

## 📋 The Situation

Your first employee's documents are in. Now you'll upload the remaining 4 employees in one go.

## 💬 Prompt to Bob
::: warning ⚠️ Important
Replace the example values below with your actual employee data from the script output.
:::


1. Switch to **Agent Mode** and enter the following prompt:

    ```
    Help me to upload the HR documents for my remaining 4 employees. The files 
    are in HR_<YOUR_LASTNAME>/. 

    Please file all documents under /BOB_LAB/<YOUR_LASTNAME>/ in the repository
    including the employee folder structure. Use available code if possible.
    ```

## ✅ Expected Output from Bob

::: info

I have completed the bulk upload of your remaining HR documents successfully. Below is the full summary for the `DUPONT` namespace.

#### Upload Summary — DUPONT

| Employee | Uploaded | Already in repo | Seeded error |
|---|---|---|---|
| DUP001 Antoine Muller | 0 | 11 | — |
| DUP002 Lina Girard | 11 | 0 | Wrong class (`Contract` instead of `HRDocument`) — `Department` missing |
| DUP003 Lucas Mercier | 11 | 0 | `HRDocument` with `EmployeeID = 000000` (should be the real ID) |
| DUP004 Mia Renard | 11 | 0 | Bare `Document` class — no metadata at all |
| DUP005 Amira Dubois | 11 | 0 | `HRDocument` but missing `Department` and `DocType` |

**Total uploaded:** 44  |  **Already in repo:** 11  |  **Errors:** 0

##### Key Details & Lab Seeds Applied

---

* **Employee Folders Created:** 41 new folders created in the content repository under `/BOB_LAB/DUPONT/`.
* **Deduplication:** The 11 documents belonging to `DUP001_Antoine Muller` were detected in the repository and safely skipped to avoid duplication.
* **Seeded Error Simulation:** As designed for Lab 3, the following error seeds were systematically applied to test downstream remediation:
  1. **DUP002:** `DUP002_Employment_Contract.txt` uploaded as `Contract` class (wrong domain), causing `Department` to be missing.
  2. **DUP003:** `DUP003_Performance_Review_2024.txt` uploaded with incorrect `EmployeeID = 000000`.
  3. **DUP004:** `DUP004_Disciplinary_Record.txt` uploaded as a bare `Document` class with no metadata at all.
  4. **DUP005:** `DUP005_Exit_Notes.txt` uploaded as `HRDocument` but missing its `Department` and `DocType` properties.

All files are successfully organized under your employee directory structure in the content repository!
:::

## 💡 Key Insight

When you requested the upload of your remaining employees, Bob automatically activated a specialized `hr-document-upload` skill. This skill analyzed your local folders, checked the repository to safely skip existing duplicates, built the employee folder structures, and applied the Lab 3 misclassification seeds. Aside from those intentional seeds, each document was successfully created with proper metadata, making them immediately searchable and usable within the repository.