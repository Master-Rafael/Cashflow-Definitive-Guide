import { Callout, Formula, H2, H3, P, Steps, Ul } from "./ui";

export function Chapter1() {
  return (
    <article>
      <p className="font-display text-sm tracking-[0.22em] text-gold uppercase">Capítulo 1</p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-burgundy sm:text-5xl">
        Introducción y filosofía financiera
      </h1>
      <p className="mt-3 font-display text-xl italic text-ink-soft">
        La Carrera de la Rata frente a la Vía Rápida
      </p>

      <blockquote className="mt-8 border-l-4 border-gold pl-4 font-display text-2xl leading-snug text-ink">
        El dinero no es lo más importante de la vida…
        <span className="mt-2 block text-lg text-ink-soft">pero parece afectar todo lo que sí lo es.</span>
      </blockquote>

      <H2 id="c1-que-es">Qué es CASHFLOW y para qué existe</H2>
      <P>
        CASHFLOW es un juego de mesa creado por Robert Kiyosaki (CASHFLOW Technologies, Inc.) para entrenar el
        músculo que la escuela casi nunca entrena: leer una hoja financiera, distinguir un activo de un pasivo y
        construir ingreso que llega mientras duermes. El lema del manual es simple y serio:{" "}
        <strong className="text-ink">cuanto más juegas, más rico te vuelves</strong> — no porque el cartón imprima
        dólares, sino porque tu cerebro empieza a ver oportunidades donde antes solo veía facturas.
      </P>
      <P>
        Se juega en dos partes, como la vida de casi cualquiera. Primero estás atrapado en un círculo interior:
        sueldo, gastos, deudas, sorpresas. Luego —si construyes ingreso pasivo de verdad— sales a un anillo
        exterior donde el dinero trabaja y tú eliges sueños. El tablero no es decoración. Es un mapa de dos
        economías.
      </P>

      <H2 id="c1-patrones">Los tres patrones de flujo (el corazón de la filosofía)</H2>
      <P>
        Imagina tres cubetas con un grifo y un agujero. El grifo es el ingreso. El agujero son los gastos. La
        cubeta es tu vida.
      </P>

      <div className="mt-6 grid gap-4 md:grid-cols-3">
        <div className="print-keep rounded-sm border border-rule bg-paper p-4">
          <p className="font-display text-sm tracking-wide text-burgundy uppercase">Pobres</p>
          <p className="mt-2 font-semibold">Ingreso → Gastos</p>
          <p className="mt-2 text-sm text-ink-soft">
            Cada peso que entra se gasta. No hay activos que produzcan. Solo hay cuentas: renta, comida, ropa,
            transporte, impuestos. Trabajan toda la vida para enfrentar gastos continuos y llegan al final con
            poco.
          </p>
        </div>
        <div className="print-keep rounded-sm border border-rule bg-paper p-4">
          <p className="font-display text-sm tracking-wide text-burgundy uppercase">Clase media</p>
          <p className="mt-2 font-semibold">Ingreso → Gastos + Pasivos</p>
          <p className="mt-2 text-sm text-ink-soft">
            Ganan más, y compran cosas que parecen riqueza: casa más grande, auto más nuevo, tarjetas. Esos
            «premios» son pasivos: sacan dinero cada mes. Trabajan para pagar deudas y, si tienen suerte, llegan
            a un retiro de clase media.
          </p>
        </div>
        <div className="print-keep rounded-sm border border-forest bg-forest/5 p-4">
          <p className="font-display text-sm tracking-wide text-forest uppercase">Ricos</p>
          <p className="mt-2 font-semibold">Activos → Ingreso que cubre gastos</p>
          <p className="mt-2 text-sm text-ink-soft">
            Compran cosas que meten dinero al bolsillo. El ingreso de los activos paga la vida. El sueldo deja de
            ser el motor. Ese es el momento en que el juego —y la vida— cambian de pista.
          </p>
        </div>
      </div>

      <Callout title="Analogía del taxi" tone="gold">
        <p>
          Un sueldo es un taxi: si dejas de pedalear el taxímetro, el viaje se acaba. Un activo con flujo es un
          metro: pasa aunque tú no lo conduzcas. La Carrera de la Rata te entrena a ser un taxista cada vez mejor
          pagado. La Vía Rápida te pide construir vías de metro.
        </p>
      </Callout>

      <H2 id="c1-carrera">Parte I — La Carrera de la Rata</H2>
      <P>
        El círculo interior del tablero. En la vida real es donde la mayoría estamos presos día tras día: trabajar,
        cobrar, gastar, repetir. Tu pieza (la rata de tu color) corre aquí.
      </P>
      <P>
        <strong className="text-ink">Meta:</strong> comprar inversiones que den flujo de caja (ingreso pasivo)
        hasta que ese ingreso pasivo sea <em>mayor</em> que tus gastos totales. No igual. Mayor. Un dólar de más
        es la diferencia entre seguir girando y salir.
      </P>
      <Formula>Ingreso pasivo {'>'} Gastos totales → puedes salir al inicio de tu turno</Formula>
      <P>
        El ingreso pasivo es la suma de intereses + dividendos + flujo inmobiliario + flujo de negocios. El
        salario NO cuenta para salir. Por eso un médico con $13.200 de sueldo puede tardar más que un conserje
        con $1.600: su jaula de gastos es enorme y el mazo de fichas paga los mismos $200 o $800 a todo el mundo.
      </P>

      <H2 id="c1-via">Parte II — La Vía Rápida</H2>
      <P>
        El anillo exterior. En la vida real es donde los ricos juegan el juego del dinero. Ya no aplican tu
        salario, tu hipoteca de vivienda ni las fichas de Oportunidad, Mercado o Cosas. El banco te «compra» la
        vida anterior: te entrega 100 veces tu ingreso pasivo. El manual lo explica así: demostraste inteligencia
        financiera, tus inversiones prosperaron, reinvertiste y en una década (comprimida en un volteo de hoja)
        multiplicaste el flujo por 100.
      </P>
      <Ul
        items={[
          "Comprar tu Sueño (casillas rosa / nubes): si eres el primero en caer en el que elegiste al inicio y pagarlo, ganas y el juego termina.",
          "Aumentar tu flujo mensual comprando negocios verdes hasta sumar $50.000 extra de flujo en la Vía Rápida.",
        ]}
      />

      <H2 id="c1-ganar">Cómo se gana — las dos puertas</H2>
      <P>Ganas CASHFLOW si se cumple una de estas dos condiciones (la primera que ocurra cierra la partida):</P>
      <Steps
        items={[
          {
            n: "1",
            t: "Comprar tu Sueño",
            d: "Debes caer en la casilla rosa que marcaste con tu queso al inicio y tener el efectivo para pagarla. Comprar OTROS sueños no te hace ganar (aunque puedes comprarlos). Si otro jugador cae en TU sueño, el precio de ese sueño sube un 100% de su costo original por cada ficha ajena.",
          },
          {
            n: "2",
            t: "Acumular $50.000 de flujo extra en la Vía Rápida",
            d: "Tu meta escrita en la hoja de «Felicitaciones» es: Ingreso inicial del Día de CASHFLOW + $50.000. Lo consigues comprando negocios verdes (y acertando algunas apuestas de dado).",
          },
        ]}
      />

      <Callout title="Lo que NO gana el juego" tone="burgundy">
        <p>
          Tener mucho efectivo sin sueño ni flujo extra. Tener el sueldo más alto. Ser el primero en dar la vuelta.
          Sobrevivir a los demás. El juego premia una sola cosa: o tu sueño pagado, o $50.000 de flujo nuevo en la
          pista de los ricos.
        </p>
      </Callout>

      <H2 id="c1-plan">El plan del millonario de 3 horas</H2>
      <P>
        El manual cierra con un método de aprendizaje, no con un truco. Tener diversión es la segunda mejor forma
        de aprender; enseñar a un amigo es la primera. CASHFLOW se diseñó para que cada jugador sea también
        maestro: el auditor a tu derecha, las fichas leídas en voz alta, la hoja a la vista.
      </P>
      <Steps
        items={[
          { n: "1", t: "Reúne de 1 a 5 amigos serios", d: "Gente que quiera volverse rica de verdad, no solo pasar el rato." },
          { n: "2", t: "Reserva 3 horas", d: "Una partida típica comprime años de vida financiera en una noche." },
          {
            n: "3",
            t: "Juega una vez al mes durante un año",
            d: "Ejemplo del manual: el tercer sábado, de 9:00 a 12:00. La repetición es la base del aprendizaje.",
          },
          {
            n: "4",
            t: "Después, hablen de la vida real",
            d: "¿Están bajando deudas o gastos? ¿Sube el ahorro? ¿Encontraron algo emocionante en qué invertir?",
          },
          {
            n: "5",
            t: "Ahora jueguen EN SERIO",
            d: "Cuando dominen el juego, cada uno pone SUS ingresos y gastos reales en la hoja. A ver si ese individuo sale de la Carrera de la Rata.",
          },
          {
            n: "6",
            t: "Empiecen a tiempo, terminen a tiempo",
            d: "Acuerden aparecer. Apoyen el desarrollo de los demás. Diviértanse mientras la mente saca a relucir el genio financiero.",
          },
        ]}
      />
      <P>
        Dato que el manual pone en negro: el estadounidense medio de 50 años tiene apenas $2.300 ahorrados para el
        retiro (J. Arthur Urcivoli, Merrill Lynch, citado en el original). El juego existe para que esa estadística
        no sea la tuya.
      </P>

      <H2 id="c1-promesa">La promesa — y el límite</H2>
      <P>
        En un año, dice el manual, la vida se ve otra: futuro más seguro, mente más afilada, oportunidades por
        todas partes… en bloques de tres horas. Esta guía no sustituye el juego oficial ni autoriza uso comercial
        (CASHFLOW® es marca registrada de CASHFLOW Technologies, Inc.). Es un compañero de estudio: reglas, hoja,
        filosofía y una partida completa narrada para que el aprendizaje no se quede en el cartón.
      </P>
      <H3>Patente y créditos</H3>
      <P>
        El juego de mesa está cubierto por la patente estadounidense 6.826.878 y otras pendientes. © 1996, 1997,
        1999, 2000 CASHFLOW Technologies, Inc. Manual de referencia de esta guía: G101CT15 y la traducción
        española adjunta «CASHFLOW 101 — Reglas del juego».
      </P>
    </article>
  );
}
