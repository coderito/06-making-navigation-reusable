import ReactDOM from 'react-dom'

export const Modal = ({onClose}) => {
  return ReactDOM.createPortal(
    <div>
      <div onClick={onClose} className="absolute inset-0 bg-gray-300 opacity-30"></div>
      <div className="absolute inset-40 p-10 bg-white">Modal</div>
    </div>,
    document.querySelector(".modal-container")
  )
}
