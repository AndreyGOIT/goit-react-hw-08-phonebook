// import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contacts-selectors';
// import { UpdateForm } from 'components/UpdateForm/UpdateFrom';
import styles from './ContactsList.module.css';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contacts-operations';

// import { useEffect } from 'react';
// import { DeleteIcon } from '@chakra-ui/icons';
// import { Button } from '@chakra-ui/react';

export const ContactsList = () => {
  // const [contactToUpdate, setContactToUpdate] = useState(null);
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  // const showUpdateForm = contactId => {
  //   const contact = contacts.find(({ id }) => id === contactId);
  //   setContactToUpdate(contact);
  // };

  // const closeForm = () => {
  //   setContactToUpdate(null);
  // };

  return (
    <section className={styles.section}>
      {contacts.length > 0 ? (
        <ol>
          {contacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <div className={styles.listItem}>
                  <span>{name}:</span>
                  <span>{number}</span>
                  <button
                    onClick={() => {
                      dispatch(deleteContact(id));
                    }}
                  >
                    Delete
                  </button>
                  {/* <button onClick={() => showUpdateForm(id)}>
                    Update user
                  </button> */}
                  {/* {contactToUpdate && contactToUpdate.id === id && (
                    <UpdateForm
                      contactToUpdate={contactToUpdate}
                      closeForm={closeForm}
                    />
                  )} */}
                </div>
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
