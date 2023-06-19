
import React, { useEffect, useState } from 'react';

import AuthorsTable from '../components/AuthorsTable';
import { Link } from 'react-router-dom';



export default () => {




    return (
        <div>
            <p><Link className='btn btn-outline-primary m-3' to={'/author/new'} >Add an Author</Link></p>
            <p>We have quotes by:</p>
            <AuthorsTable /> 
        </div>
    )
}



