import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="contact" className="section-padding bg-secondary/30">
      <div className="container text-center max-w-3xl mx-auto">
        <p className="font-mono text-sm text-primary mb-4">Get Involved</p>
        <h2 className="text-3xl md:text-5xl font-bold font-display mb-6">
          Let's build the future of <br />
          <span className="text-gradient">Web3 community management</span>
        </h2>
        <p className="text-muted-foreground mb-10">
          We're seeking grant funding to bring Britannica to life. This is a flagship project for the Sui ecosystem — let's make it happen.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground hover:bg-primary/90 transition-colors"
          >
            Contact the Team <ArrowRight className="h-4 w-4" />
          </a>
          <a
            href="#"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-secondary/50 px-6 py-3 font-medium text-foreground hover:bg-secondary transition-colors"
          >
            Full Proposal
          </a>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
