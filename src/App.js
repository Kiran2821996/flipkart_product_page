import React, { useState, useEffect } from "react";
import FilterAndSort from "./components/FilterAndSort";
import Header from "./components/Header";
import "./App.css"

function App() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // fetch products data from JSON file and set it to the state
    fetch("/data/products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
    console.log(products);
  }, []);

  return (
    <div>
      <Header />
      <div className="mainsec">
      <FilterAndSort products={products} />
      </div>
     
    </div>
  );
}

export default App;
