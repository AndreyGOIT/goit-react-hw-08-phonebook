import { useDispatch } from 'react-redux';
import { addContact } from 'redux/contacts/contacts-operations';

export const Form = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    console.log(event.target.elements.name.value);
    console.log(event.target.elements.number.value);
    dispatch(
      addContact({
        name: event.target.elements.name.value,
        number: event.target.elements.number.value,
      })
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <br />
        <input type="text" name="name" placeholder="Enter your name" />
      </label>
      <br />
      <label>
        Number:
        <br />
        <input type="number" name="number" placeholder="Enter your number" />
      </label>
      <button type="submit">Save</button>
    </form>
  );
};

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
