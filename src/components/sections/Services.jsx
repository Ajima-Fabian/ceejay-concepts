import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import { services } from "../../data/services";

function Services() {
  return (
    <section
      id="services"
      className="bg-[var(--cc-bg)] py-24 sm:py-32"
    >
      <Container>
        {/* Section heading */}
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--cc-accent)]">
              Our Services
            </p>

            <h2 className="max-w-lg text-4xl font-semibold leading-tight tracking-tight text-[var(--cc-black)] sm:text-5xl">
              From an idea to a space you can call your own.
            </h2>
          </div>

          <div className="flex items-end">
            <p className="max-w-xl text-base leading-7 text-[var(--cc-muted)] sm:text-lg">
              We bring design, engineering and construction together to
              approach projects as complete systems—not isolated services.
            </p>
          </div>
        </div>

        {/* Services grid */}
        <div className="mt-16 grid border-t border-[var(--cc-border)] sm:grid-cols-2">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.number}
                className="group border-b border-[var(--cc-border)] py-8 sm:nth-[odd]:border-r sm:nth-[odd]:pr-8 sm:nth-[even]:pl-8 lg:py-10"
              >
                <div className="flex items-start justify-between gap-6">
                  <span className="text-xs font-medium text-[var(--cc-muted)]">
                    {service.number}
                  </span>

                  <Icon
                    size={22}
                    strokeWidth={1.5}
                    className="text-[var(--cc-muted)] transition duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[var(--cc-accent)]"
                  />
                </div>

                <h3 className="mt-10 text-xl font-medium text-[var(--cc-black)] sm:text-2xl">
                  {service.title}
                </h3>

                <p className="mt-4 max-w-lg text-sm leading-6 text-[var(--cc-muted)] sm:text-base">
                  {service.description}
                </p>

                <a
  href="#contact"
  className="mt-6 inline-flex items-center gap-2 text-xs font-medium uppercase tracking-[0.15em] text-[var(--cc-white)] opacity-0 transition duration-300 group-hover:opacity-100"
>
  Discuss this service
  <ArrowUpRight size={14} />
</a>
              </article>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default Services;