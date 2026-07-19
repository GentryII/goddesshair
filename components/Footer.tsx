import { siteConfig } from "@/lib/site-config";

export default function Footer() {
  return (
    <footer className="bg-goddess-plum-deep px-6 py-10">
      <div className="container-x flex flex-col items-center justify-between gap-4 md:flex-row">
        <span className="font-display text-lg tracking-wide text-goddess-gold-light">
          Goddess Hair
        </span>
        <p className="text-sm text-goddess-blush/50">
          &copy; {new Date().getFullYear()} Goddess Hair &middot; {siteConfig.location}
        </p>
        <div className="flex gap-6 text-sm text-goddess-blush/70">
          <a href="#shelf" className="transition-colors hover:text-goddess-gold-light">
            Shop
          </a>
          <a href="#ritual" className="transition-colors hover:text-goddess-gold-light">
            The Ritual
          </a>
          <a
            href={siteConfig.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-goddess-pink-light"
          >
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
}
