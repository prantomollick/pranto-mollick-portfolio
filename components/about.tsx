"use client";
import React from "react";
import { motion } from "framer-motion";
import SectionHeading from "./section-heading";

function About() {
  return (
    <motion.section
      className="mb-28 max-w-[45rem] text-center leading-7 sm:mb-40"
      initial={{ opacity: 0, y: 100 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.17 }}
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3 text-gray-900">
        I am a dedicated{" "}
        <span className="font-medium text-gray-950">Full-Stack Developer</span>{" "}
        with a Bachelor’s degree in{" "}
        <span className="font-medium text-gray-950">
          Computer Science & Engineering
        </span>
        . <span className="italic">My academic and practical experiences</span>{" "}
        have endowed me with a profound understanding of{" "}
        <span className="italic">web development</span>, from conceptualization
        to deployment.
      </p>

      <p className="mb-3 text-gray-900">
        My expertise lies in developing high-performance applications using a
        comprehensive tech stack that includes{" "}
        <span className="font-medium text-gray-950">
          HTML, CSS, SCSS, React, Next.js, Node.js, JavaScript, MongoDB, MySQL,
          TypeScript, Prisma, and Python
        </span>
        . I am always guided by{" "}
        <span className="underline">best practices in coding</span> and a
        steadfast commitment to{" "}
        <span className="font-medium text-gray-950">
          Data Structures and Algorithms
        </span>
        , ensuring that every project I undertake is built on a solid
        foundation.
      </p>

      <p className="mb-3 text-gray-900">
        In the pursuit of technical excellence, I am actively seeking a&nbsp;
        <span className="font-medium text-gray-950">full-time</span> opportunity
        where I can{" "}
        <span className="italic">
          contribute to impactful projects and collaborate with like-minded
          professionals.
        </span>
      </p>

      <p className="mb-3 text-gray-900">
        Professionally, I am also deeply interested in{" "}
        <span className="font-medium text-gray-950">
          AI (Machine Learning) & Prompt Engineering
        </span>
        , continually expanding my knowledge and skills in these cutting-edge
        fields. I am passionate about leveraging these technologies to create
        innovative solutions and drive progress.
      </p>

      <p className="mb-3 text-gray-900">
        Outside of my professional life, I have a passion for{" "}
        <span className="font-bold text-gray-950">
          exploring different places, traveling, and reading books
        </span>
        . These pursuits enrich my life, providing me with new experiences and
        insights that I bring back to my professional endeavors.
      </p>

      <p className="text-gray-900">
        I am excited about the opportunity to bring my diverse skill set,
        innovative mindset, and passion for technology to an organization that
        values growth and excellence.
      </p>
    </motion.section>
  );
}

export default About;
