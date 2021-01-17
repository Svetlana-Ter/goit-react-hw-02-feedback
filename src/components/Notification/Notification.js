import PropTypes from 'prop-types';
import styles from './Notification.module.css';
function Notification({ message = '' }) {
  return <h1 className={styles.message}>{message}</h1>;
}

export default Notification;

Notification.propTypes = {
  message: PropTypes.string,
};
