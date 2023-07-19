import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Item from "@/components/Item";
import Navbar from "../components/Navbar";
import ActivityFilter from "@/components/ActivityFilter";

interface Activity {
  category: string;
  description: string;
  id: string;
  price: number;
  location: string;
}

const City = () => {
  const [activities, setActivities] = useState<Activity[]>([]);
  const [filteredActivities, setFilteredActivities] = useState<Activity[]>([]);
  const router = useRouter();
  const { city } = router.query;
  const capitalizeCity = Array.isArray(city) ? city[0] : city;
  const capitalizedWord = capitalizeCity
    ? capitalizeCity.charAt(0).toUpperCase() + capitalizeCity.slice(1)
    : "";

  useEffect(() => {
    fetch(`http://localhost:3000/activity`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setActivities(data);
      });
  }, []);

  // Filter activities by location
  const activitiesByCity = activities.filter(
    (activity) => activity.location === capitalizedWord
  );

  const handleSearch = (activity: string, price: string) => {
    let filteredData = activitiesByCity;

    if (activity) {
      filteredData = filteredData.filter((act) =>
        act.category.toLowerCase().includes(activity.toLowerCase())
      );
    }

    if (price) {
      filteredData = filteredData.filter((act) =>
        act.price.toString().includes(price)
      );
    }

    setFilteredActivities(filteredData);
  };

  // Function to get the image URL based on category
  const getImageUrl = (category: string) => {
    if (category === "Randonnée") {
      return "https://conseilsante.cliniquecmi.com/wp-content/uploads/2022/05/bienfait-randonnee-conseil-sante.jpg";
    } else if (category === "Yoga") {
      return "https://cdn.generationvoyage.fr/2019/11/yoga-france-meilleurs-endroits-de-retraite.jpg";
    } else if (category === "Vélo") {
      return "https://www.caravelis.com/xml/oi/TFO415621471835/TFO415621471835-17a/medias/jpg/photo-vttae-1_w2000.jpg";
    } else if (category === "Trail") {
      return "https://magazine.sportihome.com/wp-content/uploads/2019/05/Trail-autour-de-Paris-Ile-de-France.jpg";
    } else if (category === "Surf") {
      return "https://cdn.checkyeti.com/images/original/Surfing+%28c%29+Shutterstock.jpg";
    } else if (category === "Escalade") {
      return "https://ecolosport.fr/wp-content/uploads/2020/07/Escalade.jpg";
    } else {
      // Default image URL if category not found
      return "";
    }
  };

  return (
    <>
      <Navbar />
      <h1>Bienvenue à {capitalizedWord}</h1>
      <div className="w-screen flex justify-around items-center">
        <ActivityFilter onSearch={handleSearch} />
        <div className="sm:w-8/12 lg:w-6/12 lg:h-[550px] lg:overflow-scroll grid grid-cols-1">
          <p>Résultats : {activitiesByCity.length}</p>
          {activitiesByCity.length === 0 ? (
            <p className="text-2xl font-semibold">
              Oups, il semble qu'aucune activité ne soit disponible...
            </p>
          ) : (
            <>
              {filteredActivities.length === 0
                ? activitiesByCity.map((activity) => (
                    <Item
                      key={activity.id}
                      image={getImageUrl(activity.category)}
                      category={activity.category}
                      location={activity.location}
                      description={activity.description}
                      price={activity.price}
                    />
                  ))
                : filteredActivities.map((activity) => (
                    <Item
                      key={activity.id}
                      image={getImageUrl(activity.category)}
                      category={activity.category}
                      location={activity.location}
                      description={activity.description}
                      price={activity.price}
                    />
                  ))}
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default City;
