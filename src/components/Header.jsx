import React from 'react'

function Header() {
  return (
    <div className="login">
        
        <div className="head">
          <div><img width='80px' className="flifkart" src="https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/flipkart-plus_8d85f4.png" />
       </div>
        
          <span  className="explore">Explore </span>
          
          <span className="plus">Plus</span>
          <img  width='15px' src="	https://static-assets-web.flixcart.com/fk-p-linchpin-web/fk-cp-zion/img/plus_aef861.png" />
        
        </div>

       <input className="head-input" placeholder="Search for products brand and more"/>
        {/* <div  className="cart" > */}
        <img  width='30px'src="data:image/png;base64,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" />
     {/* </div>  */}

     </div>
  )
}

export default Header