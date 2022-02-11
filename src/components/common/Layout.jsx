import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Layout.module.css";
export default function Layout({ children }) {
  return (
    <>
      <Navbar className={styles.appbarcontainer}>
        <div className={styles.contentwrapper}>
          <h1 className={styles.textcolor}>Beans Love Beers</h1>
          <div className={styles.navwrapper}>
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#favourites">Favourites</Nav.Link>
            </Nav>
          </div>
        </div>
      </Navbar>
      {children}
    </>
  );
}
