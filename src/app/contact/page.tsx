import type {Metadata} from 'next';

import {contentContOne} from "@/shared/data/pages/home.data";
import Content from '@/app/componentsT/widgets/Content';

export const metadata: Metadata = {
  title: 'Contact us',
};

const Page = () => {
  return (
    <>

      {/*<Hero {...heroContact} />*/}
      {/*<Contact2 {...contact2Contact} />*/}
      {/*<Features2 {...features2Contact} />*/}
      <Content {...contentContOne} />

    </>
  );
};

export default Page;
