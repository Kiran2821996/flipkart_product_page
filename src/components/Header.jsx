import React from 'react';
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import SearchIcon from "@mui/icons-material/Search";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import logo from "./assests/flipkartlogo.png"
function Header() {
  return (
   <>
   <section className="main">
        <img src={logo} id="main-logo" alt="flipkart" />
        <div className="search-container">
          <input
            id="search-input"
            type="text"
            placeholder="Search for products, brand or more"
          />
          <SearchIcon sx={{ color: "blue" }} />
        </div>

        <ul id="nav-links">
          <li>
            Kiran <KeyboardArrowDownIcon />
          </li>
          <li>
            Become a Seller <KeyboardArrowDownIcon />
          </li>
          <li>
            More <KeyboardArrowDownIcon />
          </li>
          <li>
            Cart <ShoppingCartIcon />
          </li>
        </ul>
      </section>
   </>
  )
}

export default Header