import React from "react"
import { useSelector, useDispatch } from "react-redux"
import { toggleTodoAction, deleteTodoAction } from "../store"

const TodoList = () => {
  const todos = useSelector(state => state.todos)
  const dispatch = useDispatch()
  const toggleTodo = todo => dispatch(toggleTodoAction(todo))
  const deleteTodo = todo => dispatch(deleteTodoAction(todo))
  return (
    <ul className="todoList">
      {todos.map(todo => (
        <li key={todo.id}>
          <input type="checkbox" checked={todo.done} onChange={() => toggleTodo(todo)} />
          <span className={todo.done ? "todoDone" : "todo"}>{todo.name}</span>
          <span
            className="todoDelete"
            onClick={() => {
              deleteTodo(todo)
            }}
          >
            X
          </span>
        </li>
      ))}
    </ul>
  )
}

export default TodoList
