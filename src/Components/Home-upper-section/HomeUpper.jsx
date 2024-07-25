import React from 'react'
import {Button} from '../../Components'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'



function HomeUpper() {
  const tl = gsap.timeline()
    
   useGSAP(()=>{
    tl.from(".slideUp",{
      opacity:0,
      y:40,
      duration:1.5,
      stagger:0.5,
      delay:0.5,
      ease:"power2.out"
      })
      
      tl.from("#cta",{
        opacity:0,
        x:100,
        duration:0.5,
        delay:0,
        ease:"power2.out"
      })

   })


  return (
    <div  className='mt-4p flex flex-col items-center  justify-center '>
      <div className='text-2.5vw font-medium flex '>
          <p className='slideUp text-center'>
            Crafting Narratives,
          </p> 
          <p className='slideUp'>
            &nbsp; Lighting the Way Forward
          </p>
      </div>
        <p className='text-center text-1.2vw slideUp'>Unleash the power of your words</p>
        <Button className='mt-4p gap-3 hover:hoverAnim pt-0.7vw pb-0.7vw text-1.3vw slideUp' primary>
            Let's get started
        <i className="fa-solid fa-arrow-right"></i>
        </Button>
    </div>
  )
}

export default HomeUpper