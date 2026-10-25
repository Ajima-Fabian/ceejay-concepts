import { ArrowUpRight } from "lucide-react";
import Container from "../ui/Container";
import { projects } from "../../data/projects";

function Projects() {
  return (
    <section
      id="projects"
      className="bg-[var(--cc-dark)] py-24 sm:py-32"
    >
      <Container>
        <div className="flex flex-col gap-8 border-b border-[var(--cc-border)] pb-12 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--cc-accent)]">
              Projects
            </p>

            <h2 className="max-w-2xl text-4xl font-semibold leading-tight tracking-tight text-[var(--cc-white)] sm:text-5xl lg:text-6xl">
              Ideas made visible
            </h2>
          </div>

          <p className="max-w-md text-sm leading-6 text-[var(--cc-muted)] sm:text-base">
            Explore examples of the architectural, interior and visualisation
work that represents the kind of spaces CEEJAY CONCEPTS creates.
          </p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-2">
          {projects.map((project, index) => (
            <article
              key={project.id}
              className={index === 0 ? "lg:col-span-2" : ""}
            >
              <a href="#contact" className="group block">
                <div
                  className={`relative overflow-hidden ${
                    index === 0 ? "aspect-[16/8]" : "aspect-[4/3]"
                  }`}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
                    loading={index === 0 ? "eager" : "lazy"}
                  />

                  <div className="absolute inset-0 bg-black/10 transition duration-500 group-hover:bg-black/30" />

                  {project.status === "placeholder" && (
                    <span className="absolute left-5 top-5 rounded-full border border-white/20 bg-black/40 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.16em] text-white/80 backdrop-blur-md">
                      Concept visual
                    </span>
                  )}

                  <div className="absolute right-5 top-5 flex h-11 w-11 items-center justify-center rounded-full bg-white text-black opacity-0 transition duration-300 group-hover:opacity-100">
                    <ArrowUpRight size={18} />
                  </div>
                </div>

                <div className="mt-5 flex flex-col gap-2 sm:flex-row sm:items-start sm:justify-between">
                  <div>
                    <h3 className="text-xl font-medium text-[var(--cc-white)]">
                      {project.title}
                    </h3>

                    <p className="mt-1 text-sm text-[var(--cc-muted)]">
                      {project.category}
                    </p>
                  </div>

                  <span className="text-sm text-[var(--cc-muted)]">
                    {project.location}
                  </span>
                </div>
              </a>
            </article>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <a
            href="#contact"
            className="group inline-flex items-center gap-3 border-b border-[var(--cc-muted)] pb-2 text-sm font-medium text-[var(--cc-white)] transition hover:border-[var(--cc-accent)]"
          >
            Discuss your project

            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </a>
        </div>
      </Container>
    </section>
  );
}

export default Projects;