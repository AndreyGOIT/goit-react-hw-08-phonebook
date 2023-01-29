import PropTypes from 'prop-types';

export const Button = ({ text, clickHandler }) => {
  return <button onClick={clickHandler}>{text}</button>;
};

Button.propTypes = {
  text: PropTypes.string,
  clickHandler: PropTypes.func,
};
