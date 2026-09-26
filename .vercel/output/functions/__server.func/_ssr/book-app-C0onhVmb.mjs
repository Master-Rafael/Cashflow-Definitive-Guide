import { i as __toESM } from "../_runtime.mjs";
import { G as require_jsx_runtime, K as require_react } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as Download, i as Menu, o as BookOpen, r as Printer, t as X } from "../_libs/lucide-react.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/book-app-C0onhVmb.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
function Callout({ title, children, tone = "ink" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
		className: `print-keep my-6 rounded-sm border-l-4 ${tone === "gold" ? "border-gold" : tone === "forest" ? "border-forest" : tone === "burgundy" ? "border-burgundy" : "border-rule"} bg-paper-2/80 px-4 py-3`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-sm font-semibold tracking-wide text-burgundy uppercase",
			children: title
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-2 space-y-2 text-ink-soft",
			children
		})]
	});
}
function Steps({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
		className: "my-6 space-y-3",
		children: items.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
			className: "print-keep flex gap-3 rounded-sm border border-rule bg-paper px-3 py-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-xl font-semibold text-burgundy tabular-nums",
				children: s.n
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-semibold text-ink",
				children: s.t
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-1 text-sm text-ink-soft",
				children: s.d
			})] })]
		}, s.n))
	});
}
function Formula({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "print-keep my-4 rounded-sm bg-ink px-4 py-3 text-left font-display text-base break-words text-paper sm:text-center sm:text-lg",
		children
	});
}
function H2({ id, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
		id,
		className: "mt-12 scroll-mt-24 font-display text-3xl font-semibold text-burgundy",
		children
	});
}
function H3({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
		className: "mt-8 font-display text-xl font-semibold text-ink",
		children
	});
}
function P({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mt-4 leading-relaxed text-ink-soft",
		children
	});
}
function Ul({ items }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-3 list-disc space-y-1.5 pl-5 text-ink-soft",
		children: items.map((it, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: it }, i))
	});
}
function Chapter1() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-sm tracking-[0.22em] text-gold uppercase",
			children: "Capítulo 1"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl font-semibold text-burgundy sm:text-5xl",
			children: "Introducción y filosofía financiera"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 font-display text-xl italic text-ink-soft",
			children: "La Carrera de la Rata frente a la Vía Rápida"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("blockquote", {
			className: "mt-8 border-l-4 border-gold pl-4 font-display text-2xl leading-snug text-ink",
			children: ["El dinero no es lo más importante de la vida…", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "mt-2 block text-lg text-ink-soft",
				children: "pero parece afectar todo lo que sí lo es."
			})]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c1-que-es",
			children: "Qué es CASHFLOW y para qué existe"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			"CASHFLOW es un juego de mesa creado por Robert Kiyosaki (CASHFLOW Technologies, Inc.) para entrenar el músculo que la escuela casi nunca entrena: leer una hoja financiera, distinguir un activo de un pasivo y construir ingreso que llega mientras duermes. El lema del manual es simple y serio:",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: "text-ink",
				children: "cuanto más juegas, más rico te vuelves"
			}),
			" — no porque el cartón imprima dólares, sino porque tu cerebro empieza a ver oportunidades donde antes solo veía facturas."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Se juega en dos partes, como la vida de casi cualquiera. Primero estás atrapado en un círculo interior: sueldo, gastos, deudas, sorpresas. Luego —si construyes ingreso pasivo de verdad— sales a un anillo exterior donde el dinero trabaja y tú eliges sueños. El tablero no es decoración. Es un mapa de dos economías." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c1-patrones",
			children: "Los tres patrones de flujo (el corazón de la filosofía)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Imagina tres cubetas con un grifo y un agujero. El grifo es el ingreso. El agujero son los gastos. La cubeta es tu vida." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-6 grid gap-4 md:grid-cols-3",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "print-keep rounded-sm border border-rule bg-paper p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm tracking-wide text-burgundy uppercase",
							children: "Pobres"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-semibold",
							children: "Ingreso → Gastos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-ink-soft",
							children: "Cada peso que entra se gasta. No hay activos que produzcan. Solo hay cuentas: renta, comida, ropa, transporte, impuestos. Trabajan toda la vida para enfrentar gastos continuos y llegan al final con poco."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "print-keep rounded-sm border border-rule bg-paper p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm tracking-wide text-burgundy uppercase",
							children: "Clase media"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-semibold",
							children: "Ingreso → Gastos + Pasivos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-ink-soft",
							children: "Ganan más, y compran cosas que parecen riqueza: casa más grande, auto más nuevo, tarjetas. Esos «premios» son pasivos: sacan dinero cada mes. Trabajan para pagar deudas y, si tienen suerte, llegan a un retiro de clase media."
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "print-keep rounded-sm border border-forest bg-forest/5 p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-sm tracking-wide text-forest uppercase",
							children: "Ricos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 font-semibold",
							children: "Activos → Ingreso que cubre gastos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "mt-2 text-sm text-ink-soft",
							children: "Compran cosas que meten dinero al bolsillo. El ingreso de los activos paga la vida. El sueldo deja de ser el motor. Ese es el momento en que el juego —y la vida— cambian de pista."
						})
					]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			title: "Analogía del taxi",
			tone: "gold",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Un sueldo es un taxi: si dejas de pedalear el taxímetro, el viaje se acaba. Un activo con flujo es un metro: pasa aunque tú no lo conduzcas. La Carrera de la Rata te entrena a ser un taxista cada vez mejor pagado. La Vía Rápida te pide construir vías de metro." })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c1-carrera",
			children: "Parte I — La Carrera de la Rata"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "El círculo interior del tablero. En la vida real es donde la mayoría estamos presos día tras día: trabajar, cobrar, gastar, repetir. Tu pieza (la rata de tu color) corre aquí." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: "text-ink",
				children: "Meta:"
			}),
			" comprar inversiones que den flujo de caja (ingreso pasivo) hasta que ese ingreso pasivo sea ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "mayor" }),
			" que tus gastos totales. No igual. Mayor. Un dólar de más es la diferencia entre seguir girando y salir."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, { children: [
			"Ingreso pasivo ",
			">",
			" Gastos totales → puedes salir al inicio de tu turno"
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "El ingreso pasivo es la suma de intereses + dividendos + flujo inmobiliario + flujo de negocios. El salario NO cuenta para salir. Por eso un médico con $13.200 de sueldo puede tardar más que un conserje con $1.600: su jaula de gastos es enorme y el mazo de fichas paga los mismos $200 o $800 a todo el mundo." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c1-via",
			children: "Parte II — La Vía Rápida"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "El anillo exterior. En la vida real es donde los ricos juegan el juego del dinero. Ya no aplican tu salario, tu hipoteca de vivienda ni las fichas de Oportunidad, Mercado o Cosas. El banco te «compra» la vida anterior: te entrega 100 veces tu ingreso pasivo. El manual lo explica así: demostraste inteligencia financiera, tus inversiones prosperaron, reinvertiste y en una década (comprimida en un volteo de hoja) multiplicaste el flujo por 100." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ul, { items: ["Comprar tu Sueño (casillas rosa / nubes): si eres el primero en caer en el que elegiste al inicio y pagarlo, ganas y el juego termina.", "Aumentar tu flujo mensual comprando negocios verdes hasta sumar $50.000 extra de flujo en la Vía Rápida."] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c1-ganar",
			children: "Cómo se gana — las dos puertas"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Ganas CASHFLOW si se cumple una de estas dos condiciones (la primera que ocurra cierra la partida):" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, { items: [{
			n: "1",
			t: "Comprar tu Sueño",
			d: "Debes caer en la casilla rosa que marcaste con tu queso al inicio y tener el efectivo para pagarla. Comprar OTROS sueños no te hace ganar (aunque puedes comprarlos). Si otro jugador cae en TU sueño, el precio de ese sueño sube un 100% de su costo original por cada ficha ajena."
		}, {
			n: "2",
			t: "Acumular $50.000 de flujo extra en la Vía Rápida",
			d: "Tu meta escrita en la hoja de «Felicitaciones» es: Ingreso inicial del Día de CASHFLOW + $50.000. Lo consigues comprando negocios verdes (y acertando algunas apuestas de dado)."
		}] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			title: "Lo que NO gana el juego",
			tone: "burgundy",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Tener mucho efectivo sin sueño ni flujo extra. Tener el sueldo más alto. Ser el primero en dar la vuelta. Sobrevivir a los demás. El juego premia una sola cosa: o tu sueño pagado, o $50.000 de flujo nuevo en la pista de los ricos." })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c1-plan",
			children: "El plan del millonario de 3 horas"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "El manual cierra con un método de aprendizaje, no con un truco. Tener diversión es la segunda mejor forma de aprender; enseñar a un amigo es la primera. CASHFLOW se diseñó para que cada jugador sea también maestro: el auditor a tu derecha, las fichas leídas en voz alta, la hoja a la vista." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, { items: [
			{
				n: "1",
				t: "Reúne de 1 a 5 amigos serios",
				d: "Gente que quiera volverse rica de verdad, no solo pasar el rato."
			},
			{
				n: "2",
				t: "Reserva 3 horas",
				d: "Una partida típica comprime años de vida financiera en una noche."
			},
			{
				n: "3",
				t: "Juega una vez al mes durante un año",
				d: "Ejemplo del manual: el tercer sábado, de 9:00 a 12:00. La repetición es la base del aprendizaje."
			},
			{
				n: "4",
				t: "Después, hablen de la vida real",
				d: "¿Están bajando deudas o gastos? ¿Sube el ahorro? ¿Encontraron algo emocionante en qué invertir?"
			},
			{
				n: "5",
				t: "Ahora jueguen EN SERIO",
				d: "Cuando dominen el juego, cada uno pone SUS ingresos y gastos reales en la hoja. A ver si ese individuo sale de la Carrera de la Rata."
			},
			{
				n: "6",
				t: "Empiecen a tiempo, terminen a tiempo",
				d: "Acuerden aparecer. Apoyen el desarrollo de los demás. Diviértanse mientras la mente saca a relucir el genio financiero."
			}
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Dato que el manual pone en negro: el estadounidense medio de 50 años tiene apenas $2.300 ahorrados para el retiro (J. Arthur Urcivoli, Merrill Lynch, citado en el original). El juego existe para que esa estadística no sea la tuya." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c1-promesa",
			children: "La promesa — y el límite"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "En un año, dice el manual, la vida se ve otra: futuro más seguro, mente más afilada, oportunidades por todas partes… en bloques de tres horas. Esta guía no sustituye el juego oficial ni autoriza uso comercial (CASHFLOW® es marca registrada de CASHFLOW Technologies, Inc.). Es un compañero de estudio: reglas, hoja, filosofía y una partida completa narrada para que el aprendizaje no se quede en el cartón." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Patente y créditos" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "El juego de mesa está cubierto por la patente estadounidense 6.826.878 y otras pendientes. © 1996, 1997, 1999, 2000 CASHFLOW Technologies, Inc. Manual de referencia de esta guía: G101CT15 y la traducción española adjunta «CASHFLOW 101 — Reglas del juego»." })
	] });
}
var professions = [
	{
		id: "conserje",
		name: "Conserje",
		english: "Janitor",
		salary: 1600,
		taxes: 280,
		homePayment: 200,
		schoolPayment: 0,
		carPayment: 60,
		creditPayment: 60,
		retailPayment: 50,
		otherExpenses: 300,
		perChild: 70,
		totalExpenses: 950,
		cashFlow: 650,
		savings: 560,
		homeMortgage: 2e4,
		schoolLoans: 0,
		carLoans: 4e3,
		creditCards: 2e3,
		retailDebt: 1e3,
		insight: "El salario más bajo del mazo. Paradójicamente, suele salir antes de la Carrera de la Rata: el objetivo de ingreso pasivo ($950) es pequeño y cada activo de $200 de flujo cubre una porción enorme del camino."
	},
	{
		id: "mecanico",
		name: "Mecánico",
		english: "Mechanic",
		salary: 2e3,
		taxes: 360,
		homePayment: 300,
		schoolPayment: 0,
		carPayment: 60,
		creditPayment: 60,
		retailPayment: 50,
		otherExpenses: 450,
		perChild: 110,
		totalExpenses: 1280,
		cashFlow: 720,
		savings: 670,
		homeMortgage: 31e3,
		schoolLoans: 0,
		carLoans: 3e3,
		creditCards: 2e3,
		retailDebt: 1e3,
		insight: "Excelente punto de partida: ahorro inicial alto y meta de escape modesta. En simulaciones masivas suele ser de las profesiones más rápidas en salir."
	},
	{
		id: "secretaria",
		name: "Secretaria",
		english: "Secretary",
		salary: 2500,
		taxes: 460,
		homePayment: 400,
		schoolPayment: 0,
		carPayment: 80,
		creditPayment: 60,
		retailPayment: 50,
		otherExpenses: 570,
		perChild: 140,
		totalExpenses: 1620,
		cashFlow: 880,
		savings: 710,
		homeMortgage: 38e3,
		schoolLoans: 0,
		carLoans: 4e3,
		creditCards: 2e3,
		retailDebt: 1e3,
		insight: "Mismos números que el Camionero. El ahorro de $710 permite entrar rápido a un primer inmueble pequeño si aparece una buena ficha."
	},
	{
		id: "camionero",
		name: "Camionero",
		english: "Truck Driver",
		salary: 2500,
		taxes: 460,
		homePayment: 400,
		schoolPayment: 0,
		carPayment: 80,
		creditPayment: 60,
		retailPayment: 50,
		otherExpenses: 570,
		perChild: 140,
		totalExpenses: 1620,
		cashFlow: 880,
		savings: 750,
		homeMortgage: 38e3,
		schoolLoans: 0,
		carLoans: 4e3,
		creditCards: 2e3,
		retailDebt: 1e3,
		insight: "Idéntico perfil salarial que Secretaria, con $40 más de ahorro. El manual oficial usa a un camionero (Pat) como ejemplo avanzado de hoja con varios activos."
	},
	{
		id: "policia",
		name: "Policía",
		english: "Police Officer",
		salary: 3e3,
		taxes: 580,
		homePayment: 400,
		schoolPayment: 0,
		carPayment: 100,
		creditPayment: 60,
		retailPayment: 50,
		otherExpenses: 690,
		perChild: 160,
		totalExpenses: 1880,
		cashFlow: 1120,
		savings: 520,
		homeMortgage: 46e3,
		schoolLoans: 0,
		carLoans: 5e3,
		creditCards: 2e3,
		retailDebt: 1e3,
		insight: "El cheque de pago supera los $1.000. Cuidado con los hijos: cada niño cuesta $160 y aleja la meta de escape."
	},
	{
		id: "enfermera",
		name: "Enfermera",
		english: "Nurse",
		salary: 3100,
		taxes: 600,
		homePayment: 400,
		schoolPayment: 0,
		carPayment: 100,
		creditPayment: 90,
		retailPayment: 50,
		otherExpenses: 710,
		perChild: 170,
		totalExpenses: 1950,
		cashFlow: 1150,
		savings: 480,
		homeMortgage: 47e3,
		schoolLoans: 0,
		carLoans: 5e3,
		creditCards: 3e3,
		retailDebt: 1e3,
		insight: "Perfil similar al Policía. El ingreso pasivo objetivo es $1.950: dos o tres inmuebles pequeños bien elegidos suelen bastar."
	},
	{
		id: "maestro",
		name: "Maestro (K-12)",
		english: "Teacher (K-12)",
		salary: 3300,
		taxes: 630,
		homePayment: 500,
		schoolPayment: 0,
		carPayment: 100,
		creditPayment: 90,
		retailPayment: 50,
		otherExpenses: 760,
		perChild: 180,
		totalExpenses: 2130,
		cashFlow: 1170,
		savings: 400,
		homeMortgage: 5e4,
		schoolLoans: 0,
		carLoans: 5e3,
		creditCards: 3e3,
		retailDebt: 1e3,
		insight: "La profesión del Capítulo 5. Cheque de $1.170 y meta de $2.130. El ahorro inicial es bajo: hay que ser selectivo con las primeras fichas."
	},
	{
		id: "gerente",
		name: "Gerente de negocios",
		english: "Business Manager",
		salary: 4600,
		taxes: 910,
		homePayment: 700,
		schoolPayment: 0,
		carPayment: 120,
		creditPayment: 90,
		retailPayment: 50,
		otherExpenses: 1e3,
		perChild: 240,
		totalExpenses: 2870,
		cashFlow: 1730,
		savings: 400,
		homeMortgage: 75e3,
		schoolLoans: 0,
		carLoans: 6e3,
		creditCards: 3e3,
		retailDebt: 1e3,
		insight: "Más cheque, más gastos. Los Grandes Negocios empiezan a ser accesibles antes, pero la meta de escape ($2.870) exige activos de mayor flujo."
	},
	{
		id: "ingeniero",
		name: "Ingeniero",
		english: "Engineer",
		salary: 4900,
		taxes: 1050,
		homePayment: 700,
		schoolPayment: 0,
		carPayment: 140,
		creditPayment: 120,
		retailPayment: 50,
		otherExpenses: 1090,
		perChild: 250,
		totalExpenses: 3150,
		cashFlow: 1750,
		savings: 400,
		homeMortgage: 75e3,
		schoolLoans: 0,
		carLoans: 7e3,
		creditCards: 4e3,
		retailDebt: 1e3,
		insight: "Casi el mismo cheque que el Gerente, con una meta $280 más alta. La tentación de comprar «por comprar» es el enemigo: el flujo, no el costo, es lo que libera."
	},
	{
		id: "abogado",
		name: "Abogado",
		english: "Lawyer",
		salary: 7500,
		taxes: 1830,
		homePayment: 1100,
		schoolPayment: 0,
		carPayment: 220,
		creditPayment: 180,
		retailPayment: 50,
		otherExpenses: 1650,
		perChild: 380,
		totalExpenses: 5030,
		cashFlow: 2470,
		savings: 400,
		homeMortgage: 115e3,
		schoolLoans: 0,
		carLoans: 11e3,
		creditCards: 6e3,
		retailDebt: 1e3,
		insight: "Alto ingreso, alta jaula. Cada hijo cuesta $380. Necesita mucho más ingreso pasivo que un Conserje para salir… con el mismo mazo de fichas."
	},
	{
		id: "piloto",
		name: "Piloto de aerolínea",
		english: "Airline Pilot",
		salary: 9500,
		taxes: 2350,
		homePayment: 1330,
		schoolPayment: 0,
		carPayment: 300,
		creditPayment: 660,
		retailPayment: 50,
		otherExpenses: 2210,
		perChild: 480,
		totalExpenses: 6900,
		cashFlow: 2600,
		savings: 400,
		homeMortgage: 143e3,
		schoolLoans: 0,
		carLoans: 15e3,
		creditCards: 22e3,
		retailDebt: 1e3,
		insight: "Tarjetas de crédito brutales: $22.000 de saldo y $660 al mes. Liquidar esa deuda (si hay efectivo) puede ser tan poderoso como comprar un activo."
	},
	{
		id: "medico",
		name: "Médico (MD)",
		english: "Doctor (MD)",
		salary: 13200,
		taxes: 3420,
		homePayment: 1900,
		schoolPayment: 750,
		carPayment: 380,
		creditPayment: 270,
		retailPayment: 50,
		otherExpenses: 2880,
		perChild: 640,
		totalExpenses: 9650,
		cashFlow: 3550,
		savings: 400,
		homeMortgage: 202e3,
		schoolLoans: 15e4,
		carLoans: 19e3,
		creditCards: 9e3,
		retailDebt: 1e3,
		insight: "Cifras del manual oficial (páginas 8 y 12). Gastos ≈ 73% del salario. Préstamo escolar de $150.000 que NO se puede liquidar a medias y NO se borra en bancarrota. Cada hijo cuesta $640."
	}
];
var smallDeals = [
	{
		title: "Condominio 2 hab. / 1 baño — ejecución bancaria",
		story: "El banco ejecutó la hipoteca. Barrio deseable, cerca de empleo y comercios. Financiación favorable.",
		kind: "inmueble",
		cost: 4e4,
		down: 5e3,
		mortgage: 35e3,
		cashFlow: 220,
		rule: "Úsala tú o véndela a otro jugador.",
		sellable: true
	},
	{
		title: "Condominio 2/1 — pareja joven",
		story: "Pareja joven vende para pasar a una casa 3/2. Disponible pronto.",
		kind: "inmueble",
		cost: 55e3,
		down: 5e3,
		mortgage: 5e4,
		cashFlow: 160,
		rule: "Úsala tú o véndela a otro jugador.",
		sellable: true
	},
	{
		title: "Condominio 2/1 — zona mala, necesita obra",
		story: "Dueño se casa y vende. Zona complicada. Hay que invertir trabajo.",
		kind: "inmueble",
		cost: 5e4,
		down: 5e3,
		mortgage: 45e3,
		cashFlow: 100,
		rule: "Úsala tú o véndela a otro jugador.",
		sellable: true
	},
	{
		title: "Condominio 2/1 — extras de lujo (flujo negativo)",
		story: "Excelente condominio con extras. La dueña triunfa en los negocios y se muda. El alquiler no cubre la hipoteca.",
		kind: "inmueble",
		cost: 6e4,
		down: 5e3,
		mortgage: 55e3,
		cashFlow: -100,
		rule: "Úsala tú o véndela a otro jugador. Solo tiene sentido si planeas revenderlo (flip).",
		sellable: true
	},
	{
		title: "Condominio 2/1 — ciudad universitaria",
		story: "Padres venden el depto que usaba su hijo. Alta demanda de alquiler estudiantil.",
		kind: "inmueble",
		cost: 4e4,
		down: 4e3,
		mortgage: 36e3,
		cashFlow: 140,
		rule: "Úsala tú o véndela a otro jugador.",
		sellable: true
	},
	{
		title: "Casa 3/2 — cierre de sucesión",
		story: "Casa de alquiler bien mantenida, con inquilino. Sale por cierre de herencia.",
		kind: "inmueble",
		cost: 65e3,
		down: 5e3,
		mortgage: 6e4,
		cashFlow: 160,
		rule: "Úsala tú o véndela a otro jugador. Puede venderse luego entre $65.000 y $135.000.",
		sellable: true
	},
	{
		title: "Casa 3/2 — mercado deprimido",
		story: "Despidos en la zona. Buena inversión para quien tenga estómago.",
		kind: "inmueble",
		cost: 5e4,
		down: 4e3,
		mortgage: 46e3,
		cashFlow: 200,
		rule: "Úsala tú o véndela a otro jugador.",
		sellable: true
	},
	{
		title: "Casa 3/2 — mudanza urgente",
		story: "El dueño se va de la ciudad de improviso. Entrada baja.",
		kind: "inmueble",
		cost: 5e4,
		down: 3e3,
		mortgage: 47e3,
		cashFlow: 100,
		rule: "Úsala tú o véndela a otro jugador.",
		sellable: true
	},
	{
		title: "¡Gran ganga! Casa 3/2 de empresa",
		story: "La compañía compró la casa de un gerente trasladado. Seis meses en el mercado. Acaban de bajar el precio. Sin inquilino.",
		kind: "inmueble",
		cost: 45e3,
		down: 2e3,
		mortgage: 43e3,
		cashFlow: 250,
		rule: "Úsala tú o véndela a otro jugador.",
		sellable: true
	},
	{
		title: "¡Gran ganga! Casa 3/2 del gobierno",
		story: "Casa antigua recuperada por una agencia. Financiación oficial e inquilino listos.",
		kind: "inmueble",
		cost: 35e3,
		down: 2e3,
		mortgage: 33e3,
		cashFlow: 220,
		rule: "Úsala tú o véndela a otro jugador.",
		sellable: true
	},
	{
		title: "Casa 3/2 — ejecución, entrada $0",
		story: "Vacía seis meses. El banco acaba de bajar el precio. El préstamo incluye reparación estimada.",
		kind: "inmueble",
		cost: 5e4,
		down: 0,
		mortgage: 5e4,
		cashFlow: 100,
		rule: "Úsala tú o véndela a otro jugador.",
		sellable: true
	},
	{
		title: "Casa 3/2 — subasta desierta (flujo negativo)",
		story: "Departamento de carreteras ofrece casa en zona vieja. El mercado se desplomó. Nadie pujó.",
		kind: "inmueble",
		cost: 5e4,
		down: 0,
		mortgage: 5e4,
		cashFlow: -100,
		rule: "Úsala tú o véndela a otro jugador. Flip: puede venderse $65.000–$135.000.",
		sellable: true
	},
	{
		title: "Acción preferente — 2BIG Power",
		story: "Alta rentabilidad. El precio y el dividendo los fija la comisión estatal de servicios.",
		kind: "accion",
		symbol: "2BIG",
		price: 1200,
		dividend: 10,
		range: "$1.200 – $1.200",
		rule: "Todos pueden comprar o vender las acciones que quieran a este precio."
	},
	{
		title: "Acción preferente — 2BIG Power (2ª ficha)",
		story: "Misma empresa eléctrica. Precio y dividendo fijos.",
		kind: "accion",
		symbol: "2BIG",
		price: 1200,
		dividend: 10,
		range: "$1.200 – $1.200",
		rule: "Todos pueden comprar o vender las acciones que quieran a este precio."
	},
	{
		title: "Certificado de depósito — $4.000",
		story: "Un banco líder ofrece este CD especial. Interés garantizado. Se puede redimir tras cualquier periodo.",
		kind: "cd",
		symbol: "CD",
		price: 4e3,
		dividend: 20,
		range: "$4.000 – $4.000",
		rule: "Todos pueden comprar o vender a este precio."
	},
	{
		title: "Certificado de depósito — $5.000",
		story: "CD especial de un banco líder. Interés garantizado.",
		kind: "cd",
		symbol: "CD",
		price: 5e3,
		dividend: 20,
		range: "$5.000 – $5.000",
		rule: "Todos pueden comprar o vender a este precio."
	},
	{
		title: "Fondo mutuo GRO4US — precio débil $10",
		story: "Ganancias débiles de la mayoría de empresas. El fondo cae al piso de su rango.",
		kind: "fondo",
		symbol: "GRO4US",
		price: 10,
		dividend: 0,
		range: "$10 – $30",
		rule: "Solo tú puedes comprar las acciones que quieras a este precio. Todos pueden vender."
	},
	{
		title: "Fondo mutuo GRO4US — $20",
		story: "Joven gestor brillante. El mercado cree que tiene toque de Midas.",
		kind: "fondo",
		symbol: "GRO4US",
		price: 20,
		dividend: 0,
		range: "$10 – $30",
		rule: "Solo tú puedes comprar. Todos pueden vender."
	},
	{
		title: "Fondo mutuo GRO4US — $30",
		story: "Tipos de interés más bajos impulsan el mercado y el fondo.",
		kind: "fondo",
		symbol: "GRO4US",
		price: 30,
		dividend: 0,
		range: "$10 – $30",
		rule: "Solo tú puedes comprar. Todos pueden vender."
	},
	{
		title: "Fondo mutuo GRO4US — récord $40 (fuera de rango)",
		story: "Fortaleza general del mercado lleva el fondo a un máximo histórico.",
		kind: "fondo",
		symbol: "GRO4US",
		price: 40,
		dividend: 0,
		range: "$10 – $30",
		rule: "Solo tú puedes comprar. Todos pueden vender. Comprar aquí es especular por encima del rango histórico."
	},
	{
		title: "Acción OK4U Drug Co. — $5 (piso)",
		story: "Farmacéutica. El precio toca el suelo del rango. Sin dividendo.",
		kind: "accion",
		symbol: "OK4U",
		price: 5,
		dividend: 0,
		range: "$5 – $30",
		rule: "Solo tú puedes comprar las que quieras. Todos pueden vender."
	},
	{
		title: "Acción OK4U Drug Co. — $10",
		story: "Mercado mixto. Precio en la parte baja del rango.",
		kind: "accion",
		symbol: "OK4U",
		price: 10,
		dividend: 0,
		range: "$5 – $30",
		rule: "Solo tú puedes comprar. Todos pueden vender."
	},
	{
		title: "Acción OK4U Drug Co. — $20 (ejemplo del manual)",
		story: "La fortaleza del mercado empuja el precio. Ficha de ejemplo del manual oficial, página 11.",
		kind: "accion",
		symbol: "OK4U",
		price: 20,
		dividend: 0,
		range: "$5 – $30",
		rule: "Solo tú puedes comprar. Todos pueden vender. Rendimiento / ROI = 0%."
	},
	{
		title: "Acción OK4U Drug Co. — $30 (techo)",
		story: "Precio en el techo del rango histórico.",
		kind: "accion",
		symbol: "OK4U",
		price: 30,
		dividend: 0,
		range: "$5 – $30",
		rule: "Solo tú puedes comprar. Todos pueden vender. Comprar en el techo es arriesgado."
	},
	{
		title: "Acción MYT4U Electronics — $5",
		story: "Empresa de electrónica. Piso del rango. Sin flujo. Especulación pura.",
		kind: "accion",
		symbol: "MYT4U",
		price: 5,
		dividend: 0,
		range: "$5 – $30",
		rule: "Solo tú puedes comprar. Todos pueden vender."
	},
	{
		title: "Acción MYT4U Electronics — $10",
		story: "Electrónica. Precio bajo-medio.",
		kind: "accion",
		symbol: "MYT4U",
		price: 10,
		dividend: 0,
		range: "$5 – $30",
		rule: "Solo tú puedes comprar. Todos pueden vender."
	},
	{
		title: "Acción MYT4U Electronics — $20",
		story: "Electrónica. Precio medio-alto.",
		kind: "accion",
		symbol: "MYT4U",
		price: 20,
		dividend: 0,
		range: "$5 – $30",
		rule: "Solo tú puedes comprar. Todos pueden vender."
	},
	{
		title: "Acción MYT4U Electronics — $30",
		story: "Electrónica en el techo.",
		kind: "accion",
		symbol: "MYT4U",
		price: 30,
		dividend: 0,
		range: "$5 – $30",
		rule: "Solo tú puedes comprar. Todos pueden vender."
	},
	{
		title: "Acción ON2U Entertainment — $5",
		story: "Estudio de entretenimiento. Piso del rango.",
		kind: "accion",
		symbol: "ON2U",
		price: 5,
		dividend: 0,
		range: "$5 – $40",
		rule: "Solo tú puedes comprar. Todos pueden vender."
	},
	{
		title: "Acción ON2U Entertainment — $20",
		story: "Entretenimiento. Precio medio.",
		kind: "accion",
		symbol: "ON2U",
		price: 20,
		dividend: 0,
		range: "$5 – $40",
		rule: "Solo tú puedes comprar. Todos pueden vender."
	},
	{
		title: "Acción ON2U Entertainment — $40",
		story: "Entretenimiento en máximos.",
		kind: "accion",
		symbol: "ON2U",
		price: 40,
		dividend: 0,
		range: "$5 – $40",
		rule: "Solo tú puedes comprar. Todos pueden vender."
	},
	{
		title: "Split de acciones (desdoblamiento)",
		story: "Una empresa anuncia split 2×1: el número de acciones se duplica y el precio se divide por dos.",
		kind: "accion",
		rule: "Si posees el símbolo indicado, duplica el número de acciones y divide el costo por acción entre 2. El valor total no cambia; cambia la liquidez futura."
	},
	{
		title: "Monedas de oro Krugerrand (3 onzas)",
		story: "Tres onzas de oro sudafricano. No pagan flujo. Se venden cuando El Mercado nombra oro.",
		kind: "oro",
		cost: 3e3,
		down: 3e3,
		cashFlow: 0,
		rule: "Solo tú puedes comprar. El oro se vende únicamente con ficha de Mercado que lo nombre."
	},
	{
		title: "Monedas de oro Krugerrand (5 onzas)",
		story: "Cinco onzas. Cobertura contra inflación, sin ingreso pasivo.",
		kind: "oro",
		cost: 5e3,
		down: 5e3,
		cashFlow: 0,
		rule: "Solo tú puedes comprar."
	},
	{
		title: "Monedas españolas «piezas de a ocho» (siglo XVI)",
		story: "Piezas auténticas de la ceca de La Habana. Coleccionables. Sin flujo.",
		kind: "oro",
		cost: 500,
		down: 500,
		cashFlow: 0,
		rule: "Solo tú puedes comprar. Un coleccionista puede ofrecer $5.000 en El Mercado."
	},
	{
		title: "Terreno — 20 acres",
		story: "Parcela residencial. Cero flujo de caja. Se gana (o se pierde) al venderla en El Mercado.",
		kind: "terreno",
		cost: 3e4,
		down: 5e3,
		mortgage: 25e3,
		cashFlow: 0,
		rule: "Úsala tú o véndela a otro jugador. Un constructor puede ofrecer $200.000 más adelante.",
		sellable: true
	},
	{
		title: "Terreno — 10 acres con arroyo",
		story: "Diez acres con arroyo. Sin flujo. Especulación urbanística.",
		kind: "terreno",
		cost: 15e3,
		down: 5e3,
		mortgage: 1e4,
		cashFlow: 0,
		rule: "Úsala tú o véndela a otro jugador. Un constructor puede ofrecer $150.000 para un parque.",
		sellable: true
	},
	{
		title: "Préstamo a la cuñada — $5.000",
		story: "Tu cuñada necesita $5.000 para un «negocio seguro». Puede devolver con premio… o no.",
		kind: "prestamo",
		cost: 5e3,
		down: 5e3,
		cashFlow: 0,
		rule: "Si aceptas, pagas $5.000. Una ficha posterior de Mercado u Oportunidad resuelve si recuperas $0, $5.000 o $15.000. Alto riesgo, cero flujo."
	},
	{
		title: "Start-up de software (invento)",
		story: "Un amigo programador necesita $5.000 para terminar un producto. Por ahora, cero flujo.",
		kind: "negocio",
		cost: 5e3,
		down: 5e3,
		cashFlow: 0,
		rule: "Úsala tú o véndela a otro jugador. El Mercado puede ofrecer $100.000 por la empresa.",
		sellable: true
	},
	{
		title: "Start-up de widgets (invento)",
		story: "Método ingenioso para fabricar widgets. Requiere $5.000. Cero flujo hasta que alguien compre la empresa.",
		kind: "negocio",
		cost: 5e3,
		down: 5e3,
		cashFlow: 0,
		rule: "Úsala tú o véndela a otro jugador. El Mercado puede ofrecer $50.000.",
		sellable: true
	}
];
var bigDeals = [
	{
		title: "Casa de apartamentos — 12 unidades (ficha del manual)",
		story: "12 unidades a las afueras, ofrecidas por heredero de un manitas. Larga lista de espera. Ficha de ejemplo del manual, página 11.",
		kind: "inmueble",
		cost: 35e4,
		down: 5e4,
		mortgage: 3e5,
		cashFlow: 2400,
		roi: "58% anual (CF×12 / entrada)",
		rule: "Úsala tú o véndela a otro jugador."
	},
	{
		title: "Casa 3/2 — barrio difícil, flujo positivo",
		story: "Barrio rough. Los alquileres son flojos, pero el flujo sigue en positivo.",
		kind: "inmueble",
		cost: 65e3,
		down: 8e3,
		mortgage: 57e3,
		cashFlow: 180,
		roi: "27%",
		rule: "Úsala tú o véndela a otro jugador."
	},
	{
		title: "Dúplex — inquilinos estables",
		story: "Dos unidades. Dueño se jubila. Inquilinos de largo plazo.",
		kind: "inmueble",
		cost: 17e4,
		down: 25e3,
		mortgage: 145e3,
		cashFlow: 820,
		roi: "39%",
		rule: "Úsala tú o véndela a otro jugador."
	},
	{
		title: "Dúplex — necesita pintura",
		story: "Buena estructura, cosmética pendiente. Precio negociado.",
		kind: "inmueble",
		cost: 14e4,
		down: 16e3,
		mortgage: 124e3,
		cashFlow: 500,
		roi: "38%",
		rule: "Úsala tú o véndela a otro jugador."
	},
	{
		title: "Dúplex — zona en auge",
		story: "Nueva parada de tren anunciada. El vendedor no lo sabe.",
		kind: "inmueble",
		cost: 2e5,
		down: 3e4,
		mortgage: 17e4,
		cashFlow: 900,
		roi: "36%",
		rule: "Úsala tú o véndela a otro jugador."
	},
	{
		title: "4-plex — administrador in situ",
		story: "Cuatro unidades con administrador que vive en una. Números limpios.",
		kind: "inmueble",
		cost: 22e4,
		down: 4e4,
		mortgage: 18e4,
		cashFlow: 1400,
		roi: "42%",
		rule: "Úsala tú o véndela a otro jugador."
	},
	{
		title: "4-plex — $100.000 (ejemplo de Pat)",
		story: "Cuatro unidades. Entrada $20.000, hipoteca $80.000, flujo $800. Es el 4-plex del ejemplo del camionero Pat en el manual.",
		kind: "inmueble",
		cost: 1e5,
		down: 2e4,
		mortgage: 8e4,
		cashFlow: 800,
		roi: "48%",
		rule: "Úsala tú o véndela a otro jugador."
	},
	{
		title: "4-plex — vacantes altas",
		story: "Dos unidades vacías. El flujo actual es bajo; sube si llenas.",
		kind: "inmueble",
		cost: 18e4,
		down: 24e3,
		mortgage: 156e3,
		cashFlow: 400,
		roi: "20%",
		rule: "Úsala tú o véndela a otro jugador."
	},
	{
		title: "8-plex — paquete de inversor cansado",
		story: "Ocho unidades. El dueño se muda al extranjero y quiere salir ya.",
		kind: "inmueble",
		cost: 32e4,
		down: 4e4,
		mortgage: 28e4,
		cashFlow: 2200,
		roi: "66%",
		rule: "Úsala tú o véndela a otro jugador."
	},
	{
		title: "8-plex — financiación creativa",
		story: "El vendedor financia parte. Entrada relativamente baja.",
		kind: "inmueble",
		cost: 28e4,
		down: 24e3,
		mortgage: 256e3,
		cashFlow: 1200,
		roi: "60%",
		rule: "Úsala tú o véndela a otro jugador."
	},
	{
		title: "Edificio de 24 unidades",
		story: "Pequeño edificio. Gestión profesional recomendada.",
		kind: "inmueble",
		cost: 575e3,
		down: 75e3,
		mortgage: 5e5,
		cashFlow: 3100,
		roi: "50%",
		rule: "Úsala tú o véndela a otro jugador."
	},
	{
		title: "Edificio de 48 unidades",
		story: "Complejo mediano. Números institucionales.",
		kind: "inmueble",
		cost: 124e4,
		down: 2e5,
		mortgage: 104e4,
		cashFlow: 6500,
		roi: "39%",
		rule: "Úsala tú o véndela a otro jugador."
	},
	{
		title: "Edificio de 60 unidades",
		story: "Sesenta departamentos. Gran salto de flujo.",
		kind: "inmueble",
		cost: 135e4,
		down: 3e5,
		mortgage: 105e4,
		cashFlow: 8e3,
		roi: "32%",
		rule: "Úsala tú o véndela a otro jugador."
	},
	{
		title: "Bed & Breakfast",
		story: "Posada con encanto. El flujo depende de la ocupación turística.",
		kind: "inmueble",
		cost: 15e4,
		down: 3e4,
		mortgage: 12e4,
		cashFlow: 750,
		roi: "30%",
		rule: "Se registra como Bienes Raíces. Úsala tú o véndela a otro jugador."
	},
	{
		title: "Centro comercial de barrio",
		story: "Pequeño strip mall con tres locales. Uno ancla de comida.",
		kind: "inmueble",
		cost: 45e4,
		down: 8e4,
		mortgage: 37e4,
		cashFlow: 2800,
		roi: "42%",
		rule: "Se registra como Bienes Raíces."
	},
	{
		title: "Franquicia de pizza (2 locales)",
		story: "Dos pizzerías con marca reconocida. Ejemplo clásico de Gran Negocio.",
		kind: "negocio",
		cost: 5e5,
		down: 1e5,
		mortgage: 4e5,
		cashFlow: 5e3,
		roi: "60%",
		rule: "Úsala tú o véndela a otro jugador. Se registra bajo Negocios."
	},
	{
		title: "Lavandería automática (negocio automatizado)",
		story: "Tecnología antes que personas. El manual llama a esto Automated Business.",
		kind: "negocio",
		cost: 15e4,
		down: 2e4,
		mortgage: 13e4,
		cashFlow: 1250,
		roi: "75%",
		rule: "Úsala tú o véndela. En bancarrota se vende a ½ de la entrada."
	},
	{
		title: "Video / Pinball (ejemplo de Pat)",
		story: "Sala de recreativos. Entrada $20.000, costo $100.000, flujo $1.600. Ejemplo del manual.",
		kind: "negocio",
		cost: 1e5,
		down: 2e4,
		mortgage: 8e4,
		cashFlow: 1600,
		roi: "96%",
		rule: "Se registra bajo Negocios."
	},
	{
		title: "Car wash (lavado de autos)",
		story: "Túnel automático. Poco personal.",
		kind: "negocio",
		cost: 18e4,
		down: 25e3,
		mortgage: 155e3,
		cashFlow: 1500,
		roi: "72%",
		rule: "Úsala tú o véndela a otro jugador."
	},
	{
		title: "Sociedad limitada — pozo petrolero",
		story: "Participación en un limited partnership. Flujo mensual a cambio de iliquidez.",
		kind: "negocio",
		cost: 25e3,
		down: 25e3,
		mortgage: 0,
		cashFlow: 500,
		roi: "24%",
		rule: "Cualquier sociedad limitada DEBE venderse cuando El Mercado lo indique, al múltiplo que diga la ficha."
	},
	{
		title: "Sociedad limitada — cine independiente",
		story: "Cuota de un film. Alto riesgo percibido, flujo contractual.",
		kind: "negocio",
		cost: 3e4,
		down: 3e4,
		mortgage: 0,
		cashFlow: 600,
		roi: "24%",
		rule: "Se vende obligatoriamente si sale «Limited Partnership Sold»."
	},
	{
		title: "Franquicia de hamburguesas",
		story: "Una unidad de cadena nacional.",
		kind: "negocio",
		cost: 4e5,
		down: 8e4,
		mortgage: 32e4,
		cashFlow: 2500,
		roi: "38%",
		rule: "Úsala tú o véndela a otro jugador."
	},
	{
		title: "IPO de software — apuesta de dado",
		story: "Compras 250.000 acciones a 10¢. Si sacas 6 en un dado, suben a $2 y cobras $500.000. Si no, $0.",
		kind: "negocio",
		cost: 25e3,
		down: 25e3,
		mortgage: 0,
		cashFlow: 0,
		roi: "binario",
		rule: "Tira un dado. 6 = $500.000 de efectivo. 1–5 = pierdes la entrada. No queda activo residual."
	},
	{
		title: "IPO de biotecnología — apuesta de dado",
		story: "500.000 acciones a 10¢. 5 o 6 en un dado: suben a $1 y cobras $500.000. Si no, $0.",
		kind: "negocio",
		cost: 5e4,
		down: 5e4,
		mortgage: 0,
		cashFlow: 0,
		roi: "binario",
		rule: "Tira un dado. 5–6 = $500.000. 1–4 = pierdes la entrada."
	}
];
var marketCards = [
	{
		title: "Comprador de condominios 2/1",
		story: "Un inversor busca condominios de 2 habitaciones y 1 baño.",
		effect: "Todo jugador que posea exactamente un Condo 2BR/1BA puede venderlo al precio indicado (típicamente $45.000–$65.000). Liquidación = precio − hipoteca."
	},
	{
		title: "Comprador de casas 3/2",
		story: "Familias buscan casas 3 habitaciones / 2 baños.",
		effect: "Quien tenga exactamente House 3BR/2BA puede vender al precio de la ficha (rango habitual $65.000–$135.000)."
	},
	{
		title: "Comprador de dúplex / 4-plex / 8-plex — $25.000 por unidad",
		story: "Fondo familiar ofrece $25.000 por unidad.",
		effect: "Dúplex = $50.000, 4-plex = $100.000, 8-plex = $200.000. Todos los dueños del tipo exacto pueden vender."
	},
	{
		title: "Comprador de dúplex / 4-plex / 8-plex — $30.000 por unidad",
		story: "Oferta más agresiva: $30.000 por unidad.",
		effect: "Dúplex $60.000, 4-plex $120.000, 8-plex $240.000. Todos pueden vender."
	},
	{
		title: "Comprador de dúplex / 4-plex / 8-plex — $40.000 por unidad",
		story: "Mercado caliente. $40.000 por unidad.",
		effect: "Dúplex $80.000, 4-plex $160.000, 8-plex $320.000."
	},
	{
		title: "Comprador de dúplex / 4-plex / 8-plex — $50.000 por unidad",
		story: "Pico de ciclo. $50.000 por unidad.",
		effect: "Dúplex $100.000, 4-plex $200.000, 8-plex $400.000. Revisa si el precio cubre hipoteca + ganancia."
	},
	{
		title: "Inflación — suben los alquileres",
		story: "La inflación empuja los alquileres al alza.",
		effect: "Añade el flujo extra que indique la ficha (p. ej. +$100) a CADA inmueble residencial que poseas. Actualiza Ingreso Pasivo, Ingreso Total y Flujo Mensual."
	},
	{
		title: "Inflación — bajan los alquileres",
		story: "Exceso de oferta. Los alquileres se debilitan.",
		effect: "Resta el flujo indicado a cada inmueble afectado. Si un inmueble queda en flujo negativo, sigue siendo un pasivo de hecho."
	},
	{
		title: "GRO4US sube / baja",
		story: "El fondo cotiza al precio de hoy.",
		effect: "Quienes tengan GRO4US pueden vender al precio de la ficha. Nadie más compra salvo que la ficha lo permita."
	},
	{
		title: "OK4U / MYT4U / ON2U — cotización",
		story: "El Mercado fija el precio de hoy para ese símbolo exacto.",
		effect: "Solo se vende el símbolo exacto. «OK4U» no sirve para vender MYT4U. Precio × número de acciones = efectivo."
	},
	{
		title: "Constructor quiere 10 acres con arroyo — $150.000",
		story: "El ayuntamiento exige un parque de 10 acres o no aprueba la urbanización.",
		effect: "Quien tenga exactamente 10 acres con arroyo puede vender por $150.000. Liquidación = $150.000 − hipoteca."
	},
	{
		title: "Comprador de 20 acres — $200.000",
		story: "Quiere recategorizar de residencial a comercial.",
		effect: "Quien tenga exactamente 20 acres puede vender por $200.000."
	},
	{
		title: "Coleccionista de piezas de a ocho — $5.000",
		story: "Busca monedas auténticas de la ceca de La Habana, siglo XVI.",
		effect: "Quien tenga esas monedas exactas puede vender por $5.000."
	},
	{
		title: "El oro se dispara — $600 / onza",
		story: "Disturbios en Oriente Medio. El petróleo amenaza. El oro vuela.",
		effect: "Quien tenga oro (Krugerrands, etc.) puede vender a $600 por onza."
	},
	{
		title: "Comprador de empresa de widgets — $50.000",
		story: "Ingeniero/inventor ofrece $50.000 en efectivo por el método de fabricación.",
		effect: "Quien tenga la empresa de widgets puede vender y pierde el flujo (si lo había)."
	},
	{
		title: "Comprador de empresa de software — $100.000",
		story: "Gran compañía integrada ofrece $100.000 por el programa y la empresa.",
		effect: "Quien tenga esa empresa de software puede vender."
	},
	{
		title: "Sociedad limitada vendida — 2× costo",
		story: "El fundador vende. Tú habías acordado salir con él.",
		effect: "TODA sociedad limitada se vende por el doble del costo original. Los nuevos dueños traen su propia financiación (tú no pagas hipoteca residual)."
	},
	{
		title: "Sociedad limitada vendida — 3× costo",
		story: "Misma cláusula, mejor precio.",
		effect: "TODA sociedad limitada se vende por el triple del costo original."
	},
	{
		title: "Daños / techo / plagas (evento negativo)",
		story: "Un inmueble sufre un golpe: techo, plomería, vacantes.",
		effect: "Paga el efectivo o pierde el flujo que indique la ficha. A veces solo afecta a un tipo exacto de propiedad."
	}
];
var doodads = [
	{
		title: "Café latte y capuchino para ti y un amigo",
		pay: 10
	},
	{
		title: "Pelotas de golf nuevas",
		pay: 20
	},
	{
		title: "Almuerzo con amigos",
		pay: 40
	},
	{
		title: "Juguetes para los niños",
		pay: 50
	},
	{
		title: "Partido de béisbol / fútbol",
		pay: 50
	},
	{
		title: "Bola de boliche nueva",
		pay: 80
	},
	{
		title: "Salir a cenar",
		pay: 80
	},
	{
		title: "Gafas de sol imprescindibles",
		pay: 80
	},
	{
		title: "Fiesta de cumpleaños",
		pay: 100
	},
	{
		title: "Teléfono celular nuevo",
		pay: 100
	},
	{
		title: "Caña de pescar nueva",
		pay: 100
	},
	{
		title: "CDs de música",
		pay: 100
	},
	{
		title: "Aparcar en zona de discapacitados (multa)",
		pay: 100
	},
	{
		title: "Dos vueltas de golf",
		pay: 100
	},
	{
		title: "Jugar tu número de lotería de la suerte",
		pay: 100
	},
	{
		title: "Visita al dentista",
		pay: 100
	},
	{
		title: "Festival aéreo",
		pay: 120
	},
	{
		title: "Procesador de alimentos",
		pay: 150
	},
	{
		title: "Máquina de capuchino",
		pay: 150
	},
	{
		title: "Reloj de pulsera nuevo",
		pay: 150
	},
	{
		title: "Concierto",
		pay: 180
	},
	{
		title: "Raqueta de tenis nueva",
		pay: 200
	},
	{
		title: "No resististe un cuadro de un artista local",
		pay: 200
	},
	{
		title: "Casino",
		pay: 200
	},
	{
		title: "Tu aniversario",
		pay: 200
	},
	{
		title: "Rumor de despido: vuelves a estudiar",
		pay: 220
	},
	{
		title: "Ropa nueva",
		pay: 250
	},
	{
		title: "Reunión de exalumnos",
		pay: 250
	},
	{
		title: "El auto necesita llantas",
		pay: 300
	},
	{
		title: "Rebaja de muebles",
		pay: 300
	},
	{
		title: "¡De compras!",
		pay: 350
	},
	{
		title: "Auditoría fiscal — ¡ay!",
		pay: 350
	},
	{
		title: "Fuga del calentador de agua",
		pay: 450
	},
	{
		title: "Altavoces nuevos para el equipo",
		pay: 500
	},
	{
		title: "Repintar la casa",
		pay: 600
	},
	{
		title: "Se muere el aire acondicionado del auto",
		pay: 700
	},
	{
		title: "Matrícula universitaria del hijo",
		pay: 1500
	},
	{
		title: "Vacaciones familiares",
		pay: 2e3
	},
	{
		title: "Boda de tu hija",
		pay: 2e3
	},
	{
		title: "Tu hijo necesita brackets",
		pay: 2e3
	},
	{
		title: "Televisor de pantalla grande",
		pay: 4e3,
		note: "Si pagas con tarjeta: suma $4.000 al pasivo de tarjetas y $120 al gasto mensual de tarjetas. El doodad deja de ser un golpe único y se vuelve deuda permanente hasta liquidarla entera."
	},
	{
		title: "Barco nuevo",
		pay: 18e3,
		note: "Alternativa: entrada $1.000 + préstamo de barco $17.000 como pasivo nuevo + $340 de pago mensual. Un pasivo disfrazado de premio."
	}
];
var fastBusinesses = [
	{
		name: "Taller de autos (Auto Repair Shop)",
		down: 15e4,
		cashFlow: 6e3,
		ccr: "48%"
	},
	{
		name: "Salones de belleza (3 tiendas)",
		down: 25e4,
		cashFlow: 1e4,
		ccr: "48%"
	},
	{
		name: "Tintorería (2 locales)",
		down: 1e5,
		cashFlow: 3e3,
		ccr: "36%"
	},
	{
		name: "Cadena de restaurantes familiares",
		down: 3e5,
		cashFlow: 14e3,
		ccr: "56%"
	},
	{
		name: "Servicio de calefacción y aire acondicionado",
		down: 2e5,
		cashFlow: 1e4,
		ccr: "60%"
	},
	{
		name: "Franquicia de hamburguesas",
		down: 3e5,
		cashFlow: 9500,
		ccr: "38%"
	},
	{
		name: "Franquicia de pizza (2 locales)",
		down: 225e3,
		cashFlow: 7e3,
		ccr: "37%"
	},
	{
		name: "Fábrica de partes para camiones",
		down: 15e4,
		cashFlow: 5e3,
		ccr: "40%"
	},
	{
		name: "Tiendas de camisetas (5 sucursales)",
		down: 2e5,
		cashFlow: 8e3,
		ccr: "48%"
	},
	{
		name: "Franquicia de pollo (2 locales)",
		down: 3e5,
		cashFlow: 1e4,
		ccr: "40%"
	},
	{
		name: "Edificio de 60 departamentos",
		down: 3e5,
		cashFlow: 8e3,
		ccr: "32%"
	},
	{
		name: "Mini-bodegas (200 unidades)",
		down: 2e5,
		cashFlow: 6e3,
		ccr: "36%"
	},
	{
		name: "Mini-markets (3 tiendas)",
		down: 12e4,
		cashFlow: 5e3,
		ccr: "50%"
	},
	{
		name: "IPO de software",
		down: 25e3,
		cashFlow: 0,
		ccr: "binario",
		dice: "Un dado: 6 = $500.000 en efectivo. 1–5 = $0. Si fallas, otro jugador que caiga después puede intentarlo. Si aciertas, la casilla se cierra."
	},
	{
		name: "IPO de biotecnología",
		down: 5e4,
		cashFlow: 0,
		ccr: "binario",
		dice: "Un dado: 5 o 6 = $500.000. 1–4 = $0. Misma regla de reintento hasta que alguien acierte."
	},
	{
		name: "Infomercial de menaje de cocina",
		down: 1e5,
		cashFlow: 0,
		ccr: "binario",
		dice: "Un dado: 4, 5 o 6 = +$50.000/mes de flujo. 1–3 = $0."
	},
	{
		name: "Comprar una mina de oro",
		down: 15e4,
		cashFlow: 0,
		ccr: "binario",
		dice: "Un dado: 3 o más = +$25.000/mes. 1–2 = $0."
	},
	{
		name: "Negocio petrolero ruso",
		down: 3e5,
		cashFlow: 0,
		ccr: "binario",
		dice: "Un dado: 4 o más = +$75.000/mes. 1–3 = $0."
	}
];
var fastDreams = [
	{
		name: "Safari fotográfico en África",
		cost: 1e5,
		story: "Llevas a 6 amigos a fotografiar los animales más exóticos. Lujo 5 estrellas… en tienda de campaña."
	},
	{
		name: "Cabaña de troncos en las montañas",
		cost: 15e4,
		story: "Construir tu refugio en el bosque. Chimenea, silencio, tiempo."
	},
	{
		name: "Pagar la universidad de tus hijos",
		cost: 15e4,
		story: "Sin deudas estudiantiles para la siguiente generación. Libertad heredada."
	},
	{
		name: "Las 7 Maravillas del Mundo",
		cost: 15e4,
		story: "Avión, barco, bicicleta, camello, canoa y limusina. Lujo de punta a punta."
	},
	{
		name: "Ciudades ancestrales de Asia",
		cost: 15e4,
		story: "Avión privado y guía para ti y 5 amigos. Lugares a los que no llegan turistas."
	},
	{
		name: "Crucero por el Mediterráneo en yate privado",
		cost: 15e4,
		story: "Un mes con 12 amigos: calas de Italia, Francia y Grecia."
	},
	{
		name: "Festival de cine en Cannes",
		cost: 15e4,
		story: "Un papel, fiestas con estrellas, una semana codeándote con celebridades."
	},
	{
		name: "Gira mundial de golf",
		cost: 15e4,
		story: "Tú y 3 amigos juegan los 50 mejores campos del planeta. Todo 5 estrellas."
	},
	{
		name: "Regatas de yates",
		cost: 15e4,
		story: "Tú y tu tripulación vuelan a Perth, Australia. Una semana contra los 12 metros más rápidos del mundo."
	},
	{
		name: "Parque con tu nombre",
		cost: 15e4,
		story: "Derribas un almacén abandonado, donas un subpuesto de policía y abres un parque."
	},
	{
		name: "Cabaña de pesca en un lago de Montana",
		cost: 15e4,
		story: "Pescar desde el muelle. Seis meses de soledad. Hidroavión incluido."
	},
	{
		name: "Heliesquí en los Alpes suizos",
		cost: 1e5,
		story: "Invierno de helicóptero de día y vida nocturna. Te alojas en un castillo medieval."
	},
	{
		name: "Cena con el Presidente",
		cost: 5e4,
		story: "Mesa para 10 amigos en una gala con dignatarios de todo el mundo."
	},
	{
		name: "Un donativo de fe",
		cost: 1e5,
		story: "Tu comunidad de fe crece a saltos. Hacen falta edificios. Tú donas."
	},
	{
		name: "Comprar un bosque",
		cost: 2e5,
		story: "Detienes la tala de árboles antiguos. 1.000 acres y un sendero para todos."
	},
	{
		name: "Isla en los Mares del Sur",
		cost: 2e5,
		story: "Dos meses de lujo: aguas cálidas, playas desiertas, noches largas."
	},
	{
		name: "Ser un jet-setter (avión privado un año)",
		cost: 2e5,
		story: "Jet personal un año entero. Despegas cuando el corazón se te antoje."
	},
	{
		name: "Palco privado de equipo profesional",
		cost: 8e4,
		story: "Skybox para 12, comida y bebida, en el estadio de tu equipo."
	},
	{
		name: "Bolsa para niños (escuela de inversión)",
		cost: 12e4,
		story: "Financias una escuela de negocios para jóvenes capitalistas, con mini-bolsa dirigida por alumnos."
	},
	{
		name: "Centro de investigación de cáncer y SIDA",
		cost: 3e5,
		story: "Tu dinero reúne a los mejores investigadores y médicos en un solo lugar."
	},
	{
		name: "Comprar un yate",
		cost: 3e5,
		story: "Cubierta de teca, tripulación, horizonte. El clásico sueño náutico."
	},
	{
		name: "Villa en la Toscana",
		cost: 35e4,
		story: "Viñedos, piedra vieja, atardeceres toscanos. Uno de los sueños más caros del tablero."
	}
];
var ratRaceSpaces = [
	{
		n: 1,
		name: "Oportunidad",
		tag: "Salida",
		color: "oportunidad"
	},
	{
		n: 2,
		name: "Cosas (Doodads)",
		tag: "Obligatorio",
		color: "doodad"
	},
	{
		n: 3,
		name: "Oportunidad",
		tag: "Pequeño o Grande",
		color: "oportunidad"
	},
	{
		n: 4,
		name: "Caridad",
		tag: "Opcional",
		color: "caridad"
	},
	{
		n: 5,
		name: "Oportunidad",
		tag: "Pequeño o Grande",
		color: "oportunidad"
	},
	{
		n: 6,
		name: "Cheque de pago",
		tag: "Pide o lo pierdes",
		color: "pago"
	},
	{
		n: 7,
		name: "El Mercado",
		tag: "Se lee en voz alta",
		color: "mercado"
	},
	{
		n: 8,
		name: "Oportunidad",
		tag: "Pequeño o Grande",
		color: "oportunidad"
	},
	{
		n: 9,
		name: "Cosas (Doodads)",
		tag: "Obligatorio",
		color: "doodad"
	},
	{
		n: 10,
		name: "Oportunidad",
		tag: "Pequeño o Grande",
		color: "oportunidad"
	},
	{
		n: 11,
		name: "Bebé",
		tag: "Máx. 3 hijos",
		color: "bebe"
	},
	{
		n: 12,
		name: "Oportunidad",
		tag: "Pequeño o Grande",
		color: "oportunidad"
	},
	{
		n: 13,
		name: "El Mercado",
		tag: "Se lee en voz alta",
		color: "mercado"
	},
	{
		n: 14,
		name: "Oportunidad",
		tag: "Pequeño o Grande",
		color: "oportunidad"
	},
	{
		n: 15,
		name: "Cosas (Doodads)",
		tag: "Obligatorio",
		color: "doodad"
	},
	{
		n: 16,
		name: "Oportunidad",
		tag: "Pequeño o Grande",
		color: "oportunidad"
	},
	{
		n: 17,
		name: "Despedido",
		tag: "Pagas gastos × 1 y pierdes 2 turnos",
		color: "despido"
	},
	{
		n: 18,
		name: "Oportunidad",
		tag: "Pequeño o Grande",
		color: "oportunidad"
	},
	{
		n: 19,
		name: "El Mercado",
		tag: "Se lee en voz alta",
		color: "mercado"
	},
	{
		n: 20,
		name: "Oportunidad",
		tag: "Pequeño o Grande",
		color: "oportunidad"
	},
	{
		n: 21,
		name: "Cosas (Doodads)",
		tag: "Obligatorio",
		color: "doodad"
	},
	{
		n: 22,
		name: "Oportunidad",
		tag: "Pequeño o Grande",
		color: "oportunidad"
	},
	{
		n: 23,
		name: "Cheque de pago",
		tag: "Pide o lo pierdes",
		color: "pago"
	},
	{
		n: 24,
		name: "Oportunidad",
		tag: "Pequeño o Grande",
		color: "oportunidad"
	}
];
var glossary = [
	{
		letter: "A",
		terms: [{
			term: "Activo (Asset)",
			def: "Algo que mete dinero en tu bolsillo, con el mínimo de trabajo. En el juego: inmuebles con flujo positivo, negocios, acciones con dividendo, CDs. Analogía: un árbol que da fruta cada mes sin que tengas que treparlo."
		}, {
			term: "Negocio automatizado (Automated Business)",
			def: "Empresa que corre sobre todo por tecnología, no por personas. En la hoja se anota bajo Negocios."
		}]
	},
	{
		letter: "B",
		terms: [{
			term: "Hoja de balance (Balance Sheet)",
			def: "Instantánea de lo que posees (activos) y lo que debes (pasivos). En CASHFLOW es la mitad inferior de la Hoja de Juego."
		}]
	},
	{
		letter: "C",
		terms: [
			{
				term: "Capital",
				def: "Dinero o algo de valor acordado."
			},
			{
				term: "Ganancia / pérdida de capital",
				def: "La diferencia entre lo que pagaste por una inversión y lo que recibes al venderla, menos mejoras."
			},
			{
				term: "Flujo de caja (Cash Flow, CF)",
				def: "Dinero que entra (ingreso) y dinero que sale (gasto). La DIRECCIÓN del flujo decide si algo es ingreso, gasto, activo o pasivo. El flujo cuenta la historia."
			},
			{
				term: "Oferta de contado vs. financiada",
				def: "Pagar todo en efectivo frente a pagar una entrada y financiar el resto."
			},
			{
				term: "CCR — Cash-on-Cash Return",
				def: "Retorno sobre el efectivo invertido. Fórmula: (Flujo mensual × 12) ÷ Entrada. El 4-plex de Pat: ($800 × 12) / $20.000 = 48%."
			},
			{
				term: "Certificado de depósito (CD)",
				def: "Préstamo que tú haces a un banco o gobierno, con vencimiento e interés fijos."
			}
		]
	},
	{
		letter: "D",
		terms: [
			{
				term: "Dividendo",
				def: "Reparto de utilidades de una empresa a sus accionistas. En la hoja se suma al Ingreso Pasivo."
			},
			{
				term: "Cosas / Doodads",
				def: "Gastos a menudo innecesarios o inesperados que simplemente sacan dinero de tu bolsillo. En el juego son OBLIGATORIOS."
			},
			{
				term: "Entrada (Down Payment)",
				def: "El porcentaje del precio que el inversor pone de su bolsillo. El resto se financia. En CASHFLOW, la entrada es lo ÚNICO que pagas al banco para comprar el inmueble: la hipoteca ya va incluida en el flujo de la ficha."
			}
		]
	},
	{
		letter: "F",
		terms: [{
			term: "Ejecución hipotecaria (Foreclosure)",
			def: "El banco se queda la propiedad por impago de la hipoteca."
		}]
	},
	{
		letter: "G",
		terms: [{
			term: "Bono de ahorro del gobierno",
			def: "Préstamo que un individuo hace al gobierno a cambio de interés. En la hoja, lado izquierdo, activos."
		}]
	},
	{
		letter: "I",
		terms: [
			{
				term: "Estado de resultados (Income Statement)",
				def: "Foto de ingresos y gastos en un periodo. También se llama profit & loss. En CASHFLOW es la mitad superior de la Hoja de Juego."
			},
			{
				term: "Inflación",
				def: "Situación económica en la que suben los precios al consumidor. En El Mercado puede subir o bajar alquileres."
			},
			{
				term: "IPO (Oferta pública inicial)",
				def: "Primera vez que una empresa vende acciones al público. En CASHFLOW suele ser una apuesta de dado."
			}
		]
	},
	{
		letter: "L",
		terms: [{
			term: "Pasivo (Liability)",
			def: "Algo que saca dinero de tu bolsillo. Hipoteca de la casa, préstamo del auto, tarjetas, deudas de tienda, préstamos bancarios, hipotecas de inversión."
		}, {
			term: "Sociedad limitada (Limited Partnership)",
			def: "Entidad legal para poseer activos. Limita la responsabilidad de los socios. En El Mercado a menudo se vende OBLIGATORIAMENTE al 2× o 3× del costo."
		}]
	},
	{
		letter: "M",
		terms: [{
			term: "Hipoteca (Mortgage)",
			def: "Si financias un inmueble, el inmueble es el colateral. La hipoteca es el instrumento de garantía. Al vender: Liquidación = Precio de venta − Hipoteca."
		}, {
			term: "Fondo mutuo (Mutual Fund)",
			def: "Canasta de acciones, bonos o valores, agrupados, gestionados por una sociedad de inversión y comprados por inversores individuales. El accionista no tiene propiedad directa de las empresas subyacentes."
		}]
	},
	{
		letter: "P",
		terms: [{
			term: "Ingreso pasivo (Passive Income)",
			def: "Ingreso generado por tus inversiones: intereses + dividendos + flujo inmobiliario + flujo de negocios. Con mínimo trabajo. Es LA cifra que te saca de la Carrera de la Rata."
		}]
	},
	{
		letter: "R",
		terms: [{
			term: "REIT (Real Estate Investment Trust)",
			def: "Similar a un fondo mutuo, pero con inmuebles."
		}, {
			term: "ROI (Return on Investment)",
			def: "Retorno sobre la inversión, en porcentaje. Ejemplo del manual: edificio de $300.000, entrada $100.000, flujo $2.000/mes → ROI = ($2.000 × 12) / $100.000 = 24%."
		}]
	},
	{
		letter: "S",
		terms: [{
			term: "Split de acciones (Shares split)",
			def: "La empresa aumenta el número de acciones y el precio por acción baja en la misma proporción. El valor total se mantiene."
		}, {
			term: "Acción (Stock share)",
			def: "Una acción representa propiedad en una corporación. Los accionistas son los dueños reales."
		}]
	},
	{
		letter: "T",
		terms: [
			{
				term: "Gravamen fiscal (Tax Lien)",
				def: "Reclamo legal sobre una propiedad por impuestos impagos."
			},
			{
				term: "Intercambio 1031 (1031 Tax-Deferred Exchange)",
				def: "Método de comprar y vender inmuebles que permite diferir el impuesto sobre la ganancia de capital (código fiscal de EE. UU.)."
			},
			{
				term: "El Mercado (The Market)",
				def: "Donde productos se compran y se venden. En el tablero: las fichas púrpura que permiten vender el activo EXACTO nombrado."
			},
			{
				term: "Rango de cotización (Trading Range)",
				def: "Promedio de máximos y mínimos históricos de una inversión. Comprar cerca del piso es más inteligente que comprar cerca del techo."
			}
		]
	}
];
function money(n) {
	return `${n < 0 ? "−" : ""}$${Math.abs(Math.round(n)).toLocaleString("en-US")}`;
}
function Chapter2() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-sm tracking-[0.22em] text-gold uppercase",
			children: "Capítulo 2"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl font-semibold text-burgundy sm:text-5xl",
			children: "Componentes del juego"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 font-display text-xl italic text-ink-soft",
			children: "Tablero, mazos, profesiones y la hoja que decide si eres libre"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c2-caja",
			children: "Qué hay en la caja (edición clásica)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ul, { items: [
			"Tablero grande con dos pistas: Carrera de la Rata (círculo interior, 24 casillas) y Vía Rápida (anillo exterior).",
			"12 cartas de Profesión: Conserje, Mecánico, Secretaria, Camionero, Policía, Enfermera, Maestro K-12, Gerente, Ingeniero, Abogado, Piloto, Médico.",
			"Mazos: Oportunidad (Negocios Pequeños + Negocios Grandes), El Mercado, Cosas (Doodads).",
			"Hojas de Juego de doble cara (Carrera / «¡Felicitaciones!» Vía Rápida), lápices, goma.",
			"6 ratas, 6 quesos y fichas de color (unas 10–12 por color) para marcar sueños y negocios.",
			"2 o 3 dados. Dinero de juguete en denominaciones de $10, $20, $50, $100, $500, $1.000, $5.000, $10.000, $100.000, $500.000 y $1.000.000."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Conteos típicos de la 2.ª edición inglesa: 56 Pequeños, 42 Grandes, 42 Mercado, 42 Cosas. La 4.ª edición (2016) compactó a 38 / 36 / 40 / 42. Las reglas no cambian: cambia el grosor del mazo. Esta guía cubre el sistema de la edición clásica del manual adjunto (G101CT15)." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c2-roles",
			children: "Los dos oficios de la mesa: Banquero y Auditor"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "El Banquero" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Un jugador (o un no-jugador) bueno con números. Paga y recibe TODO el dinero entre banco y jugadores. Concede préstamos. Si también juega, su efectivo personal vive en un montón SEPARADO del banco. Mezclarlos es el error número uno de las mesas principiantes." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "El Auditor" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "La persona a tu DERECHA. Cada vez que cambias un número de tu hoja, el auditor revisa. Si hay que corregir, pide una pausa. No es policía: es el amigo que te impide celebrar una libertad falsa. El juego enseña contabilidad; la contabilidad descuidada te deja «rico» en la hoja y pobre en la caja." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c2-piezas",
			children: "Rata, queso y fichas"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ul, { items: [
			"La RATA es tu posición. Empieza en la flecha «Start Here / Partida» de la Carrera. Al salir, se coloca en «Enter Here / Entrada» de la Vía Rápida.",
			"El QUESO marca tu Sueño. Se pone al inicio en una casilla rosa. Dos o más jugadores PUEDEN elegir el mismo sueño: considera el riesgo/recompensa, porque cada visita ajena encarece el sueño un 100% de su costo original.",
			"Las FICHAS de tu color marcan negocios y sueños comprados en la Vía Rápida, y a veces sirven para contar turnos de Caridad (3) o Despedido (2)."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Caer en la misma casilla que otro jugador NO tiene efecto. No hay «visita», no hay peaje, no hay alianza." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c2-pista",
			children: "Las 24 casillas de la Carrera de la Rata"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Se recorre en el sentido de las agujas del reloj. Un dado por turno (salvo Caridad). Hay 12 Oportunidades, 4 Cosas, 3 Mercados, 2 Cheques de pago, 1 Caridad, 1 Bebé y 1 Despedido." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
			className: "mt-4 grid gap-2 sm:grid-cols-2",
			children: ratRaceSpaces.map((s) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
				className: "print-keep flex items-center gap-3 rounded-sm border border-rule bg-paper px-3 py-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-display w-6 text-burgundy tabular-nums",
						children: s.n
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: s.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "ml-auto text-muted",
						children: s.tag
					})
				]
			}, s.n))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c2-profesiones",
			children: "Las 12 profesiones — copia exacta, omitiendo ceros"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Se barajan y se reparte una, boca abajo, a cada jugador. Luego se copia a la Hoja de Juego exactamente como está escrita, omitiendo los ceros de los espacios vacíos. Todos empiezan con 0 hijos, 0 préstamo bancario y 0 pago de préstamo bancario. El efectivo inicial es Cheque de pago (flujo mensual) + Ahorro. El ahorro se borra de la hoja al recibirlo: no vuelve a pagarse." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 max-w-full overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[640px] border-collapse text-left text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-rule font-display text-burgundy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-2",
							children: "Profesión"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-2",
							children: "Salario"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-2",
							children: "Gastos"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-2",
							children: "Cheque"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-2",
							children: "Ahorro"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-2",
							children: "Inicio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2",
							children: "Hijo"
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: professions.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-rule/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 pr-2 font-semibold",
							children: p.name
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 pr-2 tabular-nums",
							children: money(p.salary)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 pr-2 tabular-nums",
							children: money(p.totalExpenses)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 pr-2 tabular-nums",
							children: money(p.cashFlow)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 pr-2 tabular-nums",
							children: money(p.savings)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 pr-2 tabular-nums",
							children: money(p.cashFlow + p.savings)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 tabular-nums",
							children: money(p.perChild)
						})
					]
				}, p.id)) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-2 text-sm text-muted",
			children: "Inicio = flujo mensual + ahorro (el dinero que el banquero te entrega en el minuto cero)."
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-6 space-y-4",
			children: professions.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("details", {
				className: "print-keep rounded-sm border border-rule bg-paper px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("summary", {
					className: "cursor-pointer font-display font-semibold",
					children: [
						p.name,
						" (",
						p.english,
						") — ficha completa"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-3 grid gap-4 text-sm sm:grid-cols-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
						className: "space-y-1 text-ink-soft",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Salario ", money(p.salary)] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Impuestos ", money(p.taxes)] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Hipoteca vivienda ",
								money(p.homePayment),
								" (pasivo ",
								money(p.homeMortgage),
								")"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Préstamo escolar ",
								money(p.schoolPayment),
								" (pasivo ",
								money(p.schoolLoans),
								")"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Auto ",
								money(p.carPayment),
								" (pasivo ",
								money(p.carLoans),
								")"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Tarjetas ",
								money(p.creditPayment),
								" (pasivo ",
								money(p.creditCards),
								")"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: [
								"Tienda ",
								money(p.retailPayment),
								" (pasivo ",
								money(p.retailDebt),
								")"
							] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", { children: ["Otros gastos ", money(p.otherExpenses)] })
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-ink-soft",
						children: [
							"Gastos totales ",
							money(p.totalExpenses),
							" · Flujo ",
							money(p.cashFlow),
							" · Ahorro ",
							money(p.savings),
							" · Por hijo ",
							money(p.perChild)
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-ink-soft",
						children: p.insight
					})] })]
				})]
			}, p.id))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			title: "El médico, cifra por cifra del manual oficial",
			tone: "burgundy",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Salario $13.200. Impuestos $3.420. Hipoteca $1.900 ($202.000). Escolar $750 ($150.000). Auto $380 ($19.000). Tarjetas $270 ($9.000). Tienda $50 ($1.000). Otros $2.880. Totales $9.650. Cheque $3.550. Ahorro $400. Por hijo $640. Ingreso pasivo inicial: 0. Así se copia, omitiendo ceros." })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c2-hoja",
			children: "Anatomía de la Hoja de Juego"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Un lado es Carrera de la Rata (Estado de resultados arriba, Balance abajo). El reverso, titulado «¡Felicitaciones!», es la Vía Rápida. No mezcles lados." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Estado de resultados (arriba)" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ul, { items: [
			"Ingresos: Salario, Intereses, Dividendos, Bienes raíces (flujo), Negocios (flujo).",
			"Ingreso pasivo = intereses + dividendos + flujos de inmuebles y negocios.",
			"Ingreso total = salario + ingreso pasivo.",
			"Gastos: impuestos, hipoteca vivienda, escolar, auto, tarjetas, tienda, otros, hijos, préstamo bancario.",
			"Flujo mensual (cheque de pago) = Ingreso total − Gastos totales."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Balance (abajo)" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ul, { items: ["Activos: ahorro (solo al inicio), acciones/fondos/CDs (símbolo, nº, costo), inmuebles (tipo, entrada, costo), negocios (tipo, entrada, costo).", "Pasivos: hipoteca vivienda, escolar, auto, tarjetas, tienda, hipotecas de inversión, pasivos de negocio, préstamo bancario."] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "El efectivo en mano NO hace falta anotarlo en el balance (el manual lo dice: en la vida real sí estaría; para jugar, el montón de billetes basta). Sí hay que anotar cada activo y cada pasivo." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c2-mazos",
			children: "Los cuatro mazos de la Carrera"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Oportunidad = Negocios Pequeños + Negocios Grandes" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Al caer en Oportunidad ELIGES un mazo. El Pequeño más caro cuesta $5.000 de entrada. Los Grandes empiezan en $6.000. Lees en voz alta. Algunas fichas permiten que OTROS jugadores también compren o vendan. La ficha caduca cuando el siguiente jugador mueve. Se coloca al fondo del mazo." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
			className: "mt-4 text-sm text-muted",
			children: [
				smallDeals.length,
				" negocios pequeños catalogados · ",
				bigDeals.length,
				" negocios grandes"
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 grid gap-3 md:grid-cols-2",
			children: smallDeals.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "print-keep rounded-sm border border-rule bg-paper p-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold text-ink",
						children: d.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-ink-soft",
						children: d.story
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 tabular-nums text-forest",
						children: [
							d.down != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"Entrada ",
								money(d.down),
								" · "
							] }),
							d.cost != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"Costo ",
								money(d.cost),
								" · "
							] }),
							d.mortgage != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								"Hipoteca ",
								money(d.mortgage),
								" · "
							] }),
							d.cashFlow != null && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: ["Flujo ", money(d.cashFlow)] }),
							d.symbol && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
								d.symbol,
								" @ ",
								d.price != null ? money(d.price) : "—",
								" ",
								d.range && `· ${d.range}`,
								d.dividend != null && ` · div. ${money(d.dividend)}`
							] })
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted",
						children: d.rule
					})
				]
			}, d.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Negocios Grandes" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 grid gap-3 md:grid-cols-2",
			children: bigDeals.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "print-keep rounded-sm border border-rule bg-paper p-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: d.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-ink-soft",
						children: d.story
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "mt-2 tabular-nums text-forest",
						children: [
							"Entrada ",
							money(d.down),
							" · Costo ",
							money(d.cost),
							" · Hipoteca ",
							money(d.mortgage),
							" · Flujo ",
							money(d.cashFlow),
							d.roi && ` · ${d.roi}`
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted",
						children: d.rule
					})
				]
			}, d.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "El Mercado" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Se lee en voz alta. TODOS los que tengan el activo EXACTO pueden vender al precio dicho. El banco paga en nombre del comprador. «Condo» no es «casa 3/2». «OK4U» no es «MYT4U»." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 space-y-2",
			children: marketCards.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "print-keep rounded-sm border border-rule bg-paper px-3 py-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: m.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-ink-soft",
						children: m.story
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-muted",
						children: m.effect
					})
				]
			}, m.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Cosas (Doodads) — obligatorias" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Gastos inesperados o innecesarios. No se rechazan. Si no hay efectivo, se pide préstamo bancario (si no estás en bancarrota). La ficha va al fondo." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 columns-1 gap-2 sm:columns-2",
			children: doodads.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "print-keep mb-2 break-inside-avoid rounded-sm border border-rule bg-paper px-3 py-2 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "font-semibold",
						children: d.title
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "float-right tabular-nums text-burgundy",
						children: money(d.pay)
					}),
					d.note && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "mt-1 block text-muted",
						children: d.note
					})
				]
			}, d.title))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c2-via-comp",
			children: "La Vía Rápida: negocios y sueños"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Negocios verdes" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Caes, pagas la entrada, pones una ficha de tu color. Ese negocio deja de estar disponible (en la edición clásica del manual). Algunas casillas piden tirar un dado: si fallas, otro puede intentarlo después; si aciertas, se cierra." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 max-w-full overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[560px] border-collapse text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-rule font-display text-burgundy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-2 text-left",
							children: "Negocio"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-2 text-left",
							children: "Entrada"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-2 text-left",
							children: "Flujo/mes"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 text-left",
							children: "CCR"
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { children: fastBusinesses.map((b) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-rule/70",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("td", {
							className: "py-2 pr-2",
							children: [b.name, b.dice && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "block text-xs text-muted",
								children: b.dice
							})]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 pr-2 tabular-nums",
							children: money(b.down)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2 pr-2 tabular-nums",
							children: money(b.cashFlow)
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
							className: "py-2",
							children: b.ccr
						})
					]
				}, b.name)) })]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Sueños (casillas rosa)" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-3 grid gap-3 sm:grid-cols-2",
			children: fastDreams.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "print-keep rounded-sm border border-rule bg-paper p-3 text-sm",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-semibold",
						children: d.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "text-burgundy tabular-nums",
						children: money(d.cost)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 text-ink-soft",
						children: d.story
					})
				]
			}, d.name))
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Otras casillas de la Vía Rápida: Día de CASHFLOW (cobras aunque olvides pedirlo), Caridad ($100.000 por 1, 2 o 3 dados el resto del juego), Auditoría fiscal (½ del efectivo), Divorcio (todo el efectivo), Pleito legal (½ del efectivo según el manual inglés; ver variantes en el Capítulo 3)." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c2-glosario",
			children: "Glosario de términos CASHFLOW"
		}),
		glossary.map((g) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-2xl text-gold",
				children: g.letter
			}), g.terms.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-sm text-ink-soft",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
					className: "text-ink",
					children: [t.term, ". "]
				}), t.def]
			}, t.term))]
		}, g.letter))
	] });
}
function Chapter3() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-sm tracking-[0.22em] text-gold uppercase",
			children: "Capítulo 3"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl font-semibold text-burgundy sm:text-5xl",
			children: "Reglas del juego, paso a paso"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 font-display text-xl italic text-ink-soft",
			children: "Dados, cheques, despidos, bebés, préstamos, quiebra y la Vía Rápida"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c3-setup",
			children: "Montaje — las 12 instrucciones cortas del manual"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, { items: [
			{
				n: "1",
				t: "Elegir Banquero",
				d: "Alguien rápido con números. Si también juega, separa su dinero del banco."
			},
			{
				n: "2",
				t: "Colocar los mazos",
				d: "Baraja por separado Oportunidad (Pequeños y Grandes), El Mercado y Cosas. Bocabajo en sus sitios."
			},
			{
				n: "3",
				t: "Repartir la Hoja de Juego",
				d: "Una por jugador. Lado de Carrera hacia arriba. Tómate un minuto para leer las palabras."
			},
			{
				n: "4",
				t: "Repartir Profesión",
				d: "Baraja y da una boca abajo a cada uno. Un lápiz por jugador."
			},
			{
				n: "5",
				t: "Copiar la profesión a la hoja",
				d: "Exactamente como está escrita, omitiendo ceros. Empiezas con 0 hijos y 0 préstamo bancario."
			},
			{
				n: "6",
				t: "Nombrar auditor",
				d: "La persona a tu derecha. Cada cambio de cifra se audita."
			},
			{
				n: "7",
				t: "El banco entrega el efectivo inicial",
				d: "Flujo mensual (cheque) + ahorro. Borra el ahorro de la hoja al recibirlo. El ahorro NO forma parte del cheque futuro."
			},
			{
				n: "8",
				t: "Elegir color",
				d: "Rata, queso y fichas del mismo color."
			},
			{
				n: "9",
				t: "Elegir Sueño",
				d: "Pon el queso en una casilla rosa de la Vía Rápida. Pueden coincidir varios jugadores."
			},
			{
				n: "10",
				t: "Colocar la rata",
				d: "En la flecha «Partida / Start Here» de la Carrera."
			},
			{
				n: "11",
				t: "Tirar un dado para ver quién empieza",
				d: "El más alto sale. Luego se juega a la izquierda (sentido horario de jugadores). Ese orden NO cambia al pasar a la Vía Rápida."
			},
			{
				n: "12",
				t: "Empezar a jugar",
				d: "En la Carrera se tira UN dado por turno."
			}
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c3-turno",
			children: "Estructura de un turno en la Carrera"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ul, { items: [
			"Antes de tirar: puedes liquidar deudas (ver más abajo) o, si tu ingreso pasivo YA es mayor que tus gastos, salir a la Vía Rápida.",
			"Tira 1 dado (o 2, si tienes Caridad vigente). Mueve en el sentido de las agujas del reloj.",
			"Si PASAS o CAES en Cheque de pago: pide tu flujo mensual. Si olvidas pedirlo, lo PIERDES. No se reclama después.",
			"Resuelve la casilla en la que caíste.",
			"Si sacaste una Oportunidad, caduca cuando el siguiente jugador mueve.",
			"El auditor revisa cualquier cambio de hoja."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c3-casillas",
			children: "Casillas de la Carrera — reglamento completo"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Cheque de pago (Día de pago)" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			"Cada vez que caes o pasas, recibes tu Flujo de Caja Mensual del banco. Si es negativo, lo PAGAS al banco. El tramo de cheque a cheque es un mes. El efectivo se suma a tu montón (no hace falta anotarlo).",
			" ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
				className: "text-ink",
				children: "Si olvidas pedirlo, lo pierdes."
			})
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Oportunidad (Negocio Pequeño o Grande)" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ul, { items: [
			"Eliges mazo. Pequeños: entrada máxima $5.000. Grandes: desde $6.000.",
			"Lees en voz alta. Decides comprar o no (si tienes la entrada, o pides préstamo).",
			"Algunas fichas permiten que otros también compren o vendan.",
			"Los activos SOLO se venden cuando una ficha, una casilla o las reglas (bancarrota) lo permiten. NUNCA se venden entre jugadores como mercado libre.",
			"La CARTA de oportunidad puede venderse a otro jugador SOLO si la propia carta lo dice, a precio negociado. El comprador de la carta debe entonces comprar el activo al precio impreso, en ese momento. Estás vendiendo la OPCIÓN, no el activo.",
			"No se permiten sociedades entre jugadores para comprar.",
			"Solo se venden activos que se poseen.",
			"La oportunidad caduca al mover el siguiente jugador. La carta usada va al fondo."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "El Mercado" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Robas, lees en voz alta. Quienes tengan el activo EXACTO pueden vender al precio. El banco paga. Ajustas la hoja: quitas activo, hipoteca, flujo, y actualizas pasivo, ingreso pasivo, ingreso total y flujo mensual. Carta al fondo." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Cosas (Doodads)" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Obligatorias. Sigues la ficha. Puedes pedir préstamo para pagar. Hay doodads especiales (televisor, barco) que pueden convertirse en deuda permanente si eliges financiarlas." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Caridad (opcional) — regla oficial del manual inglés" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Al caer, PUEDES donar el 10% de tu Ingreso Total (no del efectivo, no del flujo) al banco. A cambio, usas 2 dados en cada uno de tus próximos 3 turnos. Tres fichas junto a la rata ayudan a contar. El Despedido CANCELA la Caridad restante." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			title: "Variante de la traducción española adjunta",
			tone: "gold",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "El PDF español dice «10% del dinero en caja» a cambio de «hasta 3 dados» en 3 turnos, y permite pactar al inicio que sea el 10% del ingreso total «para simplificar». Esta guía enseña la regla del manual inglés oficial (G101CT15): 10% del Ingreso Total, 2 dados, 3 turnos. Si tu mesa usa la traducción, páctenlo ANTES de la partida y no a mitad." })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Bebé" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Un nuevo miembro. Límite de 3 hijos. Si ya tienes 3, la casilla no hace nada. Si no:" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ul, { items: [
			"Suma 1 al número de hijos.",
			"Añade el «Gasto por hijo» de tu profesión a Gastos de hijos.",
			"Suma ese mismo monto a Gastos totales.",
			"Resta ese monto al Flujo mensual.",
			"Audita."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Analogía: un hijo en CASHFLOW no es amor, es un gasto permanente. No se liquida. Cada profesión tiene su tarifa: $70 el conserje, $640 el médico." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Despedido (Downsized)" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Perdiste el empleo un rato. Pagas al banco el TOTAL de tus gastos y pierdes 2 turnos. Esto también termina el efecto de Caridad. Dos fichas junto a la rata para contar las vueltas perdidas." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c3-prestamo",
			children: "Préstamos bancarios"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Puedes pedir prestado salvo que estés en bancarrota. Múltiplos de $1.000. Interés 10% al mes (por cada cheque de pago). Cada $1.000 prestados = $100 de gasto mensual de «Pago de préstamo bancario»." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, { items: [
			{
				n: "a",
				t: "Recibe el efectivo",
				d: "El banco te entrega los $1.000 × N."
			},
			{
				n: "b",
				t: "Pasivo",
				d: "Suma el préstamo al Balance, bajo Obligaciones / Bank Loan."
			},
			{
				n: "c",
				t: "Gasto",
				d: "Suma el 10% a Gastos (Pago de préstamo bancario)."
			},
			{
				n: "d",
				t: "Totales",
				d: "Recalcula Gastos totales."
			},
			{
				n: "e",
				t: "Flujo",
				d: "Recalcula Flujo mensual. Puede volverse negativo: peligro de quiebra en el próximo cheque."
			},
			{
				n: "f",
				t: "Auditor",
				d: "Siempre."
			}
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Para PAGAR el préstamo: unidades de $1.000. Cada unidad pagada reduce el gasto en $100 y el pasivo en $1.000. Es la ÚNICA deuda que se puede pagar a plazos." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c3-deuda",
			children: "Liquidar deudas (en cualquier turno, incluso en vez de jugar)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Debes pagar el MONTO ENTERO de la deuda elegida, excepto el préstamo bancario. No existen pagos parciales de auto, tarjetas, tienda, hipoteca de vivienda ni préstamo escolar." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
			className: "text-ink",
			children: "NO se pueden liquidar:"
		}), " Impuestos, Otros gastos, Gastos de hijos. Son permanentes."] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, { items: [
			{
				n: "a",
				t: "Quita o ajusta el pasivo",
				d: "Columna de Obligaciones."
			},
			{
				n: "b",
				t: "Quita el gasto asociado",
				d: "Estado de resultados."
			},
			{
				n: "c",
				t: "Recalcula Gastos totales",
				d: "—"
			},
			{
				n: "d",
				t: "Recalcula Flujo mensual",
				d: "Bajar gastos es tan válido como subir ingreso pasivo para salir."
			},
			{
				n: "e",
				t: "Audita",
				d: "—"
			}
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			title: "¿Conviene liquidar?",
			tone: "forest",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Divide el gasto mensual que eliminas entre el efectivo que pagas. Si liquidar $3.000 de tarjetas te ahorra $90/mes, «compras» un flujo de $90 por $3.000 (36% anual). Compáralo con la entrada de un inmueble. El piloto, con $660/mes de tarjetas, a menudo se libera MÁS rápido pagando esa deuda que cazando un gran negocio." })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c3-quiebra",
			children: "Bancarrota — el procedimiento completo"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Si en un Cheque de pago tu Flujo mensual es negativo Y no tienes efectivo para cubrirlo, estás en bancarrota. El manual inglés la trata como declaración con pasos fijos:" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, { items: [
			{
				n: "1",
				t: "Vende activos al banco a ½ de la entrada",
				d: "Cualquier número de activos. El banco te da la mitad de lo que pagaste de down payment. NO la mitad del costo. Un 4-plex con entrada $20.000 se vende a $10.000."
			},
			{
				n: "2",
				t: "Usa ese dinero para dejar el flujo en positivo",
				d: "Paga deudas hasta que el ingreso vuelva a ser mayor que los gastos."
			},
			{
				n: "3",
				t: "Pierdes 3 turnos",
				d: "Manual inglés oficial. (La traducción española dice 5: páctenlo antes.)"
			}
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Si DESPUÉS de vender TODOS los activos el flujo sigue negativo: se borra la MITAD de préstamos de auto, tarjetas y tienda, junto con la mitad de sus pagos. La hipoteca de la CASA y el préstamo ESCOLAR permanecen iguales." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Si AUN ASÍ el flujo es negativo: estás oficialmente fuera del juego." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			title: "Nota contable del manual español",
			tone: "ink",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Bajo «Negocios» se anotan: negocios automatizados, sociedades limitadas, franquicias y otros negocios. Bajo «Bienes raíces»: vivienda residencial, departamentos, terrenos, bed & breakfast y centros comerciales. Registrar mal es perder el derecho a vender cuando El Mercado nombre el tipo exacto." })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c3-salida",
			children: "Salir de la Carrera — el rito de paso"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Al INICIO de cualquier turno en el que tu Ingreso pasivo sea mayor que tus Gastos totales:" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, { items: [
			{
				n: "1",
				t: "Voltea la hoja",
				d: "Lado «¡Felicitaciones!». Anota nombre y auditor."
			},
			{
				n: "2",
				t: "Calcula tu Buyout",
				d: "100 × Ingreso pasivo. Ese es tu Ingreso inicial del Día de CASHFLOW. El banco te lo entrega AHORA, antes de entrar. (Algunas mesas también te dejan el efectivo de la Carrera; el manual de Kim Kiyosaki indica devolver el efectivo viejo. Páctenlo. Esta guía sigue el manual impreso: recibes el buyout; las cifras de la Carrera dejan de aplicar.)"
			},
			{
				n: "3",
				t: "Escribe la meta de victoria por flujo",
				d: "Ingreso inicial del Día de CASHFLOW + $50.000."
			},
			{
				n: "4",
				t: "Registra el ingreso inicial en el historial",
				d: "Cada negocio nuevo se suma a esa línea."
			},
			{
				n: "5",
				t: "Coloca la rata en «Entrada»",
				d: "Dejas de tirar 1 dado: ahora tiras 2, salvo reglas posteriores."
			}
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Formula, { children: "Buyout = Ingreso pasivo × 100 \xA0\xA0|\xA0\xA0 Meta flujo = Buyout + $50.000" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ul, { items: [
			"Oportunidad, Mercado y Cosas YA NO te aplican.",
			"Tu estado de resultados y balance de la Carrera YA NO aplican.",
			"NO puedes pedir prestado al banco en la Vía Rápida."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c3-via-reglas",
			children: "Casillas de la Vía Rápida"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Día de CASHFLOW" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Caes o pasas: recibes tu Ingreso del Día de CASHFLOW. NO hace falta pedirlo. Si olvidas, igual lo recibes. Es el espejo invertido del Cheque de la Carrera: aquí el sistema confía en que ya sabes cobrar." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Negocios de inversión (verdes)" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ul, { items: [
			"Pagas la entrada, pones ficha de tu color, anotas nombre y flujo, recalculas, auditas.",
			"Una vez comprado, deja de estar disponible para otros (manual clásico).",
			"Si la casilla pide dado y fallas, otro que caiga después puede intentarlo. Si alguien acierta, se cierra.",
			"Ediciones posteriores añaden una «cuota de mentor» de $50.000 al dueño si otro cae en un negocio ya comprado. NO está en el manual G101CT15. Páctenlo."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Sueños (rosa)" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ul, { items: [
			"Si caes en TU sueño y tienes el efectivo, lo compras, pones ficha, GANAS, el juego termina.",
			"Puedes comprar sueños que no elegiste (el manual de la Vía Rápida lo permite: «quién dice que solo un sueño»). Eso NO te hace ganar.",
			"Si caes en el sueño de OTRO: el costo de ESE sueño sube un 100% de su precio original. Pones una ficha tuya como marca del recargo. Solo quien lo eligió puede comprarlo para ganar."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Ejemplo del manual: sueño de $100.000. Un extraño cae: ahora cuesta $200.000. Un segundo extraño: $300.000." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Caridad (Vía Rápida)" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Opcional. Pagas $100.000. A cambio, el resto del juego tiras 1, 2 o 3 dados, eligiendo cada turno." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Auditoría fiscal" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Pagas la mitad de tu efectivo." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Divorcio" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Pierdes TODO el efectivo." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Pleito legal (Lawsuit)" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Manual inglés: cuesta la mitad del efectivo. Traducción española: $100.000 fijos. Usen el inglés salvo pacto." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c3-variantes",
			children: "Tabla de discrepancias inglés oficial vs. PDF español"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-4 max-w-full overflow-x-auto",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("table", {
				className: "w-full min-w-[560px] border-collapse text-sm",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
					className: "border-b border-rule font-display text-burgundy",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-2 text-left",
							children: "Tema"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 pr-2 text-left",
							children: "Manual inglés G101CT15"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", {
							className: "py-2 text-left",
							children: "Traducción española adjunta"
						})
					]
				}) }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tbody", {
					className: "text-ink-soft",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-rule/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-2",
									children: "Caridad (Carrera)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-2",
									children: "10% del Ingreso Total, 2 dados, 3 turnos"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2",
									children: "10% del efectivo, hasta 3 dados (o pacto 10% ingreso)"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-rule/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-2",
									children: "Turnos de bancarrota"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-2",
									children: "3"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2",
									children: "5"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-rule/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-2",
									children: "Pleito (Vía Rápida)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-2",
									children: "½ del efectivo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2",
									children: "$100.000"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("tr", {
							className: "border-b border-rule/70",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-2",
									children: "Victoria"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2 pr-2",
									children: "Tu sueño, o +$50.000 de flujo"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", {
									className: "py-2",
									children: "Igual, y menciona «comprar sueños ajenos para eliminar jugadores»"
								})
							]
						})
					]
				})]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Esta guía aplica el manual inglés como fuente, porque es el texto de la patente y el que trae los diagramas de la hoja. Donde el español aporta claridad pedagógica (pasos de compra/venta), se incorpora." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c3-recordatorios",
			children: "Los recordatorios de cabecera del manual"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ul, { items: [
			"Para salir, el ingreso pasivo debe ser mayor que los gastos totales.",
			"Para construir ingreso pasivo, compra activos de flujo positivo.",
			"Lee Oportunidad, Mercado y Cosas en voz alta. Cada carta puede cambiar tu posición.",
			"Cuidado con la bancarrota. Sé inteligente con las inversiones.",
			"Ajusta la estrategia cuando el mercado cambie."
		] })
	] });
}
var SAMPLE_DEALS = [
	{
		name: "Condo 2/1 ciudad universitaria",
		down: 4e3,
		cost: 4e4,
		mortgage: 36e3,
		cf: 140
	},
	{
		name: "Casa 3/2 mercado deprimido",
		down: 4e3,
		cost: 5e4,
		mortgage: 46e3,
		cf: 200
	},
	{
		name: "¡Gran ganga! Casa 3/2",
		down: 2e3,
		cost: 45e3,
		mortgage: 43e3,
		cf: 250
	},
	{
		name: "4-plex (ejemplo Pat)",
		down: 2e4,
		cost: 1e5,
		mortgage: 8e4,
		cf: 800
	}
];
function FinancialSheet() {
	const [pid, setPid] = (0, import_react.useState)("maestro");
	const base = professions.find((p) => p.id === pid) ?? professions[6];
	const [children, setChildren] = (0, import_react.useState)(0);
	const [loanK, setLoanK] = (0, import_react.useState)(0);
	const [paidCar, setPaidCar] = (0, import_react.useState)(false);
	const [paidCc, setPaidCc] = (0, import_react.useState)(false);
	const [paidRetail, setPaidRetail] = (0, import_react.useState)(false);
	const [re, setRe] = (0, import_react.useState)([]);
	const [stocks, setStocks] = (0, import_react.useState)([]);
	const [biz, setBiz] = (0, import_react.useState)([]);
	const [cashAdj, setCashAdj] = (0, import_react.useState)(0);
	const calc = (0, import_react.useMemo)(() => compute(base, {
		children,
		loanK,
		paidCar,
		paidCc,
		paidRetail,
		re,
		stocks,
		biz
	}), [
		base,
		children,
		loanK,
		paidCar,
		paidCc,
		paidRetail,
		re,
		stocks,
		biz
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
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "print-keep rounded-lg border border-rule bg-paper-2/60 p-4 sm:p-6",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex flex-wrap items-end justify-between gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm tracking-[0.18em] text-burgundy uppercase",
						children: "Laboratorio vivo"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
						className: "mt-1 font-display text-2xl font-semibold text-ink",
						children: "Hoja de Juego interactiva"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-1 max-w-xl text-ink-soft",
						children: "Elige una profesión, compra activos, pide prestado o ten un hijo. Los totales se recalculan como lo haría tu auditor."
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					onClick: resetExtras,
					className: "rounded-sm border border-rule px-3 py-2 text-sm text-ink-soft hover:border-burgundy hover:text-burgundy",
					children: "Reiniciar hoja"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
				className: "mt-5 block text-sm text-muted",
				children: ["Profesión", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("select", {
					className: "mt-1 w-full rounded-sm border border-rule bg-paper px-3 py-2 text-ink",
					value: pid,
					onChange: (e) => {
						setPid(e.target.value);
						resetExtras();
					},
					children: professions.map((p) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("option", {
						value: p.id,
						children: [
							p.name,
							" — salario ",
							money(p.salary),
							" / meta ",
							money(p.totalExpenses)
						]
					}, p.id))
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-4",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Ingreso pasivo",
						value: money(calc.passive),
						tone: calc.passive > 0 ? "good" : "plain"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Gastos totales",
						value: money(calc.totalExp)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "Flujo mensual (cheque)",
						value: money(calc.cf),
						tone: calc.cf >= 0 ? "good" : "bad"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Stat, {
						label: "¿Fuera de la Carrera?",
						value: free ? "SÍ — puedes salir" : "Aún no",
						tone: free ? "good" : "plain"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-3 rounded-sm bg-burgundy/8 px-3 py-2 text-sm text-ink-soft",
				children: [
					"Fórmula maestra:",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "font-semibold text-ink",
						children: [
							"Ingreso pasivo ",
							money(calc.passive),
							" ",
							free ? ">" : "≤",
							" Gastos totales ",
							money(calc.totalExp)
						]
					}),
					". Te faltan ",
					money(Math.max(0, calc.totalExp - calc.passive + 1)),
					" de flujo para cruzar (el pasivo debe ser",
					" ",
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("em", { children: "mayor" }),
					", no igual)."
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-6 lg:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-lg font-semibold",
						children: "Ingresos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Salario",
						v: money(base.salary)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Intereses / dividendos",
						v: money(calc.div)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Bienes raíces (flujo)",
						v: money(calc.reCf)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Negocios (flujo)",
						v: money(calc.bizCf)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Ingreso pasivo",
						v: money(calc.passive),
						strong: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Ingreso total",
						v: money(calc.totalInc),
						strong: true
					})
				] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", { children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
						className: "font-display text-lg font-semibold",
						children: "Gastos"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Impuestos",
						v: money(base.taxes)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Hipoteca de la casa",
						v: money(base.homePayment)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Préstamo escolar",
						v: money(base.schoolPayment)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Auto",
						v: paidCar ? money(0) : money(base.carPayment)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Tarjetas",
						v: paidCc ? money(0) : money(base.creditPayment)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Tienda",
						v: paidRetail ? money(0) : money(base.retailPayment)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Otros gastos",
						v: money(base.otherExpenses)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: `Hijos (${children} × ${money(base.perChild)})`,
						v: money(children * base.perChild)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: `Préstamo bancario (${loanK} × $1.000)`,
						v: money(loanK * 100)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Gastos totales",
						v: money(calc.totalExp),
						strong: true
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Row, {
						k: "Flujo mensual",
						v: money(calc.cf),
						strong: true
					})
				] })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 grid gap-4 sm:grid-cols-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-sm border border-rule bg-paper p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-display font-semibold",
							children: "Vida (hijos y deudas)"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-wrap gap-2",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "rounded-sm bg-burgundy px-3 py-2 text-sm text-paper hover:bg-burgundy-deep",
									onClick: () => setChildren((c) => Math.min(3, c + 1)),
									children: "+ Bebé (máx. 3)"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "rounded-sm border border-rule px-3 py-2 text-sm",
									onClick: () => setLoanK((k) => k + 1),
									children: "Pedir $1.000 al banco"
								}),
								loanK > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									type: "button",
									className: "rounded-sm border border-rule px-3 py-2 text-sm",
									onClick: () => setLoanK((k) => Math.max(0, k - 1)),
									children: "Pagar $1.000 de préstamo"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 space-y-2 text-sm",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: paidCar,
											onChange: (e) => setPaidCar(e.target.checked)
										}),
										"Liquidar auto entero (",
										money(base.carLoans),
										") — ahorras ",
										money(base.carPayment),
										"/mes"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: paidCc,
											onChange: (e) => setPaidCc(e.target.checked)
										}),
										"Liquidar tarjetas enteras (",
										money(base.creditCards),
										") — ahorras ",
										money(base.creditPayment),
										"/mes"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
									className: "flex items-center gap-2",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
											type: "checkbox",
											checked: paidRetail,
											onChange: (e) => setPaidRetail(e.target.checked)
										}),
										"Liquidar tienda entera (",
										money(base.retailDebt),
										") — ahorras ",
										money(base.retailPayment),
										"/mes"
									]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-muted",
									children: "Impuestos, «otros gastos» y gastos de hijos NO se pueden liquidar. Hipoteca de vivienda y préstamo escolar tampoco se reducen a medias: o pagas el total, o siguen."
								})
							]
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
					className: "rounded-sm border border-rule bg-paper p-4",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
							className: "font-display font-semibold",
							children: "Comprar un activo"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "mt-1 text-sm text-ink-soft",
							children: [
								"El efectivo inicial de esta profesión es ",
								money(startCash),
								" (cheque + ahorro)."
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mt-3 flex flex-col gap-2",
							children: [
								SAMPLE_DEALS.map((d) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "rounded-sm border border-rule px-3 py-2 text-left text-sm hover:border-forest hover:bg-forest/5",
									onClick: () => {
										setRe((list) => [...list, d]);
										setCashAdj((c) => c - d.down);
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: d.name
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block text-muted",
										children: [
											"Entrada ",
											money(d.down),
											" · Flujo ",
											money(d.cf),
											"/mes"
										]
									})]
								}, d.name)),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "rounded-sm border border-rule px-3 py-2 text-left text-sm hover:border-forest hover:bg-forest/5",
									onClick: () => {
										setStocks((list) => [...list, {
											symbol: "2BIG",
											shares: 10,
											cost: 15,
											div: 100
										}]);
										setCashAdj((c) => c - 150);
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: "10 acciones 2BIG a $15 (ejemplo Pat)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
										className: "block text-muted",
										children: [
											"Costo $150 · Dividendo ",
											money(100),
											"/mes"
										]
									})]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
									type: "button",
									className: "rounded-sm border border-rule px-3 py-2 text-left text-sm hover:border-forest hover:bg-forest/5",
									onClick: () => {
										setBiz((list) => [...list, {
											name: "Video/Pinball",
											down: 2e4,
											cost: 1e5,
											mortgage: 8e4,
											cf: 1600
										}]);
										setCashAdj((c) => c - 2e4);
									},
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "font-semibold",
										children: "Negocio Video/Pinball (ejemplo Pat)"
									}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "block text-muted",
										children: "Entrada $20.000 · Flujo $1.600/mes"
									})]
								})
							]
						})
					]
				})]
			}),
			(re.length > 0 || stocks.length > 0 || biz.length > 0) && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
				className: "mt-6",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h4", {
					className: "font-display text-lg font-semibold",
					children: "Activos en la hoja"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
					className: "mt-2 space-y-1 text-sm",
					children: [
						re.map((a, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between gap-3 border-b border-rule/70 py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								a.name,
								" · entrada ",
								money(a.down),
								" · hipoteca ",
								money(a.mortgage)
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums text-forest",
								children: [money(a.cf), "/mes"]
							})]
						}, `re-${i}`)),
						stocks.map((s, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between gap-3 border-b border-rule/70 py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								s.symbol,
								" · ",
								s.shares,
								" acciones · ",
								money(s.cost),
								" c/u"
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums text-forest",
								children: [money(s.div), "/mes"]
							})]
						}, `st-${i}`)),
						biz.map((b, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
							className: "flex justify-between gap-3 border-b border-rule/70 py-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", { children: [
								b.name,
								" · entrada ",
								money(b.down),
								" · pasivo ",
								money(b.mortgage)
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "tabular-nums text-forest",
								children: [money(b.cf), "/mes"]
							})]
						}, `bz-${i}`))
					]
				})]
			}),
			free && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-6 rounded-sm border border-forest bg-forest/8 p-4",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "font-display text-xl font-semibold text-forest",
					children: "Estás fuera de la Carrera de la Rata"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
					className: "mt-2 text-ink-soft",
					children: [
						"En tu próximo turno puedes voltear la hoja. El banco te entrega",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-ink",
							children: money(calc.passive * 100)
						}),
						" (100 × tu ingreso pasivo). Ese es tu Ingreso inicial del Día de CASHFLOW. La meta para ganar por flujo en la Vía Rápida es",
						" ",
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
							className: "text-ink",
							children: money(calc.passive * 100 + 5e4)
						}),
						"."
					]
				})]
			})
		]
	});
}
function compute(p, s) {
	const reCf = s.re.reduce((a, x) => a + x.cf, 0);
	const bizCf = s.biz.reduce((a, x) => a + x.cf, 0);
	const div = s.stocks.reduce((a, x) => a + x.div, 0);
	const passive = div + reCf + bizCf;
	const childExp = s.children * p.perChild;
	const car = s.paidCar ? 0 : p.carPayment;
	const cc = s.paidCc ? 0 : p.creditPayment;
	const retail = s.paidRetail ? 0 : p.retailPayment;
	const bank = s.loanK * 100;
	const totalExp = p.taxes + p.homePayment + p.schoolPayment + car + cc + retail + p.otherExpenses + childExp + bank;
	const totalInc = p.salary + passive;
	return {
		reCf,
		bizCf,
		div,
		passive,
		totalExp,
		totalInc,
		cf: totalInc - totalExp,
		childExp
	};
}
function Row({ k, v, strong }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: `flex justify-between gap-4 border-b border-rule/60 py-1.5 text-sm ${strong ? "font-semibold" : ""}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "text-ink-soft",
			children: k
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "tabular-nums",
			children: v
		})]
	});
}
function Stat({ label, value, tone = "plain" }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "rounded-sm border border-rule bg-paper px-3 py-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "text-xs tracking-wide text-muted uppercase",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: `mt-1 font-display text-xl font-semibold tabular-nums ${tone === "good" ? "text-forest" : tone === "bad" ? "text-danger" : "text-ink"}`,
			children: value
		})]
	});
}
function Chapter4() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-sm tracking-[0.22em] text-gold uppercase",
			children: "Capítulo 4"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl font-semibold text-burgundy sm:text-5xl",
			children: "Gestión avanzada de la hoja de balance"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 font-display text-xl italic text-ink-soft",
			children: "Ingresos, gastos, activos, pasivos y el flujo neto a prueba de errores"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c4-brujula",
			children: "La brújula de cuatro cuadrantes"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "La hoja no es burocracia. Es un radar. Arriba izquierda: lo que entra. Arriba derecha: el resumen que te dice si eres libre. Abajo izquierda: lo que te da de comer. Abajo derecha: lo que te come a ti." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 grid gap-3 sm:grid-cols-2",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "print-keep rounded-sm border border-rule bg-paper p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm text-burgundy uppercase",
						children: "Arriba · Ingresos"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-ink-soft",
						children: "Salario (activo: trabajo). Intereses, dividendos, flujos de inmuebles y negocios (pasivo: capital)."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "print-keep rounded-sm border border-rule bg-paper p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm text-burgundy uppercase",
						children: "Arriba · Gastos"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-ink-soft",
						children: "Impuestos, casa, escuela, auto, tarjetas, tienda, otros, hijos, banco. La jaula."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "print-keep rounded-sm border border-forest bg-forest/5 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm text-forest uppercase",
						children: "Abajo · Activos"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-ink-soft",
						children: "Cosas que meten dinero. Si no mete, el juego te invita a preguntar si de verdad es un activo."
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "print-keep rounded-sm border border-burgundy bg-burgundy/5 p-4",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "font-display text-sm text-burgundy uppercase",
						children: "Abajo · Pasivos"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-sm text-ink-soft",
						children: "Cosas que sacan dinero. La casa en la que vives, aquí, es pasivo: la hipoteca sale cada mes."
					})]
				})
			]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c4-formulas",
			children: "Las siete fórmulas que no puedes fallar"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Formula, { children: "Ingreso pasivo = Intereses + Dividendos + Flujo inmuebles + Flujo negocios" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Formula, { children: "Ingreso total = Salario + Ingreso pasivo" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Formula, { children: "Gastos totales = suma de todas las líneas de gasto (hijos incluidos)" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Formula, { children: "Flujo mensual (cheque) = Ingreso total − Gastos totales" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Formula, { children: [
			"¿Salgo? = Ingreso pasivo ",
			">",
			" Gastos totales"
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Formula, { children: "Liquidación de inmueble = Precio de venta − Hipoteca" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Formula, { children: "CCR / ROI anual = (Flujo mensual × 12) ÷ Entrada" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			title: "La trampa del «casi»",
			tone: "burgundy",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Si el pasivo es IGUAL a los gastos, SIGUES DENTRO. El manual exige mayor. Un maestro con $2.130 de gastos y $2.130 de pasivo sigue girando. Necesita $2.131." })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c4-compra-re",
			children: "Comprar un inmueble — los 9 pasos del manual"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "El único efectivo que pagas es la ENTRADA. La hipoteca ya está descontada en el flujo de la ficha. No hay pago extra de hipoteca." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, { items: [
			{
				n: "1",
				t: "Activos · tipo",
				d: "Escribe el tipo (Condo, 4-plex, casa 3/2…)."
			},
			{
				n: "2",
				t: "Activos · entrada",
				d: "El down payment que pagas ahora."
			},
			{
				n: "3",
				t: "Activos · costo",
				d: "El precio total del inmueble."
			},
			{
				n: "4",
				t: "Pasivos · hipoteca",
				d: "Tipo + monto de hipoteca (costo − entrada)."
			},
			{
				n: "5",
				t: "Ingresos · tipo",
				d: "El mismo nombre, bajo Bienes raíces."
			},
			{
				n: "6",
				t: "Ingresos · flujo",
				d: "El cash flow de la ficha (puede ser negativo)."
			},
			{
				n: "7",
				t: "Suma al Ingreso pasivo",
				d: "Lado derecho."
			},
			{
				n: "8",
				t: "Suma al Ingreso total",
				d: "Lado derecho."
			},
			{
				n: "9",
				t: "Suma al Flujo mensual",
				d: "Lado derecho. Audita."
			}
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Ejemplo del camionero Pat (manual, página 7): Condo, entrada $4.000, costo $40.000, hipoteca $36.000, flujo $140. El 4-plex: entrada $20.000, costo $100.000, hipoteca $80.000, flujo $800." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c4-venta-re",
			children: "Vender un inmueble — los 10 pasos"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, { items: [
			{
				n: "1",
				t: "Liquidación",
				d: "Precio − Hipoteca. Si sale negativo, PAGAS al banco. Si sale positivo, COBRAS."
			},
			{
				n: "2-4",
				t: "Borra el activo",
				d: "Tipo, entrada y costo."
			},
			{
				n: "5",
				t: "Borra el pasivo",
				d: "Tipo e hipoteca."
			},
			{
				n: "6-7",
				t: "Borra el ingreso",
				d: "Tipo y flujo bajo Bienes raíces."
			},
			{
				n: "8-10",
				t: "Resta a la derecha",
				d: "Quita el flujo del Pasivo, del Ingreso total y del Flujo mensual. Audita."
			}
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c4-acciones",
			children: "Comprar acciones, fondos y CDs"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Steps, { items: [
			{
				n: "1",
				t: "Símbolo",
				d: "OK4U, GRO4US, 2BIG, CD…"
			},
			{
				n: "2",
				t: "Número de acciones",
				d: "Las que pagas ahora."
			},
			{
				n: "3",
				t: "Precio de hoy",
				d: "Costo por acción."
			},
			{
				n: "4",
				t: "Si hay dividendo",
				d: "Escríbelo bajo Dividendos, con símbolo y monto."
			},
			{
				n: "5-7",
				t: "Si hay dividendo",
				d: "Suma al Pasivo, al Ingreso total y al Flujo mensual."
			}
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Ficha de ejemplo del manual: OK4U Drug Co., $20, rango $5–$30, sin dividendo, ROI 0%. Solo tú compras; todos pueden vender. Pat también tiene 1.000 GRO4US a $30 (sin dividendo) y 10 de 2BIG a $15 con $100 de dividendo." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Vender acciones" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Monto = número × precio de venta. Cobra del banco. Borra símbolo, número y precio. Si pagaba dividendo, bórralo de ingresos y réstalo de las tres cifras de la derecha." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c4-bebe-banco",
			children: "Bebé, préstamo y liquidación — recetas cortas"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Bebé" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "+1 hijo (máx. 3) → +gasto por hijo a Gastos de hijos → +Gastos totales → −Flujo mensual → audita." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Préstamo bancario" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "+efectivo → +pasivo Bank Loan → +10% en gastos → +Gastos totales → −Flujo mensual → audita. Pago a contracorriente: de $1.000 en $1.000." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Liquidar una deuda entera" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Pagas el pasivo completo. Quita pasivo y gasto. Recalcula totales y flujo. Audita." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c4-pat",
			children: "El ejemplo completo de Pat (fuera de la Carrera)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "El manual muestra a Pat, camionero, YA casi libre. Es el mejor ejercicio de auditoría que existe. Cópialo en papel y verifica cada suma:" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ul, { items: [
			"Salario $2.500 + dividendo 2BIG $100 + Condo $140 + 4-plex $800 + Video/Pinball $1.600.",
			"Ingreso pasivo $2.640. Ingreso total $5.140.",
			"Gastos: impuestos $460, casa $400, auto $80, otros $570, 2 hijos $280, banco $700. Total $2.490.",
			"Flujo mensual $2.650.",
			"¿$2.640 {'>'} $2.490? SÍ. Pat puede voltear la hoja.",
			"Buyout = $2.640 × 100 = $264.000. Meta de flujo en Vía Rápida = $314.000."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Activos: GRO4US 1.000 × $30; 2BIG 10 × $15; Condo entrada $4.000 costo $40.000; 4-plex $20.000 / $100.000; Video/Pinball $20.000 / $100.000. Pasivos: casa $38.000, auto $4.000, condo $36.000, 4-plex $80.000, Video/Pinball $80.000, préstamo banco $7.000." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			title: "Auditoría relámpago",
			tone: "forest",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Hipoteca de un inmueble DEBE ser costo − entrada. Condo: 40.000 − 4.000 = 36.000. 4-plex: 100.000 − 20.000 = 80.000. Si no cuadra, hay un error de copia. El pago de préstamo bancario DEBE ser 10% del pasivo: $7.000 → $700. Si no, hay un error." })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c4-lab",
			children: "Laboratorio: tu hoja, en vivo"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Elige profesión, compra los mismos activos de Pat, pide prestado, ten hijos, liquida el auto. El recuadro «¿Fuera de la Carrera?» no miente. Úsalo para sentir, no solo para leer, la diferencia entre un doodad y un 4-plex." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FinancialSheet, {}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c4-errores",
			children: "Los 12 errores de hoja que hunden partidas"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ul, { items: [
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
			"No auditar. El ego es el pasivo más caro de la mesa."
		] })
	] });
}
function Chapter5() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "font-display text-sm tracking-[0.22em] text-gold uppercase",
			children: "Capítulo 5"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
			className: "mt-2 font-display text-4xl font-semibold text-burgundy sm:text-5xl",
			children: "Simulación de una partida completa"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mt-3 font-display text-xl italic text-ink-soft",
			children: "De la casilla 1 de la Carrera hasta la victoria absoluta en la Vía Rápida"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c5-mesa",
			children: "La mesa"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Cuatro jugadores, un sábado de 9:00 a 12:00 — exactamente el ritual del millonario de 3 horas. Banquero: Marcos (también juega; su dinero personal está en un sobre aparte). Sentados, en sentido horario: Elena (Maestra), Marcos (Mecánico), Sofía (Médica) y Julián (Piloto). El auditor de cada uno es quien tiene a la derecha: el de Elena es Julián; el de Marcos es Elena; y así." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Elena copia su ficha: salario $3.300, gastos $2.130, cheque $1.170, ahorro $400. El banco le entrega $1.570 y ella borra el ahorro. Hijos: 0. Préstamo: 0. Ingreso pasivo: 0. Meta para salir: $2.131 o más de flujo pasivo. Elige el Sueño «Safari fotográfico en África», $100.000, y pone el queso ahí. La rata, en Partida. Tiran un dado: Elena saca 6 y empieza." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			title: "Por qué no es Sofía, la médica, la favorita",
			tone: "gold",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Sofía cobra $3.550 por cheque y empieza con $3.950. Parece imbatible. Su jaula, sin embargo, es de $9.650. Necesita cinco veces más ingreso pasivo que Elena. El mazo no le paga cinco veces más. Esta partida existe para que se vea." })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c5-act1",
			children: "Acto I — Los primeros giros (turnos 1 a 8)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Turno 1 · Elena · dado 4 · Caridad" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Avanza 4 desde Partida y cae en Caridad. Ingreso total $3.300. El 10% son $330. Lo piensa: dos dados, tres turnos, más cheques. Paga $330. Le quedan $1.240. Coloca 3 fichas junto a la rata. Julián, su auditor, asiente: $3.300 × 0,10 = $330, correcto." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Turno 2 · Marcos · dado 3 · Oportunidad" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Mecánico, $1.390 de inicio. Elige Pequeño. Sale «¡Gran ganga! Casa 3/2», entrada $2.000, flujo $250. La compra. Efectivo $1.390 − $2.000: pide $1.000 al banco, recibe $1.000, paga $2.000, le quedan $390. Pasivo banco $1.000, gasto banco $100. Gastos 1.280 + 100 = 1.380. Flujo 2.000 + 250 − 1.380 = $870 (salario $2.000 + pasivo $250 = 2.250; 2.250 − 1.380 = 870). Meta de escape ahora $1.380. Va 250 / 1.380." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Turno 3 · Sofía · dado 2 · Cosas" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "«Vacaciones familiares — $2.000». Obligatorias. Paga de su montón de $3.950. Le quedan $1.950. Ni un activo. El tablero acaba de recordarle que el sueldo alto es un imán de doodads." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Turno 4 · Julián · dado 5 · Cheque (pasa) y Oportunidad" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Pasa Cheque, pide $2.600. Iba con $3.000 de inicio ($2.600+$400). Ahora $5.600. Cae en Oportunidad, tienta Grande. Sale IPO de biotecnología, $50.000 de entrada, dado 5–6 = $500.000. No tiene $50.000. Pide 50 préstamos? $5.000 de gasto nuevo: suicidio. Pasa. La carta caduca." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("strong", {
			className: "text-ink",
			children: "Lección:"
		}), " un Grande no es un premio. Es una puerta con umbral. Si no llegas al umbral, el Pequeño es el oficio."] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Turno 5 · Elena · 2 dados (Caridad) · 8 · Cheque + Oportunidad" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Pasa Cheque: pide $1.170. Montón $2.410. Cae en Oportunidad, elige Pequeño. «Condominio ciudad universitaria», entrada $4.000, flujo $140. Pide $2.000 al banco. Recibe $2.000, paga $4.000, le quedan $410. Gasto banco $200. Gastos 2.130 + 200 = 2.330. Pasivo $140. Flujo = 3.300 + 140 − 2.330 = $1.110. Quita una ficha de Caridad (le quedan 2)." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Turno 6 · Marcos · 5 · El Mercado" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "«Comprador de casas 3/2 — $90.000». Marcos tiene exactamente una House 3/2, hipoteca $43.000. Liquidación $90.000 − $43.000 = $47.000. Vende. Cobra $47.000. Borra activo, hipoteca, flujo $250. Gastos vuelven a $1.380 (aún tiene el préstamo de $1.000). Pasivo 0. Efectivo ~ $47.390. Acaba de convertir un activo en munición. Elena, auditora, verifica la resta." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			title: "El Mercado no es un cajero automático",
			tone: "forest",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "Marcos podía quedarse el $250/mes. Eligió el capital. Con $47.000 ya puede mirar Grandes. La pregunta correcta no es «¿subió el precio?» sino «¿este efectivo me compra MÁS flujo del que acabo de soltar?»." })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Turno 7 · Sofía · 6 · Cheque + Despedido" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Pasa Cheque, pide $3.550. Cae en Despedido. Paga $9.650 (gastos totales) y pierde 2 turnos. El golpe es brutal: el sueldo alto tiene una factura de despido alta. Caridad no tenía. Se sienta dos rondas. El tablero acaba de explicar por qué el médico tarda." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Turno 8 · Julián · 4 · Cosas" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "«Barco nuevo — $18.000, o $1.000 + préstamo $17.000 y $340/mes». Julián, piloto de ego, financia. Gasto nuevo $340. Gastos 6.900 + 340 = 7.240. Flujo 9.500 − 7.240 = $2.260. Se compró un pasivo y lo llamó premio. El doodad más didáctico del mazo." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c5-act2",
			children: "Acto II — Elena construye, Marcos dispara (turnos 9 a 18)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Turno 9 · Elena · 2 dados · 7 · El Mercado" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Nadie tiene el activo nombrado (8-plex a $40.000/unidad). Carta al fondo. Segunda ficha de Caridad fuera." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Turno 10 · Marcos · 3 · Oportunidad · Grande" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			"«4-plex ejemplo Pat»: entrada $20.000, flujo $800. Paga de su montón. Gastos siguen $1.380 (préstamo intacto). Pasivo $800. 800 ",
			">",
			" 1.380? No. Flujo = 2.000 + 800 − 1.380 = $1.420. Efectivo ~ $27.000."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Turnos 11–12 · Sofía pierde el segundo turno de despido. Julián cae en Bebé." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Julián suma 1 hijo, $480. Gastos 7.240 + 480 = 7.720. Flujo 9.500 − 7.720 = $1.780. El yate y el bebé se comen el cheque. Meta de escape $7.721. Está más lejos que al empezar." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Turno 13 · Elena · último turno de Caridad · 11 · pasa Cheque, cae en Oportunidad" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Cheque $1.110. Elige Pequeño: «Casa 3/2 mercado deprimido», entrada $4.000, flujo $200. Pide $4.000 al banco (gasto +$400). Gastos 2.330 + 400 = 2.730. Pasivo 140 + 200 = $340. Sigue lejos, pero cada activo es un ladrillo. Caridad termina." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Turno 14 · Marcos · 6 · Cheque + Oportunidad Grande" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			"Cheque $1.420. «Video/Pinball», entrada $20.000, flujo $1.600. Lo compra. Pasivo 800 + 1.600 = $2.400. Gastos $1.380. ",
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("strong", {
				className: "text-ink",
				children: [
					"$2.400 ",
					">",
					" $1.380."
				]
			}),
			" Marcos, en silencio, empuja la hoja a Elena. Ella audita: 2BIG no tiene, pero el 4-plex $800 + pinball $1.600 = 2.400. Gastos: 360 + 300 + 60 + 60 + 50 + 450 + 100 banco = 1.380. Correcto. Al INICIO de su próximo turno, Marcos puede salir."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Turno 15 · Sofía vuelve · 2 · Oportunidad Pequeña" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "«Condominio extras, flujo −$100». Lo rechaza. Un activo que aleja de la salida es un pasivo con escritura." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Turno 16 · Julián · 1 · Caridad" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "10% de su ingreso total (9.500) = $950. Paga, toma 2 dados tres turnos, desesperado por cheques. El yate no se inmuta." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Turno 17 · Elena · 5 · Cosas «Tu hijo necesita brackets — $2.000»" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "No tiene hijo, pero el doodad no pregunta. Pide $2.000 al banco. Gasto banco +$200. La jaula crece. Es el momento más amargo: gastar en un niño que no tiene." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Turno 18 · Marcos sale a la Vía Rápida" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(P, { children: [
			"Inicio de turno: pasivo $2.400 ",
			">",
			" gastos $1.380. Voltea la hoja. Buyout = $2.400 × 100 = $240.000. El banco se los entrega. Meta de flujo: $290.000. Coloca la rata en Entrada. Las fichas de Oportunidad ya no son su problema. Elena traga saliva y sonríe: el mecánico se acaba de ir."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c5-act3",
			children: "Acto III — Elena aprende a vender y a elegir (turnos 19 a 28)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Sofía arma por fin un 4-plex ($800) y un dúplex ($820). Pasivo $1.620 contra $9.650: el desierto. Julián liquida el yate no — no puede: el barco no se «liquida» como auto; es un doodad capitalizado. Paga tarjetas ($22.000, ahorra $660/mes). Gastos bajan. Sigue lejos." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Elena, turno 21 · El Mercado · comprador de condos $55.000" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Tiene el Condo 2/1, hipoteca $36.000. Liquidación $19.000. Vende. Pierde $140 de flujo, gana $19.000 de pólvora. Inmediatamente, en su siguiente Oportunidad, toma Grande: el 4-plex de $800 por $20.000. Pasivo neto: perdió 140, ganó 800. La jaula de préstamos sigue ahí, pero el motor cambió de cilindrada." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Turno 24 · Elena · Bebé" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Un hijo. +$180 de gasto. Gastos suben $180, la meta se aleja $180. Julián audita. Elena no discute con el tablero: anota, sigue. Máximo 3; le quedan dos sustos." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Turno 26 · Elena liquida deudas en vez de tirar" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "El reglamento lo permite: en cualquier turno puedes liquidar en vez de jugar. Tiene efectivo de un cheque acumulado y de la venta. Paga el auto ($5.000, ahorra $100) y la tienda ($1.000, ahorra $50). Gastos −$150. Cada dólar de gasto que muere vale igual que un dólar de pasivo que nace. El auditor confirma." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Turno 27 · Grande · edificio 12 unidades (ficha del manual)" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Entrada $50.000, flujo $2.400, ROI 58%. Elena pide lo que le falta al banco, acepta el $ gasto, y el flujo nuevo la empuja. Ingreso pasivo (4-plex $800 + edificio $2.400 + restos) cruza sus gastos. Cifra final de Elena al salir: pasivo $3.320, gastos $3.160. Un hijo, préstamos, un edificio. No fue limpio. Fue suficiente." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Turno 28 · Elena voltea la hoja" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Buyout = $3.320 × 100 = $332.000. Meta de flujo = $382.000. Queso aún en África, $100.000. Rata en Entrada. Tira 2 dados. Sofía sigue en la Carrera. Julián también. Marcos ya está en la Vía, dos vueltas por delante." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c5-act4",
			children: "Acto IV — La Vía Rápida (turnos 29 a 38)"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Marcos, primer Día de CASHFLOW" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Pasa la casilla. Cobra $240.000 aunque se despiste: aquí no se pierde el día. Compra «Tintorería, 2 locales», entrada $100.000, flujo +$3.000. Ingreso del Día = $243.000. Le faltan $47.000 de flujo para la victoria por negocios. Un solo negocio más grande podría bastar. Pone ficha verde." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Elena, 2 dados, 9 · cae en Auditoría fiscal" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Mitad del efectivo. $332.000 se parten. Duele, no mata: el flujo del Día sigue intacto. La Vía Rápida ataca el montón, no el motor." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Marcos, 8 · cae en el Safari de Elena" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "No es su sueño. El costo del Safari de Elena sube 100% del original: de $100.000 a $200.000. Marcos pone una ficha suya en la casilla como recargo. No puede comprarlo para ganar. Elena aprieta los dientes: su puerta se encareció." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Elena, 11 · Día de CASHFLOW + negocio «Calefacción y aire»" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Cobra su $332.000 (olvidó pedirlo; igual se lo dan). Cae en Heat & A/C: entrada $200.000, flujo $10.000, CCR 60%. Compra. Día de CASHFLOW nuevo = $342.000. Meta $382.000. Le faltan $40.000 de flujo… o el Safari a $200.000." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Sofía, todavía en la Carrera, cae en Despedido otra vez" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Paga $9.650 otra vez. La mesa deja de reírse. El sueldo es un faro y un blanco." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Julián llega al umbral con un 8-plex y liquidando tarjetas" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Sale tarde. Buyout menor que el de Elena porque su pasivo apenas supera una jaula enorme. Entra con menos pólvora. El piloto aprendió caro lo que el conserje sabe de oído: el tamaño de la jaula manda." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Marcos, 7 · Cadena de restaurantes familiares" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Entrada $300.000, flujo $14.000. No le alcanza. Pasa. En la Vía no hay banco amigo. Esa es la regla que más jugadores olvidan: el apalancamiento se acabó. O tienes el efectivo o sigues girando." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Elena, Caridad de la Vía" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Paga $100.000. A partir de ahora elige 1, 2 o 3 dados cada turno. Quiere dados altos para alcanzar África o un negocio de $8.000–$14.000." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H3, { children: "Turno 36 · Elena, 3 dados, 16 · cae en su Safari" }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "El recargo de Marcos está ahí: $200.000. Elena cuenta el montón. Le alcanza. Julián, auditor, revisa: no hay préstamo posible, el efectivo está, la casilla es la del queso, el recargo está marcado. Paga $200.000. Coloca su ficha. El juego termina." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c5-cierre",
			children: "Victoria absoluta — qué se aprendió"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Elena, maestra, gana. No tuvo el mejor cheque. No fue la primera en la Vía (Marcos la adelantó). Ganó porque su jaula era pequeña, vendió cuando el Mercado pagó mejor flujo futuro, liquidó deudas que no producían, aceptó un hijo sin drama, y en la Vía pagó Caridad para elegir dados cuando el sueño estaba a un tramo. Marcos estuvo a un negocio de ganar por los $50.000 extra. Sofía, la médica, nunca salió. Julián salió tarde y pobre de efectivo." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ul, { items: [
			"El salario no libera. El flujo sí.",
			"El Mercado es donde se cosecha; la Oportunidad es donde se siembra.",
			"Un doodad financiado (el yate) es una segunda hipoteca emocional.",
			"Despedido cobra proporcional a tu jaula: los ricos de sueldo pagan más por el mismo recuadro rojo.",
			"En la Vía Rápida el banco cierra la ventanilla. El efectivo que llevas es el único combustible.",
			"Encarecer el sueño ajeno es una arma. Marcos la usó; no le alcanzó.",
			"Auditar no es desconfiar. Es amar la cifra correcta."
		] }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Callout, {
			title: "Ahora, la sexta hora del año",
			tone: "gold",
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "El manual pide doce partidas. La segunda, que cada uno ponga su vida real en la hoja: su sueldo, su alquiler, sus tarjetas, sus hijos. Si esa hoja no sale de la Carrera, el juego acaba de decirte el trabajo de los próximos doce meses. Empiecen a tiempo. Terminen a tiempo. Enséñenlo." })
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(H2, {
			id: "c5-colofon",
			children: "Colofón"
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "Esta guía se redactó como manual de aprendizaje a partir del reglamento oficial en inglés (CASHFLOW®, G101CT15, CASHFLOW Technologies, Inc.) y de la traducción española adjunta. CASHFLOW® es marca registrada. No está autorizada para uso comercial sin permiso escrito del titular. Patente 6.826.878. Las analogías, la partida de Elena, el laboratorio de hoja y la organización pedagógica son original de esta guía." }),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)(P, { children: "«Es hora de salir de la Carrera de la Rata.» — cierre del manual original." })
	] });
}
var TOC = [
	{
		id: "portada",
		n: "00",
		title: "Portada"
	},
	{
		id: "capitulo-1",
		n: "01",
		title: "Filosofía: Carrera vs. Vía Rápida"
	},
	{
		id: "capitulo-2",
		n: "02",
		title: "Componentes del juego"
	},
	{
		id: "capitulo-3",
		n: "03",
		title: "Reglas paso a paso"
	},
	{
		id: "capitulo-4",
		n: "04",
		title: "Hoja de balance"
	},
	{
		id: "capitulo-5",
		n: "05",
		title: "Partida completa"
	}
];
function BookApp({ print }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("portada");
	(0, import_react.useEffect)(() => {
		if (print) return;
		const ids = TOC.map((t) => t.id);
		const obs = new IntersectionObserver((entries) => {
			const vis = entries.filter((e) => e.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (vis?.target.id) setActive(vis.target.id);
		}, {
			rootMargin: "-20% 0px -55% 0px",
			threshold: [.1, .25]
		});
		ids.forEach((id) => {
			const el = document.getElementById(id);
			if (el) obs.observe(el);
		});
		return () => obs.disconnect();
	}, [print]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "min-h-dvh overflow-x-hidden bg-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
				className: "no-print sticky top-0 z-30 border-b border-rule/80 bg-paper/95 backdrop-blur-sm",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl items-center justify-between gap-3 px-4 py-3",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "rounded-sm p-2 text-burgundy lg:hidden",
							onClick: () => setOpen(true),
							"aria-label": "Abrir índice",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: "#portada",
							className: "font-display text-sm font-semibold tracking-wide text-burgundy sm:text-base",
							children: "Guía Definitiva CASHFLOW"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center gap-2",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
								href: "/guia-definitiva-cashflow.pdf",
								className: "inline-flex min-h-11 items-center gap-1.5 rounded-sm bg-burgundy px-3 py-2 text-sm text-paper hover:bg-burgundy-deep",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "hidden sm:inline",
										children: "Descargar PDF"
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
										className: "sm:hidden",
										children: "PDF"
									})
								]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
								type: "button",
								onClick: () => window.print(),
								className: "inline-flex min-h-11 items-center gap-1.5 rounded-sm border border-rule px-3 py-2 text-sm text-ink-soft hover:border-burgundy hover:text-burgundy",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Printer, { className: "size-4" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "hidden sm:inline",
									children: "Imprimir"
								})]
							})]
						})
					]
				})
			}),
			open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "no-print fixed inset-0 z-40 bg-ink/40 lg:hidden",
				onClick: () => setOpen(false),
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
					className: "absolute top-0 left-0 flex h-full w-[min(100%,20rem)] flex-col bg-paper p-5 shadow-lg",
					onClick: (e) => e.stopPropagation(),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display font-semibold text-burgundy",
							children: "Índice"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: () => setOpen(false),
							"aria-label": "Cerrar",
							className: "p-2",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TocList, {
						active,
						onPick: () => setOpen(false)
					})]
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto grid max-w-6xl gap-8 px-4 py-8 lg:grid-cols-[16rem_1fr]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("aside", {
					className: "no-print hidden lg:block",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "sticky top-20",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "font-display text-xs tracking-[0.2em] text-gold uppercase",
							children: "Índice"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TocList, { active })]
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
					className: "min-w-0 max-w-3xl pb-24",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
							id: "portada",
							className: "print-keep scroll-mt-24",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Cover, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
							id: "capitulo-1",
							className: "print-break mt-20 scroll-mt-24",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chapter1, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
							id: "capitulo-2",
							className: "print-break mt-20 scroll-mt-24",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chapter2, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
							id: "capitulo-3",
							className: "print-break mt-20 scroll-mt-24",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chapter3, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
							id: "capitulo-4",
							className: "print-break mt-20 scroll-mt-24",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chapter4, {})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
							id: "capitulo-5",
							className: "print-break mt-20 scroll-mt-24",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Chapter5, {})
						})
					]
				})]
			})
		]
	});
}
function TocList({ active, onPick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
		className: "mt-4 space-y-1",
		children: TOC.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
			href: `#${t.id}`,
			onClick: onPick,
			className: `flex items-baseline gap-2 rounded-sm px-2 py-2 text-sm ${active === t.id ? "bg-burgundy/8 font-semibold text-burgundy" : "text-ink-soft hover:text-ink"}`,
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-display text-gold tabular-nums",
				children: t.n
			}), t.title]
		}) }, t.id))
	});
}
function Cover() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "print-keep overflow-hidden rounded-lg border border-rule bg-paper-2 px-6 py-12 sm:px-10 sm:py-16",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "font-display text-sm tracking-[0.28em] text-gold uppercase",
				children: "Manual de aprendizaje"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("h1", {
				className: "mt-4 font-display text-4xl leading-tight font-semibold text-burgundy sm:text-6xl",
				children: ["Guía Definitiva", /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "mt-2 block text-ink",
					children: "CASHFLOW"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-6 max-w-md font-display text-xl text-ink-soft",
				children: "Cómo salir de la Carrera de la Rata y jugar en la Vía Rápida — reglas, hoja y una partida completa."
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-8 flex items-center gap-3 text-sm text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(BookOpen, { className: "size-4 text-burgundy" }), "Cinco capítulos · Laboratorio interactivo · PDF descargable"]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-10 max-w-lg text-sm leading-relaxed text-ink-soft",
				children: "El dinero no es lo más importante de la vida, pero parece afectar todo lo que sí lo es. Esta guía traduce el manual original a un lenguaje universal, sin omitir una regla, y añade el oficio que el cartón no puede dar solo: practicar la hoja hasta que los números dejen de intimidar."
			})
		]
	});
}
//#endregion
export { BookApp as t };
