import { ExternalLink } from "lucide-react";

const projects = [
  {
    name: "StatsCopilot",
    description: "AI-powered statistics assistant for data analysis and insights.",
    link: "https://github.com/bernieweb3/sota-statworks",
    tag: "AI Agent",
  },
  {
    name: "BanhMiCast",
    description: "A podcast/broadcast platform bringing Vietnamese tech stories to the world.",
    link: "https://github.com/bernieweb3/banhmicast",
    tag: "Consumer",
  },
  {
    name: "Thực Lực Số",
    description: "Digital competency platform empowering Vietnamese users in the digital age.",
    link: "https://docs.google.com/document/d/1ZZdw-RAQGu_UGvOBfSJk8RJhgWiz26r1/edit?usp=sharing&ouid=110342906505783501061&rtpof=true&sd=true",
    tag: "Web2",
  },
  {
    name: "ALT30",
    description: "An innovative project pushing boundaries in blockchain and AI.",
    link: "https://drive.google.com/file/d/14i-0-rx8TeVYl5n9m6jns6ttRpsXUATE/view?usp=sharing",
    tag: "Web3",
  },
];

const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 bg-muted/50 relative scanline">
      <div className="container mx-auto px-4">
        <h2 className="pixel-section-title text-center mb-16">
          <span className="gradient-lightning">// Projects</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="pixel-card group hover:translate-x-1 hover:-translate-y-1 transition-transform duration-150"
              style={{ animationDelay: `${i * 100}ms` }}
            >
              <div className="flex items-start justify-between mb-3">
                <h3 className="pixel-text text-[11px] text-primary group-hover:text-secondary transition-colors">
                  {p.name}
                </h3>
                <ExternalLink size={16} className="text-muted-foreground group-hover:text-secondary transition-colors" />
              </div>
              <span className="pixel-text text-[8px] px-2 py-1 bg-primary text-primary-foreground inline-block mb-3">
                {p.tag}
              </span>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {p.description}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
