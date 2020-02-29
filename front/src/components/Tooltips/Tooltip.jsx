import React from 'react'
import './tooltips.scss'

const ToolTip = ({ data, arrdt }) => {
  // console.log(data, numberLocation)
  const { numberLocation, count, moy } = data
  console.log(data)
  return (
    <div className="tooltipContainer">
      <div className="aera-name">{arrdt}</div>
      <div className="aera-infos">
        <ul>
          <li>
            <span>I dont remember</span>
            <span className="graph">{numberLocation}</span>
          </li>
          <li>
            <span>Accessible Gymnase </span>
            <span className="graph">{count}</span>
          </li>
          <li>
            <span>Accessibility types </span>
            <span className="graph">{moy}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ToolTip
