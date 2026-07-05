"use client";

import { useEffect, useState, useCallback } from "react";
import { Command } from "cmdk";
import { motion, AnimatePresence } from "framer-motion";
import { Search, Sun, Moon, Download } from "lucide-react";
import { useTheme } from "next-themes";
import { COMMAND_ITEMS } from "@/constants/data";
import { SITE_CONFIG, scrollToSection } from "@/lib/utils";

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((prev) => !prev);
      }
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("keydown", down);
    return () => document.removeEventListener("keydown", down);
  }, []);

  const runCommand = useCallback((action: () => void) => {
    setOpen(false);
    action();
  }, []);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[90] bg-background/70 backdrop-blur-sm"
            onClick={() => setOpen(false)}
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: -12 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: -12 }}
            transition={{ duration: 0.18 }}
            className="fixed left-1/2 top-24 z-[91] w-[92%] max-w-lg -translate-x-1/2"
          >
            <Command className="overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
              <div className="flex items-center gap-3 border-b border-border px-4">
                <Search className="h-4 w-4 shrink-0 text-muted-foreground" />
                <Command.Input
                  autoFocus
                  placeholder="Search sections, toggle theme..."
                  className="h-14 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
                />
              </div>
              <Command.List className="max-h-80 overflow-y-auto p-2">
                <Command.Empty className="py-6 text-center text-sm text-muted-foreground">
                  No results found.
                </Command.Empty>
                <Command.Group heading="Navigate" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                  {COMMAND_ITEMS.map((item) => (
                    <Command.Item
                      key={item.href}
                      onSelect={() =>
                        runCommand(() => scrollToSection(item.href.replace("#", "")))
                      }
                      className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm data-[selected=true]:bg-muted"
                    >
                      <item.icon className="h-4 w-4 text-primary" />
                      {item.label}
                    </Command.Item>
                  ))}
                </Command.Group>
                <Command.Group heading="Actions" className="px-2 py-1.5 text-xs font-medium text-muted-foreground">
                  <Command.Item
                    onSelect={() =>
                      runCommand(() =>
                        setTheme(resolvedTheme === "dark" ? "light" : "dark")
                      )
                    }
                    className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm data-[selected=true]:bg-muted"
                  >
                    {resolvedTheme === "dark" ? (
                      <Sun className="h-4 w-4 text-primary" />
                    ) : (
                      <Moon className="h-4 w-4 text-primary" />
                    )}
                    Toggle theme
                  </Command.Item>
                  <Command.Item
                    onSelect={() =>
                      runCommand(() => window.open(SITE_CONFIG.cvUrl, "_blank"))
                    }
                    className="flex cursor-pointer items-center gap-3 rounded-xl px-3 py-2.5 text-sm data-[selected=true]:bg-muted"
                  >
                    <Download className="h-4 w-4 text-primary" />
                    Download CV
                  </Command.Item>
                </Command.Group>
              </Command.List>
            </Command>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
