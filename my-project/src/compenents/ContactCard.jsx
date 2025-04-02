import React from "react";
import { deleteDoc,doc } from "firebase/firestore";
import { HiOutlineUserCircle } from "react-icons/hi";
import { IoMdTrash } from "react-icons/io";
import { RiEditCircleLine } from "react-icons/ri";
import {db} from "../config/firebase"
import Modal from 'react-modal';


const ContactCard = ({ contact }) => {

  const deleteContact = async(id) =>{
    try {
      await deleteDoc(doc(db , "contacts" ,id));
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div
      key={contact.id}
      className="flex items-center justify-between rounded-lg bg-yellow p-2"
    >
      <div className="flex gap-1">
      <HiOutlineUserCircle className="text-4xl text-orange" />
      <div className="">
        <h2 className="front-medium"> {contact.name}</h2>
        <p className="text-sm"> {contact.email}</p>
      </div>
    </div>
      <div className="flex text-3xl">
      <RiEditCircleLine />
      < IoMdTrash onClick={()=> deleteContact(contact.id)} 
      className="text-orange"/>
      </div>
    </div>
  );
};

export default ContactCard;



