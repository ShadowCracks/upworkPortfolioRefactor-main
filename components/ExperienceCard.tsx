import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function ExperienceCard({}: Props) {
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
            className='w-32 h-32 rounded-full xl:w-200 xl:h-200 object-cover  object-center'
            src='https://i.imgur.com/WpDEyyq.png'
            alt=""
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Machine Learning </h4>
                <p>Machine Learning</p>
                <div className='flex space-x-2 my-2'>
                    <img className="h-10 w-10 rounded-full" 
                    src="https://i.imgur.com/3Y10H27.png" alt="" />
                    <img className="h-10 w-10 rounded-full" 
                    src="https://i.imgur.com/UaLEC4A.png" alt="" />
                    <img className="h-10 w-10 rounded-full" 
                    src="https://i.imgur.com/AbE5G5b.png" alt="" />
                </div>
                <p className='uppercase py-5 text-gray-300'>September 2021  January 2022</p>

                <ul className='list-disc space-y-4 ml-5 text-lg '>
                    <li>self learning systems Model</li>
                    <li>Underwater drone maintenance</li>
                    <li>data collection</li>


                </ul>
            </div>
    </article>
  );
}

export default ExperienceCard
