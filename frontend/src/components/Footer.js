import React from 'react';
import {Link} from "react-router-dom";
import {BsHouse, BsTelephone, BsEnvelope, BsLinkedin, BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';

const Footer = () => {
    return <>
        <div className="mt-auto">
            <footer className="py-4 px-4">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-4">
                            <h4 className="text-white mb-4">Contact Us</h4>
                            <div>
                                <address className="text-white fs-6 d-flex align-items-top gap-15">
                                    <span><BsHouse/></span>
                                    Three Embarcadero Center, <br/>San Francisco, <br/>CA 94111
                                </address>
                                <div className="d-flex align-items-center gap-15 mb-3">
                                    <span className="text-white"><BsTelephone/></span>
                                    <a href="tel:+919876543210" className="text-white d-block">
                                        +91 9876543210</a>
                                </div>

                                <div className="d-flex align-items-center gap-15 mb-3">
                                    <span className="text-white"><BsEnvelope/></span>
                                    <a href="mailto:demo@shopit.com" className="text-white d-block">
                                        demo@shopit.com</a>
                                </div>


                                <div className="d-flex gap-30 align-items-center">
                                    <a className="text-white fs-4" href="">
                                        <BsGithub/>
                                    </a>
                                    <a className="text-white fs-4" href="">
                                        <BsLinkedin/>
                                    </a>
                                    <a className="text-white fs-4" href="">
                                        <BsTwitter/>
                                    </a>
                                    <a className="text-white fs-4" href="">
                                        <BsInstagram/>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Information</h4>
                            <div className="footer-link d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Privacy Policy</Link>
                                <Link className="text-white py-2 mb-1">Refund Policy</Link>
                                <Link className="text-white py-2 mb-1">Shipping Policy</Link>
                                <Link className="text-white py-2 mb-1">Terms & Conditions</Link>
                            </div>
                        </div>
                        <div className="col-3">
                            <h4 className="text-white mb-4">Account</h4>
                            <div className="footer-link d-flex flex-column">
                                <Link className="text-white py-2 mb-1">About Us</Link>
                                <Link className="text-white py-2 mb-1">FAQ</Link>
                                <Link className="text-white py-2 mb-1">Contact</Link>
                            </div>
                        </div>
                        <div className="col-2">
                            <h4 className="text-white mb-4">Quick Links</h4>
                            <div className="footer-link d-flex flex-column">
                                <Link className="text-white py-2 mb-1">Laptops</Link>
                                <Link className="text-white py-2 mb-1">Headphones</Link>
                                <Link className="text-white py-2 mb-1">Mobiles</Link>
                                <Link className="text-white py-2 mb-1">Books</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            <footer className="py-3">
                <div className="container-xxl">
                    <div className="row">
                        <div className="col-12">
                            <p className="text-center mb-0 text-white">
                                &copy; {new Date().getFullYear()}, Developed By Chinu
                            </p>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    </>
}

export default Footer;