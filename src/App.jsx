import {HashRouter, Routes, Route} from 'react-router-dom'
import './App.css'
import RootPage from './pages/RootPage'
import ProductDetail from './pages/ProductDetail'
import Login from './pages/Login'
import Purchases from './pages/Purchases'


function App() {

  return (
    <HashRouter>
      <Routes>
        <Route path='/' element ={<RootPage />}/>
        <Route path='/login' element={<Login />}/>
        <Route path='/purchases' element={<Purchases />}/>
        <Route path='/product/:id' element ={<ProductDetail />} />
      </Routes>
    </HashRouter>
  )
}

export default App