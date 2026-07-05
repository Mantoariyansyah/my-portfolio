export function AnimatedBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-grid-pattern bg-grid opacity-[0.03]" />
      <div className="absolute -left-40 -top-40 h-[32rem] w-[32rem] animate-blob rounded-full bg-primary/20 blur-[120px] dark:bg-primary/10" />
      <div className="absolute -right-32 top-1/3 h-[28rem] w-[28rem] animate-blob rounded-full bg-accent/20 blur-[120px] [animation-delay:4s] dark:bg-accent/10" />
      <div className="absolute bottom-0 left-1/3 h-[24rem] w-[24rem] animate-blob rounded-full bg-primary/10 blur-[120px] [animation-delay:8s]" />
    </div>
  );
}
