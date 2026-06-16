---
title: "Generate Sample Documents"
lab_series: "generate-sample-content"
section_number: 1
duration: "~5 minutes"
description: "Run the script to create your personal document set"
---

## The Situation

You need to create sample HR documents to work with, but you're not sure how the generation script works or what it will create. You ask Bob to explain the code and the process.

## 💬 Prompt to Bob

Switch to **Code Mode**

```
Bob, I need to generate sample HR documents for this lab.
Can you explain how the generate_hr_documents.py script works?
What will it create, what are the parameters I can provide and can you run it for me?
```

## 🔍 What Bob Does Behind the Scenes

1. Reads the script's docstring and help text
2. Explains the multi-user isolation approach
3. Offers to run the script on your behalf with your last name

## ✅ Expected Output from Bob

```
📄 HR Document Generation Script — How It Works
═══════════════════════════════════════════════════════

The generate_hr_documents.py script creates a personal set of realistic
HR documents for you to work with in this lab.

🔑 Key Features:
  • Multi-user safe — each participant gets their own namespace
  • Deterministic — your last name generates a unique but reproducible
    set of 5 fictional employees
  • Isolated — your files and repository paths won't conflict with others

📂 What It Creates:
  • 5 fictional employees with realistic names, departments, and roles
  • 11 documents per employee (55 total):
    - Job Application, Interview Notes
    - Employment Contract
    - ID Documents, Personal Info
    - Payslip, Salary Info
    - Performance Review
    - Training Record
    - Disciplinary Record
    - Exit Notes

🏷️ Namespace Example:
  If your last name is DUPONT:
    • Local folder: HR_DUPONT/
    • Repository path: /BOB_LAB/DUPONT/
    • Employee IDs: DUP001, DUP002, DUP003, DUP004, DUP005

📋 Usage:
  Interactive:  python generate_hr_documents.py
  Direct:       python generate_hr_documents.py --user YOURLASTNAME

Would you like me to run this script for you?
If so, please provide your last name and I'll generate your personal document set.
```

## 💬 Follow-up Prompt to Bob

```
Show me what employees were generated?
```

## ✅ Expected Output from Bob

```
✅ Document Generation Complete
═══════════════════════════════════════════════════════

I've generated your personal HR document set using namespace: DUPONT

📂 Output folder: HR_DUPONT/
🗂️  Repository path: /BOB_LAB/DUPONT/

Your 5 employees for this lab:
┌────┬──────────┬────────────────────────┬─────────────────────┬───────────────────────┐
│ #  │ ID       │ Name                   │ Department          │ Role                  │
├────┼──────────┼────────────────────────┼─────────────────────┼───────────────────────┤
│ 1  │ DUP001   │ Antoine Muller         │ Human Resources     │ HR Specialist         │
│ 2  │ DUP002   │ Lina Girard            │ Finance             │ Financial Analyst     │
│ 3  │ DUP003   │ Lucas Mercier          │ Marketing           │ Marketing Manager     │
│ 4  │ DUP004   │ Mia Renard             │ IT                  │ Senior Developer      │
│ 5  │ DUP005   │ Amira Dubois           │ Sales               │ Sales Representative  │
└────┴──────────┴────────────────────────┴─────────────────────┴───────────────────────┘

✅ 55 documents created successfully in HR_DUPONT/

These employees are unique to you and deterministically generated from your
last name. Running the script again with "DUPONT" will always give you the
same employees.

Next: I'll help you upload these documents to the repository with the correct
metadata (EmployeeID, DocType, Department, etc.).
```

## 💡 Key Insight

Notice how Bob can **read the script**, **explain how it works**, and **run it on the participant's behalf**. This is a key pattern in AI-assisted labs and when working with AI coding agents like Bob: participants don't need to have an in-depth understanding of (in this case) Python or command-line tools — they just ask Bob, and Bob handles the technical details.