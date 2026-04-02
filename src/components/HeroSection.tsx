import logoBg from "@/assets/logo-bg.png";

const HeroSection = () => {
  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center scanline overflow-hidden">
      <div className="absolute inset-0" style={{ background: "var(--gradient-hero)" }} />
      
      {/* Pixel grid decoration */}
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: `repeating-linear-gradient(0deg, hsl(var(--foreground)) 0px, transparent 1px, transparent 32px),
                          repeating-linear-gradient(90deg, hsl(var(--foreground)) 0px, transparent 1px, transparent 32px)`,
      }} />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="animate-float mb-8">
          <img
            src={logoBg}
            alt="SOTA Works Logo"
            className="mx-auto h-32 md:h-44"
            style={{ imageRendering: "pixelated" }}
          />
        </div>

        <p className="font-body text-lg md:text-xl max-w-2xl mx-auto text-muted-foreground mb-4 leading-relaxed">
          We work to reach the <span className="gradient-lightning font-semibold">state of the art</span> without
          the "hour" concept.
        </p>

        <p className="font-body text-sm text-muted-foreground max-w-xl mx-auto mb-10">
          AI Agent Builders · Web2 & Web3 Consumer Apps · Hackathon Warriors
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            className="pixel-btn-primary text-[10px]"
          >
            ▶ View Projects
          </button>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="pixel-btn-secondary text-[10px]"
          >
            ✉ Get In Touch
          </button>
        </div>

        <div className="mt-16 pixel-text text-[10px] text-muted-foreground">
          <span className="animate-blink">▼</span> Scroll to explore
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
