import React from 'react'
import logo from './images/logo.png'
import './css/index.css'
import { Button } from 'evergreen-ui'

function App() {
  return (
    <div>
      <img src={logo} className="w-12" alt="logo" />
      <Button>a</Button>
    </div>
  )
}

export default App
