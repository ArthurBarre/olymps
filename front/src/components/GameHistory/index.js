import React, { useEffect, useRef, useState } from 'react';
import './GameHistory.scss';
import useInside from "../hooks/use-inside";
import useMouse from "../Mouse/use-mouse";
import Box from "../Box";
import { TweenMax, Power4 } from 'gsap';
import { TweenLite } from "gsap/all";
import TopArrow from '../../assets/img/arrow-top.png';
import BottomArrow from '../../assets/img/arrow-bottom.png'
import BoxContext from "../Box/box-context";
import '../Box/Box.scss';
import GameCircle from "../GameCircle";
import YearContext from "./year-context";
import Paris2024 from '../Paris2024';
import GameHost from "../GameHost";
import GameHistograms from "../GameHistograms";
import Video from "../Videos/Video";


export default function GameHistory() {
    const [insideRef, isInside] = useInside();
    const [position, setMousePosition] = useMouse();
    const [positionInBox, setPositionInBox] = useState({ isTop: false });
    const [currentYear, setCurrentYear] = useState({ id: 0 });
    const valueYear = { currentYear, setCurrentYear };
    const valueBox = { positionInBox, setPositionInBox };
    let cursorCircle = useRef(null);


    // GSAP Animations
    useEffect(() => {
        let t = TweenLite.to(cursorCircle, 0.2, {
            css: {
                left: position.x,
                top: position.y
            }

        });
        if (positionInBox.isEnter) {
            positionInBox.isTop ? cursorCircle.style.backgroundImage = `url(${TopArrow})` :
                (positionInBox.isBottom ? cursorCircle.style.backgroundImage = `url(${BottomArrow})` :
                    cursorCircle.style.backgroundImage = 'none');
            cursorCircle.style.backgroundColor = 'rgba(196, 196, 196, 0.32)';
            cursorCircle.style.border = '2px solid #9C9C9C';
            /*t.timeScale(0.2);*/

        } else {
            cursorCircle.style.backgroundImage = 'none';
            cursorCircle.style.backgroundColor = 'white';
            cursorCircle.style.border = 'none';
            /*t.timeScale(1);*/
        }



    }, [position, positionInBox.isEnter]);

    useEffect(() => {
        {
            positionInBox.isEnter ? scaleUp() : appear();
        }
    }, [positionInBox.isEnter]);

    function scaleUp() {
        TweenMax.to(cursorCircle, 0.5, {
            scale: 1.5,
            ease: Power4.ease
        });
    }

    function appear() {
        TweenMax.to(cursorCircle, 0.5, {
            scale: 0.25,
            ease: Power4.ease,
            opacity: 1
        });
    }

    function disapear() {
        TweenMax.to(cursorCircle, 0.5, {
            scale: 0,
            ease: Power4.ease,
            opacity: 0
        });
    }

    return (
        <YearContext.Provider value={valueYear}>
            <div className="videoheader">
                <Video />
            </div>
            <BoxContext.Provider value={valueBox}>
                <div className="History">
                    <div onMouseEnter={appear} onMouseLeave={disapear} onMouseMove={setMousePosition} ref={insideRef}
                        className="history-container blackLayer">
                        <div className="cursor" ref={element => {
                            cursorCircle = element
                        }} style={{
                            left: position.x, top:
                                position.y
                        }} />
                        <Box />
                        <GameCircle />
                        <div className="game-data-container">
                            <GameHost />
                            <GameHistograms />
                        </div>
                        <Paris2024 />
                    </div>
                </div>
            </BoxContext.Provider>
        </YearContext.Provider>
    );
}


