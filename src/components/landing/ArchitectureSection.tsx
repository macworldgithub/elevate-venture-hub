const layers = [
  {
    title: "Identity Layer",
    items: ["ZkLogin", "Passkey", "SuiNS"],
  },
  {
    title: "Application Layer",
    items: ["React Frontend", "API Server", "PostgreSQL"],
  },
  {
    title: "Onchain Layer (Sui)",
    items: ["Contact Records", "RBAC", "Audit Trails"],
  },
  {
    title: "Encryption (Seal)",
    items: ["Policy-Based", "Threshold Decryption"],
  },
  {
    title: "Storage (Walrus)",
    items: ["Encrypted Blobs", "Content-Addressed"],
  },
];

const flowItems = [
  { label: "Encryption", value: "Client-side via Seal SDK" },
  { label: "Storage", value: "Encrypted blobs on Walrus" },
  { label: "Access", value: "Policy verified onchain" },
];

const ArchitectureSection = () => {
  return (
    <section id="architecture" className="section-padding">
      <div className="container">
        <p className="font-mono text-sm text-primary mb-4">Architecture</p>
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 max-w-3xl">
          Hybrid architecture, <br />
          <span className="text-gradient">trustless by design</span>
        </h2>
        <p className="text-muted-foreground max-w-3xl mb-14">
          Trust-critical operations occur onchain while performance-sensitive operations use traditional infrastructure — the best of both worlds.
        </p>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Layers */}
          <div className="space-y-4">
            {layers.map((layer) => (
              <div
                key={layer.title}
                className="rounded-xl border border-border bg-card p-6 card-shadow"
              >
                <h3 className="text-sm font-bold font-display text-foreground mb-3">{layer.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {layer.items.map((item) => (
                    <span
                      key={item}
                      className="rounded-md border border-border bg-secondary px-3 py-1 font-mono text-xs text-muted-foreground"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Flow */}
          <div className="flex flex-col justify-center">
            <div className="rounded-xl border border-primary/20 bg-card p-8 glow-cyan">
              <h3 className="font-mono text-sm text-primary mb-6">Data Flow</h3>
              <div className="space-y-6">
                {flowItems.map((item, i) => (
                  <div key={item.label} className="flex items-start gap-4">
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-primary bg-primary/10 font-mono text-xs text-primary">
                      {i + 1}
                    </div>
                    <div>
                      <p className="font-bold text-foreground text-sm">{item.label}</p>
                      <p className="text-muted-foreground text-sm">{item.value}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
