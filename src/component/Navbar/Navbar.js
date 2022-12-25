import React from 'react';
import logo from '../../asset/abhyaz.png'
import { Link } from "react-scroll";

const Navbar = () => {
    return (
        <div className="lg:pl-20 lg:pr-20 navbar  flex justify-between">
            <div className="navbar-start">
                <div className="dropdown rounded ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to="/" spy={true} smooth={true} href="/">Home</Link></li>
                        <li><Link to="about" spy={true} smooth={true}>About Us</Link></li>
                        <li><Link to="contact">Contact Us</Link></li>

                    </ul>
                </div>
                <a className='flex' href="/">
                    <span></span><img className='h-16  mr-0 pr-0 rounded-sm' src={logo} alt="" /></a>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0">
                    <li><a href="/">Home</a></li>
                    <li><a href="/blog">About Us</a></li>
                    <li><a href="/contact">Contact Us</a></li>
                </ul>
            </div>

        </div>
    );
};

export default Navbar;