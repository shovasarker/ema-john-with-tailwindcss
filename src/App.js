import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Login from './components/Login'
import NotFound from './components/NotFound'
import Shipment from './components/Shipment'
import SignUp from './components/SignUp'
import Home from './pages/Home'
import Orders from './pages/Orders'
import Shop from './pages/Shop'
import RequireAuth from './components/RequireAuth'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/shop' element={<Shop />} />
        <Route path='/orders' element={<Orders />} />
        <Route
          path='/shipment'
          element={
            <RequireAuth>
              <Shipment />
            </RequireAuth>
          }
        />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<SignUp />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )
}

export default App
