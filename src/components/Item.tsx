import Image from "next/image";

import { MdPlace } from "react-icons/md";
import DetailActivityModal from "./DetailActivityModal";

type Props = {
  category: string;
  location: string;
  description: string;
  image: string;
  price: number;
};

const Item = (props: Props) => {
  return (
    <div className="bg-white my-6 mx-4 md:h-52 md:flex md:items-center md:justify-between border-b-2 border-indigo-100 py-8">
      <div className="relative w-full h-full bg-white shadow rounded-md lg:w-6/12">
        <Image
          src={props.image}
          fill={true}
          alt={props.category}
          className="rounded-xl"
          objectFit="cover"
        />
      </div>
      <div className="flex items-center justify-between mt-3 mx-2 md:flex-col md:items-start md:pl-4 md:mx-0 md:h-full md:w-4/12  md:mt-0 md:py-3">
        <h2 className="text-xl font-normal">{props.category}</h2>
        <p className="text-lg flex items-center font-normal">
          <MdPlace className="text-pink-500 text-2xl mr-1" />
          {props.location}
        </p>
        {/* <p className="text-gray-700 font-light px-3">{props.description}</p> */}
        <p className="text-lg font-bold">{props.price}.00 €</p>
      </div>
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
