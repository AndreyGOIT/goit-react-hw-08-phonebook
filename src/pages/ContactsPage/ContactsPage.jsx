import { ContactsList } from 'components/ContactsList/ContactsList';
import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { Container, VStack, StackDivider, Box } from '@chakra-ui/react';

export const ContactsPage = () => {
  return (
    <Container p={3}>
      <VStack spacing="5" divider={<StackDivider borderColor="gray" />}>
        <Box>
          <Form />
        </Box>
        <Box>
          <Filter />
        </Box>
        <Box>
          <ContactsList />
        </Box>
      </VStack>
    </Container>
  );
};
