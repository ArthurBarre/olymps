import React from 'react'
import './tooltips.scss'

const ToolTip = ({ count, numberLocation, moy, position }) => {
  return (
    <div className="tooltipContainer">
      <div className="position">
        <span>{position}</span>ème
      </div>
      <br />
      <div>Nombre de centres sportifs adaptés : {numberLocation}</div>
      <br />
      <div>Nombre de type d'accessibilité totale : {count}</div>
      <br />
      <div>Nombre de type d'accessibilité moyen : {moy}</div>
      <br />
    </div>
  )
}

export default ToolTip
