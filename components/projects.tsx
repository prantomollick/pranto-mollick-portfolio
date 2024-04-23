"use client";

import { useSectionInView } from "@/hooks/use-section-in-view";
import { projectsData } from "@/lib/data";
import React from "react";
import Project from "./Project";
import SectionHeading from "./section-heading";
export type ProjectProps = (typeof projectsData)[number];

function Projects() {
  const { ref } = useSectionInView({ sectionName: "Projects" });

  return (
    <section id="projects" className="scroll-mt-28" ref={ref}>
      <SectionHeading>My projects</SectionHeading>
      <div>
        {projectsData.map((project, idx) => (
          <React.Fragment key={idx}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}

export default Projects;
