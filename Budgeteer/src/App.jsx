import { useState } from 'react'
import Header from './assets/Header'
import Welcome from './assets/Welcome'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'// import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Welcome/>
    </>
  )
}

export default App
