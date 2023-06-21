import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const DeleteBtn = (props) => {

    const navigate = useNavigate()

    const deleteOne = (id) => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then(res => navigate('/'))
            .catch(err => console.log(err))
    }

    return (
        <button className='btn btn-outline-danger w-25' onClick={() => deleteOne(props.id)} >Delete</button>
    )
}

export default DeleteBtn