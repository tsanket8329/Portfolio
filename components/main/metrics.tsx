"use client";

import { SparklesIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import { slideInFromLeft, slideInFromTop } from "@/lib/motion";
import { SiLeetcode, SiGeeksforgeeks, SiGithub, SiHackerrank } from "react-icons/si";
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
          <h1 className="Welcome-text text-[13px]">CODING METRICS &amp; PROFILES</h1>
        </motion.div>

        <motion.h2
          variants={slideInFromLeft(0.5)}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-[30px] md:text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500"
        >
          Competitive Programming &amp; Open Source
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* GitHub Card */}
          <motion.div
            variants={slideInFromLeft(0.6)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="https://github.com/tsanket8329"
              target="_blank"
              rel="noreferrer noopener"
              className="block h-full bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 hover:border-white transition-all duration-300 flex flex-col gap-4 cursor-pointer hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,255,255,0.15)]"
            >
              <div className="flex items-center gap-3">
                <SiGithub className="text-white w-8 h-8" />
                <h3 className="text-white text-xl font-bold">GitHub</h3>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-4xl font-bold text-white">465+</h1>
                <p className="text-gray-400 text-sm font-medium">Contributions (Past Year)</p>
              </div>
              <div className="flex flex-col gap-1 text-xs text-gray-300 mt-auto pt-3 border-t border-[#2A0E61]">
                <p><span className="text-[#38bdf8] font-bold">14</span> Repositories</p>
                <p className="text-gray-400">Consistent daily commit activity</p>
              </div>
            </Link>
          </motion.div>

          {/* HackerRank Card */}
          <motion.div
            variants={slideInFromLeft(0.7)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link 
              href="https://www.hackerrank.com/profile/tsanket8329"
              target="_blank"
              rel="noreferrer noopener"
              className="block h-full bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 hover:border-[#00EA64] transition-all duration-300 flex flex-col gap-4 cursor-pointer hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(0,234,100,0.15)]"
            >
              <div className="flex items-center gap-3">
                <SiHackerrank className="text-[#00EA64] w-8 h-8" />
                <h3 className="text-white text-xl font-bold">HackerRank</h3>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-2xl font-bold text-[#00EA64]">
                  5-Star Gold
                </h1>
                <p className="text-gray-400 text-sm font-medium">Python Badge ⭐⭐⭐⭐⭐</p>
              </div>
              <div className="flex flex-col gap-1 text-xs text-gray-300 mt-auto pt-3 border-t border-[#2A0E61]">
                <p className="text-[#00EA64] font-medium">Software Engineer Intern Certified</p>
                <p className="text-gray-400">Multi-domain problem solving</p>
              </div>
            </Link>
          </motion.div>

          {/* LeetCode Card */}
          <motion.div
            variants={slideInFromLeft(0.8)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link 
              href="https://leetcode.com/u/tsanket8329/"
              target="_blank"
              rel="noreferrer noopener"
              className="block h-full bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 hover:border-[#ffa116] transition-all duration-300 flex flex-col gap-4 cursor-pointer hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(255,161,22,0.15)]"
            >
              <div className="flex items-center gap-3">
                <SiLeetcode className="text-[#ffa116] w-8 h-8" />
                <h3 className="text-white text-xl font-bold">LeetCode</h3>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-500 to-orange-500">
                  300+
                </h1>
                <p className="text-gray-400 text-sm font-medium">Problems Solved</p>
              </div>
              <div className="flex flex-col gap-1 text-xs text-gray-300 mt-2">
                <div className="flex justify-between"><span className="text-[#ffc01e]">Advanced DSA</span><span className="text-white font-semibold">Active</span></div>
                <div className="flex justify-between"><span className="text-[#00b8a3]">Problem Solving</span><span className="text-white font-semibold">Consistent</span></div>
              </div>
              <div className="mt-auto pt-3 border-t border-[#2A0E61] text-xs text-[#ffa116] font-medium">
                High Medium &amp; Hard Focus
              </div>
            </Link>
          </motion.div>

          {/* GFG Card */}
          <motion.div
            variants={slideInFromLeft(0.9)}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <Link
              href="https://www.geeksforgeeks.org/profile/tsanke84hl"
              target="_blank"
              rel="noreferrer noopener"
              className="block h-full bg-[rgba(3,0,20,0.6)] border border-[#2A0E61] rounded-xl p-6 hover:border-[#2f8d46] transition-all duration-300 flex flex-col gap-4 cursor-pointer hover:-translate-y-1 hover:shadow-[0_0_25px_rgba(47,141,70,0.15)]"
            >
              <div className="flex items-center gap-3">
                <SiGeeksforgeeks className="text-[#2f8d46] w-8 h-8" />
                <h3 className="text-white text-xl font-bold">GeeksForGeeks</h3>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-600">
                  200+
                </h1>
                <p className="text-gray-400 text-sm font-medium">Problems Solved</p>
              </div>
              <div className="flex flex-col gap-1 text-xs text-gray-300 mt-2">
                <div className="flex justify-between"><span className="text-gray-400">Coding Score</span><span className="text-white font-semibold">82+</span></div>
                <div className="flex justify-between"><span className="text-gray-400">POTDs</span><span className="text-white font-semibold">Active Streak</span></div>
              </div>
              <div className="mt-auto pt-3 border-t border-[#2A0E61] text-xs text-[#2f8d46] font-medium">
                Core Computer Science &amp; DSA
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
