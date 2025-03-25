import React from 'react'
import Modal from './Modal'
const AddAndUpdateContact = ({isOpen,onClose}) => {
  return (
    <div>
      <Modal isOpen ={isOpen} onClose = {onClose} > Hi

      </Modal>
    </div>
  )
}

export default AddAndUpdateContact
