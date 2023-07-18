import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaUserCircle } from "react-icons/fa";
import Link from "next/link";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <div className="bg-blue-50 h-20 w-full flex justify-between items-center px-3">
      <h1 className="text-xl">ActivityApp</h1>
      <div className="hidden lg:flex justify-between items-center w-5/12 h-full">
        <Link href="/">Explorer les activités</Link>
        <Link href="/cities">Autour de moi</Link>
        <FaUserCircle className="text-4xl text-blue-700" />
      </div>
      <div className="bg-white h-10 w-10 flex items-center justify-center rounded-full shadow lg:hidden">
        <RxHamburgerMenu className="text-xl text-blue-700" />
      </div>
    </div>
  );
};

export default Navbar;
