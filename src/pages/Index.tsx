import Hero from "@/components/Hero";
import MetricCard from "@/components/MetricCard";
import SampleCard from "@/components/SampleCard";
import { Button } from "@/components/ui/button";
import {
  TrendingUp,
  Sparkles,
  Link2,
  Trophy,
  FileText,
  Award,
  Target,
  Rocket,
  Zap,
  Calendar,
  PenTool,
  Linkedin,
  Mail,
} from "lucide-react";

const Index = () => {
  const metrics = [
    {
      icon: TrendingUp,
      title: "+400% organic traffic",
      description: "52K → 260K+ monthly visits (peak ~300K)",
    },
    {
      icon: Sparkles,
      title: "+30% higher AI Search visibility",
      description: "Outperforming direct competitors",
    },
    {
      icon: Link2,
      title: "+982% referring domains",
      description: "516 → 5,583",
    },
    {
      icon: Trophy,
      title: "+186% Top 3 keywords",
      description: "700 → 2,000 rankings",
    },
    {
      icon: FileText,
      title: "+209% organic pages indexed",
      description: "133 → 411",
    },
    {
      icon: Award,
      title: "High-authority backlinks",
      description: "~100–150+ earned quarterly",
    },
    {
      icon: Target,
      title: "+95% conversions YoY",
      description: "708 → 1,385",
    },
    {
      icon: Rocket,
      title: "SQLs from SEO up 4×",
      description: "~+300%",
    },
    {
      icon: Zap,
      title: "Editorial efficiency +35%",
      description: "AI-assisted workflows",
    },
    {
      icon: Calendar,
      title: "Publishing +126%",
      description: "26 → 59 articles monthly",
    },
    {
      icon: PenTool,
      title: "250+ edited • 80+ authored",
      description: "Long-form content pieces",
    },
  ];

  const sampleSections = [
    {
      title: "Digital PR pieces written by me",
      samples: [
        { title: "Metaverse (Digital PR)", url: "https://www.tidio.com/blog/metaverse/" },
        { title: "AI dating apps (Digital PR)", url: "https://www.tidio.com/blog/ai-dating-apps/" },
        { title: "Grammar mistakes & brand trust (Digital PR)", url: "https://www.tidio.com/blog/common-grammar-mistakes/" },
      ],
    },
    {
      title: "SEO-optimized pieces written by me",
      samples: [
        { title: "Instagram chatbots (SEO)", url: "https://www.tidio.com/blog/instagram-chatbot/" },
        { title: "Chatbot scripts (SEO)", url: "https://www.tidio.com/blog/chatbot-scripts/" },
        { title: "Create a chatbot for a website (SEO)", url: "https://www.tidio.com/blog/how-to-create-a-chatbot-for-a-website/" },
      ],
    },
    {
      title: "Ebooks written by me",
      samples: [
        { title: "AI-powered & rule-based chatbots (eBook)", url: "https://drive.google.com/file/d/1ft8SfsTmnDVHslAYXheNsuk9jcZjvcjz/view?usp=sharing" },
        { title: "Prep e‑commerce for BFCM + Blueprints (eBook)", url: "https://drive.google.com/file/d/16treO_aMwubLHUigYuRmBnxFgG6_e4i2/view?usp=sharing" },
      ],
    },
    {
      title: "Digital PR pieces edited by me",
      samples: [
        { title: "AI hallucinations (Digital PR – edited)", url: "https://www.tidio.com/blog/ai-hallucinations/" },
        { title: "Visual AI models examples (Digital PR – edited)", url: "https://www.tidio.com/blog/generative-ai-dall-e-examples/" },
        { title: "AI biases (Digital PR – edited)", url: "https://www.tidio.com/blog/ai-biases/" },
      ],
    },
    {
      title: "SEO-optimized pieces edited by me",
      samples: [
        { title: "Virtual shopping assistants (SEO – edited)", url: "https://www.tidio.com/blog/virtual-shopping-assistant/" },
        { title: "Chatbot use cases in business (SEO – edited)", url: "https://www.tidio.com/blog/chatbot-for-business/" },
        { title: "AI for customer service (SEO – edited)", url: "https://www.tidio.com/blog/ai-in-customer-communication/" },
      ],
    },
    {
      title: "Case studies edited by me",
      samples: [
        { title: "Integratec – Case Study", url: "https://www.tidio.com/blog/integratec-case-study/" },
        { title: "Gecko Hospitality – Case Study", url: "https://www.tidio.com/blog/gecko-hospitality-case-study/" },
        { title: "eye-oo – Case Study", url: "https://www.tidio.com/blog/eye-oo-case-study/" },
        { title: "Bella Santé – Case Study", url: "https://www.tidio.com/blog/bella-sante-case-study/" },
        { title: "Wulff Beltton – Case Study", url: "https://www.tidio.com/blog/wulff-beltton-case-study/" },
        { title: "ADT – Case Study", url: "https://www.tidio.com/blog/adt-case-study/" },
        { title: "Endeksa – Case Study", url: "https://www.tidio.com/blog/endeksa-case-study/" },
        { title: "Suitor – Case Study", url: "https://www.tidio.com/blog/suitor-case-study/" },
        { title: "Shockbyte – Case Study", url: "https://www.tidio.com/blog/shockbyte-case-study/" },
        { title: "Lyro – Case Study", url: "https://www.tidio.com/blog/lyro-case-study/" },
        { title: "Procosmet – Case Study", url: "https://www.tidio.com/blog/procosmet-case-study/" },
        { title: "Integrating ticketing into your CS stack (original research)", url: "https://www.tidio.com/blog/integrating-ticketing-into-your-cs-stack/" },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <main className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <Hero />

        {/* Metrics Section */}
        <section className="mb-16 lg:mb-24" aria-labelledby="metrics-title">
          <h2 id="metrics-title" className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            Some of my achievements in numbers
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4" role="list">
            {metrics.map((metric, index) => (
              <MetricCard key={index} {...metric} />
            ))}
          </div>
        </section>

        {/* Samples Section */}
        <section className="mb-16 lg:mb-24" aria-labelledby="samples-title">
          <h2 id="samples-title" className="text-3xl sm:text-4xl lg:text-5xl mb-8">
            My writing and editing samples
          </h2>
          
          {sampleSections.map((section, sectionIndex) => (
            <div key={sectionIndex} className="mb-10">
              <h3 className="text-xl font-bold mb-4">{section.title}</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3.5" role="list">
                {section.samples.map((sample, sampleIndex) => (
                  <SampleCard key={sampleIndex} {...sample} />
                ))}
              </div>
            </div>
          ))}
        </section>

        {/* Contact Section */}
        <section className="mb-12" aria-labelledby="contact-title">
          <h2 id="contact-title" className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            Let's connect!
          </h2>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full gap-2.5 shadow-md"
              style={{ background: 'var(--gradient-accent)' }}
            >
              <a
                href="https://www.linkedin.com/in/gosia-szaniawska/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full gap-2.5 shadow-md"
              style={{ background: 'var(--gradient-accent)' }}
            >
              <a
                href="mailto:szaniawska.malgorzata@gmail.com"
                aria-label="Send an email to Gosia"
              >
                <Mail className="w-5 h-5" />
                <span>szaniawska.malgorzata@gmail.com</span>
              </a>
            </Button>
          </div>
        </section>

        <footer className="py-6 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Gosia Szaniawska-Schiavo · Built with React, TypeScript & Tailwind CSS
        </footer>
      </main>
    </div>
  );
};

export default Index;
