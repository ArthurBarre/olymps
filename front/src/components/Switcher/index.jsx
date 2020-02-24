import React, { Children } from 'react'
import { useEffect, useState } from 'react'
import Home from '../../pages/Home'
import Map from '../ThreeJs/Three'
import GameHistory from '../GameHistory'
import './switcher.scss'

const heightScreen = window.innerHeight
const duration = 300
const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}
const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
}

const AnimWrapper = ({ Children }) => {
  return (
    <ReactCSSTransitionGroup
      transitionName="example"
      transitionEnterTimeout={500}
      transitionLeaveTimeout={300}
    >
      {Children}
    </ReactCSSTransitionGroup>
  )
}

const Test = () => {
  return (
    <div
      style={{ width: '100vw', height: '100vh', backgroundColor: 'red' }}
    ></div>
  )
}

export default function Switcher() {
  const [scrollTop, setScrollTop] = useState(0)
  const [scrolling, setScrolling] = useState(0)
  const [indexComp, setIndexComp] = useState(0)
  const [inProp, setInProp] = useState(false)

  const components = [
    {
      id: 0,
      comp: <Home />,
    },
    {
      id: 1,
      comp: <GameHistory />,
    },
    {
      id: 2,
      comp: <Map />,
    },
  ]
  // console.log(components)
  function checkIndex() {
    console.log(scrollTop)
    if (scrollTop < 200) {
      setIndexComp(0)
    }
    if ((scrollTop > 200) | (scrollTop > 499)) {
      setIndexComp(1)
    }
    if ((scrollTop > 500) | (scrollTop > 699)) {
      setIndexComp(2)
    }
    if ((scrollTop > 700) | (scrollTop > 900)) {
      setIndexComp(3)
    }
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
