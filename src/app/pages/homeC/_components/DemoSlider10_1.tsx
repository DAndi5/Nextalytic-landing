'use client'

//Кубик
import React, {useRef, useState} from 'react';
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-cube';
import 'swiper/css/pagination';

import './styles.css';

import {Autoplay, EffectCube, Pagination} from 'swiper/modules';

import Image from 'next/image';
import heroImg1 from '/public/img4/carousel-1.jpg'
import heroImg2 from '/public/img4/carousel-2.jpg'
import heroImg3 from '/public/img4/carousel-3.jpg'
import heroImg4 from '/public/img4/carousel-4.jpg'
import heroImg5 from '/public/img4/carousel-5.jpg'


export default function DemoSlider10() {
  return (
    <>
      <section className="w-full">
        {/*<div className=" h-screen">*/}
        <Swiper
          effect={'cube'}
          grabCursor={true}
          cubeEffect={{
            shadow: false,
            slideShadows: false,
            shadowOffset: 20,
            shadowScale: 1.2,
          }}
          pagination={true}
          autoplay={true}
          loop={true}
          modules={[Autoplay, EffectCube, Pagination]}
        >
          <div
            className="h-full w-full absolute left-0 top-0 bg-zinc-300 "
            // className="h-full w-full absolute left-0 top-0 bg-zinc-300"
          ></div>
          <SwiperSlide>
            <Image
              alt=''
              src={heroImg1}
              className='center center / cover scroll no-repeat '
              // className='mx-auto h-auto center rounded-md '
            />
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt=''
              src={heroImg2}
              // className='h-full '
            />
            {/*<img src="https://swiperjs.com/demos/images/nature-2.jpg"/>*/}
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt=''
              src={heroImg3}
              // className='xl:w-[18.5rem] lg:w-[17rem] w-[15rem]'
            />
            {/*<img src="https://swiperjs.com/demos/images/nature-3.jpg"/>*/}
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt=''
              src={heroImg4}
              // className='xl:w-[18.5rem] lg:w-[17rem] w-[15rem]'
            />
            {/*<img src="https://swiperjs.com/demos/images/nature-4.jpg"/>*/}
          </SwiperSlide>
          <SwiperSlide>
            <Image
              alt=''
              src={heroImg5}
              // className='xl:w-[18.5rem] lg:w-[17rem] w-[15rem]'
            />
            {/*<img src="https://swiperjs.com/demos/images/nature-3.jpg"/>*/}
          </SwiperSlide>
        </Swiper>
        {/*</ul>*/}
        {/*</div>*/}
      </section>
    </>
  );
}
