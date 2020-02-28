import React, {useContext, useEffect, useState} from 'react'
import jo from '../../events.json'
import * as d3 from 'd3'
import './GameCircle.scss'
import YearContext from '../GameHistory/year-context'
import { allSports } from '../constants/index'

// First inizialisation of circle
let circle;

export default function GameCircle() {
    const {currentYear, setCurrentYear} = useContext(YearContext);
    const [stockedData, setStockedData] = useState({prevSports: []});

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
        let newFillCount= 0 ;
        let currentSports = [];
        let currentNewSports = [];
        let allYearSport = [];

        // Push in allYearSport array all the sports of the current year
        for (let sport = 0; sport < jo[currentYear.id].sportList.length; sport++) {
            allYearSport.push(jo[currentYear.id].sportList[sport].title);
        }

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

        let sportsNames = ga.append("text")
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
            .transition().duration(0)
            .attr('fill', function () {
                if(sportFillCount > (numSports/2)-1) {
                    if (allYearSport.includes(allSports[sportFillCount-3])){
                        if(stockedData.prevSports.includes(sportFillCount-3)){
                            currentSports.push(sportFillCount-3);
                            sportFillCount++;
                            return '#fff';
                        } else {
                            currentSports.push(sportFillCount-3);
                            currentNewSports.push(sportFillCount-3);
                            sportFillCount++;
                            return 'rgba(255,255,255,0.32)';
                        }

                    }
                    else {
                        if(stockedData.prevSports.includes(sportFillCount-3)){
                            sportFillCount++;
                            return '#fff';
                        } else {
                            sportFillCount++;
                            return 'rgba(255,255,255,0.32)';
                        }
                    }
                }
                else {
                    if (allYearSport.includes(allSports[sportFillCount])){
                        if(stockedData.prevSports.includes(sportFillCount)){
                            currentSports.push(sportFillCount);
                            sportFillCount++;
                            return '#fff';
                        } else {
                            currentSports.push(sportFillCount);
                            currentNewSports.push(sportFillCount);
                            sportFillCount++;
                            return 'rgba(255,255,255,0.32)';
                        }
                    } // sinon mon sport actuel n'est pas dans la sport list
                    else {
                        if(stockedData.prevSports.includes(sportFillCount)){
                            sportFillCount++;
                            return '#fff';
                        } else {
                            //all sport suivant et ce sport est gris
                            sportFillCount++;
                            return 'rgba(255,255,255,0.32)';
                        }
                    }
                }
            })
            .transition().duration(1000)
            .attr('fill', function () {
                if(newFillCount > (numSports/2)-1) {
                    if (currentSports.includes(newFillCount-3) || currentNewSports.includes(newFillCount-3)){
                        newFillCount++;
                        return '#fff';
                    } else {
                        newFillCount++;
                        return 'rgba(255,255,255,0.32)';
                    }
                } else {
                    if (currentSports.includes(newFillCount) || currentNewSports.includes(newFillCount)){
                        newFillCount++;
                        return '#fff';
                    } else {
                        newFillCount++;
                        return 'rgba(255,255,255,0.32)';
                    }
                }
            });

        setStockedData({prevSports: currentSports});



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