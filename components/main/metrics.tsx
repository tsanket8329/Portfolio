"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";
import { SiLeetcode, SiGeeksforgeeks, SiGithub } from "react-icons/si";
import Link from "next/link";

export const Metrics = () => {
  return (
    <section
      id="metrics"
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
          <h1 className="Welcome-text text-[13px]">CODING METRICS</h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Multi-Platform Problem Solving
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* LeetCode Card */}
          <motion.div
            variants={slideInFromLeft(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link 
              href="https://leetcode.com/tsanket8329/"
              target="_blank"
              rel="noreferrer noopener"
              className="block h-full bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 hover:border-[#ffa116] transition-all duration-300 flex flex-col gap-4 cursor-pointer"
            >
            <div className="flex items-center gap-3">
              <SiLeetcode className="text-[#ffa116] w-8 h-8" />
              <h3 className="text-white text-xl font-bold">LeetCode</h3>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                Active
              </h1>
              <p className="text-gray-400">DSA & Problem Solving</p>
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm text-gray-300">
              <p>Practicing algorithmic problem solving in Data Structures and Algorithms.</p>
            </div>
            </Link>
          </motion.div>

          {/* GFG Card */}
          <motion.div
            variants={slideInFromLeft(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="https://www.geeksforgeeks.org/user/tsanket8329/"
              target="_blank"
              rel="noreferrer noopener"
              className="block h-full bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 hover:border-[#2f8d46] transition-all duration-300 flex flex-col gap-4 cursor-pointer"
            >
            <div className="flex items-center gap-3">
              <SiGeeksforgeeks className="text-[#2f8d46] w-8 h-8" />
              <h3 className="text-white text-xl font-bold">GeeksForGeeks</h3>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                Active
              </h1>
              <p className="text-gray-400">Coding Practice</p>
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm text-gray-300">
              <p>Strengthening core Computer Science concepts and algorithmic skills.</p>
            </div>
            </Link>
          </motion.div>

          {/* GitHub Card */}
          <motion.div
            variants={slideInFromLeft(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="https://github.com/tsanket8329"
              target="_blank"
              rel="noreferrer noopener"
              className="block h-full bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 hover:border-white transition-all duration-300 flex flex-col gap-4 cursor-pointer"
            >
            <div className="flex items-center gap-3">
              <SiGithub className="text-white w-8 h-8" />
              <h3 className="text-white text-xl font-bold">GitHub</h3>
            </div>
            <div className="flex flex-col gap-1">
              <h1 className="text-4xl font-bold text-white">
                Active
              </h1>
              <p className="text-gray-400">Repositories & Open Source</p>
            </div>
            <div className="flex flex-col gap-2 mt-2 text-sm text-gray-300">
              <p>Consistently building projects in Machine Learning, Deep Learning, and System Design.</p>
              <p className="mt-2 text-[#b49bff]">Check out tsanket8329 on GitHub.</p>
            </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
