import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';
// import {
//   FormControl,
//   FormLabel,
//   Input,
//   FormHelperText,
// } from '@chakra-ui/react';
// import { Button } from '@chakra-ui/react';
// import { Input } from '@chakra-ui/react';

export const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.name.value);
    console.log(event.target.email.value);
    dispatch(
      addContact({
        name: event.target.name.value,
        email: event.target.email.value,
      })
    );
  };

  return (
    // <FormControl
    //   display="flex"
    //   alignItems="center"
    //   width="100%"
    //   onSubmit={handleSubmit}
    // >
    //   <FormLabel>Name:</FormLabel>
    //   <Input type="text" name="name" placeholder="Enter your name" w="auto" />
    //   <FormLabel>Email address:</FormLabel>
    //   <Input
    //     type="email"
    //     name="email"
    //     placeholder="Enter your email"
    //     w="auto"
    //   />
    //   <FormHelperText>We'll never share your email.</FormHelperText>
    //   <Button type="submit">Save</Button>
    // </FormControl>

    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <br />
        {/* <Input type="text" name="name" placeholder="Enter your name" /> */}
        <input type="text" name="name" placeholder="Enter your name" />
      </label>
      {/* <br /> */}

      <label>
        Email:
        <br />
        {/* <Input type="email" name="email" placeholder="Enter your email" /> */}
        <input type="email" name="email" placeholder="Enter your email" />
      </label>
      {/* <Button type="submit">Save</Button> */}
      <button type="submit">Save</button>
    </form>
  );
};
