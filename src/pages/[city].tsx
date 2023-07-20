import { useRouter } from "next/router";
import { getImageUrl } from "@/utils/activityUtils";
import { useEffect, useState } from "react";
import { ActivityType } from "@/types/ActivityType";
import Item from "@/components/Item";
import ActivityFilter from "@/components/ActivityFilter";

const City = () => {
  const [activities, setActivities] = useState<ActivityType[]>([]);
  const [filteredActivities, setFilteredActivities] = useState<ActivityType[]>(
    []
  );
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

  // Function to remove filters and show all activities
  const handleRemoveFilter = () => {
    setFilteredActivities([]);
  };

  return (
    <>
      <div className="w-full flex items-center justify-between px-10 mt-4">
        <h1 className="text-xl font-semibold">Bienvenue à {capitalizedWord}</h1>
        <p className="text-sm font-bold text-zinc-800">
          Résultats : {activitiesByCity.length}
        </p>
        <button
          className="font-semibold text-zinc-700 hover:text-black"
          onClick={handleRemoveFilter}
        >
          Effacer les filtres
        </button>
      </div>
      <div className="w-screen flex justify-around items-center">
        <ActivityFilter onSearch={handleSearch} />
        <div className="sm:w-8/12 lg:w-6/12 lg:h-[480px] lg:overflow-scroll grid grid-cols-1 items-start">
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
