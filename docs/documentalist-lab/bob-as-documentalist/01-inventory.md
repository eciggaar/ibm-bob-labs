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
| `list_all_classes` | `root_class: "Document"` | Returns all document classes (subclasses of `Document`) registered in the IBM Content Cortex Object Store |


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

Now let me apply the grouping rules from the skill. N = 49 total classes.

---

**HR** (symbolic name starts with `HR`): `HRDocument` → 1

---

**Contracts / Legal** (symbolic name is or starts with `Contract`): `Contract` → 1

---

**Tax Administration** (starts with `Aangifte`, `BTW`, `Belasting`, `Bezwaar`, `Beroep`, `Correctie`, `Douane`, `Fiscaal`, `Invoer`, `Jaarrekening`, `Kwartaal`, `Loonbelasting`, `Motorrijtuigen`, `Origine`, `Transit`, `Uitvoer`, `Vereenvoudigde`, `Voorlopig`, `Voortaxatie`, `Winst`, `Aanslag`):
- `AangifteBPM`, `AangifteBTW`, `AangifteBTWKwartaal`, `AangifteDividendbelasting`, `AangifteInkomstenbelasting`, `AangifteLoonheffingen`, `AangifteSuccessierecht`, `AangifteVennootschapsbelasting`, `AanslagBiljet`, `BTWCorrectiemelding`, `BTWTeruggaafVerzoek`, `BelastingControleRapport`, `BeroepschriftBelasting`, `BezwaarschriftBelasting`, `CorrectieAangifteLoonheffingen`, `Douaneaangifte`, `FiscaalAdviesrapport`, `FiscaalRulingDocument`, `InvoerAangifte`, `JaarrekeningDocument`, `KwartaalrapportBelasting`, `LoonbelastingVerklaring`, `MotorrijtuigenbelastingAangifte`, `OrigineVerklaring`, `TransitDocument`, `UitvoerAangifte`, `VereenvoudigdeDouaneaangifte`, `VoorlopigAanslagIB`, `VoortaxatieVennootschapsbelasting`, `WinstEnVerliesrekening` → 30

---

**System / Technical** (remaining): `CodeModule`, `Document`, `Email`, `EntryTemplate`, `FormData`, `FormPolicy`, `FormTemplate`, `MsResource`, `PreferencesDocument`, `RecordsTemplate`, `ScenarioDefinition`, `Simulation`, `StoredSearch`, `WebContentTemplate`, `WebFormTemplate`, `WorkflowDefinition`, `XMLPropertyMappingScript` → 17

Total: 1 + 1 + 30 + 17 = 49 ✅

---

#### Document Class Inventory

##### 🧑‍💼 HR (1)

| Display Name | Symbolic Name |
|---|---|
| HR Document | `HRDocument` |

---

##### ⚖️ Contracts / Legal (1)

| Display Name | Symbolic Name |
|---|---|
| Contract | `Contract` |

---

##### 🏛️ Tax Administration (30)

| Display Name | Symbolic Name |
|---|---|
| Aangifte BPM | `AangifteBPM` |
| Aangifte Dividendbelasting | `AangifteDividendbelasting` |
| Aangifte Inkomstenbelasting | `AangifteInkomstenbelasting` |
| Aangifte Loonheffingen | `AangifteLoonheffingen` |
| Aangifte Successierecht | `AangifteSuccessierecht` |
| Aangifte Vennootschapsbelasting | `AangifteVennootschapsbelasting` |
| Aanslagbiljet | `AanslagBiljet` |
| Belasting Controle Rapport | `BelastingControleRapport` |
| Beroepschrift Belasting | `BeroepschriftBelasting` |
| Bezwaarschrift Belasting | `BezwaarschriftBelasting` |
| BTW Aangifte | `AangifteBTW` |
| BTW Aangifte Kwartaal | `AangifteBTWKwartaal` |
| BTW Correctiemelding | `BTWCorrectiemelding` |
| BTW Teruggaaf Verzoek | `BTWTeruggaafVerzoek` |
| Correctie Aangifte Loonheffingen | `CorrectieAangifteLoonheffingen` |
| Douaneaangifte | `Douaneaangifte` |
| Fiscaal Adviesrapport | `FiscaalAdviesrapport` |
| Fiscaal Ruling Document | `FiscaalRulingDocument` |
| Invoer Aangifte | `InvoerAangifte` |
| Jaarrekening Document | `JaarrekeningDocument` |
| Kwartaalrapport Belasting | `KwartaalrapportBelasting` |
| Loonbelasting Verklaring | `LoonbelastingVerklaring` |
| Motorrijtuigenbelasting Aangifte | `MotorrijtuigenbelastingAangifte` |
| Origine Verklaring | `OrigineVerklaring` |
| Transit Document | `TransitDocument` |
| Uitvoer Aangifte | `UitvoerAangifte` |
| Vereenvoudigde Douaneaangifte | `VereenvoudigdeDouaneaangifte` |
| Voorlopige Aanslag Inkomstenbelasting | `VoorlopigAanslagIB` |
| Voortaxatie Vennootschapsbelasting | `VoortaxatieVennootschapsbelasting` |
| Winst- en Verliesrekening | `WinstEnVerliesrekening` |

---

##### ⚙️ System / Technical (17)

| Display Name | Symbolic Name |
|---|---|
| Code Module | `CodeModule` |
| Document | `Document` |
| Email | `Email` |
| Entry Template | `EntryTemplate` |
| Form Data | `FormData` |
| Form Policy | `FormPolicy` |
| Form Template | `FormTemplate` |
| ITX Form Template | `WebFormTemplate` |
| MCP Server Resource | `MsResource` |
| Preferences Document | `PreferencesDocument` |
| Records Template | `RecordsTemplate` |
| Scenario Definition | `ScenarioDefinition` |
| Simulation | `Simulation` |
| Stored Search | `StoredSearch` |
| Web Content Template | `WebContentTemplate` |
| Workflow Definition | `WorkflowDefinition` |
| XML Property Mapping Script | `XMLPropertyMappingScript` |

---

✅ **Verification:** 1 (HR) + 1 (Contracts / Legal) + 30 (Tax Administration) + 17 (System / Technical) = **49 total** (API returned: 49)
:::


::: warning NOTE
The formatting of Bob's output may differ from the example above — the structure, grouping style, and wording can vary between responses. However, the **total number of document classes found should always be the same** (48 in this lab environment), as it reflects the actual state of the object store.
:::

If you want the next level of detail, we can produce a second inventory that separates **custom business classes** from **out-of-the-box IBM classes**, and optionally include each class’s description and properties.


## 💡 Key Insights

#### For Business Analysts
Bob can describe the **business purpose** of each class without you needing to read technical documentation. Notice how he groups them by domain — this is AI reasoning about naming patterns, not a pre-configured taxonomy.

#### For Administrators
The `list_all_classes` tool --- made available by the MCP server --- queries the live FNCM repository. This is the **actual current state** of your object store, not a cached or static view. Any class created or deleted since the last deployment will appear here.