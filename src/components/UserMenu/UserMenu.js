import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { selectName } from 'redux/auth/auth-selectors';
import styles from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  return (
    <div className={styles.userMenuBlock}>
      <span>{`Welcome, ${name}`}</span>
      <button className={styles.userMenuBtn} onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};
