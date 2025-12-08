---
image: https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2F7shyp652ds6zat90x58o.png
date: Sep 15, 2025
readTime: 1 min read
title: Structure of a Good Git Commit
category: GitHub
description: Learn how to write clear, professional Git commits that improve collaboration and code readability.
---


Writing clear and professional Git commits is more than a habit—it’s a skill that makes collaboration smoother, code history readable, and debugging easier. Here’s a concise guide to crafting quality commits.

**🔹 Structure of a Good Commit**

A professional commit usually consists of:

**Type** – what kind of change it is (feature, fix, docs, etc.)
**Short message** – 50 characters max, written in imperative tone (e.g., “Add login validation”)
**Optional detailed description** – wrap text at 72 characters for readability, explaining why the change was made

**🔹 Common Commit Types**

```
feat:	Adding a new feature
fix:	Bug fix
docs:	Documentation-only changes
style:	Formatting, missing semicolons, whitespace
refactor:	Code change that neither fixes a bug nor adds a feature
test:	Adding or updating tests
chore:	Maintenance tasks (configs, dependencies) 
```
   



**🔹 Good commits** 

```
feat: add user authentication
fix: resolve crash on profile update
docs: update README with installation steps
style: format code with Prettier
refactor: simplify dashboard component logic
test: add unit tests for login reducer
chore: update project dependencies
```

 **🔹 Pro Tips**

Always use imperative mood: e.g., Add feature instead of Added feature
Keep your commits focused: one commit = one purpose
Include context in the description when necessary
