import React, { useState , useContext } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
// import { useSnipcart } from 'use-snipcart';
import Link from "next/link"
import { queryy } from '../AllProduct';

export default function NavBar() {
  const [searchView, setSearcView] = useState(false);

  const [smShow, setSmShow] = useState(false);
  // const { cart = {} } = useSnipcart();
  const qu = useContext(queryy)
  const [query, setQuery] = useState();


  return (
    <>
      <nav id="bigNav">
        <a id="ourLogo">
          <img src="/One Click Pick png.png" />
        </a>

        <nav id="secondaryNav">
          <ul>
            <li>
              <button className="snipcart-checkout" style={{background : 'black' , border:"black"}}>
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
                <input type="text" className="inputSearch" onChange={(e)=>{setQuery(e.target.value)}}/>
              </li>
          
            <li>
              <a href="#">
                <img
                  src="search-icon-png.png"
                  alt=""
                  onClick={() => {
                   
                      console.log(query);
                      setSearcView(false)
                    
                  }}
                />
              </a>
            </li>
          </ul>
        </nav>

        <nav className="navbar">
          <ul>
            <li>
              <a  href="/"> Home </a>
            </li>
            <li>
              <a href="#" onClick={() => setSmShow(true)}>
                Categories
              </a>
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
            <Link href="/admin/AClothes" >
              <h3 onClick={(e)=>{
                
console.log("wiwi");
              }}>Clothes</h3>
            </Link>
            <a href="/admin/AShoes">
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