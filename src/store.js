import { createStore, applyMiddleware } from "redux"
import uuid from "uuid/v4"

//extra
import logger from "redux-logger"

const initialState = {
  todos: [
    {
      id: uuid(),
      name: "start this app",
      done: true,
    },
    {
      id: uuid(),
      name: "finish this app",
      done: false,
    },
  ],
}

const reducer = (state, action) => {
  const { type, payload } = action
  switch (type) {
    case "ADD_TODO":
      return {
        ...state,
        todos: [...state.todos, payload],
      }
    case "REMOVE_TODO":
      return {
        ...state,
        todos: state.todos.filter(todo => todo.id !== payload),
      }
    case "TOGGLE_TODO":
      return {
        ...state,
        todos: state.todos.map(todo =>
          todo.id === payload ? { id: todo.id, name: todo.name, done: !todo.done } : todo
        ),
      }
    default:
      return state
  }
}

// Actions
export const addTodoAction = todo => ({ type: "ADD_TODO", payload: todo })
export const toggleTodoAction = todo => ({ type: "TOGGLE_TODO", payload: todo.id })
export const deleteTodoAction = todo => ({ type: "REMOVE_TODO", payload: todo.id })

// Store
export const store = createStore(reducer, initialState, applyMiddleware(logger))
