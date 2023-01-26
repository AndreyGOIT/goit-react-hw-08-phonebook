import React from 'react';
// import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsSlice';
import { FormControl, FormLabel, Input } from '@chakra-ui/react';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <FormControl>
      <FormLabel>Find contacts by name:</FormLabel>
      <Input
        type="text"
        w={300}
        onChange={event => dispatch(filterContacts(event.target.value))}
      />
    </FormControl>

    // <label className={styles.filterBlock}>
    //   <p className={styles.filterTitle}>Find contacts by name</p>
    //   <input
    //     type="text"
    //     onChange={event => dispatch(filterContacts(event.target.value))}
    //   />
    // </label>
  );
};
