import { useState } from "react";
import Button from "./Button";
import Dropdown from "./Dropdown";
import Input from "./Input";

type Props = {
  categories: string[];
  onSearch: (activity: string, price: string) => void;
};

const ActivityFilter = ({ categories, onSearch }: Props) => {
  const [searchActivity, setSearchActivity] = useState<string>("");
  const [searchPrice, setSearchPrice] = useState<string>("");

  const searchHandler = () => {
    onSearch(searchActivity, searchPrice);
    setSearchActivity(""); // Reset searchCity to clear the input field
    setSearchPrice(""); // Reset searchPrice to clear the input field
  };

  return (
    <div className="bg-white shadow w-80 p-8">
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

export default ActivityFilter;
