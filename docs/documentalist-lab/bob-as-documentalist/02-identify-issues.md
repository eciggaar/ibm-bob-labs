## 📋 The Situation

Now that you have the full list, you want Bob to flag anything suspicious — duplicates, legacy classes, naming inconsistencies, demo classes that shouldn't be in production.

## 💬 Prompt to Bob

1. For this, switch to **Ask Mode** and enter the following prompt:

   ```
   Looking at that class inventory, which classes look like duplicates, 
   legacy classes, or things we should clean up? I'm particularly worried 
   about classes that seem to serve the same purpose. Only focus on classes 
   in the Tax, HR and Contracts domain.
   ```

## 🔍 What Bob Does Behind the Scenes

- Analyzes the class names for patterns: prefix groups (e.g. `LG_`, `usr1_`, `usr2_`, `wel`, `ZV_`), naming inconsistencies and obvious demo names.
- Calls `get_class_property_descriptions` on suspect classes to compare their property sets
- Identifies classes with identical or near-identical property structures

## ✅ Expected Output from Bob

Bob should return a structured catalog similar to:

::: info

#### Tax / HR / Contracts — Duplicate & Cleanup Analysis

Looking only at the 30 Tax classes, 1 HR class, and 1 Contracts class:

---

##### Potential duplicates (same concept split into multiple classes)

| Concern | Classes | Assessment |
|---|---|---|
| **VAT filing variants** | `BTW Aangifte` (`AangifteBTW`), `BTW Aangifte Kwartaal` (`AangifteBTWKwartaal`), `BTW Correctiemelding` (`BTWCorrectiemelding`), `BTW Teruggaaf Verzoek` (`BTWTeruggaafVerzoek`) | **Strongest candidate.** Four classes for what could be one `BTW Aangifte` class distinguished by `frequency` (monthly/quarterly), `is_correction` (bool), and `is_refund_request` (bool). Consolidating would simplify search and reporting. |
| **Customs declaration variants** | `Douaneaangifte` (`Douaneaangifte`), `Vereenvoudigde Douaneaangifte` (`VereenvoudigdeDouaneaangifte`), `Invoer Aangifte` (`InvoerAangifte`), `Uitvoer Aangifte` (`UitvoerAangifte`) | **Moderate candidate.** "Standard," "simplified," "import," and "export" could be one `Douaneaangifte` class with a `procedure` property (standard/simplified) and `direction` property (import/export). |
| **Wage tax filing vs. declaration** | `Aangifte Loonheffingen` (`AangifteLoonheffingen`), `Loonbelasting Verklaring` (`LoonbelastingVerklaring`) | **Review needed.** Descriptive text says the "aangifte" is the employer's periodic filing, and the "verklaring" appears similar. Need to verify whether these serve genuinely different purposes (e.g., filing vs. employee statement) or if one is orphaned. |
| **Fiscal advice vs. ruling** | `Fiscaal Adviesrapport` (`FiscaalAdviesrapport`), `Fiscaal Ruling Document` (`FiscaalRulingDocument`) | **Review needed.** "Advice report" and "ruling" are distinct in tax practice (ruling = binding pre-approval from Belastingdienst; advice = consultant opinion), but worth confirming documents aren't being filed under the wrong class. |
| **Wage tax correction** | `Aangifte Loonheffingen`, `Correctie Aangifte Loonheffingen` (`CorrectieAangifteLoonheffingen`) | **Likely fine** — correction is a separate legal filing with its own reference number. |
| **Income tax preliminary vs. final** | `Voorlopige Aanslag IB` (`VoorlopigAanslagIB`), `Aanslagbiljet` (`AanslagBiljet`) | **Likely fine** — preliminary assessment and final aanslagbiljet are distinct legal documents in different workflow stages. |
| **Corporate tax preliminary vs. annual** | `Voortaxatie Vennootschapsbelasting` (`VoortaxatieVennootschapsbelasting`), `Aangifte Vennootschapsbelasting` (`AangifteVennootschapsbelasting`) | **Likely fine** — voortaxatie is a mandatory mid-year supplementary filing, not a duplicate. |
| **Objection vs. appeal** | `Bezwaarschrift Belasting` (`BezwaarschriftBelasting`), `Beroepschrift Belasting` (`BeroepschriftBelasting`) | **Likely fine** — objection (against tax authority) and appeal (to court) are distinct legal stages in the Dutch protest procedure. |

---

##### Legacy / sparse classes worth auditing

| Class | Concern |
|---|---|
| `Aangifte BPM` (`AangifteBPM`) | Very niche — BPM tax is a one-time fee at vehicle registration. Low volume; confirm active use or consider archiving. |
| `Jaarrekening Document` (`JaarrekeningDocument`) | If year-end reporting has moved to a different system, this may contain only old documents. |

---

##### HR & Contracts

| Domain | Classes | Assessment |
|---|---|---|
| HR | `HRDocument` (1) | No duplicates — single catch-all class. Not a cleanup concern, though you may eventually want sub-classification for contract types, performance reviews, etc. |
| Contracts | `Contract` (1) | No duplicates — nothing to clean up here. |

---

##### Summary — recommended actions

1. **Consolidate VAT filings** — Merge the 4 BTW classes into one `BTW Aangifte` class with properties. Highest impact.
2. **Consolidate customs declarations** — Merge the 4 douaneaangifte variants into one `Douaneaangifte` class with procedure/direction properties.
3. **Review** `Loonbelasting Verklaring` vs. `Aangifte Loonheffingen` — determine if one is orphaned or if they serve genuinely different purposes.
4. **Audit low-volume classes** (`Aangifte BPM`, `Jaarrekening Document`) — check document counts and last-modified dates.

All observations are read-only — nothing has been changed in the repository.
:::

## 💡 Key Insight

Bob identified **~5 classes** that are candidates for consolidation or removal. This is the "historical debt" — classes created over time without governance, by different teams, for overlapping purposes. In a well-governed repository, you'd most likely have **fewer than 50 classes** with clear ownership, but of course this depends very much on the size of your repo.