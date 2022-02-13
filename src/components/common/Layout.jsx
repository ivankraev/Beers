import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import styles from './Layout.module.css'
export default function Layout({ children, setIsConnected }) {
  const linkStyles = {
    textDecoration: 'none',
  }

  const disconnectHandler = () => {
    localStorage.removeItem('metamask-account')
    setIsConnected(false)
  }

  return (
    <>
      <Navbar className={styles.appbarcontainer}>
        <div className={styles.contentwrapper}>
          <h1 className={styles.textcolor}>Beans Love Beers</h1>
          <div className={styles.navwrapper}>
            <Nav className="me-auto">
              <Link style={linkStyles} to={'/'}>
                <li>Home</li>
              </Link>
              <Link style={linkStyles} to={'favourites'}>
                <li>Favourites</li>
              </Link>
              <Link style={linkStyles} to={'random'}>
                <li>Random</li>
              </Link>
              <li onClick={disconnectHandler} style={{ cursor: 'pointer' }}>
                Disconnect
              </li>
            </Nav>
          </div>
        </div>
      </Navbar>
      {children}
    </>
  )
}
