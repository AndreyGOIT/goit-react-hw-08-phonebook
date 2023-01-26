// import { ContactsList } from 'components/ContactsList/ContactsList';

// export const ContactsPage = () => {
//   return <ContactsList />;
// };

// import { ContactsList } from './ContactsList/ContactsList';
// import Form from './Form/Form';
// import Filter from './Filter/Filter';

// import { RegisterForm } from './RegisterForm/RegisterForm';
// import { LoginForm } from './LoginForm/LoginForm';
// import { UserMenu } from './UserMenu/UserMenu';

// export default function App() {
//   return (
//     <>
//       <UserMenu />
//       <RegisterForm />
//       <LoginForm />
//       <h1
//         style={{
//           margin: 15,
//         }}
//       >
//         Phonebook
//       </h1>
//       <Form />
//       <h2
//         style={{
//           margin: 15,
//         }}
//       >
//         Contacts
//       </h2>
//       <Filter />
//       <ContactsList />
//     </>
//   );
// }

// import { useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { Button } from 'components/Button/Button';
import { ContactsList } from 'components/ContactsList/ContactsList';
import { Form } from 'components/AddForm/AddForm';
import { Filter } from 'components/Filter/Filter';
// import { fetchContacts } from 'redux/contacts/contacts-operations';
// import {
//   selectIsLoading,
//   selectError,
// } from 'redux/contacts/contacts-selectors';

export const ContactsPage = () => {
  // const [isListShown, setIsListShown] = useState(false);
  // const [isFormShown, setIsFormShown] = useState(false);
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  // const showContactsList = () => {
  //   setIsListShown(true);
  //   dispatch(fetchContacts());
  // };
  // const showForm = () => {
  //   setIsFormShown(true);
  // };
  // const closeForm = () => {
  //   setIsFormShown(false);
  // };
  return (
    <>
      <Form />
      <Filter />
      <ContactsList />
      {/* {isListShown ? (
        <>
          <Filter />
          <ContactsList /> */}
      {/* {!isFormShown && !isLoading && !error && (
            <Button text="Add contact" clickHandler={showForm} />
          )} */}
      {/* {isFormShown && <Form closeForm={closeForm} />} */}
      {/* <Form closeForm={closeForm} />
        </>
      ) : (
        <Button text="Show contacts" clickHandler={showContactsList} />
      )}
      {error && <p>{error.message}</p>} */}
    </>
  );
};
