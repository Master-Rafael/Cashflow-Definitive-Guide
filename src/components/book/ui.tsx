import type { ReactNode } from "react";

export function Callout({
  title,
  children,
  tone = "ink",
}: {
  title: string;
  children: ReactNode;
  tone?: "ink" | "gold" | "forest" | "burgundy";
}) {
  const border =
    tone === "gold"
      ? "border-gold"
      : tone === "forest"
        ? "border-forest"
        : tone === "burgundy"
          ? "border-burgundy"
          : "border-rule";
  return (
    <aside className={`print-keep my-6 rounded-sm border-l-4 ${border} bg-paper-2/80 px-4 py-3`}>
      <p className="font-display text-sm font-semibold tracking-wide text-burgundy uppercase">{title}</p>
      <div className="mt-2 space-y-2 text-ink-soft">{children}</div>
    </aside>
  );
}

export function Steps({ items }: { items: { n: string; t: string; d: string }[] }) {
  return (
    <ol className="my-6 space-y-3">
      {items.map((s) => (
        <li key={s.n} className="print-keep flex gap-3 rounded-sm border border-rule bg-paper px-3 py-3">
          <span className="font-display text-xl font-semibold text-burgundy tabular-nums">{s.n}</span>
          <div>
            <p className="font-semibold text-ink">{s.t}</p>
            <p className="mt-1 text-sm text-ink-soft">{s.d}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}

export function Formula({ children }: { children: ReactNode }) {
  return (
    <p className="print-keep my-4 rounded-sm bg-ink px-4 py-3 text-left font-display text-base break-words text-paper sm:text-center sm:text-lg">
      {children}
    </p>
  );
}

export function H2({ id, children }: { id: string; children: ReactNode }) {
  return (
    <h2 id={id} className="mt-12 scroll-mt-24 font-display text-3xl font-semibold text-burgundy">
      {children}
    </h2>
  );
}

export function H3({ children }: { children: ReactNode }) {
  return <h3 className="mt-8 font-display text-xl font-semibold text-ink">{children}</h3>;
}

export function P({ children }: { children: ReactNode }) {
  return <p className="mt-4 leading-relaxed text-ink-soft">{children}</p>;
}

export function Ul({ items }: { items: ReactNode[] }) {
  return (
    <ul className="mt-3 list-disc space-y-1.5 pl-5 text-ink-soft">
      {items.map((it, i) => (
        <li key={i}>{it}</li>
      ))}
    </ul>
  );
}
