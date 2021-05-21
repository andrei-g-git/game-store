import React from 'react';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';

SwiperCore.use([Navigation, Pagination]);

function PicSwiper(props) {
    return (
        <Swiper
            slidesPerView={1}
            navigation
            pagination
        >
            {
                props.pics.map((pic, index) => {
                    return (
                        <SwiperSlide key={index}>
                            <img src={pic}
                                alt="n/a"
                            />
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default PicSwiper;
