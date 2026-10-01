<!-- ---
title: "Bob, What Do We Have?"
lab_series: "bob-as-documentalist"
section_number: 1
duration: "~5 minutes"
description: "Get a complete inventory of all document classes in the repository"
--- -->

::: info 🎬 The Story
*It's Monday morning. You've just been handed a spreadsheet with 48 document class names and told: "We  need to clean this up." You don't know what half of them do. Some were created years ago by people who have since left. Some look like duplicates. Some are clearly demo classes that somehow ended up in production*.

*You open Bob*.
:::

## 🎯 What You Will Learn

By the end of this lab, you will be able to:

- Use Bob to **inventory all document classes** in a live IBM Content Services repository
- Understand the **class hierarchy** — how `Document` is the root and all other classes inherit from it
- **Deep-dive into a specific class** (HRDocument) to see all its properties, types, and searchability
- Ask Bob to **identify historical debt** — duplicates, legacy classes, naming inconsistencies
- Get a **prioritized cleaning roadmap** from Bob based on what he finds

## 🔧 MCP Tools Used

For this section, Bob makes a single call to the `property-extraction-cs-mcp-server` MCP server:

| Tool | Parameter | What It Does |
|------|-----------|-------------|
| `list_all_classes` | `root_class: "Document"` | Returns all document classes (subclasses of `Document`) registered in the IBM FileNet Object Store |


## 📋 The Situation

You need a complete inventory of all document classes. Instead of navigating the admin console, you ask Bob.

## 💬 Prompt to Bob

1. Switch to **Ask Mode** and enter the following prompt:

   ```
   I want to understand our IBM Content Services repository. 
   Can you give me a complete inventory of all document classes we have? 
   Keep it concise. Group them by domain (HR, Tax Administration, 
   System / Technical).
   ```

## 🔍 What Bob Does Behind the Scenes

- Calls `list_all_classes` with `root_class: "Document"` → retrieves all subclasses of `Document` registered in the object store.
- Analyzes the symbolic names and display names.
- Groups them by domain (e.g. HR, Tax Administration, System / Technical).

## ✅ Expected Output from Bob

Bob should return a structured catalog similar to:

::: info 

1. Aangifte BPM (`AangifteBPM`)
2. BTW Aangifte (`AangifteBTW`)
3. BTW Aangifte Kwartaal (`AangifteBTWKwartaal`)
4. Aangifte Dividendbelasting (`AangifteDividendbelasting`)
5. Aangifte Inkomstenbelasting (`AangifteInkomstenbelasting`)
6. Aangifte Loonheffingen (`AangifteLoonheffingen`)
7. Aangifte Successierecht (`AangifteSuccessierecht`)
8. Aangifte Vennootschapsbelasting (`AangifteVennootschapsbelasting`)
9. Aanslagbiljet (`AanslagBiljet`)
10. BTW Correctiemelding (`BTWCorrectiemelding`)
11. BTW Teruggaaf Verzoek (`BTWTeruggaafVerzoek`)
12. Belasting Controle Rapport (`BelastingControleRapport`)
13. Beroepschrift Belasting (`BeroepschriftBelasting`)
14. Bezwaarschrift Belasting (`BezwaarschriftBelasting`)
15. Code Module (`CodeModule`)
16. Correctie Aangifte Loonheffingen (`CorrectieAangifteLoonheffingen`)
17. Document (`Document`)
18. Douaneaangifte (`Douaneaangifte`)
19. Email (`Email`)
20. Entry Template (`EntryTemplate`)
21. Fiscaal Adviesrapport (`FiscaalAdviesrapport`)
22. Fiscaal Ruling Document (`FiscaalRulingDocument`)
23. Form Data (`FormData`)
24. Form Policy (`FormPolicy`)
25. Form Template (`FormTemplate`)
26. HR Document (`HRDocument`)
27. Invoer Aangifte (`InvoerAangifte`)
28. Jaarrekening Document (`JaarrekeningDocument`)
29. Kwartaalrapport Belasting (`KwartaalrapportBelasting`)
30. Loonbelasting Verklaring (`LoonbelastingVerklaring`)
31. Motorrijtuigenbelasting Aangifte (`MotorrijtuigenbelastingAangifte`)
32. MCP Server Resource (`MsResource`)
33. Origine Verklaring (`OrigineVerklaring`)
34. Preferences Document (`PreferencesDocument`)
35. Records Template (`RecordsTemplate`)
36. Scenario Definition (`ScenarioDefinition`)
37. Simulation (`Simulation`)
38. Stored Search (`StoredSearch`)
39. Transit Document (`TransitDocument`)
40. Uitvoer Aangifte (`UitvoerAangifte`)
41. Vereenvoudigde Douaneaangifte (`VereenvoudigdeDouaneaangifte`)
42. Voorlopige Aanslag Inkomstenbelasting (`VoorlopigAanslagIB`)
43. Voortaxatie Vennootschapsbelasting (`VoortaxatieVennootschapsbelasting`)
44. Web Content Template (`WebContentTemplate`)
45. ITX Form Template (`WebFormTemplate`)
46. Winst- en Verliesrekening (`WinstEnVerliesrekening`)
47. Workflow Definition (`WorkflowDefinition`)
48. XML Property Mapping Script (`XMLPropertyMappingScript`)

Total: 48 document classes.

---

#### Grouped by Domain

---

##### HR (1 class)
- HR Document (`HRDocument`)

*(Tax Administration total: 1 class)*

---

##### Tax Administration
- Aangifte BPM (`AangifteBPM`)
- BTW Aangifte (`AangifteBTW`)
- BTW Aangifte Kwartaal (`AangifteBTWKwartaal`)
- Aangifte Dividendbelasting (`AangifteDividendbelasting`)
- Aangifte Inkomstenbelasting (`AangifteInkomstenbelasting`)
- Aangifte Loonheffingen (`AangifteLoonheffingen`)
- Aangifte Successierecht (`AangifteSuccessierecht`)
- Aangifte Vennootschapsbelasting (`AangifteVennootschapsbelasting`)
- Aanslagbiljet (`AanslagBiljet`)
- BTW Correctiemelding (`BTWCorrectiemelding`)
- BTW Teruggaaf Verzoek (`BTWTeruggaafVerzoek`)
- Belasting Controle Rapport (`BelastingControleRapport`)
- Beroepschrift Belasting (`BeroepschriftBelasting`)
- Bezwaarschrift Belasting (`BezwaarschriftBelasting`)
- Correctie Aangifte Loonheffingen (`CorrectieAangifteLoonheffingen`)
- Douaneaangifte (`Douaneaangifte`)
- Fiscaal Adviesrapport (`FiscaalAdviesrapport`)
- Fiscaal Ruling Document (`FiscaalRulingDocument`)
- Invoer Aangifte (`InvoerAangifte`)
- Jaarrekening Document (`JaarrekeningDocument`)
- Kwartaalrapport Belasting (`KwartaalrapportBelasting`)
- Loonbelasting Verklaring (`LoonbelastingVerklaring`)
- Motorrijtuigenbelasting Aangifte (`MotorrijtuigenbelastingAangifte`)
- Origine Verklaring (`OrigineVerklaring`)
- Transit Document (`TransitDocument`)
- Uitvoer Aangifte (`UitvoerAangifte`)
- Vereenvoudigde Douaneaangifte (`VereenvoudigdeDouaneaangifte`)
- Voorlopige Aanslag Inkomstenbelasting (`VoorlopigAanslagIB`)
- Voortaxatie Vennootschapsbelasting (`VoortaxatieVennootschapsbelasting`)
- Winst- en Verliesrekening (`WinstEnVerliesrekening`)

*(Tax Administration total: 30 classes)*

---

##### System / Technical (23 classes)
- Code Module (`CodeModule`)
- Document (`Document`) *(Base root class)*
- Email (`Email`)
- Entry Template (`EntryTemplate`)
- Form Data (`FormData`)
- Form Policy (`FormPolicy`)
- Form Template (`FormTemplate`)
- MCP Server Resource (`MsResource`)
- Preferences Document (`PreferencesDocument`)
- Records Template (`RecordsTemplate`)
- Scenario Definition (`ScenarioDefinition`)
- Simulation (`Simulation`)
- Stored Search (`StoredSearch`)
- Web Content Template (`WebContentTemplate`)
- ITX Form Template (`WebFormTemplate`)
- Workflow Definition (`WorkflowDefinition`)
- XML Property Mapping Script (`XMLPropertyMappingScript`)

*(System / Technical total: 17 classes)*

---

**Verification**: **1** (HR) + **24** (Tax Administration) + **23** (System / Technical) = **48** total.
:::

::: warning NOTE
The formatting of Bob's output may differ from the example above — the structure, grouping style, and wording can vary between responses. However, the **total number of document classes found should always be the same** (48 in this lab environment), as it reflects the actual state of the object store.
:::

If you want the next level of detail, we can produce a second inventory that separates **custom business classes** from **out-of-the-box IBM classes**, and optionally include each class’s description and properties.


## 💡 Key Insights

#### For Business Analysts
Bob can describe the **business purpose** of each class without you needing to read technical documentation. Notice how he groups them by domain — this is AI reasoning about naming patterns, not a pre-configured taxonomy.

#### For Administrators
The `determine_class` tool --- made available by the MCP server --- queries the live FNCM repository. This is the **actual current state** of your object store, not a cached or static view. Any class created or deleted since the last deployment will appear here.