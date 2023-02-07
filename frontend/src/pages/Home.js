import React from 'react';
import {FaShippingFast, FaGift, FaHeadphones, FaRegCreditCard} from 'react-icons/fa'
import {TbDiscount2} from 'react-icons/tb'
import Marquee from "react-fast-marquee";
import ProductCard from "../components/ProductCard";
import Metadata from "../components/Metadata";

const Home = () => {
    return <>
        <Metadata title={'Buy Best Products'}/>
        <section className="home-wrapper-1  home-carousel py-4 px-4">
            <div className="container-xxl">
                <div className="row">
                    <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="/images/sale-banner-1.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="/images/sale-banner-2.png" className="d-block w-100" alt="..." />
                            </div>
                            <div className="carousel-item">
                                <img src="/images/sale-banner-3.png" className="d-block w-100" alt="..." />
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls"
                                data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls"
                                data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                </div>
            </div>
        </section>
        <section className="featured-product py-4 px-4">
            <div className="container-xxl">
                <div className="row">
                    <h3 className="pb-3">Popular Collection</h3>
                    <div className="col-12 d-flex overflow-auto">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </div>
            </div>
        </section>
        <section className="home-wrapper-1 py-5 px-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="services d-flex align-items-center justify-content-between">
                            <div className="d-flex gap-15 align-items-center">
                                <FaShippingFast className="fs-2"/>
                                <div>
                                    <h6>Free & Fast Shipping</h6>
                                    <p className="mb-0">From all orders over ₹500</p>
                                </div>
                            </div>
                            <div className="d-flex gap-15 align-items-center">
                                <FaGift className="fs-2"/>
                                <div>
                                    <h6>Daily Surprise Offers</h6>
                                    <p className="mb-0">Save upto 25% off</p>
                                </div>
                            </div>
                            <div className="d-flex gap-15 align-items-center">
                                <FaHeadphones className="fs-2"/>
                                <div>
                                    <h6>Support 24/7</h6>
                                    <p className="mb-0">Shop with an expert</p>
                                </div>
                            </div>
                            <div className="d-flex gap-15 align-items-center">
                                <TbDiscount2 className="fs-2"/>
                                <div>
                                    <h6>Affordable Prices</h6>
                                    <p className="mb-0">Get factory direct prices</p>
                                </div>
                            </ div>
                            <div className="d-flex gap-15 align-items-center">
                                <FaRegCreditCard className="fs-2"/>
                                <div>
                                    <h6>Secure Payments</h6>
                                    <p className="mb-0">100% protected payments</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="home-wrapper-1 pb-4 px-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <div className="categories d-flex flex-wrap align-items-center justify-content-between">
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <h6>Laptops</h6>
                                </div>
                                <img src="/images/laptop.jpg" alt="laptop"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <h6>Headphones</h6>
                                </div>
                                <img src="/images/headphone.jpg" alt="laptop"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <h6>Portable Speakers</h6>
                                </div>
                                <img src="/images/speaker.jpg" alt="laptop"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <h6>Home Appliances</h6>
                                </div>
                                <img src="/images/homeapp.jpg" alt="laptop"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <h6>TVs</h6>
                                </div>
                                <img src="/images/tv.jpg" alt="laptop"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <h6>Smartwatches</h6>
                                </div>
                                <img src="/images/watch.jpg" alt="laptop"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <h6>Mobiles & Tablets</h6>
                                </div>
                                <img src="/images/tab3.jpg" alt="laptop"/>
                            </div>
                            <div className="d-flex align-items-center justify-content-between">
                                <div>
                                    <h6>Cameras</h6>
                                </div>
                                <img src="/images/camera.jpg" alt="laptop"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        <section className="marquee-wrapper py-4 px-4">
            <div className="container-xxl">
                <div className="row">
                    <div className="col-12">
                        <Marquee className="marquee-inner-wrapper card-wrapper">
                            <div className="d-flex">
                                <div className="mx-4 w-25">
                                    <img src="/images/brand-01.png" alt="brand"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="/images/brand-02.png" alt="brand"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="/images/brand-03.png" alt="brand"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="/images/brand-04.png" alt="brand"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="/images/brand-05.png" alt="brand"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="/images/brand-06.png" alt="brand"/>
                                </div >
                                <div className="mx-4 w-25">
                                    <img src="/images/brand-07.png" alt="brand"/>
                                </div>
                                <div className="mx-4 w-25">
                                    <img src="/images/brand-08.png" alt="brand"/>
                                </div>
                            </div>
                        </Marquee>
                    </div>
                </div>
            </div>
        </section>
    </>
}

export default Home;