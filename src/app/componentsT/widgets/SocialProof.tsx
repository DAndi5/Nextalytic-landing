import Image from 'next/image';
import {SocialProofProps} from '@/shared/types';

import {heroHome2} from '@/shared/data/pages/home.data';

const SocialProof = ({images, id, hasBackground = false}: SocialProofProps) => (
  <>
    <div className="m-20">
      <div className="flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">

        {images &&
          images.map(({src, alt, link}, index) => (
            <div key={`item-social-proof-${index}`}
                 className=" items-center justify-center justify-content flex max-w-none flex-col flex-nowrap gap-4 px-4 sm:flex-row sm:justify-center">

              <Image
                src={src}
                alt={alt}
                className="items-center justify-center justify-content  opacity-50 contrast-50 grayscale duration-75 hover:opacity-100 hover:contrast-100 hover:grayscale-0 md:w-16"
                object-fit="contain"
                width={64}
                height={64}
              />

              <p className="mb-6 text-xl font-normal text-gray-600 dark:text-slate-400">
                &nbsp;{alt}
              </p>

            </div>
          ))}

      </div>

      {heroHome2.subtitle}

    </div>
  </>
);

export default SocialProof;
