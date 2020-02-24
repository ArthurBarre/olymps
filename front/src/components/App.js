import React from 'react'
import ReactDOM from 'react-dom'
import '../scss/App.scss'
import Navigation from './Navigation'
import Switcher from './Switcher'
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <Router>
      <Switcher />
      {/* <Navigation /> */}
    </Router>
  )
}

export default App
