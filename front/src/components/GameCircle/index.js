import React, {useContext, useEffect} from "react";
import jo from '../../data.json';
import * as d3 from "d3";
import './GameCircle.scss';
import YearContext from "../GameHistory/year-context";
import {TimelineMax} from 'gsap';
import allSports from '../constants/index'

// First inizialisation of circle
let circle;


export default function GameCircle() {
    const {currentYear, setCurrentYear} = useContext(YearContext);

    let width = 600,
        height = 600,
        radius = 90;

    useEffect(() => {

        //remove svg if is defined
        (circle !== undefined) && d3.select("svg").remove();

        let numSports = allSports.length;
        let step = 360/numSports;
        let sportTextCount = 0;
        let sportFillCount = 0;
        let tl = new TimelineMax();

        /*tl.fromTo(".circle", {opacity: 0}, {opacity: 1}, 0.5 );*/

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

        ga.append("text")
            .attr("x", radius + 6)
            .attr("dy", ".35em")
            .style("text-anchor", function(d) { return d < 270 && d > 90 ? "end" : null; })
            .attr("transform", function(d) { return d < 270 && d > 90 ? "rotate(180 " + (radius + 6) + ",0)" : null; })
            .text(function () {
                sportTextCount++;
                return allSports[sportTextCount-1];
            })
            .attr('fill', function () {
                if (jo[currentYear.id].sports.sportsList.includes(allSports[sportFillCount])){
                    sportFillCount++;
                    return '#fff';
                } else {
                    sportFillCount++;
                    return 'rgba(255,255,255,0.42)';
                }
            })

    },[currentYear.id]);




    return (
        <div className="circle">

        </div>

    );
}







