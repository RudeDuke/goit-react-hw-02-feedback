import PropTypes from 'prop-types';
import { StatList } from './Statistics.styled';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => (
  <StatList>
    <li className="feedback-stat">
      <span className="label">Good:</span>
      <span className="value">{good}</span>
    </li>
    <li className="feedback-stat">
      <span className="label">Neutral:</span>
      <span className="value">{neutral}</span>
    </li>
    <li className="feedback-stat">
      <span className="label">Bad:</span>
      <span className="value">{bad}</span>
    </li>
    <li className="feedback-stat total">
      <span className="label">Total:</span>
      <span className="value">{total}</span>
    </li>
    <li className="feedback-stat positive-percentage">
      <span className="label">Positive feedback:</span>
      <span className="value">{positivePercentage}%</span>
    </li>
  </StatList>
);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.number.isRequired,
};

export default Statistics;
