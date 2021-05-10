import React from "react"
import TodoInput from "./components/todoInput"
import TodoList from "./components/todoList"

import { Provider } from "react-redux"
import { store } from "./store"

import "./App.css"

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <TodoInput />
          <TodoList />
        </div>
      </Provider>
    )
  }
}

export default App
