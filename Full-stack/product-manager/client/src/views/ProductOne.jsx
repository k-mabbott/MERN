import React,{ useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import axios from 'axios'
import styles from '../components/Product.module.css'
import { useNavigate } from 'react-router-dom'



const ProductOne = () => {

    const navigate = useNavigate();

    const [product, setProduct] = useState({});

    const { id } = useParams();

    const getOneProduct = () => {
        axios.get(`http://localhost:8000/api/product/${id}`)

            .then(res => {
                console.log(res.data)
                setProduct(res.data)})
            .catch(err => {console.log(err)})
    }

    useEffect(() => {getOneProduct()}, [])

    const deleteCurr = (id) => {
        axios.delete(`http://localhost:8000/api/product/${id}`)
        .then(res => {
            console.log(res)
            navigate('/')
    })
        .catch(err => console.log(err))
    }



    return (
        <div className={styles.dispOne} >
            <h3>{product.title}</h3>
            <p>{product.price}</p>
            <p>{product.description}</p>
            <Link className={styles.linkbtn} to={`/${product._id}/edit`} >Edit</Link> |
            | <span className={styles.linkbtn} onClick={() => deleteCurr(product._id)} >Delete</span>
        </div>
    )
}

export default ProductOne