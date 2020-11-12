import React from "react"
import PropTypes from "prop-types"
import { useField } from 'formik'

const Input = props => {

  const [field, meta, helpers] = useField(props);

  return (
    <div className="my-4">
      <label className="block mb-2 text-gray-700" htmlFor={field.name}>
        {props.label}
      </label>
      <input 
        className={`block w-full p-3 placeholder-gray-500 border appearance-none rounded focus:outline-none ${props.hasError ? 'focus:shadow-outline-red focus:border-red-300 border-red-500' : 'focus:shadow-outline-blue focus:border-blue-500 border-gray-300'}`}
        {...field} 
        {...props} 
      />
    </div>
  );
}

Input.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string,
  hasError: PropTypes.bool,
};

export default Input
