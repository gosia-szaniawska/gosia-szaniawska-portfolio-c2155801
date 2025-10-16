import Hero from "@/components/Hero";
import MetricCard from "@/components/MetricCard";
import SampleCard from "@/components/SampleCard";
import ApproachSection from "@/components/ApproachSection";
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

// Thumbnail imports
import metaverseThumbnail from "@/assets/thumbnails/metaverse.jpg";
import aiDatingThumbnail from "@/assets/thumbnails/ai-dating.jpg";
import grammarThumbnail from "@/assets/thumbnails/grammar-new.jpg";
import instagramChatbotThumbnail from "@/assets/thumbnails/instagram-chatbot.jpg";
import chatbotScriptsThumbnail from "@/assets/thumbnails/chatbot-scripts.jpg";
import createChatbotThumbnail from "@/assets/thumbnails/create-chatbot.jpg";
import ebookAiChatbotsThumbnail from "@/assets/thumbnails/ebook-ai-chatbots.jpg";
import ebookEcommerceThumbnail from "@/assets/thumbnails/ebook-ecommerce.jpg";
import aiHallucinationsThumbnail from "@/assets/thumbnails/ai-hallucinations.jpg";
import visualAiThumbnail from "@/assets/thumbnails/visual-ai.jpg";
import aiBiasesThumbnail from "@/assets/thumbnails/ai-biases.jpg";
import shoppingAssistantThumbnail from "@/assets/thumbnails/shopping-assistant.jpg";
import chatbotBusinessThumbnail from "@/assets/thumbnails/chatbot-business.jpg";
import aiCustomerServiceThumbnail from "@/assets/thumbnails/ai-customer-service.jpg";
import chatbotMarketingThumbnail from "@/assets/thumbnails/chatbot-marketing.jpg";
import bellaSanteThumbnail from "@/assets/thumbnails/bella-sante.jpg";
import lyroThumbnail from "@/assets/thumbnails/lyro.jpg";
import ticketingResearchThumbnail from "@/assets/thumbnails/ticketing-research.jpg";

const Index = () => {
  const metrics = [
    {
      icon: TrendingUp,
      title: "+400% organic traffic",
      description: "52K → 260K+ monthly visits (peak ~300K)",
    },
    {
      icon: Sparkles,
      title: "+30% higher AI search visibility",
      description: "Outperforming direct competitors",
    },
    {
      icon: Link2,
      title: "+982% referring domains",
      description: "516 → 5,583",
    },
    {
      icon: Trophy,
      title: "+186% top 3 keywords uplift",
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
      title: "250+ edited, 200+ authored",
      description: "Long-form content pieces",
    },
    {
      icon: FileText,
      title: "Editorial team ×7",
      description: "Managed writers, researchers, SEO & outreach specialists",
    },
  ];

  const sampleSections = [
    {
      title: "Digital PR pieces written by me",
      samples: [
        { title: "Metaverse", url: "https://www.tidio.com/blog/metaverse/", thumbnail: metaverseThumbnail, description: "Comprehensive exploration of virtual worlds, digital economies, and the future of immersive online experiences." },
        { title: "AI dating apps", url: "https://www.tidio.com/blog/ai-dating-apps/", thumbnail: aiDatingThumbnail, description: "In-depth analysis of artificial intelligence transforming modern romance and relationship-building platforms." },
        { title: "Grammar mistakes & brand trust", url: "https://www.tidio.com/blog/common-grammar-mistakes/", thumbnail: grammarThumbnail, description: "Insightful PR analysis about the business impact of language accuracy in professional and brand communication." },
      ],
    },
    {
      title: "SEO-optimized pieces written by me",
      samples: [
        { title: "Instagram chatbots", url: "https://www.tidio.com/blog/instagram-chatbot/", thumbnail: instagramChatbotThumbnail, description: "Complete guide to automating Instagram engagement and customer interactions with intelligent chatbot solutions." },
        { title: "Chatbot scripts", url: "https://www.tidio.com/blog/chatbot-scripts/", thumbnail: chatbotScriptsThumbnail, description: "Strategic templates and conversational frameworks for building effective automated customer service dialogues." },
        { title: "Create a chatbot for a website", url: "https://www.tidio.com/blog/how-to-create-a-chatbot-for-a-website/", thumbnail: createChatbotThumbnail, description: "Step-by-step technical guide for implementing AI-powered chatbots to enhance website visitor engagement." },
      ],
    },
    {
      title: "Ebooks written by me",
      samples: [
        { title: "AI-powered & rule-based chatbots", url: "https://drive.google.com/file/d/1ft8SfsTmnDVHslAYXheNsuk9jcZjvcjz/view?usp=sharing", thumbnail: ebookAiChatbotsThumbnail, description: "Comprehensive comparison of intelligent conversational AI versus traditional rule-based automation systems." },
        { title: "Prep e‑commerce for BFCM + Blueprints", url: "https://drive.google.com/file/d/16treO_aMwubLHUigYuRmBnxFgG6_e4i2/view?usp=sharing", thumbnail: ebookEcommerceThumbnail, description: "Strategic playbook with actionable blueprints for maximizing Black Friday and Cyber Monday e-commerce success." },
      ],
    },
    {
      title: "Digital PR pieces edited by me",
      samples: [
        { title: "AI hallucinations", url: "https://www.tidio.com/blog/ai-hallucinations/", thumbnail: aiHallucinationsThumbnail, description: "Critical examination of when artificial intelligence generates false or misleading information and mitigation strategies." },
        { title: "Visual AI models examples", url: "https://www.tidio.com/blog/generative-ai-dall-e-examples/", thumbnail: visualAiThumbnail, description: "Showcase of cutting-edge generative AI capabilities through DALL-E and other visual content creation models." },
        { title: "AI biases", url: "https://www.tidio.com/blog/ai-biases/", thumbnail: aiBiasesThumbnail, description: "Deep dive into systemic prejudices in machine learning algorithms and ethical implications for technology development." },
      ],
    },
    {
      title: "SEO-optimized pieces edited by me",
      samples: [
        { title: "Virtual shopping assistants", url: "https://www.tidio.com/blog/virtual-shopping-assistant/", thumbnail: shoppingAssistantThumbnail, description: "Detailed exploration of AI-powered personal shoppers revolutionizing online retail customer experiences." },
        { title: "Chatbot use cases in business", url: "https://www.tidio.com/blog/chatbot-for-business/", thumbnail: chatbotBusinessThumbnail, description: "Practical applications of conversational AI across industries to streamline operations and boost customer satisfaction." },
        { title: "Chatbot marketing", url: "https://www.tidio.com/blog/chatbot-marketing/", thumbnail: chatbotMarketingThumbnail, description: "Strategic guide to leveraging conversational AI for marketing automation, lead generation, and customer engagement." },
      ],
    },
    {
      title: "Case studies and thought leadership pieces edited by me",
      samples: [
        { title: "Bella Santé", url: "https://www.tidio.com/blog/bella-sante-case-study/", thumbnail: bellaSanteThumbnail, description: "Real-world success story demonstrating transformative customer engagement strategies in spa and wellness industry." },
        { title: "Lyro", url: "https://www.tidio.com/blog/lyro-case-study/", thumbnail: lyroThumbnail, description: "Innovative AI chatbot implementation case study showcasing measurable business impact and conversion improvements." },
        { title: "Integrating ticketing into your CS stack", url: "https://www.tidio.com/blog/integrating-ticketing-into-your-cs-stack/", thumbnail: ticketingResearchThumbnail, description: "Strategic research on seamlessly incorporating ticketing systems into modern customer service technology ecosystems." },
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <main className="max-w-[1120px] mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
        <Hero />

        {/* About Me Section */}
        <section className="mb-16 lg:mb-24" aria-labelledby="about-title">
          <h2 id="about-title" className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            About me →
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground">
            <p>
              I'm a content manager, editor, and writer who <span className="bg-gradient-to-r from-pastel-blue via-pastel-violet to-pastel-pink px-2 py-1 rounded">turns complex tech into stories</span> people actually want to read. I've worked across various industries: from B2B SaaS to AI and translation tech.
            </p>
            <p>In the last 8+ years:</p>
            <ul className="list-disc pl-6 space-y-2">
              <li>I've led editorial teams, scaled SEO-driven growth, and ran content ops like a well-oiled machine (without killing creativity).</li>
              <li>I've thrived in both <span className="bg-gradient-to-r from-pastel-blue via-pastel-violet to-pastel-pink px-2 py-1 rounded">SEO & GEO</span>, designing editorial systems, and leading cross-functional campaigns.</li>
              <li>I've positioned brands as trusted thought leaders with data-driven storytelling, thought-leadership pieces, and case studies.</li>
              <li>I've created and edited content that resonates emotionally and drives engagement + measurable results.</li>
              <li>I've gained experience in <span className="bg-gradient-to-r from-pastel-blue via-pastel-violet to-pastel-pink px-2 py-1 rounded">creating multiple content formats</span>: blog posts, landing pages, email streams, ebooks, gated content, long-form & short-form.</li>
            </ul>
            <p>
              What makes me tick? First and foremost, I'm dedicated to <span className="bg-gradient-to-r from-pastel-blue via-pastel-violet to-pastel-pink px-2 py-1 rounded">shaping narratives around technologies that make global communication clearer, more human, and more impactful</span>.
            </p>
          </div>
        </section>

        {/* 360° Content Approach Section */}
        <ApproachSection />

        {/* Metrics Section */}
        <section className="mb-16 lg:mb-24" aria-labelledby="metrics-title">
          <h2 id="metrics-title" className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            Some of my achievements in numbers →
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
            My writing and editing samples →
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

        {/* How do I work Section */}
        <section className="mb-12" aria-labelledby="contact-title">
          <h2 id="contact-title" className="text-3xl sm:text-4xl lg:text-5xl mb-6">
            How do I work →
          </h2>
          <div className="space-y-4 text-lg text-muted-foreground mb-6">
            <p>
              I've worked <span className="bg-gradient-to-r from-pastel-blue via-pastel-violet to-pastel-pink px-2 py-1 rounded">fully remote since 2017 (8+ years)</span> and here's how I keep it rolling:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>Async-first, <span className="bg-gradient-to-r from-pastel-blue via-pastel-violet to-pastel-pink px-2 py-1 rounded">timezone-flexible (EMEA ↔ US)</span> B2B contracts</li>
              <li>I handle <span className="bg-gradient-to-r from-pastel-blue via-pastel-violet to-pastel-pink px-2 py-1 rounded">invoicing and taxes via my company</span></li>
              <li>Comfortable with distributed teams, clear SLAs, and documented workflows</li>
              <li>Travel-ready for on-site collaboration key workshops, offsites, or launches</li>
            </ul>
            <p>
              If you're a <span className="bg-gradient-to-r from-pastel-blue via-pastel-violet to-pastel-pink px-2 py-1 rounded">top-tier team with a high editorial bar and measurable goals</span>, reach out! Let's see if we're the right fit.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button
              asChild
              size="lg"
              className="rounded-full gap-2.5 shadow-md text-black"
              style={{ background: 'var(--gradient-accent)' }}
            >
              <a
                href="https://www.linkedin.com/in/gosia-szaniawska/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Open LinkedIn profile"
              >
                <Linkedin className="w-5 h-5" color="black" />
                <span>LinkedIn</span>
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              className="rounded-full gap-2.5 shadow-md text-black"
              style={{ background: 'var(--gradient-accent)' }}
            >
              <a
                href="mailto:szaniawska.malgorzata@gmail.com"
                aria-label="Send an email to Gosia"
              >
                <Mail className="w-5 h-5" color="black" />
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
