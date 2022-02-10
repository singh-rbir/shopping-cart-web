import React from "react";
import { Link } from "react-router-dom";
import { Input } from "antd";
import breadicion from "../images/breadicon.png";
import {AiFillHome, AiFillShop} from "react-icons/ai"
import { FaShoppingBag } from "react-icons/fa";
import { HiShoppingCart } from "react-icons/hi";

// const logout = () => {
//   userService.logout();
//   window.location = "/";
// };
const Header = () => {
  const { Search } = Input;
  const onSearch = (value) => console.log(value);

  return (
    <nav className="shadow-lg header">
      {/* ----------- */}
      <div className="logo_v2">
        <h3>
          <Link
            activeClassName="is-active"
            to="/"
            style={{ textDecoration: "none", color: "black" }}
          >
            <span id="left">Bread</span>
            <span id="right">Store</span>
          </Link>
        </h3>
      </div>
      {/* ----------- */}
      <Search
        className="search-bar"
        placeholder="Search for items..."
        onSearch={onSearch}
        size="default"
        enterButton
      />
      {/* ----------- */}
      <div className="nav-links">
        <h3>
          <Link exact={true} activeClassName="is-active" to="/">
            {/* <AiFillHome className="logo-icon" style={{ color: "cyan" }}/> */}
            Home
          </Link>
        </h3>
        <h3>
          <Link activeClassName="is-active" to="/shop">
            Shop items
          </Link>
        </h3>
        <h3>
          <Link activeClassName="is-active" to="/profile">
            Profile
          </Link>
        </h3>
        <h3
          className="logout-btn"
          // onClick={logout}
          style={{ cursor: "pointer" }}
        >
          Logout
        </h3>
      </div>

      {/* ----------- */}
      <FaShoppingBag style={{color: 'white'}} />
    </nav>
  );
};

export default Header;
