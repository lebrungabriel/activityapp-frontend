import { useDispatch, useSelector } from "react-redux";
import { removeTokenFromStore, UserState } from "@/reducers/user";
import Link from "next/link";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";

import { FaUserCircle } from "react-icons/fa";

type Props = {};

function Avatar({}: Props) {
  // Retrieve the user state from the Redux store
  const user = useSelector((state: { user: UserState }) => state.user.value);

  // Get the Redux dispatch function to trigger actions
  const dispatch = useDispatch();

  return (
    <Menu>
      {({ isOpen }) => (
        <>
          {/* MenuButton to show the avatar image or the user circle icon */}
          <MenuButton
            isActive={isOpen}
            as={Button}
            style={{ backgroundColor: "transparent", borderRadius: 100 }}
          >
            {/* Display the user avatar image if the user is logged in, otherwise display the user circle icon */}
            {user.token ? (
              <img
                src="https://www.voici.fr/imgre/fit/http.3A.2F.2Fprd2-bone-image.2Es3-website-eu-west-1.2Eamazonaws.2Ecom.2Fprismamedia_people.2F2017.2F06.2F30.2Fa9a1132c-920d-4d0d-af0c-7c686d72dfe5.2Ejpeg/2048x1536/quality/80/jacques-chirac.jpeg"
                alt="photo-utilisateur"
                className="w-[45px] h-[45px] object-cover rounded-full bg-white p-0.5"
              />
            ) : (
              <FaUserCircle className="text-4xl text-white" />
            )}
          </MenuButton>

          {/* MenuList to display the menu items */}
          <MenuList>
            {/* If the user is logged in, display the "Me déconnecter" option */}
            {user.token ? (
              <MenuItem onClick={() => dispatch(removeTokenFromStore())}>
                {/* Link to log out the user */}
                <Link href="/" className="w-full">
                  Me déconnecter
                </Link>
              </MenuItem>
            ) : (
              /* If the user is not logged in, display the "Me connecter" and "M'inscrire" options */
              <>
                <MenuItem>
                  {/* Link to the login page */}
                  <Link href="/login" className="w-full">
                    Me connecter
                  </Link>
                </MenuItem>
                <MenuItem>
                  {/* Link to the signup page */}
                  <Link href="/signup" className="w-full">
                    M'inscrire
                  </Link>
                </MenuItem>
              </>
            )}
          </MenuList>
        </>
      )}
    </Menu>
  );
}

export default Avatar;
