import 'bootstrap/dist/css/bootstrap.css';
import '../styles/globals.css';
import { SnipcartProvider } from 'use-snipcart';

import type { AppProps } from 'next/app';
import Carousel from 'react-bootstrap/Carousel';
import dumyData from './dumpData';
import axios from 'axios';
import { useState, createContext, useEffect } from 'react';
import jwt from "jwt-decode"
import AllProduct from './AllProduct.js';
import { StoreProvider } from './Store.js';
import { userAgent } from 'next/server';

export default function App({ Component, pageProps }: AppProps) {
  const [products, setProducts] = useState([]);
const [loggedIn,setLoggedIn]=useState()
console.log(loggedIn);

  useEffect(() => {
    getProducts();
   const token =localStorage.getItem('token')
   if(token){
    const user=jwt(token)
    console.log(user);
    axios.get("http://localhost:8080/user/"+user.sub).then(res=>setLoggedIn(res.data))

  }

  }, []);

  const getProducts = () => {
    axios
      .get(`http://localhost:8080/product/`)
      .then((data) => {
        setProducts(data.data);
      })
      .catch((err) => console.log(err));
  };

  return (
    <>
      <SnipcartProvider>
        <StoreProvider>
          <AllProduct.Provider value={{ products }}>
            <Component {...pageProps} />
          </AllProduct.Provider>
        </StoreProvider>
      </SnipcartProvider>
    </>
  );
}