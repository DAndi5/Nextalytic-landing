'use client'
import {announcementData} from "@/shared/data/global.data";
import DemoSlider2 from "/src/app/pages/homeC/_components/DemoSlider111";
import dataSlider from "/src/shared/data/slider-data.json";
import "/src/app/componentsT/featuredC/globalsC.css";

const FeaturedC = () => {
  // const {title, callToAction, callToAction2} = announcementData;

  return (
    <main className="flex flex-col items-center justify-between">
      <DemoSlider2 data={dataSlider}/>
    </main>
  );

};

export default FeaturedC;
