import { useEffect, useState } from "react";

import Navbar from "../components/Navbar";
import Card from "../components/Card";
import Item from "@/components/Item";

type Props = {};

const Yoga = (props: Props) => {
  const [yoga, setYoga] = useState<
    {
      category: string;
      description: string;
      id: string;
      price: number;
      location: string;
    }[]
  >([]);

  useEffect(() => {
    fetch("http://localhost:3000/activity?category=Yoga")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setYoga(data);
      });
  }, []);

  return (
    <>
      <Navbar />
      <h1 className="text-black font-semibold my-4 ml-4">Yoga</h1>
      <div className="w-screen flex flex-col items-center">
        <div className="sm:w-8/12 lg:w-6/12 grid grid-cols-1">
          {yoga.map((obj) => (
            <Item
              key={obj.id}
              image="https://cdn.generationvoyage.fr/2019/11/yoga-france-meilleurs-endroits-de-retraite.jpg"
              category={obj.category}
              location={obj.location}
              description={obj.description}
              price={obj.price}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Yoga;
