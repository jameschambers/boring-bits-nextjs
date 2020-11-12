import React from 'react';
import { cssTransition, ToastContainer } from 'react-toastify';

const closeButton = ({ closeToast }) => (
  <button className="text-xs tracking-wider uppercase focus:outline-none Toastify__custom-close-button" ariaLabel="Dismiss" onClick={() => closeToast()}>
    Close
  </button>
)

const Fade = cssTransition({
  enter: 'fadeIn',
  exit: 'fadeOut',
  duration: [80, 150],
});

const ToastRack = () => (
  <ToastContainer 
    transition={Fade}
    hideProgressBar={true} 
    closeButton={closeButton} 
  />
)

export default ToastRack
