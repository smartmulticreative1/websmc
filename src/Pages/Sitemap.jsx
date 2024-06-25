import React from 'react'

function Sitemap() {
  return (
    <>
     <ul className='grid grid-cols-1 gap-8 p-5 bg-white text-black'>
        <li><h5>Done</h5></li>
        <li>-</li>
        <li><h5>Progress</h5></li>
        <li><a className=' link-success text-black' href="/" target='_blank'>Home</a></li>
        <li><a className=' link-success text-black' href="/our-capabilities" target='_blank'>Our Capabilities</a></li>
        <li><a className=' link-success text-black' href="/our-craft" target='_blank'>Our Craft</a></li>
        <li><a className=' link-success text-black' href="/our-works" target='_blank'>Our Works</a></li>
        <li><a className=' link-success text-black' href="/resource" target='_blank'>Resource</a></li>
     </ul> 
    </>
  )
}

export default Sitemap
