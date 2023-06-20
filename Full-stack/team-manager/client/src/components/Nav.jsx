import React from 'react'
import { Link } from 'react-router-dom'

const Nav = () => {


    return (
        <h3 className='text-start' >
            <Link to={'/players/list'} >List</Link> || <Link to={'/players/addplayer'} >Add Player</Link>
        </h3>
    )
}

export default Nav