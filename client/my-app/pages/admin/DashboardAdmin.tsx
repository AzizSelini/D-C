import React from "react";
import NavBar from "./Navbar component/NavBar"
import styles from '../styles/Home.module.css'



const DashboardAdmin = () => {



  return (
    <div>
      <header>
        <NavBar />
      </header>


<>
      
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span>Powered by</span>
          <span >
         
          </span>
      
        </a>
      </footer>
      </>
    </div>
    
  );
};

export default DashboardAdmin;
