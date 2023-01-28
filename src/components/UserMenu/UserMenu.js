import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { selectName } from 'redux/auth/auth-selectors';
import styles from './UserMenu.module.css';
// import { Box, Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  return (
    // <Box
    //   display="flex"
    //   alignItems="center"
    //   justifyContent="flex-end"
    //   width="100%"
    //   // py={12}
    //   // bg="lightblue"
    //   w="100%"
    //   p={4}
    //   color="black"
    // >
    //   <b>{`Welcome, ${name}`}</b>
    //   <Button ml={10} colorScheme="gray" onClick={() => dispatch(logout())}>
    //     Logout
    //   </Button>
    // </Box>
    <div className={styles.userMenuBlock}>
      <span>{`Welcome, ${name}`}</span>
      <button className={styles.userMenuBtn} onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};
