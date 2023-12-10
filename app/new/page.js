'use client'
import React, { useState, useEffect } from "react"
import {
    Mate_SCFont,
    UbuntuFont,
    Noto_Sans_TCFont,
    RubikFont,
    PoppinsFont,
    CairoFont
} from "../../components/Fonts/Fonts"
import Image from 'next/image'
import Link from 'next/link'
import {
    motion,
    AnimatePresence
} from "framer-motion"

const hoverAnimation = "relative after:w-full after:min-h-[4px] after:scale-x-1  after:center after:origin-right hover:after:origin-left after:absolute after:-bottom-1 after:bg-white after:left-0 after:duration-500 after:transition-transform cente"

function Header() {
    return (
        <div className="absolute w-full z-10" >
            <div className=" flex justify-between items-center py-[20px] px-[50px] text-[#FFF] ">
                <p style={Mate_SCFont.style}  className="text-6xl self-end">
                    Logo
                </p>
                <ul className="flex items-center gap-[50px]" >
                    <li style={UbuntuFont.style} className="text-[#FFF] cursor-pointer font-[400] text-base uppercase relative after:w-full after:min-h-[4px] after:scale-x-0 hover:after:scale-x-100 after:center after:origin-right hover:after:origin-left after:absolute after:-bottom-1 after:bg-white after:left-0 after:duration-500 after:transition-transform cente">Cocinas</li>
                    <li style={UbuntuFont.style} className="text-[#FFF] cursor-pointer font-[400] text-base uppercase relative after:w-full after:min-h-[4px] after:scale-x-0 hover:after:scale-x-100 after:center after:origin-right hover:after:origin-left after:absolute after:-bottom-1 after:bg-white after:left-0 after:duration-500 after:transition-transform cente">Interiorismo</li>
                    <li style={UbuntuFont.style} className="text-[#FFF] cursor-pointer font-[400] text-base uppercase relative after:w-full after:min-h-[4px] after:scale-x-0 hover:after:scale-x-100 after:center after:origin-right hover:after:origin-left after:absolute after:-bottom-1 after:bg-white after:left-0 after:duration-500 after:transition-transform cente">Proyectos</li>
                    <li style={UbuntuFont.style} className="text-[#FFF] cursor-pointer font-[400] text-base uppercase relative after:w-full after:min-h-[4px] after:scale-x-0 hover:after:scale-x-100 after:center after:origin-right hover:after:origin-left after:absolute after:-bottom-1 after:bg-white after:left-0 after:duration-500 after:transition-transform cente">Servicios</li>
                </ul>
                <div className="flex flex-col justify-center items-center gap-[7px] self-end">
                    <div className="w-[45px] h-[4px] bg-[#FFF] rounded-md"></div>
                    <div className="w-[35px] h-[4px] bg-[#FFF] rounded-md"></div>
                    <div className="w-[45px] h-[4px] bg-[#FFF] rounded-md"></div>
                </div>
            </div>
        </div>
    )
}

const Gallery = ({url, isVideo, page, index} = props) => {

    const headAnimation = {
        initial: {
            opacity: 0,
            x: -50
        },
        animate: {
            opacity: 1,
            x: -0,
            transition: {
                duration: 2.5,
                ease: "easeInOut"
            }
        },
        exit: {
            opacity: 0,
            x: -50,
            transition: {
                ease: "easeInOut"
            }
        }
    }
    const bodyAnimation = {
        initial: {
            opacity: 0,
            x: -50
        },
        animate: {
            opacity: 1,
            x: -0,
            transition: {
                duration: 2.5,
                ease: "easeInOut"
            }
        },
        exit: {
            opacity: 0,
            x: -50,
            transition: {
                ease: "easeInOut"
            }
        }
    }

    const imagAnimation = {
        initial: {
            scale: 1.2,
        },
        animate: {
            scale: 1,
            transition: {
                duration: 2,
                ease: "easeInOut"
            }
        },
        exit: {
            scale: 1.2,
            transition: {
                ease: "easeInOut"
            }
        }
    }
    const seeMoreAnimation = {
        initial:{
            opacity: 0,
            y: 50
        },
        animate:{
            opacity: 1,
            y: 0,
            transition: {
                duration: 2.5,
                ease: "easeInOut"
            }
        },
        exit:{
            opacity: 0,
            y: 50,
            transition: {
                ease: "easeInOut"
            }
        }
    }
    return (
        <>
            <motion.div className="relative min-w-[100vw] h-[100vh] z-0 flex flex-col justify-center items-center overflow-hidden gap-[40px] bg-black" key={page == index? page : page++}>
                {
                    !isVideo ?
                    (
                        <motion.img
                            src={url}
                            width={1920}
                            height={1080}
                            alt=""
                            className="object-cover w-full h-full absolute top-0 left-0 z-0 bg-black opacity-90 select-none"
                            draggable="false"
                            variants={imagAnimation}
                            initial="initial"
                            animate={page == index && "animate"}
                            exit="exit"
                        />
                    ):
                    (
                        <motion.video
                            src={url}
                            autoPlay
                            loop
                            muted
                            className="object-cover w-full h-full absolute top-0 left-0 z-0 bg-black opacity-90 select-none"
                            draggable="false"
                            variants={imagAnimation}
                            initial="initial"
                            animate={page == index && "animate"}
                            exit="exit"


                        />
                    )
                }
                <div className="z-10 max-w-[70%] text-left">
                    <motion.p
                        className="text-[#FFF] z-10 text-xl pl-[8px]" 
                        style={Noto_Sans_TCFont.style}
                        variants={headAnimation}
                        initial="initial"
                        animate={page == index && "animate"}
                        exit="exit"
                    >
                        Bienvenido a Espacio Home Design
                    </motion.p>
                    <motion.p
                        className="text-[#FFF] z-10 text-9xl"
                        style={Mate_SCFont.style}
                        variants={bodyAnimation}
                        initial="initial"
                        animate={page == index && "animate"}
                        exit="exit"
                    >
                        Conoce nuestros servicios
                    </motion.p>
                </div>
                <motion.div
                    className="text-[#FFF] z-10 text-xl uppercase cursor-pointer
                    relative after:w-full after:min-h-[4px] after:scale-x-0 hover:after:scale-x-100 after:center after:origin-right hover:after:origin-left after:absolute after:-bottom-1 after:bg-white after:left-0 after:duration-500 after:transition-transform cente
                    "
                    style={CairoFont.style}
                    variants={seeMoreAnimation}
                    initial="initial"
                    animate={page == index && "animate"}
                    exit="exit"
                >
                    See more
                </motion.div>
            </motion.div>
        </>

    );
}

const HeadGallery = () => {

    const [page, setPage] = useState(0);
    // const windWidth = window?.innerWidth
    const [windWidth, setWindWidth] = useState(0);
    useEffect(() => {
        setWindWidth(window?.innerWidth)
        const handleResize = () => {
          setPage(0);
            setWindWidth(window.innerWidth);
        };
    
        // Add event listener for window resize
        window.addEventListener("resize", handleResize);
    
        // Remove event listener when component unmounts
        return () => {
          window.removeEventListener("resize", handleResize);
        };
      }, []);

    return (
        <div className="relative">
            <AnimatePresence >
                <motion.div 
                    className="flex"
                    animate={{ x: -page * windWidth}}
                    initial={{ x: -page * windWidth}}
                    exit={{ x: -page * windWidth}}
                    transition={{
                        x: { type: "spring", stiffness: 300, damping: 30 },
                        opacity: { duration: 0.2 }
                    }}
                >
                    <Gallery page={page} index={0} url="/BuildWeb/Gallery/G1.jpg" isVideo={false}/>
                    <Gallery page={page} index={1} url="/BuildWeb/Gallery/G22.jpg" isVideo={false}/>
                    <Gallery page={page} index={2} url="/BuildWeb/Gallery/G3.mp4" isVideo={true}/>
                </motion.div>
                <div className="absolute bottom-7 left-7 z-10 flex gap-3">
                    <div onClick={()=> setPage(0)} style={{opacity: page == 0 ?  1: 0.5}} className="w-[70px] rounded-xl h-[5px] bg-[#FFF] cursor-pointer"></div>
                    <div onClick={()=> setPage(1)} style={{opacity: page == 1 ? 1 : 0.5}} className="w-[70px] rounded-xl h-[5px] bg-[#FFF] cursor-pointer"></div>
                    <div onClick={()=> setPage(2)} style={{opacity: page == 2 ? 1 : 0.5}} className="w-[70px] rounded-xl h-[5px] bg-[#FFF] cursor-pointer"></div>
                </div>
            </AnimatePresence>
        </div>
    );
}

function ImageInfo({url}) {
    const [hover, setHover] = useState(false)
    return (
        <div className="flex gap-5 max-w-md min-w-[448px] h-fit cursor-pointer "
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
            <div className="min-w-[200px] h-[250px] bg-slate-300 relative overflow-hidden cursor-pointer">
                <motion.img
                    src={url}
                    width={1920}
                    height={1080}
                    alt=""
                    className="object-cover absolute w-full h-full bg-black opacity-90 select-none"
                    animate={{ scale: hover ? 1.2 : 1,
                        transition: {
                            duration: 0.5,
                            ease: "easeInOut"
                        }
                    }}
                />
            </div>
            <div className="pt-2">
                <motion.h3 className={`text-black text-xl w-fit cursor-pointer relative`} style={CairoFont.style}>
                    <motion.div
                        className="w-full min-h-[4px] scale-x-0  center absolute -bottom-1 bg-black left-0v duration-500 transition-transform"
                            animate={{scaleX: hover ? 1 : 0,
                            transformOrigin: hover ? "left" : "right",
                            transition: {
                                duration: 0.1,
                                ease: "easeInOut"
                            }
                        }}
                    />
                    Lorem ipsum,consectetur
                </motion.h3>
                <p className="text-black text-sm font-light mt-5" style={UbuntuFont.style}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
                {
                    // hover &&
                    (
                        <Link href={"/"} className="text-black text-sm font-normal mt-2 underline" style={CairoFont.style}>
                            See more
                        </Link>
                    )
                }
            </div>
        </div>
    )
}
function ImageGallery({url, header, type }) {
    const [hover, setHover] = useState(false)
    const textAnimation = {
        initial: {
            opacity: 0,
            y: 50
        },
        animate: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        },
        exit: {
            opacity: 0,
            y: 50,
            transition: {
                ease: "easeInOut"
            }
        }
    }
    const headerAnimation = {
        initial: {
            opacity: 0,
            x: -50
        },
        animate: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 1,
                ease: "easeInOut"
            }
        },
        exit: {
            opacity: 0,
            x: -50,
            transition: {
                ease: "easeInOut"
            }
        }
    }

    return (
        <div className="flex gap-2 w-full h-fit cursor-pointer relative"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
            <div className="w-full h-[600px] relative overflow-hidden  bg-black">
                <motion.img
                    src={url}
                    width={1920}
                    height={1080}
                    alt=""
                    className="object-cover absolute min-w-full h-full  select-none"
                    animate={{ scale: hover ? 1.2 : 1,
                        opacity: hover ? 0.5 : 1,
                        transition: {
                            duration: 0.5,
                            ease: "easeInOut"
                        }
                    }}
                />
            </div>
            <div className="absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center gap-5 text-white">
                <motion.h1 className="text-5xl font-bold uppercase" style={Mate_SCFont.style}
                    variants={headerAnimation}
                    initial="initial"
                    animate={hover ? "animate" :"initial"}
                    exit="exit"
                >
                    {header}
                </motion.h1>
                <motion.div
                    className="text-base uppercase font-bold relative"
                    style={CairoFont.style}
                    variants={textAnimation}
                    initial="initial"
                    animate={hover ? "animate" :"initial"}
                    exit="exit"

                >
                    <motion.div
                        className="w-full min-h-[4px] scale-x-0  center absolute -bottom-1 bg-white left-0v duration-500 transition-transform"
                            animate={{scaleX: hover ? 1 : 0,
                            transformOrigin: hover ? "left" : "right",
                            transition: {
                                scaleX: {
                                    duration: 0.5,
                                    ease: "easeInOut"
                                },
                                duration: 0.1,
                                ease: "easeInOut"
                            }
                        }}
                    />
                    {type}
                </motion.div>
            </div>
        </div>
    )
}
function MyLine({url,text}) {
    const [hover, setHover] = useState(false)
    const myText = text.split(" ")
    return (
        <div className="relative flex gap-5 h-fit  text-right overflow-hidden"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        >
            {
                myText.map((item, index) => {
                    return (
                        <div key={index} className="flex items-end gap-3">
                            <motion.span
                                className="h-fit text-black font-medium text-right lg:text-8xl"
                                style={Mate_SCFont.style}
                                variants={{
                                    initial: {
                                        opacity: 0,
                                        y: 50
                                    },
                                    animate: {
                                        opacity: 1,
                                        y: 0,
                                        transition: {
                                            duration: 1,
                                            ease: "easeInOut",
                                            delay: index * 0.5
                                        }
                                    },
                                    exit: {
                                        opacity: 0,
                                        y: 50,
                                        transition: {
                                            ease: "easeInOut"
                                        }
                                    }
                                }}
                                initial="initial"
                                animate={"animate"}
                                exit="exit"
                            >
                                {item}
                            </motion.span>
                            {
                                index == 0 &&
                                (
                                    <motion.div
                                        key={index}
                                        animate={{ width: hover ? 200 : 0,
                                            transition: {
                                                duration: 0.5,
                                                ease: "easeInOut"
                                            }
                                        }}
                                        className="overflow-hidden"
                                    >
                                        <motion.img
                                            src={url}
                                            width={1920}
                                            height={1080}
                                            alt=""
                                            className="object-cover w-[200px] !max-w-[500px] h-[140px] select-none"
                                        />
                                    </motion.div>
                                )
                            }
                        </div>
                    )
                })
            }
        </div>
    )
}

function Body() {
    return (
        <div className="w-full px-[50px] flex flex-col gap-40 items-center justify-center pt-[100px] no-scrollbar">
            <div className=" grid grid-cols-3 gap-16 xl:grid-cols-3 lg:grid-cols-2 [&>*:nth-child(3)]:lg:max-xl:col-span-2">
                    <ImageInfo url="/BuildWeb/Gallery/I1.jpg"/>
                    <ImageInfo url="/BuildWeb/Gallery/I2.jpg"/>
                    <ImageInfo url="/BuildWeb/Gallery/I3.jpg"/>
                    <ImageGallery url="/BuildWeb/Gallery/S1.jpg" header={"Cocinas"} type={"Lorem ipsum dolor."} />
                    <ImageGallery url="/BuildWeb/Gallery/S2.jpg" header={"Interiorismo"} type={"Lorem ipsum voluptatum."}/>
                    <ImageGallery url="/BuildWeb/Gallery/S3.jpg" header={"Proyectos"} type={"Lorem ipsum dolvoluptatum."} />
            </div>
            <div className="w-full flex flex-col justify-center items-center gap-5">
                <MyLine url={"/BuildWeb/Gallery/L1.jpg"} text={"Heritage ,"}/>
                <MyLine url={"/BuildWeb/Gallery/L2.jpg"} text={"Design And"}/>
                <MyLine url={"/BuildWeb/Gallery/L3.jpg"} text={"Commitment Of"}/>
                <MyLine url={"/BuildWeb/Gallery/L4.jpg"} text={"Three generations."}/>
            </div>
        </div>
    )
}


export default function Page(props) {
    return (
        <div className="w-full cursor-default relative  min-h-screen overflow-x-hidden">
            <Header/>
            <HeadGallery/>
            <Body/>
            <div className="h-[100vh]">

            </div>
        </div>
    )
}