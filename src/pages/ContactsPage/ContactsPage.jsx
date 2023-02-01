import { ContactsList } from 'components/ContactsList/ContactsList';
import { Filter } from 'components/Filter/Filter';
import { Divider, Flex, Container, VStack, Box } from '@chakra-ui/react';
import { AddFormModal } from '../../components/AddFormModal/AddFormModal';

export const ContactsPage = () => {
  return (
    <Container maxW="container.lg" py={6}>
      <VStack spacing="5">
        <Box>
          <Flex justify="center" align="center" gap="10px">
            <Filter />
            <AddFormModal />
          </Flex>
        </Box>
        <Divider borderWidth="2px" borderColor="blue.100" />
        <Box>
          <ContactsList />
        </Box>
      </VStack>
    </Container>
  );
};
