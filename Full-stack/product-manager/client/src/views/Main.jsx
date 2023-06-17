
import React, { useEffect, useState } from 'react';
import ProductForm from '../components/ProductForm';
import ProductDisplay from '../components/ProductDisplay'
import axios from 'axios'



export default () => {


    const [productList, setProductList] = useState([])

    const getAllProducts = () => {
        axios.get('http://localhost:8000/api/products')

            .then(res => {
                console.log(res.data)
                setProductList(res.data)})
            .catch(err => {console.log(err)})
    }

    useEffect(() => {getAllProducts()}, [])

    // productList.map((product, i) => {console.log(product)})

    const addNewProduct = (data) => {
        setProductList(currList => ([...currList, data]))
    }

    const deleteProduct = (id) => {
        setProductList(currProducts => currProducts.filter((item) => item._id !== id))
    }

    return (
        <div>
            <ProductForm addNewProduct={addNewProduct} />
            <ProductDisplay productList={productList} deleteProduct={deleteProduct} />
        </div>
    )
}



