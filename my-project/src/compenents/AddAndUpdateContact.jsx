import React from 'react'
import{Field , Form,Formik} from "formik"
import Modal from './Modal'
import { collection } from 'firebase/firestore';
import { db } from '../config/firebase';

const AddAndUpdateContact = ({isOpen,onClose}) => {

    const addContact = async(contact) =>{
        try {
            const contactRef = collection (db,"contacts");
            await addDoc(contactRef ,contact);
        } catch(error){
            console.log(error);
        }
    };

  return (
    <div>
      <Modal isOpen ={isOpen} onClose = {onClose} > 
        <Formik  initalValue ={{
            name :"",
            email :"",
        }}
        onSubmit ={(values) =>{
            console.log(values);
            addContact(values);
        }}
        >
            <form action="" className='flex flex-col gap-3'>
                <div className='flex flex-col gap-1'>
                <label htmlFor="name"> Name</label>
                <Field type="email" name ="name" className="h-10 border"/>
                </div>

                <div className='flex flex-col gap-1'>
                <label htmlFor="email"> Email</label>
                <Field type="email" name ="email" className="h-10 border"/>
                </div>

                <button className='bg-orange py-1.5 border self-end' >
                    add contact
                </button>
            </form>
        </Formik>

      </Modal>
    </div>
  )
}

export default AddAndUpdateContact
