import { useEffect, useState } from "react";
import Navbar from "./compenents/Navbar";
import { CiSearch } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";
import {collection,getDocs} from 'firebase/firestore';
import {db} from "./config/firebase";
import {HiOutlineUserCircle} from 'react-icons/hi'
const App = () => {

  const  [contacts, setContacts] = useState([]);

  useEffect(()=> {
    const getContacts = async() => {

      try {
        const contactsRef = collection(db , "contacts");
        const contactsSnapshot = await getDocs(contactsRef);
        const contactLists = contactsSnapshot.docs.map((doc) => 
         {
          return{
          id:doc.id,
          ...doc.data()
          };
        });

        setContacts( contactLists);
      } catch (error) {
        console.log(error);
      }
    };

    getContacts();
  },[]);

  return (
    <div className="mx-auto max-w-[370px] px-4">
      <Navbar />
      <div className="flex gap-2">
      <div className="relative flex item-center">
        <CiSearch className="absolute ml-1 text-3xl text-white" />
        <input
          type="text"
          className=" h-10 flex-grow  
          rounded-md border border-white bg-transparent pl-9 text-white"
          id=""
        />
      </div>
     
      <CiCirclePlus className="text-5xl cursor-pointer text-white" />
     
      </div>

      <div>
        {
          contacts.map((contcat) => 
          <div key={contcat.id}>
            <HiOutlineUserCircle />
            <div><h2></h2>
              <p></p>
            </div>
          </div>
          )}
      </div>
    </div>
  );
};

export default App;
