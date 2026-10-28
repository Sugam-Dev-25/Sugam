import { useEffect, useState } from "react";
import {
  ArrowRight,
  ArrowUpRight,
  Sparkle,
} from "@phosphor-icons/react";

import profileImage from "../../../../assets/Profile.png";

const roles = [
  "MERN Stack Developer",
  "WordPress Developer",
  "Web Developer",
  "Web Designer",
];

const HeroBanner = () => {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  // Typing animation
  useEffect(() => {
    const currentRole = roles[roleIndex];

    let delay = isDeleting ? 40 : 85;

    if (!isDeleting && displayText === currentRole) {
      delay = 1500;
    } else if (isDeleting && displayText === "") {
      delay = 300;
    }

    const timer = setTimeout(() => {
      if (!isDeleting && displayText === currentRole) {
        setIsDeleting(true);
      } else if (isDeleting && displayText === "") {
        setIsDeleting(false);
        setRoleIndex((previous) => (previous + 1) % roles.length);
      } else {
        setDisplayText(
          isDeleting
            ? currentRole.substring(0, displayText.length - 1)
            : currentRole.substring(0, displayText.length + 1)
        );
      }
    }, delay);

    return () => clearTimeout(timer);
  }, [displayText, isDeleting, roleIndex]);

  return (
    <section
      id="home"
      className="relative isolate overflow-hidden bg-white"
    >
      {/* Background Decorations */}

      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        {/* Geometric Lines */}

        <div className="absolute -left-52 top-10 h-[450px] w-[450px] rotate-[-28deg] opacity-70 sm:h-[600px] sm:w-[600px] lg:-left-44">
          {[0, 1, 2, 3, 4, 5].map((item) => (
            <div
              key={item}
              className="absolute border-2 border-blue-100"
              style={{ inset: `${item * 25}px` }}
            />
          ))}
        </div>

        {/* Right Background */}

        <div className="absolute -right-32 top-0 h-full w-[75%] bg-gradient-to-bl from-blue-50 via-slate-50 to-white [clip-path:polygon(35%_0,100%_0,100%_100%,0_100%)] lg:w-[58%]" />

        {/* Blue Glow */}

        <div className="absolute right-[12%] top-[18%] h-48 w-48 rounded-full bg-blue-200/20 blur-3xl sm:h-72 sm:w-72" />

        <div className="absolute bottom-10 left-[35%] h-32 w-32 rounded-full bg-blue-100/30 blur-3xl" />
      </div>

      {/* Main Container: Maximum Width 1400px */}

      <div className="mx-auto grid min-h-[600px] w-full max-w-[1400px] grid-cols-1 items-center gap-8 px-5 pb-10 pt-12 sm:px-8 sm:pb-12 sm:pt-14 md:px-10 lg:min-h-[680px] lg:grid-cols-2 lg:gap-8 lg:px-12 lg:pb-0 lg:pt-0 xl:px-14">

        {/* LEFT CONTENT */}

        <div className="relative z-20 py-5 sm:py-8 lg:py-12">

          {/* Intro Label */}

          <div className="mb-6 flex items-center gap-3">
            <span className="h-[2px] w-8 rounded-full bg-blue-600" />

            <p className="text-xs font-bold uppercase tracking-[0.28em] text-slate-800 sm:text-sm">
              Hello, I'm
            </p>

            <Sparkle
              size={17}
              weight="fill"
              className="text-blue-600"
            />
          </div>

          {/* Name */}

          <h1 className="max-w-2xl text-[clamp(2.5rem,5.1vw,5.25rem)] font-black leading-[1.06] tracking-[-0.055em] text-slate-950">
            Sugam
            <br />

            <span className="relative inline-block">
              Karmakar
            </span>
          </h1>

          {/* Typing Animation */}

          <div className="mt-5 min-h-[48px] sm:mt-6 sm:min-h-[62px]">
            <h2
              aria-label={roles[roleIndex]}
              className="text-[clamp(1.5rem,3.5vw,3rem)] font-extrabold leading-tight tracking-tight text-blue-600"
            >
              <span>{displayText}</span>

              <span
                aria-hidden="true"
                className="ml-1 inline-block h-[0.85em] w-[3px] translate-y-1 animate-pulse rounded-full bg-blue-600"
              />
            </h2>
          </div>

          {/* Description */}

          <p className="mt-5 max-w-[580px] text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8">
            I build modern, responsive and user-friendly web
            applications using React.js, Node.js and modern web
            technologies. I enjoy transforming ideas into clean,
            functional digital experiences.
          </p>

          {/* Buttons */}

          <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-9">

            <a
              href="#portfolio"
              className="group inline-flex min-h-[54px] items-center gap-3 rounded-full bg-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/25 sm:px-8"
            >
              View Portfolio

              <ArrowRight
                size={20}
                weight="bold"
                className="transition-transform duration-300 group-hover:translate-x-1"
              />
            </a>

            <a
              href="#contact"
              className="group inline-flex min-h-[54px] items-center gap-2 rounded-full border border-slate-200 bg-white/80 px-5 py-3.5 text-sm font-bold text-slate-800 transition-all duration-300 hover:border-blue-200 hover:text-blue-600 sm:px-6"
            >
              Let's Talk

              <ArrowUpRight
                size={19}
                className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
              />
            </a>

          </div>

          {/* Bottom Label */}

          <div className="mt-10 flex items-center gap-3 sm:mt-12">
            <span className="h-2 w-2 rounded-full bg-blue-600" />

            <span className="text-xs font-medium tracking-wide text-slate-500 sm:text-sm">
              Turning ideas into digital experiences
            </span>
          </div>

        </div>

        {/* RIGHT IMAGE AREA */}

        <div className="relative mx-auto flex min-h-[380px] w-full max-w-[600px] items-end justify-center sm:min-h-[480px] lg:min-h-[680px] lg:max-w-none">

          {/* Image Background Panel */}

          <div className="absolute inset-x-[4%] bottom-0 top-8 overflow-hidden rounded-t-[45%] bg-gradient-to-b from-blue-50/40 via-blue-50/70 to-blue-100/80 sm:top-10 sm:rounded-t-[48%] lg:inset-x-[2%] lg:top-12">

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_30%,rgba(59,130,246,0.12),transparent_60%)]" />

            {/* Background Grid */}

            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(59,130,246,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.08)_1px,transparent_1px)] [background-size:35px_35px]" />
          </div>

          {/* Main Developer Text: Floating */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute left-1/2 top-[29%] z-0 -translate-x-1/2 animate-[float_6s_ease-in-out_infinite] whitespace-nowrap"
          >
            <span className="text-[clamp(2.8rem,7.8vw,7.5rem)] font-black uppercase leading-none tracking-[-0.06em] text-slate-950">
              Developer
            </span>
          </div>

          {/* Profile Image: FIXED, NO FLOAT ANIMATION */}

          <img
            src={profileImage}
            alt="Sugam Karmakar - MERN Stack Developer"
            fetchPriority="high"
            className="relative z-10 block max-h-[400px] w-full max-w-[360px] object-contain object-bottom drop-shadow-[0_18px_25px_rgba(15,23,42,0.08)] sm:max-h-[520px] sm:max-w-[440px] lg:max-h-[650px] lg:max-w-[500px]"
          />

          {/* Outlined Developer Text: Floating */}

          <div
            aria-hidden="true"
            className="pointer-events-none absolute bottom-[5%] left-1/2 z-20 -translate-x-1/2 animate-[float_5s_ease-in-out_infinite] whitespace-nowrap"
          >
            <span className="text-[clamp(2.1rem,5.5vw,5.5rem)] font-black uppercase leading-none tracking-[-0.045em] text-transparent opacity-80 [-webkit-text-stroke:1px_#64748b] sm:[-webkit-text-stroke:1.5px_#64748b]">
              Developer
            </span>
          </div>

          {/* Floating Code Badge */}

          <div className="absolute right-[9%] top-[17%] z-20 flex h-12 w-12 animate-[float_5s_ease-in-out_infinite] items-center justify-center rounded-2xl border border-blue-200 bg-white/90 shadow-lg shadow-blue-900/5 backdrop-blur-md sm:h-16 sm:w-16">
            <span className="text-xl font-black text-blue-600 sm:text-2xl">
              {"</>"}
            </span>
          </div>

          {/* Decorative Circle */}

          <div className="absolute left-[8%] top-[39%] z-20 h-3 w-3 animate-[float_4s_ease-in-out_infinite] rounded-full bg-blue-600 sm:h-4 sm:w-4" />

          <div className="absolute bottom-[26%] right-[7%] z-20 h-5 w-5 animate-[float_6s_ease-in-out_infinite] rounded-full border-2 border-blue-500 bg-white sm:h-7 sm:w-7" />

          {/* Top Badge */}

          <div className="absolute left-[5%] top-[12%] z-20 hidden animate-[float_5s_ease-in-out_infinite] rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl shadow-blue-950/5 backdrop-blur-xl sm:block lg:left-[1%]">
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
              Creative Mind
            </p>

            <p className="mt-1 text-sm font-bold text-slate-900">
              Developer & Designer
            </p>
          </div>

          {/* Bottom Badge */}

          <div className="absolute bottom-[19%] left-[2%] z-20 hidden animate-[float_6s_ease-in-out_infinite] rounded-2xl border border-white/80 bg-white/90 px-4 py-3 shadow-xl shadow-blue-950/5 backdrop-blur-md sm:block lg:left-[0%]">
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />

              <span className="text-xs font-bold text-slate-800">
                Building for the web
              </span>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Animation */}

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translate3d(0, 0, 0);
          }

          50% {
            transform: translate3d(0, -12px, 0);
          }
        }

        @media (prefers-reduced-motion: reduce) {
          section#home *,
          section#home *::before,
          section#home *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            scroll-behavior: auto !important;
          }
        }
      `}</style>
    </section>
  );
};

export default HeroBanner;

