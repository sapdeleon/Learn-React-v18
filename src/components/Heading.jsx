import React from "react";

function Heading() {
    const currentTime = new Date(2023, 1, 1, 19).getHours();
    let greeting = "Good Day!";

    const customStyle = {
        color: "yellow"
    }

    if (currentTime < 12) {
        greeting = "Good Morning";
        customStyle.color = "red";
    } else if (currentTime < 18) {
        greeting = "Good Afternoon";
        customStyle.color = "green";
    } else {
        greeting = "Good Evening!";
        customStyle.color = "blue";
    }

    return <h1 style={customStyle}>{greeting}</h1>
};

export default Heading;