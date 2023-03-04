import React from 'react'
import { motion } from 'framer-motion';
import ExperienceCard from './ExperienceCard';
import ExperienceCard2 from './ExperienceCards2';
import ExperienceCard3 from './ExperienceCard3';
import ExperienceCard4 from './ExperienceCard4';
import ExperienceCard5 from './ExperienceCard5';


type Props = {}

function WorkExperience({ }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full px-10 justify-evenly mx-auto items-center'
    >

      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Experience
      </h3>


      <div className='mt-26 md:absolute md:top-24 md:h-[80%]  md:w-1/2 w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80'>
        <ExperienceCard />
        <ExperienceCard4 />
        <ExperienceCard2 />
        <ExperienceCard3 />
        <ExperienceCard5 />

      </div>

    </motion.div>
  )
}

export default WorkExperience;
