import React from 'react';
import Link from 'next/link';
import PropTypes from 'prop-types';

const Button = props => {

  const _onClick = e => {
    if (typeof props.onClick !== 'undefined') {
      e.preventDefault();
      return props.onClick()
    }
    if (props.confirm && !confirm('Are you sure?')) {
      e.preventDefault();
      return false;
    }
  }

  const {
    primary,
    type,
    label,
    size,
    wide,
    href,
    onClick
  } = props;

  let wrapperClass = 'rounded-sm  ';
  let buttonClass = 'border border-transparent cursor-pointer ';

  if (wide) {
    wrapperClass += 'block w-full ';
    buttonClass += 'w-full ';
  } else {
    wrapperClass += 'inline-flex ';
  }

  if (size === 'small') {
    buttonClass += 'px-2 py-1 text-xs leading-4 rounded-sm ';
  } else if (size === 'large') {
    buttonClass += 'py-3 px-6 text-xl leading-6 rounded ';
  } else {
    buttonClass += 'py-2 px-4 text-base leading-5 rounded-sm ';
  }

  if (primary) {
    wrapperClass += 'shadow-sm ';
    buttonClass += 'font-base text-white bg-internet-blue hover:bg-internet-blue-darker focus:outline-none ';
  } else {
    buttonClass += 'font-bold text-internet-blue border-gray-300 hover:border-gray-400 bg-transparent focus:outline-none ';
  }

  if (props.disabled) {
    buttonClass += 'opacity-50 cursor-not-allowed ';
  }

  if (type == 'link') {
    return (
      <span onClick={_onClick} className={wrapperClass}>
        <Link href={href}>
          <a className={`no-underline ${buttonClass}`}>
            {label}
          </a>
        </Link>
      </span>
    );
  } else {
    return (
      <span className={wrapperClass}>
        <button 
          disabled={props.disabled} 
          onClick={_onClick} 
          className={buttonClass} 
          type={type}>
          {label}
        </button>
      </span>
    );
  }
}

Button.propTypes = {
  primary: PropTypes.bool,
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  method: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  confirm: PropTypes.bool,
  wide: PropTypes.bool,
  type: PropTypes.string.isRequired
};

Button.defaultProps = {
  primary: true,
  href: '#',
  size: 'medium',
  onClick: undefined,
  confirm: false,
  wide: false,
};

export default Button
