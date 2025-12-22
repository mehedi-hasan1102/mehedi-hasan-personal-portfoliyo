---
title: Redux Interview Questions & Answers — Complete Bengali & English Guide
date: Dec 23, 2025
readTime: 5 min read
category: Web Development
description: A complete, beginner-friendly guide to Redux interview questions with detailed answers in Bengali and English. Ideal for freshers, interns, and junior web developers.
image: /assets/images/blogs/redux.jpg
---
# 📘 Redux Interview Questions – (English + Bengali)


---

## 1. What is Redux? Why will you use it?

**English Answer:**

Redux is a **predictable state management library** for JavaScript applications, commonly used with React. It helps manage application state in a centralized store, making the state easier to understand, debug, and maintain. Redux is mainly used when an application has complex state logic shared across many components.

**বাংলা উত্তর:**

Redux হলো একটি **state management library**, যা সাধারণত React–এর সাথে ব্যবহার করা হয়। এটি application–এর সব state একটি centralized store–এ রাখে, ফলে state management সহজ হয় এবং debugging করা সুবিধাজনক হয়।

---

## 2. What are the advantages of using Redux?

**English Answer:**

Advantages of Redux include centralized state management, predictable data flow, easier debugging with Redux DevTools, improved scalability, and better state consistency across the application.

**বাংলা উত্তর:**

Redux ব্যবহারের সুবিধাগুলোর মধ্যে রয়েছে centralized state, predictable data flow, সহজ debugging, scalability এবং application–এর সব জায়গায় state consistency।

---

## 3. What are the main features of Redux?

**English Answer:**

Main features of Redux are:

* Single source of truth (store)
* State is read-only
* Changes are made using pure functions (reducers)
* Predictable state updates

**বাংলা উত্তর:**

Redux–এর প্রধান ফিচার হলো single store, read-only state, reducer ব্যবহার করে state পরিবর্তন এবং predictable data flow।

---

## 4. What is a store in Redux?

**English Answer:**

The store is an object that holds the **entire state of the application**. It provides methods to access state, dispatch actions, and subscribe to state changes.

**বাংলা উত্তর:**

Redux–এ store হলো এমন একটি জায়গা যেখানে application–এর সব state সংরক্ষিত থাকে। এখান থেকেই state access, update এবং listen করা হয়।

---

## 5. What is a reducer in Redux?

**English Answer:**

A reducer is a **pure function** that takes the current state and an action, then returns a new updated state based on the action type.

**বাংলা উত্তর:**

Reducer হলো একটি pure function যা বর্তমান state এবং action নিয়ে নতুন state return করে।

---

## 6. What is an action in Redux?

**English Answer:**

An action is a plain JavaScript object that describes **what happened** in the application. It must have a `type` property and can include additional data called payload.

**বাংলা উত্তর:**

Redux–এ action হলো একটি JavaScript object যা বলে দেয় application–এ কী ঘটেছে। এতে অবশ্যই একটি `type` থাকে।

---

## 7. Explain the Redux data flow.

**English Answer:**

Redux follows a **unidirectional data flow**:

1. UI dispatches an action
2. Action is sent to reducer
3. Reducer updates the state
4. Store holds the updated state
5. UI re-renders based on new state

**বাংলা উত্তর:**

Redux–এ data flow একদিকে যায়। UI থেকে action dispatch হয়, reducer state update করে, store–এ নতুন state জমা হয় এবং UI আবার render হয়।

---

## 8. What is middleware in Redux?

**English Answer:**

Middleware is a function that sits between dispatching an action and the reducer. It is used for logging, asynchronous operations, error handling, and side effects.

**বাংলা উত্তর:**

Redux–এ middleware action এবং reducer–এর মাঝখানে কাজ করে। এটি logging, async কাজ এবং error handling–এর জন্য ব্যবহৃত হয়।

---

## 9. How to handle asynchronous actions in Redux?

**English Answer:**

Asynchronous actions in Redux are handled using middleware such as **Redux Thunk** or **Redux Saga**. These allow dispatching functions or handling side effects like API calls.

**বাংলা উত্তর:**

Redux–এ async কাজ handle করার জন্য Redux Thunk বা Redux Saga ব্যবহার করা হয়, যা API call বা asynchronous logic manage করতে সাহায্য করে।

---

## 10. Explain the concept of immutability in Redux.

**English Answer:**

Immutability means that the state should **never be modified directly**. Instead, a new copy of the state is created and returned. This ensures predictable updates and efficient change detection.

**বাংলা উত্তর:**

Redux–এ immutability মানে হলো state সরাসরি পরিবর্তন করা যাবে না। সব সময় নতুন state copy তৈরি করে return করতে হয়।

---

## 11. When should you use state, context API, and Redux and why?

**English Answer:**

* Local state: for component-specific data
* Context API: for small to medium global state
* Redux: for large-scale applications with complex state logic

Choosing the right tool improves performance and maintainability.

**বাংলা উত্তর:**

Component–এর নিজস্ব data হলে local state, মাঝারি global data হলে Context API এবং বড় ও complex application হলে Redux ব্যবহার করা উচিত।

