---
title: "Understand Document Properties"
lab_series: "generate-sample-content"
section_number: 2
duration: "~5 minutes"
description: "Learn which metadata to set on HR documents"
---

## The Situation

Before uploading anything, you want Bob to tell you exactly which properties matter for HR documents — so you know what metadata to include when creating each document.

## 💬 Prompt to Bob

Switch to **Code Mode**

```
Bob, before we upload HR documents to the repository,
can you tell me which properties I should set on each document?
What's the difference between mandatory and optional properties for HRDocument?
```

## 🔍 What Bob Does Behind the Scenes

1. Calls `determine_class` with keyword `"HRDocument"` → confirms symbolic name
2. Calls `get_class_property_descriptions` on `"HRDocument"` → retrieves all HR-specific properties
3. Categorizes them by importance for document creation

## ✅ Expected Output from Bob

```
📋 HRDocument — Key Properties for Document Creation
═══════════════════════════════════════════════════════

🔴 Critical Properties (always set these):
  • EmployeeID       — Unique employee identifier (e.g., "DUP001")
  • DocType          — Type of HR document (see values below)
  • Department       — Employee's department (e.g., "IT", "Finance")
  • FirstName        — Employee first name
  • LastName         — Employee last name

🟡 Important Properties (set when known):
  • Company          — Company name
  • JobRole          — Employee's job title
  • StartDate        — Employment start date
  • DocumentCategory — Broader category (e.g., "Recruitment", "Payroll")

🟢 Optional Properties (set if applicable):
  • SAPEmployeeID    — Only if SAP integration is active
  • SFLinkTrigger    — Only if Salesforce integration is active
  • CostCenter       — Organizational cost center
  • Location         — Work location

📌 DocType Values for HR Documents:
  • JobApplication       — Recruitment: job application form
  • InterviewNotes       — Recruitment: interview assessment
  • EmploymentContract   — Contract: signed employment agreement
  • IDDocument           — Personal: identity document
  • PersonalInfo         — Personal: personal information form
  • Payslip              — Payroll: monthly payslip
  • SalaryInfo           — Payroll: salary information
  • PerformanceReview    — Performance: annual/quarterly review
  • TrainingRecord       — Training: training completion record
  • DisciplinaryRecord   — Disciplinary: disciplinary action record
  • ExitDocument         — Exit: exit interview / offboarding notes
```

## 💡 Key Insight

Notice that `DocType` is what distinguishes a Payslip from a Performance Review — they're both `HRDocument` instances. This is the design pattern we discussed in Lab 1: *"use properties to differentiate, not separate classes"*. 

When we search for "all payslips for employee DUP001", we'll search for `HRDocument` where `EmployeeID = DUP001` AND `DocType = Payslip`.