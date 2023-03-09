import PropTypes, { arrayOf } from 'prop-types';
import { Box, Button } from './Feedback.styled';

export function FeedbackOptions({ options, onLeaveFeedback }) {
  return (<Box>
    {options.map((option, index) => { return <Button onClick={onLeaveFeedback} key={index} type="button">{option}</Button> })}
  </Box>);
};

FeedbackOptions.ropTypes = {
  options: arrayOf(PropTypes.string.isRequired,).isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
}