const quotes = [
  { text: "Three installs later and my edges have never looked better.", who: "Chikondi, Lilongwe" },
  { text: "The wig fit straight out of the bag — no plucking needed.", who: "Thandiwe, Blantyre" },
  { text: "Ordered on WhatsApp before work, picked up by evening.", who: "Asha, Zomba" },
  { text: "Body wave bundle held its curl through an entire wedding weekend.", who: "Precious, Mzuzu" },
  { text: "First time buying hair online and it matched the photos exactly.", who: "Grace, Lilongwe" },
];

export default function Testimonials() {
  const loop = [...quotes, ...quotes];
  return (
    <section id="reviews" className="overflow-hidden bg-goddess-blush py-20">
      <p className="eyebrow container-x mb-10 text-goddess-pink">
        From the Goddess Community
      </p>
      <div className="relative flex w-max animate-drift gap-8">
        {loop.map((q, i) => (
          <figure
            key={i}
            className="w-80 shrink-0 rounded-2xl border border-goddess-gold/20 bg-white px-7 py-6"
          >
            <blockquote className="font-display text-lg leading-snug text-goddess-plum">
              &ldquo;{q.text}&rdquo;
            </blockquote>
            <figcaption className="mt-4 text-xs font-semibold uppercase tracking-widest text-goddess-pink">
              {q.who}
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
