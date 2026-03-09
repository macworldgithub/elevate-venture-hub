import { ArrowRight, Shield } from "lucide-react";

const navLinks = [
  { label: "Problem", href: "#problem" },
  { label: "Technology", href: "#technology" },
  { label: "Architecture", href: "#architecture" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Impact", href: "#impact" },
];

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container flex h-14 items-center justify-between">
        <div className="flex items-center gap-2">
          {/* brand icon: shield from lucide-react */}
          <Shield className="h-6 w-6 text-primary" />
          <span className="font-display font-bold text-foreground">
            Britannica
          </span>
          <span className="font-mono text-xs text-muted-foreground">
            / Decentralized CRM
          </span>
        </div>
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <a
          href="#contact"
          className="font-mono text-sm text-primary hover:text-primary/80 transition-colors flex items-center gap-1"
        >
          Get in Touch <ArrowRight className="h-3 w-3" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
