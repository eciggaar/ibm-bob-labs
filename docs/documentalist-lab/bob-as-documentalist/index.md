---
title: "Meet Bob, your AI documentalist"
description: "Explore the document class model, relationships, and cleaning recommendations. Learn to inventory document classes and identify the historical debt of your repository."
lab_series: "bob-as-documentalist"
section_number: 1
total_sections: 5
estimated_duration: "30 minutes"
---

## Overview

In this lab you learn how to use IBM Bob with IBM Content Services to inventory, classify, and govern documents in a live FNCM repository. You'll explore the document class model, understand class hierarchies, and get AI-powered recommendations for cleaning up your repository.

::: tip NOTE
IBM Bob is powered by generative AI and LLMs, and a defining trait of these systems is that they are *non-deterministic* — unlike the *deterministic* tools most developers are accustomed to. In practice, that means the same prompt can produce different output from one run to the next. This is both a strength and a quirk of the technology, and it is something to work *with* rather than against.

**Precision is what tips the odds in your favor.** The more clearly you describe what you want, the more closely Bob's output will mirror your intent. Throughout this lab, your results may slightly differ from the examples shown — and that is expected, not a defect. Human review remains essential at every step, and never more so than while you are still learning the tool.
:::



## Prerequisites

Before starting this lab, ensure you have:

- Bob IDE installed and running.
- Cloned the Git repository and opened it in IBM Bob — follow the steps below.
- Python environment for running the script in the skill `class_property_report`.
- Downloaded the `mcp.json` file from the Box Note link provided by your lab facilitator and placed it in the `.bob` directory of the cloned repository.

1. Next, navigate to your preferred working directory,

    ::: tabs key:MacOS/LinuxWindows
    == Windows
    ```powershell
    cd <YOUR_PREFERRED_WORKING_DIRECTORY>
    ```
    == MacOS / Linux
    ```bash
    cd <YOUR_PREFERRED_WORKING_DIRECTORY>
    ```
    :::

2. and clone the repository.

    ::: tabs key:MacOS/LinuxWindows
    == Windows
    ```powershell
    git clone https://github.com/eciggaar/Bob-AI-Documentalist
    ```
    == MacOS / Linux
    ```bash
    git clone https://github.com/eciggaar/Bob-AI-Documentalist
    ```
    :::

3. Open the cloned `Bob-AI-Documentalist` folder in Bob IDE via **File → Open Folder…**.

4. Finally, download the `mcp.json` file from the Box Note link provided by your lab facilitator and place it in the `.bob` directory inside the cloned repository.

Ready to begin? Click the *"Bob, What Do Have?"* link below to get started.