import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { useSnipcart } from 'use-snipcart';
import Link from "next/link";



export default function NavBar() {
  const [searchView, setSearcView] = useState(false);

  const [smShow, setSmShow] = useState(false);
  // const { cart = {} } = useSnipcart();
  const [data, setData] = useState({});

  return (
    <>
      <nav id="bigNav">
        <a id="ourLogo">
          <img src="/One Click Pick png.png" />
        </a>

        <nav id="secondaryNav">
          <ul>
            <li>
              <button
                className="snipcart-checkout"
                style={{ background: "black", border: "black" }}
              >
                <img src="cart.png" alt="" className="favoriteImage" />
                {/* <span>${cart.subtotal?.toFixed(2)}</span> */}
              </button>
            </li>
            <li>
              <a href="#">
                <img src="heart-png-16.png" alt="" className="favoriteImage" />
              </a>
            </li>
          </ul>
        </nav>

        <nav className="searchNav">
          <ul>
            <li>
              <input
                type="text"
                className="inputSearch"
                onChange={(e) => {
                  setData({name : e.target.value});
                }}
              />
            </li>

            <li>
              <Link
                href={{
                  pathname: "/Search",
                  query: data, // the data
                }}
              >
                  <img
                    src="search-icon-png.png"
                    alt=""
                    onClick={() => {
                      setSearcView(true);
                      console.log(data);
                      
                    }}
                  />
              </Link>
            </li>
          </ul>
        </nav>

        <nav className="navbar">
          <ul>
            <li>
              <a href="/"> Home </a>
            </li>
            <li>
              <a href="#" onClick={() => setSmShow(true)}>
                {" "}
                Categories{" "}
              </a>
            </li>
             <li>
              <a href="Aboutus">About us</a>
            </li> 
            <li>
              <a href="Login"> Login </a>
            </li>
          </ul>
        </nav>
      </nav>

      <>
        <Modal
          className="toggleColor"
          size="sm"
          show={smShow}
          onHide={() => setSmShow(false)}
          aria-labelledby="example-modal-sizes-title-sm"
        >
          <Modal.Header closeButton>
            <Modal.Title id="example-modal-sizes-title-sm">
              <h1 className="bold">Categories</h1>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body className="categorieHover">
            <a href="/Clothes">
              <h3>Clothes</h3>
            </a>
            <a href="/Shoes">
              <h3>Shoes</h3>
            </a>
            <a href="/Accessories">
              <h3>Accessories</h3>
            </a>
            <a href="/Itemstemplate">
              <h3 id="all">All</h3>
            </a>
          </Modal.Body>
        </Modal>
      </>
    </>
   
    
    
  );
}