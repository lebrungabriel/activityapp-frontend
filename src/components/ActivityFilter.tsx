import { useState } from "react";
import Button from "./Button";
import Input from "./Input";

type Props = {
  onSearch: (activity: string, price: string) => void;
};

const ActivityFilter = ({ onSearch }: Props) => {
  const [searchActivity, setSearchActivity] = useState<string>("");
  const [searchPrice, setSearchPrice] = useState<string>("");

  const searchHandler = () => {
    onSearch(searchActivity, searchPrice);
    setSearchActivity(""); // Reset searchCity to clear the input field
    setSearchPrice(""); // Reset searchPrice to clear the input field
  };

  return (
    <div className="bg-white shadow w-80 p-8">
      <Input
        htmlFor="activity"
        id="activity"
        type="text"
        placeholder="Rechercher une activité"
        text="Activité"
        value={searchActivity}
        onChange={(e) => setSearchActivity(e.target.value)}
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
