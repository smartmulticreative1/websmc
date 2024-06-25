import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import { Helmet } from 'react-helmet'

function About() {
  const navItems=[
    {name:'Home', path:'/'},
    {name:'About', path:'/about'}
  ]
  return (
    <>

      <Helmet>
        <title>About | SMC</title>
      </Helmet>

       <Navbar
          brandName="MyBrand"
          imageSrcPath="/path/to/logo.png"
          navItems={navItems}
        />
    </>
  )
}

export default About
