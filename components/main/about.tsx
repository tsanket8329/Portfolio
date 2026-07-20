"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

export const About = () => {
  return (
    <section
      id="about-me"
      className="flex flex-col items-center justify-center px-6 md:px-20 py-20 w-full z-[20]"
    >
      <div className="w-full max-w-[1100px] flex flex-col gap-6">
        <motion.div
          variants={slideInFromTop}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">ABOUT ME</h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Who I Am
        </motion.h2>

        <motion.div
          variants={slideInFromLeft(0.6)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 md:p-8 hover:border-[#7042f8] transition-all duration-300"
        >
          <p className="text-gray-400 text-lg leading-[1.8] mb-6">
            I'm a passionate B.Tech student specializing in Artificial Intelligence and Machine Learning at Lovely Professional University. I am driven by the vision of creating intelligent systems that transform how we interact with technology and solve real-world challenges through data-driven solutions.
          </p>
          <p className="text-gray-400 text-lg leading-[1.8] mb-6">
            With hands-on experience in building generative AI models (such as Conditional DDPMs), computer vision applications, and NLP chatbots, I combine theoretical knowledge with practical software implementation. My focus spans Machine Learning engineering, Deep Learning, and backend API design.
          </p>
          <p className="text-gray-400 text-lg leading-[1.8]">
            I believe in continuous learning, collaborative innovation, and leveraging cutting-edge tools (TensorFlow, PyTorch, Scikit-learn, Flask, Docker, and C++) to engineer robust, high-performance software systems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};
