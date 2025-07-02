import React, { createContext, useReducer, useEffect } from "react"

export const TodoContext = createContext()

const initialState = JSON.parse(localStorage.getItem("todos")) || []

function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return [...state, { id: Date.now(), text: action.text, completed: false }]
    case "TOGGLE":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
      )
    case "DELETE":
      return state.filter(todo => todo.id !== action.id)
    case "EDIT":
      return state.map(todo =>
        todo.id === action.id ? { ...todo, text: action.newText } : todo
      )
    case "CLEAR_COMPLETED":
      return state.filter(todo => !todo.completed)
    default:
      return state
  }
}

export const TodoProvider = ({ children }) => {
  const [todos, dispatch] = useReducer(reducer, initialState)

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
  }, [todos])

  return (
    <TodoContext.Provider value={{ todos, dispatch }}>
      {children}
    </TodoContext.Provider>
  )
}
