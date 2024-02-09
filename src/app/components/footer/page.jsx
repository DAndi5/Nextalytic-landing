'use client'
import Icon1 from '@/assets/footerIcon1.svg'
import Icon2 from '@/assets/footerIcon1.svg'
import Icon3 from '@/assets/footerIcon1.svg'
import Icon4 from '@/assets/footerIcon1.svg'
// import Logo from '@/assets/footerLogo.svg'

import Logo from '@/app/componentsT/atoms/Logo';


import {Fade} from "react-awesome-reveal";
import {heroHome1} from "@/shared/data/pages/home.data";

const Footer = () => {
  return (
    <>
      <div className='bg-[#091438] border-[1px] border-[#E8E8E8] sm:pt-2 pt-1 xl:px-24 lg:px-16 sm:px-8 px-4'>
        <Fade delay={500}>

          <div className='flex justify-between items-center py-8'>
            <Logo/>
            <p className='text-white font-manrope font-light text-xs'>{heroHome1.header3?.title}</p>
          </div>

        </Fade>
      </div>
    </>
  )
}

export default Footer
