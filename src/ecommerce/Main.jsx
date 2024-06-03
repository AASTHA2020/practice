// Main.jsx
import axios from 'axios';
import { useEffect, useState } from 'react';
import './ecommerce.css';
import Product from './Product';
import Header from './Header';
import { hydrateRoot } from 'react-dom/client';

function Main() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);


    useEffect(() => {
        axios.get("https://fakestoreapi.com/products")
            .then((result) => {
                console.log(result.data);
                setProducts(result.data);
            });
    }, []);

    function handleAddToCart(event, product){
        event.preventDefault();
        setCart([...cart, product]);
    }

    return (
        <>
       
            <div id="products">
                {products.map((product, index) => {
                    return (
                        <Product key={index} 
                        product={product}
                        handleAddToCart ={hydrateRoot} />
                    );
                })}
            </div>
        </>
    );
}

export default Main;
