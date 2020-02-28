import React from 'react'
import './tooltips.scss'

const ToolTip = ({ data }) => {
  // console.log(data)
  return (
    <div className="tooltipContainer">
      <div className="aera-name">{data.arrdt}</div>
      <div className="aera-infos">
        <ul>
          <li>
            <span>I dont remember</span>
            <span className="graph">{data.numberLocation}</span>
          </li>
          <li>
            <span>Accessible Gymnase </span>
            <span className="graph">{data.count}</span>
          </li>
          <li>
            <span>Accessibility types </span>
            <span className="graph">{data.moy}</span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ToolTip
