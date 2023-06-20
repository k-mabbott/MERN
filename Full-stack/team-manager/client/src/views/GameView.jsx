import React, { useState,useEffect } from 'react'
import axios from 'axios'
import { Link } from 'react-router-dom'


const GameView = () => {
    const [playerList, setPlayerList] = useState([])

    const getAllPlayers = () => {

        axios.get('http://localhost:8000/api/players')
            .then(res => {
                setPlayerList(res.data)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => { getAllPlayers() }, [])



    return (
        <div>
            <h1>Player Status - Game 1</h1>
            <p>
                <Link></Link>
                <Link></Link>
                <Link></Link>
            </p>

            <table className='table table-bordered container' >
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {playerList ?
                        playerList.map((player, i) =>
                            <tr key={player._id} >
                                <td>{player.playerName}</td>
                                <td>
                                    <button className='btn btn-outline-secondary mx-1' >Playing</button>
                                    <button className='btn btn-outline-secondary mx-1' >Not Playing</button>
                                    <button className='btn btn-outline-secondary mx-1' >Undecided</button>
                                </td>
                            </tr>
                        ) : <tr>No Team Available</tr>
                    }
                </tbody>
            </table>

        </div>
    )
}

export default GameView