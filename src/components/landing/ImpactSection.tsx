import { Shield, Puzzle, Star, Users } from "lucide-react";

const impacts = [
  {
    icon: Shield,
    title: "Data Sovereignty",
    desc: "Teams own their customer data onchain. No vendor lock-in. No third-party access without explicit policy approval.",
  },
  {
    icon: Puzzle,
    title: "Ecosystem Composability",
    desc: "CRM data integrates with airdrops, event management, and analytics tools via policy-enforced APIs — a new primitive for Web3.",
  },
  {
    icon: Star,
    title: "Sui Ecosystem Flagship",
    desc: "Demonstrates the power of combining Sui, Seal, Walrus, SuiNS, and ZkLogin into a cohesive, real-world application.",
  },
  {
    icon: Users,
    title: "Community Standard",
    desc: "Open protocol for community management sets a standard that other Web3 teams can adopt, extend, and build upon.",
  },
];

const ImpactSection = () => {
  return (
    <section id="impact" className="section-padding">
      <div className="container">
        <div className="text-center mb-12">
          <p className="font-mono text-xs text-primary mb-6 uppercase tracking-widest">
            Impact
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 max-w-3xl mx-auto">
            Why this <br />
            <span className="text-gradient">matters</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {impacts.map((item) => (
            <div
              key={item.title}
              className="rounded-xl border border-border bg-card p-8 card-shadow hover:border-primary/30 transition-colors"
            >
              <item.icon className="h-8 w-8 text-primary mb-4" />
              <h3 className="text-lg font-bold font-display text-foreground mb-3">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;
