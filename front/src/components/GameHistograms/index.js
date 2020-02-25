import React, {useContext, useEffect} from "react";
import YearContext from "../GameHistory/year-context";
import jo from "../../data";
import './GameHistograms.scss';
import * as d3 from "d3";
import allSports from "../constants";

let barsWrapper;
export default function GameHistograms() {
    const {currentYear, setCurrentYear} = useContext(YearContext);

    useEffect(() => {

        //remove svg if is defined
        (barsWrapper !== undefined) && d3.select(".bars-wrapper").remove();

        barsWrapper = d3.select('.histograms-wrapper')
            .append('div')
            .attr('class', 'bars-wrapper');

        let rectHeight = 200;


        //Athlete Bar
        let athleteBar = barsWrapper.append('svg')
            .attr('class', 'athlete-bar')
            .attr('height', 500)
            .attr('width', 100);
        let maxAthlete = 4400;
        let currentAthlete = jo[currentYear.id].participants.athletesNumber;
        let athleteRatio = currentAthlete/maxAthlete;

        athleteBar.append('rect')
            .attr('fill', 'transparent')
            .style('stroke', 'rgba(196, 196, 196, 0.37)')
            .attr('width', 13)
            .attr('height', function(){
                return rectHeight;
            })
            .attr('x', 0);

        let athleteProgress = athleteBar.append('rect')
            .style('transform', 'scaleY(-1)')
            .attr('fill', 'rgba(196, 196, 196, 0.37)')
            .attr('width', 13)
            .attr('height', 0)
            .attr('y', -rectHeight);

        athleteProgress.transition()
            .duration(2000)
            .attr('height', function(){
                return athleteRatio * rectHeight;
            });
            /*.attr('height', 180);*/

        athleteBar.append('text')
        .text('Nombre d\'\athlètes')
        .attr('x', 0)
            .attr('y', 0)

            .attr("dy", "2em")
            .attr('width', 13)
        .attr('fill', 'white');

        //Country Bar
        let countryBar = barsWrapper.append('svg')
            .attr('class', 'country-bar')
            .attr('height', 500)
            .attr('width', 100);
        let maxCountry = 164;
        let currentCountry = jo[currentYear.id].participants.countryNumber;
        let countryRatio = currentCountry/maxCountry;

        countryBar.append('rect')
            .attr('fill', 'transparent')
            .style('stroke', 'rgba(196, 196, 196, 0.37)')
            .attr('width', 13)
            .attr('height', function(){
                return rectHeight;
            })
            .attr('x', 0);

        let countryProgress = countryBar.append('rect')
            .style('transform', 'scaleY(-1)')
            .attr('fill', 'rgba(196, 196, 196, 0.37)')
            .attr('width', 13)
            .attr('height', 0)
            .attr('x', 0)
            .attr('y', -rectHeight);

        countryProgress.transition()
            .duration(2000)
            .attr('height', function(){
                return countryRatio * rectHeight;
            });

        //Disciplines Bar
        let disciplineBar = barsWrapper.append('svg')
            .attr('class', 'discipline-bar')
            .attr('height', 500)
            .attr('width', 100);
        let maxDiscipline = 22;
        let currentDiscipline = jo[currentYear.id].sports.sportsNumber;
        let disciplineRatio = currentDiscipline/maxDiscipline;

        disciplineBar.append('rect')
            .attr('fill', 'transparent')
            .style('stroke', 'rgba(196, 196, 196, 0.37)')
            .attr('width', 13)
            .attr('height', function(){
                return rectHeight;
            })
            .attr('x', 0);

        let disciplineProgress = disciplineBar.append('rect')
            .style('transform', 'scaleY(-1)')
            .attr('fill', 'rgba(196, 196, 196, 0.37)')
            .attr('width', 13)
            .attr('height', 0)
            .attr('x', 0)
            .attr('y', -rectHeight);

        disciplineProgress.transition()
            .duration(2000)
            .attr('height', function(){
                return disciplineRatio * rectHeight;
            });



    },[currentYear.id]);




    return (
        <div className="histograms-wrapper">
        </div>

    );
}







