import { Database, ShieldOff, Unplug } from "lucide-react";

const problems = [
  {
    num: "01",
    icon: Database,
    title: "Data Silos",
    desc: "Web3 teams scatter customer data across spreadsheets, Discord bots, and centralized CRMs — losing context and sovereignty.",
  },
  {
    num: "02",
    icon: ShieldOff,
    title: "Zero Privacy",
    desc: "Traditional CRMs store all notes and attachments in plaintext on third-party servers. One breach exposes everything.",
  },
  {
    num: "03",
    icon: Unplug,
    title: "No Composability",
    desc: "Current tools don't understand wallets, onchain activity, or token holdings. Teams manually correlate Web2 and Web3 data.",
  },
];

const ProblemSection = () => {
  return (
    <section id="problem" className="section-padding">
      <div className="container">
        <p className="font-mono text-sm text-primary mb-4">The Problem</p>
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-16 max-w-3xl">
          Web3 teams deserve <br />
          <span className="text-gradient">Web3-native tools</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl mb-12 -mt-10">
          Organizations building the decentralized future still rely on centralized, fragmented tools to manage their most valuable asset — community relationships.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {problems.map((p) => (
            <div
              key={p.num}
              className="rounded-xl border border-border bg-card p-8 card-shadow hover:border-primary/30 transition-colors"
            >
              <span className="font-mono text-primary text-sm">{p.num}</span>
              <p.icon className="h-8 w-8 text-primary mt-4 mb-4" />
              <h3 className="text-xl font-bold font-display mb-3 text-foreground">{p.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
