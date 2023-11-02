'use client'
import { useEffect, useRef, useState } from 'react';
import { Inter } from 'next/font/google'


const inter = Inter({ subsets: ['latin'] })
let progress = 0;
let x = 0.2;
let time = Math.PI / 2;
let reqId = null;


export default function SvgBezierCurve() {
    const continerRef = useRef(null);
    const pathRef = useRef(null);
    const boxRef = useRef(null);
    const [width, setWidth] = useState(0);
    const [path, setPath] = useState(``);
    
    useEffect(() => {
        if (continerRef.current) {
            setWidth(continerRef.current.getBoundingClientRect().width)
            setPath(`M 0,50 Q ${width/2},50, ${width} ,50`)
        }
    }
    , [continerRef.current])
  const mangeMouseEnter = () => {
      boxRef.current.style.height = "calc(100% + 50px)"
  }
  const mangeMouseLeave = () => {
    boxRef.current.style.height = "50%"
    animateOut();
    
  }

  const lerp = (x, y, a) => x * (1 - a) + y * a;
  const animateOut = () => {
    let newProgress = progress * Math.sin(time);
    pathRef.current.setAttributeNS(null, "d", `M 0,50 Q ${width * x}, ${50 + newProgress * 1.1}, ${width} ,50`)
    progress = lerp(progress, 0, .04);
    time+=0.2;

    if(Math.abs(progress) > 0.5){
      reqId = requestAnimationFrame(animateOut)
    }
    else{
      time = Math.PI / 2;
      progress = 0;
      pathRef.current.setAttributeNS(null, "d", `M 0,50 Q ${width/2},50, ${width} ,50`)
    }
  }


  const mangeMouseMove = (e) => {
   const {movementY} = e;
   const box = e.target.getBoundingClientRect();
   x = (e.clientX - box.left) / box.width;
   progress += movementY;
   pathRef.current.setAttributeNS(null, "d", `M 0,50 Q ${width * x}, ${50 + progress * 1.01}, ${width} ,50`)
  }

  return (
    <div className={" h-full bg-black flex justify-center items-center text-white max-w-[1160px] flex-col"} ref={continerRef}>
        <div className='w-full h-[100px] flex justify-center items-center relative'>
            <div 
            onMouseEnter={mangeMouseEnter}
            onMouseLeave={mangeMouseLeave}
            onMouseMove={mangeMouseMove}
            ref={boxRef} className='absolute top-1/2 -translate-y-1/2 left-0 w-full flex justify-center items-center h-[50%]'/>
            <svg  width={"100%"} height={"100%"} >
                <path ref={pathRef} d={path} stroke='#FFF' fill='none'/>
            </svg>
        </div>
        <div className={"flex flex-col gap-[20px] "}>
            <div className={"flex justify-between items-start px-[20px]"}>
              <p className="text-sm font-medium min-w-[150px] pt-[7px]">
                Smart Development
              </p>
              <p className="text-3xl font-medium ">
                Combining unique design and rich technology, we build digital products exactly as they were designed, without shortcuts or simplifications.
            </p>
            </div>
            <div className={"flex justify-start items-start gap-[30px] pl-[20px] pr-[70px]"}>
              <p className='min-w-[125px] flex justify-end pt-[7px] '>Areas</p>
              <div className={"flex flex-wrap uppercase gap-[10px] text-sm font-medium w-[70%] "+ inter.className}  >
                <p className="py-[5px] px-[15px] border-white border-[1px] rounded-[20px] text-base font-light text-center">E-commerce</p>
                <p className="py-[5px] px-[15px] border-white border-[1px] rounded-[20px] text-base font-light text-center">Finance</p>
                <p className="py-[5px] px-[15px] border-white border-[1px] rounded-[20px] text-base font-light text-center">Education</p>
                <p className="py-[5px] px-[15px] border-white border-[1px] rounded-[20px] text-base font-light text-center">Social</p>
                <p className="py-[5px] px-[15px] border-white border-[1px] rounded-[20px] text-base font-light text-center">Entertainment</p>
                <p className="py-[5px] px-[15px] border-white border-[1px] rounded-[20px] text-base font-light text-center">Medicine</p>
              </div>
            </div>
        </div>
    </div>
  )
}
