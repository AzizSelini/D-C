
import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Modal from 'react-bootstrap/Modal';

const aboutus = () => {
    const [searchView, setSearcView] = useState(false);

    const [smShow, setSmShow] = useState(false);
    // const { cart = {} } = useSnipcart();
  
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
              {searchView ? (
                <li>
                  <input type="text" className="inputSearch" />
                </li>
              ) : null}
              <li>
                <a href="#">
                  <img
                    src="search-icon-png.png"
                    alt=""
                    onClick={() => {
                      setSearcView(true);
                    }}
                  />
                </a>
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
                  {' '}
                  Categories{' '}
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
        <>
          <center>
  <div className="about-section">
    <h1>About Us</h1>
    <p >DOG and CATS </p>
    <p style={{ fontFamily:"Georgia, serif" ,color:"white",fontSize:"20px" }} >
      
    Since 2004 Netgains has been building fashion e-commerce website & running effective fashion digital marketing campaigns for fast-growing as well as established fashion brands. 
    Our expertise in fashion eCommerce ensures that your brand and products are delivered to your customers in a way that makes them buy. Get in touch today!
    </p>
  </div>
  </center>
  <h2 style={{ textAlign: "center" ,color:"white"}}>Our Team</h2>
  <div className="row">
    <div className="col col-sm-6 col-lg-4">
      <div className="card">
        <img src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1671182537/me_kosu6u.jpg" alt="Jane" style={{ width: "100%" }} />
        <div className="container">
          <center>
          <h2>Wiem Mimouni</h2>
          <p className="title">CEO &amp; Founder</p>
          <p>+216 52.444.441</p>
          <p>WiemMimouni@gmail.com</p>
          <p>
          <button className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
</svg>

	contact
  </button>
          </p></center>
        </div>
      </div>
    </div>
    <div className="col col-sm-6 col-lg-4">
      <div className="card">
        <img src="https://res.cloudinary.com/dnwi9wvci/image/upload/v1671182573/T038H78Q62W-U039H7T0Q80-cabb8844dfce-512_p8odu0.jpg" alt="Mike" style={{ width: "100%" }} />
        <div className="container">
          <center>
          <h2>Houssem Hmidi</h2>
          <p className="title">Art Director</p>
          <p>+216 52.444.442</p>
          <p>Housem.Hmidi@gmail.com</p>
          <p>
          <button className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
</svg>

	contact
  </button>
          </p></center>
        </div>
      </div>
    </div>
    <div className="col col-sm-6 col-lg-4">
      <div className="card">
        <img src="https://res.cloudinary.com/duqxezt6m/image/upload/c_scale,h_512,w_512/v1671620369/IMG_0168_uuvouj_nhmx3p.jpg" alt="John" style={{ width: "100%" }} />
        <div className="container">
          <center>
          <h2>Med Aziz Selini</h2>
          <p className="title">Designer</p>
          <p>+216 52.444.443</p>
          <p>AzizSelini@gmail.com</p>
          <p>
          <button className="inline-flex items-center px-4 py-2 bg-gray-200 hover:bg-gray-300 text-gray-800 text-sm font-medium rounded-md">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-lines-fill" viewBox="0 0 16 16">
  <path d="M6 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-5 6s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H1zM11 3.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zm2 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2zm0 3a.5.5 0 0 0 0 1h2a.5.5 0 0 0 0-1h-2z"/>
</svg>

	contact
  </button>
          </p></center>
        </div>
      </div>
    </div>
  </div>
  <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Powered by</span>
          <span >
            <Image src="/One Click Pick png.png" alt="Vercel Logo" width={200} height={200} />
          </span>
      
        </a>
      </footer>
</>
      </>
      


  )
}

export default aboutus