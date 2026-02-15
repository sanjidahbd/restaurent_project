import React from 'react'
import FrontendLayout from '@/Layouts/FrontendLayout'
function About() {
  return (
    <>
     <FrontendLayout>

 {/* About Us Section   S T A R T */}
<section className="about-us-section fix section-padding">
  <div className="about-wrapper style1 style-padding">
    <div className="shape1 d-none d-xxl-block"><img src="assets/img/shape/aboutShape1_1.png" alt="shape" /></div>
    <div className="shape2 d-none d-xxl-block"><img src="assets/img/shape/aboutShape1_2.png" alt="shape" /></div>
    <div className="shape3 d-none d-xxl-block"><img className="cir36" src="assets/img/shape/aboutShape1_3.png" alt="shape" /></div>
    <div className="shape4 d-none d-xxl-block"><img src="assets/img/shape/aboutShape1_4.png" alt="shape" /></div>
    <div className="shape5 d-none d-xxl-block"><img src="assets/img/shape/aboutShape1_5.png" alt="shape" /></div>
    <div className="shape6 d-none d-xxl-block"><img className="cir36" src="assets/img/shape/aboutShape1_6.png" alt="shape" /></div>
    <div className="container">
      <div className="about-us section-padding">
        <div className="row">
          <div className="col-12">
            <div className="title-area">
              <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
                <img className="me-1" src="assets/img/icon/titleIcon.svg" alt="icon" />About US<img className="ms-1" src="assets/img/icon/titleIcon.svg" alt="icon" />
              </div>
              <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
                Variety of flavours from american cuisine
              </h2>
              <div className="text wow fadeInUp" data-wow-delay="0.8s">It is a long established fact that
                a reader will be distracted the readable content of a page when looking at layout
                the point established fact that</div>
              <div className="btn-wrapper wow fadeInUp" data-wow-delay="0.9s">
                <a className="theme-btn" href="menu.html">ORDER NOW <i className="fa-sharp fa-regular fa-arrow-right" /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="marquee-wrapper style-1 text-slider section-padding ">
    <div className="marquee-inner to-left">
      <ul className="marqee-list d-flex">
        <li className="marquee-item style1">
          <span className="text-slider" /><span className="text-slider text-style">chicken pizza</span>
          <span className="text-slider" /><span className="text-slider text-style">GRILLED CHICKEN</span>
          <span className="text-slider" /><span className="text-slider text-style">BURGER</span>
          <span className="text-slider" /><span className="text-slider text-style">CHICKEN PIZZA</span>
          <span className="text-slider" /><span className="text-slider text-style">FRESH PASTA</span>
          <span className="text-slider" /><span className="text-slider text-style">ITALIANO FRENCH FRY</span>
          <span className="text-slider" /><span className="text-slider text-style">CHICKEN FRY</span>
          <span className="text-slider" /><span className="text-slider text-style">chicken pizza</span>
          <span className="text-slider" /><span className="text-slider text-style">GRILLED CHICKEN</span>
          <span className="text-slider" /><span className="text-slider text-style">BURGER</span>
          <span className="text-slider" /><span className="text-slider text-style">CHICKEN PIZZA</span>
          <span className="text-slider" /><span className="text-slider text-style">FRESH PASTA</span>
          <span className="text-slider" /><span className="text-slider text-style">ITALIANO FRENCH FRY</span>
          <span className="text-slider" /><span className="text-slider text-style">CHICKEN FRY</span>
        </li>
      </ul>
    </div>
  </div>
</section>




     </FrontendLayout>
    
    
    </>
  )
}

export default About