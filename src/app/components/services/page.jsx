'use client'
import React from 'react'
import Carousel from '../carousel/page'
import {FiArrowUpRight} from "react-icons/fi";
import {heroHome} from "@/shared/data/pages/home.data";
import {FaWhatsapp} from "react-icons/fa6";

const Services = () => {
  return (
    <>
      {/*<section className="two-title align-middle text-white fs-1 text-center fw-medium">*/}
      <div className=' sm:py-28 py-14'>
        {/*<div className='bg-white sm:py-28 py-14'>*/}
        <div className='xl:px-24 lg:px-16 sm:px-8 px-4'>
          <div className='bg-[#FE8F4F] py-0.5 font-normal border-[1px] rounded-2xl border-[#EFCA9C] px-3.5 w-fit'>
          {/*<div className='bg-[#FEE1BD] py-0.5 font-normal border-[1px] rounded-2xl border-[#EFCA9C] px-3.5 w-fit'>*/}
            <h1 className='font-inter text-sm font-semibold'>Основные сервисы</h1>
          </div>
          <div className='flex justify-between items-center mt-2 sm:flex-nowrap flex-wrap'>
            <div className='flex flex-col gap-1 xl:w-[48%] lg:w-[65%] sm:w-[60%] w-full'>
              <h1
                className='lg:text-5xl sm:text-4xl text-2xl text-[#101828] lg:leading-[4rem] font-manrope font-bold'>
                Мы предоставляем <span className='text-[#FE8F4F]'>профессиональные услуги </span>
                по обслуживанию кондиционеров</h1>
            </div>
            <div className='xl:w-[52%] lg:w-[35%] sm:w-[40%] w-full  flex justify-end'>
              {/*<button*/}
              {/*  className='text-white hover:scale-105 transition-all font-inter duration-200 bg-[#091438] sm:text-base text-xs sm:px-5 px-3 py-3 rounded-3xl'>*/}
              {/*  Все услуги*/}
              {/*</button>*/}
              {/*<div className='lg:mt-4 md:mt-3 mt-2 flex gap-4'>*/}
              {/*  <button*/}
              {/*    className='hover:scale-105 transition-all duration-200 font-inter border-0 bg-[#091438] text-white lg:px-5 md:px-4 px-3 lg:py-2.5 py-2 text-base rounded-3xl'>*/}
              {/*    <a href='/pricing'>*/}
              {/*      Все услуги*/}
              {/*    </a>*/}

              {/*  </button>*/}
              <button
                className=' flex items-center hover:text-[#FE8F4F] font-medium font-inter group gap-0.5'>
                <a href={heroHome.callToAction2.href}>
                  <FaWhatsapp/>
                </a>
                <FiArrowUpRight className='text-xl transition-all duration-200 group-hover:rotate-45'/>
              </button>

              {/*</div>*/}
            </div>
          </div>
        </div>

        <Carousel/>
      </div>
      {/*</section>*/}
    </>
  )
}

export default Services
