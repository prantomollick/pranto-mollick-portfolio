"use client";

import { skillsData } from "@/lib/data";
import SectionHeading from "./section-heading";
import { delay, motion } from "framer-motion";
import { useSectionInView } from "@/hooks/use-section-in-view";

const fadeInAnimationsVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },

  animate: (idx: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * idx,
    },
  }),
};

function Skills() {
  const { ref } = useSectionInView("Skills", 0.5);

  return (
    <section className="mb-28 max-w-[53rem] scroll-mt-28" id="skills" ref={ref}>
      <SectionHeading>Skills</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, idx) => (
          <motion.li
            className="rounded-xl border border-black/[0.1] bg-white px-5 py-3"
            key={idx}
            variants={fadeInAnimationsVariants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={idx}
          >
            {skill}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
