

// 
// src/App.js
// import React, { useState } from 'react';
// import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import Navbar from './Navbar';
// import OutfitList from './OutfitList';
// import ProductDetail from './ProductDetail';
// import Footer from './Footer';
// import AutoCarousel from './Slides'; // Import the AutoCarousel component
// import '@fortawesome/fontawesome-free/css/all.min.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import './App.css';

// const App = () => {
//   const [cart, setCart] = useState([]);

//   const addToCart = (item) => {
//     setCart([...cart, item]);
//   };

//   return (
//     <Router>
//       <div>
//         <Navbar cartCount={cart.length} />
//         <Routes>
//           <Route path="/" element={
//             <>
//               <AutoCarousel /> {/* Add AutoCarousel here */}
//               <OutfitList category="All" addToCart={addToCart} />
//             </>
//           } />
//           <Route path="/men" element={<OutfitList category="Men" addToCart={addToCart} />} />
//           <Route path="/women" element={<OutfitList category="Women" addToCart={addToCart} />} />
//           <Route path="/kids" element={<OutfitList category="Kids" addToCart={addToCart} />} />
//           <Route path="/home-living" element={<OutfitList category="Home & Living" addToCart={addToCart} />} />
//           <Route path="/beauty" element={<OutfitList category="Beauty" addToCart={addToCart} />} />
//           <Route path="/product/:id" element={<ProductDetail />} />
//         </Routes>
//         <Footer />
//       </div>
//     </Router>
//   );
// };

// export default App;


import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import OutfitList from './OutfitList';
import ProductDetail from './ProductDetail';
import Footer from './Footer';
import AutoCarousel from './Slides';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
  const [cart, setCart] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  return (
    <Router>
      <div>
        <Navbar cartCount={cart.length} setSearchQuery={setSearchQuery} />
        <Routes>
          <Route path="/" element={
            <>
              <AutoCarousel />
              <OutfitList category="All" searchQuery={searchQuery} addToCart={addToCart} />
            </>
          } />
          <Route path="/men" element={<OutfitList category="Men" searchQuery={searchQuery} addToCart={addToCart} />} />
          <Route path="/women" element={<OutfitList category="Women" searchQuery={searchQuery} addToCart={addToCart} />} />
          <Route path="/kids" element={<OutfitList category="Kids" searchQuery={searchQuery} addToCart={addToCart} />} />
          <Route path="/home-living" element={<OutfitList category="Home & Living" searchQuery={searchQuery} addToCart={addToCart} />} />
          <Route path="/beauty" element={<OutfitList category="Beauty" searchQuery={searchQuery} addToCart={addToCart} />} />
          <Route path="/product/:id" element={<ProductDetail />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
