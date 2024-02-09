import { SITE } from '@/config.js';

import Hero from '@/app/componentsT/widgets/Hero';
import SocialProof from '@/app/componentsT/widgets/SocialProof';
import Features from '@/app/componentsT/widgets/Features';
import Content from '@/app/componentsT/widgets/Content';
import Steps from '@/app/componentsT/widgets/Steps';
import Testimonials from '@/app/componentsT/widgets/Testimonials2';
import FAQs2 from '@/app/componentsT/widgets/FAQs2';
import Pricing from '@/app/componentsT/widgets/Pricing';
import Team from '@/app/componentsT/widgets/Team';
import CallToAction2 from '@/app/componentsT/widgets/CallToAction2';
import Contact from '@/app/componentsT/widgets/Contact';
import HeroNt from '@/app/componentsT/widgets/HeroNt'

import {
  callToAction2Home,
  contactHome,
  contentHomeOne,
  contentHomeTwo,
  faqs2Home,
  featuresHome,
  heroHome,
  pricingHome,
  socialProofHome,
  stepsHome,
  teamHome,
  testimonialsHome,
} from '@/shared/data/pages/home.data';

export default function Main1() {
  return (
    <>
      {/*<Hero {...heroHome} />*/}

      <HeroNt {...heroHome}/>
      <SocialProof {...socialProofHome} />

      {/*<Features {...featuresHome} />*/}
      <Content {...contentHomeOne} />
      <Content {...contentHomeTwo} />
      {/*<Steps {...stepsHome} />*/}

      {/*<Testimonials {...testimonialsHome} />*/}

      {/*<FAQs2 {...faqs2Home} />*/}
      {/*<Pricing {...pricingHome} />*/}
      {/*<Team {...teamHome} />*/}
      {/*<Contact {...contactHome} />*/}
      {/*<CallToAction2 {...callToAction2Home} />*/}
    </>
  )
}
