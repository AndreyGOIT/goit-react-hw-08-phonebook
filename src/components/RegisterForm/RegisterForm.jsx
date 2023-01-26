import {
  Input,
  InputGroup,
  InputLeftElement,
  Stack,
  FormControl,
  FormLabel,
  Button,
  Box,
} from '@chakra-ui/react';
import { EditIcon, AtSignIcon } from '@chakra-ui/icons';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';
// import styles from './RegisterForm.module.css';

export const RegisterForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
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
    dispatch(register({ name, email, password }));
    setName('');
    setEmail('');
    setPassword('');
  };

  return (
    <Box p={5} maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
      <FormControl board={1} w="100%" onSubmit={handleSubmit}>
        <FormLabel>REGISTER FORM</FormLabel>
        <Stack spacing={2}>
          <FormLabel>Name:</FormLabel>
          <InputGroup>
            <InputLeftElement
              pointerEvents="none"
              children={<EditIcon color="gray.300" />}
            />
            <Input
              type="text"
              name="name"
              value={name}
              onChange={handleChange}
            />
          </InputGroup>
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
            <InputLeftElement
              pointerEvents="none"
              children={<EditIcon color="gray.300" />}
            />
            <Input
              type="password"
              name="password"
              value={password}
              onChange={handleChange}
            />
          </InputGroup>
          <Button w={60}>Register</Button>
        </Stack>
      </FormControl>
    </Box>

    // <section className={styles.section}>
    //   <b>Register</b>
    //   <form className={styles.regFormWindow} onSubmit={handleSubmit}>
    //     <label>
    //       Name:<br></br>
    //       <input type="text" name="name" value={name} onChange={handleChange} />
    //     </label>
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
    //     <button>Register</button>
    //   </form>
    // </section>
  );
};
