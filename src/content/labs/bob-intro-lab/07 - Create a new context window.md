---
title: "Create a new context window"
lab_series: "bob-intro"
section_number: 7
duration: "20 min"
description: "Understand how to manage the context window effectively to maintain quality and reduce cost."
---

## ℹ️ Overview

Manage Bob's context window to preserve memory, control cost, and maintain output quality during complex or long-running conversations.

The [context window](https://bob.ibm.com/docs/ide/core-concepts/context-window-management) is the total amount of information that a large language model can hold in memory during a single conversation. Understanding how the context window fills up, and how to manage it, is essential for getting consistent, high-quality results from Bob, particularly on complex or long-running tasks.

The models that power Bob provide a context window of 200,000 tokens, which is approximately 150,000 words. Every new conversation starts with 200,000 token capacity available.

The context window holds everything: instructions, file contents, conversation history, and Bob's responses. Once the window fills, Bob drops or summarizes the oldest content to make room for new content. If the context window fills up, Bob automatically summarizes the conversation to free up space and continues responding.

In this tutorial, you learn how to manage the context window effectively by starting a new conversation.


## 🔍 Why context management matters

### Token cost
Tokens are the unit of consumption for Bob, measured in Bob coins. Longer conversations and larger file reads consume more tokens. Keeping conversations focused reduces cost.

### Summarization is lossy
Automatic summarization is not lossless. When a conversation exceeds the context window and Bob summarizes it, specific technical details, intermediate reasoning, and nuanced context might be lost. A summary is always less precise than the original conversation.

This can affect implementation quality if you discussed critical constraints or edge cases earlier in the conversation but are not faithfully preserved in the summary.

### Quality degrades above ~100K tokens
Models do not maintain uniform quality across the full 200,000-token range. As the context window fills, response quality noticeably declines, particularly past the \~100,000-token mark. A conversation that uses 50,000 tokens will generally produce better output than one that uses 180,000 tokens, all else being equal.

## 🚀 Create a new context window
The current amount of tokens in the current context window is visible in the top right of the agentic chat sidebar.

When you first open the agentic chat, you will have the full context window available with 200,000 tokens, of which 50,000 tokens will be reserved for Bob and model response. Run the following command to use some of the context window:

```text
List all of the files in this directory.
```

Bob lists the files and consumes around 17,000 tokens.

To create a new context window, start a new conversation by clicking the + icon at the top of the agentic chat.

You have now started a new conversation with a fresh context window. The previous conversation still exists and is accessible by clicking on the conversation history icon, but it will not be part of the current context window.

## ➡️ Next steps
In this tutorial, you learned how Bob's context window affects cost, memory, and output quality throughout a conversation. You also learned when to start a new conversation so you can refresh your context window.