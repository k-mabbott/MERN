import React, { useEffect, useState }  from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom';


const AuthorsTable = () => {

    const [authorsList, setAuthorsList] = useState([]);

    const navigate = useNavigate();

    const findAllAuthors = () => {
// -----------------------------------------------------GET ALL AUTHORS
        axios.get('http://localhost:8000/api/authors')
            .then ( res => {
                console.log(res)
                setAuthorsList(res.data)
            } )
            .catch( err => console.log(err) )
    }

// -----------------------------------------------------GET ALL AUTHORS ON LOAD
    useEffect(() => {findAllAuthors()}, [] )

// -----------------------------------------------------REMOVES AUTHOR
    const deleteOne = (id) => {
        axios.delete(`http://localhost:8000/api/author/${id}`)
            .then(res => deleteAuthor(id))
            .catch(err => console.log(err))
    }

    const deleteAuthor = (id) => {
        setAuthorsList(currAuthors => currAuthors.filter((author) => author._id !== id))
    }

    return (
        <table className='border container table table-bordered table-dark table-hover table-striped' >
            <thead>
                <tr>
                    <th>Author</th>
                    <th>Actions Available</th>
                </tr>
            </thead>
            <tbody>
                {
                    authorsList.map((author, i) => 
                    <tr key={i} >
                        <td>{author.fullName}</td>
                        <td>
                            <button onClick={() => navigate(`/author/${author._id}/edit`)} className='btn btn-outline-warning mx-2' >Edit</button>
                            <button onClick={() => deleteOne(author._id)} className='btn btn-outline-danger' >Delete</button>
                        </td>
                    </tr>
                    )
                }
            </tbody>
        </table>
    )
}

export default AuthorsTable