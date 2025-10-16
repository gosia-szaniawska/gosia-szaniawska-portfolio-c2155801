import { Lightbulb, Search, FileText, PenTool, Wrench } from "lucide-react";

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
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-2.5 sm:gap-4"
        role="list"
      >
        {phases.map((phase, index) => {
          const Icon = phase.icon;
          return (
            <article
              key={index}
              className="bg-card border border-border rounded-[18px] p-3.5 shadow-elegant"
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
          );
        })}
      </div>
    </section>
  );
};

export default ApproachSection;
