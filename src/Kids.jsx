// Kids.jsx
import React from 'react';
import outfits from './Outfits'; // Import the outfits data

const Kids = () => {
  
  const menOutfits = outfits.filter(outfit => outfit.category === 'Men');
  return (
    <div className="outfit-list">
      {menOutfits.map((outfit, index) => (
        <div key={index} className="outfit-item">
          <img src={outfit.imageUrl} alt={outfit.productName} className="outfit-image" />
          <div className="outfit-info">
            <h3>{outfit.productName}</h3>
            <p>Rating: {outfit.ratings} ⭐</p>
            <p>Price: ${outfit.discountPrice}</p>
            <button className="add-to-cart-button">Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Kids;
