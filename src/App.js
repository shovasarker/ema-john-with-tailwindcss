import { Route, Routes } from 'react-router-dom'
import Header from './components/Header'
import Shop from './pages/Shop'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path='/shop' element={<Shop />} />
      </Routes>
    </div>
  )
}

export default App
