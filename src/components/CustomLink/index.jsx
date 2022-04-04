import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const CustomLink = ({ children, to, handleClick }) => {
  const resolve = useResolvedPath(to)
  const match = useMatch({ path: resolve.pathname, end: true })
  return (
    <Link
      to={to}
      onClick={handleClick}
      className={` ${
        match
          ? 'text-lg text-customOrange-400 hover:border-b-customOrange-400/70 '
          : 'text-base text-white hover:border-b-white/70'
      } hover:opacity-70 border-b-2 border-b-transparent transition-all  px-1 font-medium duration-300`}
    >
      {children}
    </Link>
  )
}

export default CustomLink
