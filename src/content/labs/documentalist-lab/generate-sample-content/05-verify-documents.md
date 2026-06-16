---
title: "Verify Documents"
lab_series: "generate-sample-content"
section_number: 5
duration: "~5 minutes"
description: "Check that the HR documents were created correctly"
---

## The Situation

Before moving on, you want to verify that the documents were uploaded correctly. For this, check the payslip for your first employee.

## 💬 Prompt to Bob

> ⚠️ Important - Replace the example values below with your actual employee data from the script output.

```
Bob, can you verify that DUP001's January 2024 payslip was uploaded correctly? 
Show me its properties. My folder is <YOUR_LASTNAME>.
```

## 🔍 What Bob Does Behind the Scenes

1. Calls `lookup_documents_by_name` with keywords `["DUP001", "Payslip", "2024"]`
2. Calls `get_document_properties` on the found document
3. Returns the full property set

## ✅ Expected Output from Bob

```
📄 Document Verification
═══════════════════════════════════════════════════

Document: DUP001_Payslip_2024_01.txt
Class: HRDocument ✅
Version: 1.0

Properties:
  EmployeeID:    DUP001 ✅
  FirstName:     Antoine ✅
  LastName:      Muller ✅
  DocType:       Payslip ✅
  Department:    Human Resources ✅
  JobRole:       HR Specialist ✅
  StartDate:     2021-01-10 ✅
  Creator:       [your username]
  DateCreated:   2026-03-02T14:xx:xx
  MimeType:      text/plain
  ContentSize:   [bytes]
  
Document is correctly classified and all key properties are set. ✅
```

## 💡 Key Insight

Verification is an important step in the document upload process. By checking a sample document, you can confirm that:
- The document was created in the correct class
- All critical properties are set
- The metadata is accurate and searchable