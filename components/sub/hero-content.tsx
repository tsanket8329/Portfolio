"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Image from "next/image";

import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/lib/motion";

export const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            AI / ML Engineer
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            Sanket{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              Tayde
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          AI & ML Enthusiast | Building Intelligent Systems with Data and Code.
          <br /><br />
          Passionate about creating innovative AI solutions, deep learning models, computer vision applications, and scalable backend architectures.
        </motion.p>

        <motion.div
          variants={slideInFromLeft(1)}
          className="flex flex-row gap-4 flex-wrap"
        >
          <a
            href="/CV.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-6 button-primary text-center text-white cursor-pointer rounded-lg font-semibold"
          >
            Resume / CV
          </a>
          <a
            href="#projects"
            className="py-3 px-6 border border-[#7042f88b] bg-[rgba(3,0,20,0.6)] text-center text-white cursor-pointer rounded-lg font-semibold hover:border-[#7042f8]"
          >
            View Work
          </a>
        </motion.div>
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center relative"
      >
        <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px] rounded-full p-2 bg-gradient-to-r from-cyan-500 to-purple-500 shadow-[0_0_50px_rgba(6,182,212,0.4)]">
          <div className="w-full h-full rounded-full overflow-hidden bg-black">
            <Image
              src="/profile.jpeg"
              alt="Sanket Tayde"
              width={380}
              height={380}
              className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};
