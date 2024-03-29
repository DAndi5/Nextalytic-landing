'use client'
import Slider from 'react-slick'
import {GrFormNextLink} from 'react-icons/gr';
import {GrFormPreviousLink} from 'react-icons/gr';
import {FiArrowUpRight} from 'react-icons/fi';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../styles/page.css'
import Img1 from '/public/img/service-1.jpg'
import Img2 from '/public/img/service-2.jpg'
import Img3 from '/public/img/service-3.jpg'
import Img4 from '/public/img/service-4.jpg'
import Img5 from '/public/img/service-5.jpg'
import Img6 from '/public/img/service-6.jpg'
import ImgIcon1 from '/public/img/icon/icon-01-light.png'
import ImgIcon2 from '/public/img/icon/icon-02-light.png'
import ImgIcon3 from '/public/img/icon/icon-03-light.png'
import ImgIcon4 from '/public/img/icon/icon-04-light.png'
import ImgIcon5 from '/public/img/icon/icon-05-light.png'
import ImgIcon6 from '/public/img/icon/icon-06-light.png'
import Image from 'next/image';

const CardStruct = (props) => {
  return (
    <>
      <div className='py-4'>
        <div
          className='flex flex-col gap-4 py-6 sm:px-8 px-4  rounded-3xl border-[1px] border-[#E7E7E7] hover:shadow-cardShadow cursor-pointer'>
          <div>
            {props.img}
          </div>
          <div className='flex gap-3 items-center justify-center'>
            <div className="p-2 bg-orange-500 flex items-center justify-center ">
              {props.imgIcon}
            </div>
            <div className='flex flex-col'>
              <h1 className='text-[#101828] font-manrope font-semibold text-lg'>
                {props.heading}
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

const Carousel = () => {

  const settings = {
    infinite: true,
    centerPadding: '50px',
    slidesToShow: 3,
    slidesToScroll: -1,
    autoplay: true,
    autoplaySpeed: 3000,
    speed: 500,
    prevArrow: <GrFormPreviousLink className='prev'/>,
    nextArrow: <GrFormNextLink className='next'/>,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: true
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: true,
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <>
      <div className='w-80%'>
        <Slider className='sm:my-12 my-10 absolute' {...settings}>
          <div className='xl:px-4 lg:px-2 sm:px-4 px-6'>
            <CardStruct
              img={<Image src={Img1} alt=''/>}
              heading="Установка в сеть переменного тока"
              des="Building responsive, user-friendly websites tailored for a global audience. Whether it's an e-commerce site or a dynamic portal, we bring your digital vision to life."
              imgIcon={<Image src={ImgIcon1} alt=''/>}
            />
          </div>
          <div className='xl:px-4 lg:px-2 sm:px-4 px-6'>
            <CardStruct
              img={<Image src={Img2} alt=''/>}
              heading="Услуги по обслуживанию"
              des="Designing intuitive apps for Android and iOS, melding aesthetics with flawless functionality. We bridge the gap between user needs and seamless mobile experiences."
              imgIcon={<Image src={ImgIcon2} alt=''/>}
            />
          </div>
          <div className='xl:px-4 lg:px-2 sm:px-4 px-6'>
            <CardStruct
              img={<Image src={Img3} alt=''/>}
              heading="Восстановление функций"
              des="Crafting premium software tailored to your business needs. We turn your ideas into powerful tools, ensuring functionality meets innovation every step of the way."
              imgIcon={<Image src={ImgIcon3} alt=''/>}

            />
          </div>
          <div className='xl:px-4 lg:px-2 sm:px-4 px-6'>
            <CardStruct
              img={<Image src={Img4} alt=''/>}
              heading="Техническое обслуживание и ремонт"
              des="Harness the power of AI to supercharge your operations. From predictive analytics to intelligent automations, we've got the magic touch that will set you ahead."
              imgIcon={<Image src={ImgIcon4} alt=''/>}
            />
          </div>
          <div className='xl:px-4 lg:px-2 sm:px-4 px-6'>
            <CardStruct
              img={<Image src={Img5} alt=''/>}
              heading="Кондиционирование воздуха в помещении"
              des="Harness the power of AI to supercharge your operations. From predictive analytics to intelligent automations, we've got the magic touch that will set you ahead."
              imgIcon={<Image src={ImgIcon5} alt=''/>}
            />
          </div>
          <div className='xl:px-4 lg:px-2 sm:px-4 px-6'>
            <CardStruct
              img={<Image src={Img6} alt=''/>}
              heading="Ежегодные проверки"
              des="Harness the power of AI to supercharge your operations. From predictive analytics to intelligent automations, we've got the magic touch that will set you ahead."
              imgIcon={<Image src={ImgIcon6} alt=''/>}
            />
          </div>
        </Slider>
      </div>
    </>
  )
}

export default Carousel
