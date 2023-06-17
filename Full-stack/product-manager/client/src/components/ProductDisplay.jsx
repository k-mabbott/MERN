import React from 'react'
import { Link } from 'react-router-dom'
import styles from './Product.module.css'
import axios from 'axios'

const ProductDisplay = (props) => {

  const {productList} = props

  const deleteCurr = (id) => {
    axios.delete(`http://localhost:8000/api/product/${id}`)
    .then(res => props.deleteProduct(id))
    .catch(err => console.log(err))
  }

  return (
    <>
      <p>test</p>
      {
        
        productList.map((product, i) =>
        <div key={product._id} className=''>
          <hr/>
          <Link className={styles.link} to={`/product/${product._id}`} >{product.title}</Link>
          <div>
            <br />
            <Link className={styles.linkbtn} to={`/${product._id}/edit`} >Edit</Link> | 
            | <span className={styles.linkbtn} onClick={() => deleteCurr(product._id)} >Delete</span>
          </div>
        </div> 
        )
        
      }
    </>
  )
}
export default ProductDisplay