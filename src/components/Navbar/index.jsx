import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/Logo.svg'

const Navbar = () => {
  return (
    <nav className='container px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-24 py-6 flex justify-between items-center gap-4 '>
      <Link to='/'>
        <img
          src={logo}
          alt='logo'
          className='w-20 md:w-28 lg:w-full flex-shrink-0'
        />
      </Link>
      <div className='flex justify-end items-center gap-3 md:gap-8 text-base'>
        <Link
          className='text-white hover:text-customOrange-400 transition-colors duration-300'
          to='/shop'
        >
          Shop
        </Link>
        <Link
          className='text-white hover:text-customOrange-400 transition-colors duration-300'
          to='/orders'
        >
          Orders Review
        </Link>
        <Link
          className='text-white hover:text-customOrange-400 transition-colors duration-300 truncate'
          to='/inventory'
        >
          Inventory
        </Link>
        <Link
          className='text-white hover:text-customOrange-400 transition-colors duration-300'
          to={'/about'}
        >
          About us
        </Link>
      </div>
    </nav>
  )
}

export default Navbar
