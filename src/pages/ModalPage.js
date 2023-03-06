import React, { useState } from 'react'
import { Button } from '../components/Button'
import { Modal } from '../components/Modal'

export const ModalPage = () => {
  const [showModal, setShowModal] = useState(false)

  const handleClick = () => {
    setShowModal(true)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  return (
    <div>
        <Button 
          className="rounded-md hover:bg-blue-600"
          onClick={handleClick}
          primary 
        >Show Modal</Button>
        {showModal && <Modal onClose={handleClose}/>}
    </div>
  )
}
