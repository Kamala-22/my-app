

// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';
// import Modal from './Modal';

// const Navbar = ({ cartCount }) => {
//   const [isModalOpen, setIsModalOpen] = useState(false);

//   const toggleModal = () => {
//     setIsModalOpen(!isModalOpen);
//   };

//   return (
//     <div className="navbar">
//       <Link to="/" className="logo">E-Commerce</Link>
//       <Link to="/">Home</Link>
//       <Link to="/men">Men</Link>
//       <Link to="/women">Women</Link>
//       <Link to="/kids">Kids</Link>
//       <Link to="/home-living">Home & Living</Link>
//       <Link to="/beauty">Beauty</Link>
//       <div className="search-box">
//         <input type="text" placeholder="Search..." />
//         <i className="fas fa-search"></i>
//       </div>
//       <div className="icons">
//         <Link to="#"><i className="fas fa-user"></i></Link>
//         <Link to="#"><i className="fas fa-shopping-cart"></i>
//           <span id="cartCount" className="cart-count">{cartCount}</span>
//         </Link>
//         <Link to="#" onClick={toggleModal}>Login</Link>
//       </div>
//       <Modal isOpen={isModalOpen} toggleModal={toggleModal} />
//     </div>
//   );
// };

// export default Navbar;



import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Navbar.css';
import Modal from './Modal';

const Navbar = ({ cartCount, setSearchQuery }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchInput, setSearchInput] = useState('');
  const navigate = useNavigate();

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleSearchChange = (e) => {
    setSearchInput(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setSearchQuery(searchInput);
    navigate('/'); // Redirect to the home page to show search results
  };

  return (
    <div className="navbar">
      <Link to="/" className="logo">E-Commerce</Link>
      <Link to="/">Home</Link>
      <Link to="/men">Men</Link>
      <Link to="/women">Women</Link>
      <Link to="/kids">Kids</Link>
      <Link to="/home-living">Home & Living</Link>
      <Link to="/beauty">Beauty</Link>
      <form className="search-box" onSubmit={handleSearchSubmit}>
        <input
          type="text"
          placeholder="Search..."
          value={searchInput}
          onChange={handleSearchChange}
        />
        <button type="submit">
          <i className="fas fa-search"></i>
        </button>
      </form>
      <div className="icons">
        <Link to="#"><i className="fas fa-user"></i></Link>
        <Link to="#"><i className="fas fa-shopping-cart"></i>
          <span id="cartCount" className="cart-count">{cartCount}</span>
        </Link>
        <Link to="#" onClick={toggleModal}>Login</Link>
      </div>
      <Modal isOpen={isModalOpen} toggleModal={toggleModal} />
    </div>
  );
};

export default Navbar;
