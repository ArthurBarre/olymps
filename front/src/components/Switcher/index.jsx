import React, { Children } from 'react'
import { useEffect, useState } from 'react'
import Home from '../../pages/Home'
import Map from '../ThreeJs/Three'
import GameHistory from '../GameHistory'
import Practice from '../Practice/index'
import './switcher.scss'

const heightScreen = window.innerHeight

export default function Switcher() {
  const [scrollTop, setScrollTop] = useState(0)
  const [scrolling, setScrolling] = useState(0)
  const [indexComp, setIndexComp] = useState(0)
  const [inProp, setInProp] = useState(false)
  const [wait, setWait] = useState(false)

  const components = [
    {
      id: 0,
      comp: <Home skip={skip} />,
    },
    {
      id: 1,
      comp: <GameHistory />,
    },
    {
      id: 2,
      comp: <Practice goMap={goMap} />,
    },
    {
      id: 3,
      comp: <Map goHistory={goHistory} />,
    },
  ]
  // console.log(components)
  function checkIndex() {
    console.log(scrollTop)
    if (wait) {
      if (indexComp > 2) {
        return
      } else {
        if (scrollTop < 200) {
          setIndexComp(0)
        }
        if (scrollTop > 200 && scrollTop < 499) {
          setIndexComp(1)
        }
        if (scrollTop > 500 && scrollTop < 699) {
          setIndexComp(2)
        }
      }
    }
  }
  function goMap() {
    setIndexComp(3)
  }
  function goHistory() {
    setIndexComp(0)
  }
  function skip() {
    setWait(true)
  }

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop)
      setScrolling(e.target.documentElement.scrollTop > scrollTop)
    }
    let windowtest = document.getElementById('windowtest')
    setTimeout(() => {
      setWait(true)
      windowtest.style.overflowY = 'hidden'
    }, 12000)
    if (!wait) window.scrollTo(0, 0)
    window.addEventListener('scroll', onScroll)
    checkIndex()
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])
  return (
    <>
      <div id="windowtest" className="window">
        {components[indexComp].comp}
      </div>
    </>
  )
}
