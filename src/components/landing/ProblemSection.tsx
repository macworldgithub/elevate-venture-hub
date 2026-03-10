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
        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Column */}
          <div>
            <p className="font-mono text-sm text-primary mb-4">⚠ THE PROBLEM</p>
            <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
              Web3 teams deserve <br />
              <span className="text-gradient">Web3-native tools</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl">
              Organizations building the decentralized future still rely on
              centralized, fragmented tools to manage their most valuable asset
              — community relationships.
            </p>
          </div>

          {/* Right Column */}
          <div className="space-y-6">
            {problems.map((p, index) => (
              <div
                key={p.num}
                className={`rounded-xl border p-6 transition-colors ${
                  index === 2
                    ? "border-primary bg-card/50 card-shadow"
                    : "border-border bg-card hover:border-primary/30"
                }`}
              >
                <span className="font-mono text-primary text-sm">{p.num}</span>
                <p.icon className="h-8 w-8 text-primary mt-3 mb-3" />
                <h3 className="text-lg font-bold font-display mb-2 text-foreground">
                  {p.title}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
