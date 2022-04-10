// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBxs7gj7D_g42i5ZSSQ_Hmjtdxj5c-P2lA',
  authDomain: 'ema-john-ss0.firebaseapp.com',
  projectId: 'ema-john-ss0',
  storageBucket: 'ema-john-ss0.appspot.com',
  messagingSenderId: '258994189238',
  appId: '1:258994189238:web:3e05952c588135c2350717',
}

// Initialize Firebase
const app = initializeApp(firebaseConfig)

const auth = getAuth(app)

export default auth
