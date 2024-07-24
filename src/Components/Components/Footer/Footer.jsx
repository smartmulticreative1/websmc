import React from 'react'
import Button from '../Button/Button'
import LogoFooter from "../../assets/img/logo-footer.svg"
import mapIcon from "../../assets/img/map.svg"
import git from "../../assets/img/git.svg"
import drib from "../../assets/img/drib.svg"
import linked from "../../assets/img/linked.svg"
import ig from "../../assets/img/ig.svg"


function Footer() {
  return (
    <div className='w-full'>
      {/* footer */}
      <div id="section-footer">
            <div className="xl:container mx-auto xl:px-[4.3rem] px-[1rem] py-[50px]">
                <div className="flex flex-col gap-[3.25rem]">
                    <div className="nav-footer flex lg:flex-nowrap flex-wrap lg:gap-0 gap-10 justify-between text-black border-black solid border-b-2 pb-[3.25rem]">
                        <div className="brand-footer lg:mx-0 mx-auto"><img src={LogoFooter} alt="" /></div>
                        <div className="menu-footer wrapper flex flex-wrap lg:justify-end gap-10 w-full">
                            <div className="menu-footer lg:mx-0 mx-auto md:text-start text-center flex flex-col">
                                <h6>FEATURES</h6>
                                <div className="menu-footer-link-wrapper flex flex-col gap-3">
                                    <a href="#" className="link-menu-footer font-bold">Our Capabilities</a>
                                    <a href="#" className="link-menu-footer font-bold">Creative Solutions</a>
                                    <a href="#" className="link-menu-footer font-bold">Custom Solutions</a>
                                    <a href="#" className="link-menu-footer font-bold">Our Works</a>
                                    <a href="#" className="link-menu-footer font-bold">Contact us</a>
                                </div>
                            </div>
                            <div className="menu-footer lg:mx-0 mx-auto md:text-start text-center flex flex-col">
                                <h6>CONTACT INFO</h6>
                                <div className="menu-footer-link-wrapper flex flex-col gap-3">
                                    <a href="#" className="link-menu-footer font-bold">hello@smartkreatif.com</a>
                                    <a href="#" className="link-menu-footer font-bold">02127873814</a>
                                </div>
                            </div>
                            <div className="menu-footer lg:mx-0 mx-auto md:text-start text-center flex flex-col">
                                <h6>FIND US</h6>
                                <div className="menu-footer-link-wrapper flex flex-col gap-3">
                                    <a href="#" className="link-menu-footer font-bold">South Jakarta, Indonesia</a>
                                    <a href="#" className="link-menu-footer font-bold"><div className='flex flex-nowrap justify-center sm:justify-start'><img src={mapIcon} alt="" className='me-3' /><span>View On Map</span></div></a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sosmed flex lg:flex-row flex-col gap-4 items-center justify-center text-color-alternate">
                        <Button btn="btn3" to='#' sicon={git}>Git Hub</Button>
                        <Button btn="btn3" to='#' sicon={drib}>Dribble</Button>
                        <Button btn="btn3" to='#' sicon={linked}>LinkedIn</Button>
                        <Button btn="btn3" to='#' sicon={ig}>Instagram</Button>
                    </div>
                    <div className="copy text-center text-black"><h5>@Copyright 2024. PT Inovasi Teknologi Nusantara</h5></div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer
