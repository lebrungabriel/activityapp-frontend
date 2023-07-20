import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  Button,
  ModalCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/hooks";

type Props = {
  category: string; // The category of the activity
  description: string; // The description of the activity
  price: number; // The price of the activity
  location: string; // The location of the activity
};

function DetailActivityModal({
  category,
  description,
  price,
  location,
}: Props) {
  // Chakra UI's `useDisclosure` hook for managing the modal state
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      {/* Button to open the modal */}
      <Button onClick={onOpen}>Détails</Button>

      {/* Modal to display the activity details */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          {/* Modal header */}
          <ModalHeader>Détail de l'activité</ModalHeader>

          {/* Modal close button */}
          <ModalCloseButton />

          <ModalBody>
            <div>
              {/* Display the category, description, location, and price of the activity */}
              <p>{category}</p>
              <p>{description}</p>
              <p>{location}</p>
              <p>{price}.00 €</p>
            </div>
          </ModalBody>

          {/* Modal footer */}
          <ModalFooter>
            {/* Button to close the modal */}
            <button
              onClick={onClose}
              className="h-10 w-[100px] text-indigo-400 font-medium rounded-sm mr-3"
            >
              Fermer
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default DetailActivityModal;
