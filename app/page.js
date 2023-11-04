'use client'
import { motion } from "framer-motion";
import { useEffect , useState , useRef } from "react"
import HomeHeader from "../components/Home/Header"
import HomeBody from "../components/Home/Body"
import Projects from "../components/Projects/Projects";
import Loading from "../components/loading/loading";
import SlideProjectGallery from "../components/ShowCase/SlideProjectGallery/SlideProjectGallery";
import ClipMaskOnScroll from "../components/ShowCase/ClipMaskOnScroll/ClipMaskOnScroll";
import SvgBezierCurve from "../components/ShowCase/SvgBezierCurve/SvgBezierCurve";
import Lenis from '@studio-freight/lenis'
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const trackPosition = (e) => {
	return { x: e.clientX, y: e.clientY +window.scrollY}
  }

export default function Home() {
  
  const [scaleValue, setScaleValue] = useState(1);
  const [isLoaded, setIsLoaded] = useState("");
  const homeRef = useRef(null);
  const cursorRef = useRef(null);
  const [cursor, setCursor] = useState({ x: 0, y: 100 })

  useEffect( () => {

	const lenis = new Lenis()

	lenis.on('scroll', ScrollTrigger.update)
	
	gsap.ticker.add((time)=>{
	  lenis.raf(time * 1000)
	})
	
	gsap.ticker.lagSmoothing(0)

  }, [])
return (
	<div onMouseMove={(e) => setCursor(trackPosition(e))} className="relative overflow-hidden">
		<motion.div ref={cursorRef} className="absolute top-0 left-0  w-10 h-10 bg-orange-500 rounded-full pointer-events-none z-[1]"  animate={{ x: cursor.x -20, y: cursor.y-20 ,scale: scaleValue, rotate: 360}}  transition={{rotate:{ ease: "linear", duration: 2, repeat: Infinity }}}/>
		<HomeHeader setScaleValue={setScaleValue}/>
		<div  className="h-full overflow-hidden relative bg-black" ref={homeRef}>
			<HomeBody setScaleValue={setScaleValue}/>
			<Projects setScaleValue={setScaleValue} cursorRef={cursorRef}/>
		</div>
	</div>
);
}
