import React from 'react'
import Navbar from './Navbar'
import Home from './Home'
import Report from './Report'
import Product from './Product'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar/>
       <Routes>
         <Route path='/' element={<Home/>} />
         <Route path='report' element={<Report/>} />
         <Route path='product' element={<Product/>} />
       </Routes>
    </Router>
  );
}

export default App;
