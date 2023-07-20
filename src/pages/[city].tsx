import { useRouter } from "next/router"; // Importing the useRouter hook from Next.js
import { getImageUrl } from "@/utils/activityUtils"; // Importing a utility function to get image URLs
import { useEffect, useState } from "react"; // Importing useState and useEffect hooks from React
import { ActivityType } from "@/types/ActivityType"; // Importing the ActivityType interface
import Item from "@/components/Item"; // Importing the Item component
import ActivityFilter from "@/components/ActivityFilter"; // Importing the ActivityFilter component

const categories = ["Randonnée", "Yoga", "Vélo", "Trail", "Surf", "Escalade"]; // An array of activity categories

const category = categories.map((category) => category); // Creating a new array with the same categories

const City = () => {
  const [activities, setActivities] = useState<ActivityType[]>([]); // State to store the list of all activities
  const [filteredActivities, setFilteredActivities] = useState<ActivityType[]>(
    []
  ); // State to store the filtered activities
  const router = useRouter(); // Accessing the router object from Next.js
  const { city } = router.query; // Extracting the 'city' parameter from the query string
  const capitalizeCity = Array.isArray(city) ? city[0] : city; // Capitalizing the city name if it exists
  const capitalizedWord = capitalizeCity
    ? capitalizeCity.charAt(0).toUpperCase() + capitalizeCity.slice(1)
    : ""; // Capitalized version of the city name

  useEffect(() => {
    // Fetching the list of activities from the server on component mount
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
  ); // Filtering the activities based on the selected city

  // Function to handle activity search/filtering
  const handleSearch = (activity: string, price: string) => {
    let filteredData = activitiesByCity;

    if (activity) {
      // Filter activities by category
      filteredData = filteredData.filter((act) =>
        act.category.toLowerCase().includes(activity.toLowerCase())
      );
    }

    if (price) {
      // Filter activities by price
      filteredData = filteredData.filter((activity) =>
        activity.price.toString().includes(price)
      );
    }

    setFilteredActivities(filteredData); // Update the filtered activities state
  };

  // Function to remove filters and show all activities
  const handleRemoveFilter = () => {
    setFilteredActivities([]); // Reset the filteredActivities state to empty array
  };

  return (
    <>
      {/* Top section with welcome message, activity count, and filter reset button */}
      <div className="w-full flex items-center justify-between px-10 mt-4">
        <h1 className="text-xl font-semibold">Bienvenue à {capitalizedWord}</h1>
        <p className="text-sm font-bold text-zinc-800">
          Résultats :{" "}
          {filteredActivities.length > 0
            ? filteredActivities.length
            : activitiesByCity.length}
        </p>
        <button
          className="font-semibold text-zinc-700 hover:text-black"
          onClick={handleRemoveFilter}
        >
          Effacer les filtres
        </button>
      </div>

      {/* Main content section with activity filter and activity list */}
      <div className="w-screen flex justify-around items-center">
        {/* Activity filter component */}
        <ActivityFilter onSearch={handleSearch} categories={category} />
        <div className="sm:w-8/12 lg:w-6/12 lg:h-[480px] lg:overflow-scroll grid grid-cols-1 items-start">
          {/* Conditional rendering based on the filtered activities */}
          {activitiesByCity.length === 0 ? (
            <p className="text-2xl font-semibold">
              Oups, il semble qu'aucune activité ne soit disponible...
            </p>
          ) : (
            <>
              {filteredActivities.length === 0
                ? activitiesByCity.map((activity) => (
                    // Rendering the Item component for each activity in the city
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
                    // Rendering the Item component for each filtered activity
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
