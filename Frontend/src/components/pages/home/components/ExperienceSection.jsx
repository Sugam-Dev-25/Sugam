import {
  Briefcase,
  MapPin,
  CalendarBlank,
  Sparkle,
  ArrowUpRight,
} from "@phosphor-icons/react";

import profileImage from "../../../../assets/Exprience.png";

const experiences = [
  {
    id: "01",
    position: "MERN Stack Developer",
    company: "Ahaan Software Consulting",
    location: "Kolkata, India",
    duration: "September 2024 – Present",
    description:
      "Developing modern web applications and scalable digital solutions using the MERN stack.",
    responsibilities: [
      "Developing web applications using MongoDB, Express.js, React.js, and Node.js.",
      "Integrating RESTful APIs to connect frontend and backend services.",
      "Collaborating with clients to understand requirements and define project scope.",
      "Using Git and GitHub for version control and collaborative development.",
    ],
  },
  {
    id: "02",
    position: "WordPress Developer",
    company: "Diadem Technology Pvt. Ltd.",
    location: "Kolkata, India",
    duration: "August 2022 – August 2024",
    description:
      "Built and maintained WordPress websites tailored to client requirements and business goals.",
    responsibilities: [
      "Developed and maintained WordPress websites for various clients.",
      "Customized themes and plugins to meet project requirements.",
      "Collaborated with designers to implement responsive website layouts.",
    ],
  },
  {
    id: "03",
    position: "WordPress Developer",
    company: "Zauca Consultancy Services",
    location: "Kolkata, India",
    duration: "July 2021 – August 2022",
    description:
      "Created and maintained client websites with a focus on usability, performance, and reliability.",
    responsibilities: [
      "Developed and maintained WordPress websites for client projects.",
      "Worked with designers to build user-friendly website layouts.",
      "Migrated websites between hosting providers and domains.",
      "Customized website presentations to achieve client objectives.",
    ],
  },
];

const ExperienceSection = () => {
  return (
    <section
      id="experience"
      className="relative w-full overflow-hidden bg-white py-14 sm:py-16 lg:py-20"
    >
      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-32 top-20 h-72 w-72 rounded-full bg-blue-100/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-32 bottom-10 h-72 w-72 rounded-full bg-blue-50 blur-3xl"
      />

      {/* Main Container: Same alignment as HeroBanner */}
      <div className="relative mx-auto grid w-full max-w-[1400px] grid-cols-1 items-center gap-10 px-5 sm:px-8 md:px-10 lg:grid-cols-2 lg:gap-12 lg:px-12 xl:gap-16 xl:px-14">
        {/* LEFT SIDE: EXPERIENCE IMAGE */}
        <div className="relative mx-auto flex h-full w-full max-w-[600px] items-center lg:sticky lg:top-24 lg:max-w-none">
          {/* Main Image Container */}
          <div className="group relative h-[350px] w-full overflow-hidden rounded-3xl border border-blue-100 bg-gradient-to-br from-blue-50 via-white to-blue-100/70 shadow-[0_15px_50px_rgba(37,99,235,0.07)] sm:h-[420px] lg:h-[480px] xl:h-[500px]">
            {/* Background Decoration */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-16 -top-16 z-0 h-64 w-64 rounded-full bg-blue-200/40 blur-3xl"
            />

            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-16 -left-16 z-0 h-64 w-64 rounded-full bg-blue-100/70 blur-3xl"
            />

            {/* Imported Profile Image */}
            <img
              src={profileImage}
              alt="Sugam Karmakar - Web Developer"
              loading="lazy"
              className="absolute inset-0 z-0 h-full w-full object-cover object-center transition-transform duration-700 group-hover:scale-[1.03]"
            />

            {/* Image Overlay */}
            <div className="absolute inset-x-0 bottom-0 z-10 h-56 bg-gradient-to-t from-slate-950/85 via-slate-950/40 to-transparent sm:h-64" />

            {/* Image Caption */}
            <div className="absolute inset-x-0 bottom-0 z-20 p-5 sm:p-7 lg:p-8">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/15 px-3 py-1.5 text-xs font-semibold text-white backdrop-blur-md">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                Professional Journey
              </span>

              <h3 className="mt-4 max-w-md text-2xl font-black leading-tight text-white sm:text-3xl">
                Turning Ideas Into
                <br />
                Digital Experiences.
              </h3>

              <p className="mt-3 max-w-md text-sm leading-6 text-white/80">
                Combining development, creativity, and problem-solving to build
                modern web solutions.
              </p>
            </div>
          </div>

          {/* Floating Experience Badge */}
          <div className="absolute -left-2 top-8 z-30 flex items-center gap-3 rounded-2xl border border-blue-100 bg-white/95 p-3.5 shadow-xl shadow-blue-950/5 backdrop-blur-md sm:-left-4 sm:top-10 sm:p-4">
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600">
              <Briefcase size={23} weight="duotone" />
            </span>

            <div>
              <p className="text-lg font-black text-slate-900">5+ Years</p>

              <p className="mt-0.5 text-xs font-medium text-slate-500">
                Web Development
              </p>
            </div>
          </div>

          {/* Floating Contact Button */}
          <a
            href="#contact"
            aria-label="Contact me"
            className="absolute bottom-8 right-4 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/25 transition-all duration-300 hover:scale-110 hover:bg-blue-700 sm:bottom-10 sm:right-6 sm:h-14 sm:w-14"
          >
            <ArrowUpRight size={25} weight="bold" />
          </a>
        </div>

        {/* RIGHT SIDE: EXPERIENCE CONTENT */}
        <div className="relative min-w-0 lg:py-2">
          {/* Section Label */}
          <div className="mb-5 inline-flex items-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-blue-600" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 sm:text-sm">
              My Journey
            </span>

            <Sparkle size={17} weight="fill" className="text-blue-600" />
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-black leading-tight tracking-tight text-slate-950 sm:text-5xl lg:text-[48px] xl:text-[52px]">
            Professional
            <br />
            <span className="text-blue-600">Experience.</span>
          </h2>

          {/* Description */}
          <p className="mt-5 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            My professional journey spans web development, WordPress solutions,
            and full-stack application development. Each experience has helped
            me improve my technical skills and deliver meaningful digital
            experiences.
          </p>

          {/* Experience Timeline */}
          <div className="mt-8 space-y-7 sm:mt-9 sm:space-y-8">
            {experiences.map((experience, index) => (
              <article
                key={experience.id}
                className="group relative border-l-2 border-blue-100 pl-5 transition-colors duration-300 hover:border-blue-600 sm:pl-7"
              >
                {/* Timeline Dot */}
                <span className="absolute -left-[7px] top-1 h-3 w-3 rounded-full border-2 border-blue-600 bg-white transition-all duration-300 group-hover:scale-125 group-hover:bg-blue-600" />

                {/* Experience Label */}
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-blue-50 px-3 py-1 text-xs font-bold text-blue-600">
                    <Briefcase size={14} weight="bold" />
                    Experience {experience.id}
                  </span>

                  {index === 0 && (
                    <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600">
                      <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                      Current Position
                    </span>
                  )}
                </div>

                {/* Position */}
                <h3 className="mt-3 text-xl font-extrabold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600 sm:text-2xl">
                  {experience.position}
                </h3>

                {/* Company */}
                <p className="mt-2 text-base font-bold text-slate-700">
                  {experience.company}
                </p>

                {/* Location & Duration */}
                <div className="mt-3 flex flex-col gap-2 text-xs font-medium text-slate-500 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:text-sm">
                  <span className="inline-flex items-center gap-1.5">
                    <MapPin size={16} className="shrink-0 text-blue-600" />
                    {experience.location}
                  </span>

                  <span className="inline-flex items-center gap-1.5">
                    <CalendarBlank
                      size={16}
                      className="shrink-0 text-blue-600"
                    />
                    {experience.duration}
                  </span>
                </div>

                {/* Description */}
                <p className="mt-3 max-w-xl text-sm leading-6 text-slate-600 sm:text-[15px] sm:leading-7">
                  {experience.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
