import { ArrowUpRight, GraduationCap, MapPin, Sparkles } from "lucide-react";
import Container from "../ui/Container";
import ceejay from "../../assets/ceejay.jpg"

function About() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--cc-surface)] py-24 sm:py-32"
    >
      {/* Subtle architectural grid */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.035]"
        style={{
          backgroundImage:
            "linear-gradient(var(--cc-white) 1px, transparent 1px), linear-gradient(90deg, var(--cc-white) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <Container className="relative">
        {/* Section heading */}
        <div className="mb-16 flex flex-col gap-6 border-b border-[var(--cc-border)] pb-10 sm:mb-20 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--cc-accent)]">
              About CEEJAY
            </p>

            <h2 className="max-w-3xl text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--cc-white)] sm:text-5xl lg:text-6xl">
              The person behind the vision.
            </h2>
          </div>

          <p className="max-w-sm text-sm leading-6 text-[var(--cc-muted)] sm:text-base">
            Professional expertise, creative thinking and a genuine passion
            for creating spaces that stand out.
          </p>
        </div>

        {/* Main profile */}
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:gap-20">
          {/* Portrait */}
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden bg-[var(--cc-dark)]">
              <img
                src={ceejay}
                alt="CEEJAY CONCEPTS professional portrait placeholder"
                className="h-full w-full object-cover transition duration-700 hover:scale-105"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

              {/* Image label */}
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between">
                <div>
                  <p className="text-xs uppercase tracking-[0.18em] text-white/60">
                    Principal
                  </p>
                  <p className="mt-1 text-lg font-medium text-white">
                    Ajima Emmanuel Chijioke
                  </p>
                </div>

                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-white/30 bg-black/20 text-white backdrop-blur-md">
                  <Sparkles size={17} strokeWidth={1.5} />
                </div>
              </div>
            </div>

            {/* Decorative corner */}
            <div className="absolute -bottom-4 -right-4 hidden h-24 w-24 border-b border-r border-[var(--cc-accent)] sm:block" />
          </div>

          {/* Profile content */}
          <div>
            <div className="flex items-center gap-3 text-xs uppercase tracking-[0.18em] text-[var(--cc-muted)]">
              <span className="h-px w-8 bg-[var(--cc-accent)]" />
              Founder · Designer · Professional
            </div>

            <h3 className="mt-6 max-w-2xl text-3xl font-semibold leading-tight tracking-tight text-[var(--cc-white)] sm:text-4xl">
              Turning ideas into design with purpose.
            </h3>

            <div className="mt-8 space-y-6 text-base leading-7 text-[var(--cc-muted)]">
              <p>
                CEEJAY CONCEPTS is driven by a strong belief that good design
                should do more than look impressive. It should respond to the
                people, purpose and environment it is created for.
              </p>

              <p>
                At the heart of the practice is{" "}
                <span className="text-[var(--cc-white)]">
                  Ajima Emmanuel Chijioke
                </span>
                , a professionally trained built-environment practitioner
                whose passion for design drives the work of CEEJAY CONCEPTS.
              </p>

              <p>
                With a commitment to excellence and attention to detail, he
                approaches every project with the goal of bringing out the
                strongest possible expression of the client's vision —
                combining creativity, technical thinking and practical
                execution.
              </p>
            </div>

            {/* Credentials */}
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              <div className="border border-[var(--cc-border)] bg-[var(--cc-dark)] p-5 transition duration-300 hover:border-[var(--cc-accent)]">
                <GraduationCap
                  size={21}
                  strokeWidth={1.5}
                  className="text-[var(--cc-accent)]"
                />

                <p className="mt-5 text-xs uppercase tracking-[0.16em] text-[var(--cc-muted)]">
                  Education
                </p>

                <p className="mt-2 text-base font-medium text-[var(--cc-white)]">
                  Bachelor of Science
                </p>

                <p className="mt-1 text-sm leading-6 text-[var(--cc-muted)]">
                  Enugu State University of Science and Technology (ESUT)
                </p>

                <p className="mt-2 text-xs text-[var(--cc-muted)]">
                  2023
                </p>
              </div>

              <div className="border border-[var(--cc-border)] bg-[var(--cc-dark)] p-5 transition duration-300 hover:border-[var(--cc-accent)]">
                <MapPin
                  size={21}
                  strokeWidth={1.5}
                  className="text-[var(--cc-accent)]"
                />

                <p className="mt-5 text-xs uppercase tracking-[0.16em] text-[var(--cc-muted)]">
                  Practice
                </p>

                <p className="mt-2 text-base font-medium text-[var(--cc-white)]">
                  Enugu, Nigeria
                </p>

                <p className="mt-1 text-sm leading-6 text-[var(--cc-muted)]">
                  Projects undertaken nationwide, with a focus on thoughtful
                  design and practical execution.
                </p>
              </div>
            </div>

            <a
              href="#contact"
              className="group mt-10 inline-flex items-center gap-3 border-b border-[var(--cc-muted)] pb-2 text-sm font-medium text-[var(--cc-white)] transition hover:border-[var(--cc-accent)]"
            >
              Start a conversation
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
              />
            </a>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default About;
