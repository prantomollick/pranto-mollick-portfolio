import type { SectionName } from "@/types/section-name-type";

import { useActiveSection } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

type useSectionInViewProps = {
  sectionName: SectionName;
};

export function useSectionInView({ sectionName }: useSectionInViewProps) {
  const { ref, inView } = useInView({
    threshold: 0.5,
  });
  const { setActiveSection, timeOfLastClick } = useActiveSection();

  useEffect(() => {
    if (inView && Date.now() - timeOfLastClick > 1000) {
      setActiveSection(sectionName);
    }
  }, [setActiveSection, inView, timeOfLastClick, sectionName]);

  return {
    ref,
  };
}
