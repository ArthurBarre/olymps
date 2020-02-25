import React from 'react'
import { useEffect } from 'react'
import { api_url } from '../constants'

export default function ToolTips() {
  useEffect(() => {
    fetch(`${api_url}/locations`, {})
      .then(res => res.json())
      .then(res => console.log(res))
    // .then(res => setInfra(res));
  }, [])
  return <div></div>
}
