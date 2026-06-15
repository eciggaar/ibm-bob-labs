---
title: "Review in Navigator"
lab_series: "generate-sample-content"
section_number: 6
duration: "~10 minutes"
description: "Browse your documents in the web interface"
---

## The Situation

Now that your documents are uploaded, you can review them directly in IBM Content Navigator's web interface. This gives you a visual way to browse your namespace, view document properties, and verify the upload was successful.

## 🌐 Access IBM Content Navigator

**Portal URL:** Obtain from your lab administrator

**Login Credentials:** Obtain from your lab administrator

## 📂 Navigate to Your Documents

1. **Log in** to IBM Content Navigator using the credentials provided
2. **Click the tile "Bladeren in content"**
3. **Navigate to your namespace:**
   - Navigate to: `/BOB_LAB/`
4. **Select your namespace folder**, e.g. `DUPONT`

## 🔍 What You'll See

Your namespace should contain all 55 documents organized by employee and should look similar to:

```
/BOB_LAB/DUPONT/
├── DUP001_Antoine Muller/
│   ├── DUP001_Job_Application.txt
│   ├── DUP001_Interview_Notes.txt
│   ├── DUP001_Employment_Contract.txt
│   ├── DUP001_ID_Documents.txt
│   ├── DUP001_Personal_Info.txt
│   ├── DUP001_Payslip_2024_01.txt
│   ├── DUP001_Salary_Info.txt
│   ├── DUP001_Performance_Review_2024.txt
│   ├── DUP001_Training_Record.txt
│   ├── DUP001_Disciplinary_Record.txt
│   └── DUP001_Exit_Notes.txt
├── DUP002_Lina Girard/ [11 documents]
├── DUP003_Lucas Mercier/ [11 documents]
├── DUP004_Mia Renard/ [11 documents]
└── DUP005_Amira Dubois/ [11 documents]
```

## ✅ Verification Checklist

Use Navigator to verify:

- [ ] All 55 documents are present in your namespace
- [ ] Documents are organized by employee folder
- [ ] Each document shows `HRDocument` as its class
- [ ] `EmployeeID` property is correctly set
- [ ] `DocType` property matches the document type
- [ ] `Department`, `FirstName`, `LastName` are populated
- [ ] Content is readable (click to view document content)

## 💡 Navigator vs. Bob

IBM Content Navigator provides a **visual interface** for browsing and managing documents, while Bob provides a **conversational interface** for the same operations. Both interact with the same IBM Content Services repository via GraphQL APIs.

**Navigator is useful for:**
- Visual browsing and folder navigation
- Bulk operations and batch processing
- Property inspection and editing
- Search and filtering

**Bob is useful for:**
- Natural language interactions
- Automated workflows and scripting
- AI-powered classification and reasoning
- Integration with development workflows

## 🔎 Search Your Documents

Try using Navigator's search feature:

1. Navigate to the search interface
2. Click **Search Content** in the HomePage navigation
3. Search for the saved search "BOB HR Search" and click on it
4. Add search criteria:
   - **EmployeeID:** `DUP001` (or your first employee's ID)
5. Click **Search**
6. You should see all documents for that employee

## 🏁 Lab Summary

In this lab, you:

| What You Did | How |
|-------------|-----|
| Got your personal lab namespace | Entered your last name → unique employee dataset |
| Understood the HR document taxonomy | Bob explained 8 categories + DocType values |
| Generated 55 realistic HR documents | `python generate_hr_documents.py --user YOURLASTNAME` |
| Uploaded your first employee's 11 documents | Bob called `create_document` × 11 |
| Uploaded remaining 44 documents | Bob called `create_document` × 44 |
| Verified a document's properties | Bob called `lookup_documents_by_name` + `get_document_properties` |
| Reviewed documents in Navigator | Browsed `/BOB_LAB/YOURLASTNAME/` in IBM Content Navigator web UI |

## Key Takeaways

1. **`create_document` requires class + properties** — the class determines which properties are available; the properties give the document its business meaning
2. **`DocType` is the discriminator** — all HR documents share the same class; `DocType` tells you what kind of document it is
3. **Personal namespace = no conflicts** — your last name isolates your work from other participants in the shared repository
4. **Metadata at creation time** — it's much easier to set properties when creating a document than to fix them later (as you'll see in Lab 3)

## ➡️ Next Step

Proceed to [**Lab 3 — Bob the Classifier: Review & Reclassify**](../review-and-reclassify/)

In Lab 3, Bob will search within **your namespace** (`/BOB_LAB/YOURLASTNAME/`), find the 5 misclassified documents, read their content, reason about what they should be, and fix them — demonstrating the full AI-powered classification pipeline.