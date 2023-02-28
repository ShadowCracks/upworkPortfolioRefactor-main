import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function ExperienceCard3({}: Props) {
  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] 
    xl:w-[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40
    cursor-pointer transition-opacity duration-200 overflow-hidden'>
        <motion.img
            initial={{
                y: -100,
                opacity: 0,
            }}
            transition={{duration: 1.2}}
            whileInView={{opacity: 1, y:0}}
            viewport={{once: true}}
            className='w-32 h-32 rounded-full xl:w-[200] xl:h-[200px] object-cover  object-center'
            src='https://c3.iggcdn.com/indiegogo-media-prod-cld/image/upload/c_fill,w_695,g_auto,q_auto,dpr_2.6,f_auto,h_460/umqqtbpldurnzli5eckq'
            alt=""
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Prosthetic Hand</h4>
                <p>Portfolio</p>
                <div className='flex space-x-2 my-2'>
                    <img className="h-10 w-10 rounded-full" 
                    src="https://olimex.files.wordpress.com/2017/06/arduino-logo-circle-thumb.png?w=584" alt="" />
                    {/*Tech used*/}
                </div>
                <p className='uppercase py-5 text-gray-300'> September 2021 - June2022...</p>

                <ul className='list-disc space-y-4 ml-5 text-lg '>
                    <li>Electricaly engineered hand</li>
                    <li>Arduino writen program</li>
                    <li>Close/Open motion Pressure Sensor</li>


                </ul>
            </div>
    </article>
  );
}

export default ExperienceCard3
