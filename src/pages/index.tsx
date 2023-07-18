import Image from "next/image";
import { Inter } from "next/font/google";
import { useEffect, useState } from "react";
import Card from "@/components/Card";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [activities, setActivities] = useState<
    { type: string; description: string }[]
  >([]);

  useEffect(() => {
    fetch("http://localhost:3000/activity")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setActivities(data);
      });
  }, []);

  activities.map((obj) => console.log(obj));

  return (
    <main className={`flex flex-col ${inter.className}`}>
      <h1 className="text-black font-semibold my-4 ml-4">
        Découvrez des activités
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {activities.map((obj) => (
          <Card type={obj.type} description={obj.description} />
        ))}
      </div>
    </main>
  );
}
