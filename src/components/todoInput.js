import React, { useState } from "react"
import uuid from "uuid/v4"
import { useDispatch } from "react-redux"
import { addTodoAction } from "../store"

const TodoInput = () => {
  const [todo, setTodo] = useState("")
  const dispatch = useDispatch()
  const addTodo = todo => dispatch(addTodoAction(todo))
  const onChange = e => {
    setTodo(e.target.value)
  }
  const onSubmit = e => {
    e.preventDefault()
    if (todo.trim() === "") return
    addTodo({ id: uuid(), name: todo, done: false })
    setTodo("")
  }
  return (
    <div className="todoInput">
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="Add a Todo" value={todo} onChange={onChange} />
        <button type="submit">Add</button>
      </form>
    </div>
  )
}

export default TodoInput
