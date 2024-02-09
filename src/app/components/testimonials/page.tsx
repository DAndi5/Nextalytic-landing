'use client'
import Slider from 'react-slick'
import Image from 'next/image';
import Quotes from '@/assets/quotes.svg'
import {GrFormNextLink} from 'react-icons/gr';
import {GrFormPreviousLink} from 'react-icons/gr';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';


import Img5 from '/public/img/testimonial-5.png'
import Img6 from '/public/img/testimonial-6.png'
import Img7 from '/public/img/testimonial-7.png'
import Img8 from '/public/img/testimonial-8.png'

import {testimonialsHome2} from "@/shared/data/pages/home.data";
import {Testimonial} from "@/shared/types";
// import {twMerge} from "tailwind-merge";
// import {Testimonial, TestimonialsProps} from "@/shared/types";

import {testimonialsHome} from "@/shared/data/pages/home.data";
import {twMerge} from "tailwind-merge";

const CardStruct2 = ({
                       name,
                       job,
                       testimonial,
                       image,
                     }: Testimonial) => {
  return (
    <>
      <div className='py-12 relative'>
        <Image src={Quotes} alt='' className='absolute w-[4.3rem] top-2 left-10'/>
        <div className='border-[1px] flex flex-col gap-4 bprder-[#EAECF0]  py-6 pt-10 px-6 rounded-3xl'>
          <div className='border-[1px] border-b-[#EAECF0] border-t-0 border-l-0 border-r-0 pb-4'>
            <p className='text-[#636363] font-manrope leading-6 text-sm'>
              {testimonial}
            </p>
          </div>
          <div className='flex gap-3'>
            <div
              className="bg-dark hover:opacity-100 hover:contrast-100 hover:grayscale-0 md:w-16"
            >
              {/*<Image*/}
              {/*  className="mx-auto w-full rounded-lg shadow-lg bg-gray-400 dark:bg-slate-700"*/}
              {/*  src={props.image}*/}
              {/*  // src={props.image}*/}
              {/*  width={100}*/}
              {/*  height={100}*/}
              {/*  alt={props.alt}*/}
              {/*/>*/}
              {image && (
                <Image
                  src={image.src}
                  width={100}
                  height={100}
                  alt={image.alt}
                  className="mx-auto w-full rounded-lg shadow-lg bg-gray-400 dark:bg-slate-700"
                />
              )}
            </div>
            <div className='flex flex-col'>
              <h1 className='text-[#091438] font-manrope font-semibold text-lg'>
                {name}

              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}


const Testimonials = () => {

  const settings = {
    infinite: true,
    centerPadding: '50px',
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    arrows: false,
    prevArrow: <GrFormPreviousLink className='prev'/>,
    nextArrow: <GrFormNextLink className='next'/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          slidesToShow: 1
        }
      }
    ]
  };

  const testimonials = testimonialsHome2.testimonials;

  return (
    <>
      <div className=' border-[1px] border-[#E7E7E7] sm:py-1 py-1'>
        {/*<div className='bg-[#FAFAFA] border-[1px] border-[#E7E7E7] sm:py-8 py-14'>*/}
        <div className='xl:px-24 lg:px-16 sm:px-8 px-4'>
          <div className='w-full'>
            <h1
              className='lg:text-5xl sm:text-4xl text-xl w-[90%] font-medium leading-snug text-[#091438] font-manrope'>
              Отзывы</h1>
          </div>
        </div>

        <div className='w-100%  xl:pl-24 lg:pl-16 sm:pl-8 pl-4 sm:pr-0 pr-4'>
          <Slider className='sm:my-12 my-10 absolute' {...settings}>

            {testimonials.map(
              ({name, job, testimonial, image}, index) =>
                testimonial && (

                  <div key={`item-testimonial-${index}`}
                       className='xl:px-4 lg:px-2 sm:px-4 px-6'>
                    <CardStruct2
                      name={name}
                      job={job}
                      testimonial={testimonial}
                      image={image}
                    />
                  </div>

                ),
            )}

          </Slider>
        </div>
      </div>
    </>
  )
}

export default Testimonials
