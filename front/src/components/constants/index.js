import React from "react";
import jo from "../../data";

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
    for (let year = 0; year < jo.length; year++) {
        if (jo[year].participants.athletesNumber > max) {
            max = parseInt(jo[year].participants.athletesNumber);
        }
    }
    return max;
};

export const maxAthlete = calculateAthlete();

const calculateCountry = () => {
        let max = 0;
        for (let year = 0; year < jo.length; year++) {
            if (jo[year].participants.countryNumber > max) {
                max = jo[year].participants.countryNumber;
            }
        }
        return max;
};

export const maxCountry = calculateCountry();

const calculateDiscipline = () => {
    let max = 0;
    for (let year = 0; year < jo.length; year++) {
        if (jo[year].sports.sportsNumber > max) {
            max = parseInt(jo[year].sports.sportsNumber);
        }
    }
    return max;
};

export const maxDiscipline = calculateDiscipline();

