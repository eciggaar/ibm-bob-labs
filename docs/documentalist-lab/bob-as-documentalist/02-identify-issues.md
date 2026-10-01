---
title: "Bob, What Looks Wrong?"
lab_series: "bob-as-documentalist"
section_number: 2
duration: "~5 minutes"
description: "Identify duplicates, legacy classes, and naming inconsistencies"
---

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

All 5 consolidation candidates have **zero documents**. Here is the complete cleanup analysis:

#### Cleanup Analyse: Duplicaten & Consolidatiekandidaten

---

##### 🔴 Prioriteit 1 — Lege klassen die dezelfde entiteit modelleren als een bestaande klasse

These 5 classes have **0 documents** and are structurally redundant. They can be removed without data migration.

| Klasse (verwijderen) | Samenvoegen met | Reden |
|---|---|---|
| `AangifteBTWKwartaal` | `AangifteBTW` | Zelfde document, andere periodiciteit — voeg eigenschap `Periode` (Maandelijks/Kwartaal/Jaarlijks) toe |
| `CorrectieAangifteLoonheffingen` | `AangifteLoonheffingen` | Correctie is een kenmerk, geen aparte documentsoort — voeg boolean `IsCorrectie` toe |
| `VoortaxatieVennootschapsbelasting` | `AangifteVennootschapsbelasting` | Voorlopig vs. definitief is een aanslageigenschap — voeg `AanslagType` toe |
| `MotorrijtuigenbelastingAangifte` | *(onderzoek vereist)* | Mogelijk verouderd/ongebruikt — geen documenten, geen duidelijke pendant |
| `VereenvoudigdeDouaneaangifte` | `Douaneaangifte` | AEO-vereenvoudiging is een proceduretype — voeg eigenschap `AangifteType` (Standaard/Vereenvoudigd) toe |

---

##### 🟡 Prioriteit 2 — Overlappende domaanklassen (nader onderzoek)

| Klasse | Probleem | Aanbeveling |
|---|---|---|
| `AangifteBTW` + `BTWCorrectiemelding` + `BTWTeruggaafVerzoek` | Drie aparte klassen voor één BTW-levenscyclus | Overweeg één klasse `BTWDocument` met eigenschap `Documenttype` |
| `VoorlopigAanslagIB` + `AanslagBiljet` | Zowel voorlopige als definitieve aanslag als aparte klassen | Prima als ze echt andere eigenschappen hebben — anders samenvoegen met `AanslagType` |
| `Douaneaangifte` + `InvoerAangifte` + `UitvoerAangifte` | In-/uitvoer zijn varianten van dezelfde douaneaangifte | Overweeg consolidatie met eigenschap `Richting` (Invoer/Uitvoer/Doorvoer) |

---

##### 🟢 Prioriteit 3 — Eigenschapcontrole aanbevolen

Both `AangifteBTW` and `AangifteBTWKwartaal` have **identical property sets** — only system properties, no domain-specific custom properties at all. This confirms they were differentiated by class name instead of by data, which is the core structural problem throughout this schema.

---

##### Samenvatting

| Categorie | Aantal klassen | Actie |
|---|---|---|
| Lege redundante klassen | 5 | Verwijderen + samenvoegen |
| Overlappende levenscycluskansen | 6–8 | Nader onderzoek + eventueel consolideren |
| Klassen zonder eigen eigenschappen | Minstens 2 bevestigd | Voeg domeinspecifieke properties toe |

The root cause across all cases is the same: **document variants are modelled as separate classes instead of as property values**. Fixing this will reduce the business class count from 31 to roughly 18–20 well-structured classes.

:::


## 💡 Key Insight

Bob identified **~5 classes** that are candidates for consolidation or removal. This is the "historical debt" — classes created over time without governance, by different teams, for overlapping purposes. In a well-governed repository, you'd most likely have **fewer than 50 classes** with clear ownership.