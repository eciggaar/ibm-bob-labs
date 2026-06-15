---
title: "Bob, Show Me HRDocument in Detail"
lab_series: "bob-as-documentalist"
section_number: 3
duration: "~5 minutes"
description: "Deep-dive into the HRDocument class to see all its properties"
---

## The Situation

The HR team is your biggest user group. You want to understand the `HRDocument` class deeply — all its properties, what's searchable, what's inherited from the base class, and what's HR-specific.

## 💬 Prompt to Bob

```
Bob, show me everything about the HRDocument class. 
I want to see all its properties — their data types, whether they're searchable, 
and which ones are system-owned vs custom business properties.
```

## 🔍 What Bob Does Behind the Scenes

1. Calls `determine_class` with keyword `"HRDocument"` to confirm the symbolic name
2. Calls `get_class_property_descriptions HRDocument` → returns all properties including inherited ones
3. Categorizes properties by origin (system vs custom) and purpose

## ✅ Expected Output from Bob

Bob should return a structured property breakdown:

```
I've created a comprehensive analysis of the HRDocument class with all 109 properties categorized and documented.

## Key Findings:

### **Property Breakdown:**
- **Total Properties:** 109
- **Custom Business Properties:** 42 (39%)
- **System Properties:** 67 (61%)
- **Searchable:** 91 (83%)
- **Hidden:** 29 (27%)

### **Custom Business Properties by Category:**

1. **Employee Identity (5):** FirstName, LastName, PersonalID, EmployeeID, Birthdate
2. **Job Information (9):** JobRole, JobFunction, JobCode, JobLevel, JobStatus, EmploymentType, CurrentStatus, StartDate, TerminationDate
3. **Organization (8):** Company, CompanyCode, BusinessUnit, Division, Department, CostCenter, Location
4. **SAP Integration (7):** SAPEmployeeID, SapLinkTrigger, sapLinked, SAPDocId, SAPDocProt, SAPComps, SAPContType, SAPCompVersion
5. **Salesforce Integration (2):** SFLinkTrigger, SfSalesforceRelationships
6. **Docuflow Integration (2):** docuflowTimestamp, docuflowUsername
7. **AI/GenAI (2):** GenaiDateIndexed, GenaiWatsonxSummary (IBM watsonx)
8. **Document Classification (3):** DocType, DocumentCategory, ClassDocType

### **Critical Issues Identified:**

⚠️ **Data Quality Risks:**
- No choice lists for status fields (JobStatus, EmploymentType, CurrentStatus)
- Missing property descriptions for most custom properties
- Inconsistent naming (SAPEmployeeID vs sapLinked)
- Duplicate status properties (JobStatus vs CurrentStatus)

⚠️ **Missing Properties:**
- No recruitment-specific properties (InterviewDate, HiringManager)
- No performance review properties (ReviewPeriod, PerformanceRating)
- No training properties (TrainingType, CompletionDate)
- No disciplinary properties (IncidentDate, ActionTaken)
- No exit properties (ExitReason, RehireEligible)

### **Strengths:**
✅ All 42 custom properties are searchable
✅ Strong integration with SAP, Salesforce, and Docuflow
✅ AI-ready with watsonx properties
✅ Comprehensive employee and organization data

```

## 💡 Key Insights

### For Business Analysts
Notice the `DocType` property — this is how we distinguish between a Job Application, a Payslip, a Performance Review, and an Employment Contract. They're all `HRDocument` instances, but `DocType` tells you which kind. This is a key design pattern in IBM Content Services: **use properties to differentiate, not separate classes**.

### For Administrators
The SAP integration properties (`SAPDocId`, `SapLinkTrigger`, `sapLinked`) show that this class is connected to an external system. Before modifying or deprecating this class, you'd need to check with the SAP integration team. Bob can help you identify these dependencies.