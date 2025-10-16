import { Lightbulb, Search, FileText, PenTool, Wrench, ArrowDown, ArrowRight } from "lucide-react";

const ApproachSection = () => {
  const phases = [
    {
      icon: Lightbulb,
      title: "Ideation",
      items: [
        "Audience and market research",
        "Vertical and funnel analysis",
        "Competitor benchmarking",
        "Identifying high-impact topics and formats",
      ],
    },
    {
      icon: Search,
      title: "Research",
      items: [
        "Keyword and intent mapping",
        "Asset and data collection",
        "Expert sourcing and quote curation",
        "Aligning topics with business goals and audience needs",
      ],
    },
    {
      icon: FileText,
      title: "Outlining",
      items: [
        "Creating structured, research-based briefs",
        "Defining the content thesis and unique angle",
        "Mapping key evidence, insights, and visuals",
      ],
    },
    {
      icon: PenTool,
      title: "Creation",
      items: [
        "Writing and editing (SEO + GEO optimized)",
        "Integrating storytelling and data-driven insights",
        "Visual briefing: graphics, charts, and infographics",
        "Internal reviews and refinement loops",
      ],
    },
    {
      icon: Wrench,
      title: "Validation",
      items: [
        "Publishing and performance monitoring",
        "Content repurposing and optimization",
        "Outreach and backlink acquisition",
        "AI-assisted overview and search visibility boosting",
      ],
    },
  ];

  return (
    <section className="approach mb-12 lg:mb-16" aria-labelledby="approach-title">
      <h2 id="approach-title" className="text-2xl sm:text-3xl lg:text-4xl mb-4">
        What I actually do: 360° Content Approach →
      </h2>
      <div className="approach-grid">
        {phases.map((phase, index) => {
          const Icon = phase.icon;
          return (
            <article
              key={index}
              className="phase bg-card border border-border rounded-xl p-3 shadow-elegant"
              role="listitem"
              aria-labelledby={`phase-${index}`}
            >
              <div
                className="phase-icon w-10 h-10 rounded-lg grid place-items-center mb-2 border border-border flex-shrink-0"
                style={{
                  background:
                    "linear-gradient(145deg, hsl(var(--pastel-blue)), hsl(var(--pastel-violet)))",
                }}
                aria-hidden="true"
              >
                <Icon className="w-5 h-5" />
              </div>
              <h3 id={`phase-${index}`} className="phase-title font-bold text-base">
                {phase.title}
              </h3>
              <ul className="phase-list list-disc">
                {phase.items.map((item, itemIndex) => (
                  <li key={itemIndex}>{item}</li>
                ))}
              </ul>
            </article>
          );
        })}
      </div>
      <style>{`
        .approach-grid {
          display: grid;
          grid-template-columns: repeat(5, minmax(0, 1fr));
          gap: clamp(10px, 2vw, 16px);
          align-items: stretch;
        }
        
        .phase {
          height: 100%;
          display: flex;
          flex-direction: column;
          box-sizing: border-box;
        }
        
        .phase * {
          min-width: 0;
        }
        
        .phase-title {
          margin: 4px 0 6px;
        }
        
        .phase-list {
          margin: 0;
          padding-left: 18px;
          font-size: 0.95rem;
          color: var(--muted-foreground);
        }
        
        .phase-list li {
          margin: 4px 0;
          overflow-wrap: anywhere;
          word-break: break-word;
        }
        
        @media (max-width: 1100px) {
          .approach-grid {
            grid-template-columns: repeat(3, minmax(0, 1fr));
          }
        }
        
        @media (max-width: 720px) {
          .approach-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </section>
  );
};

export default ApproachSection;
