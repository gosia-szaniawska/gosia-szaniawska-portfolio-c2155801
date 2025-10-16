import { Lightbulb, Search, FileText, PenTool, Wrench, ArrowDown, ArrowRight } from "lucide-react";

const ApproachSection = () => {
  const phases = [
    {
      icon: Lightbulb,
      title: "Ideation",
      items: [
        "Content research",
        "Audience research",
        "Vertical & funnel analysis",
        "Competitor research",
      ],
    },
    {
      icon: Search,
      title: "Research",
      items: [
        "Asset research",
        "Topic research",
        "Intent research",
        "Keyword research",
      ],
    },
    {
      icon: FileText,
      title: "Outlining",
      items: [
        "Structured briefs",
        "Content angle & thesis",
        "Evidence & sources map",
      ],
    },
    {
      icon: PenTool,
      title: "Creation",
      items: [
        "Writing & drafting",
        "SEO & GEO optimization",
        "Peer review & editing",
        "Graphics ideation",
        "Infographics",
      ],
    },
    {
      icon: Wrench,
      title: "Validation",
      items: [
        "Monitoring, testing & boosting",
        "Outreach & backlink acquisition",
        "Content repurposing",
        "Performance monitoring",
        "AI overview & AI search boosting",
      ],
    },
  ];

  return (
    <section className="mb-12 lg:mb-16" aria-labelledby="approach-title">
      <h2 id="approach-title" className="text-2xl sm:text-3xl lg:text-4xl mb-4">
        What I actually do: 360° Content Approach →
      </h2>
      <div className="flex items-center justify-between gap-2">
        {phases.map((phase, index) => {
          const Icon = phase.icon;
          const isLast = index === phases.length - 1;
          return (
            <div key={index} className="flex items-center flex-1">
              <article
                className="bg-card border border-border rounded-xl p-3 shadow-elegant w-full min-h-[180px] flex flex-col"
                role="listitem"
                aria-labelledby={`phase-${index}`}
              >
                <div
                  className="w-10 h-10 rounded-lg grid place-items-center mb-2 border border-border flex-shrink-0"
                  style={{
                    background:
                      "linear-gradient(145deg, hsl(var(--pastel-blue)), hsl(var(--pastel-violet)))",
                  }}
                  aria-hidden="true"
                >
                  <Icon className="w-5 h-5" />
                </div>
                <h3 id={`phase-${index}`} className="font-bold text-base mb-2 flex-shrink-0">
                  {phase.title}
                </h3>
                <ul className="space-y-1 text-muted-foreground text-[0.8rem] pl-4 list-disc">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="leading-snug">{item}</li>
                  ))}
                </ul>
              </article>
              
              {!isLast && (
                <div className="flex justify-center items-center px-2 flex-shrink-0">
                  <div
                    className="w-9 h-9 rounded-full grid place-items-center border border-border"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--pastel-pink)), hsl(var(--pastel-blue)))",
                    }}
                    aria-hidden="true"
                  >
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ApproachSection;
