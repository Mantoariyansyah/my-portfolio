"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download, ArrowDown, FolderGit2 } from "lucide-react";
import { SOCIAL_LINKS } from "@/constants/data";
import { SITE_CONFIG, scrollToSection } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { MagneticButton } from "@/components/ui/magnetic-button";
import { TextReveal } from "@/components/ui/motion-reveal";

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden pt-24 pb-20"
    >
      <div className="container grid items-center gap-16 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="flex flex-col items-center text-center lg:items-start lg:text-left">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-4 py-1.5 text-sm backdrop-blur-sm"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-500" />
            </span>
            Available for freelance work
          </motion.div>

          <h1 className="text-4xl font-bold leading-[1.1] tracking-tight sm:text-5xl lg:text-6xl xl:text-6xl">
            <TextReveal text="Manto Ariyansyah" />
            <span className="mt-2 block bg-gradient-to-r from-primary via-accent to-primary bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient-move">
              Frontend Developer
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-6 max-w-xl text-balance text-base text-muted-foreground sm:text-lg"
          >
           I build fast, responsive, and accessible web applications with modern frontend technologies.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="mt-9 flex flex-col gap-4 sm:flex-row"
          >
            <MagneticButton>
              <a href={SITE_CONFIG.cvUrl} download>
                <Button variant="gradient" size="lg" className="gap-2">
                  <Download className="h-4 w-4" />
                  Download CV
                </Button>
              </a>
            </MagneticButton>
            <MagneticButton>
              <Button
                variant="outline"
                size="lg"
                className="gap-2"
                onClick={() => scrollToSection("projects")}
              >
                <FolderGit2 className="h-4 w-4" />
                View Projects
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.85 }}
            className="mt-10 flex items-center gap-3"
          >
            {SOCIAL_LINKS.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="flex h-11 w-11 items-center justify-center rounded-2xl border border-border text-muted-foreground transition-all hover:-translate-y-1 hover:border-primary/40 hover:text-primary hover:shadow-lg hover:shadow-primary/10"
              >
                <social.icon className="h-4 w-4" />
              </a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="relative mx-auto aspect-square w-full max-w-md"
        >
          <div className="relative h-full w-full overflow-hidden rounded-[2.5rem] border border-white/20 bg-card/40 shadow-2xl backdrop-blur-sm">
            <Image
              src="/images/fotoportfolio.png"
              alt="Kai Aditya, Frontend Developer"
              fill
              priority
              sizes="(max-width: 768px) 90vw, 400px"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>

      <motion.button
        onClick={() => scrollToSection("about")}
        aria-label="Scroll to About section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 8, 0] }}
        transition={{ opacity: { delay: 1 }, y: { duration: 1.8, repeat: Infinity } }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-muted-foreground sm:flex"
      >
        <span className="text-xs tracking-widest">SCROLL</span>
        <ArrowDown className="h-4 w-4" />
      </motion.button>
    </section>
  );
}