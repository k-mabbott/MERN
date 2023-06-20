
import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { Link } from 'react-router-dom';
import TeamList from '../components/TeamList'
import Nav from '../components/Nav';


export default () => {




    return (
        <div className='border p-4'>
            <Nav />
            <TeamList />
        </div>
    )
}



