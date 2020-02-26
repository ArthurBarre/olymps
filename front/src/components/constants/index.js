import jo from "../../data";
import React from "react";

export const api_url = 'http://35.180.64.236:8000';

const allSports = [];
for (let year = 0; year < jo.length; year++) {
    for (let game = 0; game < jo[year].sports.sportsList.length; game++) {
        if(!allSports.includes(jo[year].sports.sportsList[game])){
            allSports.push(jo[year].sports.sportsList[game]);
        }
    }
}
export default allSports;

