import React, {useContext, useEffect, useRef, useState} from "react";
import useInterval from "../hooks/use-interval"
import useMouseOfRef from "../Mouse/use-mouse-ref";
import BoxContext from "./box-context";
import { TweenLite, TweenMax, Circ} from "gsap/all";
import jo from '../../data.json';

export default function Box(props) {
    const [refContainer, position] = useMouseOfRef();
    const {positionInBox, setPositionInBox} = useContext(BoxContext);
    const [currentYearId, setCurrentYearId] = useState(0);
    let numDates = jo.length - 1;
    let tweenYear = useRef([React.createRef()]);

    function yearProgress() {
        (currentYearId < numDates) &&
        setCurrentYearId(currentYearId + 1);
        tweenScrollProgress();
    }

    // Animations au passage de date suivante
    function tweenScrollProgress() {
        //Handle des scrolls animations sauf pour la dernière date
        if(currentYearId !== numDates) {
            //Scroll current year - 1
            currentYearId !== 0 && TweenLite.fromTo(tweenYear.current[currentYearId-1], 1.5, {top:'5%'}, {top: '-40%', ease: Circ.easeOut});
            //Scroll current
            TweenLite.fromTo(tweenYear.current[currentYearId], 1.5, {top:'50%'}, {top: '5%', ease: Circ.easeOut});
            //Scroll current + 1
            TweenLite.fromTo(tweenYear.current[currentYearId+1], 1.5, {top:'95%'}, {top: '50%', ease: Circ.easeOut});
            //Scroll current + 2
            currentYearId !== (numDates - 1) && TweenLite.fromTo(tweenYear.current[currentYearId+2], 1.5, {top:'140%'}, {top: '95%', ease: Circ.easeOut});
        }

    }


    function yearBack() {
        (currentYearId > 0) &&
        setCurrentYearId(currentYearId - 1);
        tweenScrollBack();
    }

    // Animations au passage de date précédente
    function tweenScrollBack() {
        //Handle des scrolls animations sauf pour la première date
        if(currentYearId !== 0) {
            //Scroll current year - 2
            currentYearId !== 1 && TweenLite.fromTo(tweenYear.current[currentYearId-2], 1.5, {top:'-40%'}, {top: '5%', ease: Circ.easeOut});
            //Scroll current year - 1
            TweenLite.fromTo(tweenYear.current[currentYearId-1], 1.5, {top:'5%'}, {top: '50%', ease: Circ.easeOut});
            //Scroll current year
            TweenLite.fromTo(tweenYear.current[currentYearId], 1.5, {top:'50%'}, {top: '95%', ease: Circ.easeOut});
            //Scroll current year + 1
            currentYearId !== numDates && TweenLite.fromTo(tweenYear.current[currentYearId+1], 1.5, {top:'95%'}, {top: '140%', ease: Circ.easeOut});
        }
    }

    function handleYearChange() {
        props.onYearChange(currentYearId);
    }

    // Update prev/current/next class on current year ID change
    useEffect(() => {

        handleYearChange();

        // reinitialize
        jo.forEach(year => tweenYear.current[jo.indexOf(year)].classList.remove('prev-year'));
        jo.forEach(year => tweenYear.current[jo.indexOf(year)].classList.remove('current-year'));
        jo.forEach(year => tweenYear.current[jo.indexOf(year)].classList.remove('next-year'));

        // Add prev year properties
        if(currentYearId !== 0) {
            tweenYear.current[currentYearId-1].classList.add('prev-year');
            currentYearId !== 0 && TweenMax.to(".prev-year", 1, { fontSize: 40, ease: Circ.easeOut, autoRound: false});
            TweenMax.to(".prev-year", 1, { opacity: 0.4, ease: Circ.easeOut, autoRound: false});
        }

        // Add current year properties
        tweenYear.current[currentYearId].classList.add('current-year');
        TweenMax.to(".current-year", 1, { fontSize: 70, ease: Circ.easeOut, autoRound: false});
        TweenMax.to(".current-year", 1, { opacity: 1, ease: Circ.easeOut, autoRound: false});

        // Add next year properties
        if(currentYearId !== numDates) {
            tweenYear.current[currentYearId+1].classList.add('next-year');
            currentYearId !== numDates && TweenMax.to(".next-year", 1, { fontSize: 40, ease: Circ.easeOut, autoRound: false});
            TweenMax.to(".next-year", 1, { opacity: 0.4, ease: Circ.easeOut, autoRound: false});
        }

    }, [currentYearId]);

    // Update box context
    useEffect(() => {
        const boxMiddleY = parseInt((refContainer.current.getBoundingClientRect().height) / 2);
        position.inside && ((position.y < boxMiddleY) ? setPositionInBox({
            isTop: true,
            isEnter: true,
            isBottom: false,
            yearId: true,
        }) : setPositionInBox({isTop: false, isEnter: true, isBottom: true}));
    }, [position.inside, position.y]);


    // Execute scroll if cursor stay in box part
    useInterval(() => {
        if(positionInBox.isEnter){
            positionInBox.isTop ? yearBack() : yearProgress();
        }
    }, 1500);



    return (
        <div onMouseEnter={() => {setPositionInBox({isEnter: true})}} onMouseLeave={() => {setPositionInBox({isEnter: false})}} ref={refContainer} className="box">
            <div className="container-epreuve">
                <ul>
                    {jo.map((jo, index) =>
                        <li key={index} ref={element => {
                            tweenYear.current[index] = element
                        }} className="date-wrapper">
                            {
                                jo.year
                            }
                        </li>
                    )
                    }
                </ul>
            </div>
        </div>
    );
}








