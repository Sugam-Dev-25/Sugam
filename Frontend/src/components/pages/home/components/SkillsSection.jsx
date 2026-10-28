import {
  DownloadSimple,
  Sparkle,
  ChatCircleDots,
  UsersThree,
  Lightbulb,
  ArrowsOutCardinal,
  Code,
  Palette,
  Brain,
} from "@phosphor-icons/react";

const skills = [
  {
    name: "Communication",
    percentage: 75,
    Icon: ChatCircleDots,
  },
  {
    name: "Problem Solving",
    percentage: 85,
    Icon: Lightbulb,
  },
  {
    name: "Teamwork",
    percentage: 90,
    Icon: UsersThree,
  },
  {
    name: "Web Development",
    percentage: 95,
    Icon: Code,
  },
];

const SkillsSection = () => {
  return (
    <section
      id="skills"
      className="relative isolate w-full overflow-hidden bg-[#F7FAFF] py-16 sm:py-20 lg:py-24"
    >
      {/* Background Decorations — Full Width */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-10 -z-10 h-72 w-72 rounded-full bg-blue-100/50 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 -z-10 h-80 w-80 rounded-full bg-blue-100/40 blur-3xl"
      />

      {/* MAIN CONTAINER
          Same width and horizontal alignment as HeroBanner */}

      <div className="mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-5 sm:px-8 md:px-10 lg:grid-cols-2 lg:gap-8 lg:px-12 xl:gap-8 xl:px-14">
        {/* LEFT CONTENT */}

        <div className="relative min-w-0 lg:py-8">
          {/* Section Label */}

          <div className="mb-6 flex items-center gap-3">
            <span className="h-5 w-[2px] rounded-full bg-blue-600" />

            <span className="text-xs font-semibold tracking-wide text-slate-500 sm:text-sm">
              Skills &amp; Expertise
            </span>

            <Sparkle size={17} weight="fill" className="text-blue-600" />
          </div>

          {/* Heading */}

          <h2 className="max-w-xl text-4xl font-black leading-[1.12] tracking-[-0.045em] text-slate-950 sm:text-5xl lg:text-[54px]">
            My Special
            <br />
            Skill <span className="text-blue-600">Set.</span>
          </h2>

          {/* Description */}

          <p className="mt-6 max-w-lg text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            Beyond writing code, I focus on communication, creative
            problem-solving and teamwork to build meaningful digital experiences
            and deliver reliable web solutions.
          </p>

          {/* Skill Categories */}

          <div className="mt-7 flex flex-wrap gap-2.5">
            {["Technical Skills", "Creative Thinking", "Collaboration"].map(
              (item) => (
                <span
                  key={item}
                  className="inline-flex items-center rounded-full border border-blue-100 bg-white px-4 py-2 text-xs font-medium text-slate-700 shadow-sm transition-colors duration-300 hover:border-blue-300 hover:text-blue-600 sm:text-sm"
                >
                  {item}
                </span>
              ),
            )}
          </div>

          {/* Download Resume */}

          <div className="mt-8 sm:mt-10">
            <a
              href="/resume.pdf"
              download
              className="group inline-flex min-h-[54px] items-center justify-center gap-3 rounded-full border border-blue-200 bg-white px-7 py-3.5 text-sm font-bold text-slate-800 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-blue-600 hover:bg-blue-600 hover:text-white hover:shadow-lg hover:shadow-blue-600/20"
            >
              Download Resume
              <DownloadSimple
                size={20}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-y-0.5"
              />
            </a>
          </div>

          {/* Bottom Note */}

          <div className="mt-8 flex items-center gap-2.5">
            <Brain
              size={20}
              weight="duotone"
              className="shrink-0 text-blue-600"
            />

            <span className="text-xs font-medium text-slate-500 sm:text-sm">
              Always learning. Always improving.
            </span>
          </div>
        </div>

        {/* RIGHT CONTENT — SKILL CARDS */}

        <div className="grid min-w-0 grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-1 lg:gap-4">
          {skills.map(({ name, percentage, Icon }, index) => (
            <article
              key={name}
              className="group relative min-w-0 overflow-hidden rounded-2xl border border-blue-100/80 bg-white p-5 shadow-[0_5px_25px_rgba(37,99,235,0.035)] transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-[0_12px_35px_rgba(37,99,235,0.09)] sm:p-6"
            >
              {/* Decorative Circle */}

              <div
                aria-hidden="true"
                className="pointer-events-none absolute -right-8 -top-8 h-24 w-24 rounded-full bg-blue-50 transition-transform duration-500 group-hover:scale-150"
              />

              {/* Card Header */}

              <div className="relative z-10 flex items-center justify-between gap-3">
                <div className="flex min-w-0 items-center gap-3">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 transition-colors duration-300 group-hover:bg-blue-600 group-hover:text-white">
                    <Icon size={21} weight="regular" />
                  </span>

                  <h3 className="truncate text-sm font-bold text-slate-800 sm:text-base">
                    {name}
                  </h3>
                </div>

                <span className="shrink-0 text-sm font-bold text-blue-600">
                  {percentage}%
                </span>
              </div>

              {/* Progress Bar */}

              <div
                className="relative z-10 mt-5 h-2 overflow-hidden rounded-full bg-slate-100"
                role="progressbar"
                aria-label={name}
                aria-valuenow={percentage}
                aria-valuemin={0}
                aria-valuemax={100}
              >
                <div
                  className="h-full rounded-full bg-gradient-to-r from-blue-600 to-blue-400 transition-[width] duration-1000 ease-out group-hover:from-blue-700 group-hover:to-blue-500"
                  style={{
                    width: `${percentage}%`,
                    transitionDelay: `${index * 100}ms`,
                  }}
                />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
