import { useSelector } from "react-redux";
import { UserState } from "@/reducers/user";
import Link from "next/link";
import Avatar from "../components/Avatar";
import Menu from "./Menu";

type Props = {};

const Navbar = (props: Props) => {
  const user = useSelector((state: { user: UserState }) => state.user.value);

  return (
    <div className="bg-indigo-400 h-20 w-screen flex justify-between items-center px-3">
      <Link href="/">
        <h1 className="text-xl text-white font-bold">ActivityApp</h1>
      </Link>
      <div className="hidden lg:flex justify-between items-center w-6/12 h-full">
        <Link href="/" className="text-white font-normal text-base">
          Explorer les activités
        </Link>
        <Link href="/cities" className="text-white font-normal text-base">
          Explorer les villes
        </Link>
        {user.token && (
          <Link
            href="/dashboard"
            className="text-white font-normal text-normal"
          >
            Mes activités
          </Link>
        )}
        <Avatar />
      </div>
      <div className="bg-white h-10 w-10 flex items-center justify-center rounded-full shadow lg:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default Navbar;
