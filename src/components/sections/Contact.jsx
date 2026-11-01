import {
  ArrowUpRight,
  Mail,
  MapPin,
  Phone,
  FileCheck2Icon,
  FileCheck
} from "lucide-react";
import Container from "../ui/Container";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-[var(--cc-bg)] py-24 sm:py-32"
    >
      <Container>
        <div className="grid gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
          {/* Contact information */}
          <div>
            <p className="mb-4 text-xs font-medium uppercase tracking-[0.2em] text-[var(--cc-accent)]">
              Start a project
            </p>

            <h2 className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-[var(--cc-white)] sm:text-5xl lg:text-6xl">
              Have an idea?
              <br />
              Let's define it.
            </h2>

            <p className="mt-8 max-w-md text-base leading-7 text-[var(--cc-muted)] sm:text-lg">
              Tell us what you're planning, and let's start a conversation
              about how CEEJAY CONCEPTS can bring your vision to life.
            </p>

            <div className="mt-12 space-y-6">
              {/* Email */}
              <div className="flex items-start gap-4">
                <Mail
                  size={20}
                  strokeWidth={1.5}
                  className="mt-1 text-[var(--cc-accent)]"
                />

                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--cc-muted)]">
                    Email
                  </p>

                  <a
                    href="mailto:ceejayconcepts01@gmail.com"
                    className="mt-1 block text-sm text-[var(--cc-white)] transition hover:text-[var(--cc-accent)]"
                  >
                    ceejayconcepts01@gmail.com
                  </a>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-start gap-4">
                <Phone
                  size={20}
                  strokeWidth={1.5}
                  className="mt-1 text-[var(--cc-accent)]"
                />

                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--cc-muted)]">
                    Phone
                  </p>

                  <a
                    href="tel:+2348140051376"
                    className="mt-1 block text-sm text-[var(--cc-white)] transition hover:text-[var(--cc-accent)]"
                  >
                    +234 814 005 1376
                  </a>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-start gap-4">
                <MapPin
                  size={20}
                  strokeWidth={1.5}
                  className="mt-1 text-[var(--cc-accent)]"
                />

                <div>
                  <p className="text-xs uppercase tracking-[0.16em] text-[var(--cc-muted)]">
                    Based in
                  </p>

                  <p className="mt-1 text-sm text-[var(--cc-white)]">
                    Enugu, Nigeria
                  </p>

                  <p className="mt-1 text-sm text-[var(--cc-muted)]">
                    Projects nationwide
                  </p>
                </div>
              </div>

              {/* Trademark */}
              
              <div className="flex items-center gap-4">
                <FileCheck 
                  size={20}
                  strokeWidth={1.5}
                  className="mt-1 text-[var(--cc-accent)]"
                />
                <p className="text-xs uppercase tracking-[0.16em] text-[var(--cc-muted)]">
                    RC <span className="mt-1 text-sm text-[var(--cc-white)]">
                    8638413
                    </span>
                  </p>
              </div>

            </div>
          </div>

          {/* Inquiry form */}
          <div className="border border-[var(--cc-border)] bg-[var(--cc-surface)] p-6 sm:p-8 lg:p-10">
            <div className="mb-8">
              <p className="text-lg font-medium text-[var(--cc-white)]">
                Tell us about your project
              </p>

              <p className="mt-2 text-sm leading-6 text-[var(--cc-muted)]">
                The more we know, the better we can understand what you need.
              </p>
            </div>

            <form className="space-y-6">
              {/* Name + Email */}
              <div className="grid gap-6 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-xs uppercase tracking-[0.14em] text-[var(--cc-muted)]"
                  >
                    Name
                  </label>

                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    autoComplete="name"
                    placeholder="Your name"
                    className="w-full border-b border-[var(--cc-border)] bg-transparent px-0 py-3 text-sm text-[var(--cc-white)] outline-none placeholder:text-[var(--cc-muted)] focus:border-[var(--cc-accent)]"
                  />
                </div>

                <div>
                  <label
                    htmlFor="email"
                    className="mb-2 block text-xs uppercase tracking-[0.14em] text-[var(--cc-muted)]"
                  >
                    Email
                  </label>

                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    autoComplete="email"
                    placeholder="you@example.com"
                    className="w-full border-b border-[var(--cc-border)] bg-transparent px-0 py-3 text-sm text-[var(--cc-white)] outline-none placeholder:text-[var(--cc-muted)] focus:border-[var(--cc-accent)]"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label
                  htmlFor="phone"
                  className="mb-2 block text-xs uppercase tracking-[0.14em] text-[var(--cc-muted)]"
                >
                  Phone
                </label>

                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  placeholder="+234..."
                  className="w-full border-b border-[var(--cc-border)] bg-transparent px-0 py-3 text-sm text-[var(--cc-white)] outline-none placeholder:text-[var(--cc-muted)] focus:border-[var(--cc-accent)]"
                />
              </div>

              {/* Project type */}
              <div>
                <label
                  htmlFor="projectType"
                  className="mb-2 block text-xs uppercase tracking-[0.14em] text-[var(--cc-muted)]"
                >
                  Project type
                </label>

                <select
                  id="projectType"
                  name="projectType"
                  required
                  defaultValue=""
                  className="w-full border-b border-[var(--cc-border)] bg-transparent px-0 py-3 text-sm text-[var(--cc-white)] outline-none focus:border-[var(--cc-accent)]"
                >
                  <option
                    value=""
                    disabled
                    className="bg-[var(--cc-dark)]"
                  >
                    Select a project type
                  </option>

                  <option
                    value="architecture"
                    className="bg-[var(--cc-dark)]"
                  >
                    Architectural Design
                  </option>

                  <option
                    value="construction"
                    className="bg-[var(--cc-dark)]"
                  >
                    Construction
                  </option>

                  <option
                    value="renovation"
                    className="bg-[var(--cc-dark)]"
                  >
                    Renovation
                  </option>

                  <option
                    value="interior"
                    className="bg-[var(--cc-dark)]"
                  >
                    Interior Design
                  </option>

                  <option
                    value="visualisation"
                    className="bg-[var(--cc-dark)]"
                  >
                    3D Modelling & Rendering
                  </option>

                  <option
                    value="consultation"
                    className="bg-[var(--cc-dark)]"
                  >
                    Consultation
                  </option>

                  <option
                    value="other"
                    className="bg-[var(--cc-dark)]"
                  >
                    Other
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label
                  htmlFor="message"
                  className="mb-2 block text-xs uppercase tracking-[0.14em] text-[var(--cc-muted)]"
                >
                  Tell us about the project
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
                  placeholder="Tell us about your idea, location, scope or what you need help with..."
                  className="w-full resize-none border-b border-[var(--cc-border)] bg-transparent px-0 py-3 text-sm leading-6 text-[var(--cc-white)] outline-none placeholder:text-[var(--cc-muted)] focus:border-[var(--cc-accent)]"
                />
              </div>

              {/* Submit */}
              <button
                type="button"
                className="group inline-flex items-center gap-3 rounded-full bg-[var(--cc-white)] px-6 py-3.5 text-sm font-medium text-[var(--cc-dark)] transition hover:bg-[var(--cc-accent)]"
              >
                Send project inquiry

                <ArrowUpRight
                  size={17}
                  className="transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
                />
              </button>
            </form>
          </div>
        </div>
      </Container>
    </section>
  );
}

export default Contact;
