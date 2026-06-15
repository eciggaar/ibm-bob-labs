---
title: "Bob, What Do We Have?"
lab_series: "bob-as-documentalist"
section_number: 1
duration: "~5 minutes"
description: "Get a complete inventory of all document classes in the repository"
---

## The Situation

You need a complete inventory of all document classes. Instead of navigating the admin console, you ask Bob.

## 💬 Prompt to Bob

```
Bob, I want to understand our IBM Content Services repository. 
Can you give me a complete inventory of all the document classes we have? 
Group them by domain if you can.
```

## 🔍 What Bob Does Behind the Scenes

1. Calls `list_root_classes` → discovers `Document` as the root class type
2. Calls `determine_class` with keyword `"Document"` → retrieves all 91 subclasses
3. Analyzes the symbolic names and display names
4. Groups them by domain (HR, Financial, Legal, System, Integration, Specialized)

## ✅ Expected Output from Bob

Bob should return a structured catalog similar to:

```
I've created a comprehensive inventory of all 61 document classes in your IBM Content Services repository, organized by domain:

## Key Findings:

**Domain Distribution:**
- **Tax Administration:** 30 classes (49%) - Heavy focus on Dutch tax operations
- **System/Technical:** 29 classes (48%) - FileNet system and integration classes
- **Human Resources:** 2 classes (3%) - Minimal HR implementation

**Critical Insights:**

1. **5 Duplicate Classes Identified** requiring consolidation:
   - `AangifteBTWKwartaal` → merge into `AangifteBTW`
   - `CorrectieAangifteLoonheffingen` → merge into `AangifteLoonheffingen`
   - `VoortaxatieVennootschapsbelasting` → merge into `AangifteVennootschapsbelasting`
   - `VereenvoudigdeDouaneaangifte` → merge into `Douaneaangifte`
   - `MotorrijtuigenbelastingAangifte` → review for consolidation

2. **HR Gap:** Only 2 HR classes despite extensive HR folder structure (Recruitment, Employment, Performance, Training, Disciplinary, Exit)

3. **Tax Categories:**
   - VAT Returns: 4 classes
   - Income Tax: 2 classes
   - Payroll Tax: 3 classes
   - Corporate Tax: 2 classes
   - Other Taxes: 7 classes
   - Compliance & Audit: 6 classes
   - Financial Reporting: 4 classes
   - Customs & Trade: 6 classes
```

If you want the next level of detail, we can produce a second inventory that separates **custom business classes** from **out-of-the-box IBM classes**, and optionally include each class’s description and properties.


## 💡 Key Insights

### For Business Analysts
Bob can describe the **business purpose** of each class without you needing to read technical documentation. Notice how he groups them by domain — this is AI reasoning about naming patterns, not a pre-configured taxonomy.

### For Administrators
The `determine_class` tool queries the live repository. This is the **actual current state** of your object store, not a cached or static view. Any class created or deleted since the last deployment will appear here.