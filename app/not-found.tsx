import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-6 px-6 text-center">
      <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-7xl font-bold text-transparent">
        404
      </span>
      <h1 className="text-2xl font-semibold">Page not found</h1>
      <p className="max-w-sm text-muted-foreground">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link href="/">
        <Button variant="gradient" size="lg">
          Back to home
        </Button>
      </Link>
    </div>
  );
}
