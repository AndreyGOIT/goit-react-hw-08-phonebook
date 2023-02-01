import React from 'react';
import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsSlice';
// import { SearchIcon } from '@chakra-ui/icons';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <section className={styles.filterSection}>
      <label className={styles.filterBlock}>
        <input
          className={styles.filterInput}
          type="text"
          placeholder="Find contacts by name:"
          onChange={event => dispatch(filterContacts(event.target.value))}
        />
      </label>
    </section>
  );
};
