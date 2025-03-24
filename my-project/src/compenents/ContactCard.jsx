import React from "react";
import {HiOutlineUserCircle} from 'react-icons/hi'
import {IoMdTrash} from "react-icons.io" ;
import {RiEditCricleLine} from "react-icons/ri";


const ContactCard =({contcat}) =>{
    return <div key={contcat.id}>
    <HiOutlineUserCircle />
    <div><h2></h2>
      <p></p>
    </div>
  </div>;
;}



export default ContactCard;