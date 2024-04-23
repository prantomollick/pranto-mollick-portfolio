import React from "react";
import SectionHeading from "./section-heading";
import { projectsData } from "@/lib/data";
import Project from "./Project";
export type ProjectProps = (typeof projectsData)[number];

function Projects() {
  return (
    <section id="projects" className="scroll-mt-28">
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
