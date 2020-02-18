import {useEffect, useRef, useState} from "react";

export default function useMouseOfRef(initialValue = {x:0, y:0, inside: false}) {
    const [refPosition, setRefPosition] = useState(initialValue);

    const ref = useRef(null);

    const handleMouseMove = (event) => setRefPosition({
        x: parseInt(event.clientX - ref.current.getBoundingClientRect().left),
        y: parseInt(event.clientY - ref.current.getBoundingClientRect().top),
        inside: true
    });
    const handleMouseOut = () => setRefPosition({inside: false});

    useEffect(
        () => {
            const node = ref.current;
            if (node) {
                node.addEventListener('mousemove', handleMouseMove);
                node.addEventListener('mouseout', handleMouseOut);

                return () => {
                    node.removeEventListener('mouseout', handleMouseMove);
                    node.removeEventListener('mouseout', handleMouseOut);
                };
            }
        },
        [ref.current]
    );

    return [ref, refPosition];
}