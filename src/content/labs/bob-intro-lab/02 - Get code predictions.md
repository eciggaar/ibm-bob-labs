---
title: "Get code predictions"
lab_series: "bob-intro"
section_number: 2
duration: "10 min"
description: "Accelerate development with Bob's tab completion and next edit prediction, which suggest context-aware code."
---

## ℹ️ Overview

Accelerate development with Bob's tab completion and next edit prediction, which suggest context-aware code and automatically navigate you to likely follow-up edit locations.

Bob provides AI-assisted code completion through two integrated features: tab completion and [next edit](https://bob.ibm.com/docs/ide/features/next-edit) prediction. These features work together to accelerate development by suggesting code based on context and automatically navigating to likely edit locations.

Tab completion in Bob analyzes the entire codebase context using the information it gathered during initialization, including:

* Comments that describe intended functionality
* Existing code patterns and structure
* Project conventions and style
* Related code in other files

Next edit prediction anticipates where you need to make related changes after accepting a code suggestion. This feature recognizes that code modifications typically require updates in multiple locations.

In this tutorial, you use next edit prediction and tab completion to add a new `validateEmail` function to the `UserIdentification.tsx` file.


### Add validate email function
Use next edit prediction and tab completion to add a new `validateEmail` function to the `UserIdentification.tsx` file. This function should take an email string as input and return a boolean indicating whether the email is valid based on a simple regex pattern.

### Open the file
Open the `UserIdentification.tsx` file located at `booking_system_frontend/src/components/user/UserIdentification.tsx`.

### Generate the function with tab completion
Go to line 20, after the last import statement, press Enter to create a new line, and write the following comment and press Enter:

```text
//validate email addresses
```

Bob generates a code suggestion to implement the `validateEmail` function based on the comment you write. Press Tab to accept the suggestion.

Notice the "**Tab** to Jump to line: 37" message at the bottom of the IDE. This is Bob's next edit prediction, which anticipates that after adding the `validateEmail` function, you likely need to make a related edit at line 37, where the component calls `validateEmail`.

You use next edit prediction in the following step.

### Accept the next edit prediction
At the bottom of Bob IDE, you see a pop-up that says "**Tab** to Jump to line: 37". This means that Bob anticipates you need to make a related edit at line 37, where the component calls `validateEmail`.

Press Tab to jump to the next predicted edit location. Bob positions your cursor where the component uses the `validateEmail` function. Press Tab to accept the suggestion to add code to use the `validateEmail` function.

You have now added a new `validateEmail` function and used it in the `UserIdentification.tsx` file with the help of next edit prediction and tab completion.

## ➡️ Next steps
In this tutorial, you learned how Bob uses tab completion and next edit prediction to suggest context-aware code changes and guide you to the next likely place that needs an update.

Advance to [Generate code from comments](/labs/bob-intro/03---generate-code-from-comments) to learn how literate coding turns natural language comments into precise code changes directly in your editor.