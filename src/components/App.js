import { ContactsList } from './ContactsList/ContactsList';
import Form from './Form/Form';
import Filter from './Filter/Filter';

import { RegisterForm } from './RegisterForm/RegisterForm';
import { LoginForm } from './LoginForm/LoginForm';
import { UserMenu } from './UserMenu/UserMenu';

export default function App() {
  return (
    <>
      <UserMenu />
      <RegisterForm />
      <LoginForm />
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
