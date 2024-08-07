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
import { motion, AnimatePresence } from "framer-motion";
import { useRef, useState } from "react";

const Project =({bg, title, type, status, url}) => {


	return (
	<div className=" relative flex justify-between flex-col  rounded-[15px] setShadow2   w-full overflow-hidden ">
		{
			status == "Finished" ?
				(
					<div>
						<Image
							src={bg}
							alt=""
							width={2000}
							height={2000}
							className="object-cover object-top w-full h-[200px]  opacity-95"
						/>
					</div>
				)
				:
				status === "In Progress" ?
				(
					<div className="h-[200px] w-full bg-[#e0dfdc34] flex justify-center items-center">
						<Image
							src={bg}
							alt=""
							width={2000}
							height={2000}
							className="object-cover object-top w-[120px]   opacity-95"
						/>
					</div>
				)
				:
				(
					<div className="h-[200px] w-full bg-[#00000034] flex justify-center items-center relative">
						<Image
							src={bg}
							alt=""
							width={2000}
							height={2000}
							className="object-cover object-top w-full h-[200px]  opacity-80 bg-[#00000034]"
						/>
						<Image
							src={"/work-in-progress.png"}
							alt=""
							width={2000}
							height={2000}
							className="object-cover object-top w-[120px]   opacity-95 z-30 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
						/>
					</div>
				)
		}
		<Link href={url} className="w-full h-fit flex bg-white  justify-between items-center py-3  px-[32px] border-t-[1px] border-[#e0dfdc]">
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
		</Link>
	</div>
	);
}


export default function Home() {
	const Data = [
		{
			bg : "/images/trans3.png",
			title : "Ft_Transcendance",
			type : "Website",
			status :"Finished",
			url : "https://github.com/a-sabbar/ft_transcendence"
		},
		{
			bg : "/images/clothes.png",
			title : "Clothes Store",
			type : "Website",
			status :"Almost Finished",
			url:""
			
		},
		{
			bg : "/work-in-progress.png",
			title : "Doctor Consultation",
			type : "Website",
			status :"In Progress",
			url:""

		},
		{
			bg : "/images/webserv1.png",
			title : "Webserv",
			type : "server",
			status :"Finished",
			url:"https://github.com/a-sabbar/Webserv"
		},
		{
			bg : "/images/inception1.png",
			title : "Inception",
			type : "Website",
			status :"Finished",
			url:"https://github.com/a-sabbar/Inception"
		},
		{
			bg : "/images/cub3d.png",
			title : "Cub3D",
			type : "Game",
			status :"Finished",
			url : "https://github.com/a-sabbar/Cub3d"
		}
	]
	const skillsRef = useRef(null);
	const bodyRef = useRef(null);
	const handleShowSkills = () => {
		if(skillsRef.current){
			// skillsRef.current.scrollIntoView({behavior: "smooth"})
			skillsRef.current.classList.toggle("max-h-[82px]")
			bodyRef.current.classList.toggle("row-span-2")
		}
	}
  
	const handleOpen = () => {
		setOpen(true)
		setClose(false)
	}
	const handleClose = () => {
		setOpen(false)
		setClose(true)
	}
	const [open, setOpen] = useState(false)
	const [close, setClose] = useState(true)
	const menuRef = useRef(null)

	const menuVariants = {
		hidden: {
			opacity: 0,
			transition: {
				duration: 0.5,
				when: "afterChildren",
				staggerChildren: 0.5,
			},
		},
		visible: {
			opacity: 1,
			transition: {
				duration: 2,
				type: "easeInOut",
			},
		},
	}
	const menuChildVariants = {
		hidden: {
			scale: 1,
			opacity: 0.9,
			transition: {
				duration: 1,
				type: "easeInOut",
			},
		},
		visible: {
			scale:100,
			opacity: 1,
			transition: {
				duration: 1,
				type: "easeInOut",
			},
		},
	}

return (
	<div className="relative min-h-screen flex flex-col items-center justify-between overflow-hidden pt-8 px-7 bg-[#FAF9F9]">
		<div className=" w-full py-5 px-7 fixed top-0  bg-[#FAF9F9] flex justify-between items-center   z-50">
			<Link href={"/"} style={Mate_SCFont.style} className="text-4xl text-black md:ml-10 ">
				<svg width="60" height="auto" viewBox="0 0 682 594" fill="none" xmlns="http://www.w3.org/2000/svg">
					<path d="M339 0L442.057 178.5H235.943L339 0Z" fill="#F1A639"/>
					<path d="M36.5 527L76 460L120 527H351.5L300.5 438.5H88L130 367L216 213.5H329.5L367.5 277.5H261.5L210 367H339L432 527L472 594H0L36.5 527Z" fill="black"/>
					<path d="M559.5 527L378 215H461L682 594H520L559.5 527Z" fill="black"/>
				</svg>
			</Link>
			<div className="sm:flex hidden gap-5 items-end  h-fit">
				<Link href="/" className="font-semibold h-fit text-base " style={CairoFont.style}>
					Home
				</Link>
				<Link href="/Projects" className="font-semibold text-[#E6B655] h-fit text-base ml-5" style={CairoFont.style}>
					Projects
				</Link>
				<Link href="/About" className=" font-semibold h-fit text-base ml-5" style={CairoFont.style}>
					About
				</Link>
				<Link href="/Contact" className="text-black font-semibold h-fit text-base ml-5" style={CairoFont.style}>
					Contact
				</Link>
			</div>
			<Link href={"mailto:achraf.sabbar2002@gmail.com"} className="px-[35px] py-[10px] bg-black text-white font-medium tracking-wide rounded-full md:flex hidden ">
				Let's talk 👋
			</Link>
			<div className="relative flex-col justify-center h-fit items-center z-40 gap-[5px] hidden x:max-sm:flex cursor-pointer" onClick={() => setOpen(true)}>
				<div className="w-[40px] h-[3.5px] bg-[#000]  transition-all duration-500 rounded-md"></div>
				<div className="w-[30px] h-[3.5px] bg-[#000] transition-all duration-150 rounded-md"></div>
				<div className="w-[40px] h-[3.5px] bg-[#000]  transition-all duration-500 rounded-md"></div>
				<AnimatePresence>
						{
							 open &&(
								<motion.div 
									variants={menuChildVariants}
									initial="hidden"
									animate="visible"
									exit="hidden"
									className="w-[20px] h-[20px] z-40    absolute rounded-full overflow-hidden  bg-[#FAF9F9] flex justify-center items-center">
								</motion.div>
							 )
				 	}
				 </AnimatePresence>
			</div>
			<AnimatePresence>
				{
					open && (
						<motion.div
							initial="hidden"
							animate="visible"
							exit="hidden"
							variants={menuVariants}
							className={`fixed top-0 py-5 px-7 left-0 w-full  flex flex-col  justify-between items-center gap-[50px] z-50`}>
							<div className="w-full  flex justify-between items-center">
								<Link href={"/"} style={Mate_SCFont.style} className="text-4xl text-black md:ml-10 ">
									<svg width="60" height="auto" viewBox="0 0 682 594" fill="none" xmlns="http://www.w3.org/2000/svg">
										<path d="M339 0L442.057 178.5H235.943L339 0Z" fill="#F1A639"/>
										<path d="M36.5 527L76 460L120 527H351.5L300.5 438.5H88L130 367L216 213.5H329.5L367.5 277.5H261.5L210 367H339L432 527L472 594H0L36.5 527Z" fill="black"/>
										<path d="M559.5 527L378 215H461L682 594H520L559.5 527Z" fill="black"/>
									</svg>
								</Link>
								<div
									onClick={() => setOpen(false)}
									className="relative flex-col j h-fit i z-50 gap-[5px] hidden x:max-sm:flex cursor-pointer">
										<div className="relative flex-col justify-center h-fit items-center z-40 gap-[5px] hidden x:max-sm:flex cursor-pointer">
											<div className="w-[40px] h-[3.5px] bg-[#000]  transition-all duration-500 rounded-md"></div>
											<div className="w-[30px] h-[3.5px] bg-[#000] transition-all duration-150 rounded-md"></div>
											<div className="w-[40px] h-[3.5px] bg-[#000]  transition-all duration-500 rounded-md"></div>
										</div>
								</div>
							</div>
							<div className="flex flex-col gap-5 items- justify-center w-fit ">
								<Link href="/" className="font-semibold w-fit  h-fit text-base " style={CairoFont.style}>
									Home
								</Link>
								<Link href="/Projects" className="font-semibold w-fit  text-[#E6B655] h-fit text-base" style={CairoFont.style}>
									Projects
								</Link>
								<Link href="/About" className=" font-semibold w-fit  h-fit text-base" style={CairoFont.style}>
									About
								</Link>
								<Link href="/Contact" className="text-black  w-fit font-semibold h-fit text-base" style={CairoFont.style}>
									Contact
								</Link>
							</div>
							<Link href={"mailto:achraf.sabbar2002@gmail.com"} className="px-[35px] py-[10px] bg-black text-white font-medium tracking-wide rounded-full ">
								Let's talk 👋
							</Link>


						</motion.div>
					)

				}
			</AnimatePresence>
		</div>
		<div className="grid  grid-cols-1 lg:grid-cols-2 mt-[100px] gap-[38px] w-full max-w-[1200px] x:max-md:w-screen pt-8 px-7 ">
			{/* <Project/>
			<Project/>
			<Project/>
			<Project/> */}
			{
				Data.map((item, index) => {
					return (
						<Project bg={item.bg} title={item.title} type={item.type} status={item.status} url={item.url} key={index} />
					)
				}
				)
			}
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