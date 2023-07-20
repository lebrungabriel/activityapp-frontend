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
import Input from "./Input";
import { useState } from "react";
import { useSelector } from "react-redux";
import { UserState } from "@/reducers/user";

function AddActivityModal() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // Retrieve the user token from redux store
  const user = useSelector((state: { user: UserState }) => state.user.value);

  const addActivityHandler = async () => {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
      body: JSON.stringify({
        category,
        location: city,
        price,
        description,
      }),
    };

    try {
      const response = await fetch(
        "http://localhost:3000/activity/new",
        requestOptions
      );
      if (response.ok) {
        // Activity successfully added
        console.log("Activity added");
        onClose();
      } else {
        // Handle error response
        console.error("Failed to add activity");
      }
    } catch (error) {
      // Handle network or other errors
      console.error("Error:", error);
    }
  };

  return (
    <>
      <Button onClick={onOpen}>Ajouter une activité</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ajoutez une activité</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              <Input
                htmlFor="category"
                id="category"
                type="text"
                placeholder="Ajouter une catégorie"
                text="Catégorie"
                value={category}
                onChange={(e) => setCategory(e.target.value)}
              />
              <Input
                htmlFor="location"
                id="location"
                type="text"
                placeholder="Ajouter une ville"
                text="Ville"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
              <Input
                htmlFor="price"
                id="price"
                type="text"
                placeholder="Ajouter un prix"
                text="Prix"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
              <Input
                htmlFor="description"
                id="description"
                type="text"
                placeholder="Ajouter une description"
                text="Description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
          </ModalBody>

          <ModalFooter>
            <button
              onClick={onClose}
              className="h-10 w-[100px] text-indigo-400 font-medium rounded-sm mr-3"
            >
              Annuler
            </button>
            <button
              onClick={addActivityHandler}
              className="px-10 py-2 bg-indigo-400 text-white font-medium rounded-md shadow"
            >
              Ajouter
            </button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default AddActivityModal;
