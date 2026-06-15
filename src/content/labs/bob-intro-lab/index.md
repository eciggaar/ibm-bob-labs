---
title: "Bob Intro Lab"
description: "Get started with IBM Bob and the Galaxium Travels demo app by learning the tutorial flow, setup requirements, and application architecture."
lab_series: "bob-intro"
total_sections: 7
estimated_duration: "2-3 hours"
---

## ℹ️ Overview

> **Note:** Bob's responses might vary slightly from the examples in this tutorial, but its key actions should be the same.

Get started with IBM Bob and the Galaxium Travels demo app by learning the tutorial flow, setup requirements, and application architecture.

IBM Bob is an agentic integrated development environment (IDE) that helps you write, test, upgrade, and secure software across the entire software development lifecycle (SDLC). In these tutorials, you use Bob to add features to the **Galaxium Travels** fictional luxury space travel booking system.

## 🎯 What You Will Accomplish

In this tutorial series, you will:

* Set up Bob in the Galaxium Travels repository
* Standardize Bob's behavior with custom rules
* Create a custom mode to help with product management tasks
* Write code with Bob's AI-assisted code completion features
* Use Bob's literate coding capabilities to generate code from written text
* Use Bob's agentic capabilities to have Bob run prompts and perform actions on your behalf
* Understand how to manage the context window effectively to maintain quality and reduce cost

## 📋 Prerequisites

Before starting this lab, ensure you have:

* Cloned the [Galaxium Travels](https://github.com/IBM/galaxium-travels) demo code. The clone command also checks out the `bob-learning-path-branch` that contains the code you use in the tutorials.

```text
git clone -b bob-learning-path-branch https://github.com/IBM/galaxium-travels
```

* [Bob IDE](https://bob.ibm.com/docs/ide/getting-started/install) with the Galaxium Travels demo code open
* While not required, consider doing the [Quickstart tutorial](https://bob.ibm.com/docs/ide/getting-started/quickstart) to familiarize yourself with Bob's interface and features.

## 🔬 Lab Environment

Galaxium Travels contains the following full-stack architecture:

| Layer     | Technology                          |
| --------- | ----------------------------------- |
| Front end | React, TypeScript                   |
| Back end  | Python with REST and MCP interfaces |
| Database  | SQLite with seed data               |

### Front End
The React/TypeScript front end connects to the same back-end REST endpoints and presents the data through a user-facing interface. Features available in the front end include:

* Viewing available flights
* User registration and authentication
* Flight booking

### Back End
The back end is built around a SQLite database that contains:

* Data models that define the domain entities (flights, users, bookings)
* Schemas for data validation and structure
* Seed data for development and testing

The server exposes two interfaces:

* **REST API**: Standard HTTP endpoints for front-end and client consumption
* **MCP interface**: Lets Bob interact directly with the back end as a tool

An API browser interface is available locally to explore and interact with the back end endpoints directly, without the front end. This lets you test operations such as flight retrieval, user registration, and booking.

## ➡️ Next steps
In this introduction, you learned that Bob supports the full software development lifecycle, not just code generation. You remain in control at every step and Bob assists you with reasoning and implementation.

Advance to [Start a project with /init and AGENTS.md](01---start-a-project) to learn how Bob uses the `/init` command to set up context in a new or existing project.
