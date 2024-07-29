import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import './App.css'
import Home from './Pages/Home'
import OurCapabilities from './Pages/OurCapabilities'
import OurCraft from './Pages/OurCraft'
import OurWorks from './Pages/OurWorks'
import Resource from './Pages/Resource'
import GetInTouch from './Pages/GetInTouch'
import CustomSolution from './Pages/CustomSolution'
import DigitalTransformation from './Pages/DigitalTransformation'
import ItTalentProvider from './Pages/ItTalentProvider'
import ErpDev from './Pages/ErpDev'
import WebAppDev from './Pages/WebAppDev'
import Maintenance from './Pages/Maintenance'
import ItConsulting from './Pages/ItConsulting'
import DigitalProductDesign from './Pages/DigitalProductDesign'
import DesignGraphicService from './Pages/DesignGraphicService'
import AdsService from './Pages/AdsService'
import SeoService from './Pages/SeoService'
import CopywritingService from './Pages/CopywritingService'
import CopywritingGoogleService from './Pages/CopywritingGoogleService'
import NotFound from './Pages/NotFound'
import Sitemap from './Pages/Sitemap'
// import Build from './Pages/Build'


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
        <Route path='/get-in-touch' element={<GetInTouch/>}/>
        <Route path='/custom-solution' element={<CustomSolution/>}/>
        <Route path='/digital-transformation' element={<DigitalTransformation/>}/>
        <Route path='/it-talent-provider' element={<ItTalentProvider/>}/>
        <Route path='/erp-dev' element={<ErpDev/>}/>
        <Route path='/web-app-dev' element={<WebAppDev/>}/>
        <Route path='/maintenance' element={<Maintenance/>}/>
        <Route path='/it-consulting' element={<ItConsulting/>}/>
        <Route path='/digital-product-design' element={<DigitalProductDesign/>}/>
        <Route path='/design-graphic-service' element={<DesignGraphicService/>}/>
        <Route path='/ads-service' element={<AdsService/>}/>
        <Route path='/seo-service' element={<SeoService/>}/>
        <Route path='/copywriting-service' element={<CopywritingService/>}/>
        <Route path='/copywriting-google-service' element={<CopywritingGoogleService/>}/>
        <Route path='/sitemap' element={<Sitemap/>}/>
        {/* <Route path='/debug' element={<Build/>}/> */}
        <Route path='*' element={<NotFound/>}/>
      </Routes>
    </Router>
    </>
  )
}

export default App
