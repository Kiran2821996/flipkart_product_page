import React, { useState, useEffect } from "react";

function App() {
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [products, setProducts] = useState([]);
  const [sort, setSort] = useState("highToLow");
  const [filters, setFilters] = useState({
    size: [],
    brand: [],
    idealFor: [],
  });

  useEffect(() => {
    // fetch products data from JSON file and set it to the state
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    console.log(products);
  }, []);

  // function to sort products based on the selected option
  const handleSortChangeLH = () => {
    setSort("lowToHigh")
  }
  const handleSortChangeHL = () => {
    setSort("highToLow")
  }

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

  const handlePriceChange = (type,value) => {
    
    if (type === 'min-price') {
      setMinPrice(Number(value));
      console.log(minPrice)
    } else {
      setMaxPrice(Number(value));
      console.log(maxPrice)
    }
  };
  // function to clear all filters
  const handleClearFilters = () => {
    setFilters({
      size: [],
      brand: [],
      idealFor: [],
    });
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
      if(minPrice>=0 && maxPrice<=1000){
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

  return (
    <div>
      <div className="sort-filters">
        <div className="sort">
          Sort by:
          <span onClick={handleSortChangeLH} >Low to High</span>||
          <span onClick={handleSortChangeHL} >High to Low</span>
        </div>
        <div className="filters">
          Filters:
          <div className="filter">
          <label htmlFor="min-price">
        Min price:
        <input
          type="range"
          name="min-price"
          id="min-price"
          min={0}
          max={maxPrice}
          defaultValue={minPrice}
          onChange={(e)=>handlePriceChange("min-price",e.target.value)}
        />
        <input type='number' value={minPrice} onChange={(e)=>handlePriceChange("min-price",e.target.value)} />
      </label>
      <label htmlFor="max-price">
        Max price:
        <input
          type="range"
          name="max-price"
          id="max-price"
          min={minPrice}
          max={1000}
          defaultValue={maxPrice}
          onChange={(e)=>handlePriceChange("max-price",e.target.value)}
        />
        <input type='number' value={maxPrice} onChange={(e)=>handlePriceChange("min-price",e.target.value)} />
      </label>
            Size:
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
            Brand:
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
            Ideal For:
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
          <button onClick={handleClearFilters}>Clear Filter</button>
        </div>
      </div>
      {filteredAndSortedProducts.map((item) => {
        return (
          <div>
            <h6>{item.brand}</h6>
            <h4>{item.name}</h4>
            <img src={item.image} alt="product" width={100} height={100} />
            <h5>{item.price}</h5>
          </div>
        );
      })}
    </div>
  );
}

export default App;
