import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Home from "./components/Home/Home"
import MenuB from './components/headers/header'
import ContactB from './components/footers/footer'

import Button from "@mui/material/Button"
function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <MenuB />
      <Home />
      <ContactB />
     
    </div>
  )
}

export default App
