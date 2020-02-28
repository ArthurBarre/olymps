import React, { useContext, useEffect, useState } from "react";
import YearContext from "../GameHistory/year-context";
import jo from "../../data";
import './GameHistograms.scss';
import * as d3 from "d3";
import { maxAthlete } from "../constants";
import { maxDiscipline } from "../constants";
import { maxCountry } from "../constants";

let barsWrapper;
export default function GameHistograms() {
    const { currentYear, setCurrentYear } = useContext(YearContext);
    const [stockedData, setStockedData] = useState({ country: 0, athlete: 0, discipline: 0 });


    useEffect(() => {

        //remove svg if is defined
        (barsWrapper !== undefined) && d3.select(".bars-wrapper").remove();

        let rectHeight = 200;
        let svgHeight = 230;
        let decalageY = (svgHeight - rectHeight) / 2;
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
            .attr('height', svgHeight)
            .attr('width', histogramsWrapperWidth / 3);
        let currentAthlete = jo[currentYear.id].participants.athletesNumber;
        let athleteRatio = currentAthlete / maxAthlete;
        let ancientAthleteRatio = stockedData.athlete / maxAthlete;

        athleteBar.append('rect')
            .attr('fill', 'transparent')
            .style('stroke', 'rgba(196, 196, 196, 0.37)')
            .attr('x', 50 - (rectWidth / 2))
            .attr('width', rectWidth)
            .attr('height', function () {
                return rectHeight;
            })
            .attr('y', decalageY);

        let athleteProgress = athleteBar.append('rect')
            .style('transform', 'scaleY(-1)')
            .attr('fill', 'rgba(196, 196, 196, 0.37)')
            .attr('x', 50 - (rectWidth / 2))
            .attr('width', rectWidth)
            .attr('height', function () {
                return ancientAthleteRatio * rectHeight;
            })
            .attr('y', -decalageY - rectHeight);

        athleteProgress.transition()
            .duration(1500)
            .attr('height', function () {
                return athleteRatio * rectHeight;
            });

        let athleteNumber = athleteBar.append('text')
            .text(currentAthlete)
            .attr('dominant-baseline', 'middle')
            .attr('x', 60 + (rectWidth / 2))
            .attr('width', rectWidth)
            .attr('height', 0)
            .attr('fill', 'white')
            .attr('y', function () {
                return rectHeight - (ancientAthleteRatio * rectHeight) + decalageY;
            });

        athleteNumber.transition()
            .duration(1500)
            .attr('y', function () {
                return rectHeight - (athleteRatio * rectHeight) + decalageY;
            });



        //Country Bar
        let countryBar = barsWrapper.append('svg')
            .attr('class', 'country-bar')
            .attr('height', svgHeight)
            .attr('width', histogramsWrapperWidth / 3);
        let currentCountry = jo[currentYear.id].participants.countryNumber;
        let countryRatio = currentCountry / maxCountry;
        let ancientCountryRatio = stockedData.country / maxCountry;

        countryBar.append('rect')
            .attr('fill', 'transparent')
            .style('stroke', 'rgba(196, 196, 196, 0.37)')
            .attr('width', rectWidth)
            .attr('height', function () {
                return rectHeight;
            })
            .attr('x', 50 - (rectWidth / 2))
            .attr('y', decalageY);

        let countryProgress = countryBar.append('rect')
            .style('transform', 'scaleY(-1)')
            .attr('fill', 'rgba(196, 196, 196, 0.37)')
            .attr('width', rectWidth)
            .attr('height', function () {
                return ancientCountryRatio * rectHeight;
            })
            .attr('x', 50 - (rectWidth / 2))
            .attr('y', (-decalageY - rectHeight));

        countryProgress.transition()
            .duration(1500)
            .attr('height', function () {
                return countryRatio * rectHeight;
            });

        let countryNumber = countryBar.append('text')
            .text(currentCountry)
            .attr('dominant-baseline', 'middle')
            .attr('x', 60 + (rectWidth / 2))
            .attr('width', rectWidth)
            .attr('height', 0)
            .attr('fill', 'white')
            .attr('y', function () {
                return rectHeight - (ancientCountryRatio * rectHeight) + decalageY;
            });

        countryNumber.transition()
            .duration(1500)
            .attr('y', function () {
                return rectHeight - (countryRatio * rectHeight) + decalageY;
            });

        //Disciplines Bar
        let disciplineBar = barsWrapper.append('svg')
            .attr('class', 'discipline-bar')
            .attr('height', svgHeight)
            .attr('width', histogramsWrapperWidth / 3);
        let currentDiscipline = jo[currentYear.id].sports.sportsNumber;
        let disciplineRatio = currentDiscipline / maxDiscipline;
        let ancientDisciplineRatio = stockedData.discipline / maxDiscipline;

        disciplineBar.append('rect')
            .attr('fill', 'transparent')
            .style('stroke', 'rgba(196, 196, 196, 0.37)')
            .attr('width', rectWidth)
            .attr('height', function () {
                return rectHeight;
            })
            .attr('x', 50 - (rectWidth / 2))
            .attr('y', decalageY);

        let disciplineProgress = disciplineBar.append('rect')
            .style('transform', 'scaleY(-1)')
            .attr('fill', 'rgba(196, 196, 196, 0.37)')
            .attr('width', rectWidth)
            .attr('height', function () {
                return ancientDisciplineRatio * rectHeight;
            })
            .attr('x', 50 - (rectWidth / 2))
            .attr('y', (-decalageY - rectHeight));

        disciplineProgress.transition()
            .duration(1500)
            .attr('height', function () {
                return disciplineRatio * rectHeight;
            });

        let disciplineNumber = disciplineBar.append('text')
            .text(currentDiscipline)
            .attr('dominant-baseline', 'middle')
            .attr('x', 60 + (rectWidth / 2))
            .attr('width', rectWidth)
            .attr('height', 0)
            .attr('fill', 'white')
            .attr('y', function () {
                return rectHeight - (ancientDisciplineRatio * rectHeight) + decalageY;
            });

        disciplineNumber.transition()
            .duration(1500)
            .attr('y', function () {
                return rectHeight - (disciplineRatio * rectHeight) + decalageY;
            });

        setStockedData({ country: currentCountry, athlete: currentAthlete, discipline: currentDiscipline });

    }, [currentYear.id]);




    return (
        <div className="histograms-wrapper">
            <div className="titles">
                <div className="title">
                    Athletes<br />number
                </div>
                <div className="title">
                    Participating<br />countries
                </div>
                <div className="title">
                    Disciplines<br />number
                </div>
            </div>
        </div>

    );
}







