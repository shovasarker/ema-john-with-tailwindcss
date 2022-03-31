import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'

const CustomLink = ({ children, to }) => {
  const resolve = useResolvedPath(to)
  const match = useMatch({ path: resolve.pathname, end: true })
  console.log(children)
  return (
    <Link
      to={to}
      className={` ${
        match
          ? 'text-customOrange-400 hover:text-white'
          : 'text-white hover:text-customOrange-400'
      } transition-colors duration-300`}
    >
      {children}
    </Link>
  )
}

export default CustomLink
