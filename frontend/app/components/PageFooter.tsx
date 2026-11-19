"use client";

import Link from "next/link";
import { Zap } from "lucide-react";
import { usePathname } from "next/navigation";

export default function PageFooter() {
  const pathname = usePathname();

  return (
    <footer className="border-t border-border-1 py-8">
      <div className="max-w-7xl mx-auto px-6 flex flex-wrap gap-4 items-center justify-between text-xs text-chrome-dim font-mono">
        <div className="flex flex-wrap items-center gap-2">
          <Zap size={12} className="text-plasma" />
          <span>ops-pilot v0.1.0</span>
          <span className="text-border-2">•</span>
          <span>
            Created by{" "}
            <a
              href="mailto:sanagsa2028@gmail.com"
              className="text-chrome hover:text-plasma transition-colors"
            >
              Sameer Abbas
            </a>
          </span>
          <span className="text-border-2">•</span>
          <span>Apache 2.0 License</span>
        </div>
        <div className="flex items-center gap-4">
          {pathname !== "/help" && (
            <Link href="/help" className="hover:text-plasma transition-colors">
              Help
            </Link>
          )}
          {pathname !== "/contact" && (
            <Link
              href="/contact"
              className="hover:text-plasma transition-colors"
            >
              Contact
            </Link>
          )}
        </div>
      </div>
    </footer>
  );
}
