import React, { useState } from "react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  Button,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";

import { useDisclosure } from "@chakra-ui/react";

import { RxHamburgerMenu } from "react-icons/rx";
import { BiChevronRight } from "react-icons/bi";
import Link from "next/link";

type Props = {};

const Menu = (props: Props) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <RxHamburgerMenu onClick={onOpen} />

      <Drawer placement={"bottom"} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent className="h-[50%]">
          <DrawerBody className="h-full w-full flex flex-col justify-evenly items-center">
            <div className="h-2/6 w-full flex flex-col items-center justify-evenly">
              <Link
                href="/"
                className="font-semibold text-xl flex items-center w-10/12"
              >
                <BiChevronRight />
                Découvrir des activités
              </Link>
              <Link
                href="/cities"
                className="font-semibold text-xl flex items-center w-10/12"
              >
                <BiChevronRight /> Explorer
              </Link>
            </div>

            <div className="w-full flex flex-col items-center justify-evenly h-2/6">
              <Link
                href="/login"
                className="w-10/12 py-3 bg-indigo-400 flex justify-center items-center rounded-xl text-white"
              >
                Me connecter
              </Link>
              <p className="w-10/12 py-3 border border-indigo-400 flex justify-center items-center rounded-xl text-indigo-400">
                M'inscrire
              </p>
            </div>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
