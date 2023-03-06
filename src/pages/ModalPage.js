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
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis ligula. Curabitur sed neque orci. Donec lacinia lobortis tincidunt. Cras fringilla ipsum nec maximus malesuada. Nam non lacus venenatis, scelerisque leo a, suscipit velit. Mauris in magna eget risus faucibus placerat. Vestibulum dolor justo, lacinia ac mi eget, ullamcorper varius odio. Pellentesque pharetra dapibus leo, et posuere tellus fringilla non.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis ligula. Curabitur sed neque orci. Donec lacinia lobortis tincidunt. Cras fringilla ipsum nec maximus malesuada. Nam non lacus venenatis, scelerisque leo a, suscipit velit. Mauris in magna eget risus faucibus placerat. Vestibulum dolor justo, lacinia ac mi eget, ullamcorper varius odio. Pellentesque pharetra dapibus leo, et posuere tellus fringilla non.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis ligula. Curabitur sed neque orci. Donec lacinia lobortis tincidunt. Cras fringilla ipsum nec maximus malesuada. Nam non lacus venenatis, scelerisque leo a, suscipit velit. Mauris in magna eget risus faucibus placerat. Vestibulum dolor justo, lacinia ac mi eget, ullamcorper varius odio. Pellentesque pharetra dapibus leo, et posuere tellus fringilla non.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis ligula. Curabitur sed neque orci. Donec lacinia lobortis tincidunt. Cras fringilla ipsum nec maximus malesuada. Nam non lacus venenatis, scelerisque leo a, suscipit velit. Mauris in magna eget risus faucibus placerat. Vestibulum dolor justo, lacinia ac mi eget, ullamcorper varius odio. Pellentesque pharetra dapibus leo, et posuere tellus fringilla non.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis ligula. Curabitur sed neque orci. Donec lacinia lobortis tincidunt. Cras fringilla ipsum nec maximus malesuada. Nam non lacus venenatis, scelerisque leo a, suscipit velit. Mauris in magna eget risus faucibus placerat. Vestibulum dolor justo, lacinia ac mi eget, ullamcorper varius odio. Pellentesque pharetra dapibus leo, et posuere tellus fringilla non.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis ligula. Curabitur sed neque orci. Donec lacinia lobortis tincidunt. Cras fringilla ipsum nec maximus malesuada. Nam non lacus venenatis, scelerisque leo a, suscipit velit. Mauris in magna eget risus faucibus placerat. Vestibulum dolor justo, lacinia ac mi eget, ullamcorper varius odio. Pellentesque pharetra dapibus leo, et posuere tellus fringilla non.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis ligula. Curabitur sed neque orci. Donec lacinia lobortis tincidunt. Cras fringilla ipsum nec maximus malesuada. Nam non lacus venenatis, scelerisque leo a, suscipit velit. Mauris in magna eget risus faucibus placerat. Vestibulum dolor justo, lacinia ac mi eget, ullamcorper varius odio. Pellentesque pharetra dapibus leo, et posuere tellus fringilla non.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis ligula. Curabitur sed neque orci. Donec lacinia lobortis tincidunt. Cras fringilla ipsum nec maximus malesuada. Nam non lacus venenatis, scelerisque leo a, suscipit velit. Mauris in magna eget risus faucibus placerat. Vestibulum dolor justo, lacinia ac mi eget, ullamcorper varius odio. Pellentesque pharetra dapibus leo, et posuere tellus fringilla non.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis ligula. Curabitur sed neque orci. Donec lacinia lobortis tincidunt. Cras fringilla ipsum nec maximus malesuada. Nam non lacus venenatis, scelerisque leo a, suscipit velit. Mauris in magna eget risus faucibus placerat. Vestibulum dolor justo, lacinia ac mi eget, ullamcorper varius odio. Pellentesque pharetra dapibus leo, et posuere tellus fringilla non.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis ligula. Curabitur sed neque orci. Donec lacinia lobortis tincidunt. Cras fringilla ipsum nec maximus malesuada. Nam non lacus venenatis, scelerisque leo a, suscipit velit. Mauris in magna eget risus faucibus placerat. Vestibulum dolor justo, lacinia ac mi eget, ullamcorper varius odio. Pellentesque pharetra dapibus leo, et posuere tellus fringilla non.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non turpis ligula. Curabitur sed neque orci. Donec lacinia lobortis tincidunt. Cras fringilla ipsum nec maximus malesuada. Nam non lacus venenatis, scelerisque leo a, suscipit velit. Mauris in magna eget risus faucibus placerat. Vestibulum dolor justo, lacinia ac mi eget, ullamcorper varius odio. Pellentesque pharetra dapibus leo, et posuere tellus fringilla non.
      </p>
      <Button
        className="rounded-md hover:bg-blue-600"
        onClick={handleClick}
        primary
      >Show Modal</Button>
      {showModal && modal}
    </div>
  )
}
