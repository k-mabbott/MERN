import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';





const DisplayShips = () => {

    const [showShips, setShowShips] = useState({});

    const {category} = useParams();
    const {id} = useParams();

    useEffect(() => {
        axios.get('https://swapi.dev/api/starships/'+id)
        .then(response => {
            console.log(response.data)
            setShowShips(response.data)
        })
        .catch(err => console.log(err))

    }, [id])

    return (
        <>
            <h1>{showShips.name}</h1>
            <p><span className='bold' >Model: </span>{showShips.model}</p>
            <p><span className='bold' >Starship Class: </span>{showShips.starship_class}</p>
            <p><span className='bold' >Crew: </span>{showShips.crew}</p>
            <p><span className='bold' >Passengers: </span>{showShips.passengers}</p>
        </>
    )
}

export default DisplayShips