import React from 'react'
import Footer from './Footer/Footer'
import AddTodo from './TodoList/AddTodo'
import VisibleTodoList from './TodoList/VisibleTodoList'

const App = () => (
  <div>
    <AddTodo />
    <VisibleTodoList />
    <Footer />
  </div>
);

export default App
