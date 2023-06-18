
import React, { useState } from 'react'
import axios from 'axios'
import styles from './Product.module.css'



const ProductForm = (props) => {


    const [formData, setFormData] = useState({
        title: '',
        price: 0,
        description: ''
    });
    const [formErr, setFormErr] = useState({
        title: '',
        price: '',
        description: ''
    });
// ---------------------------------------------------- USESTATE FOR ERRORS INDIVIDUAL
    // const [titleErr, setTitleErr] = useState('')
    // const [priceErr, setPriceErr] = useState('')
    // const [descriptionErr, setDescriptionErr] = useState('')



    const submitHandle = e => {
        e.preventDefault();
        console.log(formData)

        axios.post('http://localhost:8000/api/product', formData)
            .then(res=> props.addNewProduct(res.data))
// ---------------------------------------------------- USESTATE FOR ERRORS INDIVIDUAL
            // .catch(err=>{
            //     const errors = err.response.data.errors;
            //     errors.title ? setTitleErr(errors.title.message) : setTitleErr('')
            //     errors.price ? setPriceErr(errors.price.message) : setPriceErr('')
            //     errors.description ? setDescriptionErr(errors.description.message) : setDescriptionErr('')
            // })
            .catch(err=>{
                const errors = err.response.data.errors;
                errors.title ? setFormErr(errs => ({...errs, 'title': errors.title.message})) : setFormErr({title:''})
                errors.price ? setFormErr(errs => ({...errs, 'price': errors.price.message})) : setFormErr({price:''})
                errors.description ? setFormErr(errs => ({...errs, 'description': errors.description.message})) : setFormErr({description:''})
                console.log(formErr)
            })
        // props.addNewProduct(formData)
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
            <button type='submit' >Add Product</button>
        </form>
    )
}

export default ProductForm