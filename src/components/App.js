import { ContactsList } from './ContactsList/ContactsList';
import Form from './Form/Form';
import Filter from './Filter/Filter';

import { RegisterForm } from './RegisterForm/RegisterForm';

export default function App() {
  return (
    <>
      <RegisterForm />
      <h1
        style={{
          margin: 15,
        }}
      >
        Phonebook
      </h1>
      <Form />
      <h2
        style={{
          margin: 15,
        }}
      >
        Contacts
      </h2>
      <Filter />
      <ContactsList />
    </>
  );
}
