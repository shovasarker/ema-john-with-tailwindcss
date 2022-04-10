import React, { useState } from 'react'
import { Link } from 'react-router-dom' 
import {signOut} from 'firebase/auth'
import { AiOutlineMenu } from 'react-icons/ai'
import logo from '../../images/Logo.svg'
import CustomLink from '../CustomLink'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase/firebase.init'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const navLinks = [
    ['/', 'Home'],
    ['/shop', 'Shop'],
    ['/orders', 'Orders Review'],
    ['/inventory', 'Manage Inventory'],
    ['/about', 'About'],
  ]
  const [user] = useAuthState(auth)
  return (
    <nav className='container px-4 md:px-10 lg:px-16 xl:px-20 2xl:px-24 py-6 flex justify-between items-center gap-4 '>
      <Link to='/'>
        <img src={logo} alt='logo' className='w-28 lg:w-full flex-shrink-0' />
      </Link>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`md:hidden px-3 py-2 rounded-sm shadow-lg bg-white`}
      >
        <AiOutlineMenu />
      </button>
      <div
        className={`absolute md:static ${
          isOpen ? 'top-20' : '-top-1/2'
        } bg-customBlue-600 w-full left-1/2 -translate-x-1/2 md:translate-x-0 flex flex-col md:flex-row justify-center md:justify-end items-center gap-5 lg:gap-8 py-5 md:py-0 text-base border-none transition-all duration-500 z-10`}
      >
        {navLinks?.map(([links, item], i) => (
          <CustomLink key={i} to={links} handleClick={() => setIsOpen(false)}>
            {item}
          </CustomLink>
        ))}
        {user ? (
          <button className='text-base text-white hover:border-b-white/70 hover:opacity-70 border-b-2 border-b-transparent transition-all  px-1 font-medium duration-300 ' onClick={() => signOut(auth)}>Sign Out</button>
        ) : (
          <CustomLink to={'/login'} handleClick={() => setIsOpen(false)}>
            Login
          </CustomLink>
        )}
      </div>
    </nav>
  )
}

export default Navbar
