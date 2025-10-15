import { FileText } from "lucide-react";

interface SampleCardProps {
  title: string;
  url: string;
  thumbnail?: string;
}

const SampleCard = ({ title, url, thumbnail }: SampleCardProps) => {
  return (
    <article className="flex gap-3 items-center bg-card border border-border/50 rounded-2xl p-3 shadow-sm hover:shadow-md transition-shadow">
      <div
        className="w-14 h-14 rounded-xl flex items-center justify-center flex-shrink-0 border border-border/50 overflow-hidden"
        style={thumbnail ? {} : { background: 'conic-gradient(from 120deg, hsl(var(--pastel-blue)), hsl(var(--pastel-violet)), hsl(var(--pastel-pink)))' }}
        aria-hidden="true"
      >
        {thumbnail ? (
          <img src={thumbnail} alt="" className="w-full h-full object-cover" />
        ) : (
          <FileText className="w-6 h-6 text-card-foreground" />
        )}
      </div>
      <div className="min-w-0 flex-1">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="font-semibold text-foreground hover:text-primary transition-colors no-underline block truncate"
          aria-label={`Open sample: ${title}`}
        >
          {title}
        </a>
      </div>
    </article>
  );
};

export default SampleCard;
