import { useEffect, useState } from "react";
import Link from "next/link";
import { ActivityType } from "@/types/ActivityType";
import { fetchActivities } from "@/api/activities";
import Item from "@/components/Item";
import LocationFilter from "@/components/LocationFilter";
import { BsChevronLeft } from "react-icons/bs";
import LoadingSkeleton from "./LoadingSkeleton";

interface ActivityContainerProps {
  category: string;
}

const ActivityContainer = ({ category }: ActivityContainerProps) => {
  // State to hold the list of all activities and the filtered activities
  const [activities, setActivities] = useState<ActivityType[]>([]);
  const [filteredActivities, setFilteredActivities] = useState<ActivityType[]>(
    []
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);

  // Fetch activities based on the selected category when the component mounts or when the category changes
  useEffect(() => {
    setIsLoading(true);
    fetchActivities(category)
      .then((data) => {
        setActivities(data);
        setFilteredActivities(data);
      })
      .catch((error) => {
        console.error("Error fetching activities:", error);
        // Handle error if needed
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [category]);

  // Function to handle filtering activities based on city and price
  const handleSearch = (city: string, price: string) => {
    let filteredData = activities;

    if (city) {
      // Filter activities by city (case-insensitive search)
      filteredData = filteredData.filter((activity) =>
        activity.location.toLowerCase().includes(city.toLowerCase())
      );
    }

    if (price) {
      // Filter activities by price (exact match)
      filteredData = filteredData.filter((activity) =>
        activity.price.toString().includes(price)
      );
    }

    setFilteredActivities(filteredData);
  };

  // Function to reset the filters and show all activities again
  const handleRemoveFilter = () => {
    setFilteredActivities(activities);
  };

  // Determine the image URL based on the selected category
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
      {/* Header section */}
      <div className="w-screen flex items-center justify-between px-10 mt-4">
        <Link
          href="/"
          className="text-black font-semibold my-4 ml-4 flex items-center"
        >
          <BsChevronLeft className="mr-3" />
          {category}
        </Link>
        <p>Résultats : {filteredActivities.length}</p>
        <button
          className="font-semibold text-zinc-700 hover:text-black"
          onClick={handleRemoveFilter}
        >
          Effacer les filtres
        </button>
      </div>

      {/* Main content section */}
      <div className="w-screen flex justify-around items-center">
        {/* Location filter section */}
        <LocationFilter onSearch={handleSearch} />

        {/* Activity items */}
        <div className="sm:w-8/12 lg:w-6/12 lg:h-[480px] lg:overflow-scroll grid grid-cols-1">
          {isLoading ? (
            // Display the skeleton component while fetching data
            <LoadingSkeleton />
          ) : filteredActivities.length === 0 ? (
            // Display a message if no activities are available for the selected category and filters
            <p className="text-2xl font-semibold">
              Oups il semble qu'aucune activité de {category.toLowerCase()} ne
              soit disponible...
            </p>
          ) : (
            // Display the filtered activities
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
