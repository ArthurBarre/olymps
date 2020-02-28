import React, { useEffect, useState } from 'react'
import './tooltips.scss'
import * as d3 from 'd3'
import { number } from 'prop-types'

let barsContainer
const ToolTip = ({ arrdt, data }) => {
  const { numberLocation, count, moy, position } = data
  //   return (
  /*useEffect(()=>{
        console.log('gro', numberLocation);
    }, [numberLocation]);*/

  useEffect(() => {
    barsContainer !== undefined && d3.select('.bar-one .graph').remove()
    barsContainer !== undefined && d3.select('.bar-two .graph').remove()
    barsContainer !== undefined && d3.select('.bar-three .graph').remove()

    let mapBarWidth = 180
    let ratioBar1 = 80 / 100
    let ratioBar2 = count / 2293
    let ratioBar3 = moy / 6

    barsContainer = d3.select('.aera-infos')

    let mapBar1 = d3
      .select('.bar-one')
      .append('svg')
      .attr('class', 'graph')
      .attr('height', 100)
      .attr('width', mapBarWidth)

    let progressBar1 = mapBar1
      .append('rect')
      .attr('fill', 'rgba(27, 27, 27, 0.78)')
      .attr('height', 15)
      .attr('width', '0')
      .attr('x', 0)

    progressBar1
      .transition()
      .duration(1000)
      .attr('width', function() {
        return mapBarWidth * ratioBar1
      })

    let mapBar2 = d3
      .select('.bar-two')
      .append('svg')
      .attr('class', 'graph')
      .attr('height', 100)
      .attr('width', mapBarWidth)

    let progressBar2 = mapBar2
      .append('rect')
      .attr('fill', 'rgba(27, 27, 27, 0.78)')
      .attr('height', 15)
      .attr('width', 0)
      .attr('x', 0)

    progressBar2
      .transition()
      .duration(1000)
      .attr('width', function() {
        return mapBarWidth * ratioBar2
      })

    let mapBar3 = d3
      .select('.bar-three')
      .append('svg')
      .attr('class', 'graph')
      .attr('height', 100)
      .attr('width', mapBarWidth)

    let progressBar3 = mapBar3
      .append('rect')
      .attr('fill', 'rgba(27, 27, 27, 0.78)')
      .attr('height', 15)
      .attr('width', 0)
      .attr('x', 0)

    progressBar3
      .transition()
      .duration(1000)
      .attr('width', function() {
        return mapBarWidth * ratioBar3
      })
  }, [arrdt])

  return (
    <div className="tooltipContainer">
      <div className="area-name-container">
        <div className="area-name">
          {position}
          {position === 1 ? 'er' : 'ème'}
        </div>
      </div>
      <div className="aera-infos">
        <ul>
          <li>
            <span className="text-map-tooltip">Arrondissement {arrdt}</span>
            <span className="bar bar-one"></span>
          </li>
          <li>
            <span className="text-map-tooltip">Accessible Gymnase </span>
            <span className="bar bar-two"></span>
          </li>
          <li>
            <span className="text-map-tooltip">Accessibility types </span>
            <span className="bar bar-three"></span>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default ToolTip
