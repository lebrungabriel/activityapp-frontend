import Image from "next/image";

import { MdPlace } from "react-icons/md";
import DetailActivityModal from "./DetailActivityModal";

type Props = {
  category: string; // The category of the activity
  location: string; // The location of the activity
  description: string; // The description of the activity (currently commented out)
  image: string; // The URL of the image representing the activity
  price: number; // The price of the activity
};

const Item = (props: Props) => {
  return (
    // Container div for the activity item
    <div className="bg-white my-6 mx-4 md:h-52 md:flex md:items-center md:justify-between border-b-2 border-indigo-100 py-8">
      {/* Container for the activity image */}
      <div className="relative w-full h-full bg-white shadow rounded-md lg:w-6/12">
        {/* Next.js Image component to display the activity image */}
        <Image
          src={props.image} // The URL of the image
          fill={true}
          alt={props.category} // Alternate text for the image (for accessibility)
          className="rounded-xl" // Styling class for the image
          objectFit="cover" // Image fit mode (cover to maintain aspect ratio and cover the container)
        />
      </div>

      {/* Container for activity details */}
      <div className="flex items-center justify-between mt-3 mx-2 md:flex-col md:items-start md:pl-4 md:mx-0 md:h-full md:w-4/12 md:mt-0 md:py-3">
        {/* Heading displaying the category of the activity */}
        <h2 className="text-xl font-normal">{props.category}</h2>

        {/* Paragraph displaying the location of the activity */}
        <p className="text-lg flex items-center font-normal">
          <MdPlace className="text-pink-500 text-2xl mr-1" />
          {props.location}
        </p>

        {/* Note: The description of the activity is currently commented out */}
        {/* <p className="text-gray-700 font-light px-3">{props.description}</p> */}

        {/* Paragraph displaying the price of the activity */}
        <p className="text-lg font-bold">{props.price}.00 €</p>
      </div>

      {/* DetailActivityModal component to show detailed activity information in a modal */}
      <DetailActivityModal
        category={props.category}
        description={props.description}
        price={props.price}
        location={props.location}
      />
    </div>
  );
};

export default Item;
