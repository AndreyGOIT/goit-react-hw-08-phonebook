import { Link } from 'react-router-dom';
import styles from './AuthNavigation.module.css';

export const AuthNavigation = () => {
  return (
    <nav className={styles.nav}>
      <ul>
        <li>
          <Link to="register">Register</Link>
        </li>
        <li>
          <Link to="login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};
