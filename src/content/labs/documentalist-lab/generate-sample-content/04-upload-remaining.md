---
title: "Upload Remaining Employees"
lab_series: "generate-sample-content"
section_number: 4
duration: "~10 minutes"
description: "Batch upload the remaining 4 employees"
---

## The Situation

Your first employee's documents are in. Now you'll upload the remaining 4 employees in one go.

## 💬 Prompt to Bob

> ⚠️ Replace the example values below with **your actual employee data** from the script output.

```
Bob, now please upload the HR documents for my remaining 4 employees, files are in HR_DUPONT/.
Please file all documents under /BOB_LAB/DUPONT/ in the repository, including the employee folder structure.
```

## ✅ Expected Output from Bob

```
✅ Batch Upload Complete
═══════════════════════════════════════════════════

Namespace: /BOB_LAB/DUPONT/

Summary:
┌──────────────────────┬────────┬────────────────┬───────────────────┬───────────┐
│ Employee             │ ID     │ Department     │ Role              │ Documents │
├──────────────────────┼────────┼────────────────┼───────────────────┼───────────┤
│ Antoine Muller       │ DUP001 │ Human Resources│ HR Specialist     │ 11 ✅     │
│ Lina Girard          │ DUP002 │ Finance        │ Financial Analyst │ 11 ✅     │
│ Lucas Mercier        │ DUP003 │ Marketing      │ Marketing Manager │ 11 ✅     │
│ Mia Renard           │ DUP004 │ IT             │ Senior Developer  │ 11 ✅     │
│ Amira Dubois         │ DUP005 │ Sales          │ Sales Rep         │ 11 ✅     │
└──────────────────────┴────────┴────────────────┴───────────────────┴───────────┘

Total: 55 documents uploaded to HRDocument class
All documents have EmployeeID, DocType, Department, FirstName, LastName set.

⚠️  Note: 5 documents were uploaded with intentional errors for Lab 3 training.
    See the instructor notes below.
```

## 💡 Key Insight

Bob can process multiple employees in a single batch operation, making the upload process efficient. Each document is created with the correct metadata, making them immediately searchable and usable in the repository.