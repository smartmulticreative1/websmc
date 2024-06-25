import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import NotFound from './Pages/NotFound'
import OurCapabilities from './Pages/OurCapabilities'
import OurCraft from './Pages/OurCraft'
import OurWorks from './Pages/OurWorks'
import Resource from './Pages/Resource'
import Sitemap from './Pages/Sitemap'

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/our-capabilities' element={<OurCapabilities/>}/>
        <Route path='/our-craft' element={<OurCraft/>}/>
        <Route path='/our-works' element={<OurWorks/>}/>
        <Route path='/resource' element={<Resource/>}/>
        <Route path='/sitemap' element={<Sitemap/>}/>
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
