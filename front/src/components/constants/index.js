import jo from "../../data";
import React, {useEffect} from "react";
import * as d3 from "d3";

export const api_url = 'http://127.0.0.1:8000';

const allSports = [];
/*let maxAthlete = 0;*/
    for (let year = 0; year < jo.length; year++) {
        for (let game = 0; game < jo[year].sports.sportsList.length; game++) {
            if(!allSports.includes(jo[year].sports.sportsList[game])){
                allSports.push(jo[year].sports.sportsList[game]);
            }
        }
        /*if(jo[year].participants.athletesNumber > maxAthlete) {
            maxAthlete = jo[year].participants.athletesNumber;
        }*/
    }

export default allSports;


