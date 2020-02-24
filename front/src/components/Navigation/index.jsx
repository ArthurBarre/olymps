import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'

import GoogleMap from '../Map/GoogleMap'
import Header from '../Header'
import History from '../History'
import Data from '../Data'
import Three from '../ThreeJs/Three'
import Loader from '../Loader'
import Home from '../../pages/Home'
// import Audio from '../Audio'
export default () => {
  return (
    <Switch>
      <Route path="/history">
        <History />
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
