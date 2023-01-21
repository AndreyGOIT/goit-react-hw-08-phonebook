import { useDispatch } from 'react-redux';
import { addUser } from 'redux/users/users-operations';

export const Form = ({ closeForm }) => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(
      addUser({
        name: event.target.element.name.value,
        email: event.target.element.email.value,
      })
    );
    closeForm();
  };

  return (
    <form on onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" />
      </label>
      <label>
        Email:
        <input type="email" name="email" />
      </label>
      <button>Save</button>
    </form>
  );
};
