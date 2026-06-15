---
title: "Read and Analyze Content"
lab_series: "review-and-reclassify"
section_number: 3
duration: "~5 minutes"
description: "Use AI to determine correct classification"
---

## The Situation

You have the list of problematic documents. Before fixing them, you want to see Bob reason about one of them — reading the content and determining the correct classification.

## 💬 Prompt to Bob

> ⚠️ Replace the document name with your actual document from the audit results.

```
Bob, look at documents that was filed under the base Document class
Read its content and tell me: what is it, who does it belong to,
and what class and properties should it have?
```

## 🔍 What Bob Does Behind the Scenes

1. Calls `get_document_properties` on your payslip document → sees current (wrong) state
2. Calls `get_document_text_extract` → reads the actual payslip content
3. AI reasons about the content: identifies it as a payslip, extracts employee name, ID, department
4. Recommends correct class and properties based on your employee data

## ✅ Expected Output from Bob

```
📄 Document Analysis: DUP001_Payslip_2024_01.txt
═══════════════════════════════════════════════════

Current State (INCORRECT):
  Class:       Document  ❌
  EmployeeID:  (not set) ❌
  DocType:     (not set) ❌
  Department:  (not set) ❌

Document Content (extracted):
  ┌─────────────────────────────────────────────────────────┐
  │ PAYSLIP — January 2024                                  │
  │ ═══════════════════════════════════════════════════════ │
  │ Employee Name:    Antoine Muller                        │
  │ Employee ID:      DUP001                                │
  │ Department:       Human Resources                       │
  │ Position:         HR Specialist                         │
  │ Pay Period:       January 2024                          │
  │ Basic Salary:     €5,200.00                             │
  │ Net Pay:          €3,890.00                             │
  └─────────────────────────────────────────────────────────┘

AI Analysis:
  This document is a monthly payslip for employee Antoine Muller (ID: DUP001).
  It contains salary information, deductions, and net pay for January 2024.
  It belongs to the HR domain and should be classified as an HRDocument.

Recommended Correct State:
  Class:       HRDocument  ✅
  EmployeeID:  DUP001      ✅
  FirstName:   Antoine     ✅
  LastName:    Muller      ✅
  DocType:     Payslip     ✅
  Department:  Human Resources ✅
  JobRole:     HR Specialist ✅
```

## 💡 AI Content Reasoning

Bob didn't just look at the filename — he **read the document content** and extracted the employee information from it. This is the power of `get_document_text_extract` combined with AI reasoning. Even if the filename had been `document_001.txt` with no clues, Bob could still determine the correct classification from the content.