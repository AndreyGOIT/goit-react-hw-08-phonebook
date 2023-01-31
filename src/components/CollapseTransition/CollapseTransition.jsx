import { Button, Slide, Box, Text, Center } from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';

export const CollapseEx = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <Button bg="lightblue" onClick={onToggle}>
        <InfoIcon />
      </Button>
      <Slide direction="bottom" in={isOpen} style={{ zIndex: 10 }}>
        <Box p="10px" color="white" mt="4" bg="teal" rounded="md" shadow="md">
          <Center>
            <Text fontSize="s" mb="5" py="3">
              You can use the app to create, store and edit contacts, both
              personal and work. To access the features of the application,
              please register or, if you already have an account, log in.
            </Text>
          </Center>
        </Box>
      </Slide>
    </>
  );
};
