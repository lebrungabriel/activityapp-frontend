import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Item from "@/components/Item";
import LocationFilter from "@/components/LocationFilter";
import Link from "next/link";
import { BsChevronLeft } from "react-icons/bs";

interface Activity {
  category: string;
  description: string;
  id: string;
  price: number;
  location: string;
}

interface ActivityContainerProps {
  category: string;
}

const ActivityContainer = ({ category }: ActivityContainerProps) => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3000/activity?category=${category}`)
      .then((response) => response.json())
      .then((data) => {
        setActivities(data);
        setFilteredActivities(data);
      });
  }, [category]);

  const handleSearch = (city: string, price: string) => {
    let filteredData = activities;

    if (city) {
      filteredData = filteredData.filter((activity) =>
        activity.location.toLowerCase().includes(city.toLowerCase())
      );
    }

    if (price) {
      filteredData = filteredData.filter((activity) =>
        activity.price.toString().includes(price)
      );
    }

    setFilteredActivities(filteredData);
  };

  let imageUrl: string;

  if (category === "Randonnée") {
    imageUrl =
      "https://conseilsante.cliniquecmi.com/wp-content/uploads/2022/05/bienfait-randonnee-conseil-sante.jpg";
  } else if (category === "Yoga") {
    imageUrl =
      "https://cdn.generationvoyage.fr/2019/11/yoga-france-meilleurs-endroits-de-retraite.jpg";
  } else if (category === "Vélo") {
    imageUrl =
      "https://www.caravelis.com/xml/oi/TFO415621471835/TFO415621471835-17a/medias/jpg/photo-vttae-1_w2000.jpg";
  } else if (category === "Trail") {
    imageUrl =
      "https://magazine.sportihome.com/wp-content/uploads/2019/05/Trail-autour-de-Paris-Ile-de-France.jpg";
  } else if (category === "Surf") {
    imageUrl =
      "https://cdn.checkyeti.com/images/original/Surfing+%28c%29+Shutterstock.jpg";
  } else if (category === "Escalade") {
    imageUrl = "https://ecolosport.fr/wp-content/uploads/2020/07/Escalade.jpg";
  }

  return (
    <>
      <Navbar />
      <Link
        href="/"
        className="text-black font-semibold my-4 ml-4 flex items-center"
      >
        <BsChevronLeft className="mr-3" />
        {category}
      </Link>

      <div className="w-screen flex justify-around items-center">
        <LocationFilter onSearch={handleSearch} />
        <div className="sm:w-8/12 lg:w-6/12 lg:h-[550px] lg:overflow-scroll grid grid-cols-1">
          <p>Résultats : {filteredActivities.length}</p>
          {filteredActivities.length === 0 ? (
            <p className="text-2xl font-semibold">
              Oups il semble qu'aucune activité de {category.toLowerCase()} ne
              soit disponible...
            </p>
          ) : (
            <>
              {filteredActivities.map((obj) => (
                <Item
                  key={obj.id}
                  image={imageUrl}
                  category={obj.category}
                  location={obj.location}
                  description={obj.description}
                  price={obj.price}
                />
              ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default ActivityContainer;