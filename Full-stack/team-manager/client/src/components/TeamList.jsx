import React, { useState, useEffect } from 'react'
import axios from 'axios'




const TeamList = () => {

    const [playerList, setPlayerList] = useState([])

    const getAllPlayers = () => {

        axios.get('http://localhost:8000/api/players')
            .then(res => {
                setPlayerList(res.data)
            })
            .catch(err => console.log(err))
    }
    useEffect(() => { getAllPlayers() }, [])

    // -----------------------------------------------------REMOVES PLAYER
    const deleteOne = (id, name) => {
        
        axios.delete(`http://localhost:8000/api/player/${id}`)
            .then(res => deletePlayer(id))
            .catch(err => console.log(err))
    }

    const deletePlayer = (id) => {
        setPlayerList(currPlayers => currPlayers.filter((player) => player._id !== id))
    }


    return (
        <div>
            <table className='table table-bordered container' >
                <thead>
                    <tr>
                        <th>Player Name</th>
                        <th>Preferred Position</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {playerList ?
                        playerList.map((player, i) =>
                            <tr key={player._id} >
                                <td>{player.playerName}</td>
                                <td>{player.position}</td>
                                <td>
                                    <button className='btn btn-outline-danger' 
                                    onClick={() => {if(window.confirm(`Are you sure you want to delete ${player.playerName}` )){deleteOne(player._id, player.name)}}} >Delete</button>
                                </td>
                            </tr>
                        ) : <tr>No Team Available</tr>
                    }
                </tbody>
            </table>
        </div>
    )
}

export default TeamList