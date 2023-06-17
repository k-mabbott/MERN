import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const ProductUpdate = () => {

    const navigate = useNavigate()

    const { id } = useParams()
    
    const [formData, setFormData] = useState({
        title: '',
        price: 0,
        description: ''
    });
    const [titleErr, setTitleErr] = useState('')
    const [priceErr, setPriceErr] = useState('')
    const [descriptionErr, setDescriptionErr] = useState('')


    const getOneProduct = () => {
        axios.get(`http://localhost:8000/api/product/${id}`)

            .then(res => {
                console.log(res.data)
                setFormData(res.data)})
            .catch(err => {console.log(err)})
    }

    useEffect(() => {getOneProduct()}, [])


    const submitHandle = e => {
        e.preventDefault();
        console.log(formData)

        axios.patch(`http://localhost:8000/api/product/${id}`, formData)
            .then(res=> {
                navigate('/')
                console.log(res)})
            .catch(err=> {
                console.log(err)
                const errors = err.response.data.errors;
                errors.title ? setTitleErr(errors.title.message) : setTitleErr('')
                errors.price ? setPriceErr(errors.price.message) : setPriceErr('')
                errors.description ? setDescriptionErr(errors.description.message) : setDescriptionErr('')
            })
    }

    const updateForm = e => {
        const {name,value} = e.target
        setFormData(currentForm => ({...currentForm, [name]:value}))
    }




    return (
        <form onSubmit={submitHandle} >
            <div>
                <p className='err' >{titleErr}</p>
                <label htmlFor="">Title: </label>
                <input type="text" name='title' value={formData.title} onChange={ updateForm } />
            </div>
            <div>
                <p className='err' >{priceErr}</p>
                <label htmlFor="">Price: </label>
                <input type="number" name='price' value={formData.price} onChange={ updateForm } />
            </div>
            <div>
                <p className='err' >{descriptionErr}</p>
                <label htmlFor="">Description: </label>
                <input type="text" name='description' value={formData.description} onChange={ updateForm } />
            </div>
            <button type='submit' >Update Product</button>
        </form>
    )
}

export default ProductUpdate