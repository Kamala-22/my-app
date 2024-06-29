import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import './ProductMenu.css';

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      let response = await fetch('https://dummyjson.com/products');
      let data = await response.json();
      setProducts(data.products);
      setFilteredProducts(data.products);

      // Extract unique categories
      let uniqueCategories = [...new Set(data.products.map(product => product.category))];
      setCategories(uniqueCategories);
    };

    fetchProducts();
  }, []);

  const filterProducts = () => {
    let selectedCategories = [...document.querySelectorAll('.categorylist input[type="checkbox"]:checked')].map(checkbox => checkbox.value);
    if (selectedCategories.length === 0) {
      setFilteredProducts(products);
    } else {
      let filtered = products.filter(product => selectedCategories.includes(product.category));
      setFilteredProducts(filtered);
    }
  };

  return (
    <div className="main">
      <div className="filterbox">
        <h2>Category</h2>
        <div className="categorylist">
          {categories.map(category => (
            <label key={category} htmlFor={category}>
              <input type="checkbox" id={category} value={category} onChange={filterProducts} /> {category.charAt(0).toUpperCase() + category.slice(1)}
            </label>
          ))}
        </div>
      </div>
      <div className="product">
        {filteredProducts.map(product => <ProductCard key={product.id} product={product} />)}
      </div>
    </div>
  );
};

export default ProductList;
