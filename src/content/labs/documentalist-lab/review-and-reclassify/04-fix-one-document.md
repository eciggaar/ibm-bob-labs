---
title: "Fix One Document"
lab_series: "review-and-reclassify"
section_number: 4
duration: "~10 minutes"
description: "Execute the reclassification workflow"
---

## The Situation

Bob has diagnosed the problem. Now you'll ask him to fix it — reclassifying the document and setting all the correct properties.

## 💬 Prompt to Bob

> ⚠️ Replace the document reference with your actual document.

```
Bob, go ahead and fix one document xxxxxx
Reclassify it as HRDocument and set all the correct properties
based on what you found in the content.
```

## 🔍 What Bob Does Behind the Scenes

1. Calls `update_document_class` → changes class from `Document` to `HRDocument`
2. Calls `update_document_properties` → sets `EmployeeID`, `FirstName`, `LastName`, `DocType`, `Department`, `JobRole`
3. Returns confirmation with before/after comparison

## ⚠️ The Reclassification Warning

Before Bob changes a document's class, he should warn you:

```
⚠️  WARNING: Changing a document's class can result in property loss.

When changing from Document → HRDocument:
  • Properties that exist in Document but NOT in HRDocument will be REMOVED
  • Properties that exist in HRDocument but NOT in Document will be ADDED (empty)
  • Content (the actual file) is NOT affected

In this case, Document is the PARENT class of HRDocument, so:
  • All 79 Document properties are preserved ✅
  • 40 new HRDocument properties are added (initially empty) ✅
  • No properties will be lost ✅

Safe to proceed? [Yes/No]
```

## ✅ Expected Output from Bob

```
🔄 Reclassification Complete: DUP001_Payslip_2024_01.txt
══════════════════════════════════════════════════════════

Before → After:
┌─────────────────┬──────────────────────┬──────────────────────┐
│ Property        │ Before               │ After                │
├─────────────────┼──────────────────────┼──────────────────────┤
│ Class           │ Document ❌          │ HRDocument ✅        │
│ EmployeeID      │ (empty) ❌           │ DUP001 ✅            │
│ FirstName       │ (empty) ❌           │ Antoine ✅           │
│ LastName        │ (empty) ❌           │ Muller ✅            │
│ DocType         │ (empty) ❌           │ Payslip ✅           │
│ Department      │ (empty) ❌           │ Human Resources ✅   │
│ JobRole         │ (empty) ❌           │ HR Specialist ✅     │
└─────────────────┴──────────────────────┴──────────────────────┘

Document is now correctly classified. ✅
It will appear in searches for:
  • All HRDocument instances
  • EmployeeID = DUP001 (Antoine Muller's documents)
  • DocType = Payslip
  • Department = Human Resources
```

## 💡 The Reclassification Risk

The warning is critical. If you were reclassifying from `Contract` to `HRDocument` (two sibling classes, not parent-child), properties specific to `Contract` that don't exist in `HRDocument` would be **permanently lost**. Always check the class hierarchy before reclassifying. Bob knows this and will warn you.