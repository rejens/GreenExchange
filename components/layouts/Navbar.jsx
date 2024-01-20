"use client";
import React, { useRef } from "react";
import { Button, ButtonGroup } from "@chakra-ui/react";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";
import { AiFillGithub } from "react-icons/ai";

function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div className='p-2 flex items-center justify-between'>
      <div className='flex'>
        <img
          src='https://i.ibb.co/8PTpPkT/image.png'
          alt='logo'
          className='h-8 object-fit'
        />
      </div>

      <div className='flex space-x-4'>
        <Button
          ref={btnRef}
          colorScheme='teal'
          onClick={() => {
            window.open(
              "https://github.com/ABChapagain/GreenExchange",
              "_blank"
            );
          }}
        >
          <AiFillGithub />
        </Button>
      </div>
      <Drawer
        isOpen={isOpen}
        placement='right'
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <Input placeholder='Type here...' />
          </DrawerBody>

          <DrawerFooter>
            <Button variant='outline' mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme='blue'>Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default Navbar;
