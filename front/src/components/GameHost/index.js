import React, {useContext} from "react";
import YearContext from "../GameHistory/year-context";
import jo from "../../events";
import './GameHost.scss'


export default function GameHost() {
    const {currentYear, setCurrentYear} = useContext(YearContext);


    return (
        <div className="host-wrapper">
            <h2 className="country">{jo[currentYear.id].country},</h2>
            <h2 className="city">{jo[currentYear.id].city}</h2>
        </div>

    );
}







