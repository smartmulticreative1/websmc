import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';
import Button from '../Button/Button';
import btnNav from '../../assets/img/btn-nav.svg'

const Navbar = ({ns}) => {
    const [open, setOpen]=useState(false);
    const navItems=[
        {name:'Home', path:'/'},
        {name:'Our Capabilities', path:'/our-capabilities'},
        {name:'Our Craft', path:'/our-craft'},
        {name:'Our Works', path:'/our-works'},
        // {name:'Resource', path:'/resource'}
        // {name:'Our Capabilities', path:'/#'},
        // {name:'Our Craft', path:'/#'},
        // {name:'Our Works', path:'/#'},
        {name:'Resource', path:'/#'}
    ];

    const nv1= 
    <ul className="menu menu-horizontal lg:p-0 py-10 ps-10 lg:static lg:flex-row lg:h-auto lg:w-auto lg:bg-transparent absolute h-[365px] w-[227px] top-0 right-0 rounded-[10px] bg-white flex flex-col">
            
    {navItems.map((item, index) => (
        <li key={index} className='lg:mb-0 mb-1'>
        <NavLink
            to={item.path}
            className={({ isActive }) => isActive ? "nav-link hover:bg-inherit hover:text-[#00173F] lg:text-[1rem] text-[20px] lg:text-[#fff] text-[#144688]" : "nav-link hover:bg-inherit lg:hover:text-[#00173F] hover:text-[#144688] lg:text-[#fff] text-[#000] lg:hover:text-[1rem] hover:text-[20px]"}
        >
            {item.name}
        </NavLink>
        </li> ))}
            </ul>;

    const nv2=
    <ul className="menu menu-horizontal px-1 lg:static lg:flex-row lg:h-auto lg:w-auto lg:bg-transparent absolute h-[365px] w-[227px] top-0 right-0 rounded-[10px] bg-white flex flex-col">
        <li><a href="/" className="nav-link hover:bg-inherit hover:text-[#00173F]">Home</a></li>
        <li><a href="/our-capabilities" className="nav-link hover:bg-inherit hover:text-[#00173F]">Our Capabilities</a></li>
        <li><a href="/our-craft" className="nav-link hover:bg-inherit hover:text-[#00173F]">Our Craft</a></li>
        <li><a href="/our-work" className="nav-link hover:bg-inherit hover:text-[#00173F]">Our Works</a></li>
        <li><a href="/resource" className="nav-link hover:bg-inherit hover:text-[#00173F]">Resource</a></li>
    </ul>;

        let n;

        if (ns === 'nv1') {
            n=nv1;
        }else if(ns === 'nv2'){
            n=nv2;
        }

  return (
    <div className="bg-[#144688]">
    <nav className="xl:px-[4.3rem] navbar bg-[#144688] xl:container mx-auto relative z-10">
        <div className="navbar-start w-[unset]">
            <a className="btn btn-ghost normal-case text-xl hover:bg-inherit" href='/'>
                <svg className='text-sm text-white w-[2rem]' viewBox="0 0 35 39" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path d="M8.31607 26.8951L0.76676 19.3458C0.353703 18.9327 0.382688 18.2545 0.822927 17.8705C8.00634 11.6055 10.8612 6.94658 11.4554 5.2172C11.487 5.12516 11.5 5.02957 11.5 4.93224V1.579C11.5 1.02671 11.9477 0.578999 12.5 0.578999H23.5C24.0523 0.578999 24.5 0.708394 24.5 1.26068V6.079C24.5 11.4366 15.0418 21.7979 9.69865 26.9173C9.30923 27.2904 8.69743 27.2764 8.31607 26.8951Z" />
                    <path d="M26.1839 12.1049L33.7332 19.6542C34.1463 20.0673 34.1173 20.7455 33.6771 21.1295C26.4937 27.3945 23.6388 32.0534 23.0446 33.7828C23.013 33.8748 23 33.9704 23 34.0677L23 37.421C23 37.9733 22.5523 38.421 22 38.421L11 38.421C10.4477 38.421 10 38.2916 10 37.7393L10 32.921C10 27.5633 19.4582 17.202 24.8014 12.0826C25.1908 11.7095 25.8026 11.7235 26.1839 12.1049Z" />
                </svg>
            </a>
        </div>
        <div onClick={() => setOpen(!open)} className={`navbar-end items-center pe-[1rem] w-[unset] lg:static fixed top-0 left-0 right-0 h-[100%] ${open ? 'flex' : 'hidden'} lg:flex flex-col lg:flex-row lg:bg-transparent bg-[#00000050] transition-[all_ease_1s] z-50`}>
            {n}
            <Button btn='btn1' to="/" className="ms-3 btn-primary-smc hidden lg:flex">Get In Touch</Button>
        </div>
        <div className="btn-nav cursor-pointer px-1 flex lg:hidden z-20" onClick={() => setOpen(!open)}>
            <img src={btnNav} alt="Toggle Navigation" />
        </div>
    </nav>
</div>
  );
};

export default Navbar;
