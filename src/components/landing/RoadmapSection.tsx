const phases = [
  {
    num: 1,
    duration: "3-4 weeks",
    title: "Core Infrastructure & Identity",
    items: [
      "Move smart contracts for RBAC",
      "ZkLogin & Passkey auth",
      "SuiNS integration",
      "Audit logging",
    ],
  },
  {
    num: 2,
    duration: "3 weeks",
    title: "Unified Customer Profiles",
    items: [
      "Profile aggregation engine",
      "Onchain activity enrichment",
      "Deduplication & merge",
      "Search & segmentation",
    ],
  },
  {
    num: 3,
    duration: "3-4 weeks",
    title: "Encrypted Notes & Documents",
    items: [
      "Seal encryption integration",
      "Walrus storage flows",
      "Policy-based decryption",
      "Secure sharing URLs",
    ],
  },
  {
    num: 4,
    duration: "2-3 weeks",
    title: "Engagement & Analytics",
    items: [
      "Campaign tracking",
      "Onchain action correlation",
      "Engagement scoring",
      "Analytics dashboard",
    ],
  },
  {
    num: 5,
    duration: "2 weeks",
    title: "Messaging & Notifications",
    items: [
      "Encrypted messaging",
      "Telegram & Discord bots",
      "Templates & scheduling",
      "Delivery tracking",
    ],
  },
  {
    num: 6,
    duration: "2-3 weeks",
    title: "Composability & Integrations",
    items: [
      "API/SDK development",
      "Airdrop targeting",
      "Webhook support",
      "Partner integrations",
    ],
  },
];

const RoadmapSection = () => {
  return (
    <section id="roadmap" className="section-padding bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <p className="font-mono text-xs text-primary mb-6 uppercase tracking-widest">
            Roadmap
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6 max-w-3xl mx-auto">
            Phased delivery, <br />
            <span className="text-gradient">trustless by design</span>
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto">
            Usable functionality ships early. Each phase builds on the last,
            delivering incremental value while maintaining architectural
            integrity.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {phases.map((phase) => (
            <div
              key={phase.num}
              className="rounded-xl border border-border bg-card p-6 card-shadow hover:border-primary/30 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <span className="font-mono text-xs text-primary">
                  Phase {phase.num}
                </span>
                <span className="font-mono text-xs text-muted-foreground">
                  {phase.duration}
                </span>
              </div>
              <h3 className="text-lg font-bold font-display text-foreground mb-4">
                {phase.title}
              </h3>
              <ul className="space-y-2">
                {phase.items.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2 text-sm text-muted-foreground"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RoadmapSection;
