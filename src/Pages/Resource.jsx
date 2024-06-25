import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import {Helmet, HelmetProvider } from 'react-helmet-async'


function Resource() {
  const navItems=[
    {name:'Home', path:'/'},
    {name:'Our Capabilities', path:'/our-capabilities'},
    {name:'Our Craft', path:'/our-craft'},
    {name:'Our Works', path:'/our-works'},
    {name:'Resource', path:'/resource'}
  ]
  return (
    <>
    <HelmetProvider>
      <Helmet>
        <title>Resource | SMC</title>
      </Helmet>
    </HelmetProvider>

    <Navbar ns='nv1'/>

    </>
  )
}

export default Resource
