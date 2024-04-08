import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './components/Header'
import Createtodo from './components/Createtodo'
import Todolists from './components/Todolists'

function App() {

  const [todos, setTodos] = useState([])
  return (
    <>
    <Header></Header>
    <div className='d-flex maindiv m-3'>
      <div className='flex-grow-1'>
      <Createtodo settodo={setTodos} todos={todos}  ></Createtodo>

      </div>
      <div className='flex-grow-1'>
      <Todolists todos={todos} settodos={setTodos}></Todolists>

      </div>
    </div>
    </>
  )
}

export default App
