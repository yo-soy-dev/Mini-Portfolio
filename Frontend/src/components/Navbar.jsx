import React, { useState, useEffect } from "react";

const links = [
  { label: "Home", href: "#home" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("#home");

  useEffect(() => {
    const sections = links.map(l => document.querySelector(l.href));
    const onScroll = () => {
      const y = window.scrollY + 120; 
      for (let i = sections.length - 1; i >= 0; i--) {
        const s = sections[i];
        if (s && s.offsetTop <= y) {
          setActive(`#${s.id}`);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMenu = () => setOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-gradient-to-r from-purple-600 to-blue-500 text-white shadow-md">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <a href="#home" className="text-xl font-bold">MyPortfolio</a>

        <ul className="hidden md:flex items-center gap-6">
          {links.map((l) => (
            <li key={l.href}>
              <a
                href={l.href}
                className={`px-2 py-1 rounded transition ${
                  active === l.href ? "bg-black text-white" : "hover:bg-black/10"
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          aria-label="Toggle Menu"
          className="md:hidden p-2 rounded border"
          onClick={() => setOpen(!open)}
        >
          <div className="w-5 h-0.5 bg-black mb-1"></div>
          <div className="w-5 h-0.5 bg-black mb-1"></div>
          <div className="w-5 h-0.5 bg-black"></div>
        </button>
      </div>

      {open && (
        <ul className="md:hidden border-t bg-black">
          {links.map((l) => (
            <li key={l.href} className="px-4 py-3 border-b">
              <a
                href={l.href}
                onClick={closeMenu}
                className={`block ${
                  active === l.href ? "font-semibold underline" : ""
                }`}
              >
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;