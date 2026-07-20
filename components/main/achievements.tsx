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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-4">
          
          {/* Oracle Certification */}
          <motion.div
            variants={slideInFromLeft(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative group"
          >
            <Link 
              href="https://drive.google.com/file/d/1V4HfVD9fx6P25dfyXLaLGD_Okxm1Zr3e/view"
              target="_blank"
              rel="noreferrer noopener"
              className="block h-full bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 hover:border-[#00d4ff] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,212,255,0.15)] hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-3xl mb-3">🏆</div>
              <h3 className="text-white font-semibold text-[18px] mb-1">Oracle Data Platform Certified Foundations Associate</h3>
              <p className="text-[#00d4ff] text-sm font-medium mb-3">Oracle</p>
              <p className="text-gray-400 text-[14px] leading-[1.7] mb-4">
                Demonstrated foundational knowledge of Oracle Data Platform concepts, data management, and cloud architecture.
              </p>
              <div className="text-[12px] text-[#00d4ff] font-medium tracking-wide border-t border-[#2A0E61] pt-3 mt-auto flex justify-between items-center">
                <span>Issued: April 2026</span>
                <span>View Certificate 🔗</span>
              </div>
            </Link>
          </motion.div>

          {/* HackerRank 5-Star Badge */}
          <motion.div
            variants={slideInFromLeft(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative group"
          >
            <Link
              href="https://www.hackerrank.com/profile/tsanket8329"
              target="_blank"
              rel="noreferrer noopener"
              className="block h-full bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 hover:border-[#ffa116] transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,161,22,0.15)] hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-3xl mb-3">⭐</div>
              <h3 className="text-white font-semibold text-[18px] mb-1">5-Star Gold Python Badge</h3>
              <p className="text-[#ffa116] text-sm font-medium mb-3">HackerRank</p>
              <p className="text-gray-400 text-[14px] leading-[1.7] mb-4">
                Earned top-tier 5-Star Gold Badge in Python programming, solving complex algorithmic challenges.
              </p>
              <div className="text-[12px] text-[#ffa116] font-medium tracking-wide border-t border-[#2A0E61] pt-3 mt-auto flex justify-between items-center">
                <span>Verified Badge Level</span>
                <span>View Profile 🔗</span>
              </div>
            </Link>
          </motion.div>

          {/* HackerRank Software Engineer Intern */}
          <motion.div
            variants={slideInFromLeft(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="relative group"
          >
            <Link
              href="https://drive.google.com/file/d/1krSeBMpwaKSBzsDqJ5Pg_XgKgfWzfj99/view"
              target="_blank"
              rel="noreferrer noopener"
              className="block h-full bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 hover:border-[#00EA64] transition-all duration-300 hover:shadow-[0_0_30px_rgba(0,234,100,0.15)] hover:-translate-y-1 cursor-pointer"
            >
              <div className="text-3xl mb-3">📜</div>
              <h3 className="text-white font-semibold text-[18px] mb-1">Software Engineer Intern Certification</h3>
              <p className="text-[#00EA64] text-sm font-medium mb-3">HackerRank</p>
              <p className="text-gray-400 text-[14px] leading-[1.7] mb-4">
                Validated core competencies in Software Engineering, Data Structures, Problem Solving, and REST API design.
              </p>
              <div className="text-[12px] text-[#00EA64] font-medium tracking-wide border-t border-[#2A0E61] pt-3 mt-auto flex justify-between items-center">
                <span>Issued: September 2025</span>
                <span>View Certificate 🔗</span>
              </div>
            </Link>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
