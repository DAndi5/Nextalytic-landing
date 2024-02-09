'use client'
import Img1 from '/public/img3/imgclean1.png'
import Img2 from '/public/img3/imgclean2.jpg'
import Img3 from '/public/img3/imgclean3.jpg'
import Img4 from '/public/img3/imgclean4.png'

import Image from 'next/image';

import CountUp from "react-countup";
import {heroHome1} from "@/shared/data/pages/home.data";


const About = () => {
  return (
    <>
      <div className=' sm:py-18 py-14 xl:px-24 lg:px-16 sm:px-8 px-4 '>

        <div
          className='bg-[#FE8F4F]  py-0.5 mb-4 font-normal border-[1px] rounded-2xl border-[#EFCA9C] px-3.5 w-fit '>
          <h1 className='font-semibold font-inter lg:text-sm text-xs'>{heroHome1.header?.title}</h1>
        </div>

        <div
          className='border-[1px] border-t-0 border-l-0 border-r-0 border-b-[#DFDFDF] pb-5 flex flex-col sm:gap-4 gap-2'>
          <h1
            className='xl:text-5xl lg:text-[2.7rem] sm:text-3xl text-2xl font-manrope text-[#091438] font-semibold lg:leading-[4rem]'>
            Специализированное предприятие <br/>{heroHome1.header2?.title}</h1>
        </div>

        <div className='grid sm:grid-cols-2 grid-cols-1 sm:gap-y-0 gap-y-10 xl:gap-x-16 gap-x-10 items-center'>
          <div>
            <div
              className='border-[1px] border-t-0 border-l-0 border-r-0 border-b-[#DFDFDF] pb-5 flex flex-col sm:gap-4 gap-2'>
              {heroHome1.subtitle}
            </div>
            <div
              className='flex sm:flex-col sm:gap-3 gap-2 sm:flex-nowrap flex-wrap sm:justify-normal justify-between lg:mt-10 sm:mt-6 mt-3 lg:px-6 px-4'>
              <div className='flex items-center lg:gap-4 gap-3'>
                <h1 className='lg:text-3xl sm:text-2xl text-xl text-[#101828] font-medium font-inter'>
                  <CountUp start={0} duration={1} end={90} enableScrollSpy={true}/>
                  +</h1>
                <p className='text-[#101828] lg:text-base sm:text-sm text-xs font-inter font-medium'>
                  Дней гаринтии</p>
              </div>
              <div className='flex items-center lg:gap-4 gap-3'>
                <h1 className='lg:text-3xl sm:text-2xl text-xl text-[#101828] font-medium font-inter'>
                  <CountUp start={30} duration={2} end={99} enableScrollSpy={true}/>
                  %</h1>
                <p className='text-[#101828] lg:text-base sm:text-sm text-xs font-inter font-medium'>
                  Благодарных клиентов</p>
              </div>
            </div>
          </div>

          <div className='flex sm:gap-5 gap-3 sm:px-0 px-4'>
            <div className='flex flex-col sm:gap-5 gap-3'>
              <Image alt='' className='hover:scale-105 transition-all duration-200' src={Img1}/>
              <Image alt='' className='hover:scale-105 transition-all duration-200' src={Img2}/>
            </div>
            <div className='flex flex-col sm:gap-5 gap-3'>
              <Image alt='' className='hover:scale-105 transition-all duration-200' src={Img3}/>
              <Image alt='' className='hover:scale-105 transition-all duration-200' src={Img4}/>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
