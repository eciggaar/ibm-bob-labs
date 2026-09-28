---
title: "Bob the Classifier: Review & Reclassify"
description: "Use AI to detect and fix misclassified documents. Learn the reclassification workflow and create governance health reports."
lab_series: "review-and-reclassify"
section_number: 3
total_sections: 6
estimated_duration: "45 minutes"
---

## Overview

> **⚠️ Multi-User Lab:** This lab works in your personal folder (`/BOB_LAB/<YOUR_LASTNAME>/`) created in Lab 2. You can run this lab in parallel with other participants without conflicts.

> Don't forget: Start a new task at the beginning of this lab.

Lab 2 went well — mostly. You uploaded 55 HR documents for your 5 employees to your personal folder. But in the rush to get everything in, a few mistakes crept in: one payslip ended up as a generic Document with no employee metadata, a contract was filed under the wrong class, a performance review has the wrong employee ID, a disciplinary record has no metadata at all, and an exit document is missing its DocType.

In a real repository with thousands of documents, these errors would be invisible — until someone searches for "all payslips for your first employee" and gets zero results, or a compliance audit finds documents with no retention metadata.

## What You Will Learn

By the end of this lab, you will be able to:

1. Use Bob to **search for documents** with **missing** or **incorrect metadata**
2. Ask Bob to **read document content** and reason about what class it should be
3. Execute the **reclassification workflow**: `update_document_class` + `update_document_properties`
4. Understand the **risk of reclassification** — what happens to properties when you change a document's class
5. Produce a **final governance health report** for the repository

## Prerequisites

* Completed Lab 2: Feeding Bob: Generate Sample Content
* 55 documents uploaded to your personal folder
* Access to IBM Content Navigator

## MCP Tools Used

| Tool | What It Does |
|------|-------------|
| `document_search` | Finds documents matching specific criteria (missing properties, wrong class) |
| `get_document_properties` | Inspects the current state of a document |
| `get_document_text_extract` | Reads the document's text content for AI reasoning |
| `update_document_class` | Changes a document's class (e.g., Document → HRDocument) |
| `update_document_properties` | Updates metadata properties on a document |
| `lookup_documents_by_name` | Finds documents by name keywords |

## Lab Sections

This lab is divided into 6 sections:

1. **Run a Classification Audit** - Find all documents with missing or incorrect metadata
2. **Check Other Classes** - Find documents in wrong classes
3. **Read and Analyze Content** - Use AI to determine correct classification
4. **Fix One Document** - Execute the reclassification workflow
5. **Fix All Documents** - Batch process remaining issues
6. **Generate Health Report** - Create final governance report

Ready to begin? Click the *"Run a Classification Audit"* link below to get started.