import {
  Container,
  Box,
  Heading,
  Text,
  // Divider,
  Center,
  Flex,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { CollapseEx } from '../../components/CollapseTransition/CollapseTransition';
import { FaMoon, FaSun } from 'react-icons/fa';

export const HomePage = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  return (
    <Flex height="600" justify="center" align="center">
      <Container p="10px" maxW="conatiner.lg">
        <Box as="section" py="3">
          <IconButton
            aria-label="toggle theme"
            rounded="full"
            size="xs"
            position="absolute"
            top={3}
            right={3}
            onClick={toggleColorMode}
            icon={colorMode === 'dark' ? <FaSun /> : <FaMoon />}
          />
          <Center>
            <Heading as="h1" fontSize="35" mb="5">
              Welcome to Contact Book app <PhoneIcon mb="6px" boxSize={8} />
            </Heading>
          </Center>
          {/* <Divider size="xl" /> */}
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
