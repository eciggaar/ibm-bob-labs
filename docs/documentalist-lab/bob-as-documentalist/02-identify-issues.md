## 📋 The Situation

Now that you have the full list, you want Bob to flag anything suspicious — duplicates, legacy classes, naming inconsistencies, demo classes that shouldn't be in production.

## 💬 Prompt to Bob

1. For this, switch to **Ask Mode** and enter the following prompt:

   ```
   Looking at that class inventory, which classes look like duplicates, 
   legacy classes, or things we should clean up? I'm particularly worried 
   about classes that seem to serve the same purpose.
   ```

## 🔍 What Bob Does Behind the Scenes

- Analyzes the class names for patterns: prefix groups (e.g. `LG_`, `usr1_`, `usr2_`, `wel`, `ZV_`), naming inconsistencies and obvious demo names.
- Calls `get_class_property_descriptions` on suspect classes to compare their property sets
- Identifies classes with identical or near-identical property structures

## ✅ Expected Output from Bob

Bob should return a structured catalog similar to:

::: info 

Looking at the 49 classes returned, here are the candidates worth scrutinising:

---

##### 🔴 Likely Duplicates / Overlapping Purpose

| Candidates | Concern |
|---|---|
| `AangifteBTW` + `AangifteBTWKwartaal` | Periodicity variant, not a distinct type — could be one class with a `period` property. |
| `Douaneaangifte` + `VereenvoudigdeDouaneaangifte` + `InvoerAangifte` + `UitvoerAangifte` | Four classes for customs declarations differing only by direction or procedure. Strong consolidation candidate. |
| `AangifteLoonheffingen` + `CorrectieAangifteLoonheffingen` | A correction is a lifecycle state, not a new document type. |
| `VoorlopigAanslagIB` + `AanslagBiljet` | Preliminary vs. final assessment — same underlying document, different stage. |
| `VoortaxatieVennootschapsbelasting` + `AangifteVennootschapsbelasting` | Same pattern repeated for corporate tax. |

---

##### 🟡 Possibly Redundant Business Classes

| Class | Concern |
|---|---|
| `KwartaalrapportBelasting` | Internal management report — arguably operational data, not a content-managed document class. |
| `FiscaalAdviesrapport` | Generic advisory report — may just be an `Email` or unclassified `Document` in practice. |
| `HRDocument` | Only **one** HR class for all personnel documents. Either intentionally broad (fine), or sub-classes were never created (gap). |
| `Contract` | Same — a single Contract class with no visible sub-types (e.g. employment, supplier, NDA). |

---

##### Summary

| Priority | Action |
|---|---|
| High | Consolidate the 4 customs declaration classes |
| High | Merge BTW kwartaal into `AangifteBTW` with a period property |
| Medium | Replace correction/preliminary variants with a status/lifecycle field on the parent class |
| Low | Decide if `HRDocument` and `Contract` need sub-classes for more granular classification |

:::

## 💡 Key Insight

Bob identified **~5 classes** that are candidates for consolidation or removal. This is the "historical debt" — classes created over time without governance, by different teams, for overlapping purposes. In a well-governed repository, you'd most likely have **fewer than 50 classes** with clear ownership, but of course this depends very much on the size of your repo.