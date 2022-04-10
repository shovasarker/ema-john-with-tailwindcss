import React, { useEffect, useRef, useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { FcGoogle } from 'react-icons/fc'

import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from 'react-firebase-hooks/auth'
import auth from '../../firebase/firebase.init'

const Login = () => {
  const passwordRef = useRef(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const navigate = useNavigate()
  const location = useLocation()
  const from = location?.state?.from?.pathname || -1
  const [signInWithEmailAndPassword, user, loading, hookError] =
    useSignInWithEmailAndPassword(auth)

  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth)

  useEffect(() => {
    if (user || googleUser) {
      setEmail('')
      setPassword('')
      navigate(from, { replace: true })
    }

    if (loading || googleLoading) {
      setError('Signing in User...')
    }

    if (hookError) {
      setError(hookError.message)
    }
    if (googleError) {
      setError(googleError.message)
    }
  }, [
    user,
    loading,
    hookError,
    navigate,
    googleUser,
    googleLoading,
    googleError,
    from,
  ])

  const handleLogin = (e) => {
    e.preventDefault()

    if (!email || !password) {
      setError('Please! Fill out Every Fields')
      return
    }
    if (password?.length < 6) {
      passwordRef.current?.focus()
      passwordRef.current?.classList.add(' error')
      setError('Password must be atleast 6 characters long')
      return
    }
    if (passwordRef.current?.classList.contains('error')) {
      passwordRef.current?.classList.remove('error')
    }
    setError('')
    signInWithEmailAndPassword(email, password)
  }

  return (
    <div className='container px-4 md:px-10 lg:px-16 xl:px-20 flex justify-center items-center'>
      <div className='w-[95%] md:w-3/5 lg:w-1/2 my-12 ml-0 mr-auto md:!mx-auto bg-customOrange-200 rounded-lg'>
        <form
          className='w-full h-full bg-white border border-customBlue-50 rounded-lg p-5 md:p-6 lg:p-7 translate-x-2.5 -translate-y-2'
          onSubmit={handleLogin}
        >
          <h2 className='text-2xl md:text-3xl lg:text-4xl text-customBlue-400 text-center font-normal'>
            Login
          </h2>
          <div className='mt-5'>
            <label className='mb-2 pl-2 block' htmlFor='email'>
              Email
            </label>
            <input
              className='w-full px-2.5 py-4 border border-customBlue-50 rounded-[5px] outline-none'
              required
              type='email'
              id='email'
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder='Enter Your Email'
            />
          </div>
          <div className='mt-5'>
            <label className='mb-2 pl-2 block' htmlFor='password'>
              Password
            </label>
            <input
              className='w-full px-2.5 py-4 border border-customBlue-50 rounded-[5px] outline-none'
              required
              ref={passwordRef}
              type='password'
              id='password'
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder='Enter Your Password'
            />
          </div>
          <p className='text-megenda-400 mt-3 pl-2'>{error}</p>
          <button type='submit' className='btn submit-btn'>
            Login
          </button>

          <p className='text-center text-sm text-customBlue-400 font-normal mt-5'>
            New to Ema-John?{' '}
            <Link className='text-customOrange-400' to={'/signup'}>
              Create a New Account
            </Link>
          </p>
          <div className='w-full flex justify-center items-center gap-3 mt-5'>
            <div className='w-[38%] md:w-2/5 h-[1px] bg-customBlue-50'></div>
            <span>or</span>
            <div className='w-[38%] md:w-2/5 h-[1px] bg-customBlue-50'></div>
          </div>

          <button
            onClick={() => signInWithGoogle()}
            type='button'
            className='btn google-btn'
          >
            <FcGoogle className='w-6 h-6' />
            Continue With Google
          </button>
        </form>
      </div>
    </div>
  )
}

export default Login
