import { ContactsList } from 'components/ContactsList/ContactsList';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';

export const ContactsPage = () => {
  return (
    <>
      <Form />
      <Filter />
      <ContactsList />
    </>
  );
};
