## Overview

In this lab you learn how to use IBM Bob with IBM Content Cortex to inventory, classify, and govern documents in a live repository. You'll explore the document class model, understand class hierarchies, and get AI-powered recommendations for cleaning up your repository.

::: tip NOTE
IBM Bob is powered by generative AI and LLMs, and a defining trait of these systems is that they are *non-deterministic* — unlike the *deterministic* tools most developers are accustomed to. In practice, that means the same prompt can produce different output from one run to the next. This is both a strength and a quirk of the technology, and it is something to work *with* rather than against.

**Precision is what tips the odds in your favor.** The more clearly you describe what you want, the more closely Bob's output will mirror your intent. Throughout this lab, your results may slightly differ from the examples shown — and that is expected, not a defect. Human review remains essential at every step, and never more so than while you are still learning the tool.
:::



## Prerequisites

Before starting this lab, ensure you have:

- Bob IDE installed and running.
- Cloned the Git repository and opened it in IBM Bob — follow the steps below.
- Python environment for running the script in the skill `class_property_report`.
- Configured the `mcp.json` file with your lab environment credentials.

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

4. The MCP server configuration file `mcp.json` is included in the `.bob` directory of the cloned repository. Open this file and update the placeholder values for `USERNAME`, `PASSWORD`, `SERVER_URL`, and `OBJECT_STORE` with the environment information from the Box note provided by your lab facilitators.

Ready to begin? Click the *"Bob, What Do Have?"* link below to get started.