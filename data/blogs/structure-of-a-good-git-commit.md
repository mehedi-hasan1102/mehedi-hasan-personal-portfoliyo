---
image: /assets/images/blogs/git.jpg
date: Sep 15, 2025
readTime: 1 min read
title: Structure of a Good Git Commit
category: GitHub
description: Learn how to write clear, professional Git commits that improve collaboration and code readability.
---

## Why Good Git Commits Matter

Writing clear and professional Git commits is more than a good habit—it is a practical skill that improves team collaboration, keeps project history readable, and makes debugging significantly easier.

A well-written commit tells **what changed**, **why it changed**, and sometimes **how it impacts the system**.

---

## 🧩 Anatomy of a Good Commit

A professional Git commit usually includes the following parts:

* **Type** — Describes the nature of the change (feature, fix, docs, etc.)
* **Short message** — Maximum 50 characters, written in the imperative mood

  * Example: `Add login validation`
* **Optional description** — Wrapped at 72 characters, explaining the reason or context for the change

---

## 🏷️ Common Commit Types

Use consistent prefixes to make commit history easy to scan.

```
feat:      Adding a new feature
fix:       Bug fix
docs:      Documentation-only changes
style:     Formatting, whitespace, missing semicolons
refactor:  Code change that neither fixes a bug nor adds a feature
test:      Adding or updating tests
chore:     Maintenance tasks (configs, dependencies)
```
##
---

## ✅ Examples of Good Commits

```
feat: add user authentication
fix: resolve crash on profile update
docs: update README with installation steps
style: format code with Prettier
refactor: simplify dashboard component logic
test: add unit tests for login reducer
chore: update project dependencies
```
##
---

## 💡 Pro Tips for Better Commits

* Use the **imperative mood**: `Add feature`, not `Added feature`
* Keep commits **small and focused** — one commit equals one purpose
* Add a detailed description when the change is not self-explanatory

Clean commits today save hours of confusion tomorrow—for you and your team.
