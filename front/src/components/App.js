import React, { useEffect } from 'react'
import Navigation from './Navigation'
import Switcher from './Switcher'
import { BrowserRouter as Router } from 'react-router-dom'
import ToolTips from './Tooltips'
function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Router>
      {/*<ToolTips />*/}
       <Switcher />
      {/* <Navigation /> */}
    </Router>
  )
}

export default App
