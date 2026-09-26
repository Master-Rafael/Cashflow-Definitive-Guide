import { useEffect, useState } from "react";
import { BookOpen, Download, Menu, Printer, X } from "lucide-react";
import { Chapter1 } from "./ch1";
import { Chapter2 } from "./ch2";
import { Chapter3 } from "./ch3";
import { Chapter4 } from "./ch4";
import { Chapter5 } from "./ch5";

const TOC = [
  { id: "portada", n: "00", title: "Portada" },
  { id: "capitulo-1", n: "01", title: "Filosofía: Carrera vs. Vía Rápida" },
  { id: "capitulo-2", n: "02", title: "Componentes del juego" },
  { id: "capitulo-3", n: "03", title: "Reglas paso a paso" },
  { id: "capitulo-4", n: "04", title: "Hoja de balance" },
  { id: "capitulo-5", n: "05", title: "Partida completa" },
];

export function BookApp({ print }: { print?: boolean }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("portada");

  useEffect(() => {
    if (print) return;
    const ids = TOC.map((t) => t.id);
    const obs = new IntersectionObserver(
      (entries) => {
        const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (vis?.target.id) setActive(vis.target.id);
      },
      { rootMargin: "-20% 0px -55% 0px", threshold: [0.1, 0.25] },
    );
    ids.forEach((id) => {
      const el = document.getElementById(id);
      if (el) obs.observe(el);
    });
    return () => obs.disconnect();
  }, [print]);

  return (
    <div className="min-h-dvh overflow-x-hidden bg-paper">
      <header className="no-print sticky top-0 z-30 border-b border-rule/80 bg-paper/95 backdrop-blur-sm">
        <div className="mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3">
          <button
            type="button"
            className="rounded-sm p-2 text-burgundy lg:hidden"
            onClick={() => setOpen(true)}
            aria-label="Abrir índice"
          >
            <Menu className="size-5" />
          </button>
          <a href="#portada" className="font-display text-sm font-semibold tracking-wide text-burgundy sm:text-base">
            Guía Definitiva CASHFLOW
          </a>
          <div className="flex items-center gap-2">
            <a
              href="/guia-definitiva-cashflow.pdf"
              className="inline-flex min-h-11 items-center gap-1.5 rounded-sm bg-burgundy px-3 py-2 text-sm text-paper hover:bg-burgundy-deep"
            >
              <Download className="size-4" />
              <span className="hidden sm:inline">Descargar PDF</span>
              <span className="sm:hidden">PDF</span>
            </a>
            <button
              type="button"
              onClick={() => window.print()}
              className="inline-flex min-h-11 items-center gap-1.5 rounded-sm border border-rule px-3 py-2 text-sm text-ink-soft hover:border-burgundy hover:text-burgundy"
            >
              <Printer className="size-4" />
              <span className="hidden sm:inline">Imprimir</span>
            </button>
          </div>
        </div>
      </header>

      {open && (
        <div className="no-print fixed inset-0 z-40 bg-ink/40 lg:hidden" onClick={() => setOpen(false)}>
          <nav
            className="absolute top-0 left-0 flex h-full w-[min(100%,20rem)] flex-col bg-paper p-5 shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between">
              <p className="font-display font-semibold text-burgundy">Índice</p>
              <button type="button" onClick={() => setOpen(false)} aria-label="Cerrar" className="p-2">
                <X className="size-5" />
              </button>
            </div>
            <TocList active={active} onPick={() => setOpen(false)} />
          </nav>
        </div>
      )}

      <div className="mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-[16rem_1fr]">
        <aside className="no-print hidden lg:block">
          <div className="sticky top-20">
            <p className="font-display text-xs tracking-[0.2em] text-gold uppercase">Índice</p>
            <TocList active={active} />
          </div>
        </aside>

        <main className="min-w-0 max-w-3xl pb-24">
          <section id="portada" className="print-keep scroll-mt-24">
            <Cover />
          </section>
          <section id="capitulo-1" className="print-break mt-20 scroll-mt-24">
            <Chapter1 />
          </section>
          <section id="capitulo-2" className="print-break mt-20 scroll-mt-24">
            <Chapter2 />
          </section>
          <section id="capitulo-3" className="print-break mt-20 scroll-mt-24">
            <Chapter3 />
          </section>
          <section id="capitulo-4" className="print-break mt-20 scroll-mt-24">
            <Chapter4 />
          </section>
          <section id="capitulo-5" className="print-break mt-20 scroll-mt-24">
            <Chapter5 />
          </section>
        </main>
      </div>
    </div>
  );
}

function TocList({ active, onPick }: { active: string; onPick?: () => void }) {
  return (
    <ul className="mt-4 space-y-1">
      {TOC.map((t) => (
        <li key={t.id}>
          <a
            href={`#${t.id}`}
            onClick={onPick}
            className={`flex items-baseline gap-2 rounded-sm px-2 py-2 text-sm ${
              active === t.id ? "bg-burgundy/8 font-semibold text-burgundy" : "text-ink-soft hover:text-ink"
            }`}
          >
            <span className="font-display text-gold tabular-nums">{t.n}</span>
            {t.title}
          </a>
        </li>
      ))}
    </ul>
  );
}

function Cover() {
  return (
    <div className="print-keep overflow-hidden rounded-lg border border-rule bg-paper-2 px-6 py-12 sm:px-10 sm:py-16">
      <p className="font-display text-sm tracking-[0.28em] text-gold uppercase">Manual de aprendizaje</p>
      <h1 className="mt-4 font-display text-4xl leading-tight font-semibold text-burgundy sm:text-6xl">
        Guía Definitiva
        <span className="mt-2 block text-ink">CASHFLOW</span>
      </h1>
      <p className="mt-6 max-w-md font-display text-xl text-ink-soft">
        Cómo salir de la Carrera de la Rata y jugar en la Vía Rápida — reglas, hoja y una partida completa.
      </p>
      <div className="mt-8 flex items-center gap-3 text-sm text-muted">
        <BookOpen className="size-4 text-burgundy" />
        Cinco capítulos · Laboratorio interactivo · PDF descargable
      </div>
      <p className="mt-10 max-w-lg text-sm leading-relaxed text-ink-soft">
        El dinero no es lo más importante de la vida, pero parece afectar todo lo que sí lo es. Esta guía traduce
        el manual original a un lenguaje universal, sin omitir una regla, y añade el oficio que el cartón no puede
        dar solo: practicar la hoja hasta que los números dejen de intimidar.
      </p>
    </div>
  );
}
