import React, { useRef, useState, useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux'
import { getDataTeacherAction } from "/redux/actions/dataActions";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import 'swiper/css/effect-fade';
import "swiper/css/lazy";
import "swiper/css/pagination";
import "swiper/css/navigation";

import slider from "./slider.module.scss";

// import required modules
import { Autoplay, Lazy, Pagination, Navigation, EffectFade } from "swiper";

export default function TeacherSlider() {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getDataTeacherAction())
    }, []);
    const teachers = useSelector(store => store?.teachers?.teachers)

    return (
        <>
            <h3 className={slider.title}>Meet our Team</h3>
            <Swiper
                style={{
                    "--swiper-navigation-color": "#fff",
                    "--swiper-pagination-color": "#fff",
                }}
                effect={"fade"}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                lazy={true}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[EffectFade, Autoplay,Lazy, Pagination, Navigation]}
                className={`mySwiper ${slider.swiper}`}
            >
                {teachers && teachers.length > 0
                    ? teachers && teachers.map(item => {
                        return (
                            <SwiperSlide className={slider.swiper_slide} key={item?._id}>
                                <img
                                    src={`http://localhost:5000/uploads/${item?.teacherImgUrl?.filename}`}
                                    data-src={`http://localhost:5000/uploads/${item?.teacherImgUrl?.filename}`}
                                    className="swiper-lazy"
                                    alt='img'
                                />
                                <div className="swiper-lazy-preloader swiper-lazy-preloader-white"></div>
                            </SwiperSlide>
                        )
                    }) :
                    <div>Data not Found</div>
                }
            </Swiper>
        </>
    );
}
