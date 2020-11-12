import React from "react"
import PropTypes from "prop-types"
import { useTranslation } from 'react-i18next';

const InlineAlert = props => {

  const { t, i18n } = useTranslation();

  if (typeof props.errors === 'undefined') {
    return null
  } else if (props.errors.length < 1) {
    return null
  } else {
    return (
      <div className='p-5 my-8 bg-red-100 rounded'>
        <h3 className="text-base font-bold text-red-600">
          {t('forms.errors.title')}
        </h3>
        <div className="mt-2 text-red-500">
            <ul className="pl-5 list-disc">
              {props.errors.map((error, index) => (
                <li className='mt-1' key={`error-${index}`}>{error}</li>
              ))}
          </ul>
        </div>
      </div>
    );
  }
}

InlineAlert.propTypes = {
  errors: PropTypes.arrayOf(PropTypes.string),
};

export default InlineAlert
