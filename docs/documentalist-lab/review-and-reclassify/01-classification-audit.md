---
title: "Run a Classification Audit"
lab_series: "review-and-reclassify"
section_number: 1
duration: "~5 minutes"
description: "Find all documents with missing or incorrect metadata"
---

## The Situation

You want Bob to find all HR documents in your namespace that are missing critical metadata — specifically, documents without an `EmployeeID` or with an obviously wrong one.

## 💬 Prompt to Bob

> ⚠️ Replace `DUPONT` with your actual last name from Lab 2.

Switch to **Ask Mode**

```
Bob, I want to run a classification audit on my HR documents in namespace /BOB_LAB/<YOUR_LASTNAME>/.
Can you find all documents in the HRDocument class that are missing an EmployeeID, or have an EmployeeID that doesn't look right?
```

## 🔍 What Bob Does Behind the Scenes

1. Calls `determine_class` with keyword `"HRDocument"` → confirms class identifier
2. Calls `get_searchable_property_descriptions HRDocument` → confirms `EmployeeID` is searchable
3. Calls `document_search` on `HRDocument` class filtering for empty or suspicious `EmployeeID` values within your namespace
4. Returns the list of problematic documents from your namespace

## ✅ Expected Output from Bob

```
🔍 Classification Audit — HRDocument Class (Namespace: /BOB_LAB/DUPONT/)
═══════════════════════════════════════════════════════════════════════

Classification audit complete for HRDocument class in /BOB_LAB/DUPONT/ namespace.

Found 53 HRDocuments total with the following issues:

**Missing EmployeeID (3 documents):**

┌───┬──────────────────────────────────────────┬──────────────────────────────────────┬─────────────────┬──────────────────────┐
│ # │ Document Name                            │ Document ID                          │ EmployeeID      │ Issue                │
├───┼──────────────────────────────────────────┼──────────────────────────────────────┼─────────────────┼──────────────────────┤
│ 1 │ Company Benefits.pdf                     │ {B09D8698-0000-C124-95A1-5A04A48BFDBD}│ (null)          │ EmployeeID missing   │
│ 2 │ Company Benefits.pdf                     │ {C09D8698-0000-C210-91EA-20346C4774A3}│ (null)          │ EmployeeID missing   │
│ 3 │ Personal Information_Health Certificate  │ {E0B18698-0000-CF15-9E43-98C0009BCE21}│ (null)          │ EmployeeID missing   │
└───┴──────────────────────────────────────────┴──────────────────────────────────────┴─────────────────┴──────────────────────┘

**Potentially Incorrect EmployeeID Format (2 documents):**

┌───┬──────────────────────────────────────────┬──────────────────────────────────────┬─────────────────┬──────────────────────┐
│ # │ Document Name                            │ Document ID                          │ EmployeeID      │ Issue                │
├───┼──────────────────────────────────────────┼──────────────────────────────────────┼─────────────────┼──────────────────────┤
│ 4 │ 000123_Personal_Info.txt                 │ {E012FA9B-0000-C51B-B6AA-DE6F389B2EE5}│ EMP-000123      │ Has prefix "EMP-"    │
│ 5 │ 000123_Performance_Review_2024.txt       │ {4013FA9B-0000-C115-8D90-A025AE7CFDCE}│ 5465421         │ 7 digits instead of  │
│   │                                          │                                      │                 │ expected 6-digit ID  │
└───┴──────────────────────────────────────────┴──────────────────────────────────────┴─────────────────┴──────────────────────┘

━━━ Summary ━━━
Total HRDocuments audited: 53
Documents with issues: 5 (9.4%)
  • Missing EmployeeID: 3 documents
  • Incorrect EmployeeID format: 2 documents
Documents correctly classified: 48 (90.6%)
```

## 💡 Why This Matters

An `EmployeeID` of `000000` is a classic data quality problem — it looks like a valid value but it's clearly a placeholder or error. Bob catches this because it's searching for the pattern, not just for empty values. In a real repository, you might also search for `EmployeeID = "N/A"`, `EmployeeID = "TBD"`, or `EmployeeID = "unknown"`.