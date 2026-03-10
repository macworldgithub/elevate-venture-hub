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
        <div className="text-center mb-12">
          <p className="font-mono text-xs text-primary mb-6 uppercase tracking-widest">
            Architecture
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 max-w-3xl mx-auto">
            Hybrid architecture, <br />
            <span className="text-gradient">trustless by design</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Trust-critical operations occur onchain while performance-sensitive
            operations use traditional infrastructure — the best of both worlds.
          </p>
        </div>

        {/* Layers - Single Column */}
        <div className="max-w-3xl mx-auto space-y-4 mb-12">
          {layers.map((layer, index) => (
            <div
              key={layer.title}
              className={`rounded-xl border p-6 card-shadow transition-colors ${
                index === 2
                  ? "border-primary bg-card"
                  : "border-border bg-card hover:border-primary/30"
              }`}
            >
              <h3 className="text-sm font-bold font-mono text-foreground mb-3">
                {layer.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {layer.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-md border border-primary/30 bg-secondary px-3 py-1 font-mono text-xs text-primary"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Data Flow - Horizontal */}
        <div className="max-w-3xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6">
            {flowItems.map((item) => (
              <div
                key={item.label}
                className="rounded-xl border border-border bg-card p-6 text-center card-shadow"
              >
                <p className="font-mono text-sm text-primary mb-2">
                  {item.label}
                </p>
                <p className="text-muted-foreground text-sm">{item.value}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureSection;
