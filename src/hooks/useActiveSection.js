import { useEffect, useState } from "react";

export default function useActiveSection(sectionIds) {
  const [activeSection, setActiveSection] = useState(sectionIds[0] ?? "");

  useEffect(() => {
    if (!sectionIds.length) {
      return undefined;
    }

    let frameId = 0;

    const updateActiveSection = () => {
      const focusLine = window.innerHeight * 0.32;
      let nextActiveSection = null;
      let nearestSection = sectionIds[0];
      let nearestDistance = Number.POSITIVE_INFINITY;

      sectionIds.forEach((id) => {
        const node = document.getElementById(id);
        if (!node) {
          return;
        }

        const rect = node.getBoundingClientRect();
        const distanceToFocus = Math.abs(rect.top - focusLine);

        if (distanceToFocus < nearestDistance) {
          nearestDistance = distanceToFocus;
          nearestSection = id;
        }

        if (rect.top <= focusLine && rect.bottom >= focusLine) {
          nextActiveSection = id;
        }
      });

      const nearPageBottom =
        window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 8;

      setActiveSection(nearPageBottom ? sectionIds[sectionIds.length - 1] : nextActiveSection ?? nearestSection);
    };

    const onScrollOrResize = () => {
      cancelAnimationFrame(frameId);
      frameId = window.requestAnimationFrame(updateActiveSection);
    };

    updateActiveSection();
    window.addEventListener("scroll", onScrollOrResize, { passive: true });
    window.addEventListener("resize", onScrollOrResize);

    return () => {
      cancelAnimationFrame(frameId);
      window.removeEventListener("scroll", onScrollOrResize);
      window.removeEventListener("resize", onScrollOrResize);
    };
  }, [sectionIds]);

  return activeSection;
}
