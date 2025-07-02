#  Lab 3: Todo App with Context API 

## Description

This lab project demonstrates a fully functional **Todo application** built using **React's Context API** to manage global state without prop drilling. It leverages three independent contexts—`TodoContext`, `FilterContext`, and `ThemeContext`for managing todos, visibility filters, and theming. The app also includes localStorage persistence and a clean, modern UI styled with Tailwind CSS.

---

##  Learning Objectives

- Implement multiple independent Contexts for state management
- Compose and nest Context Providers for clean application structure
- Consume Context values using the `useContext` hook
-  Use `useReducer` to manage complex state logic in `TodoContext`
- Implement localStorage persistence for todos and theme
- Apply performance optimization using `useMemo` and separation of concerns

---

## Features

- **Add, toggle, edit, and delete todos**
- **Filter todos** by `All`, `Active`, or `Completed`
- **Clear completed todos** with a single action
- **Dark/Light theme toggle** with persistent state
- **LocalStorage integration** to save todos and theme
- Fully **responsive**, clean, and minimal design using **Tailwind CSS**

---

## Project Structure

```
src/
├── components/ # UI components (input, list, buttons)
│ ├── TodoInput.jsx
│ ├── TodoList.jsx
│ ├── TodoItem.jsx
│ ├── FilterButtons.jsx
│ └── ThemeToggleButton.jsx
├── contexts/ # Context API logic
│ ├── TodoContext.jsx
│ ├── FilterContext.jsx
│ └── ThemeContext.jsx
├── AppProviders.jsx # Combines all Providers
├── App.jsx # Main App layout
├── main.jsx # ReactDOM.render + Provider wrapper
└── index.css # Tailwind CSS imports
```
---

##  Tech Stack

-  React (Vite + JSX)
-  Tailwind CSS
-  React Context API (`useContext`, `useReducer`, `useMemo`)
- localStorage for persistence

---

## Install Dependencies
- npm install
- npm run dev

##  Screenshot
![image](https://github.com/user-attachments/assets/9d719b48-f0f5-4ab3-abf9-ea464f3115c6)

![image](https://github.com/user-attachments/assets/d48bd549-c3ad-44e3-b305-182ee0a988da)



## Clone the Repo
```bash
git clone https://github.com/HaidaMarese/lab3-todo-context.git
cd lab3-todo-context


