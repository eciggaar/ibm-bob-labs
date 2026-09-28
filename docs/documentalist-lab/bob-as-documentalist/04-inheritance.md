---
title: "Bob, Explain the Inheritance"
lab_series: "bob-as-documentalist"
section_number: 4
duration: "~5 minutes"
description: "Understand the class hierarchy and inheritance model"
---

## The Situation

A business analyst in the room asks: "Why does HRDocument have 109 properties? That seems like a lot." You ask Bob to explain the inheritance model.

## 💬 Prompt to Bob

Switch to **Ask Mode**

```
Bob, can you explain the relationship between the base Document class and HRDocument? 
Why does HRDocument have so many properties? 
What does it inherit and what does it add?
```

## ✅ Expected Output from Bob

Bob should explain:

```
I've created a comprehensive analysis explaining the Document → HRDocument inheritance relationship.

## Key Insights:

### **The 109 Properties Breakdown:**

**67 Properties Inherited from Base Document Class (61%):**
- These are **standard FileNet system properties** that EVERY document class gets
- Include: Security (7), Timestamps (5), Version Control (13), Content Management (12), Search & Indexing (4), Records Management (4), Workflow & Lifecycle (4), Filing (3), WebDAV (3), System Metadata (12)
- **You cannot avoid these** - they're core FileNet functionality

**42 Properties Added by HRDocument (39%):**
- Employee Identity (5): FirstName, LastName, PersonalID, EmployeeID, Birthdate
- Job Information (9): JobRole, JobFunction, JobCode, JobLevel, JobStatus, etc.
- Organization Structure (8): Company, BusinessUnit, Division, Department, etc.
- SAP Integration (7): SAPEmployeeID, SapLinkTrigger, SAPDocId, etc.
- Salesforce Integration (2): SFLinkTrigger, SfSalesforceRelationships
- Docuflow Integration (2): docuflowTimestamp, docuflowUsername
- AI/GenAI (2): GenaiDateIndexed, GenaiWatsonxSummary
- Document Classification (3): DocType, DocumentCategory, ClassDocType

### **Why So Many Properties?**

**Answer:** It's **NOT excessive** - it's **inheritance + specialization**

1. **67 system properties are FileNet overhead** - necessary for enterprise document management (security, versioning, lifecycle, workflow, records management)
2. **42 custom properties are reasonable** for comprehensive HR document management with multiple integrations

### **The Real Questions:**

Instead of "Why so many?", ask:
- ✅ Are all 42 custom properties actually being used?
- ✅ Are property descriptions clear? (many are empty)
- ✅ Do we need choice lists for data quality?
- ✅ Are we missing properties for recruitment, performance, training?
- ✅ Is the UI organized with property grouping?
```

## 💡 The "Class vs Property" Design Decision

This is a fundamental IBM Content Services design question: *"Should I create a new class, or add a property to an existing class?"*

### Create a new class when:
- The document type has fundamentally different properties
- Different security policies apply
- Different lifecycle/retention rules apply
- Different workflows are triggered

### Add a property when:
- The document type is a variant of an existing type
- The same properties apply, just with different values
- You want to avoid class proliferation

In case you find a lot of duplicate classes in your repository this is largely caused by teams choosing *"Create a new class"* when they also chould have added a property to a matching existing class.