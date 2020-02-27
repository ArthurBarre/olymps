import React, {useContext, useEffect, useState} from 'react'
import jo from '../../data.json'
import * as d3 from 'd3'
import './GameCircle.scss'
import YearContext from '../GameHistory/year-context'
import { allSports } from '../constants/index'
console.log('test', allSports)

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
                /*if(sportFillCount === (numSports/2+3)) {
                    sportFillCount++;
                    return 'red';
                }
                 else {*/
                    //si mon sport actuel est contenu dans la sport liste
                    if (jo[currentYear.id].sports.sportsList.includes(allSports[sportFillCount])){
                        // test si l'id du sport actuel est contenu dans les anciens sports ids
                        if(stockedData.prevSports.includes(sportFillCount)){
                            //si oui push l'id dans un tableau currentSports
                            currentSports.push(sportFillCount);
                            //all sport suivant et ce sport est blanc
                            sportFillCount++;
                            return '#fff';
                        } //sinon (pas id d'ancien sport)
                        else {
                            // push l'id dans les current Sports
                            currentSports.push(sportFillCount);
                            // et push aussi l'id dans les new sports
                            currentNewSports.push(sportFillCount);
                            //all sport suivant et ce sport est gris dans un premier temps
                            sportFillCount++;
                            return 'white';
                        }

                    } // sinon mon sport actuel n'est pas dans la sport list
                    else {
                        //all sport suivant et ce sport est gris
                        sportFillCount++;
                        return 'rgba(255,255,255,0.32)';
                    }

                /*}*/
            });
            /*.transition().duration(1000)
            .attr('fill', function () {
                // si mon id est contenu dans mon tableau d'id currentNewSports
                if (currentSports.includes(newFillCount) || currentNewSports.includes(newFillCount)){
                    //allsport suivant et l'actuel devient blanc (transition pour les news qui ne l'étaient pas déjà)
                    newFillCount++;
                    return '#fff';
                } // allSport suivant et le sport actuel devient gris
                else {
                    //sinon si mon id n'est pas dans mes current sport
                    newFillCount++;
                    return 'rgba(255,255,255,0.32)';
                }
            });*/

        /*console.log('current sport', currentSports);
        console.log('anciens sports', stockedData.prevSports);*/
        //ici


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
