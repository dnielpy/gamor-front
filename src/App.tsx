import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Loggin from './pages/Login/index'
import Main from './pages/Home/index'
import Home from './pages/Home/index'
import Header from './pages/Home/components/Navbar/Navbar.tsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Home></Home>
    </>
  )
}

export default App
