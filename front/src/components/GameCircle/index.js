import React, {useContext, useEffect} from "react";
import jo from '../../data.json';
import * as d3 from "d3";
import YearContext from "../GameHistory/year-context";

export default function GameCircle() {
    const {currentYear, setCurrentYear} = useContext(YearContext);


    return (
        <div className="circle">
                {jo[currentYear.id].sports.sportsList}
        </div>

    );
}






