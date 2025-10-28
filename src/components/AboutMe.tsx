import React from "react";
import { LazyMotion, domAnimation, motion } from "framer-motion";
import ResumeDownloadButton from "./ResumeDownloadButton";
import { FaHtml5 } from "@react-icons/all-files/fa/FaHtml5";
import { FaCss3Alt } from "@react-icons/all-files/fa/FaCss3Alt";
import { FaJsSquare } from "@react-icons/all-files/fa/FaJsSquare";
import { FaReact } from "@react-icons/all-files/fa/FaReact";
import { SiTypescript } from "@react-icons/all-files/si/SiTypescript";
import { SiTailwindcss } from "@react-icons/all-files/si/SiTailwindcss";
import { FaGithub } from "@react-icons/all-files/fa/FaGithub";
import { SiAdobephotoshop } from "@react-icons/all-files/si/SiAdobephotoshop";
import { SiUnity } from "@react-icons/all-files/si/SiUnity";

const SkillTag = ({ icon, label }: { icon: React.ReactNode; label: string }) => (
  <div className="flex items-center gap-2 bg-pink-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-md whitespace-nowrap">
    {icon}
    <span>{label}</span>
  </div>
);

export default function AboutMe() {
  return (
  <LazyMotion features={domAnimation}>

    <section id="about" className="min-h-screen bg-gray-900 text-white flex items-start justify-center pt-48 px-6 sm:px-10">
       

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-5xl text-center px-4"
      >
        <h2 className="text-4xl font-bold text-center mb-12 text-white">About <span className="text-pink-400">Me</span></h2>
               <p className="text-lg leading-relaxed text-gray-300">
          I’m an aspiring{" "}
          <span className="text-pink-400 font-semibold">Front-End Developer</span> passionate about building
          responsive and user-friendly web applications. With hands-on experience in{" "}
          <span className="text-pink-400 font-semibold">HTML, CSS, JavaScript, React, and TypeScript</span>, I recently completed the intensive Front-End Engineer career path at Codecademy, strengthening my skills in modern development practices.
        </p>
        <p className="text-lg leading-relaxed text-gray-300 mt-4">
          My background also includes extensive experience in{" "}
          <span className="text-pink-400 font-semibold">Unity game development</span>, where I successfully delivered multiple projects from concept to deployment. This honed my problem-solving skills and reinforced my commitment to writing clean, maintainable code.
        </p>
        <p className="text-lg leading-relaxed text-gray-300 mt-4">
          In addition to my technical expertise, I bring strong communication and collaboration skills developed through roles in project coordination, social media management, and customer service. I’m continuously exploring new technologies and excited to contribute to{" "}
          <span className="text-pink-400 font-semibold">innovative projects</span> that create meaningful user experiences.
        </p>
        <p className="text-lg leading-relaxed text-gray-300 mt-4">
          Currently, I am focusing intensively on front-end development, striving to create impactful and visually appealing interfaces that enhance user interaction and satisfaction.
        </p>
        <p className="font-semibold text-center mt-8">Let's collaborate on your next venture!</p>
         
         {/* Skill Tags */}
       <div className="flex flex-wrap justify-center gap-3 mt-10 pt-10">
          <SkillTag icon={<FaHtml5 />} label="HTML" />
          <SkillTag icon={<FaCss3Alt />} label="CSS" />
          <SkillTag icon={<FaJsSquare />} label="JavaScript" />
          <SkillTag icon={<FaReact />} label="React" />
          <SkillTag icon={<SiTypescript />} label="TypeScript" />
          <SkillTag icon={<SiTailwindcss />} label="Tailwind CSS" />
          <SkillTag icon={<FaGithub />} label="GitHub" />
          <SkillTag icon={<SiAdobephotoshop />} label="Photoshop" />
          <SkillTag icon={<SiUnity />} label="Unity" />
    </div>
         <div className="flex justify-center mt-10 pt-10 pb-20">
          <ResumeDownloadButton />
        </div>
      </motion.div>
    </section>
  </LazyMotion>

  );
}
