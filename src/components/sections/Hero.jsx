import {
  ArrowDownRight,
  ArrowRight,
} from "lucide-react";
import Container from "../ui/Container";
import hero from "../../assets/hero.jpg"

function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden bg-neutral-950 text-white">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{backgroundImage: `url(${hero})`}}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <Container className="relative z-10 flex min-h-screen items-end pb-16 pt-32 sm:pb-20 lg:pb-24">
        <div className="w-full">
          {/* Eyebrow */}
          <div className="mb-8 flex items-center gap-3 text-sm uppercase tracking-[0.2em] text-white/70">
            <span className="h-px w-10 bg-white/50" />

            Architecture · Interior Design · Construction
          </div>

          {/* Heading */}
          <div className="max-w-5xl">
            <h1 className="text-5xl font-semibold leading-[0.95] tracking-[-0.04em] sm:text-6xl lg:text-8xl">
              We don't just
              <br />
              <span className="text-white/60">design,</span> we define.
            </h1>
          </div>

          {/* Description + CTAs */}
          <div className="mt-10 flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-base leading-7 text-white/70 sm:text-lg">
              CEEJAY CONCEPTS delivers architectural design, engineering,
interior design, construction and 3D visualisation services
for projects across Nigeria.
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              {/* Primary CTA */}
              <a
                href="#projects"
                className="group inline-flex w-fit items-center justify-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-medium text-black transition hover:bg-white/90"
              >
                Explore our work

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>

              {/* Secondary CTA */}
              <a
                href="#contact"
                className="group inline-flex w-fit items-center justify-center gap-3 rounded-full border border-white/40 bg-white/5 px-6 py-3.5 text-sm font-medium text-white backdrop-blur-sm transition hover:border-white hover:bg-white hover:text-black"
              >
                Start a project

                <ArrowRight
                  size={18}
                  className="transition-transform group-hover:translate-x-1"
                />
              </a>
            </div>
          </div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <a
        href="#services"
        aria-label="Scroll to services"
        className="absolute bottom-8 right-6 hidden items-center gap-3 text-xs uppercase tracking-[0.2em] text-white/60 lg:flex"
      >
        Scroll
        <ArrowDownRight size={16} />
      </a>
    </section>
  );
}

export default Hero;