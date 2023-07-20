import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { UserState } from "@/reducers/user";
import { getImageUrl } from "@/utils/activityUtils";
import { ActivityType } from "@/types/ActivityType";
import Item from "@/components/Item";
import AddActivityModal from "@/components/AddActivityModal";

type Props = {};

const Dashboard = (props: Props) => {
  const [myActivities, setMyActivities] = useState<ActivityType[]>([]);
  const user = useSelector((state: { user: UserState }) => state.user.value);

  useEffect(() => {
    fetch(`http://localhost:3000/activity/user/${user.userId}`)
      .then((response) => response.json())
      .then((data) => setMyActivities(data));
  }, [user.userId, myActivities]);

  return (
    <>
      <div className="w-screen flex flex-col items-center">
        <div className="w-full flex justify-evenly items-center mt-10">
          <h1 className="text-xl font-semibold">Mes activités</h1>
          <AddActivityModal />
        </div>
        <div className="sm:w-8/12 lg:w-6/12 grid grid-cols-1">
          {myActivities.map((obj) => (
            <Item
              key={obj.id}
              image={getImageUrl(obj.category)}
              category={obj.category}
              location={obj.location}
              description={obj.description}
              price={obj.price}
            />
          ))}
          {myActivities.length === 0 && (
            <div className="w-full h-[400px] flex items-center justify-center">
              <p className="tracking-widest text-xl font-normal">
                Vous n'avez pas encore ajouté d'activités
              </p>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Dashboard;
