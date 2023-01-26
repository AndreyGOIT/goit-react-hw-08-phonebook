import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/auth-operations';
import { selectName } from 'redux/auth/auth-selectors';
import { Box, Button } from '@chakra-ui/react';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const name = useSelector(selectName);
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="center"
      width="100%"
      py={12}
      // bg="lightblue"
      w="100%"
      p={4}
      color="black"
    >
      This is the Box
      <p>{`Welcome ${name}`}</p>
      <Button colorScheme="gray" onClick={() => dispatch(logout())}>
        Logout
      </Button>
    </Box>
    // <div>
    //   <p>{`Welcome ${name}`}</p>
    //   <button onClick={() => dispatch(logout())}>Logout</button>
    // </div>
  );
};
