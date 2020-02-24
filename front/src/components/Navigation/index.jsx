import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import Header from '../Header'
import History from '../History'
import Data from '../Data'
import Three from '../ThreeJs/Three'
import Loader from '../Loader'
import Home from '../../pages/Home'
import GameHistory from "../GameHistory";
// import Audio from '../Audio'
export default () => {
  return (
    <Switch>
      <Route path="/history">
        <GameHistory />
      </Route>
      <Route path="/map">
        <Three />
      </Route>
      <Route exact path="/home">
        <Home />
      </Route>
      {/* <Route exact path="/audio">
        <Audio />
      </Route> */}
    </Switch>
  )
}
