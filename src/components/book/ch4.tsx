import { FinancialSheet } from "@/components/financial-sheet";
import { Callout, Formula, H2, H3, P, Steps, Ul } from "./ui";

export function Chapter4() {
  return (
    <article>
      <p className="font-display text-sm tracking-[0.22em] text-gold uppercase">Capítulo 4</p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-burgundy sm:text-5xl">
        Gestión avanzada de la hoja de balance
      </h1>
      <p className="mt-3 font-display text-xl italic text-ink-soft">
        Ingresos, gastos, activos, pasivos y el flujo neto a prueba de errores
      </p>

      <H2 id="c4-brujula">La brújula de cuatro cuadrantes</H2>
      <P>
        La hoja no es burocracia. Es un radar. Arriba izquierda: lo que entra. Arriba derecha: el resumen que te
        dice si eres libre. Abajo izquierda: lo que te da de comer. Abajo derecha: lo que te come a ti.
      </P>
      <div className="mt-4 grid gap-3 sm:grid-cols-2">
        <div className="print-keep rounded-sm border border-rule bg-paper p-4">
          <p className="font-display text-sm text-burgundy uppercase">Arriba · Ingresos</p>
          <p className="mt-2 text-sm text-ink-soft">
            Salario (activo: trabajo). Intereses, dividendos, flujos de inmuebles y negocios (pasivo: capital).
          </p>
        </div>
        <div className="print-keep rounded-sm border border-rule bg-paper p-4">
          <p className="font-display text-sm text-burgundy uppercase">Arriba · Gastos</p>
          <p className="mt-2 text-sm text-ink-soft">
            Impuestos, casa, escuela, auto, tarjetas, tienda, otros, hijos, banco. La jaula.
          </p>
        </div>
        <div className="print-keep rounded-sm border border-forest bg-forest/5 p-4">
          <p className="font-display text-sm text-forest uppercase">Abajo · Activos</p>
          <p className="mt-2 text-sm text-ink-soft">
            Cosas que meten dinero. Si no mete, el juego te invita a preguntar si de verdad es un activo.
          </p>
        </div>
        <div className="print-keep rounded-sm border border-burgundy bg-burgundy/5 p-4">
          <p className="font-display text-sm text-burgundy uppercase">Abajo · Pasivos</p>
          <p className="mt-2 text-sm text-ink-soft">
            Cosas que sacan dinero. La casa en la que vives, aquí, es pasivo: la hipoteca sale cada mes.
          </p>
        </div>
      </div>

      <H2 id="c4-formulas">Las siete fórmulas que no puedes fallar</H2>
      <Formula>Ingreso pasivo = Intereses + Dividendos + Flujo inmuebles + Flujo negocios</Formula>
      <Formula>Ingreso total = Salario + Ingreso pasivo</Formula>
      <Formula>Gastos totales = suma de todas las líneas de gasto (hijos incluidos)</Formula>
      <Formula>Flujo mensual (cheque) = Ingreso total − Gastos totales</Formula>
      <Formula>¿Salgo? = Ingreso pasivo {'>'} Gastos totales</Formula>
      <Formula>Liquidación de inmueble = Precio de venta − Hipoteca</Formula>
      <Formula>CCR / ROI anual = (Flujo mensual × 12) ÷ Entrada</Formula>
      <Callout title="La trampa del «casi»" tone="burgundy">
        <p>
          Si el pasivo es IGUAL a los gastos, SIGUES DENTRO. El manual exige mayor. Un maestro con $2.130 de gastos
          y $2.130 de pasivo sigue girando. Necesita $2.131.
        </p>
      </Callout>

      <H2 id="c4-compra-re">Comprar un inmueble — los 9 pasos del manual</H2>
      <P>El único efectivo que pagas es la ENTRADA. La hipoteca ya está descontada en el flujo de la ficha. No hay pago extra de hipoteca.</P>
      <Steps
        items={[
          { n: "1", t: "Activos · tipo", d: "Escribe el tipo (Condo, 4-plex, casa 3/2…)." },
          { n: "2", t: "Activos · entrada", d: "El down payment que pagas ahora." },
          { n: "3", t: "Activos · costo", d: "El precio total del inmueble." },
          { n: "4", t: "Pasivos · hipoteca", d: "Tipo + monto de hipoteca (costo − entrada)." },
          { n: "5", t: "Ingresos · tipo", d: "El mismo nombre, bajo Bienes raíces." },
          { n: "6", t: "Ingresos · flujo", d: "El cash flow de la ficha (puede ser negativo)." },
          { n: "7", t: "Suma al Ingreso pasivo", d: "Lado derecho." },
          { n: "8", t: "Suma al Ingreso total", d: "Lado derecho." },
          { n: "9", t: "Suma al Flujo mensual", d: "Lado derecho. Audita." },
        ]}
      />
      <P>
        Ejemplo del camionero Pat (manual, página 7): Condo, entrada $4.000, costo $40.000, hipoteca $36.000, flujo
        $140. El 4-plex: entrada $20.000, costo $100.000, hipoteca $80.000, flujo $800.
      </P>

      <H2 id="c4-venta-re">Vender un inmueble — los 10 pasos</H2>
      <Steps
        items={[
          { n: "1", t: "Liquidación", d: "Precio − Hipoteca. Si sale negativo, PAGAS al banco. Si sale positivo, COBRAS." },
          { n: "2-4", t: "Borra el activo", d: "Tipo, entrada y costo." },
          { n: "5", t: "Borra el pasivo", d: "Tipo e hipoteca." },
          { n: "6-7", t: "Borra el ingreso", d: "Tipo y flujo bajo Bienes raíces." },
          { n: "8-10", t: "Resta a la derecha", d: "Quita el flujo del Pasivo, del Ingreso total y del Flujo mensual. Audita." },
        ]}
      />

      <H2 id="c4-acciones">Comprar acciones, fondos y CDs</H2>
      <Steps
        items={[
          { n: "1", t: "Símbolo", d: "OK4U, GRO4US, 2BIG, CD…" },
          { n: "2", t: "Número de acciones", d: "Las que pagas ahora." },
          { n: "3", t: "Precio de hoy", d: "Costo por acción." },
          { n: "4", t: "Si hay dividendo", d: "Escríbelo bajo Dividendos, con símbolo y monto." },
          { n: "5-7", t: "Si hay dividendo", d: "Suma al Pasivo, al Ingreso total y al Flujo mensual." },
        ]}
      />
      <P>
        Ficha de ejemplo del manual: OK4U Drug Co., $20, rango $5–$30, sin dividendo, ROI 0%. Solo tú compras;
        todos pueden vender. Pat también tiene 1.000 GRO4US a $30 (sin dividendo) y 10 de 2BIG a $15 con $100 de
        dividendo.
      </P>
      <H3>Vender acciones</H3>
      <P>
        Monto = número × precio de venta. Cobra del banco. Borra símbolo, número y precio. Si pagaba dividendo,
        bórralo de ingresos y réstalo de las tres cifras de la derecha.
      </P>

      <H2 id="c4-bebe-banco">Bebé, préstamo y liquidación — recetas cortas</H2>
      <H3>Bebé</H3>
      <P>
        +1 hijo (máx. 3) → +gasto por hijo a Gastos de hijos → +Gastos totales → −Flujo mensual → audita.
      </P>
      <H3>Préstamo bancario</H3>
      <P>
        +efectivo → +pasivo Bank Loan → +10% en gastos → +Gastos totales → −Flujo mensual → audita. Pago a
        contracorriente: de $1.000 en $1.000.
      </P>
      <H3>Liquidar una deuda entera</H3>
      <P>Pagas el pasivo completo. Quita pasivo y gasto. Recalcula totales y flujo. Audita.</P>

      <H2 id="c4-pat">El ejemplo completo de Pat (fuera de la Carrera)</H2>
      <P>
        El manual muestra a Pat, camionero, YA casi libre. Es el mejor ejercicio de auditoría que existe. Cópialo
        en papel y verifica cada suma:
      </P>
      <Ul
        items={[
          "Salario $2.500 + dividendo 2BIG $100 + Condo $140 + 4-plex $800 + Video/Pinball $1.600.",
          "Ingreso pasivo $2.640. Ingreso total $5.140.",
          "Gastos: impuestos $460, casa $400, auto $80, otros $570, 2 hijos $280, banco $700. Total $2.490.",
          "Flujo mensual $2.650.",
          "¿$2.640 {'>'} $2.490? SÍ. Pat puede voltear la hoja.",
          "Buyout = $2.640 × 100 = $264.000. Meta de flujo en Vía Rápida = $314.000.",
        ]}
      />
      <P>
        Activos: GRO4US 1.000 × $30; 2BIG 10 × $15; Condo entrada $4.000 costo $40.000; 4-plex $20.000 / $100.000;
        Video/Pinball $20.000 / $100.000. Pasivos: casa $38.000, auto $4.000, condo $36.000, 4-plex $80.000,
        Video/Pinball $80.000, préstamo banco $7.000.
      </P>
      <Callout title="Auditoría relámpago" tone="forest">
        <p>
          Hipoteca de un inmueble DEBE ser costo − entrada. Condo: 40.000 − 4.000 = 36.000. 4-plex: 100.000 −
          20.000 = 80.000. Si no cuadra, hay un error de copia. El pago de préstamo bancario DEBE ser 10% del
          pasivo: $7.000 → $700. Si no, hay un error.
        </p>
      </Callout>

      <H2 id="c4-lab">Laboratorio: tu hoja, en vivo</H2>
      <P>
        Elige profesión, compra los mismos activos de Pat, pide prestado, ten hijos, liquida el auto. El recuadro
        «¿Fuera de la Carrera?» no miente. Úsalo para sentir, no solo para leer, la diferencia entre un doodad y un
        4-plex.
      </P>
      <FinancialSheet />

      <H2 id="c4-errores">Los 12 errores de hoja que hunden partidas</H2>
      <Ul
        items={[
          "Olvidar pedir el cheque (se pierde).",
          "Sumar el salario al ingreso pasivo (el salario NO saca de la Carrera).",
          "Anotar la hipoteca de inversión como gasto extra (ya está dentro del flujo de la ficha).",
          "Vender un Condo cuando El Mercado pide Casa 3/2.",
          "Pagar «un poco» de la tarjeta. No está permitido.",
          "Liquidar impuestos u «otros gastos». Imposible.",
          "Olvidar borrar el flujo al vender.",
          "Pedir préstamo en la Vía Rápida. Prohibido.",
          "Salir el mismo turno en que el pasivo acaba de superar los gastos, SIN esperar al inicio del siguiente turno.",
          "Olvidar que 3 hijos es el tope.",
          "Tratar el ahorro inicial como parte del cheque eterno.",
          "No auditar. El ego es el pasivo más caro de la mesa.",
        ]}
      />
    </article>
  );
}
