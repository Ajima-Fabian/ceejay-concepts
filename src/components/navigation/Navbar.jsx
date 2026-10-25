import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import Container from "../ui/Container";
import logo from "../../assets/logo2.png"

const navigationLinks = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Projects", href: "#projects" },
  { label: "Process", href: "#process" },
];

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "border-white/10 bg-black/60 shadow-lg backdrop-blur-xl"
          : "border-transparent bg-transparent"
      }`}
    >
      <Container>
        <nav className="flex h-20 items-center justify-between">
          {/* Brand */}
          <a
            href="/"
            onClick={closeMenu}
            className="text-sm font-semibold tracking-[0.18em] text-white"
          >
            <img src={logo} className="w-[320px]"/>
          </a>

          {/* Desktop navigation */}
          <div className="hidden items-center gap-7 md:flex">
            {navigationLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/75 transition hover:text-white"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              className="rounded-full border border-white/40 px-5 py-2.5 text-sm text-white transition hover:bg-white hover:text-black"
            >
              Start a Project
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            aria-label={
              isOpen ? "Close navigation menu" : "Open navigation menu"
            }
            aria-expanded={isOpen}
            onClick={() => setIsOpen((current) => !current)}
            className="rounded-full border border-white/30 p-2 text-white transition hover:bg-white hover:text-black md:hidden"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </Container>

      {/* Mobile navigation */}
      {isOpen && (
        <div className="border-t border-white/10 bg-neutral-950/95 backdrop-blur-xl md:hidden">
          <Container>
            <div className="flex flex-col py-6">
              {navigationLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={closeMenu}
                  className="border-b border-white/10 py-4 text-lg text-white/80 transition hover:text-white"
                >
                  {link.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={closeMenu}
                className="mt-6 inline-flex w-fit rounded-full bg-white px-6 py-3 text-sm font-medium text-black"
              >
                Start a Project
              </a>
            </div>
          </Container>
        </div>
      )}
    </header>
  );
}

export default Navbar;