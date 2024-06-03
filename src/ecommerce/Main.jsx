// Main.jsx
import axios from 'axios';
import { useEffect, useState } from 'react';
import './ecommerce.css';
import Product from './Product';
import Header from './Header';

function Main() {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((result) => {
                console.log(result.data);
                setProducts(result.data);
            });
    }, []);

    return (
        <>
       
            <div id="products">
                {products.map((product, index) => {
                    return (
                        <Product key={index} product={product} />
                    );
                })}
            </div>
        </>
    );
}

export default Main;
