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
        <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight font-bold">
          Gosia Szaniawska-Schiavo: Portfolio
        </h1>
        
        <p className="text-lg lg:text-xl text-muted-foreground">
          Transformative communicator who can turn complex tech into 5× growth through data-driven storytelling and effective AI-powered content management.
        </p>
        
        <div className="flex flex-wrap gap-3 items-center pt-2">
          <label htmlFor="headshot" className="text-sm text-muted-foreground cursor-pointer">
            Optional: add/replace photo →
          </label>
          <input
            id="headshot"
            name="headshot"
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            className="text-sm file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-sm file:font-semibold file:bg-secondary file:text-foreground hover:file:bg-secondary/80 cursor-pointer"
            aria-label="Upload a profile photo"
          />
        </div>
      </div>
      
      <div 
        className="aspect-[4/5] rounded-[var(--radius)] overflow-hidden shadow-lg"
        style={{ background: 'var(--gradient-portrait)' }}
        aria-label="Profile portrait area"
      >
        {portraitSrc && (
          <img
            src={portraitSrc}
            alt="Portrait of Gosia Szaniawska-Schiavo"
            className="w-full h-full object-cover"
          />
        )}
      </div>
    </header>
  );
};

export default Hero;
