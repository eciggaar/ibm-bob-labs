---
title: "Check Other Classes"
lab_series: "review-and-reclassify"
section_number: 2
duration: "~5 minutes"
description: "Find documents in wrong classes"
---

## The Situation

The audit found 2 issues in `HRDocument`. But what about documents in your namespace that should be `HRDocument` but were accidentally filed under the wrong class entirely — like the base `Document` class or the `Contract` class?

## 💬 Prompt to Bob

> ⚠️ Replace `DUPONT` and `DUP` with your actual namespace and employee ID prefix.

Switch to **Ask Mode**

```
Check the document classes of the documents starting with CIG001 and see if there are mismatches
```

## 🔍 What Bob Does Behind the Scenes

1. Calls `lookup_documents_by_name` with keyword `"CIG001"` looking for documents in your namespace that start with CIG001.  with names matching your employee ID pattern (e.g., `DUP[0-9]{3}_*`)
2. Analyses their classifications

## ✅ Expected Output from Bob

```
I found 11 documents starting with CIG001 and identified **one classification mismatch**:

**Misclassified Document:**
- [`CIG001_Payslip_2024_01.txt`]({9ED04420-0000-C109-8C2D-F73C3D0151F5}) - Currently classified as generic `Document` instead of `HRDocument`

**Correctly Classified (10 documents):**
All other CIG001 documents are properly classified as `HRDocument`:
- CIG001_Job_Application.txt
- CIG001_Interview_Notes.txt
- CIG001_Employment_Contract.txt
- CIG001_Personal_Info.txt
- CIG001_ID_Documents.txt
- CIG001_Salary_Info.txt
- CIG001_Performance_Review_2024.txt
- CIG001_Training_Record.txt
- CIG001_Disciplinary_Record.txt
- CIG001_Exit_Notes.txt

**Summary:** 90.9% correctly classified (10/11). The payslip document should be reclassified to HRDocument to align with the other HR documents in this series.
```

## 💡 The Iceberg Problem

In this lab, we seeded exactly 5 errors. In a real repository that has grown organically over years, you might find hundreds of misclassified documents. The pattern is always the same: documents uploaded in a hurry, by users who didn't know the right class, or by integrations that defaulted to the base `Document` class. Bob can assist in finding them all systematically.