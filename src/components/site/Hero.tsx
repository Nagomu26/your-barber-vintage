import { Phone } from "lucide-react";
import { CONFIG } from "@/lib/config";
import { Reveal } from "./Reveal";

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden bg-papel">
      {/* Explosión de rayos decorativa */}
      <div
        className="pointer-events-none absolute -left-24 -top-24 h-64 w-64 opacity-[0.08]"
        aria-hidden="true"
        style={{
          background:
            "repeating-conic-gradient(from 0deg at 50% 50%, #2e2b27 0deg 6deg, transparent 6deg 16deg)",
          borderRadius: "9999px",
        }}
      ></div>

      <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-14 sm:px-8 sm:pb-20 sm:pt-20">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-7">
            <Reveal>
              <p className="mb-6 inline-flex items-center gap-3 font-display text-lg tracking-wide text-azul">
                <span className="text-grana">★</span> Barbería de confianza · Reserva online
              </p>
            </Reveal>

            <Reveal delay={80}>
              <h1 className="font-display text-5xl leading-[1.02] tracking-tight text-tinta sm:text-6xl lg:text-7xl">
                La barbería
                <br />
                <span className="text-grana">de siempre</span>
                <br />
                en tu barrio.
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="mt-7 max-w-xl text-lg italic leading-relaxed text-tinta/80">
                Corte, barba y buena conversación. Elige tu hora online y sin esperas:
                {CONFIG.nombre} en {CONFIG.ciudad}.
              </p>
            </Reveal>

            <Reveal delay={240}>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row">
                <a
                  href="#reserva"
                  className="rounded-sm bg-grana px-10 py-4 text-center font-display text-xl tracking-wide text-crema shadow-rojo transition-all duration-300 hover:-translate-y-0.5 hover:bg-azul"
                >
                  Reservar cita
                </a>
                <a
                  href={`tel:${CONFIG.telefonoEnlace}`}
                  className="inline-flex items-center justify-center rounded-sm border-2 border-tinta bg-transparent px-8 py-4 text-sm font-semibold uppercase tracking-wide text-tinta transition-colors duration-300 hover:border-grana hover:text-grana"
                >
                  <Phone className="mr-2 h-4 w-4" aria-hidden="true" />
                  Llamar · {CONFIG.telefono}
                </a>
              </div>
            </Reveal>
          </div>

          {/* Poste + foto enmarcada */}
          <Reveal delay={200} className="lg:col-span-5">
            <div className="relative mx-auto max-w-sm">
              {/* Poste de barbero */}
              <div className="absolute -left-4 top-6 z-10 h-64 w-8 sm:-left-8 sm:h-72" aria-hidden="true">
                <div className="barber-pole"></div>
              </div>

              <div className="ml-6 rotate-1 border-[6px] border-crema bg-crema p-3 shadow-cardglow3 transition-transform duration-300 hover:rotate-0 sm:ml-8">
                <img
                  src="img/beard.jpg"
                  alt="Barbero con barba cuidada"
                  className="aspect-[4/5] w-full object-cover sepia"
                  loading="eager"
                />
                <p className="mt-3 text-center font-display text-sm uppercase tracking-[0.25em] text-tinta">
                  Your Barber · Est. 2026
                </p>
              </div>

              <div
                className="pointer-events-none absolute -bottom-8 -right-4 h-28 w-28 opacity-90 sm:-right-8"
                aria-hidden="true"
              >
                <svg viewBox="0 0 100 100" className="h-full w-full">
                  <text
                    x="50"
                    y="50"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#C99B2E"
                    fontSize="11"
                    fontFamily="Alfa Slab One, serif"
                    className="uppercase"
                    style={{ letterSpacing: "0.1em" }}
                  >
                    Tu corte
                  </text>
                  <text
                    x="50"
                    y="64"
                    textAnchor="middle"
                    dominantBaseline="central"
                    fill="#B23A2E"
                    fontSize="16"
                    fontFamily="Alfa Slab One, serif"
                    className="uppercase"
                  >
                    a tiempo
                  </text>
                </svg>
              </div>
            </div>
          </Reveal>
        </div>
      </div>

      {/* Banda de horario */}
      <div className="relative overflow-hidden bg-azul">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 px-5 py-4 text-center sm:flex-row sm:justify-between sm:px-8 sm:text-left">
          <p className="font-display text-lg uppercase tracking-widest text-crema">
            Lun–Sáb · 10h–14h / 16h–21h
          </p>
          <span className="hidden h-4 w-4 rotate-45 bg-mostaza sm:block" aria-hidden="true"></span>
          <p className="font-display text-lg uppercase tracking-widest text-mostaza">
            Dom · 9h–14h
          </p>
        </div>
      </div>
    </section>
  );
}