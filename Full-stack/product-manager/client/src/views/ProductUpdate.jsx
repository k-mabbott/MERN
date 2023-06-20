import React, {useState} from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect } from 'react';

const ProductUpdate = () => {

    const navigate = useNavigate();

    const { id } = useParams();
    
    const [formData, setFormData] = useState({
        title: '',
        price: 0,
        description: ''
    });
    const [formErr, setFormErr] = useState({
        title: '',
        price: '',
        description: ''
    })

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
                errors.title ? setFormErr(errs => ({...errs, 'title': errors.title.message})) : setFormErr({title:''})
                errors.price ? setFormErr(errs => ({...errs, 'price': errors.price.message})) : setFormErr({price:''})
                errors.description ? setFormErr(errs => ({...errs, 'description': errors.description.message})) : setFormErr({description:''})
            })
    }

    const updateForm = e => {
        const {name,value} = e.target
        setFormData(currentForm => ({...currentForm, [name]:value}))
    }


    return (
        <form onSubmit={submitHandle} >
            <div>
                <p className='err' >{formErr.title}</p>
                <label htmlFor="">Title: </label>
                <input type="text" name='title' value={formData.title} onChange={ updateForm } />
            </div>
            <div>
                <p className='err' >{formErr.price}</p>
                <label htmlFor="">Price: </label>
                <input type="number" name='price' value={formData.price} onChange={ updateForm } />
            </div>
            <div>
                <p className='err' >{formErr.description}</p>
                <label htmlFor="">Description: </label>
                <input type="text" name='description' value={formData.description} onChange={ updateForm } />
            </div>
            <button type='submit' >Update Product</button>
        </form>
    )
}

export default ProductUpdate