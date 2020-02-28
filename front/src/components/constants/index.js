import React from "react";
import jo from "../../data";
import joe from "../../events"

export const api_url = 'http://35.180.64.236:8000';

export const allSports = [];
for (let year = 0; year < jo.length; year++) {
    for (let game = 0; game < jo[year].sports.sportsList.length; game++) {
        if(!allSports.includes(jo[year].sports.sportsList[game])){
            allSports.push(jo[year].sports.sportsList[game]);
        }
    }
}

const calculateAthlete = () => {
    let max = 0;
    for (let year = 0; year < joe.length; year++) {
        if (joe[year].athletesnumber > max) {
            max = joe[year].athletesnumber;
        }
    }
    return max;
};

export const maxAthlete = calculateAthlete();

const calculateCountry = () => {
        let max = 0;
        for (let year = 0; year < joe.length; year++) {
            if (joe[year].countrynumber > max) {
                max = joe[year].countrynumber;
            }
        }
        return max;
};

export const maxCountry = calculateCountry();

const calculateDiscipline = () => {
    let max = 0;
    for (let year = 0; year < joe.length; year++) {
        if (joe[year].sportNumber > max) {
            max = parseInt(joe[year].sportNumber);
        }
    }
    return max;
};

export const maxDiscipline = calculateDiscipline();

