---
title: "Fix All Documents"
lab_series: "review-and-reclassify"
section_number: 5
duration: "~10 minutes"
description: "Batch process remaining issues"
---

## The Situation

One document is fixed. Now you'll ask Bob to process the remaining misclassified documents in one go.

## 💬 Prompt to Bob

```
Bob, now fix the remaining misclassified documents using the same approach — 
read each one, determine the correct classification, and fix it. 
Show me a summary when you're done.
```

## 🔍 What Bob Does Behind the Scenes

For each of the remaining documents:
1. Calls `get_document_text_extract` → reads content
2. Calls `get_document_properties` → checks current state
3. Determines correct class and properties from content
4. Calls `update_document_class` if class needs changing
5. Calls `update_document_properties` to set correct metadata

## ✅ Expected Output from Bob

```
🔄 Batch Reclassification Complete (Namespace: /BOB_LAB/DUPONT/)
════════════════════════════════════════════════════════════════════

Document #1: DUP003_Performance_Review_2024.txt
  Issue:  EmployeeID was 000000 (wrong)
  Fix:    Updated EmployeeID: 000000 → DUP003
  Class:  HRDocument (unchanged — already correct)
  Status: ✅ Fixed

Document #2: DUP005_Exit_Notes.txt
  Issue:  Missing EmployeeID and DocType
  Fix:    Set EmployeeID=DUP005, DocType=ExitDocument, Department=Sales
  Class:  HRDocument (unchanged — already correct)
  Status: ✅ Fixed

Document #4: DUP004_Disciplinary_Record.txt
  Issue:  Wrong class (Document), no metadata
  Content analysis: Disciplinary record for Mia Renard (ID: DUP004)
  Fix:    Reclassified Document → HRDocument
          Set EmployeeID=DUP004, DocType=DisciplinaryRecord, Department=IT
          Set FirstName=Mia, LastName=Renard, JobRole=Senior Developer
  Status: ✅ Fixed

Document #5: DUP002_Employment_Contract.txt
  Issue:  Wrong class (Contract), missing Department
  Content analysis: Employment contract for Lina Girard (ID: DUP002)
  ⚠️  Warning: Changing from Contract → HRDocument
      Contract-specific properties will be lost. Proceeding as instructed.
  Fix:    Reclassified Contract → HRDocument
          Set EmployeeID=DUP002, DocType=EmploymentContract, Department=Finance
          Set FirstName=Lina, LastName=Girard, JobRole=Financial Analyst
  Status: ✅ Fixed

━━━ Summary ━━━
  5 documents audited in your namespace
  5 documents fixed
  0 documents remaining with issues
```

## 💡 Key Insight

Bob can process multiple documents in a single batch operation, applying the same AI-powered analysis and correction workflow to each one. This makes large-scale classification cleanup feasible even for repositories with thousands of misclassified documents.