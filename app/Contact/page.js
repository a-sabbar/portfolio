'use client'
import {
    Mate_SCFont,
    UbuntuFont,
    Noto_Sans_TCFont,
    RubikFont,
    PoppinsFont,
    CairoFont,
	CabinFont,
} from "../../components/Fonts/Fonts";
import Image from 'next/image'
import Link from "next/link";
import { title } from "process";

const Project =({bg, title, type} = props) => {

	return (
	<div className=" relative flex justify-between flex-col  rounded-[15px] setShadow w-[611px] overflow-hidden ">
			<Image
				src={bg}
				alt=""
				width={2000}
				height={2000}
				className="object-cover object-top w-full h-[200px]  opacity-95"
			/>
		<div className="w-full h-fit flex bg-white  justify-between items-center py-3  px-[32px] border-t-[1px] border-[#e0dfdc]">
			<div className="w-fit h-fit">
				<p style={CabinFont.style} className="text-lg font-bold text-black ">
					{title}
				</p>
				<p style={CabinFont.style} className="text-sm text-[#727272]">
				{type}
				</p>
			</div>
			<div className="w-[25px] h-[25px] bg-[#e0dfdc34] outline outline-[2px] outline-gray-400 rounded-full flex justify-center items-center">
				<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M8.26905 2.13068L13.1382 6.9998L8.26905 11.8689C8.09615 12.0418 7.99902 12.2763 7.99902 12.5208C7.99902 12.7653 8.09615 12.9998 8.26905 13.1727C8.44194 13.3456 8.67644 13.4428 8.92095 13.4428C9.16546 13.4428 9.39996 13.3456 9.57285 13.1727L15.0927 7.65332C15.2655 7.47971 15.3625 7.24474 15.3625 6.9998C15.3625 6.75487 15.2655 6.5199 15.0927 6.34629L9.57285 0.82688C9.48724 0.741272 9.38561 0.673363 9.27376 0.627032C9.1619 0.580701 9.04202 0.556854 8.92095 0.556854C8.79988 0.556854 8.68 0.580701 8.56814 0.627032C8.45629 0.673363 8.35466 0.741272 8.26905 0.82688C8.18344 0.912489 8.11553 1.01412 8.0692 1.12598C8.02287 1.23783 7.99902 1.35771 7.99902 1.47878C7.99902 1.59985 8.02287 1.71973 8.0692 1.83159C8.11553 1.94344 8.18344 2.04507 8.26905 2.13068Z" fill="#E0DFDC"/>
					<path d="M13.5219 7.92025H1.55618C1.31207 7.92025 1.07795 7.82328 0.905333 7.65066C0.732717 7.47805 0.635742 7.24393 0.635742 6.99982C0.635742 6.7557 0.732717 6.52158 0.905333 6.34897C1.07795 6.17635 1.31207 6.07938 1.55618 6.07938H13.5219V7.92025Z" fill="#E0DFDC"/>
				</svg>
			</div>
		</div>
	</div>
	);
}


export default function Home() {

return (
	<div className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden pt-8 px-7 bg-[#FAF9F9]">
		<div className=" w-full px-2 flex justify-between items-center">
			<Link href={"/"} style={Mate_SCFont.style} className="text-4xl text-black md:ml-10">
				Achraf
			</Link>
			<div className="sm:flex hidden gap-5 items-end  h-fit">
				<Link href="/" className="font-semibold h-fit text-base text-black " style={CairoFont.style}>
					Home
				</Link>
				<Link href="/Projects" className="font-semibold h-fit text-base ml-5" style={CairoFont.style}>
					Projects
				</Link>
				<Link href="/About" className=" font-semibold h-fit text-base ml-5" style={CairoFont.style}>
					About
				</Link>
				<Link href="/Contact" className="text-[#E6B655] font-semibold h-fit text-base ml-5" style={CairoFont.style}>
					Contact
				</Link>
			</div>
			<Link href={"mailto:achraf.sabbar2002@gmail.com"} className="px-[35px] py-[10px] bg-black text-white font-medium tracking-wide rounded-full md:flex hidden ">
				Let's talk 👋
			</Link>
			<div className="relative flex-col justify-center h-fit items-center z-50 gap-[5px] hidden x:max-sm:flex cursor-pointer" onClick={() => open ? handleClose() : handleOpen()}>
              <div className="w-[40px] h-[3.5px] bg-[#000]  transition-all duration-500 rounded-md"></div>
              <div className="w-[30px] h-[3.5px] bg-[#000] transition-all duration-150 rounded-md"></div>
              <div className="w-[40px] h-[3.5px] bg-[#000]  transition-all duration-500 rounded-md"></div>
          </div>
		</div>
		<div className="grid  grid-cols-4 mt-[38px] gap-[38px] xl:w-[1100px] w-full">
			<div className="setShadow2 h-[234px] w-full flex justify-center  bg-[#000] rounded-[25px] shadow-new-shadow col-span-4 overflow-hidden">
					<Image
						src="/myImage.jpg"
						alt=""
						width={5000}
						height={5000}
						className="object-cover w-[240px]"
					/>
			</div>
			<Link href={"mailto:achraf.sabbar2002@gmail.com"} className="setShadow2 liner h-[234px] w-full flex relative justify-center items-center flex-col bg-[#000000] rounded-[25px] shadow-new-shadow lg:col-span-1  sm:col-span-2 col-span-4 overflow-hidden">
				<Image
					src="/email.svg"
					alt=""
					width={5000}
					height={5000}
					className="object-cover object-top w-[100px] scale-[1.25]"
				/>
				<div className="w-[25px] h-[25px] bg-[#e0dfdc34] outline outline-[2px] outline-gray-400 rounded-full flex justify-center items-center absolute right-4 top-4 -rotate-45">
					<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.26905 2.13068L13.1382 6.9998L8.26905 11.8689C8.09615 12.0418 7.99902 12.2763 7.99902 12.5208C7.99902 12.7653 8.09615 12.9998 8.26905 13.1727C8.44194 13.3456 8.67644 13.4428 8.92095 13.4428C9.16546 13.4428 9.39996 13.3456 9.57285 13.1727L15.0927 7.65332C15.2655 7.47971 15.3625 7.24474 15.3625 6.9998C15.3625 6.75487 15.2655 6.5199 15.0927 6.34629L9.57285 0.82688C9.48724 0.741272 9.38561 0.673363 9.27376 0.627032C9.1619 0.580701 9.04202 0.556854 8.92095 0.556854C8.79988 0.556854 8.68 0.580701 8.56814 0.627032C8.45629 0.673363 8.35466 0.741272 8.26905 0.82688C8.18344 0.912489 8.11553 1.01412 8.0692 1.12598C8.02287 1.23783 7.99902 1.35771 7.99902 1.47878C7.99902 1.59985 8.02287 1.71973 8.0692 1.83159C8.11553 1.94344 8.18344 2.04507 8.26905 2.13068Z" fill="#E0DFDC"/>
						<path d="M13.5219 7.92025H1.55618C1.31207 7.92025 1.07795 7.82328 0.905333 7.65066C0.732717 7.47805 0.635742 7.24393 0.635742 6.99982C0.635742 6.7557 0.732717 6.52158 0.905333 6.34897C1.07795 6.17635 1.31207 6.07938 1.55618 6.07938H13.5219V7.92025Z" fill="#E0DFDC"/>
					</svg>
				</div>
			</Link>
			<Link href={"https://www.linkedin.com/in/a-sabbar/"} className="setShadow2 h-[234px] w-full flex relative justify-center items-center flex-col bg-[#5896B6] rounded-[25px] pt-[50px] px-[50px]  pb-[30px] shadow-new-shadow lg:col-span-1  sm:col-span-2 col-span-4">
				<svg width="144" height="144" viewBox="0 0 144 144" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M32.1657 143.689H2.37599V47.7559H32.1657V143.689ZM17.2529 34.67C7.72839 34.67 0 26.7774 0 17.2529C0 7.72839 7.72326 0 17.2529 0C26.7825 0 34.5058 7.72326 34.5058 17.2529C34.5058 26.7774 26.7774 34.67 17.2529 34.67ZM143.658 143.689H113.935V96.9898C113.935 85.859 113.709 71.5877 98.4472 71.5877C82.9596 71.5877 80.5836 83.6781 80.5836 96.1892V143.689H50.8247V47.7559H79.3931V60.8418H79.8087C83.7858 53.3033 93.5002 45.3491 107.992 45.3491C138.141 45.3491 143.683 65.2038 143.683 90.9908V143.689H143.658Z" fill="white"/>
				</svg>
				<div className="w-[25px] h-[25px] bg-[#e0dfdc34] outline outline-[2px] outline-gray-400 rounded-full flex justify-center items-center absolute right-4 top-4 -rotate-45">
						<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.26905 2.13068L13.1382 6.9998L8.26905 11.8689C8.09615 12.0418 7.99902 12.2763 7.99902 12.5208C7.99902 12.7653 8.09615 12.9998 8.26905 13.1727C8.44194 13.3456 8.67644 13.4428 8.92095 13.4428C9.16546 13.4428 9.39996 13.3456 9.57285 13.1727L15.0927 7.65332C15.2655 7.47971 15.3625 7.24474 15.3625 6.9998C15.3625 6.75487 15.2655 6.5199 15.0927 6.34629L9.57285 0.82688C9.48724 0.741272 9.38561 0.673363 9.27376 0.627032C9.1619 0.580701 9.04202 0.556854 8.92095 0.556854C8.79988 0.556854 8.68 0.580701 8.56814 0.627032C8.45629 0.673363 8.35466 0.741272 8.26905 0.82688C8.18344 0.912489 8.11553 1.01412 8.0692 1.12598C8.02287 1.23783 7.99902 1.35771 7.99902 1.47878C7.99902 1.59985 8.02287 1.71973 8.0692 1.83159C8.11553 1.94344 8.18344 2.04507 8.26905 2.13068Z" fill="#E0DFDC"/>
							<path d="M13.5219 7.92025H1.55618C1.31207 7.92025 1.07795 7.82328 0.905333 7.65066C0.732717 7.47805 0.635742 7.24393 0.635742 6.99982C0.635742 6.7557 0.732717 6.52158 0.905333 6.34897C1.07795 6.17635 1.31207 6.07938 1.55618 6.07938H13.5219V7.92025Z" fill="#E0DFDC"/>
						</svg>
				</div>
			</Link>
			<Link href={"https://www.buymeacoffee.com/achrafsabbr"} className="setShadow2 h-[234px] w-full flex relative justify-center items-center flex-col bg-[#FFDD00] rounded-[25px] pt-[50px] px-[50px]  pb-[30px] shadow-new-shadow lg:col-span-1  sm:col-span-2 col-span-4">
				<Image
					src="/buymeacoffee.png"
					alt=""
					width={5000}
					height={5000}
					className="object-cover object-top w-[240px]"
				/>


				<div className="w-[25px] h-[25px] bg-[#0000003d] outline outline-[2px] outline-black rounded-full flex justify-center items-center absolute right-4 top-4 -rotate-45">
						<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
							<path d="M8.26905 2.13068L13.1382 6.9998L8.26905 11.8689C8.09615 12.0418 7.99902 12.2763 7.99902 12.5208C7.99902 12.7653 8.09615 12.9998 8.26905 13.1727C8.44194 13.3456 8.67644 13.4428 8.92095 13.4428C9.16546 13.4428 9.39996 13.3456 9.57285 13.1727L15.0927 7.65332C15.2655 7.47971 15.3625 7.24474 15.3625 6.9998C15.3625 6.75487 15.2655 6.5199 15.0927 6.34629L9.57285 0.82688C9.48724 0.741272 9.38561 0.673363 9.27376 0.627032C9.1619 0.580701 9.04202 0.556854 8.92095 0.556854C8.79988 0.556854 8.68 0.580701 8.56814 0.627032C8.45629 0.673363 8.35466 0.741272 8.26905 0.82688C8.18344 0.912489 8.11553 1.01412 8.0692 1.12598C8.02287 1.23783 7.99902 1.35771 7.99902 1.47878C7.99902 1.59985 8.02287 1.71973 8.0692 1.83159C8.11553 1.94344 8.18344 2.04507 8.26905 2.13068Z" fill="#000"/>
							<path d="M13.5219 7.92025H1.55618C1.31207 7.92025 1.07795 7.82328 0.905333 7.65066C0.732717 7.47805 0.635742 7.24393 0.635742 6.99982C0.635742 6.7557 0.732717 6.52158 0.905333 6.34897C1.07795 6.17635 1.31207 6.07938 1.55618 6.07938H13.5219V7.92025Z" fill="#000"/>
						</svg>
				</div>
			</Link>
			<Link href={"https://github.com/a-sabbar"} className="setShadow2 h-[234px] w-full flex relative justify-center items-center flex-col bg-[#000000] rounded-[25px] pt-[50px] px-[50px]  pb-[30px] shadow-new-shadow lg:col-span-1  sm:col-span-2 col-span-4">
				<Image
					src="/github.png"
					alt=""
					width={5000}
					height={5000}
					className="object-cover object-top w-[100px]"
				/>
				<div className="w-[25px] h-[25px] bg-[#e0dfdc34] outline outline-[2px] outline-gray-400 rounded-full flex justify-center items-center absolute right-4 top-4 -rotate-45">
					<svg width="16" height="14" viewBox="0 0 16 14" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M8.26905 2.13068L13.1382 6.9998L8.26905 11.8689C8.09615 12.0418 7.99902 12.2763 7.99902 12.5208C7.99902 12.7653 8.09615 12.9998 8.26905 13.1727C8.44194 13.3456 8.67644 13.4428 8.92095 13.4428C9.16546 13.4428 9.39996 13.3456 9.57285 13.1727L15.0927 7.65332C15.2655 7.47971 15.3625 7.24474 15.3625 6.9998C15.3625 6.75487 15.2655 6.5199 15.0927 6.34629L9.57285 0.82688C9.48724 0.741272 9.38561 0.673363 9.27376 0.627032C9.1619 0.580701 9.04202 0.556854 8.92095 0.556854C8.79988 0.556854 8.68 0.580701 8.56814 0.627032C8.45629 0.673363 8.35466 0.741272 8.26905 0.82688C8.18344 0.912489 8.11553 1.01412 8.0692 1.12598C8.02287 1.23783 7.99902 1.35771 7.99902 1.47878C7.99902 1.59985 8.02287 1.71973 8.0692 1.83159C8.11553 1.94344 8.18344 2.04507 8.26905 2.13068Z" fill="#E0DFDC"/>
						<path d="M13.5219 7.92025H1.55618C1.31207 7.92025 1.07795 7.82328 0.905333 7.65066C0.732717 7.47805 0.635742 7.24393 0.635742 6.99982C0.635742 6.7557 0.732717 6.52158 0.905333 6.34897C1.07795 6.17635 1.31207 6.07938 1.55618 6.07938H13.5219V7.92025Z" fill="#E0DFDC"/>
					</svg>
				</div>
			</Link>
			<Link type="_blank" href={"/Achraf-Sabbar_Full-Stack.pdf"} download className="setShadow2 h-[234px] w-full flex justify-center items-center flex-col bg-[#FFF] rounded-[25px] pt-[50px] px-[50px]  pb-[30px] shadow-new-shadow lg:col-span-1  sm:col-span-2 col-span-4">
				<span>
					<svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
						<path d="M35.1694 29.4923V35.1692L31.3848 37.0615" stroke="#E6B656" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M44.6309 18.1384V25.7077" stroke="#E6B656" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M21.9229 18.1384V25.7077" stroke="#E6B656" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M21.923 63.5537H6.78461C4.69445 63.5537 3 61.8594 3 59.7691V44.6307" stroke="#E6B656" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M63.5539 44.6307V59.7691C63.5539 61.8594 61.8595 63.5537 59.7693 63.5537H44.6309" stroke="#E6B656" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M63.5539 21.923V6.78461C63.5539 4.69445 61.8595 3 59.7693 3H44.6309" stroke="#E6B656" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M3 21.923V6.78461C3 4.69445 4.69445 3 6.78461 3H21.923" stroke="#E6B656" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
						<path d="M21.9229 48.4153C21.9229 48.4153 25.7075 52.1999 33.2767 52.1999C40.8459 52.1999 44.6305 48.4153 44.6305 48.4153" stroke="#E6B656" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round"/>
					</svg>
				</span>
				<div className="w-full h-fit flex flex-col justify-center items-center ">
					<p style={CabinFont.style} className="text-xl font-extrabold text-black mt-5">
						See my resume
					</p>
					<p className="text-xs text-[#727272]" style={CabinFont.style}>
						LEARN MORE ABOUT ME
					</p>
				</div>
			</Link>
		</div>
		<div className="w-full flex justify-center items-center gap-2"/>
		<div style={Mate_SCFont.style} className="my-[20px] flex justify-center items-center text-2xl">
			<span className="text-sm h-[15px] mr-1">©</span>
			<p style={Mate_SCFont.style} className="text-2xl" >
				2023 Achraf Sabbar
			</p>
		</div>
	</div>
);
}

{/* <p style={CabinFont.style} className="text-lg font-bold text-black">
	About Me
</p>
<p style={CabinFont.style} className="text-sm text-[#727272]">
	{`I'm a junior Full-Stack Developer with a passion for building beautiful and functional user experiences. I'm currently working as a freelancer and looking for a full-time position.`}
</p> */}