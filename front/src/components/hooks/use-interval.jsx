import React, { useEffect, useRef } from 'react';

export default function useInterval(callback, delay) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            savedCallback.current();
        }
        if (delay !== null) {
            let id = setInterval(tick, delay);
            return () => clearInterval(id);
        }
    }, [delay]);
}
// setInterval ne marchant pas comme on peut s'y attendre
//  je me suis permis de reprendre ce code : https://overreacted.io/fr/making-setinterval-declarative-with-react-hooks/