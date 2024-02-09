import CaseStudies from '@/app/components/caseStudies/page'
import Modalities from '@/app/components/modalities/page'
import Footer from '@/app/components/footer/page'
import Hero from '@/app/components/hero/page'
import About from '@/app/components/about/page'
import Embark from '@/app/components/embark/page'
import Services from '@/app/components/services/page'
import Testimonials from '@/app/components/testimonials/page'
import React from 'react'
import FeaturedC from "@/app/componentsT/featuredC";
import Hero2 from '@/app/components/hero2/page'

export default function Main1() {
  return (
    <>
      {/*<Hero/>*/}
      <FeaturedC/>
      <About/>
      <Hero2/>
      <Services/>
      <Testimonials/>
      <Embark/>

      {/*<CaseStudies/>*/}
      {/*<Modalities/>*/}
      {/*<Testimonials/>*/}
      {/*<Embark/>*/}
      {/*<Footer/>*/}
    </>
  )
}
