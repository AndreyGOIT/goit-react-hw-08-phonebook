import { Link } from 'react-router-dom';
import styles from './AuthNavigation.module.css';

export const AuthNavigation = () => {
  return (
    <nav className={styles.nav}>
      <ul className={styles.authNavList}>
        <li className={styles.authNavListItem}>
          <Link to="register">Register</Link>
        </li>
        <li className={styles.authNavListItem}>
          <Link to="login">Login</Link>
        </li>
      </ul>
    </nav>
  );
};
