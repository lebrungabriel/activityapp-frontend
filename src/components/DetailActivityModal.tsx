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
  category: string;
  description: string;
  price: number;
  location: string;
};

function DetailActivityModal({
  category,
  description,
  price,
  location,
}: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Détails</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Détail de l'activité</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <p>{category}</p>
              <p>{description}</p>
              <p>{location}</p>
              <p>{price}.00 €</p>
            </div>
          </ModalBody>

          <ModalFooter>
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
