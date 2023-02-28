import React from 'react';
import { motion } from 'framer-motion';

type Props = {}

function ExperienceCard4({}: Props) {
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
            src='https://thumbs.dreamstime.com/b/money-movement-vector-icon-logo-design-money-movement-vector-icon-logo-design-193390489.jpg'
            alt=""
            />

            <div className='px-0 md:px-10'>
                <h4 className='text-4xl font-light'>Few Cash</h4>
                <p>Developer</p>
                <div className='flex space-x-2 my-2'>
                    <img className="h-10 w-10 rounded-full" 
                    src="https://www.rlogical.com/wp-content/uploads/2021/08/Rlogical-Blog-Images-thumbnail.png" alt="" />
                    <img className="h-10 w-10 rounded-full" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png" alt="" />
                    <img className="h-10 w-10 rounded-full" 
                    src="https://res.cloudinary.com/crunchbase-production/image/upload/c_lpad,f_auto,q_auto:eco,dpr_1/junrqwfvds7vuowcovsv" alt="" />
                    
                    <img className="h-10 w-10 rounded-full" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="" />

                    <img className="h-10 w-10 rounded-full" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1200px-Typescript_logo_2020.svg.png" alt="" />

                    <img className="h-10 w-10 rounded-full" 
                    src="https://miro.medium.com/max/792/1*lJ32Bl-lHWmNMUSiSq17gQ.png" alt="" />
                    {/*Tech used*/}
                    {/*Tech used*/}
                    {/*Tech used*/}
                </div>
                <p className='uppercase py-5 text-gray-300'>Started January 2022 -in progress</p>

                <ul className='list-disc space-y-4 ml-5 text-lg '>
                    <li>e-wallet exchanger App</li>
                    <li>Developed in React Native</li>
                    <li>Will Require users ID verification</li>


                </ul>
            </div>
    </article>
  );
}

export default ExperienceCard4
