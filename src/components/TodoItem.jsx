import { useContext, useState } from "react"
import { TodoContext } from "../Contexts/TodoContext"

const TodoItem = ({ todo }) => {
  const { dispatch } = useContext(TodoContext)
  const [editing, setEditing] = useState(false)
  const [text, setText] = useState(todo.text)

  const saveEdit = () => {
    dispatch({ type: "EDIT", id: todo.id, newText: text })
    setEditing(false)
  }

  return (
    <div className="flex justify-between items-center bg-white/10 px-3 py-2 rounded shadow">
      {editing ? (
        <input value={text} onChange={(e) => setText(e.target.value)} onBlur={saveEdit} autoFocus />
      ) : (

        <span

        onClick={() => dispatch({ type: "TOGGLE", id: todo.id })}

        className={`cursor-pointer text-white ${todo.completed ? "line-through text-gray-400" : ""}`}
        >
            {todo.text}
            </span>

      )}

      <div className="flex gap-2">
        <button onClick={() => setEditing(true)} className="text-yellow-400">Edit</button>
        <button onClick={() => dispatch({ type: "DELETE", id: todo.id })} className="text-red-500">Delete</button>
      </div>
    </div>
  )
}

export default TodoItem
