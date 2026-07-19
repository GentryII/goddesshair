import { buildWhatsAppLink } from "@/lib/site-config";

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-goddess-plum">
      {/* signature halo motif */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-16 h-[560px] w-[560px] -translate-x-1/2 animate-shimmer"
      >
        <svg viewBox="0 0 400 400" className="h-full w-full">
          <defs>
            <linearGradient id="haloGold" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F1D375" />
              <stop offset="100%" stopColor="#D4AF37" />
            </linearGradient>
            <linearGradient id="haloPink" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#F7A8C4" />
              <stop offset="100%" stopColor="#E6417A" />
            </linearGradient>
          </defs>
          <circle
            cx="200"
            cy="200"
            r="170"
            fill="none"
            stroke="url(#haloGold)"
            strokeWidth="1.2"
            strokeDasharray="6 10"
            opacity="0.55"
          />
          <circle
            cx="200"
            cy="200"
            r="140"
            fill="none"
            stroke="url(#haloPink)"
            strokeWidth="0.8"
            opacity="0.4"
          />
          <path
            d="M 60 220 A 140 140 0 0 1 340 220"
            fill="none"
            stroke="url(#haloGold)"
            strokeWidth="2.5"
            strokeLinecap="round"
          />
          <path
            d="M 90 250 A 110 110 0 0 1 310 250"
            fill="none"
            stroke="url(#haloPink)"
            strokeWidth="1.5"
            strokeLinecap="round"
            opacity="0.7"
          />
        </svg>
      </div>
      <div className="absolute inset-0 bg-halo-gradient" aria-hidden />

      <div className="container-x relative z-10 flex min-h-[88vh] flex-col items-center justify-center py-28 text-center">
        <p className="eyebrow mb-6 text-goddess-pink-light">
          Bundles &middot; Closures &middot; Wigs &middot; Hair Care
        </p>
        <h1 className="font-display text-6xl font-semibold leading-[1.05] text-goddess-blush md:text-8xl">
          Every strand
          <span className="block text-goddess-gold-light">is a crown.</span>
        </h1>
        <p className="mx-auto mt-8 max-w-xl text-lg font-light leading-relaxed text-goddess-blush/80">
          Goddess Hair sources, tests and hand-finishes bundles, closures and
          wigs so your install looks effortless and lasts. No showroom
          required — browse below, then order straight to WhatsApp.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href={buildWhatsAppLink("Hi Goddess Hair! I'd like to place an order.")}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full bg-goddess-gold px-9 py-3 text-base font-semibold text-goddess-plum-deep shadow-lg shadow-goddess-gold/20 transition-transform hover:scale-105"
          >
            Order on WhatsApp
          </a>
          <a
            href="#shelf"
            className="rounded-full border border-goddess-gold-light/60 px-9 py-3 text-base font-medium text-goddess-blush transition-colors hover:bg-goddess-gold-light/10"
          >
            Browse the Edit
          </a>
        </div>
      </div>
    </section>
  );
}
