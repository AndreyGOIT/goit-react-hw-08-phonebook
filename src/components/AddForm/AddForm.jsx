import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
import {
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
} from '@chakra-ui/react';
import { Button } from '@chakra-ui/react';
// import { Input } from '@chakra-ui/react';

export const Form = ({ closeForm }) => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      addContact({
        name: event.target.element.name.value,
        email: event.target.element.email.value,
      })
    );
    closeForm();
  };

  return (
    <FormControl
      display="flex"
      alignItems="center"
      width="100%"
      onSubmit={handleSubmit}
    >
      <FormLabel>Name:</FormLabel>
      <Input type="text" name="name" placeholder="Enter your name" w="auto" />
      <FormLabel>Email address:</FormLabel>
      <Input
        type="email"
        name="email"
        placeholder="Enter your email"
        w="auto"
      />
      <FormHelperText>We'll never share your email.</FormHelperText>
      <Button>Save</Button>
    </FormControl>

    // <form on onSubmit={handleSubmit}>
    //   <label>
    //     Name:
    //     <br />
    //     <Input type="text" name="name" placeholder="Enter your name" w="auto" />
    //   </label>
    //   {/* <br /> */}

    //   <label>
    //     Email:
    //     <br />
    //     <Input
    //       type="email"
    //       name="email"
    //       placeholder="Enter your email"
    //       w="auto"
    //     />
    //   </label>
    //   <Button>Save</Button>
    // </form>
  );
};
