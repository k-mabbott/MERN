import React, { useState } from 'react'
import AuthorForm from '../components/AuthorForm'
import { Link } from 'react-router-dom'


const AddAuthor = () => {
    
    return (
        <>
            <Link to={'/'} className='btn btn-outline-primary m-3' >Home</Link>
            <p>Add a new Author: </p>
            {/* <AuthorForm formSubmit={formSubmit} formErrors={formErrors} /> */}
            <AuthorForm method='post' action={`/`} />
        </>
    )
}

export default AddAuthor



// const [formErrors, setFormErrors] = useState({
//     fullName: ''
// })

// const navigate = useNavigate();

// const formSubmit = (data) => {
//     console.log(data)
//     axios.post('http://localhost:8000/api/author', data)
//         .then( res => {
//             console.log(res)
//             navigate('/')
//         } )
//         .catch( err => { 
//             const errors = err.response.data.errors;
//             errors.fullName ? 
//             setFormErrors(errs => ({...errs, 'fullName': errors.fullName.message})) 
//             : setFormErrors({fullName:''}) 
//         })
// }
