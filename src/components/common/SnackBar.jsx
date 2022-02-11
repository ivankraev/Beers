import { Toast, Col, Row } from 'react-bootstrap'
import { useContext } from 'react'
import { FavouritesContext } from '../../Contexts/FavouritesContext'
import styles from './Snackbar.module.css'
export default function SnackBar() {
  const { notifications, setNotifications } = useContext(FavouritesContext)
  return (
    <Row>
      <Col xs={6}>
        <Toast
          onClose={() => setNotifications(false)}
          show={notifications}
          delay={3000}
          autohide
          className={styles.container}
        >
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>Succesfully added/removed beer</Toast.Body>
        </Toast>
      </Col>
    </Row>
  )
}
