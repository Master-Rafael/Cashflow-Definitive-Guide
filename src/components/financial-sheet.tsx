import { useMemo, useState } from "react";
import { professions, type Profession } from "@/data/professions";
import { money } from "@/lib/money";

type AssetRE = { name: string; down: number; cost: number; mortgage: number; cf: number };
type AssetStock = { symbol: string; shares: number; cost: number; div: number };
type AssetBiz = { name: string; down: number; cost: number; mortgage: number; cf: number };

const SAMPLE_DEALS: AssetRE[] = [
  { name: "Condo 2/1 ciudad universitaria", down: 4000, cost: 40000, mortgage: 36000, cf: 140 },
  { name: "Casa 3/2 mercado deprimido", down: 4000, cost: 50000, mortgage: 46000, cf: 200 },
  { name: "¡Gran ganga! Casa 3/2", down: 2000, cost: 45000, mortgage: 43000, cf: 250 },
  { name: "4-plex (ejemplo Pat)", down: 20000, cost: 100000, mortgage: 80000, cf: 800 },
];

export function FinancialSheet() {
  const [pid, setPid] = useState("maestro");
  const base = professions.find((p) => p.id === pid) ?? professions[6];
  const [children, setChildren] = useState(0);
  const [loanK, setLoanK] = useState(0);
  const [paidCar, setPaidCar] = useState(false);
  const [paidCc, setPaidCc] = useState(false);
  const [paidRetail, setPaidRetail] = useState(false);
  const [re, setRe] = useState<AssetRE[]>([]);
  const [stocks, setStocks] = useState<AssetStock[]>([]);
  const [biz, setBiz] = useState<AssetBiz[]>([]);
  const [cashAdj, setCashAdj] = useState(0);

  const calc = useMemo(() => compute(base, { children, loanK, paidCar, paidCc, paidRetail, re, stocks, biz }), [
    base,
    children,
    loanK,
    paidCar,
    paidCc,
    paidRetail,
    re,
    stocks,
    biz,
  ]);

  const startCash = base.cashFlow + base.savings + cashAdj;
  const free = calc.passive > calc.totalExp;

  function resetExtras() {
    setChildren(0);
    setLoanK(0);
    setPaidCar(false);
    setPaidCc(false);
    setPaidRetail(false);
    setRe([]);
    setStocks([]);
    setBiz([]);
    setCashAdj(0);
  }

  return (
    <div className="print-keep rounded-lg border border-rule bg-paper-2/60 p-4 sm:p-6">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-display text-sm tracking-[0.18em] text-burgundy uppercase">Laboratorio vivo</p>
          <h3 className="mt-1 font-display text-2xl font-semibold text-ink">Hoja de Juego interactiva</h3>
          <p className="mt-1 max-w-xl text-ink-soft">
            Elige una profesión, compra activos, pide prestado o ten un hijo. Los totales se recalculan como lo haría tu auditor.
          </p>
        </div>
        <button
          type="button"
          onClick={resetExtras}
          className="rounded-sm border border-rule px-3 py-2 text-sm text-ink-soft hover:border-burgundy hover:text-burgundy"
        >
          Reiniciar hoja
        </button>
      </div>

      <label className="mt-5 block text-sm text-muted">
        Profesión
        <select
          className="mt-1 w-full rounded-sm border border-rule bg-paper px-3 py-2 text-ink"
          value={pid}
          onChange={(e) => {
            setPid(e.target.value);
            resetExtras();
          }}
        >
          {professions.map((p) => (
            <option key={p.id} value={p.id}>
              {p.name} — salario {money(p.salary)} / meta {money(p.totalExpenses)}
            </option>
          ))}
        </select>
      </label>

      <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <Stat label="Ingreso pasivo" value={money(calc.passive)} tone={calc.passive > 0 ? "good" : "plain"} />
        <Stat label="Gastos totales" value={money(calc.totalExp)} />
        <Stat label="Flujo mensual (cheque)" value={money(calc.cf)} tone={calc.cf >= 0 ? "good" : "bad"} />
        <Stat
          label="¿Fuera de la Carrera?"
          value={free ? "SÍ — puedes salir" : "Aún no"}
          tone={free ? "good" : "plain"}
        />
      </div>

      <p className="mt-3 rounded-sm bg-burgundy/8 px-3 py-2 text-sm text-ink-soft">
        Fórmula maestra:{" "}
        <span className="font-semibold text-ink">
          Ingreso pasivo {money(calc.passive)} {free ? ">" : "≤"} Gastos totales {money(calc.totalExp)}
        </span>
        . Te faltan {money(Math.max(0, calc.totalExp - calc.passive + 1))} de flujo para cruzar (el pasivo debe ser{" "}
        <em>mayor</em>, no igual).
      </p>

      <div className="mt-6 grid gap-6 lg:grid-cols-2">
        <section>
          <h4 className="font-display text-lg font-semibold">Ingresos</h4>
          <Row k="Salario" v={money(base.salary)} />
          <Row k="Intereses / dividendos" v={money(calc.div)} />
          <Row k="Bienes raíces (flujo)" v={money(calc.reCf)} />
          <Row k="Negocios (flujo)" v={money(calc.bizCf)} />
          <Row k="Ingreso pasivo" v={money(calc.passive)} strong />
          <Row k="Ingreso total" v={money(calc.totalInc)} strong />
        </section>
        <section>
          <h4 className="font-display text-lg font-semibold">Gastos</h4>
          <Row k="Impuestos" v={money(base.taxes)} />
          <Row k="Hipoteca de la casa" v={money(base.homePayment)} />
          <Row k="Préstamo escolar" v={money(base.schoolPayment)} />
          <Row k="Auto" v={paidCar ? money(0) : money(base.carPayment)} />
          <Row k="Tarjetas" v={paidCc ? money(0) : money(base.creditPayment)} />
          <Row k="Tienda" v={paidRetail ? money(0) : money(base.retailPayment)} />
          <Row k="Otros gastos" v={money(base.otherExpenses)} />
          <Row k={`Hijos (${children} × ${money(base.perChild)})`} v={money(children * base.perChild)} />
          <Row k={`Préstamo bancario (${loanK} × $1.000)`} v={money(loanK * 100)} />
          <Row k="Gastos totales" v={money(calc.totalExp)} strong />
          <Row k="Flujo mensual" v={money(calc.cf)} strong />
        </section>
      </div>

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <section className="rounded-sm border border-rule bg-paper p-4">
          <h4 className="font-display font-semibold">Vida (hijos y deudas)</h4>
          <div className="mt-3 flex flex-wrap gap-2">
            <button
              type="button"
              className="rounded-sm bg-burgundy px-3 py-2 text-sm text-paper hover:bg-burgundy-deep"
              onClick={() => setChildren((c) => Math.min(3, c + 1))}
            >
              + Bebé (máx. 3)
            </button>
            <button
              type="button"
              className="rounded-sm border border-rule px-3 py-2 text-sm"
              onClick={() => setLoanK((k) => k + 1)}
            >
              Pedir $1.000 al banco
            </button>
            {loanK > 0 && (
              <button
                type="button"
                className="rounded-sm border border-rule px-3 py-2 text-sm"
                onClick={() => setLoanK((k) => Math.max(0, k - 1))}
              >
                Pagar $1.000 de préstamo
              </button>
            )}
          </div>
          <div className="mt-3 space-y-2 text-sm">
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={paidCar} onChange={(e) => setPaidCar(e.target.checked)} />
              Liquidar auto entero ({money(base.carLoans)}) — ahorras {money(base.carPayment)}/mes
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={paidCc} onChange={(e) => setPaidCc(e.target.checked)} />
              Liquidar tarjetas enteras ({money(base.creditCards)}) — ahorras {money(base.creditPayment)}/mes
            </label>
            <label className="flex items-center gap-2">
              <input type="checkbox" checked={paidRetail} onChange={(e) => setPaidRetail(e.target.checked)} />
              Liquidar tienda entera ({money(base.retailDebt)}) — ahorras {money(base.retailPayment)}/mes
            </label>
            <p className="text-muted">
              Impuestos, «otros gastos» y gastos de hijos NO se pueden liquidar. Hipoteca de vivienda y préstamo
              escolar tampoco se reducen a medias: o pagas el total, o siguen.
            </p>
          </div>
        </section>

        <section className="rounded-sm border border-rule bg-paper p-4">
          <h4 className="font-display font-semibold">Comprar un activo</h4>
          <p className="mt-1 text-sm text-ink-soft">El efectivo inicial de esta profesión es {money(startCash)} (cheque + ahorro).</p>
          <div className="mt-3 flex flex-col gap-2">
            {SAMPLE_DEALS.map((d) => (
              <button
                key={d.name}
                type="button"
                className="rounded-sm border border-rule px-3 py-2 text-left text-sm hover:border-forest hover:bg-forest/5"
                onClick={() => {
                  setRe((list) => [...list, d]);
                  setCashAdj((c) => c - d.down);
                }}
              >
                <span className="font-semibold">{d.name}</span>
                <span className="block text-muted">
                  Entrada {money(d.down)} · Flujo {money(d.cf)}/mes
                </span>
              </button>
            ))}
            <button
              type="button"
              className="rounded-sm border border-rule px-3 py-2 text-left text-sm hover:border-forest hover:bg-forest/5"
              onClick={() => {
                setStocks((list) => [...list, { symbol: "2BIG", shares: 10, cost: 15, div: 100 }]);
                setCashAdj((c) => c - 150);
              }}
            >
              <span className="font-semibold">10 acciones 2BIG a $15 (ejemplo Pat)</span>
              <span className="block text-muted">Costo $150 · Dividendo {money(100)}/mes</span>
            </button>
            <button
              type="button"
              className="rounded-sm border border-rule px-3 py-2 text-left text-sm hover:border-forest hover:bg-forest/5"
              onClick={() => {
                setBiz((list) => [
                  ...list,
                  { name: "Video/Pinball", down: 20000, cost: 100000, mortgage: 80000, cf: 1600 },
                ]);
                setCashAdj((c) => c - 20000);
              }}
            >
              <span className="font-semibold">Negocio Video/Pinball (ejemplo Pat)</span>
              <span className="block text-muted">Entrada $20.000 · Flujo $1.600/mes</span>
            </button>
          </div>
        </section>
      </div>

      {(re.length > 0 || stocks.length > 0 || biz.length > 0) && (
        <section className="mt-6">
          <h4 className="font-display text-lg font-semibold">Activos en la hoja</h4>
          <ul className="mt-2 space-y-1 text-sm">
            {re.map((a, i) => (
              <li key={`re-${i}`} className="flex justify-between gap-3 border-b border-rule/70 py-1">
                <span>
                  {a.name} · entrada {money(a.down)} · hipoteca {money(a.mortgage)}
                </span>
                <span className="tabular-nums text-forest">{money(a.cf)}/mes</span>
              </li>
            ))}
            {stocks.map((s, i) => (
              <li key={`st-${i}`} className="flex justify-between gap-3 border-b border-rule/70 py-1">
                <span>
                  {s.symbol} · {s.shares} acciones · {money(s.cost)} c/u
                </span>
                <span className="tabular-nums text-forest">{money(s.div)}/mes</span>
              </li>
            ))}
            {biz.map((b, i) => (
              <li key={`bz-${i}`} className="flex justify-between gap-3 border-b border-rule/70 py-1">
                <span>
                  {b.name} · entrada {money(b.down)} · pasivo {money(b.mortgage)}
                </span>
                <span className="tabular-nums text-forest">{money(b.cf)}/mes</span>
              </li>
            ))}
          </ul>
        </section>
      )}

      {free && (
        <div className="mt-6 rounded-sm border border-forest bg-forest/8 p-4">
          <p className="font-display text-xl font-semibold text-forest">Estás fuera de la Carrera de la Rata</p>
          <p className="mt-2 text-ink-soft">
            En tu próximo turno puedes voltear la hoja. El banco te entrega{" "}
            <strong className="text-ink">{money(calc.passive * 100)}</strong> (100 × tu ingreso pasivo). Ese es tu
            Ingreso inicial del Día de CASHFLOW. La meta para ganar por flujo en la Vía Rápida es{" "}
            <strong className="text-ink">{money(calc.passive * 100 + 50000)}</strong>.
          </p>
        </div>
      )}
    </div>
  );
}

function compute(
  p: Profession,
  s: {
    children: number;
    loanK: number;
    paidCar: boolean;
    paidCc: boolean;
    paidRetail: boolean;
    re: AssetRE[];
    stocks: AssetStock[];
    biz: AssetBiz[];
  },
) {
  const reCf = s.re.reduce((a, x) => a + x.cf, 0);
  const bizCf = s.biz.reduce((a, x) => a + x.cf, 0);
  const div = s.stocks.reduce((a, x) => a + x.div, 0);
  const passive = div + reCf + bizCf;
  const childExp = s.children * p.perChild;
  const car = s.paidCar ? 0 : p.carPayment;
  const cc = s.paidCc ? 0 : p.creditPayment;
  const retail = s.paidRetail ? 0 : p.retailPayment;
  const bank = s.loanK * 100;
  const totalExp =
    p.taxes + p.homePayment + p.schoolPayment + car + cc + retail + p.otherExpenses + childExp + bank;
  const totalInc = p.salary + passive;
  const cf = totalInc - totalExp;
  return { reCf, bizCf, div, passive, totalExp, totalInc, cf, childExp };
}

function Row({ k, v, strong }: { k: string; v: string; strong?: boolean }) {
  return (
    <div className={`flex justify-between gap-4 border-b border-rule/60 py-1.5 text-sm ${strong ? "font-semibold" : ""}`}>
      <span className="text-ink-soft">{k}</span>
      <span className="tabular-nums">{v}</span>
    </div>
  );
}

function Stat({ label, value, tone = "plain" }: { label: string; value: string; tone?: "plain" | "good" | "bad" }) {
  const color = tone === "good" ? "text-forest" : tone === "bad" ? "text-danger" : "text-ink";
  return (
    <div className="rounded-sm border border-rule bg-paper px-3 py-3">
      <p className="text-xs tracking-wide text-muted uppercase">{label}</p>
      <p className={`mt-1 font-display text-xl font-semibold tabular-nums ${color}`}>{value}</p>
    </div>
  );
}
