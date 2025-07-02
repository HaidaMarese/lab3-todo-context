import { useContext, useState } from "react"
import { TodoContext } from "../Contexts/TodoContext"

const TodoInput = () => {
  const [text, setText] = useState("")
  const { dispatch } = useContext(TodoContext)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (text.trim()) {
      dispatch({ type: "ADD", text })
      setText("")
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        className="border px-3 py-1 rounded"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Add todo"
      />
      <button className="bg-blue-600 text-white px-5 py-2 text-lg font-semibold rounded">
  Add
</button>

    </form>
  )
}

export default TodoInput
