import React, {useEffect, useRef, useState} from 'react';
import './GameHistory.scss';
import useInside from "../hooks/use-inside";
import useMouse from "../Mouse/use-mouse";
import Box from "../Box";
import {TweenMax, Power4} from 'gsap';
import { TweenLite } from "gsap/all";
import TopArrow from '../../assets/img/arrow-top.png';
import BottomArrow from '../../assets/img/arrow-bottom.png'
import BoxContext from "../Box/box-context";
import '../Box/Box.scss';
import GameCircle from "../GameCircle";
import YearContext from "./year-context";


export default function GameHistory()
{
    const [insideRef, isInside] = useInside();
    const [position, setMousePosition] = useMouse();
    const [positionInBox, setPositionInBox] = useState({isTop: false} );
    const [currentYear, setCurrentYear] = useState({id: 0} );
    const valueYear = { currentYear, setCurrentYear };
    const valueBox = { positionInBox, setPositionInBox };
    let cursorCircle = useRef(null);

    // GSAP Animations
    useEffect(() => {
        TweenLite.to(cursorCircle, 0.6, {
            css: {
                left: position.x,
                top: position.y
            }

        } );
        {
            positionInBox.isEnter ?
                (positionInBox.isTop ? cursorCircle.style.backgroundImage = `url(${TopArrow})` :
                    cursorCircle.style.backgroundImage = `url(${BottomArrow})`) :
                cursorCircle.style.backgroundImage = 'none'
        }
    },[position, positionInBox.isEnter ]);

    useEffect(() => {
        {
            positionInBox.isEnter ? scaleUp() : appear()
        }
    },[ positionInBox.isEnter ]);

    function scaleUp() {
        TweenMax.to(cursorCircle, 0.5, {
            scale: 1.5,
            ease: Power4.ease
        });
    }

    function appear() {
        TweenMax.to(cursorCircle, 0.5, {
            scale: 1,
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
        <BoxContext.Provider value={valueBox}>
            <div className="History">
            <div onMouseEnter={appear} onMouseLeave={disapear} onMouseMove={setMousePosition} ref={insideRef} className="history-container blackLayer">
                <div className="cursor" ref={element => {cursorCircle = element}}   style={{ left: position.x, top:
                    position.y }} />
                <Box/>
                <GameCircle/>
            </div>
            </div>
        </BoxContext.Provider>
        </YearContext.Provider>
    );
}


