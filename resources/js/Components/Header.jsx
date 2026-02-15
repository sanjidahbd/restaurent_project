import React from 'react'
import logo from '../../frontend/img/logo/logo.svg'

function Header() {
    return (
        <>
            <header className="header-section">
                <div className="black-bg" />
                <div className="red-bg" />
                <div className="container-fluid">
                    <div className="main-header-wrapper">
                        <div className="logo-image">
                            <a href="index.html">
                                <img src={logo} alt="img" />
                            </a>
                        </div>
                        <div className="main-header-items">
                            <div className="header-top-wrapper">
                                <span><i className="fa-regular fa-clock" /> 09:00 am - 06:00 pm</span>
                                <div className="social-icon d-flex align-items-center">
                                    <span>Follow Us:</span>
                                    <a href="#"><i className="fab fa-facebook-f" /></a>
                                    <a href="#"><i className="fab fa-twitter" /></a>
                                    <a href="#"><i className="fab fa-youtube" /></a>
                                    <a href="#"><i className="fab fa-linkedin-in" /></a>
                                </div>
                            </div>
                            <div id="header-sticky" className="header-1">
                                <div className="mega-menu-wrapper">
                                    <div className="header-main">
                                        <div className="logo">
                                            <a href="index.html" className="header-logo">
                                                <img src="assets/img/logo/logo.svg" alt="logo-img" />
                                            </a>
                                        </div>
                                        <div className="header-left">
                                            <div className="mean__menu-wrapper">
                                                <div className="main-menu">
                                                    <nav id="mobile-menu">
                                                        <ul>
                                                            <li className="has-dropdown active menu-thumb">
                                                                <a href="/">
                                                                    Home
                                                                    <i className="fa-regular fa-plus" />
                                                                </a>
                                                             
                                                            </li>
                                                           
                                                            <li className="has-dropdown">
                                                                <a href="/about">
                                                                    About Us
                                                                    <i className="fa-regular fa-plus" />
                                                                </a>
                                                               
                                                            </li>
                                                            <li className="has-dropdown">
                                                                <a href="/chef">
                                                                  Chef
                                                                    <i className="fa-regular fa-plus" />
                                                                </a>
                                                               
                                                            </li>
                                                            
                                                          
                                                            <li>
                                                                <a href="/menu">
                                                                  Food Menu
                                                                    <i className="fa-regular fa-plus" />
                                                                </a>
                                                               
                                                            </li>
                                                            <li>
                                                                <a href="/contact">
                                                                    Contact Us
                                                                    <i className="fa-regular fa-plus" />
                                                                </a>
                                                               
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </div>
                                            </div>
                                        </div>
                                        {/* <div className="header-right d-flex justify-content-end align-items-center">
                                            <a href="#0" className="search-trigger search-icon"><i className="fal fa-search" /></a>
                                            <div className="header__cart">
                                                <a href="#"> <i className="fa-sharp fa-regular fa-cart-shopping" /> </a>
                                                <div className="header__right__dropdown__wrapper">
                                                    <div className="header__right__dropdown__inner">
                                                        <div className="single__header__right__dropdown">
                                                            <div className="header__right__dropdown__img">
                                                                <a href="#">
                                                                    <img loading="lazy" src="assets/img/blog/blogRecentThumb3_1.png" alt="photo" />
                                                                </a>
                                                            </div>
                                                            <div className="header__right__dropdown__content">
                                                                <a href="shop.html">Fried Chicken</a>
                                                                <p>1 x <span className="price">$ 80.00</span></p>
                                                            </div>
                                                            <div className="header__right__dropdown__close">
                                                                <a href="#"><i className="icofont-close-line" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="single__header__right__dropdown">
                                                            <div className="header__right__dropdown__img">
                                                                <a href="#">
                                                                    <img loading="lazy" src="assets/img/blog/blogRecentThumb3_2.png" alt="photo" />
                                                                </a>
                                                            </div>
                                                            <div className="header__right__dropdown__content">
                                                                <a href="shop.html">Fried Noodles</a>
                                                                <p>1 x <span className="price">$ 60.00</span></p>
                                                            </div>
                                                            <div className="header__right__dropdown__close">
                                                                <a href="#"><i className="icofont-close-line" /></a>
                                                            </div>
                                                        </div>
                                                        <div className="single__header__right__dropdown">
                                                            <div className="header__right__dropdown__img">
                                                                <a href="#">
                                                                    <img loading="lazy" src="assets/img/blog/blogRecentThumb3_3.png" alt="photo" />
                                                                </a>
                                                            </div>
                                                            <div className="header__right__dropdown__content">
                                                                <a href="shop.html">Special Pasta</a>
                                                                <p>1 x <span className="price">$ 70.00</span></p>
                                                            </div>
                                                            <div className="header__right__dropdown__close">
                                                                <a href="#"><i className="icofont-close-line" /></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <p className="dropdown__price">Total: <span>$1,100.00</span>
                                                    </p>
                                                    <div className="header__right__dropdown__button">
                                                        <a href="cart.html" className="theme-btn mb-2">View Cart</a>
                                                        <a href="checkout.html" className="theme-btn style3">Checkout</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <a className="theme-btn" href="menu.html">ORDER NOW <i className="fa-sharp fa-regular fa-arrow-right" /></a>
                                            <div className="header__hamburger d-xl-block my-auto">
                                                <div className="sidebar__toggle">
                                                    <i className="fas fa-bars" />
                                                </div>
                                            </div>
                                        </div> */}
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>

        </>
    )
}

export default Header