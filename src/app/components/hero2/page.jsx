import Image from 'next/image';
import Img1 from "/public/icon3/modalityImg1.gif";
import Img2 from "/public/icon3/modalityImg2.svg";
import Img3 from "/public/icon3/modalityImg3.png";
import Img4 from "/public/icon3/modalityImg4.svg";

import DemoSlider from "/src/app/pages/homeC/_components/DemoSlider10_1";
import dataSlider from "@/shared/data/slider-data.json";

import {FiArrowUpRight} from 'react-icons/fi';
import {FaWhatsapp} from "react-icons/fa6";

import {heroHome, contentHomeThree} from '@/shared/data/pages/home.data';


const Hero2 = () => {
  // const data = {dataSlider}
  const items = contentHomeThree.items;

  return (
    <>
      <div
        className='bg-zinc-300/[.95] relative w-full flex flex-col sm:h-full xl:px-24 lg:px-16 sm:px-8 px-4 sm:py-6 py-6 sm:pb-4 pb-4 w-full  dark:bg-zinc-300 '>
        <div
          className='bg-[#FE8F4F] py-0.5 font-normal border-[1px] rounded-2xl border-[#EFCA9C] px-3.5 w-fit'>
          <h1 className='font-semibold font-inter text-xs'>О нас</h1>
        </div>

        <h1
          className='xl:text-5xl lg:text-[2.4rem] font-manrope md:text-[1.7rem] text-[1.45rem]  text-[#091438] font-semibold xl:leading-[3.5rem]'>
          Несколько причин, почему люди выбирают нас!
        </h1>
        <p className='sm:text-base text-sm xl:w-[95%] text-[#6D7379] font-manrope'>
          Уже много лет выполняем услуги по кондиционированию, как для частных лиц, так и для предприятий.
        </p>

        <div
          className='sm:mt-0 mt-12 flex xl:gap-6 gap-0 items-center sm:px-6 px-2 lg:flex-grow lg:flex-nowrap flex-wrap'>

          <div className='xl:w-[55%] lg:w-[58%] sm:w-[60%] w-full'>
            <div className='flex flex-col lg:gap-2 sm:gap-3 gap-2'>


              <div className='flex flex-col gap-3'>

                {/*{items.map(({ title, description, icon: Icon, callToAction }, index) => (*/}
                {/*-----*/}
                {/*))}*/}

                <div className='lg:mt-4 md:mt-3 mt-2 flex gap-2 '>
                  <div className='xl:w-[40rem] lg:w-[30rem] sm:w-[10rem]'>
                    <Image alt='' src={Img1} width={100} height={100}/>
                  </div>
                  <div className=' flex sm:flex-grow sm:flex-nowrap flex-wrap gap-2'>
                    <h1 className='text-[#091438] text-2xl font-marcellus'>
                      {items[0].title}
                    </h1>
                    <p className='text-[#475467] font-raleway text-sm leading-loose'>
                      {items[0].description}
                    </p>
                  </div>
                </div>

                <div className='lg:mt-4 md:mt-3 mt-2 flex gap-2'>
                  <div className='xl:w-[40rem] lg:w-[30rem] sm:w-[10rem]'>
                    <Image alt='' src={Img2} width={100} height={100}/>
                  </div>
                  <div className=' flex sm:flex-grow sm:flex-nowrap flex-wrap gap-2'>
                    <h1 className='text-[#091438] text-2xl font-marcellus'>
                      {items[1].title}
                    </h1>
                    <p className='text-[#475467] font-raleway text-sm leading-loose'>
                      {items[1].description}
                    </p>
                  </div>
                </div>

                <div className='lg:mt-4 md:mt-3 mt-2 flex gap-2'>
                  <div className='xl:w-[40rem] lg:w-[30rem] sm:w-[10rem]'>
                    <Image alt='' src={Img3} width={100} height={100}/>
                  </div>
                  <div className=' flex sm:flex-grow sm:flex-nowrap flex-wrap gap-2'>
                    <h1 className='text-[#091438] text-2xl font-marcellus'>{items[2].title}</h1>
                    <p className='text-[#475467] font-raleway text-sm leading-loose'>
                      {items[2].description}
                    </p>
                  </div>
                </div>

                <div className='lg:mt-4 md:mt-3 mt-2 flex gap-2'>
                  <div className='xl:w-[40rem] lg:w-[30rem] sm:w-[10rem]'>
                    <Image alt='' src={Img4} width={100} height={100}/>
                  </div>
                  <div className=' flex sm:flex-grow sm:flex-nowrap flex-wrap gap-2'>
                    <h1 className='text-[#091438] text-2xl font-marcellus'>{items[3].title}</h1>
                    <p className='text-[#475467] font-raleway text-sm leading-loose'>{items[3].description}</p>
                  </div>
                </div>


              </div>


              <div className='lg:mt-4 md:mt-3 mt-2 flex gap-4'>
                <button
                  className='hover:scale-105 transition-all duration-200 font-inter border-0 bg-[#091438] text-white lg:px-5 md:px-4 px-3 lg:py-2.5 py-2 text-base rounded-3xl'>
                  <a href='/pricing'>
                    Все услуги
                  </a>
                </button>
                <button
                  className='text-balck flex items-center hover:text-[#FE8F4F] font-medium font-inter group gap-0.5'>
                  <a href={heroHome.callToAction2.href}>
                    <FaWhatsapp/>
                  </a>
                  <FiArrowUpRight className='text-xl transition-all duration-200 group-hover:rotate-45'/>
                </button>
              </div>

            </div>
          </div>

          <div className='xl:w-[45%] lg:w-[42%] sm:w-[40%] sm:mt-0 mt-10 w-full   md:justify-end justify-center'>
            <DemoSlider data={dataSlider}/>
          </div>
        </div>


      </div>
    </>
  )
}

export default Hero2
