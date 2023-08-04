"use client"

import { useState } from "react";

const CarrerCard = (props) => {

    const [isHovered, setIsHovered] = useState(false);

    const {carrerName, firstTag, secondTag} = props;

    return(
        <div className={`flex flex-direction-column justify-between tags-gap carrer-square ${isHovered ? "carrer-hovered" : ""}`} onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
            <h2 className="carrer-name">{carrerName}</h2>
            <div className="flex justify-start tags-gap">
                <h3 className="tag">{firstTag}</h3>
                <h3 className="tag">{secondTag}</h3>
            </div>
        </div>
    );

}

export default CarrerCard;