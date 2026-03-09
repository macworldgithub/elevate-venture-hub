import { Blocks, Lock, HardDrive, AtSign, KeyRound } from "lucide-react";

const protocols = [
  {
    icon: Blocks,
    name: "Sui",
    subtitle: "Smart Contracts & Audit Trails",
    desc: "Programmable access control, RBAC definitions, and immutable audit logging for every data interaction.",
  },
  {
    icon: Lock,
    name: "Seal",
    subtitle: "End-to-End Encryption",
    desc: "Threshold encryption with policy-based decryption. Notes and documents encrypted client-side, plaintext never touches a server.",
  },
  {
    icon: HardDrive,
    name: "Walrus",
    subtitle: "Decentralized Storage",
    desc: "Encrypted attachments, media, and large datasets stored on content-addressed decentralized infrastructure.",
  },
  {
    icon: AtSign,
    name: "SuiNS",
    subtitle: "Identity Resolution",
    desc: "Human-readable names for customers (alice.sui) and organizations. Reverse resolution for elegant profile display.",
  },
  {
    icon: KeyRound,
    name: "ZkLogin",
    subtitle: "Passwordless Auth",
    desc: "OAuth-based authentication mapping Google/Apple accounts to Sui addresses without exposing credentials.",
  },
];

const TechnologySection = () => {
  return (
    <section id="technology" className="section-padding bg-secondary/30">
      <div className="container">
        <p className="font-mono text-sm text-primary mb-2">Our Solution</p>
        <p className="font-mono text-xs text-muted-foreground mb-4">Technology</p>
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 max-w-3xl">
          Five protocols, <br />
          <span className="text-gradient">one cohesive platform</span>
        </h2>
        <p className="text-muted-foreground max-w-2xl mb-14">
          Deep integration across the Sui ecosystem delivers capabilities no centralized CRM can match.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {protocols.map((p) => (
            <div
              key={p.name}
              className="rounded-xl border border-border bg-card p-8 card-shadow hover:border-primary/30 transition-colors group"
            >
              <p.icon className="h-8 w-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-bold font-display text-foreground">{p.name}</h3>
              <p className="text-sm text-primary font-mono mb-3">{p.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
