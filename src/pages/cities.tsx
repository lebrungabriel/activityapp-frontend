import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";

type Props = {
  city: string;
};

const Cities = ({ city }: Props) => {
  const [cities, setCities] = useState<string[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3000/activity`)
      .then((response) => response.json())
      .then((activities: { location: string }[]) => {
        console.log(activities);
        const uniqueCities = Array.from(
          new Set(activities.map((activity) => activity.location))
        );
        console.log(uniqueCities);
        setCities(uniqueCities);
      });
  }, [city]);

  return (
    <>
      <Navbar />
      <div className="w-full grid grid-cols-3 justify-items-center gap-y-10 mt-10">
        {cities.map((city) => (
          <Link
            key={city}
            href={`/${city.toLowerCase()}`}
            className="relative w-[400px] h-[200px] flex items-center justify-center"
          >
            <Image
              src="https://img.freepik.com/vecteurs-premium/gratte-ciel-ville-dubai-illustration-style-dessin-anime-plat-fond-web_198565-53.jpg"
              alt="illustration-ville"
              fill={true}
            />
            <p className="absolute text-white font-extrabold tracking-widest uppercase text-4xl [text-shadow:_0_1px_0_rgb(0_0_0_/_40%)]">
              {city}
            </p>
          </Link>
        ))}
      </div>
    </>
  );
};

export default Cities;
