import { useState } from 'react'
import { motion } from 'framer-motion'
import './App.scss'

const App = () => {
  const [count, setCount] = useState(0)

  return (
    <div className="App w-[98.7vw] flex flex-col items-center justify-center overflow-x-hidden">
      <div>
        <h1 className="text-5xl font-bold p-4">Hello from App</h1>
      </div>
      <div className="justify-center items-center flex h-screen overflow-x-hidden">
        <h1 className="text-3xl font-bold underline p-4">{count}</h1>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.9 }}
          className="border rounded-md shadow-md bg-blue-600 p-4" onClick={() => setCount(count + 1)}>
          Increment
        </motion.button>
      </div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="h-60"
        >
          <h1 className="text-3xl font-bold underline p-4">Hello from Motion 1</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="h-60"
        >
          <h1 className="text-3xl font-bold underline p-4">Hello from Motion 2</h1>
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          className="h-60"
        >
          <h1 className="text-3xl font-bold underline p-4">Hello from Motion 3</h1>
        </motion.div>
    </div>
  )
}

export default App