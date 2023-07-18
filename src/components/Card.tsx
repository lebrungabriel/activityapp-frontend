import Image from "next/image";
import React from "react";

type Props = {
  category: string;
  description: string;
};

const Card = (props: Props) => {
  return (
    <div className="bg-white my-6 mx-4">
      <div className="relative w-full h-72 bg-white shadow rounded-md">
        <Image
          src="https://contents.mediadecathlon.com/s905225/k$d79639ef928b78aa12799d2733bbbbf4/1920x0/1503pt1228/3005xcr2254/posture_yoga.png?format=auto"
          fill={true}
          alt="activity"
          className="rounded-xl"
          objectFit="cover"
        />
      </div>
      <h2 className="font-normal text-lg px-3 mt-4">{props.category}</h2>
      <p className="text-gray-700 font-light px-3">{props.description}</p>
    </div>
  );
};

export default Card;
