"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";

export const Experience = () => {
  return (
    <section
      id="experience"
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
          <h1 className="Welcome-text text-[13px]">EXPERIENCE &amp; TRAINING</h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          My Journey
        </motion.h2>

        <div className="flex flex-col gap-6 w-full">
          {/* Experience 1 */}
          <motion.div
            variants={slideInFromLeft(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-8 hover:border-[#7042f8] transition-all duration-300 w-full"
          >
            <div className="flex flex-col md:flex-row justify-between md:items-center mb-4">
              <div>
                <h3 className="text-xl font-bold text-white">AI/ML Development Intern</h3>
                <p className="text-[#38bdf8] font-semibold">Tech Innovations Pvt. Ltd. (Remote)</p>
              </div>
              <p className="text-gray-400 font-medium mt-2 md:mt-0">June 2025 – August 2025</p>
            </div>
            <ul className="list-disc ml-5 text-gray-400 flex flex-col gap-2">
              <li>Preprocessed and cleaned large datasets (500K+ records) for training machine learning models.</li>
              <li>Developed and trained classification models achieving 91% accuracy on validation data.</li>
              <li>Implemented feature engineering techniques improving model performance by 12%.</li>
              <li>Collaborated with senior data scientists on deployment pipelines using Docker and Flask.</li>
              <li>Created interactive visualization dashboards using Matplotlib and Seaborn for model performance analysis.</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
