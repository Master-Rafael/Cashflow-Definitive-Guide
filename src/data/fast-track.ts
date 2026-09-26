export type FastBusiness = {
  name: string;
  down: number;
  cashFlow: number;
  ccr: string;
  note?: string;
  dice?: string;
};

export type FastDream = {
  name: string;
  cost: number;
  story: string;
};

export const fastBusinesses: FastBusiness[] = [
  { name: "Taller de autos (Auto Repair Shop)", down: 150000, cashFlow: 6000, ccr: "48%" },
  { name: "Salones de belleza (3 tiendas)", down: 250000, cashFlow: 10000, ccr: "48%" },
  { name: "Tintorería (2 locales)", down: 100000, cashFlow: 3000, ccr: "36%" },
  { name: "Cadena de restaurantes familiares", down: 300000, cashFlow: 14000, ccr: "56%" },
  { name: "Servicio de calefacción y aire acondicionado", down: 200000, cashFlow: 10000, ccr: "60%" },
  { name: "Franquicia de hamburguesas", down: 300000, cashFlow: 9500, ccr: "38%" },
  { name: "Franquicia de pizza (2 locales)", down: 225000, cashFlow: 7000, ccr: "37%" },
  { name: "Fábrica de partes para camiones", down: 150000, cashFlow: 5000, ccr: "40%" },
  { name: "Tiendas de camisetas (5 sucursales)", down: 200000, cashFlow: 8000, ccr: "48%" },
  { name: "Franquicia de pollo (2 locales)", down: 300000, cashFlow: 10000, ccr: "40%" },
  { name: "Edificio de 60 departamentos", down: 300000, cashFlow: 8000, ccr: "32%" },
  { name: "Mini-bodegas (200 unidades)", down: 200000, cashFlow: 6000, ccr: "36%" },
  { name: "Mini-markets (3 tiendas)", down: 120000, cashFlow: 5000, ccr: "50%" },
  {
    name: "IPO de software",
    down: 25000,
    cashFlow: 0,
    ccr: "binario",
    dice: "Un dado: 6 = $500.000 en efectivo. 1–5 = $0. Si fallas, otro jugador que caiga después puede intentarlo. Si aciertas, la casilla se cierra.",
  },
  {
    name: "IPO de biotecnología",
    down: 50000,
    cashFlow: 0,
    ccr: "binario",
    dice: "Un dado: 5 o 6 = $500.000. 1–4 = $0. Misma regla de reintento hasta que alguien acierte.",
  },
  {
    name: "Infomercial de menaje de cocina",
    down: 100000,
    cashFlow: 0,
    ccr: "binario",
    dice: "Un dado: 4, 5 o 6 = +$50.000/mes de flujo. 1–3 = $0.",
  },
  {
    name: "Comprar una mina de oro",
    down: 150000,
    cashFlow: 0,
    ccr: "binario",
    dice: "Un dado: 3 o más = +$25.000/mes. 1–2 = $0.",
  },
  {
    name: "Negocio petrolero ruso",
    down: 300000,
    cashFlow: 0,
    ccr: "binario",
    dice: "Un dado: 4 o más = +$75.000/mes. 1–3 = $0.",
  },
];

export const fastDreams: FastDream[] = [
  {
    name: "Safari fotográfico en África",
    cost: 100000,
    story: "Llevas a 6 amigos a fotografiar los animales más exóticos. Lujo 5 estrellas… en tienda de campaña.",
  },
  {
    name: "Cabaña de troncos en las montañas",
    cost: 150000,
    story: "Construir tu refugio en el bosque. Chimenea, silencio, tiempo.",
  },
  {
    name: "Pagar la universidad de tus hijos",
    cost: 150000,
    story: "Sin deudas estudiantiles para la siguiente generación. Libertad heredada.",
  },
  {
    name: "Las 7 Maravillas del Mundo",
    cost: 150000,
    story: "Avión, barco, bicicleta, camello, canoa y limusina. Lujo de punta a punta.",
  },
  {
    name: "Ciudades ancestrales de Asia",
    cost: 150000,
    story: "Avión privado y guía para ti y 5 amigos. Lugares a los que no llegan turistas.",
  },
  {
    name: "Crucero por el Mediterráneo en yate privado",
    cost: 150000,
    story: "Un mes con 12 amigos: calas de Italia, Francia y Grecia.",
  },
  {
    name: "Festival de cine en Cannes",
    cost: 150000,
    story: "Un papel, fiestas con estrellas, una semana codeándote con celebridades.",
  },
  {
    name: "Gira mundial de golf",
    cost: 150000,
    story: "Tú y 3 amigos juegan los 50 mejores campos del planeta. Todo 5 estrellas.",
  },
  {
    name: "Regatas de yates",
    cost: 150000,
    story: "Tú y tu tripulación vuelan a Perth, Australia. Una semana contra los 12 metros más rápidos del mundo.",
  },
  {
    name: "Parque con tu nombre",
    cost: 150000,
    story: "Derribas un almacén abandonado, donas un subpuesto de policía y abres un parque.",
  },
  {
    name: "Cabaña de pesca en un lago de Montana",
    cost: 150000,
    story: "Pescar desde el muelle. Seis meses de soledad. Hidroavión incluido.",
  },
  {
    name: "Heliesquí en los Alpes suizos",
    cost: 100000,
    story: "Invierno de helicóptero de día y vida nocturna. Te alojas en un castillo medieval.",
  },
  {
    name: "Cena con el Presidente",
    cost: 50000,
    story: "Mesa para 10 amigos en una gala con dignatarios de todo el mundo.",
  },
  {
    name: "Un donativo de fe",
    cost: 100000,
    story: "Tu comunidad de fe crece a saltos. Hacen falta edificios. Tú donas.",
  },
  {
    name: "Comprar un bosque",
    cost: 200000,
    story: "Detienes la tala de árboles antiguos. 1.000 acres y un sendero para todos.",
  },
  {
    name: "Isla en los Mares del Sur",
    cost: 200000,
    story: "Dos meses de lujo: aguas cálidas, playas desiertas, noches largas.",
  },
  {
    name: "Ser un jet-setter (avión privado un año)",
    cost: 200000,
    story: "Jet personal un año entero. Despegas cuando el corazón se te antoje.",
  },
  {
    name: "Palco privado de equipo profesional",
    cost: 80000,
    story: "Skybox para 12, comida y bebida, en el estadio de tu equipo.",
  },
  {
    name: "Bolsa para niños (escuela de inversión)",
    cost: 120000,
    story: "Financias una escuela de negocios para jóvenes capitalistas, con mini-bolsa dirigida por alumnos.",
  },
  {
    name: "Centro de investigación de cáncer y SIDA",
    cost: 300000,
    story: "Tu dinero reúne a los mejores investigadores y médicos en un solo lugar.",
  },
  {
    name: "Comprar un yate",
    cost: 300000,
    story: "Cubierta de teca, tripulación, horizonte. El clásico sueño náutico.",
  },
  {
    name: "Villa en la Toscana",
    cost: 350000,
    story: "Viñedos, piedra vieja, atardeceres toscanos. Uno de los sueños más caros del tablero.",
  },
];

export const ratRaceSpaces = [
  { n: 1, name: "Oportunidad", tag: "Salida", color: "oportunidad" as const },
  { n: 2, name: "Cosas (Doodads)", tag: "Obligatorio", color: "doodad" as const },
  { n: 3, name: "Oportunidad", tag: "Pequeño o Grande", color: "oportunidad" as const },
  { n: 4, name: "Caridad", tag: "Opcional", color: "caridad" as const },
  { n: 5, name: "Oportunidad", tag: "Pequeño o Grande", color: "oportunidad" as const },
  { n: 6, name: "Cheque de pago", tag: "Pide o lo pierdes", color: "pago" as const },
  { n: 7, name: "El Mercado", tag: "Se lee en voz alta", color: "mercado" as const },
  { n: 8, name: "Oportunidad", tag: "Pequeño o Grande", color: "oportunidad" as const },
  { n: 9, name: "Cosas (Doodads)", tag: "Obligatorio", color: "doodad" as const },
  { n: 10, name: "Oportunidad", tag: "Pequeño o Grande", color: "oportunidad" as const },
  { n: 11, name: "Bebé", tag: "Máx. 3 hijos", color: "bebe" as const },
  { n: 12, name: "Oportunidad", tag: "Pequeño o Grande", color: "oportunidad" as const },
  { n: 13, name: "El Mercado", tag: "Se lee en voz alta", color: "mercado" as const },
  { n: 14, name: "Oportunidad", tag: "Pequeño o Grande", color: "oportunidad" as const },
  { n: 15, name: "Cosas (Doodads)", tag: "Obligatorio", color: "doodad" as const },
  { n: 16, name: "Oportunidad", tag: "Pequeño o Grande", color: "oportunidad" as const },
  { n: 17, name: "Despedido", tag: "Pagas gastos × 1 y pierdes 2 turnos", color: "despido" as const },
  { n: 18, name: "Oportunidad", tag: "Pequeño o Grande", color: "oportunidad" as const },
  { n: 19, name: "El Mercado", tag: "Se lee en voz alta", color: "mercado" as const },
  { n: 20, name: "Oportunidad", tag: "Pequeño o Grande", color: "oportunidad" as const },
  { n: 21, name: "Cosas (Doodads)", tag: "Obligatorio", color: "doodad" as const },
  { n: 22, name: "Oportunidad", tag: "Pequeño o Grande", color: "oportunidad" as const },
  { n: 23, name: "Cheque de pago", tag: "Pide o lo pierdes", color: "pago" as const },
  { n: 24, name: "Oportunidad", tag: "Pequeño o Grande", color: "oportunidad" as const },
];
