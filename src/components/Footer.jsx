import React from "react";
import { AiFillShop } from "react-icons/ai";
const Footer = () => {
  return (
    <>
      <nav
        aria-label=""
        className="footer-menu fos container-fluid"
        data-track-index="2"
      >
        <div className="logo_v2">
          <h3>
            <a
              activeClassName="is-active"
              to="/"
              style={{ textDecoration: "none", color: "black" }}
            >
              <span id="left">Bread</span>
              <span id="right">Store</span>
            </a>
          </h3>
        </div>
        <br />
        <ul>
          <li className="closed" tabindex="-1">
            <div className="heading-toggle" style={{ color: "white" }}>
              Other links
            </div>
            <br />
            <ul>
              <li>
                <a>Link 1</a>
              </li>
              <li>
                <a>Link 2</a>
              </li>
              <li>
                <a>Link 3</a>
              </li>
            </ul>
          </li>

          <li className="closed" tabindex="-1">
            <div className="heading-toggle" style={{ color: "white" }}>
              Items & categories
            </div>
            <br />
            <ul>
              <li>
                <a>All Items </a>
              </li>
              <li>
                <a>All categories</a>
              </li>
              <li>
                <a>Ask about bread payments</a>
              </li>
            </ul>
          </li>
          <li className="closed" tabindex="-1" data-track-name="account">
            <div className="heading-toggle" style={{ color: "white" }}>
              Account
            </div>
            <br />
            <ul>
              <li>
                <a>Things</a>
              </li>
              <li>
                <a>Other things</a>
              </li>
              <li>
                <a>
                  <i>Yet other things</i>
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Footer;
