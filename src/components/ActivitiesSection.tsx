import { Trophy, Calendar, ArrowRight } from "lucide-react";

const pastActivities = [
  { name: "LotusHack Hackathon 2026", result: "Participated" },
  { name: "APEC Innovation (2nd season)", result: "Semi-finalist" },
];

const upcomingActivities = [
  "Sui Overflow 2026",
  "Cardano SEA Hackathon 2026",
  "TLS-Innovation 2026",
  "Bach Khoa Innovation 2026",
  "Qwen AI Build Day 2026",
];

const ActivitiesSection = () => {
  return (
    <section id="activities" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="pixel-section-title text-center mb-16">
          <span className="gradient-lightning">// Activities</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="pixel-card">
            <div className="flex items-center gap-2 mb-6">
              <Trophy size={20} className="text-accent" />
              <h3 className="pixel-text text-[11px] text-primary">Past & Current</h3>
            </div>
            <div className="space-y-4">
              {pastActivities.map((a) => (
                <div key={a.name} className="flex items-start gap-3">
                  <ArrowRight size={14} className="text-secondary mt-1 shrink-0" />
                  <div>
                    <p className="font-body text-sm font-medium">{a.name}</p>
                    <p className="pixel-text text-[8px] text-muted-foreground">{a.result}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="pixel-card">
            <div className="flex items-center gap-2 mb-6">
              <Calendar size={20} className="text-secondary" />
              <h3 className="pixel-text text-[11px] text-primary">Upcoming</h3>
            </div>
            <div className="space-y-4">
              {upcomingActivities.map((name) => (
                <div key={name} className="flex items-center gap-3">
                  <span className="pixel-text text-[8px] text-accent">▶</span>
                  <p className="font-body text-sm">{name}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
