import { Toast, Col, Row } from "react-bootstrap";
import { connect } from "react-redux";
import { triggerNotificationsOff } from "../../redux/notifications/notifications.actions";
import styles from "./Snackbar.module.css";
function SnackBar({ notificationsOff, open, msg }) {
  return (
    <Row>
      <Col xs={6}>
        <Toast
          onClose={() => notificationsOff()}
          show={open}
          delay={3000}
          autohide
          className={styles.container}
        >
          <Toast.Header>
            <strong className="me-auto">Notification</strong>
          </Toast.Header>
          <Toast.Body>{msg}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

const mapDispatchToProps = (dispatch) => ({
  notificationsOff: () => dispatch(triggerNotificationsOff()),
});

const mapStateToProps = (state) => ({
  open: state.notifications.open,
  msg: state.notifications.message,
});

export default connect(mapStateToProps, mapDispatchToProps)(SnackBar);
