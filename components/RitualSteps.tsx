const steps = [
  {
    n: "01",
    title: "Detangle & cleanse",
    body: "Work out shedding with a wide-tooth comb, then cleanse scalp and length with a sulphate-free wash.",
  },
  {
    n: "02",
    title: "Condition & seal",
    body: "Deep condition for 15 minutes under heat, then seal moisture with our Restore Hair Oil.",
  },
  {
    n: "03",
    title: "Install with care",
    body: "Glueless bands, minimal tension. Your install should last 6–8 weeks without strain on your edges.",
  },
  {
    n: "04",
    title: "Nightly wrap",
    body: "Satin bonnet or pillowcase, every night. This alone doubles the life of a bundle.",
  },
];

export default function RitualSteps() {
  return (
    <section id="ritual" className="bg-goddess-plum-deep py-24">
      <div className="container-x">
        <p className="eyebrow text-goddess-gold-light">The Ritual</p>
        <h2 className="font-display mt-2 max-w-xl text-4xl font-semibold text-goddess-blush md:text-5xl">
          Four steps between you and hair that holds.
        </h2>

        <ol className="mt-14 grid grid-cols-1 gap-x-10 gap-y-12 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={s.n} className="relative pl-2">
              <span className="font-display block text-5xl font-semibold text-goddess-gold/40">
                {s.n}
              </span>
              <h3 className="font-display mt-4 text-xl font-semibold text-goddess-pink-light">
                {s.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-goddess-blush/70">
                {s.body}
              </p>
              {i < steps.length - 1 && (
                <span
                  aria-hidden
                  className="absolute right-[-1.25rem] top-6 hidden h-px w-8 bg-gold-line md:block"
                />
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
