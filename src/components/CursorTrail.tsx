import { useEffect } from "react";

const CursorTrail = () => {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      // Blue swirl trail
      const trail = document.createElement("div");
      trail.className = "cursor-trail";
      trail.style.left = `${e.clientX}px`;
      trail.style.top = `${e.clientY}px`;
      
      document.body.appendChild(trail);
      
      // Remove the element after animation completes
      setTimeout(() => {
        trail.remove();
      }, 1000);

      // Pink glitter effect - create randomly
      if (Math.random() > 0.7) {
        const glitter = document.createElement("div");
        glitter.className = "cursor-glitter";
        glitter.style.left = `${e.clientX + (Math.random() - 0.5) * 30}px`;
        glitter.style.top = `${e.clientY + (Math.random() - 0.5) * 30}px`;
        
        document.body.appendChild(glitter);
        
        setTimeout(() => {
          glitter.remove();
        }, 800);
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return null;
};

export default CursorTrail;
