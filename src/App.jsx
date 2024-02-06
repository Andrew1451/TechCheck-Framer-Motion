import { useState, useRef } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const borderRef = useRef(null)

  return (
    <div ref={borderRef} style={{width: '100vw'}}>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <a href="https://react.dev" target="_blank">
          <motion.img animate={{rotate: 360, scale: [1, 2, 1], x: [0, 100, -100, 0]}} 
          transition={{duration: 2}} src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <motion.button drag dragConstraints={borderRef} whileHover={{scale: 1.2}} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </motion.button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <a href="https://react.dev" target="_blank">
          <motion.img animate={{rotate: 360, scale: [1, 2, 1], x: [0, 100, -100, 0]}} 
          transition={{duration: 2}} src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <motion.button drag dragSnapToOrigin whileHover={{scale: 1.2}} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </motion.button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <a href="https://react.dev" target="_blank">
          <motion.img whileInView={{rotate: 360, scale: [1, 2, 1], x: [0, 100, -100, 0]}} 
          transition={{duration: 2}} src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <motion.button drag dragSnapToOrigin whileHover={{scale: 1.2}} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </motion.button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
      <div>
        {/* <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a> */}
        <a href="https://react.dev" target="_blank">
          <motion.img animate={{rotate: 360, scale: [1, 2, 1], x: [0, 100, -100, 0]}} 
          transition={{duration: 2}} src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <motion.button drag dragSnapToOrigin whileHover={{scale: 1.2}} onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </motion.button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
