import React, { useState, useEffect } from 'react'
import AuthorForm from '../components/AuthorForm'
import { Link, useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'


const EditAuthor = () => {

    const [author, setAuthor] = useState()

    const { id } = useParams();

    const getOneAuthor = () => {
        axios.get(`http://localhost:8000/api/author/${id}`)
            .then(res => {
                console.log(res.data)
                setAuthor(res.data)
            })
            .catch(err => { console.log(err) })
    }

    useEffect(() => { getOneAuthor() }, [])

    return (
        <>
            <Link to={'/'} className='btn btn-outline-primary m-3' >Home</Link>
            <p>Edit this Author: </p>
            {/* { author && <AuthorForm formSubmit={formSubmit} method='patch' action={`/${id}`} formErrors={formErrors} author={author} />} */}
            {author && <AuthorForm method='put' action={`/${id}`} author={author} />}
        </>
    )
}

export default EditAuthor




// IF i was to pass down a submit function

// const navigate = useNavigate();

// const formSubmit = (data) => {
//     console.log(data)
//     axios.patch(`http://localhost:8000/api/author/${id}`, data)
//     .then( res => {
//         console.log(res)
//         navigate('/')
//     } )
//     .catch( err => {
//         const errors = err.response.data.errors;
//         errors.fullName ?
//         setFormErrors(errs => ({...errs, 'fullName': errors.fullName.message}))
//         : setFormErrors({fullName:''})
//     })
// }