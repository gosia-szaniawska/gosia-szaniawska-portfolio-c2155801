import { useState } from "react";
import { Badge } from "@/components/ui/badge";

const Hero = () => {
  const [portraitSrc, setPortraitSrc] = useState("");

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      setPortraitSrc(reader.result as string);
    };
    reader.readAsDataURL(file);
  };

  return (
    <header className="grid lg:grid-cols-[1.2fr_0.9fr] gap-8 lg:gap-10 items-center mb-16 lg:mb-20">
      <div className="space-y-5">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold inline-block bg-gradient-to-r from-pastel-blue via-pastel-violet to-pastel-pink px-6 py-3 rounded-full border border-border/50">
          Gosia Szaniawska-Schiavo: Portfolio
        </h1>
        
        <p className="text-lg lg:text-xl text-muted-foreground">
          Transformative communicator who can turn complex tech into 5× growth through data-driven storytelling and effective, AI-powered content management.
        </p>
      </div>
      
      <div 
        className="aspect-[4/5] rounded-[var(--radius)] overflow-hidden shadow-lg flex items-center justify-center"
        style={{ background: 'var(--gradient-portrait)' }}
        aria-label="Profile portrait area"
      >
        {portraitSrc ? (
          <img
            src={portraitSrc}
            alt="Portrait of Gosia Szaniawska-Schiavo"
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src="/placeholder.svg"
            alt="Profile portrait placeholder"
            className="w-full h-full object-cover opacity-20"
          />
        )}
      </div>
    </header>
  );
};

export default Hero;
