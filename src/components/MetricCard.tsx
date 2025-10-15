import { LucideIcon } from "lucide-react";

interface MetricCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

const MetricCard = ({ icon: Icon, title, description }: MetricCardProps) => {
  return (
    <article className="bg-card border border-border/50 rounded-[var(--radius)] p-5 shadow-md hover:shadow-lg transition-shadow">
      <div className="flex gap-4 items-start">
        <div 
          className="w-11 h-11 rounded-xl flex items-center justify-center flex-shrink-0 border border-border/50"
          style={{ background: 'var(--gradient-card)' }}
          aria-hidden="true"
        >
          <Icon className="w-5 h-5 text-card-foreground" />
        </div>
        <div className="space-y-1">
          <strong className="text-base block">{title}</strong>
          <p className="text-sm text-muted-foreground leading-snug">{description}</p>
        </div>
      </div>
    </article>
  );
};

export default MetricCard;
