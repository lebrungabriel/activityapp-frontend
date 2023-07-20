import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

type Props = {
  onSearch: (city: string, price: string) => void; // Function to handle the search based on city and price
};

const LocationFilter = ({ onSearch }: Props) => {
  // State variables to store the search input values
  const [searchCity, setSearchCity] = useState<string>(""); // State for the city input
  const [searchPrice, setSearchPrice] = useState<string>(""); // State for the price input

  // Function to trigger the search action
  const searchHandler = () => {
    onSearch(searchCity, searchPrice); // Call the onSearch function with city and price values
    setSearchCity(""); // Reset searchCity to clear the city input field after search
    setSearchPrice(""); // Reset searchPrice to clear the price input field after search
  };

  return (
    // Container div for the location filter
    <div className="bg-white shadow w-80 p-8">
      {/* Input for searching a city */}
      <Input
        htmlFor="city"
        id="city"
        type="text"
        placeholder="Rechercher une ville"
        text="Ville" // Label text for the city input
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)} // Event handler for city input value change
      />

      {/* Input for searching by price */}
      <Input
        htmlFor="search"
        id="price"
        type="text"
        placeholder="Rechercher un prix"
        text="Prix" // Label text for the price input
        value={searchPrice}
        onChange={(e) => {
          setSearchPrice(e.target.value); // Event handler for price input value change
        }}
      />

      {/* Button to trigger the search */}
      <Button text="Rechercher" onClick={searchHandler} />
    </div>
  );
};

export default LocationFilter;
