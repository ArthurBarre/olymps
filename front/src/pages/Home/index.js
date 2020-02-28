import React from 'react'
import Header from '../../components/Header'
import History from '../../components/History'
import Window from '../../components/Switcher/window'
export default ({skip}) => {
  return (
    <div className="Olymps">
      <div className="heroContainer">
        <Header skip={skip} />
      </div>
    </div>
  )
}
