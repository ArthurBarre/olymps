import React from "react";

// set the defaults
const BoxContext = React.createContext({
    positionInBox: {
        isEnter: false,
        isTop: false,
        isMiddle: false,
        isBottom: false,
    },
    setPositionInBox: () => {}
});

export default BoxContext;