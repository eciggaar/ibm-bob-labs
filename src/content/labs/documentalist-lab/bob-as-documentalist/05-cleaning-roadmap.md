---
title: "Bob, Give Me a Cleaning Roadmap"
lab_series: "bob-as-documentalist"
section_number: 5
duration: "~10 minutes"
description: "Get a prioritized action plan for repository cleanup"
---

## The Situation

You've seen the inventory, the duplicates, the legacy classes, and the inheritance model. Now you want Bob to synthesize everything into a prioritized action plan.

## 💬 Prompt to Bob

Switch to **Plan Mode**

```
Bob, based on everything you've seen in our repository —
the duplicates, the legacy classes, the naming inconsistencies — 
what would you recommend as a cleaning plan? 
Give me a prioritized roadmap with quick wins and longer-term actions. 
Create a Markdown with that plan.
```

## ✅ Expected Output from Bob

Bob should produce a structured roadmap:

```
# Repository Cleanup Roadmap - Executive Summary

## 12-Week Plan | 5 Phases | 61 → 56 Classes

---

## Phase 1: Quick Wins (Weeks 1-3)
**Focus:** Low-risk consolidations + complete documentation

**Actions:**
- ✅ Consolidate `AangifteBTWKwartaal` → `AangifteBTW` (add Period property)
- ✅ Consolidate `CorrectieAangifteLoonheffingen` → `AangifteLoonheffingen` (add IsCorrection flag)
- ✅ Consolidate `VoortaxatieVennootschapsbelasting` → `AangifteVennootschapsbelasting` (add AssessmentType)
- ✅ Document all 61 classes with descriptions and usage guidelines

**Deliverables:** 61 → 58 classes | 100% documentation coverage  
**Risk:** LOW | **Impact:** HIGH

---

## Phase 2: Investigation & Planning (Weeks 4-6)
**Focus:** Understand before acting

**Actions:**
- 🔍 Investigate `AangifteDocument` (parent class? catch-all? legacy?)
- 🔍 Analyze `MotorrijtuigenbelastingAangifte` usage (keep? merge? delete?)
- 📊 Property usage analysis across all classes
- 🎯 Design choice lists for data quality (JobStatus, EmploymentType, etc.)
- 📋 HR gap analysis - design 7 specialized HR classes

**Deliverables:** Investigation reports | Implementation plans | Stakeholder decisions  
**Risk:** LOW | **Impact:** Foundation for Phases 3-4

---

## Phase 3: Medium-Risk Changes (Weeks 7-9)
**Focus:** Customs, choice lists, execute Phase 2 decisions

**Actions:**
- ⚠️ Consolidate `VereenvoudigdeDouaneaangifte` → `Douaneaangifte` (after regulatory compliance check)
- ⚠️ Execute Motor Vehicle Tax decision (keep/merge/delete based on Phase 2 findings)
- ✅ Implement choice lists for 80% of key properties
- ✅ Execute AangifteDocument decision (restructure/migrate/delete)
- ✅ Migrate data to enforce choice lists

**Deliverables:** 58 → 56 classes | 80% choice list coverage | Improved data quality  
**Risk:** MEDIUM | **Impact:** HIGH

---

## Phase 4: HR Enhancement (Weeks 10-12)
**Focus:** Build out HR domain with specialized classes

**Actions:**
- ✅ Create 7 new HR document classes:
  - RecruitmentDocument
  - EmploymentContractDocument
  - PayrollDocument
  - PerformanceReviewDocument
  - TrainingDocument
  - DisciplinaryDocument
  - ExitDocument
- ✅ Build property templates for common scenarios
- ✅ Comprehensive testing and validation
- ✅ User training and documentation
- ✅ Production rollout

**Deliverables:** 56 → 63 classes (strategic increase) | Complete HR domain | Trained users  
**Risk:** LOW | **Impact:** HIGH

---

## Phase 5: Governance & Monitoring (Ongoing)
**Focus:** Maintain improvements

**Actions:**
- 📋 Establish class governance framework
- 📋 Define property creation policies
- 📋 Implement change management process
- 📊 Monthly metrics and monitoring
- 📊 Quarterly usage reviews
- 📊 Annual repository audits

**Deliverables:** Governance framework | Monitoring dashboards | Continuous improvement  
**Risk:** LOW | **Impact:** Sustained quality

---

## Summary: All 5 Duplicates Addressed

| Duplicate Class | Target Class | Phase | Week | Risk |
|----------------|--------------|-------|------|------|
| AangifteBTWKwartaal | AangifteBTW | 1 | 1 | LOW |
| CorrectieAangifteLoonheffingen | AangifteLoonheffingen | 1 | 2 | LOW |
| VoortaxatieVennootschapsbelasting | AangifteVennootschapsbelasting | 1 | 3 | LOW |
| VereenvoudigdeDouaneaangifte | Douaneaangifte | 3 | 7 | MEDIUM |
| MotorrijtuigenbelastingAangifte | TBD | 3 | 8 | MEDIUM |

---

## Key Outcomes

**Class Optimization:**
- Start: 61 classes
- After Phase 1: 58 classes (-3 duplicates)
- After Phase 3: 56 classes (-2 more duplicates)
- After Phase 4: 63 classes (+7 specialized HR classes)
- **Net Result: Better structure, no redundancy**

**Quality Improvements:**
- 100% classes documented
- 80% properties with choice lists
- Complete HR domain coverage
- Governance framework established

**Timeline:** 12 weeks  
**Team:** 3 FTE core + part-time support  
**ROI:** 2.5 year payback period
---

**Full Roadmap:** [`audits/repository-cleanup-roadmap.md`](audits/repository-cleanup-roadmap.md)
```

## 💡 The Governance Lesson

Bob's roadmap mirrors what's already documented in classification and cleaning plans — but Bob derived it **from the live repository**, not from a static document. This is the power of AI + MCP: the recommendations are always based on the current state of the system.

## 🏁 Lab Summary

In this lab, Bob helped you:

| What Bob Did | MCP Tool Used |
|-------------|--------------|
| Inventoried all document classes | `list_root_classes` + `determine_class` |
| Identified duplicates and legacy classes | `get_class_property_descriptions` (comparative) |
| Deep-dived into the HRDocument document class | `get_class_property_descriptions HRDocument` |
| Explained the inheritance model | AI reasoning on property metadata |
| Produced a prioritized cleaning roadmap | AI synthesis of all findings |

## Key Takeaways

1. **Bob can interrogate a live repository** — no need to navigate admin consoles or read static documentation
2. **The "class vs property" design decision** is the root cause of class proliferation
3. **HRDocument is well-designed** — it uses `DocType` to differentiate document types rather than creating separate classes
4. **Governance is the long-term solution** — not just a one-time cleanup

## ➡️ Next Step

Proceed to [**Lab 2 — Feeding Bob: Generate Sample Content**](/labs/generate-sample-content/)

In Lab 2, you'll generate 55 realistic HR documents and upload them to the repository using Bob — with a few deliberate mistakes that you'll fix in Lab 3.