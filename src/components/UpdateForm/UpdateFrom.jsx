import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updateContact } from 'redux/contacts/contacts-operations';
import PropTypes from 'prop-types';
import styles from './UpdateForm.module.css';

export const UpdateForm = ({ closeForm, contactToUpdate }) => {
  const [name, setName] = useState(contactToUpdate.name);
  const [number, setNumber] = useState(contactToUpdate.number);

  const dispatch = useDispatch();

  const handleChange = ({ target: { name, value } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'number':
        setNumber(value);
        break;
      default:
        break;
    }
  };

  const handleSubmit = event => {
    event.preventDefault();
    dispatch(updateContact({ ...contactToUpdate, name, number }));
    closeForm();
  };

  return (
    <form className={styles.updateWindow} onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          className={styles.updateFormInput}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
        />
      </label>
      <label>
        Number:
        <input
          className={styles.updateFormInput}
          type="number"
          name="number"
          value={number}
          onChange={handleChange}
        />
      </label>
      <button className={styles.updateFormBtn} type="submit">
        Update
      </button>
    </form>
  );
};

UpdateForm.propTypes = {
  closeForm: PropTypes.func.isRequired,
  contactToUpdate: PropTypes.object.isRequired,
};
