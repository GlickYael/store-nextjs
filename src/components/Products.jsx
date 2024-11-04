"use client"
import React, { useEffect, useState } from 'react';
import Product from './Product';
import styles from '../styles/Products.module.css';
import { ImSpinner2 } from "react-icons/im";


export default function Products({catagory,url}) {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        try {
            const setTime = JSON.parse(localStorage.getItem(`${catagory}setTime`));
            if (!(setTime && (Date.now() - setTime) < 6000)) {
                setProducts([]);
                setLoading(true);
                fetch(`${url}${catagory}`)
                    .then(response => response.json())
                    .then(data => {
                        setProducts(data);
                        localStorage.setItem(catagory, JSON.stringify(data));
                        localStorage.setItem(`${catagory}setTime`, JSON.stringify(Date.now()));
                    })
                    .catch(error => console.log(error))
                    .finally(() => setLoading(false));
            } else {
                const storedProducts = localStorage.getItem(catagory);
                if (storedProducts) setProducts(JSON.parse(storedProducts));
            }
        } catch (error) {
            console.log("Error handling localStorage operations", error);
        }
    }, [catagory,url]);
    return (
        <div className={styles.prod_area}>
            {loading && <ImSpinner2
                visible={true}
                height="80"
                width="80"
                ariaLabel="color-ring-loading"
                wrapperStyle={{}}
                wrapperClass="color-ring-wrapper"
                colors={['#e15b64', '#f47e60', '#f8b26a', '#abbd81', '#849b87']}
            />}
            {products.map(
                (product) => (
                    <div key={product.id} className={styles.product}>
                        <Product product={product} />
                    </div>
                )
            )}
        </div>
    );
}

