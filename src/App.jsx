import { useState } from 'react'
import './App.scss'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App w-screen flex items-center justify-center">
      <h1 className="text-3xl font-bold underline p-4">{count}</h1>
      <button onClick={() => setCount(count + 1)}>Increment</button>
    </div>
  )
}

export default App