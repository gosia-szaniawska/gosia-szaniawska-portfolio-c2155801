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
    <section className="mb-16 lg:mb-24" aria-labelledby="approach-title">
      <h2 id="approach-title" className="text-3xl sm:text-4xl lg:text-5xl mb-6">
        What I actually do: 360° Content Approach →
      </h2>
      <div className="flex flex-col xl:flex-row xl:items-start gap-0">
        {phases.map((phase, index) => {
          const Icon = phase.icon;
          const isLast = index === phases.length - 1;
          return (
            <div key={index} className="flex flex-col xl:flex-row xl:items-center">
              <article
                className="bg-card border border-border rounded-[18px] p-3.5 shadow-elegant flex-shrink-0"
                role="listitem"
                aria-labelledby={`phase-${index}`}
              >
                <div
                  className="w-11 h-11 rounded-xl grid place-items-center mb-2 border border-border"
                  style={{
                    background:
                      "linear-gradient(145deg, hsl(var(--pastel-blue)), hsl(var(--pastel-violet)))",
                  }}
                  aria-hidden="true"
                >
                  <Icon className="w-5.5 h-5.5" />
                </div>
                <h3 id={`phase-${index}`} className="font-bold text-lg mb-1.5">
                  {phase.title}
                </h3>
                <ul className="space-y-1 text-muted-foreground text-[0.95rem] pl-4.5 list-disc">
                  {phase.items.map((item, itemIndex) => (
                    <li key={itemIndex}>{item}</li>
                  ))}
                </ul>
              </article>
              
              {!isLast && (
                <div className="flex justify-center items-center py-3 xl:py-0 xl:px-4">
                  <div
                    className="w-10 h-10 xl:w-12 xl:h-12 rounded-full grid place-items-center border border-border"
                    style={{
                      background:
                        "linear-gradient(135deg, hsl(var(--pastel-pink)), hsl(var(--pastel-blue)))",
                    }}
                    aria-hidden="true"
                  >
                    <ArrowDown className="xl:hidden w-5 h-5" />
                    <ArrowRight className="hidden xl:block w-6 h-6" />
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
