import Image from "next/image";
import Link from "next/link";
import React from "react";

type Props = {
  category: string; // The category of the activity
  description: string; // The description of the activity
  image: string; // The URL of the image representing the activity
  path: string; // The path to the activity details page
};

const Card = (props: Props) => {
  return (
    // Link wrapping the entire card, directing to the activity details page
    <Link href={props.path} className="bg-white my-6 mx-4">
      {/* Div representing the card container */}
      <div className="relative w-full h-60 bg-white shadow rounded-md">
        {/* Next.js Image component to display the activity image */}
        <Image
          src={props.image} // The URL of the image
          fill={true}
          alt="activity" // Alternate text for the image (for accessibility)
          className="rounded-xl" // Styling class for the image
          objectFit="cover" // Image fit mode (cover to maintain aspect ratio and cover the container)
        />
      </div>

      {/* Heading displaying the category of the activity */}
      <h2 className="font-normal text-lg px-3 mt-4">{props.category}</h2>

      {/* Paragraph displaying the description of the activity */}
      <p className="text-gray-700 font-light px-3">{props.description}</p>
    </Link>
  );
};

export default Card;
