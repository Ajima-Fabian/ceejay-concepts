import { ArrowUpRight, Mail } from "lucide-react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";
import Container from "../ui/Container";
import { services } from "../../data/services";

const footerNavigation = [
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

function Footer() {
  return (
    <footer className="bg-[var(--cc-dark)] text-[var(--cc-white)]">
      <Container>
        {/* Main footer */}
        <div className="grid gap-14 border-t border-[var(--cc-border)] py-16 sm:py-20 lg:grid-cols-[1.4fr_0.7fr_1fr] lg:gap-16">
          {/* Brand */}
          <div>
            <p className="text-sm font-semibold tracking-[0.2em]">
              CEEJAY
            </p>

            <h2 className="mt-8 max-w-xl text-4xl font-semibold leading-tight tracking-tight sm:text-5xl">
              We don't just design,
              <br />
              <span className="text-white/50">
                we define.
              </span>
            </h2>

            <p className="mt-6 max-w-md text-sm leading-6 text-[var(--cc-muted)]">
              Architecture, engineering, visualisation and construction
              brought together to create spaces with purpose.
            </p>

            <a
              href="#contact"
              className="group mt-8 inline-flex items-center gap-3 rounded-full bg-[var(--cc-white)] px-6 py-3.5 text-sm font-medium text-[var(--cc-dark)] transition hover:bg-[var(--cc-accent)]"
            >
              Start a project

              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--cc-accent)]">
              Explore
            </p>

            <nav className="mt-6 flex flex-col items-start gap-4">
              {footerNavigation.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-[var(--cc-muted)] transition hover:text-[var(--cc-white)]"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Services */}
          <div>
            <p className="text-xs font-medium uppercase tracking-[0.18em] text-[var(--cc-accent)]">
              Capabilities
            </p>

            <div className="mt-6 space-y-3">
              {services.map((service) => (
                <p
                  key={service.number}
                  className="text-sm text-[var(--cc-muted)]"
                >
                  {service.title}
                </p>
              ))}
            </div>
          </div>
        </div>

        {/* Contact strip */}
        <div className="grid border-y border-[var(--cc-border)] sm:grid-cols-2">
          {/* Contact */}
          <a
            href="#contact"
            className="group flex items-center gap-4 border-b border-[var(--cc-border)] py-6 sm:border-b-0 sm:border-r sm:pr-8"
          >
            <Mail
              size={19}
              strokeWidth={1.5}
              className="text-[var(--cc-accent)]"
            />

            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--cc-muted)]">
                Get in touch
              </p>

              <p className="mt-1 text-sm text-[var(--cc-white)]">
                Discuss your project
              </p>
            </div>

            <ArrowUpRight
              size={16}
              className="ml-auto text-[var(--cc-muted)] transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>

          {/* Location + Social */}
          <div className="flex flex-col gap-6 py-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-[var(--cc-muted)]">
                Location
              </p>

              <p className="mt-1 text-sm text-[var(--cc-white)]">
                Enugu, Nigeria
              </p>

              <p className="mt-1 text-xs text-[var(--cc-muted)]">
                Serving clients nationwide
              </p>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              <a
                href="https://wa.me/message/GHNINXCKR2KPB1"
                aria-label="WhatsApp"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--cc-border)] text-[var(--cc-muted)] transition hover:border-[var(--cc-accent)] hover:text-[var(--cc-accent)]"
              >
                <FaWhatsapp size={18} />
              </a>

              <a
                href="https://www.instagram.com/ceejayconcepts?xtok=ajZlcXQyazJiN2J0&utm_source=qr"
                aria-label="Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[var(--cc-border)] text-[var(--cc-muted)] transition hover:border-[var(--cc-accent)] hover:text-[var(--cc-accent)]"
              >
                <FaInstagram size={17} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col gap-3 py-6 text-xs text-[var(--cc-muted)] sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} CEEJAY CONCEPTS. All rights reserved.
          </p>

          <p>
            Architecture · Engineering · Construction
          </p>
        </div>
      </Container>
    </footer>
  );
}

export default Footer;
