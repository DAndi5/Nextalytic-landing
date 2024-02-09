'use client'
//Кубик
import React, {useRef, useState} from 'react';

import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './styles.css';

import {EffectCube, Pagination} from 'swiper/modules';

export default function DemoSlider10() {
  return (
    <>
      <section className="w-full">
        {/*<div className=" h-screen">*/}
          {/*<ul className="h-full w-full">*/}
            <Swiper
              effect={'cube'}
              grabCursor={true}
              cubeEffect={{
                shadow: true,
                slideShadows: true,
                shadowOffset: 20,
                shadowScale: 0.94,
              }}
              pagination={true}
              autoplay={true}
              loop={true}
              modules={[EffectCube, Pagination]}
              className=" swiper10 "
            >
              <div
                className="h-full w-full absolute left-0 top-0 bg-white"
              ></div>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-1.jpg"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-2.jpg"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-3.jpg"/>
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://swiperjs.com/demos/images/nature-4.jpg"/>
              </SwiperSlide>
            </Swiper>
          {/*</ul>*/}
        {/*</div>*/}
      </section>
    </>
  );
}
