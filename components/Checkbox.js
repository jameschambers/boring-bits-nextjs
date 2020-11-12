import React from "react"
import PropTypes from "prop-types"
import { useField } from 'formik'

const Checkbox = props => {

  const [field, meta, helpers] = useField(props);

  return (
    <div className='flex items-start'>
      <input 
        type="checkbox"
        className='w-4 h-4 mt-1 text-blue-600 form-checkbox'
        {...props}
        {...field}
      />
      <label className="block ml-2 text-gray-700" htmlFor={field.name}>
        {props.label}
      </label>
    </div>
  )
}

Checkbox.propTypes = {
  checked: PropTypes.bool,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default Checkbox
