import React from 'react';
import { NavLink, Link } from "react-router-dom";
import { BsTruck, BsPhone, BsSearch, BsPerson, BsCart, BsGrid } from 'react-icons/bs'


const Header = () => {
    return <>
        <header className="header-top-strip py-2">
            <div className="container-xxl">
                <div className="row text-white px-4">
                    <div className="col-6">
                        <span className='mx-2'>
                        <BsTruck/>
                        </span>
                        <span className='mb-0'>Free Shipping Over ₹500 & Free Returns</span>
                    </div>
                    <div className="col-6">
                        <p className='text-end mb-0'><BsPhone/> Hotline: <a className='text-white' href="tel:+919199XXXXXX">+91 9199XXXXXX</a></p>
                    </div>
                </div>

            </div>
        </header>
        <header className="header-upper py-2">
            <div className="container-xxl">
                <div className="row align-items-center justify-content-between px-4">
                    <div className="col-3">
                        <h2>
                            <Link className="text-white">Shopit.</Link>
                        </h2>
                    </div>
                    <div className="col-5">
                        <div className="input-group">
                            <input
                                type="text" class="form-control py-2 px-4" placeholder="Search Products Here ..." aria-label="Search Products Here ..." aria-describedby="basic-addon2"
                            />
                            <button className="input-group-text p-2" id="basic-addon2">
                                <BsSearch className='fs-5' />
                            </button>
                        </div>
                    </div>
                    <div className="col-3 d-flex align-items-center justify-content-between px-4">
                        <div>
                            <Link className='d-flex align-items-center gap-10'>
                                <BsPerson className='text-white fs-4 mx-2' />
                                <span className='text-white fs-6'>Log In <br /> My Account</span>
                            </Link>
                        </div>
                        <div>
                            <Link className='d-flex align-items-center gap-10'>
                                <BsCart className='fs-4 mx-2 cart-icon' />
                                <div className='d-flex flex-column  justify-content-between'>
                                    <span className='badge bg-white text-dark'>0</span>
                                    <span className='text-white'>₹0.00</span>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
        <header className="header-bottom py-2">
            <div className="container-xxl">
                <div className="row px-3">
                    <div className="col-12">
                        <div className="menu-bottom d-flex align-items-center gap-30">
                            <div>
                                <div className="dropdown">
                                    <button className="btn btn-secondary dropdown-toggle bg-transparent border-0 d-flex align-items-center gap-10" type="button"
                                            id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                                        <BsGrid/> <span className="me-5 d-inline-block">Shop Categories</span>
                                    </button>
                                    <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                                        <li><Link className="dropdown-item text-white" to="">Action</Link></li>
                                        <li><Link className="dropdown-item text-white" to="">Another action</Link></li>
                                        <li><Link className="dropdown-item text-white" to="">Something else here</Link></li>
                                    </ul>
                                </div>
                            </div>
                            <span className="text-white">|</span>
                            <div className="menu-links">
                                <div className='d-flex align-items-center gap-30'>
                                    <NavLink>Today's Deals</NavLink>
                                    <NavLink>Bestsellers</NavLink>
                                    <NavLink>New Releases</NavLink>
                                    <NavLink to="/contact">Contact Us</NavLink>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    </>
}

export default Header;