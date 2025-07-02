import React, { useContext } from "react"
import TodoInput from "./components/TodoInput"
import TodoList from "./components/TodoList"
import FilterButtons from "./components/FilterButtons"
import ThemeToggleButton from "./components/ThemeToggleButton"
import { ThemeContext } from "./Contexts/ThemeContext"

const App = () => {
  const { theme } = useContext(ThemeContext)

  return (
    <div
      className={`min-h-screen flex items-center justify-center transition-all ${
        theme === "dark" ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <ThemeToggleButton />
      <div className="w-[850px] h-[600px] bg-slate-100 dark:bg-gray-800 shadow-2xl rounded-3xl p-12 space-y-8 overflow-auto">

        <h1 className="text-5xl font-extrabold text-center"> HaidaM - Todo App</h1>
        <TodoInput />
        <FilterButtons />
        <TodoList />
        <p className="text-sm text-center text-gray-500 dark:text-gray-400 pt-4">
  © 2025 HaidaM — Built with React & Context API
</p>

      </div>
    </div>
  )
}

export default App