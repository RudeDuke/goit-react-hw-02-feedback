import PropTypes from 'prop-types';
import { Text } from './Notification.styled';

const Notification = ({ text }) => <Text>{text}</Text>;

Notification.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Notification;
