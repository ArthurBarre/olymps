import React from 'react'
import { useEffect, useState } from 'react'
import Home from '../../pages/Home'
import Map from '../ThreeJs/Three'
import History from '../History'
import './switcher.scss'
const heightScreen = window.innerHeight
console.log(heightScreen)
export default function Switcher() {
  const [scrollTop, setScrollTop] = useState(0)
  const [scrolling, setScrolling] = useState(0)
  const [indexComp, setIndexComp] = useState(0)

  const components = [
    {
      id: 0,
      comp: <Home />,
    },
    {
      id: 1,
      comp: <History />,
    },
    {
      id: 2,
      comp: <Map />,
    },
    {
      id: 3,
      comp: <Map />,
    },
  ]
  // console.log(components)
  window.scrollTo(0, 0)
  function checkIndex() {
    console.log(scrollTop)

    if (scrollTop > 200) {
      setIndexComp(1)
    }
    if (scrollTop > 300) {
      setIndexComp(2)
    }
    if (scrollTop > 400) {
      setIndexComp(3)
    }
    // if (scrollTop < 200) {
    //   setIndexComp(1)
    // }
    // if (scrollTop < 300) {
    //   setIndexComp(2)
    // }
    // if (scrollTop < 400) {
    //   setIndexComp(3)
    // }
    console.log(components[indexComp])
  }

  useEffect(() => {
    const onScroll = e => {
      setScrollTop(e.target.documentElement.scrollTop)
      setScrolling(e.target.documentElement.scrollTop > scrollTop)
    }
    window.addEventListener('scroll', onScroll)
    checkIndex()
    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollTop])
  return (
    <>
      <div className="window">{components[indexComp].comp}</div>
    </>
  )
}
