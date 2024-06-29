
// // src/OutfitList.js
// import React from 'react';
// import { Link } from 'react-router-dom';
// import outfits from './Outfits'; // Import the combined outfits data
// import './OutfitList.css'; // Import the CSS file for styling

// const OutfitList = ({ category, addToCart }) => {
//   const filteredOutfits = category === 'All' ? outfits : outfits.filter(outfit => outfit.category === category);

//   return (
//     <div className="outfit-list">
//       {filteredOutfits.map((outfit, index) => (
//         <div key={index} className="outfit-item">
//           <Link to={`/product/${outfit.id}`}>
//             <img src={outfit.imageUrl} alt={outfit.productName} className="outfit-image" />
//           </Link>
//           <div className="outfit-info">
//             <h3>{outfit.productName}</h3>
//             <p>Category: {outfit.category}</p>
//             <p>Rating: {outfit.ratings} ⭐</p>
//             <p>Price: ${outfit.price}</p>
//             <button className="add-to-cart-button" onClick={() => addToCart(outfit)}>Add to Cart</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default OutfitList;

import React from 'react';
import { Link } from 'react-router-dom';
import outfits from './Outfits';
import './OutfitList.css';

const OutfitList = ({ category, searchQuery, addToCart }) => {
  const filteredOutfits = outfits.filter(outfit => {
    const matchesCategory = category === 'All' || outfit.category === category;
    const matchesSearch = outfit.productName.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="outfit-list">
      {filteredOutfits.map((outfit, index) => (
        <div key={index} className="outfit-item">
          <Link to={`/product/${outfit.id}`}>
            <img src={outfit.imageUrl} alt={outfit.productName} className="outfit-image" />
          </Link>
          <div className="outfit-info">
            <h3>{outfit.productName}</h3>
            <p>Category: {outfit.category}</p>
            <p>Rating: {outfit.ratings} ⭐</p>
            <p>Price: ${outfit.price}</p>
            <button className="add-to-cart-button" onClick={() => addToCart(outfit)}>Add to Cart</button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OutfitList;
