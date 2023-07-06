import PropTypes from 'prop-types';
import { OptionBtn, OptionContainer } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionContainer>
    {options.map(option => (
      <OptionBtn
        key={option}
        color={optionColors[option]}
        onClick={onLeaveFeedback}
      >
        {option}
      </OptionBtn>
    ))}
  </OptionContainer>
);

const optionColors = {
  good: 'lime',
  neutral: 'gray',
  bad: 'red',
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
