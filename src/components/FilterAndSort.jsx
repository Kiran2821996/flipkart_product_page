import React, { useState } from "react";
import Product from "./Product";

function FilterAndSort({ products }) {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);

  const [sort, setSort] = useState("highToLow");
  const [filters, setFilters] = useState({
    size: [],
    brand: [],
    idealFor: [],
  });

  // function to sort products based on the selected option
  const handleSortChangeLH = () => {
    setSort("lowToHigh");
  };
  const handleSortChangeHL = () => {
    setSort("highToLow");
  };

  // function to add/remove filters
  const handleFilterChange = (type, value) => {
    const newFilters = { ...filters };
    if (newFilters[type].includes(value)) {
      newFilters[type] = newFilters[type].filter((v) => v !== value);
    } else {
      newFilters[type].push(value);
    }

    setFilters(newFilters);
  };

  const handlePriceChange = (type, value) => {
    if (type === "min-price") {
      setMinPrice(Number(value));
      console.log(minPrice);
    } else {
      setMaxPrice(Number(value));
      console.log(maxPrice);
    }
  };
  // function to clear all filters
  const handleClearFilters = () => {
    setFilters({
      size: [],
      brand: [],
      idealFor: [],
    });
    setMinPrice(0);
    setMaxPrice(1000);
  };

  // function to apply filters and sort to the products
  const filteredAndSortedProducts = products
    .filter((product) => {
      if (filters.size.length > 0 && !filters.size.includes(product.size)) {
        return false;
      }
      if (filters.brand.length > 0 && !filters.brand.includes(product.brand)) {
        return false;
      }
      if (
        filters.idealFor.length > 0 &&
        !filters.idealFor.includes(product.idealFor)
      ) {
        return false;
      }
      if (minPrice >= 0 && maxPrice <= 1000) {
        return product.price >= minPrice && product.price <= maxPrice;
      }
      return true;
    })
    .sort((a, b) => {
      if (sort === "highToLow") {
        return b.price - a.price;
      }
      return a.price - b.price;
    });

  const handleRemove = (element) => {
    const updatedObject = { ...filters };
    Object.keys(updatedObject).forEach((key) => {
      updatedObject[key] = updatedObject[key].filter(
        (value) => value !== element
      );
    });
    setFilters(updatedObject);
  };

  return (
    <>
    <div className="filter_main">
      <div className="left_section_filter">
        <div>
          <div className="filter_flex">
            <h4>Filters</h4>
            {filters.size.length > 0 ||
            filters.brand.length > 0 ||
            filters.idealFor.length > 0 ? (
              <button id="btn-clearAll" onClick={handleClearFilters}>CLEAR ALL</button>
            ) : (
              ""
            )}
          </div>

          <div className="filter_flex_ele">
       {/* {   Object.keys({...filters}).map((ele) => {
       <span className="filter_ele" onClick={() => handleRemove(ele)}>
       {ele}
     </span>
      );
    })} */}
            {filters.size.map((ele) => (
              <span className="filter_ele" onClick={() => handleRemove(ele)}>
              <sapn className="x">X</sapn>{" "}{ele}
              </span>
            ))}
            {filters.brand.map((ele) => (
              <span className="filter_ele" onClick={() => handleRemove(ele)}>
                <sapn className="x">X</sapn>{" "}{ele}
              </span>
            ))}
            {filters.idealFor.map((ele) => (
              <span className="filter_ele" onClick={() => handleRemove(ele)}>
                <sapn className="x">X</sapn>{" "}{ele}
              </span>
            ))}
          </div>
        </div>
        <div className="price_filters">
        <h5>Price:</h5>
          <div className="price">
          
          <div >
            {" "}
            <label htmlFor="min-price">
              Min price:
              <input
                type="range"
                name="min-price"
                id="min-price"
                min={0}
                max={maxPrice}
                defaultValue={minPrice}
                onChange={(e) => handlePriceChange("min-price", e.target.value)}
                className="input_range"
              />
              <input
                type="number"
                value={minPrice}
                onChange={(e) => handlePriceChange("min-price", e.target.value)}
                className="input-min" 
              />
            </label>
          </div>
          <div>
            {" "}
            <label htmlFor="max-price">
              Max price:
              <input
                type="range"
                name="max-price"
                id="max-price"
                min={minPrice}
                max={1000}
                defaultValue={maxPrice}
                className="input_range"
                onChange={(e) => handlePriceChange("max-price", e.target.value)}
              />
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => handlePriceChange("min-price", e.target.value)}
                className="input-max" 
              />
            </label>
          </div>
          </div>
         
        </div>
        <div className="size_filters">
          <h5 >Size:</h5>
          <label>
            <input
              type="checkbox"
              value="S"
              checked={filters.size.includes("S")}
              onChange={(e) => handleFilterChange("size", e.target.value)}
            />
            S
          </label>
          <label>
            <input
              type="checkbox"
              value="M"
              checked={filters.size.includes("M")}
              onChange={(e) => handleFilterChange("size", e.target.value)}
            />
            M
          </label>
          <label>
            <input
              type="checkbox"
              value="L"
              checked={filters.size.includes("L")}
              onChange={(e) => handleFilterChange("size", e.target.value)}
            />
            L
          </label>
          <label>
            <input
              type="checkbox"
              value="XL"
              checked={filters.size.includes("XL")}
              onChange={(e) => handleFilterChange("size", e.target.value)}
            />
            XL
          </label>
        </div>
        <div className="brand_filters">
          <h5> Brand:</h5>
          <label>
            <input
              type="checkbox"
              value="addidas"
              checked={filters.brand.includes("addidas")}
              onChange={(e) => handleFilterChange("brand", e.target.value)}
            />
            Addidas
          </label>
          <label>
            <input
              type="checkbox"
              value="Nike"
              checked={filters.brand.includes("Nike")}
              onChange={(e) => handleFilterChange("brand", e.target.value)}
            />
            Nike
          </label>
        </div>
        <div className="ideal_filters">
          <h5>Ideal For:</h5>
          <label>
            <input
              type="checkbox"
              value="Women"
              checked={filters.idealFor.includes("Women")}
              onChange={(e) => handleFilterChange("idealFor", e.target.value)}
            />
            Women
          </label>
          <label>
            <input
              type="checkbox"
              value="Men"
              checked={filters.idealFor.includes("Men")}
              onChange={(e) => handleFilterChange("idealFor", e.target.value)}
            />
            Men
          </label>
          <label>
            <input
              type="checkbox"
              value="Children"
              checked={filters.idealFor.includes("Children")}
              onChange={(e) => handleFilterChange("idealFor", e.target.value)}
            />
            Children
          </label>
        </div>
      </div>
      <div>
        <div className="sort">
          Sort by:
          <span onClick={handleSortChangeLH}>Low to High</span>||
          <span onClick={handleSortChangeHL}>High to Low</span>
        </div>
        <Product filteredAndSortedProducts={filteredAndSortedProducts} />
      </div>
    </div>
    </>
    
  );
}

export default FilterAndSort;
