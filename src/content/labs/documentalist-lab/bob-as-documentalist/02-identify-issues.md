---
title: "Bob, What Looks Wrong?"
lab_series: "bob-as-documentalist"
section_number: 2
duration: "~5 minutes"
description: "Identify duplicates, legacy classes, and naming inconsistencies"
---

## The Situation

Now that you have the full list, you want Bob to flag anything suspicious — duplicates, legacy classes, naming inconsistencies, demo classes that shouldn't be in production.

## 💬 Prompt to Bob

```
Bob, looking at that class inventory, which classes look like duplicates, 
legacy classes, or things we should clean up? 
I'm particularly worried about classes that seem to serve the same purpose.
```

## 🔍 What Bob Does Behind the Scenes

1. Analyzes the class names for patterns: prefix groups (`LG_`, `usr1_`, `usr2_`, `wel`, `ZV_`), naming inconsistencies, obvious demo names
2. Calls `get_class_property_descriptions` on suspect classes to compare their property sets
3. Identifies classes with identical or near-identical property structures

## ✅ Expected Output from Bob

Bob should return a structured catalog similar to:

```
## Critical Findings:

### **5 Confirmed Duplicates** (Immediate Action Required):

1. **`AangifteBTWKwartaal`** → Merge into `AangifteBTW`
   - Same purpose: VAT returns
   - Fix: Add "Period" property (Monthly/Quarterly/Annual)
   - Risk: LOW | Priority: HIGH

2. **`CorrectieAangifteLoonheffingen`** → Merge into `AangifteLoonheffingen`
   - Corrections should be a flag, not separate class
   - Fix: Add "IsCorrection" boolean property
   - Risk: LOW | Priority: HIGH

3. **`VoortaxatieVennootschapsbelasting`** → Merge into `AangifteVennootschapsbelasting`
   - Provisional vs. Final should be a property
   - Fix: Add "AssessmentType" property
   - Risk: LOW | Priority: HIGH

4. **`VereenvoudigdeDouaneaangifte`** → Merge into `Douaneaangifte`
   - Simplified vs. Standard is a procedure type
   - Fix: Add "DeclarationType" property
   - Risk: MEDIUM | Priority: MEDIUM

5. **`MotorrijtuigenbelastingAangifte`** → Review for consolidation
   - May be redundant or legacy
   - Needs document count and usage analysis
   - Risk: MEDIUM | Priority: MEDIUM

### **Suspicious Classes** (Investigation Required):

- **`AangifteDocument`** - Empty description, unclear if parent class or catch-all
- **`BTWControlerapport`** - Audit reports may need separate hierarchy

## Impact:
- **Potential reduction:** 61 → 56 classes (8% reduction)
- **Tax return classes:** 15 → 10-11 classes (27-33% reduction)
```


## 💡 Key Insight

Bob identified **~5 classes** that are candidates for consolidation or removal. This is the "historical debt" — classes created over time without governance, by different teams, for overlapping purposes. In a well-governed repository, you'd have **fewer than 50 classes** with clear ownership.