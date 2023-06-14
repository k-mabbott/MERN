import React, { useState } from 'react'
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';




const Display = () => {

    const navigate = useNavigate();


    const [showPerson, setShowPerson] = useState({});
    const [showPersonHome, setShowPersonHome] = useState({});
    const [homeLink, setHomeLink] = useState('');
    const [shipsLink, setShipsLink] = useState('');

    const {id} = useParams();



    // console.log('hiiiiii',showPerson)

    useEffect(() => {
        axios.get('https://swapi.dev/api/people/'+id)
        .then(response => {
            // console.log(response.data)
            setShowPerson(response.data)
        })

        .catch(err => navigate('/error'))

    }, [id])


    useEffect(() => {
        if (showPerson.homeworld){
            const home = showPerson.homeworld.split('/')
            setHomeLink('/'+home[4]+'/'+home[5])
            // console.log('aaa', homeLink)
            const ships = showPerson.starships 
            const shipNums = []
            for (let i = 0; i < ships.length ; i++){
                let tempNum = ships[i].split('/api')
                let call = tempNum[1]
                // console.log(call)
                shipNums.push(call)
            }
            setShipsLink(shipNums)
        }

        axios.get(showPerson.homeworld)
        .then(response => {
            // console.log(response.data)
            setShowPersonHome(response.data)
        })
        .catch(err => console.log(err))
        

    }, [showPerson])





    return (
        <>
            <h1>{showPerson.name}</h1>
            <p><span className='bold' >Height: </span>{showPerson.height} cm</p>
            <p><span className='bold' >Mass: </span>{showPerson.mass} kg</p>
            <p><span className='bold' >Hair Color: </span>{showPerson.hair_color}</p>
            <p><span className='bold' >Skin Color: </span>{showPerson.skin_color}</p>
            <p><span className='bold' >Home World: </span>{showPersonHome.name}</p>
            <Link className='btn' to={homeLink} >To {showPersonHome.name}</Link>
            
            <div className='ships' >
            {
                shipsLink? 
                shipsLink.map((num, i) => <Link className='btn' to={num}  key={i} >Starship {i+1}</Link> ):
                <></>
            }
            </div>
        </>
    )
}

export default Display