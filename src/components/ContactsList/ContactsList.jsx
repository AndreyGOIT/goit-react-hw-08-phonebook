import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contacts-selectors';
import styles from './ContactsList.module.css';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contacts-operations';
// import { useEffect } from 'react';
// import { DeleteIcon } from '@chakra-ui/icons';
// import { Button } from '@chakra-ui/react';

export const ContactsList = () => {
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  // useEffect(() => {
  //   dispatch(fetchContacts());
  // }, [dispatch]);

  console.log(contacts);
  return (
    <section className={styles.section}>
      {contacts.length > 0 ? (
        <ol>
          {contacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                {name}: {number}
                <button
                  onClick={() => {
                    dispatch(deleteContact(id));
                  }}
                >
                  Delete
                  {/* <DeleteIcon /> */}
                </button>
              </li>
            );
          })}
        </ol>
      ) : (
        <>
          <button
            className={styles.filterBtn}
            onClick={() => {
              dispatch(fetchContacts());
            }}
          >
            Show contacts
          </button>
          <p>There is no contacts yet</p>
        </>
      )}
    </section>
  );
};
