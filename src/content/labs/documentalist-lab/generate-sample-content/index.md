---
title: "Feeding Bob: generate sample content"
description: "Create realistic HR documents to populate the repository. Generate and upload 55 documents with proper metadata."
lab_series: "generate-sample-content"
section_number: 2
total_sections: 6
estimated_duration: "45 minutes"
---

## Overview

> **Note:** Bob's responses might vary slightly from the examples in this tutorial, but its key actions should be the same.

Lab 1 gave you a map of the territory. Now you need content to work with. You'll generate a personal set of 5 fictional employees — unique to you — whose HR documents need to be stored in the repository. Each employee has 8 categories of documents, from their original job application all the way through to exit notes.

## What You Will Learn

By the end of this lab, you will be able to:

1. Understand the **HR document taxonomy** — 8 categories covering the full employee lifecycle
2. Use the **`generate_hr_documents.py`** script to create a **personal, isolated** set of HR documents
3. Ask Bob to **upload documents to the repository** using `create_document` with correct metadata
4. Understand how **`DocType`, `EmployeeID`, `Department`** properties are set at creation time
5. **Verify** that documents were created correctly using `lookup_documents_by_name` and `get_document_properties`

## Prerequisites

* Completed Lab 1: Meet Bob, your AI documentalist
* Access to IBM Content Navigator
* Python environment for running the document generation script

## Your Personal Lab Namespace

> **⚠️ Important — Read this before running anything.**

This lab is designed to run safely in parallel with other participants. To avoid conflicts in the shared repository, **every participant works in their own namespace** based on their last name.

When you run the script, you will be asked for your last name. This does two things:

| What | How |
|------|-----|
| **Namespaces your files** | Local files go to `HR_YOURLASTNAME/` instead of `HR/` |
| **Namespaces the repository** | Documents are filed under `/BOB_LAB/YOURLASTNAME/` |
| **Generates unique employees** | Your 5 employees are deterministically generated from your name |
| **Prefixes employee IDs** | IDs become `YOU001`–`YOU005` (first 3 letters of your last name) |

## The HR Document Taxonomy

Before generating content, understand the 8 HR document categories:

| # | Category | Document Types |
|---|----------|---------------|
| 1 | **Recruitment** | Job Application, Interview Notes |
| 2 | **Employment Contract** | Employment Contract |
| 3 | **Personal Administration** | ID Documents, Personal Info |
| 4 | **Payroll** | Payslip, Salary Info |
| 5 | **Performance** | Performance Review |
| 6 | **Training** | Training Record |
| 7 | **Disciplinary** | Disciplinary Record |
| 8 | **Exit** | Exit Notes |

**5 employees × 11 documents each = 55 documents total**

## MCP Tools Used

| Tool | What It Does |
|------|-------------|
| `determine_class` | Confirms the `HRDocument` class identifier |
| `get_class_property_descriptions` | Shows which properties to set on each document |
| `create_document` | Uploads a document with content and metadata |
| `lookup_documents_by_name` | Verifies a document was created |
| `get_document_properties` | Confirms properties were set correctly |

## Lab Sections

This lab is divided into 6 sections:

1. **Generate Sample Documents** - Run the script to create your personal document set
2. **Understand Document Properties** - Learn which metadata to set on HR documents
3. **Upload First Employee** - Upload documents for your first employee
4. **Upload Remaining Employees** - Batch upload the rest
5. **Verify Documents** - Check that documents were created correctly
6. **Review in Navigator** - Browse your documents in the web interface

Ready to begin? Start with Section 1 below.