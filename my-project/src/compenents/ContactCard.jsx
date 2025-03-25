import React from "react";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons.io";
import { RiEditCricleLine } from "react-icons/ri";

const ContactCard = ({ contcat }) => {
  return (
    <div
      key={contcat.id}
      className="flex items-center justify-around rounded-lg bg-yellow p-2"
    >
      <div className="flex gap-1">
      <HiOutlineUserCircle className="text-4xl text-orange" />
      <div className="">
        <h2 className="front-medium"> {contcat.name}</h2>
        <p className="text-sm"> {contcat.email}</p>
      </div>
    </div>
      <div className="flex text-3xl">
      <RiEditCricleLine />
      < IoMdTrash className="text-orange"/>
      </div>
    </div>
  );
};

export default ContactCard;
