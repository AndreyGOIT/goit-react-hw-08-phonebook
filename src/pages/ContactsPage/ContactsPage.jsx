import { ContactsList } from 'components/ContactsList/ContactsList';
// import { Form } from 'components/Form/Form';
import { Filter } from 'components/Filter/Filter';
import { Flex, Container, VStack, StackDivider, Box } from '@chakra-ui/react';
import { AddFormModal } from '../../components/AddFormModal/AddFormModal';

export const ContactsPage = () => {
  return (
    <Container p={3}>
      <VStack spacing="5" divider={<StackDivider borderColor="gray" />}>
        {/* <Box>
          <Form />
        </Box> */}
        <Box>
          <Flex justify="center" align="center" gap="10px">
            <Filter />
            <AddFormModal />
          </Flex>
        </Box>
        <Box>
          <ContactsList />
        </Box>
      </VStack>
    </Container>
  );
};
