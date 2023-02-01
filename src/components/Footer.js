import { Box, Divider, Flex, Text } from '@chakra-ui/react';
export const Footer = () => {
  return (
    <Box bgColor="lightblue">
      <Flex flexDirection="column" justifyContent="center" alignItems="center">
        <Divider borderWidth="2px" borderColor="blue.100" />
        <Box>
          <Text py={4} fontSize={12}>
            Created by Andy Erokhin (GoIT Academy). All rights reserved © 2023
          </Text>
        </Box>
      </Flex>
    </Box>
  );
};
