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

  const actionBar = <div>
    <Button onClick={handleClose} primary>I Accept</Button>
  </div>

  const modal = <Modal onClose={handleClose} actionBar={actionBar}>
    <p>lorem ipsun bla bla bla</p>
  </Modal>

  return (
    <div>
      <Button
        className="rounded-md hover:bg-blue-600"
        onClick={handleClick}
        primary
      >Show Modal</Button>
      {showModal && modal}
    </div>
  )
}
