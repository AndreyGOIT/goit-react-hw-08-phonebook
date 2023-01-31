// import { Box, Flex, Text, Button, Spacer } from '@chakra-ui/react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { selectName } from 'redux/auth/auth-selectors';
import styles from './UserMenu.module.css';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  return (
    // <Box>
    //   <Flex justifyContent="space-between" alignItems="center" gap="5">
    //     <Text>{`Welcome, ${name}`}</Text>
    //     <Button type="onSubmit" onClick={() => dispatch(logout())}>
    //       Logout
    //     </Button>
    //   </Flex>
    // </Box>
    <div className={styles.userMenuBlock}>
      <h3 className={styles.userMenuTitel}>{`Welcome, ${name}`}</h3>
      <button className={styles.userMenuBtn} onClick={() => dispatch(logout())}>
        Logout
      </button>
    </div>
  );
};
