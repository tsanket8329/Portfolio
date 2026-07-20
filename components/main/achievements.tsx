"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";

import { slideInFromTop, slideInFromLeft } from "@/lib/motion";
import Link from "next/link";

export const Achievements = () => {
  return (
    <section
      id="achievements"
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
          <h1 className="Welcome-text text-[13px]">ACHIEVEMENTS & CERTIFICATIONS</h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Milestones & Recognition
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-4">
          
          {/* Machine Learning Specialization */}
          <motion.div
            variants={slideInFromLeft(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative group"
          >
            <Link 
              href="https://drive.google.com/file/d/1vqNrCGMtmSYDubiY3sB0sP7M1CuxP7SU/view?usp=sharing"
              target="_blank"
              rel="noreferrer noopener"
              className="block h-full bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 hover:border-[#00d4ff] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-white font-semibold text-[18px] mb-1">Machine Learning Specialization</h3>
              <p className="text-[#00d4ff] text-sm font-medium mb-3">Stanford University (Coursera)</p>
              <p className="text-gray-400 text-[14px] leading-[1.7] mb-4">
                Advanced training in supervised learning, neural networks, unsupervised learning, and best practices for building real-world ML algorithms.
              </p>
              <div className="text-[12px] text-gray-500 font-medium tracking-wide border-t border-[#2A0E61] pt-3 mt-auto">
                Issued: September 2025
              </div>
            </Link>
          </motion.div>

          {/* Deep Learning & TensorFlow Certifications */}
          <motion.div
            variants={slideInFromLeft(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="h-full bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 hover:border-[#7042f8] transition-all duration-300 hover:shadow-[0_0_30px_rgba(112,66,248,0.15)] hover:-translate-y-1">
              <div className="text-3xl mb-3">📜</div>
              <h3 className="text-white font-semibold text-[18px] mb-2">Professional Certifications</h3>
              <ul className="text-gray-400 text-[14px] leading-[1.7] mb-4 space-y-2 list-disc ml-4">
                <li><strong className="text-white">Deep Learning Specialization</strong> - DeepLearning.AI (July 2025)</li>
                <li><strong className="text-white">TensorFlow Developer Certificate</strong> - Google (October 2025)</li>
                <li><strong className="text-white">Python for Data Science and AI</strong> - IBM / Coursera (March 2025)</li>
              </ul>
              <div className="text-[12px] text-gray-500 font-medium tracking-wide border-t border-[#2A0E61] pt-3 mt-auto">
                Verified Skill Credentials
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
