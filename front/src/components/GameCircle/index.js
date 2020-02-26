import React, { useContext, useEffect } from 'react'
import jo from '../../data.json'
import * as d3 from 'd3'
import './GameCircle.scss'
import YearContext from '../GameHistory/year-context'
import { allSports } from '../constants/index'
console.log('test', allSports)
// First inizialisation of circle
let circle

export default function GameCircle() {
    const {currentYear, setCurrentYear} = useContext(YearContext);

    let width = 600,
        height = 600,
        radius = 100;

    useEffect(() => {

        //remove svg if is defined
        (circle !== undefined) && d3.select(".circle svg").remove();

        let numSports = allSports.length;
        let step = 360/(numSports+2);
        let sportTextCount = 0;
        let circleValueCount = 0;
        let sportFillCount = 0;
        let detectMidCount = 0;

        circle = d3.select(".circle").append("svg")
            .attr("width", width)
            .attr("height", height)
            .append("g")
            .attr("transform", "translate(" + width / 2 + "," + height / 2 + ")");


        let ga = circle.append("g")
            .selectAll("g")
            .data(d3.range(0, 360, step))
            .enter().append("g")
            .attr("transform", function(d) { return "rotate(" + -d + ")"; });

        let text = ga.append("text")
            .attr("x", radius + 6)
            .attr('dy', '.35em')
            .style("text-anchor", function(d) { return d < 270 && d > 90 ? "end" : null; })
            .attr("transform", function(d) { return d < 270 && d > 90 ? "rotate(180 " + (radius + 6) + ",0)" : null; })
            .text(function () {
                circleValueCount++;
                if(circleValueCount-1 === numSports/2+1 || circleValueCount-1 === numSports/2 || circleValueCount-1 === numSports/2+2){
                    return '';
                }
                else {
                    sportTextCount++;
                    return allSports[sportTextCount-1];
                }
            })
            .attr('fill', function () {
                if (jo[currentYear.id].sports.sportsList.includes(allSports[sportFillCount])){
                    sportFillCount++;
                    return '#fff';
                } else {
                    sportFillCount++;
                    return 'rgba(255,255,255,0.42)';
                }
            });

        let border = ga.append('line')
            .attr("x1", radius + 6)
            .attr("y1", 1.6)
            .attr("x2", -60)
            .attr("y2", 1.6)
            .attr("stroke-width", 1)
            .attr("transform", function(d) { return d < 270 && d > 90 ? "rotate(180 " + (radius + 6) + ",0)" : null; })
            .attr("stroke", "#BEBEBE")
            .style("visibility", function () {
                detectMidCount++;
                if (detectMidCount - 1 !== ((numSports / 2)+1)) {
                    return 'hidden';
                } else {
                    return 'visible';
                }
            });

    },[currentYear.id]);




    return (
        <div className="circle">

        </div>

    );
}
