import React from "react";
import assured from "./assests/assured.png";
function Product({ filteredAndSortedProducts }) {
  return (
    <>
      <div id="main-content">
        {filteredAndSortedProducts.map((item) => {
          return (
            <>
              <div className="card" key={item.id}>
                <img
                  className="item-image"
                  src={item.image}
                  alt="Cloth's Images"
                />
                <h5 className="brand-name">{item.brand} <img className="assured-img" src={assured} alt="" /></h5>

                <h6 className="product-name">{item.name}</h6>
               
                <div key={item.id} className="prices">
                  <p className="price">₹ {item.price}</p>
                  <p className="small orignal-price">₹ {item.price + 100}</p>
                  <p className="small discount-rate">30%</p>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}

export default Product;
