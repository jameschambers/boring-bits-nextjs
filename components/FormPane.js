import React from 'react'; 

const FormPane = (props) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-200">
      <div className="w-full max-w-md p-8 bg-white rounded shadow">
        {props.children}
      </div>
    </div>
  )
}

export default FormPane
