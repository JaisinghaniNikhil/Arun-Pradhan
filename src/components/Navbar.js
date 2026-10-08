"use client"; // this component uses state (open/close menu), so it runs in the browser

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { content } from "../data/content";
import "./Navbar.css";

export default function Navbar() {
  // open = is the mobile menu showing? (true/false)
  const [open, setOpen] = useState(false);

  // pathname = the page we are on right now, like "/" or "/about"
  const pathname = usePathname();

  // closes the mobile menu after any link is clicked
  const closeMenu = () => setOpen(false);

  return (
    <header className="nav">
      <div className="container nav-bar">
        {/* ---- Logo (name + small tagline) ---- */}
        <Link href="/" className="nav-logo" onClick={closeMenu}>
          <span className="nav-logo-name">{content.Coordinator[Advisor]Name}</span>
          <span className="nav-logo-tag">{content.tagline}</span>
        </Link>

        {/* ---- Links + button ---- */}
        <nav id="primary-navigation" aria-label="Main navigation" className={`nav-links ${open ? "nav-links-open" : ""}`}>
          {content.nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`nav-link ${pathname === item.href ? "nav-link-active" : ""}`}
              aria-current={pathname === item.href ? "page" : undefined}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}

          <Link href="/contact" className="btn btn-gold nav-cta" onClick={closeMenu}>
            {content.navButton}
          </Link>
        </nav>

        {/* ---- Hamburger button (only visible on mobile) ---- */}
        <button
          className="nav-toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  );
}
