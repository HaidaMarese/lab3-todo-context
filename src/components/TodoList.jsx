import { useContext } from "react"
import { TodoContext } from "../Contexts/TodoContext"
import { FilterContext } from "../Contexts/FilterContext"
import TodoItem from "./TodoItem"

const TodoList = () => {
  const { todos } = useContext(TodoContext)
  const { filter } = useContext(FilterContext)

  const filtered = todos.filter(todo => {
    if (filter === "active") return !todo.completed
    if (filter === "completed") return todo.completed
    return true
  })

  return (
    <div className="space-y-2">
      {filtered.length === 0 ? <p>No todos!</p> : filtered.map(todo => <TodoItem key={todo.id} todo={todo} />)}
    </div>
  )
}

export default TodoList
