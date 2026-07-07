"use client";

import { SOCIAL_LINKS, NAV_LINKS } from "@/constants/data";
import { scrollToSection } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="container flex flex-col items-center gap-8 py-12 md:flex-row md:justify-between">
        <div className="flex flex-col items-center gap-3 md:items-start">
          <a href="#home" className="flex items-center gap-2 text-lg font-bold tracking-tight">
            <span className="flex h-9 w-9 items-center justify-center text-xl font-black tracking-tight">
              <span className="bg-gradient-to-br from-foreground to-foreground/60 bg-clip-text text-transparent">
                M
              </span>
              <span className="text-base font-light text-muted-foreground/30">
                /
              </span>
              <span className="bg-gradient-to-br from-primary to-accent bg-clip-text text-transparent">
                A
              </span>
            </span>
          </a>
          <p className="max-w-xs text-center text-sm text-muted-foreground md:text-left">
            Frontend Developer crafting fast, accessible, and beautifully animated web experiences.
          </p>
        </div>

        <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(link.href.replace("#", ""));
              }}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {SOCIAL_LINKS.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={social.label}
              className="flex h-10 w-10 items-center justify-center rounded-xl border border-border text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/40 hover:text-primary"
            >
              <social.icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border py-6">
        <p className="text-center text-xs text-muted-foreground">
          © {new Date().getFullYear()} Manto Ariyansyah. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
