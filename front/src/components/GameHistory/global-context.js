import React from 'react'
let events = [];
// set the defaults
const GlobalContext = React.createContext({
  events: events,
  setEvents(e){
    events = e;
  }
})

export default GlobalContext
