import { useInView } from "framer-motion";
import React, { useRef } from "react";

function Section({ children, className, id }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section id={id} ref={ref} className={className}>
      <span
        style={{
          transform: isInView ? "none" : "translateY(200px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
        }}
      >
        {children}
      </span>
    </section>
  );
}

export default Section;
