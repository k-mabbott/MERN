import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'



const SearchForm = (props) => {

    const navigate = useNavigate();

    // const {getInfo} = props

    const [category, setCategory] = useState ('')
    const [id, setId] = useState ('')

    const getFormData = (e) => {
        e.preventDefault();
        let data = {category, id}
        // console.log(data)
        navigate(`/${category}/${id}`)
        setId('')
    }



    return (
        <form onSubmit={getFormData}>
            <label htmlFor="category">Search for: </label>
            <select name="category" id="category" onChange={ e=> setCategory(e.target.value)} >
                <option value="" hidden >Please select a category</option>
                <option value="people" >People</option>
                <option value="planets">Planet</option>
                <option value="starships">Starships</option>
            </select>
            <label htmlFor="id">ID: </label>
            <input id="id" type="number" value={id} onChange={ e=> setId(e.target.value)} />
            <button className='btn' id='search' >Search</button>
        </form>
    )
}

export default SearchForm