
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MyNav from './components/mynav'
import Home from './views/home'
import Manga from './views/manga'
import 'bootstrap/dist/css/bootstrap.min.css'
import Shop from './views/shop'
import { useState } from 'react'


function App() {

  const [count, setCount] = useState(0)

  return (
    <>
    
      <MyNav />
      <Routes>
        <Route children path='/' element={<Home />} />
        <Route children path='/manga' element={<Manga />} />
        <Route path='/shop' element={<Shop />} />

      </Routes>

    </>
  )
}

export default App
