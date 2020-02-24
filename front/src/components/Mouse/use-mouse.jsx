import React, {useState} from "react";

export default function useMouse(initialValue = {x:0, y:0}) {
    const [position, setPosition] = useState(initialValue);
    const handleMouseMove = (event) => {
        setPosition({
            x: event.clientX,
            y: event.clientY
        });
    }

    return [position, handleMouseMove];
}

// essayer de mettre une ref en 3ème paramètre
// comme ça pas le client mais renvoie une position en fonction du container