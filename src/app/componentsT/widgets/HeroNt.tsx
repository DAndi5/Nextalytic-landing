import Image from 'next/image';
import {HeroProps} from '@/shared/types';
import CTA from '../common/CTA';


const HeroNt = ({title, subtitle, tagline, callToAction, callToAction2, image}: HeroProps) => {
  return (
    <>
      <section id="heroOne">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="">
            {/*<div className="py-12 md:py-20">*/}
            <div className="py-12 mx-auto max-w-4xl pb-10  md:pb-16">
              {tagline && (
                <p className="text-base font-semibold uppercase tracking-wide text-slate-600 dark:text-slate-200">
                  {tagline}
                </p>
              )}
              {title && (
                <h1
                  className="text-center leading-tighter font-heading mb-6 text-4xl font-bold tracking-tighter md:text-5xl lg:text-6xl">
                  {title}
                </h1>
              )}
            </div>
              <div className="mx-auto max-w-5xl">
                {subtitle &&
                  <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">
                    {subtitle}</p>}
                <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">
                  {callToAction && <CTA callToAction={callToAction} linkClass="btn btn-primary"/>}
                  {callToAction2 && <CTA callToAction={callToAction2} linkClass="btn"/>}
                </div>
              </div>
            {/*{!image && (*/}
            {/*  <div className="relative m-auto max-w-5xl">*/}
            {/*    <Image*/}
            {/*      className="mx-auto h-auto w-full rounded-md bg-gray-400 dark:bg-slate-700"*/}
            {/*      src={image.src}*/}
            {/*      alt={image.alt}*/}
            {/*      width={1024}*/}
            {/*      height={607}*/}
            {/*      sizes="(max-width: 64rem) 100vw, 1024px"*/}
            {/*      loading="eager"*/}
            {/*      // placeholder="blur"*/}
            {/*      priority*/}
            {/*    />*/}
            {/*  </div>*/}
            {/*)}*/}
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroNt;
