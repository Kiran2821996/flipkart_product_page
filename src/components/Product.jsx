import React from 'react'

function Product({filteredAndSortedProducts}) {
  return (
   <>
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
   </>
  )
}

export default Product