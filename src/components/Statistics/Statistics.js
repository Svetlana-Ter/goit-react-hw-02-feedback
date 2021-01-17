import styles from './Statistics.module.css';
import PropTypes from 'prop-types';

function Statistics({
  good = 0,
  neutral = 0,
  bad = 0,
  total = 0,
  positivePercent = 0,
}) {
  return (
    <div className={styles.feedbackBlock}>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercent}%</p>
    </div>
  );
}

export default Statistics;
Statistics.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  positivePercent: PropTypes.number,
};
