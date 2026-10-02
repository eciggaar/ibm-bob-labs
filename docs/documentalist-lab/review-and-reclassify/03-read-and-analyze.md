## 📋 The Situation

During the audit you've found a number of problematic documents. Before fixing them, you want to see Bob reason about one of them — reading the content and determining the correct classification.

## 💬 Prompt to Bob

::: warning ⚠️ Important

- Keep the chat open and **approve each step** when prompted. Bob will ask for confirmation before e.g. invoking skills, executing commands and creating files.

:::


1. Make sure **Ask Mode** is selected and enter the following prompt:

    ```
    Look at the document that was filed under the base Document class.
    Read its content and tell me: what is it, who does it belong to,
    and what class and properties should it have?
    ```

## 🔍 What Bob Does Behind the Scenes

- **Activates the `hr-classification-workflow` skill** — loads the document triage instructions, which define exactly which MCP tools to call and in what order.
- **MCP tool `property-extraction-cs-mcp-server` → `property_extraction`** — called with the document ID from the audit results. Returns the document's current class, all available properties for that class, and the document's text extract content in a single round-trip.
- **MCP tool `ai-document-insight-cs-mcp-server` → `document_qa_specific`** — called with the same document ID and the prompt: *"What type of HR document is this? Who is the employee (name and ID)? What department are they in? What is the document date?"* The AI reasons over the text extract and returns structured answers.
- **Builds the triage recommendation** — combines the AI's answers with the audit context to produce a recommended class and property set, with a confidence level.
- **No changes are applied** — triage is read-only. Bob presents the recommendation with a confidence level and waits for your instruction before touching the repository.

## ✅ Expected Output from Bob

::: info

Here is the triage result for `DUP001_Payslip_2024_01`:

---

```
Document:      DUP001_Payslip_2024_01
Current class: Document  ← WRONG

Recommended class: HRDocument

Recommended properties:
  EmployeeID:  DUP001
  Department:  Human Resources
  DocType:     Payslip

Confidence: High
```

**Why High confidence:** The document content is unambiguous — it is a January 2024 payslip for **Antoine Muller**, employee ID `DUP001`, working in the **Human Resources** department at Acme Corporation. All three required properties (`EmployeeID`, `Department`, `DocType`) are explicitly stated in the document body.

---

No changes have been made. Would you like me to go ahead and fix it — reclassify it as `HRDocument` and set the properties?

:::

## 💡 AI Content Reasoning

The correct document class and property values were derived entirely from the document's content — not from its filename or existing metadata. The text extract was returned as part of the `property_extraction` call and then passed to `document_qa_specific` for AI reasoning. This means classification is possible even when the document name carries no useful information.