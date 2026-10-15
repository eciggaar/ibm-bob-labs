## Overview

::: tip NOTE

This lab is designed to run safely in parallel with other participants. To avoid conflicts in the shared repository, **every participant works in their own namespace** based on their last name.
:::

In this lab you will be asked for your last name. This will be used to:

| What | How |
|------|-----|
| **Namespace your files** | Local files go to `HR_<YOUR_LASTNAME>/` |
| **Create a namespaces in the repository** | Documents are filed under `/BOB_LAB/<YOUR_LASTNAME>/` |
| **Generate unique employees** | Your 5 employees are deterministically generated from your name |
| **Prefix employee IDs** | IDs become `YOU001`–`YOU005` (first 3 letters of your last name) |

### The HR Document Taxonomy

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

**5** employees × **11** documents each = **55** documents **total**


## Prerequisites

- Completed the previous lab: *Meet Bob, your AI documentalist*.
- Access to IBM Content Navigator (link is in the Box note provided to you by the lab facilitators).
- Python 3.13+ for running the document generation script and the scripts needed by the skills.

## Lab Sections

This lab is divided into 6 sections:

- **Generate Sample Documents** - Run the script to create your personal document set
- **Understand Document Properties** - Learn which metadata to set on HR documents
- **Upload First Employee** - Upload documents for your first employee
- **Upload Remaining Employees** - Batch upload the rest
- **Verify Documents** - Check that documents were created correctly
- **Review in Navigator** - Browse your documents in the web interface

Ready to begin? Click the *"Generate Sample Documents"* link below to get started.