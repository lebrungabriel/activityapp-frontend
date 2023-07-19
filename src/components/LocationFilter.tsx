import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

type Props = {
  onSearch: (city: string, price: string) => void;
};

const LocationFilter = ({ onSearch }: Props) => {
  const [searchCity, setSearchCity] = useState<string>("");
  const [searchPrice, setSearchPrice] = useState<string>("");

  const searchHandler = () => {
    onSearch(searchCity, searchPrice);
    setSearchCity(""); // Reset searchCity to clear the input field
    setSearchPrice(""); // Reset searchPrice to clear the input field
  };

  return (
    <div className="bg-white shadow w-80 p-8">
      <Input
        htmlFor="city"
        id="city"
        type="text"
        placeholder="Rechercher une ville"
        text="Ville"
        value={searchCity}
        onChange={(e) => setSearchCity(e.target.value)}
      />
      <Input
        htmlFor="search"
        id="price"
        type="text"
        placeholder="Rechercher un prix"
        text="Prix"
        value={searchPrice}
        onChange={(e) => {
          setSearchPrice(e.target.value);
        }}
      />
      <Button text="Rechercher" onClick={searchHandler} />
    </div>
  );
};

export default LocationFilter;
