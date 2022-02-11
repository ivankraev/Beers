import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './Layout.module.css'
export default function Layout({ children }) {
  return (
    <>
      <Navbar className={styles.appbarcontainer}>
        <div className={styles.contentwrapper}>
          <h1 className={styles.textcolor}>Beans Love Beers</h1>
          <div className={styles.navwrapper}>
            <Nav className="me-auto">
              <Link to={'/'}>Home</Link>
              <Link to={'favourites'}>favourites</Link>
            </Nav>
          </div>
        </div>
      </Navbar>
      {children}
    </>
  )
}
