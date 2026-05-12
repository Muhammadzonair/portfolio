import { socialLinks } from "@/lib/site-data";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="border-t border-white/10 px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-6 md:flex-row md:items-center md:justify-between">
        <p className="text-sm text-slate-400">
          © {new Date().getFullYear()} Muhammad Zonair. Crafted with motion, 3D, and care.
        </p>

        <div className="flex items-center gap-3">
          {socialLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/10 bg-white/5 text-slate-200 transition hover:border-cyan-300/40 hover:bg-white/10"
            >
              <link.icon className="h-4 w-4" />
            </Link>
          ))}
          <Link
            href="#home"
            className="inline-flex h-10 items-center justify-center rounded-full border border-cyan-300/30 bg-gradient-to-r from-indigo-500 to-cyan-400 px-4 text-sm font-medium text-white"
          >
            Back to top
          </Link>
        </div>
      </div>
    </footer>
  );
}
