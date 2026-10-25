import Container from "../ui/Container";
import { processSteps } from "../../data/process";

function Process() {
  return (
    <section
      id="process"
      className="bg-[var(--cc-dark)] py-24 sm:py-32"
    >
      <Container>
        {/* Section Header */}
        <div className="grid gap-8 border-b border-[var(--cc-border)] pb-12 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--cc-accent)]">
              Our process
            </p>

            <h2 className="max-w-xl text-4xl font-semibold leading-tight tracking-tight text-[var(--cc-white)] sm:text-5xl">
              From first conversation to final handover.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-xl text-base leading-7 text-[var(--cc-muted)] sm:text-lg">
              Every project is different, but the principle remains the same:
              understand the problem, develop the right solution and execute
              it with purpose.
            </p>
          </div>
        </div>

        {/* Process Steps */}
        <div className="mt-14 grid border-t border-[var(--cc-border)] sm:grid-cols-2 lg:grid-cols-3">
          {processSteps.map((step) => {
            const Icon = step.icon;

            return (
              <article
                key={step.number}
                className="group border-b border-[var(--cc-border)] p-6 sm:p-8 lg:p-10"
              >
                <div className="flex items-start justify-between">
                  <span className="text-xs font-medium text-[var(--cc-muted)]">
                    {step.number}
                  </span>

                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-[var(--cc-muted)] transition duration-300 group-hover:-translate-y-1 group-hover:text-[var(--cc-accent)]"
                  />
                </div>

                <div className="mt-16">
                  <h3 className="text-xl font-medium text-[var(--cc-white)] sm:text-2xl">
                    {step.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6 text-[var(--cc-muted)] sm:text-base">
                    {step.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>

        {/* Closing Statement */}
        <div className="mt-14 flex flex-col gap-6 border border-[var(--cc-border)] bg-[var(--cc-surface)] p-6 sm:p-8 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.18em] text-[var(--cc-accent)]">
              One project. One direction.
            </p>

            <p className="mt-3 max-w-2xl text-lg leading-7 text-[var(--cc-white)] sm:text-xl">
              From the first idea to the finished space, every stage works
              toward the same vision.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex w-fit items-center rounded-full bg-[var(--cc-white)] px-6 py-3 text-sm font-medium text-[var(--cc-dark)] transition hover:bg-[var(--cc-accent)]"
          >
            Discuss your project
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Process;