import { ArrowRight } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const stats = [
  { value: "5", label: "Sui Protocols" },
  { value: "16-22", label: "Weeks to Ship" },
  { value: "6-8", label: "FTE Team" },
  { value: "$261K", label: "Est. Budget" },
];

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-14">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Decentralized network" className="w-full h-full object-cover opacity-40" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in-up">
        <div className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/50 px-4 py-1.5 mb-8">
          <div className="h-2 w-2 rounded-full bg-primary" />
          <span className="font-mono text-xs text-muted-foreground">Built on Sui Ecosystem</span>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold font-display tracking-tight mb-6">
          <span className="text-foreground">Britannica</span>
          <br />
          <span className="text-gradient">Decentralized CRM</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-10">
          Privacy-preserving customer relationship management for Web3 teams. Own your data. Encrypt by default. Compose without limits.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-20">
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Read the Proposal <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#architecture"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 font-medium text-foreground hover:bg-secondary transition-colors"
          >
            View Architecture
          </a>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-3xl mx-auto">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-mono text-3xl md:text-4xl font-bold text-gradient">{stat.value}</div>
              <div className="text-sm text-muted-foreground mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
