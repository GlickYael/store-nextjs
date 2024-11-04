import React from 'react'
import style from '../styles/Products.module.css'

function Product({product}) {
    return (
        <div key={product.id}>
            <h2 className={style.prod_title}>{product.title}</h2>
            <img className={style.prod_img} src={product.image} alt={product.title} />
            <p className={style.prod_price} >Price: ${product.price}</p>
        </div>

    )
}

export default Product
