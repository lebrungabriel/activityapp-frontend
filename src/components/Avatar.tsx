import React from "react";
import { FaUserCircle } from "react-icons/fa";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Button,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
} from "@chakra-ui/react";
import Link from "next/link";

type Props = {};

function Avatar({}: Props) {
  return (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton
            isActive={isOpen}
            as={Button}
            style={{ backgroundColor: "transparent", borderRadius: 100 }}
          >
            <FaUserCircle className="text-4xl text-white" />
          </MenuButton>
          <MenuList>
            <MenuItem>
              <Link href="/login" className="w-full">
                Me connecter
              </Link>
            </MenuItem>
            <MenuItem>
              <Link href="/signup" className="w-full">
                M'inscrire
              </Link>
            </MenuItem>
          </MenuList>
        </>
      )}
    </Menu>
  );
}

export default Avatar;
