import { useContext } from "react"
import { ThemeContext } from "../Contexts/ThemeContext"

const ThemeToggleButton = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)
  return (
    <button onClick={toggleTheme} className="absolute top-4 right-4 px-3 py-1 rounded bg-indigo-500 text-white">
      {theme === "dark" ? "☀️ Light" : "🌙 Dark"}
    </button>
  )
}

export default ThemeToggleButton
