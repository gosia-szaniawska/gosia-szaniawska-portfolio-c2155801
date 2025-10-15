import { FileText } from "lucide-react";

interface SampleCardProps {
  title: string;
  url: string;
  thumbnail?: string;
  description?: string;
}

const SampleCard = ({ title, url, thumbnail, description }: SampleCardProps) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="flex gap-4 items-start bg-card border border-border/50 rounded-2xl p-4 shadow-sm hover:shadow-md transition-shadow no-underline group"
      aria-label={`Open sample: ${title}`}
    >
      <div
        className="w-24 h-24 rounded-xl flex items-center justify-center flex-shrink-0 border border-border/50 overflow-hidden"
        style={thumbnail ? {} : { background: 'conic-gradient(from 120deg, hsl(var(--pastel-blue)), hsl(var(--pastel-violet)), hsl(var(--pastel-pink)))' }}
        aria-hidden="true"
      >
        {thumbnail ? (
          <img src={thumbnail} alt="" className="w-full h-full object-cover" />
        ) : (
          <FileText className="w-7 h-7 text-card-foreground" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <h4 className="font-semibold text-foreground group-hover:text-primary transition-colors">
          {title}
        </h4>
        {description && (
          <p className="text-sm text-muted-foreground mt-1.5">
            {description}
          </p>
        )}
      </div>
    </a>
  );
};

export default SampleCard;
