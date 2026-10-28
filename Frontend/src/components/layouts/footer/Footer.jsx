import {
  InstagramLogo,
  LinkedinLogo,
  GithubLogo,
  ArrowUpRight,
} from "@phosphor-icons/react";

import logo from "../../../assets/logo.png";

const Footer = () => {
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
  ];

  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-[1400px] px-5 py-8 sm:px-8 sm:py-10 lg:px-12">

        {/* Main Footer */}
        <div className="flex flex-col items-center justify-between gap-7 md:flex-row">

          {/* Logo & Description */}
          <div className="flex flex-col items-center md:items-start">
            <a href="#home" aria-label="Go to homepage">
              <img
                src={logo}
                alt="Sugam Portfolio"
                className="h-9 w-auto object-contain"
              />
            </a>

            <p className="mt-3 text-center text-sm text-slate-500 md:text-left">
              Building ideas into digital experiences.
            </p>
          </div>

          {/* Navigation */}
          <nav
            aria-label="Footer navigation"
            className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3"
          >
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-slate-600 transition-colors duration-300 hover:text-blue-600"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Social Links */}
          <div className="flex items-center gap-3">
            {socialLinks.map(({ name, href, Icon }) => (
              <a
                key={name}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={name}
                className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-50 text-slate-700 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-600 hover:text-white"
              >
                <Icon size={19} weight="regular" />
              </a>
            ))}

            <a
              href="#home"
              aria-label="Back to top"
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full bg-blue-600 text-white shadow-md shadow-blue-600/20 transition-all duration-300 hover:-translate-y-1 hover:bg-blue-700"
            >
              <ArrowUpRight size={20} weight="bold" />
            </a>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-7 flex flex-col items-center justify-between gap-3 border-t border-slate-100 pt-5 text-center sm:flex-row sm:text-left">
          <p className="text-xs text-slate-500 sm:text-sm">
            © {new Date().getFullYear()} Sugam Karmakar. All rights reserved.
          </p>

          <p className="text-xs text-slate-500 sm:text-sm">
            Designed & Developed with{" "}
            <span className="font-semibold text-blue-600">passion.</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

