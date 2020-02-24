import React from "react";

// set the defaults
const YearContext = React.createContext({
    currentYear: {
        id: 0,
    },
    setCurrentYear: () => {}
});

export default YearContext;