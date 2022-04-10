import React, { useState } from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import auth from '../../firebase/firebase.init'

const Shipment = () => {
  const [name, setName] = useState('')
  const [address, setAddress] = useState('')
  const [phone, setPhone] = useState('')
  //   const [error, setError] = useState('')
  const [user] = useAuthState(auth)

  const handleShippingInfo = (e) => {
    e.preventDefault()
  }

  return (
    <div className='container px-4 md:px-10 lg:px-16 xl:px-20 flex justify-center items-center'>
      <div className='w-[95%] md:w-3/5 lg:w-1/2 my-12 ml-0 mr-auto md:!mx-auto bg-customOrange-200 rounded-lg'>
        <form
          className='w-full h-full bg-white border border-customBlue-50 rounded-lg p-5 md:p-6 lg:p-7 translate-x-2.5 -translate-y-2'
          onSubmit={handleShippingInfo}
        >
          <h2 className='text-2xl md:text-3xl lg:text-4xl text-customBlue-400 text-center font-normal'>
            Shipping Information
          </h2>
          <div className='mt-5'>
            <label className='mb-2 pl-2 block' htmlFor='name'>
              Name
            </label>
            <input
              className='w-full px-2.5 py-4 border border-customBlue-50 rounded-[5px] outline-none'
              required
              type='text'
              id='name'
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder='Enter Your Name'
            />
          </div>
          <div className='mt-5'>
            <label className='mb-2 pl-2 block' htmlFor='email'>
              Email
            </label>
            <input
              className='w-full px-2.5 py-4 border border-customBlue-50 rounded-[5px] outline-none'
              readOnly
              type='email'
              id='email'
              value={user?.email}
            />
          </div>
          <div className='mt-5'>
            <label className='mb-2 pl-2 block' htmlFor='address'>
              Address
            </label>
            <input
              className='w-full px-2.5 py-4 border border-customBlue-50 rounded-[5px] outline-none'
              required
              type='text'
              id='address'
              value={address}
              onChange={(e) => setAddress(e.target.value)}
              placeholder='Enter Your Address'
            />
          </div>
          <div className='mt-5'>
            <label className='mb-2 pl-2 block' htmlFor='phone'>
              Phone
            </label>
            <input
              className='w-full px-2.5 py-4 border border-customBlue-50 rounded-[5px] outline-none'
              required
              type='number'
              id='phone'
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder='Enter Your Phone Number'
            />
          </div>

          {/* <p className='text-megenda-400 mt-3 pl-2'>{error}</p> */}
          <button type='submit' className='btn submit-btn'>
            Proceed to Checkout
          </button>
        </form>
      </div>
    </div>
  )
}

export default Shipment
