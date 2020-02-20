import React from "react";
import jo from '../../data.json';
export default function GameCircle(year) {

    const yearSports = jo.map((data, index) => {
        return (
            <li key={index}>
                {data.sports.sportsList}
            </li>
        )
    });



    return (
        <div style={{fontSize : '40px'} }>
            <ul>
                {yearSports[year.year]}
            </ul>

        </div>

    );
}






