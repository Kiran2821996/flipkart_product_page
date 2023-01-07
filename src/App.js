import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

function App(){
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState('highToLow');
  const [filters, setFilters] = useState({
    size: [],
    brand: [],
    idealFor: []
  });

  useEffect(() => {
    // fetch products data from JSON file and set it to the state
    fetch('/data/products.json')
      .then(res => res.json())
      .then(data => setProducts(data));
  }, []);

  // function to sort products based on the selected option
  const handleSortChange = e => {
    setSort(e.target.value);
  };

  // function to add/remove filters
  const handleFilterChange = (type, value) => {
    const newFilters = { ...filters };
    if (newFilters[type].includes(value)) {
      newFilters[type] = newFilters[type].filter(v => v !== value);
    } else {
      newFilters[type].push(value);
    }
    setFilters(newFilters);
  };

  // function to clear all filters
  const handleClearFilters = () => {
    setFilters({
      size: [],
      brand: [],
      idealFor: []
    });
  };

  // function to apply filters and sort to the products
  const filteredAndSortedProducts = products
    .filter(product => {
      if (filters.size.length > 0 && !filters.size.includes(product.size)) {
        return false;
      }
      if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) {
        return false;
      }
      if (filters.idealFor.length > 0 && !filters.idealFor.includes(product.idealFor)) {
        return false;
      }
      return true;
    })
    .sort((a, b) => {
      if (sort === 'highToLow') {
        return b.price - a.price;
      }
      return a.price - b.price;
    });

  return (
    <div>
      <div className="sort-filters">
        <div className="sort">
          Sort by:
          <select onChange={handleSortChange} value={sort}>
            <option value="lowToHigh">Low to High</option>
            <option value="highToLow">High to Low</option>
          </select>
        </div>
        <div className="filters">
          Filters:
          <div className="filter">
            Size:
            <label>
              <input
                type="checkbox"
                value="S"
                onChange={e => handleFilterChange('size', e.target.value)}
              />
              S
            </label>
            </div>
            </div>
            </div>
            </div>)}


