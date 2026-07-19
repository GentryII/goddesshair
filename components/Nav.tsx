import Link from "next/link";
import { buildWhatsAppLink } from "@/lib/site-config";

const links = [
  { href: "#shelf", label: "Shop" },
  { href: "#ritual", label: "The Ritual" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit Us" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-goddess-gold/20 bg-goddess-plum-deep/90 backdrop-blur">
      <div className="container-x flex h-16 items-center justify-between">
        <Link href="#top" className="flex items-center gap-2">
          <span className="font-display text-2xl font-semibold tracking-wide text-goddess-gold-light">
            Goddess
          </span>
          <span className="font-display text-2xl font-semibold tracking-wide text-goddess-pink-light">
            Hair
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium tracking-wide text-goddess-blush/80 transition-colors hover:text-goddess-gold-light"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={buildWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full bg-goddess-pink px-5 py-2 text-sm font-semibold text-white shadow-lg shadow-goddess-pink/20 transition-transform hover:scale-105"
        >
          Order on WhatsApp
        </a>
      </div>
    </header>
  );
}
