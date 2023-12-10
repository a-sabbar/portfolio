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


export default function Home() {
  
  const homeRef = useRef(null);
  const cursorRef = useRef(null);
  useEffect( () => {

	const lenis = new Lenis()

	lenis.on('scroll', ScrollTrigger.update)
	
	gsap.ticker.add((time)=>{
	  lenis.raf(time * 1000)
	})
	
	gsap.ticker.lagSmoothing(0)

  }, [])
return (
	<div className="relative overflow-hidden">
		<HomeHeader />
		<div  className="h-full overflow-hidden relative bg-black" ref={homeRef}>
			<HomeBody />
			<Projects />
		</div>
	</div>
);
}
