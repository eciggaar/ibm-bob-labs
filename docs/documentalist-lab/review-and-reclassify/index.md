## Overview

::: info ⚠️ Multi-User Lab
- This lab works in your personal folder (`/BOB_LAB/<YOUR_LASTNAME>/`) created in the previous lab. You can run this lab in parallel with other participants without causing conflicts.

    **Don't forget**: Start a new task at the beginning of this lab.
:::

The previous lab went well — *mostly*. 

You uploaded 55 HR documents for your 5 employees to your personal folder. But in the rush to get everything in, a few mistakes crept in: one payslip ended up as a generic Document with no employee metadata, a contract was filed under the wrong class, a performance review has the wrong employee ID, a disciplinary record has no metadata at all, and an exit document is missing its DocType.

In a real repository with thousands of documents, these errors would be invisible — until someone searches for "all payslips for your first employee" and gets zero results, or a compliance audit finds documents with no retention metadata.

## What You Will Learn

In this lab you will learn how to:

- Use Bob to **search for documents** with **missing** or **incorrect metadata**.
- Ask Bob to **read document content** and reason about what class it should be.
- Execute the **reclassification workflow**: `update_document_class` + `update_document_properties`.
- Understand the **risk of reclassification** — what happens to properties when you change a document's class.
- Produce a **final governance health report** for the repository.

## Prerequisites

- Completed previous lab: *Feeding Bob: Generate Sample Content*
- 55 documents uploaded to your personal folder
- Access to IBM Content Navigator (link is in the Box note provided to you by the lab facilitators)

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

- **Run a Classification Audit** - Find all documents with missing or incorrect metadata
- **Check Other Classes** - Find documents in wrong classes
- **Read and Analyze Content** - Use AI to determine correct classification
- **Fix One Document** - Execute the reclassification workflow
- **Fix All Documents** - Batch process remaining issues
- **Generate Health Report** - Create final governance report

Ready to begin? Click the *"Run a Classification Audit"* link below to get started.