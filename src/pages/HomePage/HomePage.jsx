import {
  Container,
  Box,
  Heading,
  Text,
  Divider,
  Center,
  Flex,
} from '@chakra-ui/react';
import { CollapseEx } from '../../components/CollapseTransition/CollapseTransition';

export const HomePage = () => {
  return (
    <Flex height="600" justify="center" align="center">
      <Container p="10px" maxW="conatiner.lg">
        <Box as="section" py="3">
          <Center>
            <Heading as="h1" fontSize="35" mb="5">
              Welcome to Contact Book app
            </Heading>
          </Center>
          <Divider />
          <Center>
            <Text fontSize="17" py="3">
              Your contact book is available for use 24 hours a day, seven days
              a week.
            </Text>
          </Center>
          <Center>
            <CollapseEx />
          </Center>
        </Box>
      </Container>
    </Flex>
  );
};
