import { useSelector } from "react-redux";
import { UserState } from "@/reducers/user";
import Link from "next/link";
import Avatar from "../components/Avatar";
import Menu from "./Menu";

type Props = {};

const Navbar = (props: Props) => {
  const user = useSelector((state: { user: UserState }) => state.user.value);

  return (
    <div className="bg-indigo-400 h-20 w-full flex justify-between items-center px-3">
      <h1 className="text-xl text-white font-bold">ActivityApp</h1>
      <div className="hidden lg:flex justify-between items-center w-5/12 h-full">
        <Link href="/" className="text-white font-normal">
          Explorer les activités
        </Link>
        <Link href="/cities" className="text-white font-normal">
          Autour de moi
        </Link>
        {user.token && (
          <Link href="/" className="text-white font-normal">
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
