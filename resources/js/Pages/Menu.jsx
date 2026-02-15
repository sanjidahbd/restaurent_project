import React from 'react'
import FrontendLayout from '@/Layouts/FrontendLayout'
function Menu() {
  return (
    <>
       <FrontendLayout>
{/* Food Menu section  S T A R T */}
<section className="food-menu-section fix section-padding">
  <div className="food-menu-wrapper-container style2">
    <div className="container">
      <div className="food-menu-wrapper style2 section-padding">
        <div className="container">
          <div className="title-area">
            <div className="sub-title text-center wow fadeInUp" data-wow-delay="0.5s">
              <img className="me-1" src="assets/img/icon/titleIcon.svg" alt="icon" />POPULAR DISHES<img className="ms-1" src="assets/img/icon/titleIcon.svg" alt="icon" />
            </div>
            <h2 className="title wow fadeInUp" data-wow-delay="0.7s">
              Our Most Popular Deals
            </h2>
          </div>
          <div className="food-menu-tab-wrapper style2">
            <div className="row">
              <div className="col-xl-4 d-flex align-items-center justify-content-center">
                <div className="tab-left">
                  <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                    <li className="nav-item" role="presentation">
                      <div className="nav-link active" id="pills-chinesePasta-tab" data-bs-toggle="pill" data-bs-target="#pills-chinesePasta" role="tab" aria-controls="pills-chinesePasta" aria-selected="true">
                        <div className="single-menu-items">
                          <div className="details">
                            <div className="menu-item-thumb"><img src="assets/img/menu/menuThumb2_1.png" alt="thumb" />
                            </div>
                            <div className="menu-content">
                              <h3>Chinese Pasta</h3>
                              <p>It's a testament to our.</p>
                            </div>
                          </div>
                          <h6>$15.99</h6>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item" role="presentation">
                      <div className="nav-link" id="pills-chickenFriedRice-tab" data-bs-toggle="pill" data-bs-target="#pills-chickenFriedRice" role="tab" aria-controls="pills-chickenFriedRice" aria-selected="false">
                        <div className="single-menu-items">
                          <div className="details">
                            <div className="menu-item-thumb"><img src="assets/img/menu/menuThumb2_2.png" alt="thumb" />
                            </div>
                            <div className="menu-content">
                              <h3>Chicken Fried Rice</h3>
                              <p>It's a testament to our.</p>
                            </div>
                          </div>
                          <h6>$25.99</h6>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item" role="presentation">
                      <div className="nav-link" id="pills-chickenPizza-tab" data-bs-toggle="pill" data-bs-target="#pills-chickenPizza" role="tab" aria-controls="pills-chickenPizza" aria-selected="false">
                        <div className="single-menu-items">
                          <div className="details">
                            <div className="menu-item-thumb"><img src="assets/img/menu/menuThumb2_3.png" alt="thumb" />
                            </div>
                            <div className="menu-content">
                              <h3> Chicken Pizza </h3>
                              <p>It's a testament to our.</p>
                            </div>
                          </div>
                          <h6>$35.99</h6>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item" role="presentation">
                      <div className="nav-link" id="pills-chickenNoodles-tab" data-bs-toggle="pill" data-bs-target="#pills-chickenNoodles" role="tab" aria-controls="pills-chickenNoodles" aria-selected="false">
                        <div className="single-menu-items">
                          <div className="details">
                            <div className="menu-item-thumb"><img src="assets/img/menu/menuThumb2_4.png" alt="thumb" />
                            </div>
                            <div className="menu-content">
                              <h3> Chicken Noodles </h3>
                              <p>It's a testament to our.</p>
                            </div>
                          </div>
                          <h6>$45.99</h6>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item" role="presentation">
                      <div className="nav-link" id="pills-grilledChicken-tab" data-bs-toggle="pill" data-bs-target="#pills-grilledChicken" role="tab" aria-controls="pills-grilledChicken" aria-selected="false">
                        <div className="single-menu-items">
                          <div className="details">
                            <div className="menu-item-thumb"><img src="assets/img/menu/menuThumb2_5.png" alt="thumb" />
                            </div>
                            <div className="menu-content">
                              <h3> Grilled Chicken </h3>
                              <p>It's a testament to our.</p>
                            </div>
                          </div>
                          <h6>$55.99</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 d-flex align-items-center justify-content-center">
                <div className="middle-tab-content">
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-chinesePasta" role="tabpanel" aria-labelledby="pills-chinesePasta-tab" tabIndex={0}>
                      <div className="menuthumb">
                        <img src="assets/img/menu/menuThumb3_1.png" alt="thumb" />
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-chickenFriedRice" role="tabpanel" aria-labelledby="pills-chickenFriedRice-tab" tabIndex={0}>
                      <div className="menuthumb">
                        <img src="assets/img/menu/menuThumb3_1.png" alt="thumb" />
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-chickenPizza" role="tabpanel" aria-labelledby="pills-chickenPizza-tab" tabIndex={0}>
                      <div className="menuthumb">
                        <img src="assets/img/menu/menuThumb3_1.png" alt="thumb" />
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-chickenNoodles" role="tabpanel" aria-labelledby="pills-chickenNoodles-tab" tabIndex={0}>
                      <div className="menuthumb">
                        <img src="assets/img/menu/menuThumb3_1.png" alt="thumb" />
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-grilledChicken" role="tabpanel" aria-labelledby="pills-grilledChicken-tab" tabIndex={0}>
                      <div className="menuthumb">
                        <img src="assets/img/menu/menuThumb3_1.png" alt="thumb" />
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-EggCucumber" role="tabpanel" aria-labelledby="pills-EggCucumber-tab" tabIndex={0}>
                      <div className="menuthumb">
                        <img src="assets/img/menu/menuThumb3_1.png" alt="thumb" />
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-chickenWhiteRice" role="tabpanel" aria-labelledby="pills-chickenWhiteRice-tab" tabIndex={0}>
                      <div className="menuthumb">
                        <img src="assets/img/menu/menuThumb3_1.png" alt="thumb" />
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-specialBurger" role="tabpanel" aria-labelledby="pills-specialBurger-tab" tabIndex={0}>
                      <div className="menuthumb">
                        <img src="assets/img/menu/menuThumb3_1.png" alt="thumb" />
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-vegetablesBurger" role="tabpanel" aria-labelledby="pills-vegetablesBurger-tab" tabIndex={0}>
                      <div className="menuthumb">
                        <img src="assets/img/menu/menuThumb3_1.png" alt="thumb" />
                      </div>
                    </div>
                    <div className="tab-pane fade" id="pills-briefChicken" role="tabpanel" aria-labelledby="pills-briefChicken-tab" tabIndex={0}>
                      <div className="menuthumb">
                        <img src="assets/img/menu/menuThumb3_1.png" alt="thumb" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-xl-4 d-flex align-items-center justify-content-center">
                <div className="tab-right">
                  <ul className="nav nav-pills mb-3" id="pills-tab2" role="tablist">
                    <li className="nav-item" role="presentation">
                      <div className="nav-link" id="pills-EggCucumber-tab" data-bs-toggle="pill" data-bs-target="#pills-EggCucumber" role="tab" aria-controls="pills-EggCucumber" aria-selected="true">
                        <div className="single-menu-items">
                          <div className="details">
                            <div className="menu-item-thumb"><img src="assets/img/menu/menuThumb2_6.png" alt="thumb" />
                            </div>
                            <div className="menu-content">
                              <h3> Egg and Cucumber </h3>
                              <p>It's a testament to our.</p>
                            </div>
                          </div>
                          <h6>$75.99</h6>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item" role="presentation">
                      <div className="nav-link" id="pills-chickenWhiteRice-tab" data-bs-toggle="pill" data-bs-target="#pills-chickenWhiteRice" role="tab" aria-controls="pills-chickenWhiteRice" aria-selected="false">
                        <div className="single-menu-items">
                          <div className="details">
                            <div className="menu-item-thumb"><img src="assets/img/menu/menuThumb2_7.png" alt="thumb" />
                            </div>
                            <div className="menu-content">
                              <h3> Chicken Whit Rice </h3>
                              <p>It's a testament to our.</p>
                            </div>
                          </div>
                          <h6>$85.99</h6>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item" role="presentation">
                      <div className="nav-link" id="pills-specialBurger-tab" data-bs-toggle="pill" data-bs-target="#pills-specialBurger" role="tab" aria-controls="pills-specialBurger" aria-selected="false">
                        <div className="single-menu-items">
                          <div className="details">
                            <div className="menu-item-thumb"><img src="assets/img/menu/menuThumb2_8.png" alt="thumb" />
                            </div>
                            <div className="menu-content">
                              <h3> Special Barger </h3>
                              <p>It's a testament to our.</p>
                            </div>
                          </div>
                          <h6>$95.99</h6>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item" role="presentation">
                      <div className="nav-link" id="pills-vegetablesBurger-tab" data-bs-toggle="pill" data-bs-target="#pills-vegetablesBurger" role="tab" aria-controls="pills-vegetablesBurger" aria-selected="false">
                        <div className="single-menu-items">
                          <div className="details">
                            <div className="menu-item-thumb"><img src="assets/img/menu/menuThumb2_9.png" alt="thumb" />
                            </div>
                            <div className="menu-content">
                              <h3> Vegetables Burger </h3>
                              <p>It's a testament to our.</p>
                            </div>
                          </div>
                          <h6>$25.99</h6>
                        </div>
                      </div>
                    </li>
                    <li className="nav-item" role="presentation">
                      <div className="nav-link" id="pills-briefChicken-tab" data-bs-toggle="pill" data-bs-target="#pills-briefChicken" role="tab" aria-controls="pills-briefChicken" aria-selected="false">
                        <div className="single-menu-items">
                          <div className="details">
                            <div className="menu-item-thumb"><img src="assets/img/menu/menuThumb2_10.png" alt="thumb" />
                            </div>
                            <div className="menu-content">
                              <h3> Brief Chicken </h3>
                              <p>It's a testament to our.</p>
                            </div>
                          </div>
                          <h6>$252.99</h6>
                        </div>
                      </div>
                    </li>
                  </ul>
                </div>
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

export default Menu