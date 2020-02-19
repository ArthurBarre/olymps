import React, {useEffect, useState} from "react";
import jo from '../../data.json';
export default function GameCircle(year) {

    const [displayedYear, setDisplayYear] = useState(0);


    useEffect(() => {
        console.log(year);
        console.log(displayedYear);
    }, [year]);



    return (
        <div style={{fontSize : '40px'} }>
            {
               /*console.log(jo[displayedYear])*/
            }
        </div>

    );
}

{/*<ul>
            {jo.map((jo, index) =>
                <li key={index}>
                    {
                        jo.year
                    }
                </li>
            )
            }
        </ul>*/}






