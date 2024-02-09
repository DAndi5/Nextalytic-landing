import LogoIcon from '/public/img/icon/icon-02-primary.png'
import Image from "next/image";

const Logo = () => (
  <span className="ml-2 self-center whitespace-nowrap text-2xl font-bold text-gray-900 dark:text-white ">

    <Image
      alt=''
      src={LogoIcon}
      className="ml-3.5"
    />
  </span>
);

export default Logo;
