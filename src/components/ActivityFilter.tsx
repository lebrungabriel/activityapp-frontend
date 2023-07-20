import { useState } from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Input from "./Input";

type Props = {
  categories: string[];
  onSearch: (activity: string, price: string) => void;
};

const ActivityFilter = ({ categories, onSearch }: Props) => {
  // State to manage the search input values for activity and price
  const [searchActivity, setSearchActivity] = useState<string>("");
  const [searchPrice, setSearchPrice] = useState<string>("");

  // Function to handle the search button click
  const searchHandler = () => {
    // Call the provided onSearch function with the current search values
    onSearch(searchActivity, searchPrice);

    // Reset searchActivity and searchPrice to clear the input fields after search
    setSearchActivity("");
    setSearchPrice("");
  };

  return (
    <div className="bg-white shadow w-80 p-8">
      {/* Dropdown for selecting activity category */}
      <Dropdown
        htmlFor="search"
        id="price"
        type="text"
        categories={categories}
        text="Activité"
        value={searchActivity}
        onChange={(e) => {
          setSearchActivity(e.target.value);
        }}
      />

      {/* Input field for searching by price */}
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

      {/* Button to trigger the search */}
      <Button text="Rechercher" onClick={searchHandler} />
    </div>
  );
};

export default ActivityFilter;
