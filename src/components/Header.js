import { useSelector } from 'react-redux';
import { Box, Container, Flex } from '@chakra-ui/react';
import { Navigation } from './Navigation/Navigation';
import { UserMenu } from './UserMenu/UserMenu';
import { AuthNavigation } from './AuthNavigation/AuthNavigation';
import { selectToken } from 'redux/auth/auth-selectors';

export const Header = () => {
  const token = useSelector(selectToken);
  return (
    <Box as="header" py={2} bg="lightblue">
      <Container py={4} h="80px" maxW="100%">
        <Flex justifyContent="space-between" alignItems="center">
          <Navigation />
          {token ? <UserMenu /> : <AuthNavigation />}
        </Flex>
      </Container>
    </Box>
  );
};
