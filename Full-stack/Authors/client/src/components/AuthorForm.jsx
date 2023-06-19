import React, {useState, useEffect} from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const AuthorForm = (props) => {

    const initialValues = props.author ?? {fullName: ''}

    const [formInfo, setFormInfo] = useState({...initialValues})

    
    const updateForm = e => {
        const {name,value} = e.target
        setFormInfo(currentForm => ({...currentForm, [name]:value}))
    }

    const [formErrors, setFormErrors] = useState({
        fullName: ''
    })

    const navigate = useNavigate();

    const formSubmit = (e) => {
        e.preventDefault();
        console.log(formInfo)
        axios[props.method]('http://localhost:8000/api/author'+props.action, formInfo)
            .then( res => {
                console.log(res)
                navigate('/')
            } )
            .catch( err => { 
                const errors = err.response.data.errors;
                errors.fullName ? 
                setFormErrors(errs => ({...errs, 'fullName': errors.fullName.message})) 
                : setFormErrors({fullName:''}) 
            })
    }

    return (
        <form onSubmit={formSubmit} className='container p-5 border mt-3 justify-content-center align-items-center' >
            <span className='text-danger'>{formErrors.fullName}</span>
            <div className='d-flex gap-3 justify-content-center'>
                <label htmlFor="fullName">Name: </label>
                <input type="text" onChange={updateForm} name='fullName' value={formInfo.fullName} />
            </div>
            <div className='d-flex gap-3 justify-content-center mt-4' >
                <Link to={'/'} className='btn btn-outline-danger' >Cancel</Link>
                <button className='btn btn-outline-primary' >Submit</button>
            </div>
        </form>

    )
}

export default AuthorForm