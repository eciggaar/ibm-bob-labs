---
title: "Generate Health Report"
lab_series: "review-and-reclassify"
section_number: 6
duration: "~10 minutes"
description: "Create final governance report"
---

## The Situation

All 5 misclassified documents have been fixed. You want a final governance health report to confirm the repository is in good shape — and to have something to show your manager.

## 💬 Prompt to Bob

> ⚠️ Replace `DUPONT` with your actual namespace.

Switch to **Content Repository Auditor Mode**

```
Bob, now that we've fixed all the misclassified documents in my namespace /BOB_LAB/DUPONT/,
can you give me a final classification health report for my HR documents?
I want to know: are all 55 documents correctly classified?
And what governance recommendations do you have going forward?
Generate a report in markdown format and save it to /BOB_LAB/DUPONT/classification_health_report.md.
```

## ✅ Expected Output from Bob

```
📊 Final Classification Health Report
════════════════════════════════════════════════════════════════════
Generated: 2026-03-02 | Repository: OS1 | Namespace: /BOB_LAB/DUPONT/

━━━ Document Count (Your Namespace) ━━━

Total HR documents in your namespace: 55
  ✅ Correctly classified:    55 (100%)
  ❌ Misclassified:            0 (0%)
  ⚠️  Missing critical props:  0 (0%)

━━━ Coverage by Employee ━━━

┌──────────────────────┬────────┬─────────────────┬───────────┬──────────────────┐
│ Employee             │ ID     │ Department      │ Documents │ Status           │
├──────────────────────┼────────┼─────────────────┼───────────┼──────────────────┤
│ Antoine Muller       │ DUP001 │ Human Resources │ 11        │ ✅ All correct   │
│ Lina Girard          │ DUP002 │ Finance         │ 11        │ ✅ All correct   │
│ Lucas Mercier        │ DUP003 │ Marketing       │ 11        │ ✅ All correct   │
│ Mia Renard           │ DUP004 │ IT              │ 11        │ ✅ All correct   │
│ Amira Dubois         │ DUP005 │ Sales           │ 11        │ ✅ All correct   │
└──────────────────────┴────────┴─────────────────┴───────────┴──────────────────┘

━━━ Coverage by DocType ━━━

┌──────────────────────┬───────────┬──────────────────┐
│ DocType              │ Documents │ Status           │
├──────────────────────┼───────────┼──────────────────┤
│ JobApplication       │ 5         │ ✅ All correct   │
│ InterviewNotes       │ 5         │ ✅ All correct   │
│ EmploymentContract   │ 5         │ ✅ All correct   │
│ IDDocument           │ 5         │ ✅ All correct   │
│ PersonalInfo         │ 5         │ ✅ All correct   │
│ Payslip              │ 5         │ ✅ All correct   │
│ SalaryInfo           │ 5         │ ✅ All correct   │
│ PerformanceReview    │ 5         │ ✅ All correct   │
│ TrainingRecord       │ 5         │ ✅ All correct   │
│ DisciplinaryRecord   │ 5         │ ✅ All correct   │
│ ExitDocument         │ 5         │ ✅ All correct   │
└──────────────────────┴───────────┴──────────────────┘

━━━ Governance Recommendations ━━━

1. 🔴 Prevent misclassification at upload time
   Recommendation: Configure entry templates that enforce EmployeeID and DocType
   at document creation. Users should not be able to create an HRDocument without
   these fields.

2. 🟡 Run monthly classification audits
   Recommendation: Schedule a monthly Bob audit to catch any documents uploaded
   without proper metadata. Target: 0 documents with missing EmployeeID.

3. 🟡 Restrict base Document class usage
   Recommendation: Remove the base Document class from user-facing upload interfaces.
   Users should always select a specific subclass (HRDocument, Invoice, etc.).

4. 🟢 Consider adding more DocType values
   Current DocType values cover the 8 HR categories well. As new document types
   emerge, add them to the DocType controlled vocabulary rather than creating
   new classes.

5. 🟢 Enable AI auto-classification
   The ClassificationStatus property on each document can be used to trigger
   automatic classification. Consider enabling Watsonx AI auto-classification
   for new documents uploaded without a DocType.

━━━ Repository Health Score (Your Namespace) ━━━
  Before Lab 3:  90.9% (50/55 documents correctly classified)
  After Lab 3:  100.0% (55/55 documents correctly classified)
  
  🏆 Your namespace is in excellent health.
```

## 💡 The Governance Lesson

Bob's health report will provide governance recommendations tailored to your repository's current state. Common recommendations include:

- **Preventing misclassification at upload time** through entry templates and required fields
- **Restricting base Document class usage** in user-facing interfaces to force specific subclass selection
- **Scheduling regular audits** to maintain classification quality over time
- **Implementing automated validation** to catch issues before they accumulate

The key insight: **prevention is always easier than remediation**. Governance controls that enforce proper classification at document creation time eliminate the need for cleanup audits later.

## 🏁 Lab Summary

In this lab, Bob helped you:

| What Bob Did | MCP Tool Used |
|-------------|--------------|
| Found 2 HRDocuments with missing/wrong EmployeeID | `document_search` |
| Found 3 documents in wrong classes | `document_search` (cross-class) |
| Read document content to determine correct classification | `get_document_text_extract` |
| Reclassified 3 documents from wrong classes to HRDocument | `update_document_class` |
| Fixed metadata on all 5 documents | `update_document_properties` |
| Produced a final governance health report | AI synthesis |

## Key Takeaways

1. **Classification errors are invisible until they cause problems** — a payslip with no EmployeeID won't appear in employee searches
2. **Bob can read content and reason about classification** — `get_document_text_extract` + AI reasoning creates a powerful auto-classification pipeline
3. **Reclassification has risks** — changing a document's class can lose properties; always check the class hierarchy first
4. **Prevention is better than cure** — entry templates, controlled vocabularies, and restricted class selection prevent misclassification at upload time
5. **Governance is ongoing** — a monthly audit with Bob takes minutes and keeps the repository healthy

## 🎓 Lab Series Complete

You have completed all 3 labs in the Documentalist series! You've learned how to use Bob as an AI documentalist to inventory, classify, and govern documents in IBM Content Services.
