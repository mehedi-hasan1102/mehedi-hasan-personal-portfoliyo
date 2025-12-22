---
title: MongoDB Interview Questions & Answers — Complete Bengali & English Guide
date: Dec 23, 2025
readTime: 5 min read
category: Web Development
description: A complete, beginner-friendly guide to MongoDB  interview questions with detailed answers in Bengali and English. Ideal for freshers, interns, and junior web developers.
image: /assets/images/blogs/mongodb.jpg
---

# 📘 MongoDB Interview Questions –  (English + Bengali)

---

## 1. What is the $set in MongoDB?

**English Answer:**

`$set` is an **update operator** in MongoDB used to update the value of specific fields in a document without replacing the entire document. If the field already exists, `$set` updates it. If it does not exist, MongoDB creates the field.

It is commonly used with `updateOne`, `updateMany`, or `findOneAndUpdate` operations and helps in performing partial updates efficiently.

**বাংলা উত্তর:**

`$set` হলো MongoDB–এর একটি **update operator**, যা দিয়ে কোনো document–এর নির্দিষ্ট field update করা হয়, পুরো document পরিবর্তন না করে। যদি field আগে থেকে থাকে, তাহলে তার value update হয়, আর না থাকলে নতুন করে তৈরি হয়।

---

## 2. What is the purpose of a database?

**English Answer:**

The main purpose of a database is to **store, manage, retrieve, and organize data efficiently**. A database ensures data persistence, security, consistency, and easy access. It allows applications to handle large amounts of data reliably and perform operations like create, read, update, and delete (CRUD).

**বাংলা উত্তর:**

Database–এর মূল উদ্দেশ্য হলো **ডাটা সংরক্ষণ, ব্যবস্থাপনা এবং সহজে retrieve করা**। Database ডাটাকে নিরাপদ রাখে, consistency বজায় রাখে এবং বড় ডাটার উপর CRUD operation সহজ করে।

---

## 3. What do you mean by database design and database schema design?

**English Answer:**

Database design refers to the overall structure of the database, including how data is stored, related, and accessed. Database schema design focuses on defining the structure of collections/tables, fields, data types, relationships, and constraints.

Good database design improves performance, scalability, and maintainability.

**বাংলা উত্তর:**

Database design বলতে বোঝায় ডাটাবেসের সম্পূর্ণ কাঠামো কেমন হবে। Schema design হলো database–এর ভিতরে collection বা table–এর structure, field, data type এবং relationship নির্ধারণ করা। ভালো design করলে performance ও scalability বাড়ে।

---

## 4. What is Mongoose? How does it work? Have you ever used it?

**English Answer:**

Mongoose is an **Object Data Modeling (ODM) library** for MongoDB and Node.js. It provides a schema-based solution to model application data. Mongoose allows developers to define schemas, validate data, create models, and interact with MongoDB using JavaScript objects.

It works by mapping MongoDB documents to JavaScript objects, making database operations easier and more structured. Yes, it is widely used in real-world Node.js applications.

**বাংলা উত্তর:**

Mongoose হলো MongoDB ও Node.js–এর জন্য একটি **ODM library**। এটি schema তৈরি, data validation এবং model ব্যবহার করে MongoDB–এর সাথে কাজ সহজ করে। Mongoose MongoDB document–কে JavaScript object–এ রূপান্তর করে কাজ করা সহজ করে দেয়।

---

## 5. Why do we use Node MongoDB with React without MySQL?

**English Answer:**

MongoDB is commonly used with Node and React because it stores data in **JSON-like documents**, which aligns naturally with JavaScript. This makes data handling smoother across frontend and backend. MongoDB also offers flexible schema design, high scalability, and better performance for modern web applications compared to traditional SQL databases in many use cases.

**বাংলা উত্তর:**

Node ও React–এর সাথে MongoDB ব্যবহার করা হয় কারণ MongoDB JSON–এর মতো format–এ ডাটা সংরক্ষণ করে, যা JavaScript–এর সাথে খুব ভালোভাবে কাজ করে। Flexible schema এবং scalability–র জন্য অনেক ক্ষেত্রে MySQL–এর চেয়ে MongoDB বেশি সুবিধাজনক।

---

## 6. How does MongoDB differ from traditional relational databases?

**English Answer:**

MongoDB is a **NoSQL, document-based database**, while traditional databases like MySQL are relational and table-based. MongoDB uses collections and documents instead of tables and rows, supports flexible schemas, and scales horizontally more easily.

**বাংলা উত্তর:**

MongoDB হলো একটি NoSQL database যা document–ভিত্তিক, আর traditional database যেমন MySQL table–ভিত্তিক। MongoDB–তে schema flexible এবং horizontal scaling সহজ।

---

## 7. What is a collection in MongoDB?

**English Answer:**

A collection in MongoDB is a group of related documents stored within a database. It is similar to a table in relational databases but does not enforce a fixed schema.

**বাংলা উত্তর:**

MongoDB–তে collection হলো একই ধরনের document–এর একটি group। এটি relational database–এর table–এর মতো, তবে এখানে fixed schema বাধ্যতামূলক নয়।

---

## 8. How does MongoDB store data?

**English Answer:**

MongoDB stores data in **BSON (Binary JSON) format**, which is a binary representation of JSON-like documents. BSON supports additional data types and allows fast storage and retrieval.

**বাংলা উত্তর:**

MongoDB ডাটা সংরক্ষণ করে **BSON format–এ**, যা JSON–এর একটি binary version। এটি বেশি data type support করে এবং দ্রুত read/write করতে সাহায্য করে।

---

## 9. What is the primary key in MongoDB?

**English Answer:**

The primary key in MongoDB is the `_id` field. Every document automatically gets a unique `_id` value, which is used to uniquely identify documents within a collection.

**বাংলা উত্তর:**

MongoDB–তে primary key হলো `_id` field। প্রতিটি document–এর জন্য MongoDB নিজে থেকেই একটি unique `_id` তৈরি করে, যা document–কে আলাদা করে চিহ্নিত করে।


