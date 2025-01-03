import React from "react";
import {add, multiply, subtract, divide, triplePi} from "../math.jsx";

function List() {
    return (
        <ul>
            <li>Add - {add(3, 4)}</li>
            <li>Multiply - {multiply(4, 7)}</li>
            <li>Subtract - {subtract(89, 25)}</li>
            <li>Divice - {divide(45, 9)}</li>
            <li>Triple PI - {triplePi()}</li>
        </ul>
    );
};

export default List;