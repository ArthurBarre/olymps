import React, {useContext, useEffect, useRef} from "react";
import useInterval from "../hooks/use-interval"
import useMouseOfRef from "../Mouse/use-mouse-ref";
import BoxContext from "./box-context";
import YearContext from "../GameHistory/year-context";
import { TweenLite, TweenMax, Circ} from "gsap/all";
import jo from '../../data.json';

export default function Box() {
    const [refContainer, position] = useMouseOfRef();
    const {positionInBox, setPositionInBox} = useContext(BoxContext);
    const {currentYear, setCurrentYear} = useContext(YearContext);
    let numDates = jo.length - 1;
    let tweenYear = useRef([React.createRef()]);

    let midPosition = 50;
    //Modifier cette valeur pour augmenter ou diminuer espacement des dates
    let intervalPosition = 40;
    let topPosition = midPosition - intervalPosition;
    let bottomPosition = midPosition + intervalPosition;
    let subBottomPosition = midPosition + (intervalPosition*2);
    let overTopPosition = midPosition - intervalPosition*2;

    function yearProgress() {
        (currentYear.id < numDates) &&
        setCurrentYear({id: currentYear.id + 1});
        tweenScrollProgress();
    }

    // Animations au passage de date suivante
    function tweenScrollProgress() {
        //Handle des scrolls animations sauf pour la dernière date
        if(currentYear.id !== numDates) {
            //Scroll current year - 1
            currentYear.id !== 0 && TweenLite.fromTo(tweenYear.current[currentYear.id-1], 1.5, {top:`${topPosition}%`}, {top: `${overTopPosition}%`, ease: Circ.easeOut});
            //Scroll current
            TweenLite.fromTo(tweenYear.current[currentYear.id], 1.5, {top:`${midPosition}%`}, {top: `${topPosition}%`, ease: Circ.easeOut});
            //Scroll current + 1
            TweenLite.fromTo(tweenYear.current[currentYear.id+1], 1.5, {top:`${bottomPosition}%`}, {top: `${midPosition}%`, ease: Circ.easeOut});
            //Scroll current + 2
            currentYear.id !== (numDates - 1) && TweenLite.fromTo(tweenYear.current[currentYear.id+2], 1.5, {top:`${subBottomPosition}%`}, {top: `${bottomPosition}%`, ease: Circ.easeOut});
        }
    }


    function yearBack() {
        (currentYear.id > 0) &&
        setCurrentYear({id: currentYear.id - 1});
        tweenScrollBack();
    }

    // Animations au passage de date précédente
    function tweenScrollBack() {
        //Handle des scrolls animations sauf pour la première date
        if(currentYear.id !== 0) {
            //Scroll current year - 2
            currentYear.id !== 1 && TweenLite.fromTo(tweenYear.current[currentYear.id-2], 1.5, {top:`${overTopPosition}%`}, {top: `${topPosition}%`, ease: Circ.easeOut});
            //Scroll current year - 1
            TweenLite.fromTo(tweenYear.current[currentYear.id-1], 1.5, {top:`${topPosition}%`}, {top: `${midPosition}%`, ease: Circ.easeOut});
            //Scroll current year
            TweenLite.fromTo(tweenYear.current[currentYear.id], 1.5, {top:`${midPosition}%`}, {top: `${bottomPosition}%`, ease: Circ.easeOut});
            //Scroll current year + 1
            currentYear.id !== numDates && TweenLite.fromTo(tweenYear.current[currentYear.id+1], 1.5, {top:`${bottomPosition}%`}, {top: `${subBottomPosition}%`, ease: Circ.easeOut});
        }
    }

    // Set position of bottom et mid year on first render
    useEffect(() => {
        tweenYear.current[currentYear.id].style.top =  `${midPosition}%`;
        tweenYear.current[currentYear.id+1].style.top =  `${bottomPosition}%`;

    }, []);


    // Update prev/current/next class on current year ID change
    useEffect(() => {

        // reinitialize
        jo.forEach(year => tweenYear.current[jo.indexOf(year)].classList.remove('prev-year'));
        jo.forEach(year => tweenYear.current[jo.indexOf(year)].classList.remove('current-year'));
        jo.forEach(year => tweenYear.current[jo.indexOf(year)].classList.remove('next-year'));

        // Add prev year properties
        if(currentYear.id !== 0) {
            tweenYear.current[currentYear.id-1].classList.add('prev-year');
            currentYear.id !== 0 && TweenMax.to(".prev-year", 1, { fontSize: 80, ease: Circ.easeOut, autoRound: false});
            TweenMax.to(".prev-year", 1, { opacity: 0.3, ease: Circ.easeOut, autoRound: false});
        }

        // Add current year properties
        tweenYear.current[currentYear.id].classList.add('current-year');
        TweenMax.to(".current-year", 1, { fontSize: 100, ease: Circ.easeOut, autoRound: false});
        TweenMax.to(".current-year", 1, { opacity: 1, ease: Circ.easeOut, autoRound: false});

        // Add next year properties
        if(currentYear.id !== numDates) {
            tweenYear.current[currentYear.id+1].classList.add('next-year');
            currentYear.id !== numDates && TweenMax.to(".next-year", 1, { fontSize: 80, ease: Circ.easeOut, autoRound: false});
            TweenMax.to(".next-year", 1, { opacity: 0.3, ease: Circ.easeOut, autoRound: false});
        }

    }, [currentYear.id]);

    // Update box context
    useEffect(() => {
        const boxTopStop = (parseInt((refContainer.current.getBoundingClientRect().height) / 2))-80;
        const boxBottomStop = parseInt(refContainer.current.getBoundingClientRect().height)-boxTopStop;
        position.inside && ((position.y < boxTopStop) ? setPositionInBox({
            isTop: true,
            isEnter: true,
            isBottom: false,
            isMiddle: false
        }) : ((position.y > boxBottomStop) ? setPositionInBox({isTop: false, isEnter: true, isBottom: true, isMiddle: false}) :
            setPositionInBox({isTop: false, isEnter: true, isBottom: false, isMiddle: true})));
    }, [position.inside, position.y]);


    // Execute scroll if cursor stay in box part
    useInterval(() => {
        if(positionInBox.isEnter){
            positionInBox.isTop && yearBack();
            positionInBox.isBottom && yearProgress();
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








