import { professions } from "@/data/professions";
import { bigDeals, doodads, marketCards, smallDeals } from "@/data/cards";
import { fastBusinesses, fastDreams, ratRaceSpaces } from "@/data/fast-track";
import { glossary } from "@/data/glossary";
import { money } from "@/lib/money";
import { Callout, H2, H3, P, Ul } from "./ui";

export function Chapter2() {
  return (
    <article>
      <p className="font-display text-sm tracking-[0.22em] text-gold uppercase">Capítulo 2</p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-burgundy sm:text-5xl">
        Componentes del juego
      </h1>
      <p className="mt-3 font-display text-xl italic text-ink-soft">
        Tablero, mazos, profesiones y la hoja que decide si eres libre
      </p>

      <H2 id="c2-caja">Qué hay en la caja (edición clásica)</H2>
      <Ul
        items={[
          "Tablero grande con dos pistas: Carrera de la Rata (círculo interior, 24 casillas) y Vía Rápida (anillo exterior).",
          "12 cartas de Profesión: Conserje, Mecánico, Secretaria, Camionero, Policía, Enfermera, Maestro K-12, Gerente, Ingeniero, Abogado, Piloto, Médico.",
          "Mazos: Oportunidad (Negocios Pequeños + Negocios Grandes), El Mercado, Cosas (Doodads).",
          "Hojas de Juego de doble cara (Carrera / «¡Felicitaciones!» Vía Rápida), lápices, goma.",
          "6 ratas, 6 quesos y fichas de color (unas 10–12 por color) para marcar sueños y negocios.",
          "2 o 3 dados. Dinero de juguete en denominaciones de $10, $20, $50, $100, $500, $1.000, $5.000, $10.000, $100.000, $500.000 y $1.000.000.",
        ]}
      />
      <P>
        Conteos típicos de la 2.ª edición inglesa: 56 Pequeños, 42 Grandes, 42 Mercado, 42 Cosas. La 4.ª edición
        (2016) compactó a 38 / 36 / 40 / 42. Las reglas no cambian: cambia el grosor del mazo. Esta guía cubre el
        sistema de la edición clásica del manual adjunto (G101CT15).
      </P>

      <H2 id="c2-roles">Los dos oficios de la mesa: Banquero y Auditor</H2>
      <H3>El Banquero</H3>
      <P>
        Un jugador (o un no-jugador) bueno con números. Paga y recibe TODO el dinero entre banco y jugadores.
        Concede préstamos. Si también juega, su efectivo personal vive en un montón SEPARADO del banco. Mezclarlos
        es el error número uno de las mesas principiantes.
      </P>
      <H3>El Auditor</H3>
      <P>
        La persona a tu DERECHA. Cada vez que cambias un número de tu hoja, el auditor revisa. Si hay que
        corregir, pide una pausa. No es policía: es el amigo que te impide celebrar una libertad falsa. El juego
        enseña contabilidad; la contabilidad descuidada te deja «rico» en la hoja y pobre en la caja.
      </P>

      <H2 id="c2-piezas">Rata, queso y fichas</H2>
      <Ul
        items={[
          "La RATA es tu posición. Empieza en la flecha «Start Here / Partida» de la Carrera. Al salir, se coloca en «Enter Here / Entrada» de la Vía Rápida.",
          "El QUESO marca tu Sueño. Se pone al inicio en una casilla rosa. Dos o más jugadores PUEDEN elegir el mismo sueño: considera el riesgo/recompensa, porque cada visita ajena encarece el sueño un 100% de su costo original.",
          "Las FICHAS de tu color marcan negocios y sueños comprados en la Vía Rápida, y a veces sirven para contar turnos de Caridad (3) o Despedido (2).",
        ]}
      />
      <P>
        Caer en la misma casilla que otro jugador NO tiene efecto. No hay «visita», no hay peaje, no hay alianza.
      </P>

      <H2 id="c2-pista">Las 24 casillas de la Carrera de la Rata</H2>
      <P>
        Se recorre en el sentido de las agujas del reloj. Un dado por turno (salvo Caridad). Hay 12 Oportunidades,
        4 Cosas, 3 Mercados, 2 Cheques de pago, 1 Caridad, 1 Bebé y 1 Despedido.
      </P>
      <ol className="mt-4 grid gap-2 sm:grid-cols-2">
        {ratRaceSpaces.map((s) => (
          <li
            key={s.n}
            className="print-keep flex items-center gap-3 rounded-sm border border-rule bg-paper px-3 py-2 text-sm"
          >
            <span className="font-display w-6 text-burgundy tabular-nums">{s.n}</span>
            <span className="font-semibold">{s.name}</span>
            <span className="ml-auto text-muted">{s.tag}</span>
          </li>
        ))}
      </ol>

      <H2 id="c2-profesiones">Las 12 profesiones — copia exacta, omitiendo ceros</H2>
      <P>
        Se barajan y se reparte una, boca abajo, a cada jugador. Luego se copia a la Hoja de Juego exactamente
        como está escrita, omitiendo los ceros de los espacios vacíos. Todos empiezan con 0 hijos, 0 préstamo
        bancario y 0 pago de préstamo bancario. El efectivo inicial es Cheque de pago (flujo mensual) + Ahorro. El
        ahorro se borra de la hoja al recibirlo: no vuelve a pagarse.
      </P>
      <div className="mt-4 max-w-full overflow-x-auto">
        <table className="w-full min-w-[640px] border-collapse text-left text-sm">
          <thead>
            <tr className="border-b border-rule font-display text-burgundy">
              <th className="py-2 pr-2">Profesión</th>
              <th className="py-2 pr-2">Salario</th>
              <th className="py-2 pr-2">Gastos</th>
              <th className="py-2 pr-2">Cheque</th>
              <th className="py-2 pr-2">Ahorro</th>
              <th className="py-2 pr-2">Inicio</th>
              <th className="py-2">Hijo</th>
            </tr>
          </thead>
          <tbody>
            {professions.map((p) => (
              <tr key={p.id} className="border-b border-rule/70">
                <td className="py-2 pr-2 font-semibold">{p.name}</td>
                <td className="py-2 pr-2 tabular-nums">{money(p.salary)}</td>
                <td className="py-2 pr-2 tabular-nums">{money(p.totalExpenses)}</td>
                <td className="py-2 pr-2 tabular-nums">{money(p.cashFlow)}</td>
                <td className="py-2 pr-2 tabular-nums">{money(p.savings)}</td>
                <td className="py-2 pr-2 tabular-nums">{money(p.cashFlow + p.savings)}</td>
                <td className="py-2 tabular-nums">{money(p.perChild)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="mt-2 text-sm text-muted">
        Inicio = flujo mensual + ahorro (el dinero que el banquero te entrega en el minuto cero).
      </p>

      <div className="mt-6 space-y-4">
        {professions.map((p) => (
          <details key={p.id} className="print-keep rounded-sm border border-rule bg-paper px-4 py-3">
            <summary className="cursor-pointer font-display font-semibold">
              {p.name} ({p.english}) — ficha completa
            </summary>
            <div className="mt-3 grid gap-4 text-sm sm:grid-cols-2">
              <ul className="space-y-1 text-ink-soft">
                <li>Salario {money(p.salary)}</li>
                <li>Impuestos {money(p.taxes)}</li>
                <li>Hipoteca vivienda {money(p.homePayment)} (pasivo {money(p.homeMortgage)})</li>
                <li>Préstamo escolar {money(p.schoolPayment)} (pasivo {money(p.schoolLoans)})</li>
                <li>Auto {money(p.carPayment)} (pasivo {money(p.carLoans)})</li>
                <li>Tarjetas {money(p.creditPayment)} (pasivo {money(p.creditCards)})</li>
                <li>Tienda {money(p.retailPayment)} (pasivo {money(p.retailDebt)})</li>
                <li>Otros gastos {money(p.otherExpenses)}</li>
              </ul>
              <div>
                <p className="text-ink-soft">
                  Gastos totales {money(p.totalExpenses)} · Flujo {money(p.cashFlow)} · Ahorro {money(p.savings)} ·
                  Por hijo {money(p.perChild)}
                </p>
                <p className="mt-2 text-ink-soft">{p.insight}</p>
              </div>
            </div>
          </details>
        ))}
      </div>
      <Callout title="El médico, cifra por cifra del manual oficial" tone="burgundy">
        <p>
          Salario $13.200. Impuestos $3.420. Hipoteca $1.900 ($202.000). Escolar $750 ($150.000). Auto $380
          ($19.000). Tarjetas $270 ($9.000). Tienda $50 ($1.000). Otros $2.880. Totales $9.650. Cheque $3.550.
          Ahorro $400. Por hijo $640. Ingreso pasivo inicial: 0. Así se copia, omitiendo ceros.
        </p>
      </Callout>

      <H2 id="c2-hoja">Anatomía de la Hoja de Juego</H2>
      <P>
        Un lado es Carrera de la Rata (Estado de resultados arriba, Balance abajo). El reverso, titulado
        «¡Felicitaciones!», es la Vía Rápida. No mezcles lados.
      </P>
      <H3>Estado de resultados (arriba)</H3>
      <Ul
        items={[
          "Ingresos: Salario, Intereses, Dividendos, Bienes raíces (flujo), Negocios (flujo).",
          "Ingreso pasivo = intereses + dividendos + flujos de inmuebles y negocios.",
          "Ingreso total = salario + ingreso pasivo.",
          "Gastos: impuestos, hipoteca vivienda, escolar, auto, tarjetas, tienda, otros, hijos, préstamo bancario.",
          "Flujo mensual (cheque de pago) = Ingreso total − Gastos totales.",
        ]}
      />
      <H3>Balance (abajo)</H3>
      <Ul
        items={[
          "Activos: ahorro (solo al inicio), acciones/fondos/CDs (símbolo, nº, costo), inmuebles (tipo, entrada, costo), negocios (tipo, entrada, costo).",
          "Pasivos: hipoteca vivienda, escolar, auto, tarjetas, tienda, hipotecas de inversión, pasivos de negocio, préstamo bancario.",
        ]}
      />
      <P>
        El efectivo en mano NO hace falta anotarlo en el balance (el manual lo dice: en la vida real sí estaría;
        para jugar, el montón de billetes basta). Sí hay que anotar cada activo y cada pasivo.
      </P>

      <H2 id="c2-mazos">Los cuatro mazos de la Carrera</H2>
      <H3>Oportunidad = Negocios Pequeños + Negocios Grandes</H3>
      <P>
        Al caer en Oportunidad ELIGES un mazo. El Pequeño más caro cuesta $5.000 de entrada. Los Grandes empiezan
        en $6.000. Lees en voz alta. Algunas fichas permiten que OTROS jugadores también compren o vendan. La
        ficha caduca cuando el siguiente jugador mueve. Se coloca al fondo del mazo.
      </P>
      <p className="mt-4 text-sm text-muted">
        {smallDeals.length} negocios pequeños catalogados · {bigDeals.length} negocios grandes
      </p>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {smallDeals.map((d) => (
          <div key={d.title} className="print-keep rounded-sm border border-rule bg-paper p-3 text-sm">
            <p className="font-semibold text-ink">{d.title}</p>
            <p className="mt-1 text-ink-soft">{d.story}</p>
            <p className="mt-2 tabular-nums text-forest">
              {d.down != null && <>Entrada {money(d.down)} · </>}
              {d.cost != null && <>Costo {money(d.cost)} · </>}
              {d.mortgage != null && <>Hipoteca {money(d.mortgage)} · </>}
              {d.cashFlow != null && <>Flujo {money(d.cashFlow)}</>}
              {d.symbol && (
                <>
                  {d.symbol} @ {d.price != null ? money(d.price) : "—"} {d.range && `· ${d.range}`}
                  {d.dividend != null && ` · div. ${money(d.dividend)}`}
                </>
              )}
            </p>
            <p className="mt-1 text-muted">{d.rule}</p>
          </div>
        ))}
      </div>

      <H3>Negocios Grandes</H3>
      <div className="mt-3 grid gap-3 md:grid-cols-2">
        {bigDeals.map((d) => (
          <div key={d.title} className="print-keep rounded-sm border border-rule bg-paper p-3 text-sm">
            <p className="font-semibold">{d.title}</p>
            <p className="mt-1 text-ink-soft">{d.story}</p>
            <p className="mt-2 tabular-nums text-forest">
              Entrada {money(d.down)} · Costo {money(d.cost)} · Hipoteca {money(d.mortgage)} · Flujo {money(d.cashFlow)}
              {d.roi && ` · ${d.roi}`}
            </p>
            <p className="mt-1 text-muted">{d.rule}</p>
          </div>
        ))}
      </div>

      <H3>El Mercado</H3>
      <P>
        Se lee en voz alta. TODOS los que tengan el activo EXACTO pueden vender al precio dicho. El banco paga en
        nombre del comprador. «Condo» no es «casa 3/2». «OK4U» no es «MYT4U».
      </P>
      <div className="mt-3 space-y-2">
        {marketCards.map((m) => (
          <div key={m.title} className="print-keep rounded-sm border border-rule bg-paper px-3 py-2 text-sm">
            <p className="font-semibold">{m.title}</p>
            <p className="text-ink-soft">{m.story}</p>
            <p className="mt-1 text-muted">{m.effect}</p>
          </div>
        ))}
      </div>

      <H3>Cosas (Doodads) — obligatorias</H3>
      <P>
        Gastos inesperados o innecesarios. No se rechazan. Si no hay efectivo, se pide préstamo bancario (si no
        estás en bancarrota). La ficha va al fondo.
      </P>
      <div className="mt-3 columns-1 gap-2 sm:columns-2">
        {doodads.map((d) => (
          <p key={d.title} className="print-keep mb-2 break-inside-avoid rounded-sm border border-rule bg-paper px-3 py-2 text-sm">
            <span className="font-semibold">{d.title}</span>
            <span className="float-right tabular-nums text-burgundy">{money(d.pay)}</span>
            {d.note && <span className="mt-1 block text-muted">{d.note}</span>}
          </p>
        ))}
      </div>

      <H2 id="c2-via-comp">La Vía Rápida: negocios y sueños</H2>
      <H3>Negocios verdes</H3>
      <P>
        Caes, pagas la entrada, pones una ficha de tu color. Ese negocio deja de estar disponible (en la edición
        clásica del manual). Algunas casillas piden tirar un dado: si fallas, otro puede intentarlo después; si
        aciertas, se cierra.
      </P>
      <div className="mt-3 max-w-full overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-rule font-display text-burgundy">
              <th className="py-2 pr-2 text-left">Negocio</th>
              <th className="py-2 pr-2 text-left">Entrada</th>
              <th className="py-2 pr-2 text-left">Flujo/mes</th>
              <th className="py-2 text-left">CCR</th>
            </tr>
          </thead>
          <tbody>
            {fastBusinesses.map((b) => (
              <tr key={b.name} className="border-b border-rule/70">
                <td className="py-2 pr-2">
                  {b.name}
                  {b.dice && <span className="block text-xs text-muted">{b.dice}</span>}
                </td>
                <td className="py-2 pr-2 tabular-nums">{money(b.down)}</td>
                <td className="py-2 pr-2 tabular-nums">{money(b.cashFlow)}</td>
                <td className="py-2">{b.ccr}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <H3>Sueños (casillas rosa)</H3>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {fastDreams.map((d) => (
          <div key={d.name} className="print-keep rounded-sm border border-rule bg-paper p-3 text-sm">
            <p className="font-semibold">{d.name}</p>
            <p className="text-burgundy tabular-nums">{money(d.cost)}</p>
            <p className="mt-1 text-ink-soft">{d.story}</p>
          </div>
        ))}
      </div>
      <P>
        Otras casillas de la Vía Rápida: Día de CASHFLOW (cobras aunque olvides pedirlo), Caridad ($100.000 por 1,
        2 o 3 dados el resto del juego), Auditoría fiscal (½ del efectivo), Divorcio (todo el efectivo), Pleito
        legal (½ del efectivo según el manual inglés; ver variantes en el Capítulo 3).
      </P>

      <H2 id="c2-glosario">Glosario de términos CASHFLOW</H2>
      {glossary.map((g) => (
        <div key={g.letter} className="mt-4">
          <p className="font-display text-2xl text-gold">{g.letter}</p>
          {g.terms.map((t) => (
            <p key={t.term} className="mt-2 text-sm text-ink-soft">
              <strong className="text-ink">{t.term}. </strong>
              {t.def}
            </p>
          ))}
        </div>
      ))}
    </article>
  );
}
