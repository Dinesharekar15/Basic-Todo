import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreatTodo'
import { Todos } from './components/Todos'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
       <CreateTodo></CreateTodo>
       {/* <Todos></Todos> */}

      </div>
    </>
  )
}

export default App