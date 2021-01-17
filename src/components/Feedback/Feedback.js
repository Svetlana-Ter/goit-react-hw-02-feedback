import styles from './Feedback.module.css';
import shortId from 'shortid';
import PropTypes from 'prop-types';

function Feedback({ options = [], onLeaveFeedback }) {
  return options.map(option => (
    <button
      key={shortId.generate()}
      className={styles.btn}
      name={option.toLowerCase(option)}
      onClick={onLeaveFeedback}
    >
      {option}
    </button>
  ));
}

export default Feedback;

Feedback.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string),
  onLeaveFeedback: PropTypes.func.isRequired,
};
