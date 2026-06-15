---
title: "Meet Bob, your AI documentalist"
description: "Explore the document class model, relationships, and cleaning recommendations. Learn to inventory 91 document classes and identify historical debt."
lab_series: "bob-as-documentalist"
section_number: 1
total_sections: 5
estimated_duration: "30 minutes"
bob_mode: "Advance"
---

## Overview

> **Note:** Bob's responses might vary slightly from the examples in this tutorial, but its key actions should be the same.

Learn how to use IBM Bob with IBM Content Services to inventory, classify, and govern documents in a live FNCM repository. In this lab, you'll explore the document class model, understand class hierarchies, and get AI-powered recommendations for cleaning up your repository.

## What You Will Learn

By the end of this lab, you will be able to:

1. Use Bob to **inventory all document classes** in a live IBM Content Services repository
2. Understand the **class hierarchy** — how `Document` is the root and all other classes inherit from it
3. **Deep-dive into a specific class** (HRDocument) to see all its properties, types, and searchability
4. Ask Bob to **identify historical debt** — duplicates, legacy classes, naming inconsistencies
5. Get a **prioritized cleaning roadmap** from Bob based on what he finds

## Prerequisites

Before starting this lab, ensure you have:

* Bob IDE installed and running
* Cloned the Git repository from https://github.com/eciggaar/Bob-AI-Documentalist and opened it in IBM Bob
* Edited the `mcp.json` file in the `.bob` directory with the GraphQL endpoint (`SERVER_URL`), username (`USERNAME`), and password (`PASSWORD`) provided by your lab administrator

## MCP Tools Used

Throughout this lab, Bob will use the following IBM Content Services MCP tools:

| Tool | What It Does |
|------|-------------|
| `list_root_classes` | Lists all root class types in the repository (Document, Folder, etc.) |
| `determine_class` | Finds classes matching keywords — used to explore the class catalog |
| `get_class_property_descriptions` | Returns all properties of a specific class with full metadata |
| `get_searchable_property_descriptions` | Returns only the searchable properties of a class |

## Lab Sections

This lab is divided into 5 sections:

1. **"Bob, What Do We Have?"** - Get a complete inventory of all document classes
2. **"Bob, What Looks Wrong?"** - Identify duplicates, legacy classes, and naming issues
3. **"Bob, Show Me HRDocument in Detail"** - Deep-dive into a specific class
4. **"Bob, Explain the Inheritance"** - Understand the class hierarchy model
5. **"Bob, Give Me a Cleaning Roadmap"** - Get a prioritized action plan

Ready to begin? Start with Section 1 below.