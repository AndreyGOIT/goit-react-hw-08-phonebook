import {
  Input,
  InputGroup,
  InputLeftElement,
  InputRightElement,
  Stack,
  FormControl,
  FormLabel,
  Button,
  Box,
} from '@chakra-ui/react';
import { AtSignIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from 'redux/auth/auth-operations';
// import styles from './LoginForm.module.css';

export const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [show, setShow] = useState(false);

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(login({ email, password }));
    setEmail('');
    setPassword('');
  };

  const handleClick = () => setShow(!show);

  return (
    <Box p={5} maxW="sm" borderWidth="2px" borderRadius="lg" overflow="hidden">
      <FormControl board={1} w="100%">
        <form onSubmit={handleSubmit}>
          <FormLabel>LOGIN FORM</FormLabel>
          <Stack spacing={2}>
            <FormLabel>Email:</FormLabel>
            <InputGroup>
              <InputLeftElement
                pointerEvents="none"
                children={<AtSignIcon color="gray.300" />}
              />
              <Input
                type="email"
                name="email"
                value={email}
                onChange={handleChange}
              />
            </InputGroup>
            <FormLabel>Password:</FormLabel>
            <InputGroup>
              {/* <InputLeftElement
              pointerEvents="none"
              children={<EditIcon color="gray.300" />}
            /> */}
              <Input
                // type="password"
                pr="4.5rem"
                type={show ? 'text' : 'password'}
                placeholder="Enter password"
                name="password"
                value={password}
                onChange={handleChange}
              />
              <InputRightElement width="4.5rem">
                <Button h="1.75rem" size="sm" onClick={handleClick}>
                  {show ? 'Hide' : 'Show'}
                </Button>
              </InputRightElement>
            </InputGroup>
            <Button w="90px" type="submit">
              Login
            </Button>
          </Stack>
        </form>
      </FormControl>
    </Box>

    // <section className={styles.section}>
    //   <b>Login</b>
    //   <form className={styles.loginFormWindow} onSubmit={handleSubmit}>
    //     <label>
    //       Email:<br></br>
    //       <input
    //         type="email"
    //         name="email"
    //         value={email}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <label>
    //       Password:<br></br>
    //       <input
    //         type="password"
    //         name="password"
    //         value={password}
    //         onChange={handleChange}
    //       />
    //     </label>
    //     <button>Login</button>
    //   </form>
    // </section>
  );
};
