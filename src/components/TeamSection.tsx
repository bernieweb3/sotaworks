import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import bernieAvatar from "@/assets/bernie-avatar.png";
import anhPhoto from "@/assets/anh-photo.png";
import phatPhoto from "@/assets/phat-photo.png";
import tranPhoto from "@/assets/tran-photo.png";
import vuPhoto from "@/assets/vu-photo.png";

interface TeamMember {
  name: string;
  role: string;
  photo: string;
  tier: "core" | "key";
  details?: string[];
}

const coreTeam: TeamMember[] = [
  {
    name: "Bernie Nguyen",
    role: "Founder / CTO / CEO",
    photo: bernieAvatar,
    tier: "core",
    details: [
      "Software Engineer Intern at CommandOSS (Backend)",
      "Former President of UTC2 Technical Innovation Club (2023–2025)",
      "Built DevPros squad — peak 29 active members",
      "SE for community initiative \"Nắng sau Bão\"",
      "--- Blockchain Achievements ---",
      "Top 8 — Build on Algorand Track, Algorand Vietnam Hackathon 2024",
      "Top 10 Finalist — Web3 & AI Ideathon 2025",
      "Top 8 Finalist — SEA Ideathon 2025",
      "Runner-up — TLS-Innovation 2025",
      "2nd Prize — Sui Bootcamp HCMC Hackathon",
      "--- Academic Achievements ---",
      "1st Prize — Rung Chuông Vàng UTC2 2024",
      "2nd Prize — Rung Chuông Vàng UTC2 2023",
      "2nd Prize — Robot Sumo UTC2 2025",
      "2nd Prize — Student Science Research UTC2 2023–2024",
      "3x 3rd Prize — Challenge to IoT Network (CTIT) 2022–2024",
      "3rd Prize — \"Mở Cửa Kiến Thức\" 2021 Phase 1",
      "4th Prize — \"Mở Cửa Kiến Thức\" Super Finals 2021",
      "4th Prize — Robot Sumo VAA 2024",
      "Top 18 — UEL \"Khởi nghiệp Kinh doanh\" Season 9",
      "Top 30 — StartupZone 2025",
      "Organized 3 robot competitions: Robot Dò Line 2022, Robot Sumo 2023, Robot RTC 2024",
    ],
  },
  {
    name: "Anh Duong Ngoc",
    role: "Co-founder / CMO / CFO",
    photo: anhPhoto,
    tier: "core",
  },
  {
    name: "Phat Huynh Tan",
    role: "Co-founder / CIO",
    photo: phatPhoto,
    tier: "core",
  },
];

const keyMembers: TeamMember[] = [
  {
    name: "Tran Nguyen Hoang Bao",
    role: "COO",
    photo: tranPhoto,
    tier: "key",
  },
  {
    name: "Vu Pham Tran Anh",
    role: "CCO",
    photo: vuPhoto,
    tier: "key",
  },
];

const TeamCard = ({ member }: { member: TeamMember }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="pixel-card text-center">
      <div className="w-28 h-28 mx-auto mb-4 border-[3px] border-foreground overflow-hidden">
        <img
          src={member.photo}
          alt={member.name}
          className="w-full h-full object-cover"
        />
      </div>
      <h3 className="pixel-text text-[10px] text-primary mb-1">{member.name}</h3>
      <p className="pixel-text text-[8px] text-secondary mb-2">{member.role}</p>

      {member.details && (
        <>
          <button
            onClick={() => setExpanded(!expanded)}
            className="inline-flex items-center gap-1 pixel-text text-[8px] text-muted-foreground hover:text-primary transition-colors mt-2"
          >
            {expanded ? "Hide" : "View"} Details
            {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
          </button>
          {expanded && (
            <div className="mt-4 text-left space-y-1">
              {member.details.map((d, i) =>
                d.startsWith("---") ? (
                  <p key={i} className="pixel-text text-[7px] text-accent mt-3 mb-1 uppercase">
                    {d.replace(/---/g, "").trim()}
                  </p>
                ) : (
                  <p key={i} className="font-body text-[11px] text-muted-foreground leading-relaxed">
                    • {d}
                  </p>
                )
              )}
            </div>
          )}
        </>
      )}
    </div>
  );
};

const TeamSection = () => {
  return (
    <section id="team" className="py-24 bg-muted/50 scanline">
      <div className="container mx-auto px-4">
        <h2 className="pixel-section-title text-center mb-16">
          <span className="gradient-lightning">// The Team</span>
        </h2>

        <div className="mb-8">
          <h3 className="pixel-text text-[10px] text-center text-muted-foreground mb-8 uppercase">Core Team</h3>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {coreTeam.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>

        <div className="mt-16">
          <h3 className="pixel-text text-[10px] text-center text-muted-foreground mb-8 uppercase">Key Members</h3>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto">
            {keyMembers.map((m) => (
              <TeamCard key={m.name} member={m} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
