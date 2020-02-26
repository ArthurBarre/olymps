import React, {useContext, useEffect} from "react";
import YearContext from "../GameHistory/year-context";
import jo from "../../data";
import './GameHistograms.scss';
import * as d3 from "d3";
import {maxAthlete} from "../constants";
import {maxDiscipline} from "../constants";
import {maxCountry} from "../constants";

let barsWrapper;
export default function GameHistograms() {
    const {currentYear, setCurrentYear} = useContext(YearContext);

    useEffect(() => {

        //remove svg if is defined
        (barsWrapper !== undefined) && d3.select(".bars-wrapper").remove();

        let rectHeight = 200;
        let rectWidth = 13;
        let histogramsWrapperWidth = 300;

        barsWrapper = d3.select('.histograms-wrapper')
            .style('width', `${histogramsWrapperWidth}px`)
            .append('div')
            .attr('class', 'bars-wrapper')
            .attr('height', 200);



        //Athlete Bar
        let athleteBar = barsWrapper.append('svg')
            .attr('class', 'athlete-bar')
            .attr('height', 200)
            .attr('width', histogramsWrapperWidth/3);
        let currentAthlete = jo[currentYear.id].participants.athletesNumber;
        let athleteRatio = currentAthlete/maxAthlete;

        athleteBar.append('rect')
            .attr('fill', 'transparent')
            .style('stroke', 'rgba(196, 196, 196, 0.37)')
            .attr('x', 50-(rectWidth/2))
            .attr('width', rectWidth)
            .attr('height', function(){
                return rectHeight;
            });

        let athleteProgress = athleteBar.append('rect')
            .style('transform', 'scaleY(-1)')
            .attr('fill', 'rgba(196, 196, 196, 0.37)')
            .attr('x', 50-(rectWidth/2))
            .attr('width', rectWidth)
            .attr('height', 0)
            .attr('y', -rectHeight);

        athleteProgress.transition()
            .duration(2000)
            .attr('height', function(){
                return athleteRatio * rectHeight;
            });


        //Country Bar
        let countryBar = barsWrapper.append('svg')
            .attr('class', 'country-bar')
            .attr('height', 200)
            .attr('width', histogramsWrapperWidth/3);
        let currentCountry = jo[currentYear.id].participants.countryNumber;
        let countryRatio = currentCountry/maxCountry;

        countryBar.append('rect')
            .attr('fill', 'transparent')
            .style('stroke', 'rgba(196, 196, 196, 0.37)')
            .attr('width', rectWidth)
            .attr('height', function(){
                return rectHeight;
            })
            .attr('x', 50-(rectWidth/2));

        let countryProgress = countryBar.append('rect')
            .style('transform', 'scaleY(-1)')
            .attr('fill', 'rgba(196, 196, 196, 0.37)')
            .attr('width', rectWidth)
            .attr('height', 0)
            .attr('x', 50-(rectWidth/2))
            .attr('y', -rectHeight);

        countryProgress.transition()
            .duration(2000)
            .attr('height', function(){
                return countryRatio * rectHeight;
            });

        //Disciplines Bar
        let disciplineBar = barsWrapper.append('svg')
            .attr('class', 'discipline-bar')
            .attr('height', 200)
            .attr('width', histogramsWrapperWidth/3);
        let currentDiscipline = jo[currentYear.id].sports.sportsNumber;
        let disciplineRatio = currentDiscipline/maxDiscipline;

        disciplineBar.append('rect')
            .attr('fill', 'transparent')
            .style('stroke', 'rgba(196, 196, 196, 0.37)')
            .attr('width', rectWidth)
            .attr('height', function(){
                return rectHeight;
            })
            .attr('x', 50-(rectWidth/2));

        let disciplineProgress = disciplineBar.append('rect')
            .style('transform', 'scaleY(-1)')
            .attr('fill', 'rgba(196, 196, 196, 0.37)')
            .attr('width', rectWidth)
            .attr('height', 0)
            .attr('x', 50-(rectWidth/2))
            .attr('y', -rectHeight);

        disciplineProgress.transition()
            .duration(2000)
            .attr('height', function(){
                return disciplineRatio * rectHeight;
            });



    },[currentYear.id]);




    return (
        <div className="histograms-wrapper">
            <div className="titles">
                <div className="title">
                    Nombre<br/>d'athlètes
                </div>
                <div className="title">
                    Pays<br/>participants
                </div>
                <div className="title">
                    Nombre de<br/>disciplines
                </div>
            </div>

        </div>

    );
}







