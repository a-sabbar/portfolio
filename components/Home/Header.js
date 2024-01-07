'use client'
import Link from 'next/link';
import TextEffect from '../ShowCase/TextEffect/TextEffect';
import {
    useState,
    useEffect,
    useRef
} from 'react';

export default function Header() {
    const [open, setOpen] = useState(false);
    const firstLine = useRef(null);
    const secondLine = useRef(null);
    const thirdLine = useRef(null);
    const handleOpen = () => {
        secondLine.current.style.opacity = 0;
        firstLine.current.style.transform = "rotate(45deg)  translate(7px,8px)";
        thirdLine.current.style.transform = "rotate(-45deg) translate(7px,-8px)";
        setOpen(true);
    }
    const handleClose = () => {

        secondLine.current.style.opacity = 1;
        firstLine.current.style.transform = "rotate(0deg) translate(0px,0px)";
        thirdLine.current.style.transform = "rotate(0deg) translate(0px,0px)";
        setOpen(false);
    }
    return (
    <div className=" flex items-center justify-around  w-full x:max-sm:justify-between x:max-sm:p-[30px]  min-h-[120px]  overflow-hidden lg:justify-between lg:px-40
     z-[2] bg-black ">
        <Link href="/" className="slef-start z-[1]"
        >
          <svg width="110" height="53" viewBox="0 0 110 53" fill="#FFF" xmlns="http://www.w3.org/2000/svg">
            <path d="M33.66 47.09C34.68 47.09 36.04 45.9283 37.74 43.605C39.44 41.225 41.1117 38.1933 42.755 34.51C44.455 30.77 45.475 28.9 45.815 28.9C46.2117 28.9 46.41 29.1267 46.41 29.58C46.41 31.1667 45.5883 33.6883 43.945 37.145C39.4683 46.665 35.6717 51.425 32.555 51.425C29.9483 51.425 28.0783 50.9717 26.945 50.065C26.435 49.555 26.18 44.1717 26.18 33.915L12.24 34.935C11.1633 37.8817 10.2 40.8283 9.35 43.775C8.5 46.7217 7.93333 48.535 7.65 49.215C7.02667 50.6883 5.525 51.425 3.145 51.425C1.55833 51.425 0.765 50.745 0.765 49.385C0.765 48.025 1.84167 46.0417 3.995 43.435C4.39167 42.925 5.695 40.1767 7.905 35.19C7.11167 35.2467 6.34667 35.275 5.61 35.275C3.62667 35.275 2.635 34.425 2.635 32.725C2.635 31.195 3.42833 30.43 5.015 30.43C5.12833 30.43 6.74333 30.5717 9.86 30.855C10.71 28.8717 11.6167 26.9167 12.58 24.99C20.0033 9.46333 25.1033 1.7 27.88 1.7C29.9767 1.7 31.4217 11.4183 32.215 30.855H32.98C33.3767 30.855 33.575 31.1383 33.575 31.705C33.575 32.2717 33.15 32.7533 32.3 33.15C32.64 42.4433 33.0933 47.09 33.66 47.09ZM13.515 31.28C20.145 31.28 24.3667 31.2517 26.18 31.195C26.1233 30.2883 26.0667 28.7017 26.01 26.435C25.9533 24.1683 25.8967 22.2133 25.84 20.57C25.7833 18.87 25.7267 17.1133 25.67 15.3C25.4433 11.39 25.1033 9.435 24.65 9.435C24.0267 9.435 22.7517 11.2767 20.825 14.96C18.8983 18.6433 17.3967 21.76 16.32 24.31C14.8467 27.9933 13.9117 30.3167 13.515 31.28ZM57.798 30.345L58.478 26.01C58.478 25.3867 58.2797 24.82 57.883 24.31C57.4863 23.8 56.9763 23.545 56.353 23.545C54.2563 23.545 52.443 25.1317 50.913 28.305C49.383 31.4217 48.618 34.425 48.618 37.315C48.618 40.205 49.213 42.5567 50.403 44.37C51.593 46.1267 53.038 47.005 54.738 47.005C56.4947 47.005 58.053 46.6083 59.413 45.815C60.773 45.0217 62.0197 43.8883 63.153 42.415C65.533 39.2983 67.573 35.7567 69.273 31.79C69.7263 30.77 70.0663 30.0333 70.293 29.58C70.5763 29.1267 70.8597 28.9 71.143 28.9C71.483 28.9 71.653 29.1267 71.653 29.58C71.653 31.45 71.0013 33.6883 69.698 36.295C68.3947 38.9017 67.2897 40.9133 66.383 42.33C65.533 43.69 64.428 45.135 63.068 46.665C60.2347 49.8383 56.693 51.425 52.443 51.425C49.213 51.425 46.748 50.2917 45.048 48.025C43.4047 45.7017 42.583 43.2367 42.583 40.63C42.583 34.17 43.9713 29.2683 46.748 25.925C49.5813 22.525 53.1513 20.825 57.458 20.825C59.2713 20.825 60.688 21.3067 61.708 22.27C62.7847 23.1767 63.323 24.225 63.323 25.415C63.323 27.625 62.9263 29.2683 62.133 30.345C61.3397 31.4217 60.3763 31.96 59.243 31.96C58.2797 31.96 57.798 31.4217 57.798 30.345ZM73.9593 46.41L74.0443 49.045C74.0443 50.6317 73.591 51.425 72.6843 51.425C71.3243 51.425 70.021 51.255 68.7743 50.915C67.5276 50.5183 66.9043 50.0083 66.9043 49.385C66.9043 48.705 67.046 46.4667 67.3293 42.67C67.6693 38.8167 67.8393 35.9267 67.8393 34V29.07C67.8393 14.5633 70.4176 5.32667 75.5743 1.36C76.7643 0.453331 77.9826 -2.02656e-06 79.2293 -2.02656e-06C79.796 -2.02656e-06 80.3626 0.623332 80.9293 1.87C81.496 3.11666 81.7793 4.73166 81.7793 6.715C81.7793 11.5883 80.9576 16.15 79.3143 20.4C77.671 24.65 75.9993 27.9083 74.2993 30.175C74.2426 31.5917 74.2143 33.8017 74.2143 36.805C74.441 36.465 75.631 34.5383 77.7843 31.025C79.9376 27.5117 81.751 24.9333 83.2243 23.29C84.7543 21.6467 86.1143 20.825 87.3043 20.825C88.4943 20.825 89.5426 21.2217 90.4493 22.015C91.4126 22.8083 91.8943 23.8 91.8943 24.99C91.8943 27.4833 91.611 31.1667 91.0443 36.04C90.5343 40.8567 90.2793 43.9167 90.2793 45.22C90.2793 46.4667 90.4493 47.09 90.7893 47.09C91.7526 47.0333 93.0843 45.8433 94.7843 43.52C96.4843 41.14 98.156 38.1083 99.7993 34.425C101.499 30.7417 102.519 28.9 102.859 28.9C103.256 28.9 103.454 29.1267 103.454 29.58C103.454 31.1667 102.633 33.6883 100.989 37.145C96.5126 46.665 92.7443 51.425 89.6843 51.425C87.4743 51.425 85.8026 50.9717 84.6693 50.065C84.2726 49.6683 84.0743 48.6483 84.0743 47.005C84.0743 45.305 84.216 42.585 84.4993 38.845C84.8393 35.0483 85.0093 32.215 85.0093 30.345C85.0093 28.475 84.6693 27.54 83.9893 27.54C83.366 27.54 81.666 29.495 78.8893 33.405C76.1126 37.2583 74.6393 39.7233 74.4693 40.8C74.1293 42.7833 73.9593 44.6533 73.9593 46.41ZM79.4843 8.585C79.4843 6.205 79.1726 5.015 78.5493 5.015C77.5293 5.015 76.5376 8.16 75.5743 14.45C75.0643 17.7933 74.696 21.675 74.4693 26.095C77.8126 19.125 79.4843 13.2883 79.4843 8.585ZM104.482 52.53C103.632 52.53 102.811 52.2467 102.017 51.68C101.224 51.17 100.827 50.2917 100.827 49.045C100.827 47.7983 101.394 46.835 102.527 46.155C103.661 45.4183 104.709 45.05 105.672 45.05C106.636 45.05 107.429 45.3333 108.052 45.9C108.732 46.41 109.072 47.0617 109.072 47.855C109.072 50.9717 107.542 52.53 104.482 52.53Z" />
          </svg>
        </Link>
        <div className="flex items-center space-x-8 text-lg"
        >
          <div className="relative flex-col justify-center items-center z-50 gap-[7px] self-end hidden x:max-sm:flex cursor-pointer" onClick={() => open ? handleClose() : handleOpen()}>
              <div ref={firstLine} className="w-[45px] h-[3.5px] bg-[#FFF]  transition-all duration-500 rounded-md"></div>
              <div ref={secondLine} className="w-[35px] h-[3.5px] bg-[#FFF] transition-all duration-150 rounded-md"></div>
              <div ref={thirdLine} className="w-[45px] h-[3.5px] bg-[#FFF]  transition-all duration-500 rounded-md"></div>
          </div>
          {
            open && (
                <>
                    <div className="top-[0px] left-[0px] w-full h-[100vh] bg-black !m-0 z-10 fixed sm:hidden"></div>
                    <div className="z-40 sm:hidden flex flex-col  gap-4  absolute top-0 left-0 w-full h-[100vh] !m-0 items-center justify-center">
                        <Link target="_blank" href="https://www.github.com/a-sabbar" className="text-white relative after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-[0px] after:bg-white after:transition-all after:duration-[1700ms] after:ease-in-out hover:after:w-full">
                            <TextEffect text="Github"/>
                        </Link>
                        <Link target="_blank" href="https://www.linkedin.com/in/a-sabbar" className="text-white relative after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-[0px] after:bg-white after:transition-all after:duration-[1700ms] after:ease-in-out hover:after:w-full">
                            <TextEffect text="Linkedin"/>
                        </Link>
                        <Link target="_blank" href="mailto:achraf.sabbar2002@gmail.com" className="text-white relative after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-[0px] after:bg-white after:transition-all after:duration-[1700ms] after:ease-in-out hover:after:w-full">
                            <TextEffect text="Contact"/>
                        </Link>
                    </div>
                </>
                )
          }
           <Link
          href="https://www.github.com/a-sabbar" className="x:max-sm:hidden text-white !text-xl relative after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-[0px] after:bg-white after:transition-all after:duration-[1700ms] after:ease-in-out hover:after:w-full">
            <TextEffect text="Github"/>
          </Link>
          <Link
          href="https://www.linkedin.com/in/a-sabbar" className="x:max-sm:hidden text-white relative after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-[0px] after:bg-white after:transition-all after:duration-[1700ms] after:ease-in-out hover:after:w-full">
            <TextEffect text="Linkedin"/>
            </Link>
          <Link
        target="_blank" href="mailto:achraf.sabbar2002@gmail.com" className="x:max-sm:hidden text-white relative after:absolute after:bottom-[2px] after:left-0 after:h-[1px] after:w-[0px] after:bg-white after:transition-all after:duration-[1700ms] after:ease-in-out hover:after:w-full">
            <TextEffect text="Contact"/>
          </Link>
        </div>
      </div>
    );
}