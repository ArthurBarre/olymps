import {useEffect, useRef, useState} from "react";

export default function useInside() {
    const [value, setValue] = useState(false);

    const ref = useRef(null);

    const handleMouseOver = () => setValue(true);
    const handleMouseOut = () => setValue(false);

    useEffect(
        () => {
            const node = ref.current;
            if (node) {
                node.addEventListener('mouseenter', handleMouseOver);
                node.addEventListener('mouseleave', handleMouseOut);

                return () => {
                    node.removeEventListener('mouseenter', handleMouseOver);
                    node.removeEventListener('mouseleave', handleMouseOut);
                };
            }
        },
        [ref.current]
    );
    return [ref, value];
}