import React from 'react'
import './Header.css';
import { BsCartCheck } from "react-icons/bs";
import {signOut} from "https://www.gstatic.com/firebasejs/9.6.5/firebase-auth.js";

const Header = (props) => {

  function paging(page) {
    props.setPage(page);
  }

  function search(e) {
    props.setPage("search");
    props.setSearch(e.target.value);
    console.log(e.target.value);
  }
  function logout() {
    console.log(props.user);
    signOut(props.auth)
      .then(() => {
        props.setUser("");
      })
      .catch((error) => {
        // An error happened.
      });
  }
  return (
    <header className="d-flex">
      <nav className="left-nav">
        <div className="store-logo">
          <a href={() => false}
            onClick={(e) => {
              paging("main");
            }}
            id="homeTag"
          >
            <img src="./LOGO.png" alt="Store logo" />
          </a>
        </div>
        <ul>
          <a
                href={() => false}
                onClick={(e) => {
                  paging("main");
                }}
              >
          <li>
              Store
          </li>
          </a>
          <a
              href={() => false}
              onClick={(e) => {
                paging("community");
              }}
            >
          <li>
              Community
          </li>
          </a>
          <a
              href={() => false}
              onClick={(e) => {
                paging("support");
              }}
            >
          <li>
              Support
          </li>
          </a>
        </ul>
        <input
          type="text"
          onChange={(e) => {
            search(e);
          }}
          placeholder="Search"
        />
      </nav>
      <nav className="right-nav">
        <ul>
          {props.user.displayName === undefined ? (
            <div className="navBtns">
              <a href={() => false} onClick={(e)=>{
                paging("cart");
              }}><BsCartCheck/>CART</a>
              <div className="regBtns">
                <a
                  href={() => false}
                  onClick={(e) => {
                    paging("login");
                  }}
                  id="loginTag"
                >
                  <li>Login</li>
                </a>
                <a
                  href={() => false}
                  onClick={(e) => {
                    paging("register");
                  }}
                  id="registerTag"
                >
                  <li>Sign up</li>
                </a>
              </div>
              {/* <a href={() => false}>
                <li>
                  Lietuvių | LT
                  <ul className="language-menu">
                    <a href={() => false}>
                      <li>Anglų | ENG</li>
                    </a>
                    <a href={() => false}>
                      <li>Lietuvių | LT</li>
                    </a>
                  </ul>
                </li>
              </a> */}
            </div>
          ) : (
            <div className="navBtns">
            <a href={() => false} onClick={(e)=>{
              paging("cart");
            }}><BsCartCheck/>CART</a>
            <h3>
              {props.user.displayName}{" "}
              <a
                href={() => false}
                onClick={(e) => {
                  logout();
                }}
              >
                <li>Logout</li>
              </a>
            </h3>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
