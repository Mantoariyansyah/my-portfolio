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
        <section id="contact" className="relative py-24 sm:py-32">
            <div className="container">
                <Reveal className="mx-auto max-w-2xl text-center">
                    <span className="text-sm font-medium uppercase tracking-widest text-primary">
                        Contact
                    </span>
                    <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                        Let's build something great
                    </h2>
                    <p className="mt-4 flex items-center justify-center gap-1.5 text-muted-foreground">
                        <MapPin className="h-4 w-4" />
                        {SITE_CONFIG.location} · Open to remote work worldwide
                    </p>
                </Reveal>

                <Reveal className="mt-14 mx-auto max-w-2xl">
                    <div className="divide-y divide-border/60 rounded-2xl border border-border/60 bg-background/50 backdrop-blur-sm">
                        {CONTACT_ITEMS.map((item, index) => (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-4 px-6 py-4 transition-colors hover:bg-muted/30 first:rounded-t-2xl last:rounded-b-2xl group"
                            >
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/5 text-primary transition-colors group-hover:bg-primary/10">
                                    <item.icon className="h-4.5 w-4.5" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <p className="text-sm font-medium">{item.label}</p>
                                    <p className="text-sm text-muted-foreground truncate">
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