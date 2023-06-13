import React from 'react'
import { useParams } from "react-router";


const DisplayColors = (props) => {

    const {display, bgColor, fontColor} = useParams();

    const style = {
        backgroundColor: bgColor,
        color: fontColor
    }

    return (
        <>
            {
            isNaN(display) ?
            <h1 style={style} >The word is: {display} </h1>:
            <h1 style={style} >The number is: {display} </h1>
            }
        </>
    );
}

export default DisplayColors