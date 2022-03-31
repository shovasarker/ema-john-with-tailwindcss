import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Orders from './pages/Orders'
import Shop from './pages/Shop'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/shop' element={<Shop />} />
        <Route path='/orders' element={<Orders />} />
      </Routes>
    </div>
  )
}

export default App
