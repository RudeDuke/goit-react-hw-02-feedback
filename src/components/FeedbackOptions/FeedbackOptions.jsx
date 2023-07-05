import React from 'react';
import PropTypes from 'prop-types';
import { OptionBtn, OptionContainer } from './FeedbackOptions.styled';

const FeedbackOptions = ({ options, onLeaveFeedback }) => (
  <OptionContainer>
    {options.map(option => (
      <OptionBtn
        key={option.name}
        color={option.color}
        onClick={onLeaveFeedback}
      >
        {option.name}
      </OptionBtn>
    ))}
  </OptionContainer>
);

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      color: PropTypes.string.isRequired,
    })
  ).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
