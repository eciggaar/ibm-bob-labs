---
title: "Generate code from comments"
lab_series: "bob-intro"
section_number: 3
duration: "20 min"
description: "Use Bob's literate coding capabilities to generate code from written text and comments."
---

## ℹ️ Overview

Use literate coding to have Bob generate code from natural language comments, where Bob helps you write precise, context-aware code modifications directly in your editor.

[Literate coding](https://bob.ibm.com/docs/ide/features/literate-coding) lets you write code with AI assistance directly inside your editor. Instead of switching to a chat window or writing long prompts, you type instructions in plain language right where the code should go. Bob then generates the implementation for you in context and shows a diff of the changes.

In this tutorial you fix an intermittent timeout by wrapping a code block with retry logic.

Literate coding is effective for the following modifications:

* **Adding wrapper logic:** Retry mechanisms, error handling, or logging around existing code
* **Refactoring specific blocks:** Modifying targeted sections while preserving surrounding logic
* **Quick targeted modifications:** Precise changes to specific functions without affecting broader structure. For complex modifications that affect multiple functions or files, consider using the [agentic chat sidebar](https://bob.ibm.com/docs/ide/features/chat-interface) to create a [Plan](https://bob.ibm.com/docs/ide/getting-started/best-practices#plan-before-coding).


## 📋 Prerequisites
To complete this tutorial, you need the following:

* If you do not already have it, clone the [Galaxium Travels](https://github.com/IBM/galaxium-travels) demo code. The clone command also checks out the `bob-learning-path-branch` that contains the code you use in the tutorials.

```text
git clone -b bob-learning-path-branch https://github.com/IBM/galaxium-travels
```

* [Bob IDE](https://bob.ibm.com/docs/ide/getting-started/install) with the Galaxium Travels demo code open
* While not required, consider doing the [Quickstart tutorial](https://bob.ibm.com/docs/ide/getting-started/quickstart) to familiarize yourself with Bob's interface and features.

### Use literate coding
The Galaxium Travels back end is unreliable and occasionally gets timeout errors. Instead of rewriting the code from scratch, you can use literate coding to wrap the specific block of code with retry logic.

### Open the file
Open the `booking_system_frontend/src/pages/Flights.tsx` file.

### Position your cursor
Click into line 43.

### Activate literate coding mode
Click the magic wand icon to enter literate coding mode.

### Write your instruction
Enter the following natural language instruction to describe the desired change on line 43:

```text
The backend is unreliable at times. We need a retry logic here
```

### Generate the code
Click **Generate** to produce the modifications.

Bob presents changes in a diff view interface. The highlighted red text shows what code is removed and the highlighted green text shows what code Bob adds.

### Accept the changes
Review the changes and click **Accept All** to apply them.

You have added a retry loop to resolve timeout errors in the Galaxium Travels web application.

## ➡️ Next steps
In this tutorial, you learned how literate coding lets you use precise, natural language-driven code modifications. Literate code shows you a code diff so that you can review code before accepting the changes.

Advance to [Plan and implement complex features](https://bob.ibm.com/docs/ide/getting-started/tutorials/partner-with-a-coding-agent) to learn about the agentic chat sidebar, which is the primary interface for complex, multi-step development tasks in Bob.