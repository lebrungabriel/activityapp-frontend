import { useSelector } from "react-redux";
import { UserState } from "@/reducers/user"; // Importing the UserState type from the user reducer
import Link from "next/link";
import Avatar from "../components/Avatar"; // Importing the Avatar component
import Menu from "./Menu"; // Importing the Menu component

type Props = {};

const Navbar = (props: Props) => {
  // Retrieve the user token from the redux store using useSelector
  const user = useSelector((state: { user: UserState }) => state.user.value);

  return (
    // Container div for the Navbar, with a fixed height and background color
    <div className="bg-indigo-400 h-20 w-screen flex justify-between items-center px-3">
      {/* Link to the home page */}
      <Link href="/">
        <h1 className="text-xl text-white font-bold">ActivityApp</h1>
      </Link>

      {/* Section with navigation links (hidden on large screens) */}
      <div className="hidden lg:flex justify-between items-center w-6/12 h-full">
        {/* Link to explore activities */}
        <Link href="/" className="text-white font-normal text-base">
          Explorer les activités
        </Link>

        {/* Link to explore cities */}
        <Link href="/cities" className="text-white font-normal text-base">
          Explorer les villes
        </Link>

        {/* Link to the dashboard (visible if the user is logged in) */}
        {user.token && (
          <Link
            href="/dashboard"
            className="text-white font-normal text-normal"
          >
            Mes activités
          </Link>
        )}

        {/* Avatar component */}
        <Avatar />
      </div>

      {/* Hamburger menu icon (visible on small screens) */}
      <div className="bg-white h-10 w-10 flex items-center justify-center rounded-full shadow lg:hidden">
        {/* Menu component triggered by the hamburger menu icon */}
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
