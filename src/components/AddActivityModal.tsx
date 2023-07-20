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
  // Chakra UI's `useDisclosure` hook for managing the modal state
  const { isOpen, onOpen, onClose } = useDisclosure();

  // State variables to store input values for the activity details
  const [category, setCategory] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");

  // Retrieve the user token from the Redux store
  const user = useSelector((state: { user: UserState }) => state.user.value);

  // Function to handle adding a new activity
  const addActivityHandler = async () => {
    // Prepare the request options for the POST request to add the activity
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${user.token}`, // Include the user token in the request headers
      },
      body: JSON.stringify({
        category,
        location: city,
        price,
        description,
      }),
    };

    try {
      // Send the POST request to the server
      const response = await fetch(
        "http://localhost:3000/activity/new",
        requestOptions
      );

      // Check if the request was successful
      if (response.ok) {
        // Activity successfully added
        console.log("Activity added");
        onClose(); // Close the modal after adding the activity
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
      {/* Button to open the modal */}
      <Button onClick={onOpen}>Ajouter une activité</Button>

      {/* Modal to add a new activity */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Ajoutez une activité</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <div>
              {/* Input fields for the activity details */}
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
            {/* Button to cancel and close the modal */}
            <button
              onClick={onClose}
              className="h-10 w-[100px] text-indigo-400 font-medium rounded-sm mr-3"
            >
              Annuler
            </button>

            {/* Button to add the activity */}
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
