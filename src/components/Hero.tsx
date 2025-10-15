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
        className="aspect-[4/5] rounded-[var(--radius)] overflow-hidden shadow-lg relative"
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
          <div className="w-full h-full flex flex-col items-center justify-center p-8 text-center">
            <img
              src="/placeholder.svg"
              alt="Upload your portrait"
              className="w-32 h-32 mb-4 opacity-50"
            />
            <p className="text-muted-foreground mb-4">Upload your portrait</p>
            <label htmlFor="portrait-upload" className="cursor-pointer inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2">
              Choose File
            </label>
            <input
              id="portrait-upload"
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
              className="hidden"
            />
          </div>
        )}
      </div>
    </header>
  );
};

export default Hero;
