import React from 'react'
import PropTypes from 'prop-types'

import InlineAlert from '../components/InlineAlert'

const FilterClientErrors = (props) => {
  const {
    values, 
    touched,
    errors
  } = props;
  let clientErrors = [];

  Object.entries(errors).map(error => {
    if (touched[error[0]]) {
      clientErrors.push(error[1])
    }
  })

  return clientErrors
}

const FilterServerErrors = status => {
  if (typeof status !== 'undefined') {
    return [status]
  } else {
    return []
  }
}

const FormErrors = props => {
  return (
    <InlineAlert errors={FilterClientErrors(props).concat(FilterServerErrors(props.status))} />
  )
}

FormErrors.propTypes = {
  status: PropTypes.string,
  touched: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired,
  values: PropTypes.object,
}

export default FormErrors

