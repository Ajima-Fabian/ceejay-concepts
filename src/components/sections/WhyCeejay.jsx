import {
  Compass,
  Layers3,
  PenTool,
  ShieldCheck,
} from "lucide-react";
import Container from "../ui/Container";

const reasons = [
  {
    number: "01",
    icon: Compass,
    title: "One vision, one direction",
    description:
      "Architecture, engineering and execution are approached as parts of the same project rather than disconnected stages.",
  },
  {
    number: "02",
    icon: Layers3,
    title: "Integrated thinking",
    description:
      "We consider how design decisions affect structure, building systems, materials, cost and eventual construction.",
  },
  {
    number: "03",
    icon: PenTool,
    title: "Designed around you",
    description:
      "Every project begins with understanding the client's needs, priorities, site and intended use.",
  },
  {
    number: "04",
    icon: ShieldCheck,
    title: "Built with purpose",
    description:
      "The goal isn't simply to create something that looks good. It should function well, endure and make practical sense.",
  },
];

function WhyCeejay() {
  return (
    <section className="bg-[var(--cc-bg)] py-24 sm:py-32">
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          {/* Introduction */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--cc-accent)]">
              About CEEJAY
            </p>

            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[var(--cc-white)] sm:text-5xl">
              Design is only the beginning.
            </h2>

            <p className="mt-6 max-w-md text-base leading-7 text-[var(--cc-muted)]">
              A successful project requires more than a drawing. It requires
              people who understand how ideas move from paper into the real
              world.
            </p>
          </div>

          {/* Reasons */}
          <div className="grid border-t border-[var(--cc-border)] sm:grid-cols-2">
            {reasons.map((reason) => {
              const Icon = reason.icon;

              return (
                <article
                  key={reason.number}
                  className="border-b border-[var(--cc-border)] py-8 sm:px-6 sm:py-10"
                >
                  <div className="flex items-start justify-between">
                    <span className="text-xs text-[var(--cc-muted)]">
                      {reason.number}
                    </span>

                    <Icon
                      size={21}
                      strokeWidth={1.5}
                      className="text-[var(--cc-accent)]"
                    />
                  </div>

                  <h3 className="mt-10 text-xl font-medium text-[var(--cc-white)]">
                    {reason.title}
                  </h3>

                  <p className="mt-3 text-sm leading-6 text-[var(--cc-muted)]">
                    {reason.description}
                  </p>
                </article>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}

export default WhyCeejay;