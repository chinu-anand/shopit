import React from 'react';
import {Link} from "react-router-dom";
import {BsHouse, BsTelephone, BsEnvelope, BsLinkedin, BsGithub, BsInstagram, BsTwitter} from 'react-icons/bs';

const Footer = () => {
    return <>
        <footer className="py-4 px-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-4">
                        <h4 className="text-white mb-4">Contact Us</h4>
                        <div>
                            <address className="text-white fs-6">
                                <span className="mb-4"><BsHouse/></span><br/>
                                Three Embarcadero Center, <br/>San Francisco, <br/>CA 94111
                            </address>
                            <a href="tel:+919876543210" className="text-white d-block mt-4 mb-4">
                                <span className="mb-4"><BsTelephone/></span><br/>
                                +91 9876543210</a>
                            <a href="mailto:demo@shopit.com" className="text-white d-block mt-4 mb-4">
                                <span className="mb-4"><BsEnvelope/></span><br/>
                                demo@shopit.com</a>

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
    </>
}

export default Footer;