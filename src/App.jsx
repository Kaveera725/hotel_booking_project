import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/favicon.svg'
import './App.css'
import Navbar from './components/Navbar'
import { useLocation } from 'react-router-dom'

const App = () => {

  const isOwnerpath = useLocation().pathname.includes("owner");

  return (
    <div>
      {!isOwnerpath && <Navbar />}
    </div>
  )
}

export default App
