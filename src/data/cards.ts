export type DealKind = "inmueble" | "accion" | "fondo" | "cd" | "negocio" | "oro" | "terreno" | "prestamo";

export type SmallDeal = {
  title: string;
  story: string;
  kind: DealKind;
  cost?: number;
  down?: number;
  mortgage?: number;
  cashFlow?: number;
  symbol?: string;
  price?: number;
  range?: string;
  dividend?: number;
  rule: string;
  sellable?: boolean;
};

export type BigDeal = {
  title: string;
  story: string;
  kind: DealKind;
  cost: number;
  down: number;
  mortgage: number;
  cashFlow: number;
  roi?: string;
  rule: string;
};

export type MarketCard = {
  title: string;
  story: string;
  effect: string;
};

export type Doodad = {
  title: string;
  pay: number;
  note?: string;
};

export const smallDeals: SmallDeal[] = [
  {
    title: "Condominio 2 hab. / 1 baño — ejecución bancaria",
    story: "El banco ejecutó la hipoteca. Barrio deseable, cerca de empleo y comercios. Financiación favorable.",
    kind: "inmueble",
    cost: 40000, down: 5000, mortgage: 35000, cashFlow: 220,
    rule: "Úsala tú o véndela a otro jugador.",
    sellable: true,
  },
  {
    title: "Condominio 2/1 — pareja joven",
    story: "Pareja joven vende para pasar a una casa 3/2. Disponible pronto.",
    kind: "inmueble",
    cost: 55000, down: 5000, mortgage: 50000, cashFlow: 160,
    rule: "Úsala tú o véndela a otro jugador.",
    sellable: true,
  },
  {
    title: "Condominio 2/1 — zona mala, necesita obra",
    story: "Dueño se casa y vende. Zona complicada. Hay que invertir trabajo.",
    kind: "inmueble",
    cost: 50000, down: 5000, mortgage: 45000, cashFlow: 100,
    rule: "Úsala tú o véndela a otro jugador.",
    sellable: true,
  },
  {
    title: "Condominio 2/1 — extras de lujo (flujo negativo)",
    story: "Excelente condominio con extras. La dueña triunfa en los negocios y se muda. El alquiler no cubre la hipoteca.",
    kind: "inmueble",
    cost: 60000, down: 5000, mortgage: 55000, cashFlow: -100,
    rule: "Úsala tú o véndela a otro jugador. Solo tiene sentido si planeas revenderlo (flip).",
    sellable: true,
  },
  {
    title: "Condominio 2/1 — ciudad universitaria",
    story: "Padres venden el depto que usaba su hijo. Alta demanda de alquiler estudiantil.",
    kind: "inmueble",
    cost: 40000, down: 4000, mortgage: 36000, cashFlow: 140,
    rule: "Úsala tú o véndela a otro jugador.",
    sellable: true,
  },
  {
    title: "Casa 3/2 — cierre de sucesión",
    story: "Casa de alquiler bien mantenida, con inquilino. Sale por cierre de herencia.",
    kind: "inmueble",
    cost: 65000, down: 5000, mortgage: 60000, cashFlow: 160,
    rule: "Úsala tú o véndela a otro jugador. Puede venderse luego entre $65.000 y $135.000.",
    sellable: true,
  },
  {
    title: "Casa 3/2 — mercado deprimido",
    story: "Despidos en la zona. Buena inversión para quien tenga estómago.",
    kind: "inmueble",
    cost: 50000, down: 4000, mortgage: 46000, cashFlow: 200,
    rule: "Úsala tú o véndela a otro jugador.",
    sellable: true,
  },
  {
    title: "Casa 3/2 — mudanza urgente",
    story: "El dueño se va de la ciudad de improviso. Entrada baja.",
    kind: "inmueble",
    cost: 50000, down: 3000, mortgage: 47000, cashFlow: 100,
    rule: "Úsala tú o véndela a otro jugador.",
    sellable: true,
  },
  {
    title: "¡Gran ganga! Casa 3/2 de empresa",
    story: "La compañía compró la casa de un gerente trasladado. Seis meses en el mercado. Acaban de bajar el precio. Sin inquilino.",
    kind: "inmueble",
    cost: 45000, down: 2000, mortgage: 43000, cashFlow: 250,
    rule: "Úsala tú o véndela a otro jugador.",
    sellable: true,
  },
  {
    title: "¡Gran ganga! Casa 3/2 del gobierno",
    story: "Casa antigua recuperada por una agencia. Financiación oficial e inquilino listos.",
    kind: "inmueble",
    cost: 35000, down: 2000, mortgage: 33000, cashFlow: 220,
    rule: "Úsala tú o véndela a otro jugador.",
    sellable: true,
  },
  {
    title: "Casa 3/2 — ejecución, entrada $0",
    story: "Vacía seis meses. El banco acaba de bajar el precio. El préstamo incluye reparación estimada.",
    kind: "inmueble",
    cost: 50000, down: 0, mortgage: 50000, cashFlow: 100,
    rule: "Úsala tú o véndela a otro jugador.",
    sellable: true,
  },
  {
    title: "Casa 3/2 — subasta desierta (flujo negativo)",
    story: "Departamento de carreteras ofrece casa en zona vieja. El mercado se desplomó. Nadie pujó.",
    kind: "inmueble",
    cost: 50000, down: 0, mortgage: 50000, cashFlow: -100,
    rule: "Úsala tú o véndela a otro jugador. Flip: puede venderse $65.000–$135.000.",
    sellable: true,
  },
  {
    title: "Acción preferente — 2BIG Power",
    story: "Alta rentabilidad. El precio y el dividendo los fija la comisión estatal de servicios.",
    kind: "accion",
    symbol: "2BIG", price: 1200, dividend: 10, range: "$1.200 – $1.200",
    rule: "Todos pueden comprar o vender las acciones que quieran a este precio.",
  },
  {
    title: "Acción preferente — 2BIG Power (2ª ficha)",
    story: "Misma empresa eléctrica. Precio y dividendo fijos.",
    kind: "accion",
    symbol: "2BIG", price: 1200, dividend: 10, range: "$1.200 – $1.200",
    rule: "Todos pueden comprar o vender las acciones que quieran a este precio.",
  },
  {
    title: "Certificado de depósito — $4.000",
    story: "Un banco líder ofrece este CD especial. Interés garantizado. Se puede redimir tras cualquier periodo.",
    kind: "cd",
    symbol: "CD", price: 4000, dividend: 20, range: "$4.000 – $4.000",
    rule: "Todos pueden comprar o vender a este precio.",
  },
  {
    title: "Certificado de depósito — $5.000",
    story: "CD especial de un banco líder. Interés garantizado.",
    kind: "cd",
    symbol: "CD", price: 5000, dividend: 20, range: "$5.000 – $5.000",
    rule: "Todos pueden comprar o vender a este precio.",
  },
  {
    title: "Fondo mutuo GRO4US — precio débil $10",
    story: "Ganancias débiles de la mayoría de empresas. El fondo cae al piso de su rango.",
    kind: "fondo",
    symbol: "GRO4US", price: 10, dividend: 0, range: "$10 – $30",
    rule: "Solo tú puedes comprar las acciones que quieras a este precio. Todos pueden vender.",
  },
  {
    title: "Fondo mutuo GRO4US — $20",
    story: "Joven gestor brillante. El mercado cree que tiene toque de Midas.",
    kind: "fondo",
    symbol: "GRO4US", price: 20, dividend: 0, range: "$10 – $30",
    rule: "Solo tú puedes comprar. Todos pueden vender.",
  },
  {
    title: "Fondo mutuo GRO4US — $30",
    story: "Tipos de interés más bajos impulsan el mercado y el fondo.",
    kind: "fondo",
    symbol: "GRO4US", price: 30, dividend: 0, range: "$10 – $30",
    rule: "Solo tú puedes comprar. Todos pueden vender.",
  },
  {
    title: "Fondo mutuo GRO4US — récord $40 (fuera de rango)",
    story: "Fortaleza general del mercado lleva el fondo a un máximo histórico.",
    kind: "fondo",
    symbol: "GRO4US", price: 40, dividend: 0, range: "$10 – $30",
    rule: "Solo tú puedes comprar. Todos pueden vender. Comprar aquí es especular por encima del rango histórico.",
  },
  {
    title: "Acción OK4U Drug Co. — $5 (piso)",
    story: "Farmacéutica. El precio toca el suelo del rango. Sin dividendo.",
    kind: "accion",
    symbol: "OK4U", price: 5, dividend: 0, range: "$5 – $30",
    rule: "Solo tú puedes comprar las que quieras. Todos pueden vender.",
  },
  {
    title: "Acción OK4U Drug Co. — $10",
    story: "Mercado mixto. Precio en la parte baja del rango.",
    kind: "accion",
    symbol: "OK4U", price: 10, dividend: 0, range: "$5 – $30",
    rule: "Solo tú puedes comprar. Todos pueden vender.",
  },
  {
    title: "Acción OK4U Drug Co. — $20 (ejemplo del manual)",
    story: "La fortaleza del mercado empuja el precio. Ficha de ejemplo del manual oficial, página 11.",
    kind: "accion",
    symbol: "OK4U", price: 20, dividend: 0, range: "$5 – $30",
    rule: "Solo tú puedes comprar. Todos pueden vender. Rendimiento / ROI = 0%.",
  },
  {
    title: "Acción OK4U Drug Co. — $30 (techo)",
    story: "Precio en el techo del rango histórico.",
    kind: "accion",
    symbol: "OK4U", price: 30, dividend: 0, range: "$5 – $30",
    rule: "Solo tú puedes comprar. Todos pueden vender. Comprar en el techo es arriesgado.",
  },
  {
    title: "Acción MYT4U Electronics — $5",
    story: "Empresa de electrónica. Piso del rango. Sin flujo. Especulación pura.",
    kind: "accion",
    symbol: "MYT4U", price: 5, dividend: 0, range: "$5 – $30",
    rule: "Solo tú puedes comprar. Todos pueden vender.",
  },
  {
    title: "Acción MYT4U Electronics — $10",
    story: "Electrónica. Precio bajo-medio.",
    kind: "accion",
    symbol: "MYT4U", price: 10, dividend: 0, range: "$5 – $30",
    rule: "Solo tú puedes comprar. Todos pueden vender.",
  },
  {
    title: "Acción MYT4U Electronics — $20",
    story: "Electrónica. Precio medio-alto.",
    kind: "accion",
    symbol: "MYT4U", price: 20, dividend: 0, range: "$5 – $30",
    rule: "Solo tú puedes comprar. Todos pueden vender.",
  },
  {
    title: "Acción MYT4U Electronics — $30",
    story: "Electrónica en el techo.",
    kind: "accion",
    symbol: "MYT4U", price: 30, dividend: 0, range: "$5 – $30",
    rule: "Solo tú puedes comprar. Todos pueden vender.",
  },
  {
    title: "Acción ON2U Entertainment — $5",
    story: "Estudio de entretenimiento. Piso del rango.",
    kind: "accion",
    symbol: "ON2U", price: 5, dividend: 0, range: "$5 – $40",
    rule: "Solo tú puedes comprar. Todos pueden vender.",
  },
  {
    title: "Acción ON2U Entertainment — $20",
    story: "Entretenimiento. Precio medio.",
    kind: "accion",
    symbol: "ON2U", price: 20, dividend: 0, range: "$5 – $40",
    rule: "Solo tú puedes comprar. Todos pueden vender.",
  },
  {
    title: "Acción ON2U Entertainment — $40",
    story: "Entretenimiento en máximos.",
    kind: "accion",
    symbol: "ON2U", price: 40, dividend: 0, range: "$5 – $40",
    rule: "Solo tú puedes comprar. Todos pueden vender.",
  },
  {
    title: "Split de acciones (desdoblamiento)",
    story: "Una empresa anuncia split 2×1: el número de acciones se duplica y el precio se divide por dos.",
    kind: "accion",
    rule: "Si posees el símbolo indicado, duplica el número de acciones y divide el costo por acción entre 2. El valor total no cambia; cambia la liquidez futura.",
  },
  {
    title: "Monedas de oro Krugerrand (3 onzas)",
    story: "Tres onzas de oro sudafricano. No pagan flujo. Se venden cuando El Mercado nombra oro.",
    kind: "oro",
    cost: 3000, down: 3000, cashFlow: 0,
    rule: "Solo tú puedes comprar. El oro se vende únicamente con ficha de Mercado que lo nombre.",
  },
  {
    title: "Monedas de oro Krugerrand (5 onzas)",
    story: "Cinco onzas. Cobertura contra inflación, sin ingreso pasivo.",
    kind: "oro",
    cost: 5000, down: 5000, cashFlow: 0,
    rule: "Solo tú puedes comprar.",
  },
  {
    title: "Monedas españolas «piezas de a ocho» (siglo XVI)",
    story: "Piezas auténticas de la ceca de La Habana. Coleccionables. Sin flujo.",
    kind: "oro",
    cost: 500, down: 500, cashFlow: 0,
    rule: "Solo tú puedes comprar. Un coleccionista puede ofrecer $5.000 en El Mercado.",
  },
  {
    title: "Terreno — 20 acres",
    story: "Parcela residencial. Cero flujo de caja. Se gana (o se pierde) al venderla en El Mercado.",
    kind: "terreno",
    cost: 30000, down: 5000, mortgage: 25000, cashFlow: 0,
    rule: "Úsala tú o véndela a otro jugador. Un constructor puede ofrecer $200.000 más adelante.",
    sellable: true,
  },
  {
    title: "Terreno — 10 acres con arroyo",
    story: "Diez acres con arroyo. Sin flujo. Especulación urbanística.",
    kind: "terreno",
    cost: 15000, down: 5000, mortgage: 10000, cashFlow: 0,
    rule: "Úsala tú o véndela a otro jugador. Un constructor puede ofrecer $150.000 para un parque.",
    sellable: true,
  },
  {
    title: "Préstamo a la cuñada — $5.000",
    story: "Tu cuñada necesita $5.000 para un «negocio seguro». Puede devolver con premio… o no.",
    kind: "prestamo",
    cost: 5000, down: 5000, cashFlow: 0,
    rule: "Si aceptas, pagas $5.000. Una ficha posterior de Mercado u Oportunidad resuelve si recuperas $0, $5.000 o $15.000. Alto riesgo, cero flujo.",
  },
  {
    title: "Start-up de software (invento)",
    story: "Un amigo programador necesita $5.000 para terminar un producto. Por ahora, cero flujo.",
    kind: "negocio",
    cost: 5000, down: 5000, cashFlow: 0,
    rule: "Úsala tú o véndela a otro jugador. El Mercado puede ofrecer $100.000 por la empresa.",
    sellable: true,
  },
  {
    title: "Start-up de widgets (invento)",
    story: "Método ingenioso para fabricar widgets. Requiere $5.000. Cero flujo hasta que alguien compre la empresa.",
    kind: "negocio",
    cost: 5000, down: 5000, cashFlow: 0,
    rule: "Úsala tú o véndela a otro jugador. El Mercado puede ofrecer $50.000.",
    sellable: true,
  },
];

export const bigDeals: BigDeal[] = [
  {
    title: "Casa de apartamentos — 12 unidades (ficha del manual)",
    story: "12 unidades a las afueras, ofrecidas por heredero de un manitas. Larga lista de espera. Ficha de ejemplo del manual, página 11.",
    kind: "inmueble",
    cost: 350000, down: 50000, mortgage: 300000, cashFlow: 2400, roi: "58% anual (CF×12 / entrada)",
    rule: "Úsala tú o véndela a otro jugador.",
  },
  {
    title: "Casa 3/2 — barrio difícil, flujo positivo",
    story: "Barrio rough. Los alquileres son flojos, pero el flujo sigue en positivo.",
    kind: "inmueble",
    cost: 65000, down: 8000, mortgage: 57000, cashFlow: 180, roi: "27%",
    rule: "Úsala tú o véndela a otro jugador.",
  },
  {
    title: "Dúplex — inquilinos estables",
    story: "Dos unidades. Dueño se jubila. Inquilinos de largo plazo.",
    kind: "inmueble",
    cost: 170000, down: 25000, mortgage: 145000, cashFlow: 820, roi: "39%",
    rule: "Úsala tú o véndela a otro jugador.",
  },
  {
    title: "Dúplex — necesita pintura",
    story: "Buena estructura, cosmética pendiente. Precio negociado.",
    kind: "inmueble",
    cost: 140000, down: 16000, mortgage: 124000, cashFlow: 500, roi: "38%",
    rule: "Úsala tú o véndela a otro jugador.",
  },
  {
    title: "Dúplex — zona en auge",
    story: "Nueva parada de tren anunciada. El vendedor no lo sabe.",
    kind: "inmueble",
    cost: 200000, down: 30000, mortgage: 170000, cashFlow: 900, roi: "36%",
    rule: "Úsala tú o véndela a otro jugador.",
  },
  {
    title: "4-plex — administrador in situ",
    story: "Cuatro unidades con administrador que vive en una. Números limpios.",
    kind: "inmueble",
    cost: 220000, down: 40000, mortgage: 180000, cashFlow: 1400, roi: "42%",
    rule: "Úsala tú o véndela a otro jugador.",
  },
  {
    title: "4-plex — $100.000 (ejemplo de Pat)",
    story: "Cuatro unidades. Entrada $20.000, hipoteca $80.000, flujo $800. Es el 4-plex del ejemplo del camionero Pat en el manual.",
    kind: "inmueble",
    cost: 100000, down: 20000, mortgage: 80000, cashFlow: 800, roi: "48%",
    rule: "Úsala tú o véndela a otro jugador.",
  },
  {
    title: "4-plex — vacantes altas",
    story: "Dos unidades vacías. El flujo actual es bajo; sube si llenas.",
    kind: "inmueble",
    cost: 180000, down: 24000, mortgage: 156000, cashFlow: 400, roi: "20%",
    rule: "Úsala tú o véndela a otro jugador.",
  },
  {
    title: "8-plex — paquete de inversor cansado",
    story: "Ocho unidades. El dueño se muda al extranjero y quiere salir ya.",
    kind: "inmueble",
    cost: 320000, down: 40000, mortgage: 280000, cashFlow: 2200, roi: "66%",
    rule: "Úsala tú o véndela a otro jugador.",
  },
  {
    title: "8-plex — financiación creativa",
    story: "El vendedor financia parte. Entrada relativamente baja.",
    kind: "inmueble",
    cost: 280000, down: 24000, mortgage: 256000, cashFlow: 1200, roi: "60%",
    rule: "Úsala tú o véndela a otro jugador.",
  },
  {
    title: "Edificio de 24 unidades",
    story: "Pequeño edificio. Gestión profesional recomendada.",
    kind: "inmueble",
    cost: 575000, down: 75000, mortgage: 500000, cashFlow: 3100, roi: "50%",
    rule: "Úsala tú o véndela a otro jugador.",
  },
  {
    title: "Edificio de 48 unidades",
    story: "Complejo mediano. Números institucionales.",
    kind: "inmueble",
    cost: 1240000, down: 200000, mortgage: 1040000, cashFlow: 6500, roi: "39%",
    rule: "Úsala tú o véndela a otro jugador.",
  },
  {
    title: "Edificio de 60 unidades",
    story: "Sesenta departamentos. Gran salto de flujo.",
    kind: "inmueble",
    cost: 1350000, down: 300000, mortgage: 1050000, cashFlow: 8000, roi: "32%",
    rule: "Úsala tú o véndela a otro jugador.",
  },
  {
    title: "Bed & Breakfast",
    story: "Posada con encanto. El flujo depende de la ocupación turística.",
    kind: "inmueble",
    cost: 150000, down: 30000, mortgage: 120000, cashFlow: 750, roi: "30%",
    rule: "Se registra como Bienes Raíces. Úsala tú o véndela a otro jugador.",
  },
  {
    title: "Centro comercial de barrio",
    story: "Pequeño strip mall con tres locales. Uno ancla de comida.",
    kind: "inmueble",
    cost: 450000, down: 80000, mortgage: 370000, cashFlow: 2800, roi: "42%",
    rule: "Se registra como Bienes Raíces.",
  },
  {
    title: "Franquicia de pizza (2 locales)",
    story: "Dos pizzerías con marca reconocida. Ejemplo clásico de Gran Negocio.",
    kind: "negocio",
    cost: 500000, down: 100000, mortgage: 400000, cashFlow: 5000, roi: "60%",
    rule: "Úsala tú o véndela a otro jugador. Se registra bajo Negocios.",
  },
  {
    title: "Lavandería automática (negocio automatizado)",
    story: "Tecnología antes que personas. El manual llama a esto Automated Business.",
    kind: "negocio",
    cost: 150000, down: 20000, mortgage: 130000, cashFlow: 1250, roi: "75%",
    rule: "Úsala tú o véndela. En bancarrota se vende a ½ de la entrada.",
  },
  {
    title: "Video / Pinball (ejemplo de Pat)",
    story: "Sala de recreativos. Entrada $20.000, costo $100.000, flujo $1.600. Ejemplo del manual.",
    kind: "negocio",
    cost: 100000, down: 20000, mortgage: 80000, cashFlow: 1600, roi: "96%",
    rule: "Se registra bajo Negocios.",
  },
  {
    title: "Car wash (lavado de autos)",
    story: "Túnel automático. Poco personal.",
    kind: "negocio",
    cost: 180000, down: 25000, mortgage: 155000, cashFlow: 1500, roi: "72%",
    rule: "Úsala tú o véndela a otro jugador.",
  },
  {
    title: "Sociedad limitada — pozo petrolero",
    story: "Participación en un limited partnership. Flujo mensual a cambio de iliquidez.",
    kind: "negocio",
    cost: 25000, down: 25000, mortgage: 0, cashFlow: 500, roi: "24%",
    rule: "Cualquier sociedad limitada DEBE venderse cuando El Mercado lo indique, al múltiplo que diga la ficha.",
  },
  {
    title: "Sociedad limitada — cine independiente",
    story: "Cuota de un film. Alto riesgo percibido, flujo contractual.",
    kind: "negocio",
    cost: 30000, down: 30000, mortgage: 0, cashFlow: 600, roi: "24%",
    rule: "Se vende obligatoriamente si sale «Limited Partnership Sold».",
  },
  {
    title: "Franquicia de hamburguesas",
    story: "Una unidad de cadena nacional.",
    kind: "negocio",
    cost: 400000, down: 80000, mortgage: 320000, cashFlow: 2500, roi: "38%",
    rule: "Úsala tú o véndela a otro jugador.",
  },
  {
    title: "IPO de software — apuesta de dado",
    story: "Compras 250.000 acciones a 10¢. Si sacas 6 en un dado, suben a $2 y cobras $500.000. Si no, $0.",
    kind: "negocio",
    cost: 25000, down: 25000, mortgage: 0, cashFlow: 0, roi: "binario",
    rule: "Tira un dado. 6 = $500.000 de efectivo. 1–5 = pierdes la entrada. No queda activo residual.",
  },
  {
    title: "IPO de biotecnología — apuesta de dado",
    story: "500.000 acciones a 10¢. 5 o 6 en un dado: suben a $1 y cobras $500.000. Si no, $0.",
    kind: "negocio",
    cost: 50000, down: 50000, mortgage: 0, cashFlow: 0, roi: "binario",
    rule: "Tira un dado. 5–6 = $500.000. 1–4 = pierdes la entrada.",
  },
];

export const marketCards: MarketCard[] = [
  {
    title: "Comprador de condominios 2/1",
    story: "Un inversor busca condominios de 2 habitaciones y 1 baño.",
    effect: "Todo jugador que posea exactamente un Condo 2BR/1BA puede venderlo al precio indicado (típicamente $45.000–$65.000). Liquidación = precio − hipoteca.",
  },
  {
    title: "Comprador de casas 3/2",
    story: "Familias buscan casas 3 habitaciones / 2 baños.",
    effect: "Quien tenga exactamente House 3BR/2BA puede vender al precio de la ficha (rango habitual $65.000–$135.000).",
  },
  {
    title: "Comprador de dúplex / 4-plex / 8-plex — $25.000 por unidad",
    story: "Fondo familiar ofrece $25.000 por unidad.",
    effect: "Dúplex = $50.000, 4-plex = $100.000, 8-plex = $200.000. Todos los dueños del tipo exacto pueden vender.",
  },
  {
    title: "Comprador de dúplex / 4-plex / 8-plex — $30.000 por unidad",
    story: "Oferta más agresiva: $30.000 por unidad.",
    effect: "Dúplex $60.000, 4-plex $120.000, 8-plex $240.000. Todos pueden vender.",
  },
  {
    title: "Comprador de dúplex / 4-plex / 8-plex — $40.000 por unidad",
    story: "Mercado caliente. $40.000 por unidad.",
    effect: "Dúplex $80.000, 4-plex $160.000, 8-plex $320.000.",
  },
  {
    title: "Comprador de dúplex / 4-plex / 8-plex — $50.000 por unidad",
    story: "Pico de ciclo. $50.000 por unidad.",
    effect: "Dúplex $100.000, 4-plex $200.000, 8-plex $400.000. Revisa si el precio cubre hipoteca + ganancia.",
  },
  {
    title: "Inflación — suben los alquileres",
    story: "La inflación empuja los alquileres al alza.",
    effect: "Añade el flujo extra que indique la ficha (p. ej. +$100) a CADA inmueble residencial que poseas. Actualiza Ingreso Pasivo, Ingreso Total y Flujo Mensual.",
  },
  {
    title: "Inflación — bajan los alquileres",
    story: "Exceso de oferta. Los alquileres se debilitan.",
    effect: "Resta el flujo indicado a cada inmueble afectado. Si un inmueble queda en flujo negativo, sigue siendo un pasivo de hecho.",
  },
  {
    title: "GRO4US sube / baja",
    story: "El fondo cotiza al precio de hoy.",
    effect: "Quienes tengan GRO4US pueden vender al precio de la ficha. Nadie más compra salvo que la ficha lo permita.",
  },
  {
    title: "OK4U / MYT4U / ON2U — cotización",
    story: "El Mercado fija el precio de hoy para ese símbolo exacto.",
    effect: "Solo se vende el símbolo exacto. «OK4U» no sirve para vender MYT4U. Precio × número de acciones = efectivo.",
  },
  {
    title: "Constructor quiere 10 acres con arroyo — $150.000",
    story: "El ayuntamiento exige un parque de 10 acres o no aprueba la urbanización.",
    effect: "Quien tenga exactamente 10 acres con arroyo puede vender por $150.000. Liquidación = $150.000 − hipoteca.",
  },
  {
    title: "Comprador de 20 acres — $200.000",
    story: "Quiere recategorizar de residencial a comercial.",
    effect: "Quien tenga exactamente 20 acres puede vender por $200.000.",
  },
  {
    title: "Coleccionista de piezas de a ocho — $5.000",
    story: "Busca monedas auténticas de la ceca de La Habana, siglo XVI.",
    effect: "Quien tenga esas monedas exactas puede vender por $5.000.",
  },
  {
    title: "El oro se dispara — $600 / onza",
    story: "Disturbios en Oriente Medio. El petróleo amenaza. El oro vuela.",
    effect: "Quien tenga oro (Krugerrands, etc.) puede vender a $600 por onza.",
  },
  {
    title: "Comprador de empresa de widgets — $50.000",
    story: "Ingeniero/inventor ofrece $50.000 en efectivo por el método de fabricación.",
    effect: "Quien tenga la empresa de widgets puede vender y pierde el flujo (si lo había).",
  },
  {
    title: "Comprador de empresa de software — $100.000",
    story: "Gran compañía integrada ofrece $100.000 por el programa y la empresa.",
    effect: "Quien tenga esa empresa de software puede vender.",
  },
  {
    title: "Sociedad limitada vendida — 2× costo",
    story: "El fundador vende. Tú habías acordado salir con él.",
    effect: "TODA sociedad limitada se vende por el doble del costo original. Los nuevos dueños traen su propia financiación (tú no pagas hipoteca residual).",
  },
  {
    title: "Sociedad limitada vendida — 3× costo",
    story: "Misma cláusula, mejor precio.",
    effect: "TODA sociedad limitada se vende por el triple del costo original.",
  },
  {
    title: "Daños / techo / plagas (evento negativo)",
    story: "Un inmueble sufre un golpe: techo, plomería, vacantes.",
    effect: "Paga el efectivo o pierde el flujo que indique la ficha. A veces solo afecta a un tipo exacto de propiedad.",
  },
];

export const doodads: Doodad[] = [
  { title: "Café latte y capuchino para ti y un amigo", pay: 10 },
  { title: "Pelotas de golf nuevas", pay: 20 },
  { title: "Almuerzo con amigos", pay: 40 },
  { title: "Juguetes para los niños", pay: 50 },
  { title: "Partido de béisbol / fútbol", pay: 50 },
  { title: "Bola de boliche nueva", pay: 80 },
  { title: "Salir a cenar", pay: 80 },
  { title: "Gafas de sol imprescindibles", pay: 80 },
  { title: "Fiesta de cumpleaños", pay: 100 },
  { title: "Teléfono celular nuevo", pay: 100 },
  { title: "Caña de pescar nueva", pay: 100 },
  { title: "CDs de música", pay: 100 },
  { title: "Aparcar en zona de discapacitados (multa)", pay: 100 },
  { title: "Dos vueltas de golf", pay: 100 },
  { title: "Jugar tu número de lotería de la suerte", pay: 100 },
  { title: "Visita al dentista", pay: 100 },
  { title: "Festival aéreo", pay: 120 },
  { title: "Procesador de alimentos", pay: 150 },
  { title: "Máquina de capuchino", pay: 150 },
  { title: "Reloj de pulsera nuevo", pay: 150 },
  { title: "Concierto", pay: 180 },
  { title: "Raqueta de tenis nueva", pay: 200 },
  { title: "No resististe un cuadro de un artista local", pay: 200 },
  { title: "Casino", pay: 200 },
  { title: "Tu aniversario", pay: 200 },
  { title: "Rumor de despido: vuelves a estudiar", pay: 220 },
  { title: "Ropa nueva", pay: 250 },
  { title: "Reunión de exalumnos", pay: 250 },
  { title: "El auto necesita llantas", pay: 300 },
  { title: "Rebaja de muebles", pay: 300 },
  { title: "¡De compras!", pay: 350 },
  { title: "Auditoría fiscal — ¡ay!", pay: 350 },
  { title: "Fuga del calentador de agua", pay: 450 },
  { title: "Altavoces nuevos para el equipo", pay: 500 },
  { title: "Repintar la casa", pay: 600 },
  { title: "Se muere el aire acondicionado del auto", pay: 700 },
  { title: "Matrícula universitaria del hijo", pay: 1500 },
  { title: "Vacaciones familiares", pay: 2000 },
  { title: "Boda de tu hija", pay: 2000 },
  { title: "Tu hijo necesita brackets", pay: 2000 },
  {
    title: "Televisor de pantalla grande",
    pay: 4000,
    note: "Si pagas con tarjeta: suma $4.000 al pasivo de tarjetas y $120 al gasto mensual de tarjetas. El doodad deja de ser un golpe único y se vuelve deuda permanente hasta liquidarla entera.",
  },
  {
    title: "Barco nuevo",
    pay: 18000,
    note: "Alternativa: entrada $1.000 + préstamo de barco $17.000 como pasivo nuevo + $340 de pago mensual. Un pasivo disfrazado de premio.",
  },
];
