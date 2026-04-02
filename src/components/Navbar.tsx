import logoNoBg from "@/assets/logo-nobg.png";

const Navbar = () => {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-sm border-b-[3px] border-foreground">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <button onClick={() => scrollTo("hero")} className="flex items-center gap-3">
          <img src={logoNoBg} alt="SOTA Works" className="h-10" style={{ imageRendering: "pixelated" }} />
        </button>
        <div className="hidden md:flex items-center gap-6">
          {[
            ["About", "about"],
            ["Projects", "projects"],
            ["Activities", "activities"],
            ["Team", "team"],
            ["Contact", "contact"],
          ].map(([label, id]) => (
            <button
              key={id}
              onClick={() => scrollTo(id)}
              className="pixel-text text-[10px] uppercase tracking-wider text-muted-foreground hover:text-primary transition-colors"
            >
              {label}
            </button>
          ))}
        </div>
        <button
          onClick={() => scrollTo("contact")}
          className="pixel-btn-primary text-[9px] py-2 px-4"
        >
          Contact Us
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
