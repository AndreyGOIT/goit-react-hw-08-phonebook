import React from 'react';
import styles from './Filter.module.css';
import { useDispatch } from 'react-redux';
import { filterContacts } from 'redux/contacts/contactsSlice';
// import { SearchIcon } from '@chakra-ui/icons';

export const Filter = () => {
  const dispatch = useDispatch();

  return (
    <section>
      <label className={styles.filterBlock}>
        {/* <h2 className={styles.filterTitle}>
          Find contacts by name: <SearchIcon boxSize={5} />
        </h2> */}
        <input
          type="text"
          placeholder="Find contacts by name:"
          onChange={event => dispatch(filterContacts(event.target.value))}
        />
      </label>
    </section>
  );
};
