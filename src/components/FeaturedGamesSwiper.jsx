import React from 'react';
import { calculateDiscountedPrice } from '../js/utils/DerivedCalculations.js';
//
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

import '../css/CustomSwiperStyles.scss';

import '../css/FeaturedGamesCarousel.scss'; //should be carousel.css or something like that
//import 'bootstrap/dist/css/bootstrap.min.css'; //still using this

//import { formatWithHyphen } from '../js/utils/format'; //no, I would have to match this against whatever is in the link and it only works if I GET all the games in the database, which is fine when there are like 20 games but not fine if there are 20k

SwiperCore.use([Navigation, Pagination]);

function CarouselPopular(props) {


    return (
        <Swiper 
            spaceBetween={20}
            slidesPerView={3}
            navigation
            pagination
            breakpoints={{
                425: {
                    width: 425,
                    slidesPerView: 1
                },
                768: {
                    width: 768,
                    slidesPerView: 2
                },
                1024: {
                    width: 1024,
                    slidesPerView: 3
                }
            }}
        >
            {props.games.map((item) => {
                return (
                    <SwiperSlide key={item.id}>
                        <Link className="card" //should be separate component
                            role="button"
                            to={"/games/" + item.id}
                        >
                            <img
                                className="card-img-top d-block w-100 featured-card-header-image"
                                src={item.header_image}
                                alt="n/a"
                            />
                            <div className="card-body featured-card">
                                <h6 className="card-title">
                                    {item.title}
                                </h6>
                                {
                                    item.is_free ?
                                        <div className="buy-group">
                                            <div>Free!</div>
                                        </div>    
                                    :
                                        <div className="buy-group">
                                            {
                                                item.discount_percent > 0 ? 
                                                    <p className="strikethrough-price">
                                                        ${item.price}
                                                    </p>
                                                :
                                                    <div></div>  
                                            }
                                            <h6 className="actual-price">
                                                ${ calculateDiscountedPrice(item.price, item.discount_percent).toFixed(2) }
                                            </h6>
                                        </div> 
                                }

                            </div>                            
                        </Link>
                    </SwiperSlide>
                )
            })}

        </Swiper>
    )
}

export default CarouselPopular
