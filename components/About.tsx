import React from 'react';
import { motion } from 'framer-motion';

type Props = {};

export default function About({}: Props) {
  return (
    <div className="flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-14 uppercase tracking-[20px] text-gray-500 text-2xl ">
        About
      </h3>

      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="https://i.imgur.com/KqVRij3.jpg"
        className="mt-20 md:mt-2 flex-shrink-0 w-56 h-30 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-500px xl:h-600px"
      />

      <div className="space-y-4 px-0 md:px-10 flex-1 max-w-3xl">
        <h4 className="text-3xl font-semibold">
          Here is a{" "}
          <span className="underline decoration-yellow-600/50">little</span> background
        </h4>
        <p className="text-base text-md">
          My name is Amara and Im a full stack developer with a passion for programming. Despite my efforts to explore other career paths, I have always found myself drawn back to the world of coding. I have several years of experience working with JavaScript latest technology, and I am proficient in utilizing frameworks such as Next.js to build feature-rich web applications. I am excited to bring you my exceptional skills into the scene to help you develop your business.
        </p>
      </div>
    </div>
  );
}
