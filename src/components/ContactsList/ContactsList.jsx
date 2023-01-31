import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectVisibleContacts } from 'redux/contacts/contacts-selectors';
// import { UpdateForm } from 'components/UpdateForm/UpdateFrom';
import styles from './ContactsList.module.css';
import {
  deleteContact,
  fetchContacts,
} from 'redux/contacts/contacts-operations';
import { Avatar } from '@chakra-ui/react';
import { DeleteIcon, EditIcon } from '@chakra-ui/icons';
import { BasicUsage } from 'components/UpdateFormModal/UpdateFormModal';

// import { useEffect } from 'react';
// import { DeleteIcon } from '@chakra-ui/icons';
// import { Button } from '@chakra-ui/react';

export const ContactsList = () => {
  const [contactToUpdate, setContactToUpdate] = useState(null);
  const contacts = useSelector(selectVisibleContacts);
  const dispatch = useDispatch();

  const showUpdateForm = contactId => {
    const contact = contacts.find(({ id }) => id === contactId);
    setContactToUpdate(contact);
  };

  const closeForm = () => {
    setContactToUpdate(null);
  };

  return (
    <section className={styles.section}>
      {contacts.length > 0 ? (
        <ol>
          {contacts.map(({ id, name, number }) => {
            return (
              <li key={id}>
                <div className={styles.listItem}>
                  <Avatar size="sm" name={name} />
                  <span className={styles.nameField}>{name}</span>
                  <span className={styles.numberField}>{number}</span>
                  <button
                    className={styles.delBtn}
                    onClick={() => {
                      dispatch(deleteContact(id));
                    }}
                  >
                    <DeleteIcon boxSize={4} />
                  </button>
                  <button
                    className={styles.updateBtn}
                    onClick={() => showUpdateForm(id)}
                  >
                    Update <EditIcon boxSize={5} />
                  </button>
                  {contactToUpdate && contactToUpdate.id === id && (
                    <BasicUsage
                      contactToUpdate={contactToUpdate}
                      closeForm={closeForm}
                    />
                  )}
                </div>
              </li>
            );
          })}
        </ol>
      ) : (
        <div className={styles.showContactsBlock}>
          <button
            className={styles.filterBtn}
            onClick={() => {
              dispatch(fetchContacts());
            }}
          >
            Show contacts
          </button>
          <p>There is no contacts yet</p>
        </div>
      )}
    </section>
  );
};
