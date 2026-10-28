import {
  PencilRuler,
  Browsers,
  Lightbulb,
  Code,
  ArrowUpRight,
  Sparkle,
} from "@phosphor-icons/react";

const services = [
  {
    id: "01",
    title: "Web Development",
    description:
      "Modern, responsive websites and web applications built for performance.",
    label: "Web Solutions",
    Icon: Browsers,
  },
  {
    id: "02",
    title: "Web Design",
    description:
      "Clean interfaces and intuitive user experiences focused on usability.",
    label: "Creative Interfaces",
    Icon: PencilRuler,
  },
  {
    id: "03",
    title: "WordPress Development",
    description:
      "Custom WordPress websites, CMS solutions and WooCommerce stores.",
    label: "CMS Solutions",
    Icon: Lightbulb,
  },
  {
    id: "04",
    title: "MERN Stack Development",
    description:
      "Full-stack applications built with MongoDB, Express, React and Node.js.",
    label: "Full Stack Solutions",
    Icon: Code,
  },
];

const ServicesSection = () => {
  return (
    <section
      id="services"
      className="relative w-full overflow-hidden bg-white py-16 sm:py-20 lg:py-24"
    >
      {/* Background Decorations */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 top-10 h-64 w-64 rounded-full bg-blue-100/40 blur-3xl"
      />

      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 bottom-0 h-64 w-64 rounded-full bg-blue-50 blur-3xl"
      />

      {/* Same Container Alignment as HeroBanner */}
      <div className="relative mx-auto w-full max-w-[1400px] px-5 sm:px-8 md:px-10 lg:px-12 xl:px-14">
        {/* Section Heading */}
        <div className="mx-auto mb-12 w-full max-w-2xl text-center sm:mb-14 lg:mb-16">
          <div className="inline-flex items-center justify-center gap-2.5">
            <span className="h-[2px] w-7 rounded-full bg-blue-600" />

            <span className="text-xs font-bold uppercase tracking-[0.25em] text-blue-600 sm:text-sm">
              What I Do
            </span>

            <Sparkle size={17} weight="fill" className="text-blue-600" />

            <span className="h-[2px] w-7 rounded-full bg-blue-600" />
          </div>

          <h2 className="mt-4 text-3xl font-black tracking-tight text-slate-950 sm:text-4xl lg:text-5xl">
            Services I <span className="text-blue-600">Provide</span>
          </h2>

          <p className="mx-auto mt-4 max-w-xl text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            I transform ideas into modern digital experiences through creative
            design, clean code and reliable web development.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid w-full min-w-0 grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 lg:gap-5 xl:gap-6">
          {services.map(({ id, title, description, label, Icon }) => (
            <article
              key={id}
              className="group relative flex min-h-[260px] min-w-0 flex-col items-center justify-center overflow-hidden rounded-2xl border border-blue-100/90 bg-white px-4 py-8 text-center transition-all duration-300 hover:-translate-y-2 hover:border-blue-200 hover:bg-blue-50/40 hover:shadow-xl hover:shadow-blue-600/[0.08] sm:min-h-[280px] xl:px-5"
            >
              {/* Decorative Circle */}
              <div
                aria-hidden="true"
                className="absolute -right-12 -top-12 h-32 w-32 rounded-full bg-blue-50 transition-transform duration-500 group-hover:scale-150"
              />

              {/* Bottom Accent */}
              <div
                aria-hidden="true"
                className="absolute inset-x-8 bottom-0 h-px bg-gradient-to-r from-transparent via-blue-200 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100"
              />

              {/* Service Icon */}
              <div className="relative z-10 flex h-[62px] w-[62px] shrink-0 items-center justify-center rounded-2xl bg-blue-50 text-blue-600 transition-all duration-300 group-hover:scale-105 group-hover:bg-blue-600 group-hover:text-white group-hover:shadow-lg group-hover:shadow-blue-600/20">
                <Icon size={32} weight="regular" />
              </div>

              {/* Service Title */}
              <h3 className="relative z-10 mt-5 text-lg font-bold tracking-tight text-slate-900 transition-colors duration-300 group-hover:text-blue-600 xl:text-xl">
                {title}
              </h3>

              {/* Description */}
              <p className="relative z-10 mt-3 max-w-[280px] text-sm leading-6 text-slate-500">
                {description}
              </p>

              {/* Service Label */}
              <div className="relative z-10 mt-5 inline-flex items-center gap-2 text-xs font-semibold text-slate-500 transition-colors duration-300 group-hover:text-blue-600">
                <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />
                {label}
              </div>

              {/* Hover Arrow */}
              <div className="absolute right-3 top-3 flex h-8 w-8 translate-x-2 items-center justify-center rounded-full bg-blue-600 text-white opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                <ArrowUpRight size={17} weight="bold" />
              </div>

              {/* Service Number */}
              <span className="absolute bottom-3 right-4 text-xs font-bold tracking-widest text-slate-200 transition-colors duration-300 group-hover:text-blue-200">
                {id}
              </span>
            </article>
          ))}
        </div>

        {/* Bottom Accent */}
        <div className="mt-10 flex items-center justify-center gap-2 sm:mt-12">
          <span className="h-1.5 w-1.5 rounded-full bg-blue-600" />

          <span className="text-xs font-medium tracking-wide text-slate-500 sm:text-sm">
            Creative thinking. Clean code. Meaningful results.
          </span>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
