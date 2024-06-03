// Product.jsx
import React from 'react';

function Product({ product }) {
    return (
        <div className="product">
            <h2>{product.title}</h2>
            <img src={product.image} alt={product.title} style={{ width: '100%' }} />
            <p>${product.price}</p>
        </div>
    );
}

export default Product;
