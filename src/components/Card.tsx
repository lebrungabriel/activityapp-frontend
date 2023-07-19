import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  category: string;
  description: string;
  image: string;
  path: string;
};

const Card = (props: Props) => {
  return (
    <Link href={props.path} className="bg-white my-6 mx-4">
      <div className="relative w-full h-60 bg-white shadow rounded-md">
        <Image
          src={props.image}
          fill={true}
          alt="activity"
          className="rounded-xl"
          objectFit="cover"
        />
      </div>
      <h2 className="font-normal text-lg px-3 mt-4">{props.category}</h2>
      <p className="text-gray-700 font-light px-3">{props.description}</p>
    </Link>
  );
};

export default Card;
