import { ArrowRight, Mail } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="container max-w-3xl mx-auto">
        <div className="rounded-2xl border border-primary bg-card/50 p-12 text-center card-shadow">
          <p className="font-mono text-xs text-primary mb-6 uppercase tracking-widest">
            Get Involved
          </p>
          <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
            Let's build the future of <br />
            <span className="text-gradient">Web3 community management</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-2xl mx-auto">
            We're seeking grant funding to bring Britannica to life. This is a
            flagship project for the Sui ecosystem — let's make it happen.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Mail className="h-4 w-4" />
              Contact the Team
            </a>
            <a
              href="#"
              className="inline-flex items-center gap-2 rounded-lg border border-primary/30 bg-transparent px-6 py-3 font-medium text-foreground hover:border-primary/50 transition-colors"
            >
              Full Proposal <ArrowRight className="h-4 w-4" />
            </a>
          </div>
          <p className="font-mono text-xs text-muted-foreground">
            Levuka Venture Labs FZCO • February 2026
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
