import React from "react";
import jo from "../../events"

export const api_url = 'http://35.180.64.236:8000';

export const allSports = [];
for (let year = 0; year < jo.length; year++) {
    for (let game = 0; game < jo[year].sportList.length; game++) {
        if (!allSports.includes(jo[year].sportList[game].title)) {
            allSports.push(jo[year].sportList[game].title);
        }
    }
}

const calculateAthlete = () => {
    let max = 0;
    for (let year = 0; year < jo.length; year++) {
        if (jo[year].athletesnumber > max) {
            max = jo[year].athletesnumber;
        }
    }
    return max;
};

export const maxAthlete = calculateAthlete();

const calculateCountry = () => {
        let max = 0;
        for (let year = 0; year < jo.length; year++) {
            if (jo[year].countrynumber > max) {
                max = jo[year].countrynumber;
            }
        }
        return max;
};

export const maxCountry = calculateCountry();

const calculateDiscipline = () => {
    let max = 0;
    for (let year = 0; year < jo.length; year++) {
        if (jo[year].sportNumber > max) {
            max = parseInt(jo[year].sportNumber);
        }
    }
    return max;
};

export const maxDiscipline = calculateDiscipline();

