import { Target, Zap, Shield } from "lucide-react";

const values = [
  "Unity", "Solidarity", "Understanding", "Honesty",
  "Humility", "Autonomy", "Proactivity", "Transparency",
  "Breakthrough", "Responsibility", "Ethics & Legal Compliance",
];

const AboutSection = () => {
  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="pixel-section-title text-center mb-16">
          <span className="gradient-lightning">// About Us</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <div className="pixel-card text-center">
            <Zap className="mx-auto mb-4 text-accent" size={32} />
            <h3 className="pixel-text text-[11px] mb-3 text-primary">Who We Are</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              A builders team specializing in AI Agents and AI applications. We also build consumer-facing
              projects across both Web2 and Web3 ecosystems.
            </p>
          </div>

          <div className="pixel-card text-center">
            <Target className="mx-auto mb-4 text-secondary" size={32} />
            <h3 className="pixel-text text-[11px] mb-3 text-primary">Our Mission</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Continuously strive to push our work toward the best possible state —
              the State of the Art.
            </p>
          </div>

          <div className="pixel-card text-center">
            <Shield className="mx-auto mb-4 text-primary" size={32} />
            <h3 className="pixel-text text-[11px] mb-3 text-primary">What We Do</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">
              Software technology — AI Agents, consumer projects in Web2 & Web3.
              We also dive into hackathons to experiment and gather feedback on new ideas.
            </p>
          </div>
        </div>

        <div className="pixel-card max-w-3xl mx-auto">
          <h3 className="pixel-text text-[11px] mb-4 text-center text-primary">Core Values</h3>
          <div className="flex flex-wrap gap-2 justify-center">
            {values.map((v) => (
              <span
                key={v}
                className="pixel-text text-[8px] px-3 py-2 bg-muted border-2 border-foreground text-foreground"
              >
                {v}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
