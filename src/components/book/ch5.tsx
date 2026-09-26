import { Callout, H2, H3, P, Ul } from "./ui";

export function Chapter5() {
  return (
    <article>
      <p className="font-display text-sm tracking-[0.22em] text-gold uppercase">Capítulo 5</p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-burgundy sm:text-5xl">
        Simulación de una partida completa
      </h1>
      <p className="mt-3 font-display text-xl italic text-ink-soft">
        De la casilla 1 de la Carrera hasta la victoria absoluta en la Vía Rápida
      </p>

      <H2 id="c5-mesa">La mesa</H2>
      <P>
        Cuatro jugadores, un sábado de 9:00 a 12:00 — exactamente el ritual del millonario de 3 horas. Banquero:
        Marcos (también juega; su dinero personal está en un sobre aparte). Sentados, en sentido horario: Elena
        (Maestra), Marcos (Mecánico), Sofía (Médica) y Julián (Piloto). El auditor de cada uno es quien tiene a la
        derecha: el de Elena es Julián; el de Marcos es Elena; y así.
      </P>
      <P>
        Elena copia su ficha: salario $3.300, gastos $2.130, cheque $1.170, ahorro $400. El banco le entrega
        $1.570 y ella borra el ahorro. Hijos: 0. Préstamo: 0. Ingreso pasivo: 0. Meta para salir: $2.131 o más de
        flujo pasivo. Elige el Sueño «Safari fotográfico en África», $100.000, y pone el queso ahí. La rata, en
        Partida. Tiran un dado: Elena saca 6 y empieza.
      </P>
      <Callout title="Por qué no es Sofía, la médica, la favorita" tone="gold">
        <p>
          Sofía cobra $3.550 por cheque y empieza con $3.950. Parece imbatible. Su jaula, sin embargo, es de
          $9.650. Necesita cinco veces más ingreso pasivo que Elena. El mazo no le paga cinco veces más. Esta
          partida existe para que se vea.
        </p>
      </Callout>

      <H2 id="c5-act1">Acto I — Los primeros giros (turnos 1 a 8)</H2>
      <H3>Turno 1 · Elena · dado 4 · Caridad</H3>
      <P>
        Avanza 4 desde Partida y cae en Caridad. Ingreso total $3.300. El 10% son $330. Lo piensa: dos dados, tres
        turnos, más cheques. Paga $330. Le quedan $1.240. Coloca 3 fichas junto a la rata. Julián, su auditor,
        asiente: $3.300 × 0,10 = $330, correcto.
      </P>
      <H3>Turno 2 · Marcos · dado 3 · Oportunidad</H3>
      <P>
        Mecánico, $1.390 de inicio. Elige Pequeño. Sale «¡Gran ganga! Casa 3/2», entrada $2.000, flujo $250. La
        compra. Efectivo $1.390 − $2.000: pide $1.000 al banco, recibe $1.000, paga $2.000, le quedan $390. Pasivo
        banco $1.000, gasto banco $100. Gastos 1.280 + 100 = 1.380. Flujo 2.000 + 250 − 1.380 = $870 (salario $2.000
        + pasivo $250 = 2.250; 2.250 − 1.380 = 870). Meta de escape ahora $1.380. Va 250 / 1.380.
      </P>
      <H3>Turno 3 · Sofía · dado 2 · Cosas</H3>
      <P>
        «Vacaciones familiares — $2.000». Obligatorias. Paga de su montón de $3.950. Le quedan $1.950. Ni un activo.
        El tablero acaba de recordarle que el sueldo alto es un imán de doodads.
      </P>
      <H3>Turno 4 · Julián · dado 5 · Cheque (pasa) y Oportunidad</H3>
      <P>
        Pasa Cheque, pide $2.600. Iba con $3.000 de inicio ($2.600+$400). Ahora $5.600. Cae en Oportunidad, tienta
        Grande. Sale IPO de biotecnología, $50.000 de entrada, dado 5–6 = $500.000. No tiene $50.000. Pide 50
        préstamos? $5.000 de gasto nuevo: suicidio. Pasa. La carta caduca.
      </P>
      <P>
        <strong className="text-ink">Lección:</strong> un Grande no es un premio. Es una puerta con umbral. Si no
        llegas al umbral, el Pequeño es el oficio.
      </P>

      <H3>Turno 5 · Elena · 2 dados (Caridad) · 8 · Cheque + Oportunidad</H3>
      <P>
        Pasa Cheque: pide $1.170. Montón $2.410. Cae en Oportunidad, elige Pequeño. «Condominio ciudad
        universitaria», entrada $4.000, flujo $140. Pide $2.000 al banco. Recibe $2.000, paga $4.000, le quedan
        $410. Gasto banco $200. Gastos 2.130 + 200 = 2.330. Pasivo $140. Flujo = 3.300 + 140 − 2.330 = $1.110. Quita
        una ficha de Caridad (le quedan 2).
      </P>
      <H3>Turno 6 · Marcos · 5 · El Mercado</H3>
      <P>
        «Comprador de casas 3/2 — $90.000». Marcos tiene exactamente una House 3/2, hipoteca $43.000. Liquidación
        $90.000 − $43.000 = $47.000. Vende. Cobra $47.000. Borra activo, hipoteca, flujo $250. Gastos vuelven a
        $1.380 (aún tiene el préstamo de $1.000). Pasivo 0. Efectivo ~ $47.390. Acaba de convertir un activo en
        munición. Elena, auditora, verifica la resta.
      </P>
      <Callout title="El Mercado no es un cajero automático" tone="forest">
        <p>
          Marcos podía quedarse el $250/mes. Eligió el capital. Con $47.000 ya puede mirar Grandes. La pregunta
          correcta no es «¿subió el precio?» sino «¿este efectivo me compra MÁS flujo del que acabo de soltar?».
        </p>
      </Callout>

      <H3>Turno 7 · Sofía · 6 · Cheque + Despedido</H3>
      <P>
        Pasa Cheque, pide $3.550. Cae en Despedido. Paga $9.650 (gastos totales) y pierde 2 turnos. El golpe es
        brutal: el sueldo alto tiene una factura de despido alta. Caridad no tenía. Se sienta dos rondas. El tablero
        acaba de explicar por qué el médico tarda.
      </P>
      <H3>Turno 8 · Julián · 4 · Cosas</H3>
      <P>
        «Barco nuevo — $18.000, o $1.000 + préstamo $17.000 y $340/mes». Julián, piloto de ego, financia. Gasto
        nuevo $340. Gastos 6.900 + 340 = 7.240. Flujo 9.500 − 7.240 = $2.260. Se compró un pasivo y lo llamó
        premio. El doodad más didáctico del mazo.
      </P>

      <H2 id="c5-act2">Acto II — Elena construye, Marcos dispara (turnos 9 a 18)</H2>
      <H3>Turno 9 · Elena · 2 dados · 7 · El Mercado</H3>
      <P>
        Nadie tiene el activo nombrado (8-plex a $40.000/unidad). Carta al fondo. Segunda ficha de Caridad fuera.
      </P>
      <H3>Turno 10 · Marcos · 3 · Oportunidad · Grande</H3>
      <P>
        «4-plex ejemplo Pat»: entrada $20.000, flujo $800. Paga de su montón. Gastos siguen $1.380 (préstamo
        intacto). Pasivo $800. 800 {'>'} 1.380? No. Flujo = 2.000 + 800 − 1.380 = $1.420. Efectivo ~ $27.000.
      </P>
      <H3>Turnos 11–12 · Sofía pierde el segundo turno de despido. Julián cae en Bebé.</H3>
      <P>
        Julián suma 1 hijo, $480. Gastos 7.240 + 480 = 7.720. Flujo 9.500 − 7.720 = $1.780. El yate y el bebé se
        comen el cheque. Meta de escape $7.721. Está más lejos que al empezar.
      </P>
      <H3>Turno 13 · Elena · último turno de Caridad · 11 · pasa Cheque, cae en Oportunidad</H3>
      <P>
        Cheque $1.110. Elige Pequeño: «Casa 3/2 mercado deprimido», entrada $4.000, flujo $200. Pide $4.000 al
        banco (gasto +$400). Gastos 2.330 + 400 = 2.730. Pasivo 140 + 200 = $340. Sigue lejos, pero cada activo es
        un ladrillo. Caridad termina.
      </P>
      <H3>Turno 14 · Marcos · 6 · Cheque + Oportunidad Grande</H3>
      <P>
        Cheque $1.420. «Video/Pinball», entrada $20.000, flujo $1.600. Lo compra. Pasivo 800 + 1.600 = $2.400.
        Gastos $1.380. <strong className="text-ink">$2.400 {'>'} $1.380.</strong> Marcos, en silencio, empuja la
        hoja a Elena. Ella audita: 2BIG no tiene, pero el 4-plex $800 + pinball $1.600 = 2.400. Gastos: 360 + 300 +
        60 + 60 + 50 + 450 + 100 banco = 1.380. Correcto. Al INICIO de su próximo turno, Marcos puede salir.
      </P>
      <H3>Turno 15 · Sofía vuelve · 2 · Oportunidad Pequeña</H3>
      <P>
        «Condominio extras, flujo −$100». Lo rechaza. Un activo que aleja de la salida es un pasivo con escritura.
      </P>
      <H3>Turno 16 · Julián · 1 · Caridad</H3>
      <P>
        10% de su ingreso total (9.500) = $950. Paga, toma 2 dados tres turnos, desesperado por cheques. El yate
        no se inmuta.
      </P>
      <H3>Turno 17 · Elena · 5 · Cosas «Tu hijo necesita brackets — $2.000»</H3>
      <P>
        No tiene hijo, pero el doodad no pregunta. Pide $2.000 al banco. Gasto banco +$200. La jaula crece. Es el
        momento más amargo: gastar en un niño que no tiene.
      </P>
      <H3>Turno 18 · Marcos sale a la Vía Rápida</H3>
      <P>
        Inicio de turno: pasivo $2.400 {'>'} gastos $1.380. Voltea la hoja. Buyout = $2.400 × 100 = $240.000. El
        banco se los entrega. Meta de flujo: $290.000. Coloca la rata en Entrada. Las fichas de Oportunidad ya no
        son su problema. Elena traga saliva y sonríe: el mecánico se acaba de ir.
      </P>

      <H2 id="c5-act3">Acto III — Elena aprende a vender y a elegir (turnos 19 a 28)</H2>
      <P>
        Sofía arma por fin un 4-plex ($800) y un dúplex ($820). Pasivo $1.620 contra $9.650: el desierto. Julián
        liquida el yate no — no puede: el barco no se «liquida» como auto; es un doodad capitalizado. Paga tarjetas
        ($22.000, ahorra $660/mes). Gastos bajan. Sigue lejos.
      </P>
      <H3>Elena, turno 21 · El Mercado · comprador de condos $55.000</H3>
      <P>
        Tiene el Condo 2/1, hipoteca $36.000. Liquidación $19.000. Vende. Pierde $140 de flujo, gana $19.000 de
        pólvora. Inmediatamente, en su siguiente Oportunidad, toma Grande: el 4-plex de $800 por $20.000. Pasivo
        neto: perdió 140, ganó 800. La jaula de préstamos sigue ahí, pero el motor cambió de cilindrada.
      </P>
      <H3>Turno 24 · Elena · Bebé</H3>
      <P>
        Un hijo. +$180 de gasto. Gastos suben $180, la meta se aleja $180. Julián audita. Elena no discute con el
        tablero: anota, sigue. Máximo 3; le quedan dos sustos.
      </P>
      <H3>Turno 26 · Elena liquida deudas en vez de tirar</H3>
      <P>
        El reglamento lo permite: en cualquier turno puedes liquidar en vez de jugar. Tiene efectivo de un cheque
        acumulado y de la venta. Paga el auto ($5.000, ahorra $100) y la tienda ($1.000, ahorra $50). Gastos −$150.
        Cada dólar de gasto que muere vale igual que un dólar de pasivo que nace. El auditor confirma.
      </P>
      <H3>Turno 27 · Grande · edificio 12 unidades (ficha del manual)</H3>
      <P>
        Entrada $50.000, flujo $2.400, ROI 58%. Elena pide lo que le falta al banco, acepta el $ gasto, y el flujo
        nuevo la empuja. Ingreso pasivo (4-plex $800 + edificio $2.400 + restos) cruza sus gastos. Cifra final de
        Elena al salir: pasivo $3.320, gastos $3.160. Un hijo, préstamos, un edificio. No fue limpio. Fue suficiente.
      </P>
      <H3>Turno 28 · Elena voltea la hoja</H3>
      <P>
        Buyout = $3.320 × 100 = $332.000. Meta de flujo = $382.000. Queso aún en África, $100.000. Rata en
        Entrada. Tira 2 dados. Sofía sigue en la Carrera. Julián también. Marcos ya está en la Vía, dos vueltas por
        delante.
      </P>

      <H2 id="c5-act4">Acto IV — La Vía Rápida (turnos 29 a 38)</H2>
      <H3>Marcos, primer Día de CASHFLOW</H3>
      <P>
        Pasa la casilla. Cobra $240.000 aunque se despiste: aquí no se pierde el día. Compra «Tintorería, 2
        locales», entrada $100.000, flujo +$3.000. Ingreso del Día = $243.000. Le faltan $47.000 de flujo para la
        victoria por negocios. Un solo negocio más grande podría bastar. Pone ficha verde.
      </P>
      <H3>Elena, 2 dados, 9 · cae en Auditoría fiscal</H3>
      <P>
        Mitad del efectivo. $332.000 se parten. Duele, no mata: el flujo del Día sigue intacto. La Vía Rápida
        ataca el montón, no el motor.
      </P>
      <H3>Marcos, 8 · cae en el Safari de Elena</H3>
      <P>
        No es su sueño. El costo del Safari de Elena sube 100% del original: de $100.000 a $200.000. Marcos pone
        una ficha suya en la casilla como recargo. No puede comprarlo para ganar. Elena aprieta los dientes: su
        puerta se encareció.
      </P>
      <H3>Elena, 11 · Día de CASHFLOW + negocio «Calefacción y aire»</H3>
      <P>
        Cobra su $332.000 (olvidó pedirlo; igual se lo dan). Cae en Heat & A/C: entrada $200.000, flujo $10.000,
        CCR 60%. Compra. Día de CASHFLOW nuevo = $342.000. Meta $382.000. Le faltan $40.000 de flujo… o el Safari a
        $200.000.
      </P>
      <H3>Sofía, todavía en la Carrera, cae en Despedido otra vez</H3>
      <P>
        Paga $9.650 otra vez. La mesa deja de reírse. El sueldo es un faro y un blanco.
      </P>
      <H3>Julián llega al umbral con un 8-plex y liquidando tarjetas</H3>
      <P>
        Sale tarde. Buyout menor que el de Elena porque su pasivo apenas supera una jaula enorme. Entra con menos
        pólvora. El piloto aprendió caro lo que el conserje sabe de oído: el tamaño de la jaula manda.
      </P>
      <H3>Marcos, 7 · Cadena de restaurantes familiares</H3>
      <P>
        Entrada $300.000, flujo $14.000. No le alcanza. Pasa. En la Vía no hay banco amigo. Esa es la regla que
        más jugadores olvidan: el apalancamiento se acabó. O tienes el efectivo o sigues girando.
      </P>
      <H3>Elena, Caridad de la Vía</H3>
      <P>
        Paga $100.000. A partir de ahora elige 1, 2 o 3 dados cada turno. Quiere dados altos para alcanzar África
        o un negocio de $8.000–$14.000.
      </P>
      <H3>Turno 36 · Elena, 3 dados, 16 · cae en su Safari</H3>
      <P>
        El recargo de Marcos está ahí: $200.000. Elena cuenta el montón. Le alcanza. Julián, auditor, revisa: no
        hay préstamo posible, el efectivo está, la casilla es la del queso, el recargo está marcado. Paga
        $200.000. Coloca su ficha. El juego termina.
      </P>

      <H2 id="c5-cierre">Victoria absoluta — qué se aprendió</H2>
      <P>
        Elena, maestra, gana. No tuvo el mejor cheque. No fue la primera en la Vía (Marcos la adelantó). Ganó
        porque su jaula era pequeña, vendió cuando el Mercado pagó mejor flujo futuro, liquidó deudas que no
        producían, aceptó un hijo sin drama, y en la Vía pagó Caridad para elegir dados cuando el sueño estaba a
        un tramo. Marcos estuvo a un negocio de ganar por los $50.000 extra. Sofía, la médica, nunca salió. Julián
        salió tarde y pobre de efectivo.
      </P>
      <Ul
        items={[
          "El salario no libera. El flujo sí.",
          "El Mercado es donde se cosecha; la Oportunidad es donde se siembra.",
          "Un doodad financiado (el yate) es una segunda hipoteca emocional.",
          "Despedido cobra proporcional a tu jaula: los ricos de sueldo pagan más por el mismo recuadro rojo.",
          "En la Vía Rápida el banco cierra la ventanilla. El efectivo que llevas es el único combustible.",
          "Encarecer el sueño ajeno es una arma. Marcos la usó; no le alcanzó.",
          "Auditar no es desconfiar. Es amar la cifra correcta.",
        ]}
      />
      <Callout title="Ahora, la sexta hora del año" tone="gold">
        <p>
          El manual pide doce partidas. La segunda, que cada uno ponga su vida real en la hoja: su sueldo, su
          alquiler, sus tarjetas, sus hijos. Si esa hoja no sale de la Carrera, el juego acaba de decirte el
          trabajo de los próximos doce meses. Empiecen a tiempo. Terminen a tiempo. Enséñenlo.
        </p>
      </Callout>

      <H2 id="c5-colofon">Colofón</H2>
      <P>
        Esta guía se redactó como manual de aprendizaje a partir del reglamento oficial en inglés (CASHFLOW®,
        G101CT15, CASHFLOW Technologies, Inc.) y de la traducción española adjunta. CASHFLOW® es marca registrada.
        No está autorizada para uso comercial sin permiso escrito del titular. Patente 6.826.878. Las analogías,
        la partida de Elena, el laboratorio de hoja y la organización pedagógica son original de esta guía.
      </P>
      <P>
        «Es hora de salir de la Carrera de la Rata.» — cierre del manual original.
      </P>
    </article>
  );
}
