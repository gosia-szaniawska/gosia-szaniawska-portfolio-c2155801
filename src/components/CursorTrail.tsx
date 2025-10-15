import { useEffect } from "react";

const CursorTrail = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const trail = document.createElement("div");
      trail.className = "cursor-trail";
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      
      document.body.appendChild(trail);
      
      // Remove the element after animation completes
      setTimeout(() => {
        trail.remove();
      }, 1000);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};

export default CursorTrail;
