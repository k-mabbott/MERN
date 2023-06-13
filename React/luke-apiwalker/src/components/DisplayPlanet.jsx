import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';





const DisplayPlanet = () => {

    const [showPlanet, setShowPlanet] = useState({});

    const {category} = useParams();
    const {id} = useParams();

    useEffect(() => {
        axios.get('https://swapi.dev/api/planets/'+id)
        .then(response => {
            console.log(response.data)
            setShowPlanet(response.data)
        })
        .catch(err => console.log(err))

    }, [id])

    return (
        <>
            <h1>{showPlanet.name}</h1>
            <p><span className='bold' >Climate: </span>{showPlanet.climate}</p>
            <p><span className='bold' >Terrain: </span>{showPlanet.terrain}</p>
            <p><span className='bold' >Surface Water: </span>{showPlanet.surface_water ? 'True' : 'False'}</p>
            <p><span className='bold' >Population: </span>{showPlanet.population}</p>
        </>
    )
}

export default DisplayPlanet