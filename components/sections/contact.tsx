"use client";

import { Mail, Linkedin, Github, MessageCircle, MapPin } from "lucide-react";
import { SITE_CONFIG } from "@/lib/utils";
import { Reveal } from "@/components/ui/motion-reveal";

const CONTACT_ITEMS = [
    { label: "Email", value: SITE_CONFIG.email, href: `mailto:${SITE_CONFIG.email}`, icon: Mail },
    { label: "LinkedIn", value: "/in/MantoAriyansyah", href: SITE_CONFIG.linkedin, icon: Linkedin },
    { label: "GitHub", value: "@Mantoariyansyah", href: SITE_CONFIG.github, icon: Github },
    { label: "WhatsApp", value: "Chat directly", href: SITE_CONFIG.whatsapp, icon: MessageCircle },
];

export function Contact() {
    return (
        <section id="contact" className="relative py-16 sm:py-24 lg:py-32">
            <div className="container px-4 sm:px-6 lg:px-8">
                <Reveal className="mx-auto max-w-2xl text-center">
                    <span className="text-xs font-medium uppercase tracking-widest text-primary sm:text-sm">
                        Contact
                    </span>
                    <h2 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
                        Let&apos;s build something great
                    </h2>
                    <p className="mt-3 flex flex-col items-center justify-center gap-1 text-sm text-muted-foreground sm:mt-4 sm:flex-row sm:gap-1.5 sm:text-base">
                        <MapPin className="h-4 w-4 shrink-0" />
                        <span>{SITE_CONFIG.location} · Open to remote work worldwide</span>
                    </p>
                </Reveal>

                <Reveal className="mt-10 mx-auto max-w-2xl sm:mt-14">
                    <div className="divide-y divide-border/60 rounded-2xl border border-border/60 bg-background/50 backdrop-blur-sm overflow-hidden">
                        {CONTACT_ITEMS.map((item) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-3 px-4 py-3.5 transition-colors hover:bg-muted/30 sm:gap-4 sm:px-6 sm:py-4 active:bg-muted/50"
                            >
                                <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary transition-colors group-hover:bg-primary/10 sm:h-10 sm:w-10">
                                    <item.icon className="h-4 w-4 sm:h-[18px] sm:w-[18px]" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium">{item.label}</p>
                                    <p className="text-xs text-muted-foreground truncate sm:text-sm">
                                        {item.value}
                                    </p>
                                </div>
                                <span className="text-sm text-muted-foreground/50 transition-colors group-hover:text-primary">
                                    →
                                </span>
                            </a>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}