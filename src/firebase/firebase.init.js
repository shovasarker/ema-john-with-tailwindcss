// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyAD1E0huBdi20SKK-HH6X4cjiiPqISpES8',
  authDomain: 'ema-john-ss.firebaseapp.com',
  projectId: 'ema-john-ss',
  storageBucket: 'ema-john-ss.appspot.com',
  messagingSenderId: '981747802091',
  appId: '1:981747802091:web:d1ddffc7261ad9599883ae',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
