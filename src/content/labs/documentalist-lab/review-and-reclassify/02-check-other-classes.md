---
title: "Check Other Classes"
lab_series: "review-and-reclassify"
section_number: 2
duration: "~5 minutes"
description: "Find documents in wrong classes"
---

## The Situation

The audit found 2 issues in `HRDocument`. But what about documents in your namespace that should be `HRDocument` but were accidentally filed under the wrong class entirely — like the base `Document` class or the `Contract` class?

## 💬 Prompt to Bob (ASK MODE)

> ⚠️ Replace `DUPONT` and `DUP` with your actual namespace and employee ID prefix.

```
Bob, also check if any documents in my namespace /BOB_LAB/DUPONT/ that look like HR documents
were accidentally filed under the wrong class —
like the base Document class or the Contract class.
Look for documents with names that follow my HR naming pattern (DUP prefix).
```

## 🔍 What Bob Does Behind the Scenes

1. Calls `determine_class` with keyword `"Document"` → gets base Document class
2. Calls `document_search` on base `Document` class, looking for documents in your namespace with names matching your employee ID pattern (e.g., `DUP[0-9]{3}_*`)
3. Calls `determine_class` with keyword `"Contract"` → gets Contract class
4. Calls `document_search` on `Contract` class for similar naming patterns in your namespace
5. Combines results from your namespace

## ✅ Expected Output from Bob

```
🔍 Cross-Class Audit — Looking for Misplaced HR Documents (Namespace: /BOB_LAB/DUPONT/)
═══════════════════════════════════════════════════════════════════════════════════════

Searching base Document class for HR-pattern documents in your namespace...
Found 2 documents:

┌───┬──────────────────────────────────────────┬──────────────────────────────────────┬──────────────┬──────────────────────────────────┐
│ # │ Document Name                            │ Document ID                          │ Current Class│ Issue                            │
├───┼──────────────────────────────────────────┼──────────────────────────────────────┼──────────────┼──────────────────────────────────┤
│ 3 │ DUP001_Payslip_2024_01.txt               │ {GUID-xxx}                           │ Document     │ Should be HRDocument — no EmployeeID │
│ 4 │ DUP004_Disciplinary_Record.txt           │ {GUID-xxx}                           │ Document     │ Should be HRDocument — no metadata   │
└───┴──────────────────────────────────────────┴──────────────────────────────────────┴──────────────┴──────────────────────────────────┘

Searching Contract class for HR-pattern documents in your namespace...
Found 1 document:

┌───┬──────────────────────────────────────────┬──────────────────────────────────────┬──────────────┬──────────────────────────────────┐
│ # │ Document Name                            │ Document ID                          │ Current Class│ Issue                            │
├───┼──────────────────────────────────────────┼──────────────────────────────────────┼──────────────┼──────────────────────────────────┤
│ 5 │ DUP002_Employment_Contract.txt           │ {GUID-xxx}                           │ Contract     │ Should be HRDocument — missing Department │
└───┴──────────────────────────────────────────┴──────────────────────────────────────┴──────────────┴──────────────────────────────────┘

━━━ Full Audit Summary (Your Namespace) ━━━
Total issues found: 5 documents need attention

  #1 — DUP003_Performance_Review_2024.txt  [HRDocument]  Wrong EmployeeID (000000)
  #2 — DUP005_Exit_Notes.txt               [HRDocument]  Missing EmployeeID and DocType
  #3 — DUP001_Payslip_2024_01.txt          [Document]    Wrong class, no metadata
  #4 — DUP004_Disciplinary_Record.txt      [Document]    Wrong class, no metadata
  #5 — DUP002_Employment_Contract.txt      [Contract]    Wrong class, missing Department
```

## 💡 The Iceberg Problem

In this lab, we seeded exactly 5 errors. In a real repository that has grown organically over years, you might find hundreds of misclassified documents. The pattern is always the same: documents uploaded in a hurry, by users who didn't know the right class, or by integrations that defaulted to the base `Document` class. Bob can find them all systematically.