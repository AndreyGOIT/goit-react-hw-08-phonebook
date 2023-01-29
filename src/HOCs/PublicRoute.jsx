import { useSelector } from 'react-redux';
import { selectToken } from 'redux/auth/auth-selectors';
import { Navigate } from 'react-router';
import PropTypes from 'prop-types';

export const PublicRoute = ({ children, restricted = false }) => {
  const token = useSelector(selectToken);
  const shouldRedirect = token && restricted;
  return shouldRedirect ? <Navigate to="/" /> : children;
};

PublicRoute.propTypes = {
  children: PropTypes.element,
  restricted: PropTypes.bool,
};
