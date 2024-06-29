// src/ProductDetail.js
import React from 'react';
import { useParams } from 'react-router-dom';
import outfits from './Outfits'; // Import the outfits data
import './ProductDetail.css'; // Import the CSS file for styling

const ProductDetail = () => {
  const { id } = useParams();
  const product = outfits.find(outfit => outfit.id === parseInt(id));

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="product-detail">
        <h2>Product Details</h2>
      <img src={product.imageUrl} alt={product.productName} className="product-detail-image" />
      <div className="product-detail-info">
        <h2>{product.productName}</h2>
        <p>Category: {product.category}</p>
        <p>Rating: {product.ratings} ⭐</p>
        <p>Price: ${product.price}</p>
        <p>DiscountPrice: ${product.discountPrice}</p>
        <p>{product.description}</p>
      </div>
    </div>
  );
};

export default ProductDetail;
