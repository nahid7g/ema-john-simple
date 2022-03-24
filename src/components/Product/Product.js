import React from 'react';
import "./Product.css";

const Product = ({handleAddToCart,product}) => {
    const {img,name,seller,price,ratings} = product;
    return (
        <div className='product'>
            <img src={img} alt={seller} />
            <h2>{name}</h2>
            <p>Price: {price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings}</p>
            <button onClick={() => handleAddToCart(product)} className='add-to-cart'>
                <p>Add to Cart</p>
            </button>
        </div>
    );
};

export default Product;