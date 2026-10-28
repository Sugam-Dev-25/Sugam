import { useEffect, useState } from "react";

import {
  List,
  X,
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
  FacebookLogo,
  ArrowUpRight,
  Phone,
  EnvelopeSimple,
  MapPin,
} from "@phosphor-icons/react";

import logo from "../../../assets/logo.png";
import profileImage from "../../../assets/Profile.png";

const navLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Portfolio", href: "#portfolio" },
  { name: "Contact", href: "#contact" },
];

const socialLinks = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/",
    Icon: InstagramLogo,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/",
    Icon: LinkedinLogo,
  },
  {
    name: "GitHub",
    href: "https://github.com/",
    Icon: GithubLogo,
  },
  {
    name: "Facebook",
    href: "https://www.facebook.com/",
    Icon: FacebookLogo,
  },
];

const contactDetails = [
  {
    label: "CALL ME",
    value: "+91 70441 97767",
    href: null,
    Icon: Phone,
  },
  {
    label: "MAIL ME",
    value: "sugamkarmakar25@gmail.com",
    href: null,
    Icon: EnvelopeSimple,
  },
  {
    label: "LOCATION",
    value: "Dum Dum, West Bengal, India",
    href: null,
    Icon: MapPin,
  },
];

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const closeSidebar = () => {
    setIsSidebarOpen(false);
  };

  // Close sidebar with Escape key
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        closeSidebar();
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    document.body.style.overflow = isSidebarOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isSidebarOpen]);

  // Highlight the current section
  useEffect(() => {
    const sectionIds = ["home", "about", "portfolio", "contact"];

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              b.intersectionRatio - a.intersectionRatio
          );

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id);
        }
      },
      {
        rootMargin: "-20% 0px -60% 0px",
        threshold: [0, 0.1, 0.25, 0.5],
      }
    );

    sectionIds.forEach((id) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  const renderSocialLinks = (sidebar = false) =>
    socialLinks.map(({ name, href, Icon }) => (
      <a
        key={name}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={name}
        className={`group flex shrink-0 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white ${
          sidebar
            ? "h-11 w-11 border border-slate-200 bg-white text-slate-700 hover:border-blue-600"
            : "h-10 w-10 bg-slate-100/90 text-slate-800 sm:h-12 sm:w-12"
        }`}
      >
        <Icon
          size={sidebar ? 20 : 21}
          weight="regular"
          className="transition-transform duration-300 group-hover:scale-110"
        />
      </a>
    ));

  const renderNavigation = (sidebar = false) =>
    navLinks.map((link) => {
      const isActive = activeSection === link.href.slice(1);

      return (
        <a
          key={link.name}
          href={link.href}
          onClick={closeSidebar}
          className={
            sidebar
              ? `group flex items-center justify-between rounded-xl border px-4 py-3.5 text-sm font-semibold transition-all duration-300 ${
                  isActive
                    ? "border-blue-200 bg-blue-50 text-blue-600"
                    : "border-slate-200 bg-white text-slate-800 hover:border-blue-200 hover:bg-blue-50 hover:text-blue-600"
                }`
              : `group relative whitespace-nowrap py-2 text-sm font-semibold transition-colors duration-300 xl:text-base ${
                  isActive
                    ? "text-blue-600"
                    : "text-slate-800 hover:text-blue-600"
                }`
          }
        >
          {link.name}

          {sidebar ? (
            <ArrowUpRight
              size={18}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          ) : (
            <span
              className={`absolute -bottom-1 left-0 h-[2px] rounded-full bg-blue-600 transition-all duration-300 ${
                isActive ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          )}
        </a>
      );
    });

  return (
    <>
      {/* HEADER */}

      <header className="sticky top-0 z-40 w-full border-b border-slate-100/90 bg-white/95 backdrop-blur-xl">
        {/* Same 1400px container as HeroBanner */}

        <div className="mx-auto flex h-[76px] w-full max-w-[1400px] items-center justify-between gap-4 px-5 sm:h-[88px] sm:px-8 lg:h-[100px] lg:px-12 xl:px-14">

          {/* LOGO */}

          <a
            href="#home"
            onClick={closeSidebar}
            aria-label="Sugam Karmakar - Home"
            className="group flex shrink-0 items-center"
          >
            <img
              src={logo}
              alt="Sugam Portfolio Logo"
              className="h-9 w-auto object-contain transition-transform duration-300 group-hover:scale-[1.03] sm:h-11"
            />
          </a>

          {/* DESKTOP NAVIGATION */}

          <nav
            aria-label="Main navigation"
            className="hidden items-center gap-6 lg:flex xl:gap-10"
          >
            {renderNavigation()}
          </nav>

          {/* RIGHT ACTIONS */}

          <div className="ml-auto flex shrink-0 items-center gap-3 sm:gap-4 lg:ml-0">

            {/* SOCIAL ICONS */}

            <div className="hidden items-center gap-2 md:flex xl:gap-2.5">
              {renderSocialLinks()}
            </div>

            {/* HAMBURGER */}

            <button
              type="button"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open sidebar"
              aria-expanded={isSidebarOpen}
              aria-controls="portfolio-sidebar"
              className="group relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-full bg-blue-600 text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-0.5 hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-600/30 sm:h-[54px] sm:w-[54px]"
            >
              <span className="absolute inset-0 origin-bottom scale-y-0 rounded-full bg-slate-950 transition-transform duration-300 group-hover:scale-y-100" />

              <List
                size={28}
                weight="regular"
                className="relative z-10 transition-transform duration-300 group-hover:rotate-12"
              />
            </button>
          </div>
        </div>
      </header>

      {/* BACKDROP */}

      <button
        type="button"
        aria-label="Close sidebar overlay"
        tabIndex={isSidebarOpen ? 0 : -1}
        onClick={closeSidebar}
        className={`fixed inset-0 z-50 cursor-default bg-slate-950/60 backdrop-blur-sm transition-all duration-500 ${
          isSidebarOpen
            ? "visible opacity-100"
            : "invisible pointer-events-none opacity-0"
        }`}
      />

      {/* RIGHT SIDEBAR */}

      <aside
        id="portfolio-sidebar"
        aria-label="Portfolio menu and contact information"
        aria-hidden={!isSidebarOpen}
        inert={!isSidebarOpen}
        className={`fixed right-0 top-0 z-[60] flex h-dvh w-full flex-col overflow-y-auto overscroll-contain border-l border-white/50 bg-white shadow-2xl transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:w-[420px] lg:w-[460px] ${
          isSidebarOpen
            ? "translate-x-0"
            : "translate-x-full"
        }`}
      >
        {/* SIDEBAR HEADER */}

        <div className="sticky top-0 z-10 flex shrink-0 items-center justify-between border-b border-slate-100 bg-white/95 px-5 py-4 backdrop-blur-xl sm:px-7 sm:py-5">
          <a
            href="#home"
            onClick={closeSidebar}
            aria-label="Go to homepage"
            className="flex items-center"
          >
            <img
              src={logo}
              alt="Sugam Portfolio Logo"
              className="h-9 w-auto object-contain sm:h-11"
            />
          </a>

          <button
            type="button"
            onClick={closeSidebar}
            aria-label="Close sidebar"
            className="group flex h-11 w-11 items-center justify-center rounded-full bg-slate-100 text-slate-800 transition-all duration-300 hover:rotate-90 hover:bg-blue-600 hover:text-white"
          >
            <X size={22} />
          </button>
        </div>

        {/* SIDEBAR CONTENT */}

        <div className="flex-1 px-5 py-6 sm:px-7 sm:py-7">

          {/* MOBILE NAVIGATION */}

          <div className="mb-8 lg:hidden">
            <div className="mb-4 flex items-center gap-2">
              <span className="h-[2px] w-6 rounded-full bg-blue-600" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Navigation
              </p>
            </div>

            <nav
              aria-label="Sidebar navigation"
              className="grid grid-cols-2 gap-3"
            >
              {renderNavigation(true)}
            </nav>
          </div>

          {/* PROFILE IMAGE */}

          <div className="group relative mb-7 overflow-hidden rounded-2xl border border-blue-100 bg-gradient-to-br from-blue-50 via-slate-50 to-blue-100">
            <img
              src={profileImage}
              alt="Sugam Karmakar"
              className="h-[210px] w-full object-contain object-bottom transition-transform duration-500 group-hover:scale-[1.02] sm:h-[225px]"
            />

            <div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/80 bg-white/90 px-3.5 py-2 shadow-sm backdrop-blur-xl">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />

              <span className="text-xs font-bold text-slate-800">
                Open to Opportunities
              </span>
            </div>

            <span className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-xl border border-white/80 bg-white/80 text-blue-600 shadow-sm backdrop-blur-md">
              <ArrowUpRight size={22} />
            </span>
          </div>

          {/* ABOUT ME */}

          <div className="mb-8">
            <div className="mb-3 flex items-center gap-2">
              <span className="h-[2px] w-6 rounded-full bg-blue-600" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                About Me
              </p>
            </div>

            <h2 className="text-[25px] font-extrabold leading-tight tracking-tight text-slate-950 sm:text-[28px]">
              Building digital experiences that make a difference.
            </h2>

            <p className="mt-3 text-sm leading-7 text-slate-600">
              I'm Sugam Karmakar, a web developer focused on
              creating modern, responsive and user-friendly
              websites and applications with React.js, Node.js
              and other modern web technologies.
            </p>
          </div>

          {/* CONTACT DETAILS */}

          <div className="mb-8">
            <div className="mb-5 flex items-center gap-2">
              <span className="h-[2px] w-6 rounded-full bg-blue-600" />

              <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">
                Get In Touch
              </p>
            </div>

            <div className="space-y-5">
              {contactDetails.map(
                ({ label, value, href, Icon }) => {
                  const content = (
                    <>
                      <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-slate-200 bg-slate-50 text-slate-800 transition-all duration-300 group-hover:border-blue-200 group-hover:bg-blue-50 group-hover:text-blue-600">
                        <Icon size={22} weight="regular" />
                      </span>

                      <span className="min-w-0 flex-1">
                        <span className="block text-[11px] font-bold uppercase tracking-[0.15em] text-blue-600">
                          {label}
                        </span>

                        <span className="mt-1.5 block break-words text-sm font-semibold text-slate-900">
                          {value}
                        </span>
                      </span>
                    </>
                  );

                  return href ? (
                    <a
                      key={label}
                      href={href}
                      className="group flex items-center gap-4"
                    >
                      {content}
                    </a>
                  ) : (
                    <div
                      key={label}
                      className="group flex items-center gap-4"
                    >
                      {content}
                    </div>
                  );
                }
              )}
            </div>
          </div>

          {/* SOCIAL LINKS */}

          <div className="border-t border-slate-200 pt-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] text-slate-500">
              Find Me Online
            </p>

            <div className="flex flex-wrap gap-3">
              {renderSocialLinks(true)}
            </div>
          </div>

          {/* CTA */}

          <a
            href="#contact"
            onClick={closeSidebar}
            className="group mt-8 flex min-h-[54px] w-full items-center justify-center gap-3 rounded-full bg-blue-600 px-6 py-4 text-sm font-bold text-white shadow-lg shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700 hover:shadow-xl"
          >
            Let's Work Together

            <ArrowUpRight
              size={20}
              className="transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </a>
        </div>

        {/* SIDEBAR FOOTER */}

        <div className="shrink-0 border-t border-slate-100 bg-slate-50 px-5 py-5 text-center sm:px-7">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Sugam Karmakar. All rights reserved.
          </p>
        </div>
      </aside>
    </>
  );
};

export default Header;

