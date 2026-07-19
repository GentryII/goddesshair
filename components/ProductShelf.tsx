import { products } from "@/lib/products";
import { buildWhatsAppLink } from "@/lib/site-config";

export default function ProductShelf() {
  return (
    <section id="shelf" className="bg-goddess-blush py-24">
      <div className="container-x mb-12 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end">
        <div>
          <p className="eyebrow text-goddess-pink">The Edit</p>
          <h2 className="font-display mt-2 text-4xl font-semibold text-goddess-plum md:text-5xl">
            Shelf-ready favourites
          </h2>
        </div>
        <p className="max-w-sm text-sm text-goddess-plum/70">
          Every piece is quality-checked before it ships. Tap a product, then
          confirm length, colour and quantity with us on WhatsApp.
        </p>
      </div>

      <div className="scrollbar-none flex gap-6 overflow-x-auto px-6 pb-6 [scrollbar-width:none]">
        {products.map((p, i) => (
          <a
            key={p.id}
            href={buildWhatsAppLink(
              `Hi Goddess Hair! I'm interested in the ${p.name} (${p.length}).`
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={`group relative w-72 shrink-0 rounded-3xl border bg-white p-7 shadow-sm transition-all hover:-translate-y-2 hover:shadow-xl ${
              i % 2 === 0 ? "rotate-[-1.5deg]" : "rotate-[1.5deg]"
            } hover:rotate-0`}
            style={{
              borderColor:
                p.accent === "gold"
                  ? "rgba(212,175,55,0.35)"
                  : "rgba(230,65,122,0.3)",
            }}
          >
            <span
              className={`eyebrow ${
                p.accent === "gold" ? "text-goddess-gold-dim" : "text-goddess-pink"
              }`}
            >
              {p.category}
            </span>
            <h3 className="font-display mt-3 text-2xl font-semibold text-goddess-plum">
              {p.name}
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-goddess-plum/70">
              {p.blurb}
            </p>
            <div className="mt-6 flex items-center justify-between border-t border-goddess-blush-dim pt-4">
              <span className="text-xs tracking-wide text-goddess-plum/60">
                {p.length}
              </span>
              <span
                className={`text-sm font-semibold ${
                  p.accent === "gold" ? "text-goddess-gold-dim" : "text-goddess-pink"
                }`}
              >
                {p.price}
              </span>
            </div>
            <span className="mt-5 inline-block text-xs font-semibold uppercase tracking-widest text-goddess-plum/50 transition-colors group-hover:text-goddess-plum">
              Ask on WhatsApp &rarr;
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
