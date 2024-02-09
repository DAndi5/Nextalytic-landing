"use client"; // <===== REQUIRED

import React from "react";

// Swiper components, modules and styles
import {Parallax, Autoplay, Navigation, Pagination} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './styles.css';

// Our custom button component
import SliderButtons from "./SliderButtons";


// interface Slide {
//   id: number;
//   title: string;
//   tagline: string;
//   image: string;
//   buttons: ButtonProps[];
// }
//
// interface ButtonProps {
//   id: number;
//   text: string;
//   link: string;
//   type: string;
// }
//
// interface DemoSliderProps {
//   data: Slide[];
// }

// const DemoSlider: React.FC<DemoSliderProps> = ({data}) => {
  export default function DemoSlider({data}) {
  return (
    <>
      <Swiper
        navigation={true}
        pagination={{type: "bullets", clickable: true}}
        autoplay={true}
        loop={true}
        parallax={true}
        style={{
          '--swiper-navigation-color': '#fff',
          '--swiper-pagination-color': '#fff',
        }}
        modules={[Parallax, Autoplay, Navigation, Pagination]}
        // reverseDirection={true}
        // className="mySwiper swiper6"
      >
        <div
          className="h-full w-full absolute left-0 top-0 bg-white"
        ></div>
        {data.map(({id, image, tagline, title, buttons}) => (
          <SwiperSlide key={id}>
            <div
              slot="container-start"
              className="parallax-bg h-full w-full absolute left-0 top-0"
              data-swiper-parallax="-23%"
              style={{
                background: `url(${image}) center center / cover scroll no-repeat`,
              }}
            ></div>
            <div className="opacity-50 h-full w-full absolute left-0 top-0 bg-cyan-600 "></div>

            <div className="title" data-swiper-parallax="-3000">
              <div className="text-center">
                {tagline && (
                  <p className="text-md sm:text-xl lg:text-3xl font-semibold text-white">
                    {tagline}
                  </p>
                )}
              </div>
            </div>
            <div className="subtitle" data-swiper-parallax="-2000">
              <p className="text-center text-3xl sm:text-6xl lg:text-8xl font-bold text-white">
                {title}
              </p>
            </div>
            <div className=" text-center" data-swiper-parallax="-1000">
              {buttons.length > 0 ? (
                <p className=" bg-gray-800 inline-block px-9 py-2 rounded-full text-white mt-10 lg:mt-20">
                  <SliderButtons buttons={buttons}/>
                </p>
                // ) : null}
              ) : <p className=" opacity-15 inline-block px-9 py-2 rounded-full text-white mt-10 lg:mt-20">
                &apos;
              </p>}
            </div>
            {/*----------------------*/}
            {/*<div className="h-1/2 lg:h-full w-full absolute left-0 top-0 bg-black opacity-50"></div>*/}
            {/*<div className="opacity-50 h-full w-full absolute left-0 top-0 bg-black "></div>*/}
            {/*<div className=" h-1/2 lg:h-full relative z-10  flex items-center justify-center">*/}
            {/*  /!*<div className="relative z-10 h-full flex items-center justify-center">*!/*/}
            {/*  <div className="text-center">*/}
            {/*    {tagline && (*/}
            {/*      <p className="text-md sm:text-xl lg:text-3xl font-semibold text-white">*/}
            {/*        {tagline}*/}
            {/*      </p>*/}
            {/*    )}*/}
            {/*    <p className="text-3xl sm:text-6xl lg:text-8xl font-bold text-white">*/}
            {/*      {title}*/}
            {/*    </p>*/}
            {/*    {buttons.length > 0 ? (*/}
            {/*      <p className=" bg-gray-800 inline-block px-9 py-2 rounded-full text-white mt-10 lg:mt-20">*/}
            {/*        <SliderButtons buttons={buttons}/>*/}
            {/*      </p>*/}
            {/*    ) : null}*/}
            {/*  </div>*/}
            {/*</div>*/}
          </SwiperSlide>
        ))}
      </Swiper>

    </>
  );
};

// export default DemoSlider;
