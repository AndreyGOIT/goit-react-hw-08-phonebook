// import { Heading, Box } from '@chakra-ui/react';

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
    // <Box display="flex" justifyContent="center">
    //   <Heading p="10px">Hello from Contact`s APP!</Heading>
    // </Box>
    <Flex height="600" justify="center" align="center">
      <Container p="10px" maxW="conatiner.lg">
        <Box as="section" py="3">
          <Center>
            <Heading as="h1" fontSize="25" mb="5">
              Welcome to Contact Book app
            </Heading>
          </Center>
          <Divider />
          {/* <Text fontSize="x1" mb="5" py="3">
          You can use the app to create, store and edit contacts, both personal
          and work. To access the features of the application, please register
          or, if you already have an account, log in.
        </Text>
        <Divider /> */}
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
    // <h1>Hello from Contact`s APP!</h1>
  );
};
