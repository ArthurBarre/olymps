import React, { useState, useEffect } from 'react'

const useAudio = url => {
  const [audio] = useState(new Audio(url))
  const [playing, setPlaying] = useState(true)

  const toggle = () => setPlaying(!playing)

  useEffect(() => {
    playing ? audio.play() : audio.pause()
    audio.play()
    console.log(audio)
  }, [playing])

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false))
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false))
    }
  }, [])

  return [playing, toggle]
}

const PlayerAudio = ({ url }) => {
  const [playing, toggle] = useAudio(url)

  return (
    <div className="audio-container-div">
      <div onClick={toggle}>{playing ? 'Mute' : 'Sound'}</div>
    </div>
  )
}

export default PlayerAudio
