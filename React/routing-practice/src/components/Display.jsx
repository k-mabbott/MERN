import React from 'react'
import { useParams } from "react-router";





const Display = (props) => {

    const {display} = useParams();

    return (
        <>
        {
            isNaN(display) ?
            <h1 >The word is: {display} </h1>:
            <h1 >The number is: {display} </h1>
        }
        </>
    )
}

export default Display