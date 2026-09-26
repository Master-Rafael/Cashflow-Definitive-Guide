import { Callout, Formula, H2, H3, P, Steps, Ul } from "./ui";

export function Chapter3() {
  return (
    <article>
      <p className="font-display text-sm tracking-[0.22em] text-gold uppercase">Capítulo 3</p>
      <h1 className="mt-2 font-display text-4xl font-semibold text-burgundy sm:text-5xl">
        Reglas del juego, paso a paso
      </h1>
      <p className="mt-3 font-display text-xl italic text-ink-soft">
        Dados, cheques, despidos, bebés, préstamos, quiebra y la Vía Rápida
      </p>

      <H2 id="c3-setup">Montaje — las 12 instrucciones cortas del manual</H2>
      <Steps
        items={[
          { n: "1", t: "Elegir Banquero", d: "Alguien rápido con números. Si también juega, separa su dinero del banco." },
          { n: "2", t: "Colocar los mazos", d: "Baraja por separado Oportunidad (Pequeños y Grandes), El Mercado y Cosas. Bocabajo en sus sitios." },
          { n: "3", t: "Repartir la Hoja de Juego", d: "Una por jugador. Lado de Carrera hacia arriba. Tómate un minuto para leer las palabras." },
          { n: "4", t: "Repartir Profesión", d: "Baraja y da una boca abajo a cada uno. Un lápiz por jugador." },
          { n: "5", t: "Copiar la profesión a la hoja", d: "Exactamente como está escrita, omitiendo ceros. Empiezas con 0 hijos y 0 préstamo bancario." },
          { n: "6", t: "Nombrar auditor", d: "La persona a tu derecha. Cada cambio de cifra se audita." },
          { n: "7", t: "El banco entrega el efectivo inicial", d: "Flujo mensual (cheque) + ahorro. Borra el ahorro de la hoja al recibirlo. El ahorro NO forma parte del cheque futuro." },
          { n: "8", t: "Elegir color", d: "Rata, queso y fichas del mismo color." },
          { n: "9", t: "Elegir Sueño", d: "Pon el queso en una casilla rosa de la Vía Rápida. Pueden coincidir varios jugadores." },
          { n: "10", t: "Colocar la rata", d: "En la flecha «Partida / Start Here» de la Carrera." },
          { n: "11", t: "Tirar un dado para ver quién empieza", d: "El más alto sale. Luego se juega a la izquierda (sentido horario de jugadores). Ese orden NO cambia al pasar a la Vía Rápida." },
          { n: "12", t: "Empezar a jugar", d: "En la Carrera se tira UN dado por turno." },
        ]}
      />

      <H2 id="c3-turno">Estructura de un turno en la Carrera</H2>
      <Ul
        items={[
          "Antes de tirar: puedes liquidar deudas (ver más abajo) o, si tu ingreso pasivo YA es mayor que tus gastos, salir a la Vía Rápida.",
          "Tira 1 dado (o 2, si tienes Caridad vigente). Mueve en el sentido de las agujas del reloj.",
          "Si PASAS o CAES en Cheque de pago: pide tu flujo mensual. Si olvidas pedirlo, lo PIERDES. No se reclama después.",
          "Resuelve la casilla en la que caíste.",
          "Si sacaste una Oportunidad, caduca cuando el siguiente jugador mueve.",
          "El auditor revisa cualquier cambio de hoja.",
        ]}
      />

      <H2 id="c3-casillas">Casillas de la Carrera — reglamento completo</H2>

      <H3>Cheque de pago (Día de pago)</H3>
      <P>
        Cada vez que caes o pasas, recibes tu Flujo de Caja Mensual del banco. Si es negativo, lo PAGAS al banco.
        El tramo de cheque a cheque es un mes. El efectivo se suma a tu montón (no hace falta anotarlo).{" "}
        <strong className="text-ink">Si olvidas pedirlo, lo pierdes.</strong>
      </P>

      <H3>Oportunidad (Negocio Pequeño o Grande)</H3>
      <Ul
        items={[
          "Eliges mazo. Pequeños: entrada máxima $5.000. Grandes: desde $6.000.",
          "Lees en voz alta. Decides comprar o no (si tienes la entrada, o pides préstamo).",
          "Algunas fichas permiten que otros también compren o vendan.",
          "Los activos SOLO se venden cuando una ficha, una casilla o las reglas (bancarrota) lo permiten. NUNCA se venden entre jugadores como mercado libre.",
          "La CARTA de oportunidad puede venderse a otro jugador SOLO si la propia carta lo dice, a precio negociado. El comprador de la carta debe entonces comprar el activo al precio impreso, en ese momento. Estás vendiendo la OPCIÓN, no el activo.",
          "No se permiten sociedades entre jugadores para comprar.",
          "Solo se venden activos que se poseen.",
          "La oportunidad caduca al mover el siguiente jugador. La carta usada va al fondo.",
        ]}
      />

      <H3>El Mercado</H3>
      <P>
        Robas, lees en voz alta. Quienes tengan el activo EXACTO pueden vender al precio. El banco paga. Ajustas
        la hoja: quitas activo, hipoteca, flujo, y actualizas pasivo, ingreso pasivo, ingreso total y flujo
        mensual. Carta al fondo.
      </P>

      <H3>Cosas (Doodads)</H3>
      <P>
        Obligatorias. Sigues la ficha. Puedes pedir préstamo para pagar. Hay doodads especiales (televisor, barco)
        que pueden convertirse en deuda permanente si eliges financiarlas.
      </P>

      <H3>Caridad (opcional) — regla oficial del manual inglés</H3>
      <P>
        Al caer, PUEDES donar el 10% de tu Ingreso Total (no del efectivo, no del flujo) al banco. A cambio, usas
        2 dados en cada uno de tus próximos 3 turnos. Tres fichas junto a la rata ayudan a contar. El Despedido
        CANCELA la Caridad restante.
      </P>
      <Callout title="Variante de la traducción española adjunta" tone="gold">
        <p>
          El PDF español dice «10% del dinero en caja» a cambio de «hasta 3 dados» en 3 turnos, y permite pactar
          al inicio que sea el 10% del ingreso total «para simplificar». Esta guía enseña la regla del manual
          inglés oficial (G101CT15): 10% del Ingreso Total, 2 dados, 3 turnos. Si tu mesa usa la traducción,
          páctenlo ANTES de la partida y no a mitad.
        </p>
      </Callout>

      <H3>Bebé</H3>
      <P>Un nuevo miembro. Límite de 3 hijos. Si ya tienes 3, la casilla no hace nada. Si no:</P>
      <Ul
        items={[
          "Suma 1 al número de hijos.",
          "Añade el «Gasto por hijo» de tu profesión a Gastos de hijos.",
          "Suma ese mismo monto a Gastos totales.",
          "Resta ese monto al Flujo mensual.",
          "Audita.",
        ]}
      />
      <P>
        Analogía: un hijo en CASHFLOW no es amor, es un gasto permanente. No se liquida. Cada profesión tiene su
        tarifa: $70 el conserje, $640 el médico.
      </P>

      <H3>Despedido (Downsized)</H3>
      <P>
        Perdiste el empleo un rato. Pagas al banco el TOTAL de tus gastos y pierdes 2 turnos. Esto también termina
        el efecto de Caridad. Dos fichas junto a la rata para contar las vueltas perdidas.
      </P>

      <H2 id="c3-prestamo">Préstamos bancarios</H2>
      <P>
        Puedes pedir prestado salvo que estés en bancarrota. Múltiplos de $1.000. Interés 10% al mes (por cada
        cheque de pago). Cada $1.000 prestados = $100 de gasto mensual de «Pago de préstamo bancario».
      </P>
      <Steps
        items={[
          { n: "a", t: "Recibe el efectivo", d: "El banco te entrega los $1.000 × N." },
          { n: "b", t: "Pasivo", d: "Suma el préstamo al Balance, bajo Obligaciones / Bank Loan." },
          { n: "c", t: "Gasto", d: "Suma el 10% a Gastos (Pago de préstamo bancario)." },
          { n: "d", t: "Totales", d: "Recalcula Gastos totales." },
          { n: "e", t: "Flujo", d: "Recalcula Flujo mensual. Puede volverse negativo: peligro de quiebra en el próximo cheque." },
          { n: "f", t: "Auditor", d: "Siempre." },
        ]}
      />
      <P>
        Para PAGAR el préstamo: unidades de $1.000. Cada unidad pagada reduce el gasto en $100 y el pasivo en
        $1.000. Es la ÚNICA deuda que se puede pagar a plazos.
      </P>

      <H2 id="c3-deuda">Liquidar deudas (en cualquier turno, incluso en vez de jugar)</H2>
      <P>
        Debes pagar el MONTO ENTERO de la deuda elegida, excepto el préstamo bancario. No existen pagos parciales
        de auto, tarjetas, tienda, hipoteca de vivienda ni préstamo escolar.
      </P>
      <P>
        <strong className="text-ink">NO se pueden liquidar:</strong> Impuestos, Otros gastos, Gastos de hijos. Son
        permanentes.
      </P>
      <Steps
        items={[
          { n: "a", t: "Quita o ajusta el pasivo", d: "Columna de Obligaciones." },
          { n: "b", t: "Quita el gasto asociado", d: "Estado de resultados." },
          { n: "c", t: "Recalcula Gastos totales", d: "—" },
          { n: "d", t: "Recalcula Flujo mensual", d: "Bajar gastos es tan válido como subir ingreso pasivo para salir." },
          { n: "e", t: "Audita", d: "—" },
        ]}
      />
      <Callout title="¿Conviene liquidar?" tone="forest">
        <p>
          Divide el gasto mensual que eliminas entre el efectivo que pagas. Si liquidar $3.000 de tarjetas te
          ahorra $90/mes, «compras» un flujo de $90 por $3.000 (36% anual). Compáralo con la entrada de un
          inmueble. El piloto, con $660/mes de tarjetas, a menudo se libera MÁS rápido pagando esa deuda que
          cazando un gran negocio.
        </p>
      </Callout>

      <H2 id="c3-quiebra">Bancarrota — el procedimiento completo</H2>
      <P>
        Si en un Cheque de pago tu Flujo mensual es negativo Y no tienes efectivo para cubrirlo, estás en
        bancarrota. El manual inglés la trata como declaración con pasos fijos:
      </P>
      <Steps
        items={[
          {
            n: "1",
            t: "Vende activos al banco a ½ de la entrada",
            d: "Cualquier número de activos. El banco te da la mitad de lo que pagaste de down payment. NO la mitad del costo. Un 4-plex con entrada $20.000 se vende a $10.000.",
          },
          {
            n: "2",
            t: "Usa ese dinero para dejar el flujo en positivo",
            d: "Paga deudas hasta que el ingreso vuelva a ser mayor que los gastos.",
          },
          {
            n: "3",
            t: "Pierdes 3 turnos",
            d: "Manual inglés oficial. (La traducción española dice 5: páctenlo antes.)",
          },
        ]}
      />
      <P>
        Si DESPUÉS de vender TODOS los activos el flujo sigue negativo: se borra la MITAD de préstamos de auto,
        tarjetas y tienda, junto con la mitad de sus pagos. La hipoteca de la CASA y el préstamo ESCOLAR permanecen
        iguales.
      </P>
      <P>
        Si AUN ASÍ el flujo es negativo: estás oficialmente fuera del juego.
      </P>
      <Callout title="Nota contable del manual español" tone="ink">
        <p>
          Bajo «Negocios» se anotan: negocios automatizados, sociedades limitadas, franquicias y otros negocios.
          Bajo «Bienes raíces»: vivienda residencial, departamentos, terrenos, bed & breakfast y centros
          comerciales. Registrar mal es perder el derecho a vender cuando El Mercado nombre el tipo exacto.
        </p>
      </Callout>

      <H2 id="c3-salida">Salir de la Carrera — el rito de paso</H2>
      <P>
        Al INICIO de cualquier turno en el que tu Ingreso pasivo sea mayor que tus Gastos totales:
      </P>
      <Steps
        items={[
          {
            n: "1",
            t: "Voltea la hoja",
            d: "Lado «¡Felicitaciones!». Anota nombre y auditor.",
          },
          {
            n: "2",
            t: "Calcula tu Buyout",
            d: "100 × Ingreso pasivo. Ese es tu Ingreso inicial del Día de CASHFLOW. El banco te lo entrega AHORA, antes de entrar. (Algunas mesas también te dejan el efectivo de la Carrera; el manual de Kim Kiyosaki indica devolver el efectivo viejo. Páctenlo. Esta guía sigue el manual impreso: recibes el buyout; las cifras de la Carrera dejan de aplicar.)",
          },
          {
            n: "3",
            t: "Escribe la meta de victoria por flujo",
            d: "Ingreso inicial del Día de CASHFLOW + $50.000.",
          },
          {
            n: "4",
            t: "Registra el ingreso inicial en el historial",
            d: "Cada negocio nuevo se suma a esa línea.",
          },
          {
            n: "5",
            t: "Coloca la rata en «Entrada»",
            d: "Dejas de tirar 1 dado: ahora tiras 2, salvo reglas posteriores.",
          },
        ]}
      />
      <Formula>Buyout = Ingreso pasivo × 100 &nbsp;&nbsp;|&nbsp;&nbsp; Meta flujo = Buyout + $50.000</Formula>
      <Ul
        items={[
          "Oportunidad, Mercado y Cosas YA NO te aplican.",
          "Tu estado de resultados y balance de la Carrera YA NO aplican.",
          "NO puedes pedir prestado al banco en la Vía Rápida.",
        ]}
      />

      <H2 id="c3-via-reglas">Casillas de la Vía Rápida</H2>
      <H3>Día de CASHFLOW</H3>
      <P>
        Caes o pasas: recibes tu Ingreso del Día de CASHFLOW. NO hace falta pedirlo. Si olvidas, igual lo recibes.
        Es el espejo invertido del Cheque de la Carrera: aquí el sistema confía en que ya sabes cobrar.
      </P>
      <H3>Negocios de inversión (verdes)</H3>
      <Ul
        items={[
          "Pagas la entrada, pones ficha de tu color, anotas nombre y flujo, recalculas, auditas.",
          "Una vez comprado, deja de estar disponible para otros (manual clásico).",
          "Si la casilla pide dado y fallas, otro que caiga después puede intentarlo. Si alguien acierta, se cierra.",
          "Ediciones posteriores añaden una «cuota de mentor» de $50.000 al dueño si otro cae en un negocio ya comprado. NO está en el manual G101CT15. Páctenlo.",
        ]}
      />
      <H3>Sueños (rosa)</H3>
      <Ul
        items={[
          "Si caes en TU sueño y tienes el efectivo, lo compras, pones ficha, GANAS, el juego termina.",
          "Puedes comprar sueños que no elegiste (el manual de la Vía Rápida lo permite: «quién dice que solo un sueño»). Eso NO te hace ganar.",
          "Si caes en el sueño de OTRO: el costo de ESE sueño sube un 100% de su precio original. Pones una ficha tuya como marca del recargo. Solo quien lo eligió puede comprarlo para ganar.",
        ]}
      />
      <P>
        Ejemplo del manual: sueño de $100.000. Un extraño cae: ahora cuesta $200.000. Un segundo extraño: $300.000.
      </P>
      <H3>Caridad (Vía Rápida)</H3>
      <P>
        Opcional. Pagas $100.000. A cambio, el resto del juego tiras 1, 2 o 3 dados, eligiendo cada turno.
      </P>
      <H3>Auditoría fiscal</H3>
      <P>Pagas la mitad de tu efectivo.</P>
      <H3>Divorcio</H3>
      <P>Pierdes TODO el efectivo.</P>
      <H3>Pleito legal (Lawsuit)</H3>
      <P>
        Manual inglés: cuesta la mitad del efectivo. Traducción española: $100.000 fijos. Usen el inglés salvo pacto.
      </P>

      <H2 id="c3-variantes">Tabla de discrepancias inglés oficial vs. PDF español</H2>
      <div className="mt-4 max-w-full overflow-x-auto">
        <table className="w-full min-w-[560px] border-collapse text-sm">
          <thead>
            <tr className="border-b border-rule font-display text-burgundy">
              <th className="py-2 pr-2 text-left">Tema</th>
              <th className="py-2 pr-2 text-left">Manual inglés G101CT15</th>
              <th className="py-2 text-left">Traducción española adjunta</th>
            </tr>
          </thead>
          <tbody className="text-ink-soft">
            <tr className="border-b border-rule/70">
              <td className="py-2 pr-2">Caridad (Carrera)</td>
              <td className="py-2 pr-2">10% del Ingreso Total, 2 dados, 3 turnos</td>
              <td className="py-2">10% del efectivo, hasta 3 dados (o pacto 10% ingreso)</td>
            </tr>
            <tr className="border-b border-rule/70">
              <td className="py-2 pr-2">Turnos de bancarrota</td>
              <td className="py-2 pr-2">3</td>
              <td className="py-2">5</td>
            </tr>
            <tr className="border-b border-rule/70">
              <td className="py-2 pr-2">Pleito (Vía Rápida)</td>
              <td className="py-2 pr-2">½ del efectivo</td>
              <td className="py-2">$100.000</td>
            </tr>
            <tr className="border-b border-rule/70">
              <td className="py-2 pr-2">Victoria</td>
              <td className="py-2 pr-2">Tu sueño, o +$50.000 de flujo</td>
              <td className="py-2">Igual, y menciona «comprar sueños ajenos para eliminar jugadores»</td>
            </tr>
          </tbody>
        </table>
      </div>
      <P>
        Esta guía aplica el manual inglés como fuente, porque es el texto de la patente y el que trae los
        diagramas de la hoja. Donde el español aporta claridad pedagógica (pasos de compra/venta), se incorpora.
      </P>

      <H2 id="c3-recordatorios">Los recordatorios de cabecera del manual</H2>
      <Ul
        items={[
          "Para salir, el ingreso pasivo debe ser mayor que los gastos totales.",
          "Para construir ingreso pasivo, compra activos de flujo positivo.",
          "Lee Oportunidad, Mercado y Cosas en voz alta. Cada carta puede cambiar tu posición.",
          "Cuidado con la bancarrota. Sé inteligente con las inversiones.",
          "Ajusta la estrategia cuando el mercado cambie.",
        ]}
      />
    </article>
  );
}
