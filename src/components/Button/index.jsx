import React from 'react'

const Button = ({ children, handleClick, bgColor }) => {
  return (
    <button
      onClick={handleClick}
      className={`${bgColor} w-full flex justify-between items-center gap-2 px-4 py-2 rounded-md text-base text-white mt-4`}
    >
      {children}
    </button>
  )
}

export default Button
