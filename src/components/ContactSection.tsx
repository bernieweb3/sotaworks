import { Mail, Phone, MessageCircle, Github } from "lucide-react";
import logoNoBg from "@/assets/logo-nobg.png";

const contacts = [
  {
    icon: Mail,
    label: "Email",
    value: "sotaworks.vn@gmail.com",
    href: "mailto:sotaworks.vn@gmail.com",
  },
  {
    icon: Phone,
    label: "Phone",
    value: "0877 745 927 (Mr. Bernie)",
    href: "tel:+84877745927",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "+84 877 745 927",
    href: "https://wa.me/84877745927",
  },
  {
    icon: MessageCircle,
    label: "Telegram",
    value: "@sotaworksvn",
    href: "https://t.me/sotaworks",
  },
  {
    icon: Github,
    label: "GitHub",
    value: "sotaworksvn",
    href: "https://github.com/sotaworksvn",
  },
];

const ContactSection = () => {
  return (
    <section id="contact" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="pixel-section-title text-center mb-16">
          <span className="gradient-lightning">// Contact</span>
        </h2>

        <div className="pixel-card max-w-2xl mx-auto">
          <p className="font-body text-sm text-muted-foreground text-center mb-8 leading-relaxed">
            Interested in collaborating? Building something together? 
            Reach out to us through any channel below.
          </p>

          <div className="space-y-4">
            {contacts.map((c) => (
              <a
                key={c.label}
                href={c.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-3 border-2 border-foreground hover:bg-muted transition-colors group"
              >
                <c.icon size={18} className="text-primary group-hover:text-secondary transition-colors shrink-0" />
                <div>
                  <p className="pixel-text text-[8px] text-muted-foreground">{c.label}</p>
                  <p className="font-body text-sm">{c.value}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="mt-24 border-t-[3px] border-foreground pt-8 pb-6">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
          <img src={logoNoBg} alt="SOTA Works" className="h-8" style={{ imageRendering: "pixelated" }} />
          <p className="pixel-text text-[8px] text-muted-foreground">
            © 2026 SOTA Works. Always reaching for the State of the Art.
          </p>
        </div>
      </footer>
    </section>
  );
};

export default ContactSection;
