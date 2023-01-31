import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
} from '@chakra-ui/react';
import { useDisclosure } from '@chakra-ui/react';
import { UpdateForm } from 'components/UpdateForm/UpdateFrom';

export const BasicUsage = ({ closeForm, contactToUpdate }) => {
  const { onOpen, onClose } = useDisclosure();
  return (
    <>
      <Modal isOpen={onOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Contact to update</ModalHeader>
          <ModalBody>
            <UpdateForm
              contactToUpdate={contactToUpdate}
              closeForm={closeForm}
            />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
