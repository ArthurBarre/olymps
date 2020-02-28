import React, { useEffect } from 'react'
import Navigation from './Navigation'
import Switcher from './Switcher'
import { BrowserRouter as Router } from 'react-router-dom'
import ToolTips from './Tooltips';
import PlayerAudio from './Audio/Audio';
import sound from '../assets/audios/soundbg.mp3';


function App() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <Router>
      <Switcher />
      <div className="soundContainer">
        <PlayerAudio url={sound} />
      </div>
    </Router>
  )
}

export default App
