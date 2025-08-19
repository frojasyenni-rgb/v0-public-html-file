"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Rocket, Lightbulb, Key, Sparkles } from "lucide-react"
import Image from "next/image"

export default function BrokersPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        <section className="py-12 lg:py-16 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    Bienvenida a un nuevo modelo de crecimiento
                  </h1>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    En Red Ferro sabemos lo que significa construir una cartera de clientes: tiempo, esfuerzo y
                    confianza. Por eso diseñamos un modelo pensado para que los productores con trayectoria puedan
                    potenciar su negocio sin perder independencia, con el respaldo de Blanco Asesores (PEG – Productor
                    Elite Gaman) y Grupo Gaman, el broker N.º 1 del país.
                  </p>
                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
                    <p className="text-primary font-semibold flex items-center gap-2">
                      <Rocket className="h-5 w-5" />
                      Tu experiencia, nuestra plataforma: un futuro más rentable y sustentable.
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
                    onClick={() => document.getElementById("registro")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Quiero potenciar mi cartera
                  </Button>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <Image
                    src="/productor-profesional.png"
                    alt="Productor asesor profesional"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                  <Image
                    src="/asesoramiento-integral.png"
                    alt="Cliente recibiendo asesoramiento integral"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    Un ecosistema integral para diferenciarte
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Hoy tus clientes esperan más que pólizas: buscan un asesor que les resuelva de forma integral. Con
                    Red Ferro podés ofrecer un modelo One Stop Shopping que abarca seguros patrimoniales, de vida y
                    corporativos, soluciones de salud, prevención y beneficios.
                  </p>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Negociamos con más de 40 aseguradoras líderes, obteniendo condiciones preferenciales que se
                    trasladan directamente a tu negocio.
                  </p>
                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
                    <p className="text-primary font-semibold flex items-center gap-2">
                      <Lightbulb className="h-5 w-5" />
                      Te damos más productos, más respaldo y más valor agregado para fidelizar y retener a tus clientes.
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
                    onClick={() => document.getElementById("registro")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Quiero ampliar mis soluciones
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-gradient-to-br from-amber-50 to-orange-50">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="space-y-6">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    Herramientas y acompañamiento para crecer
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Tu cartera merece un socio estratégico que te ayude a crecer. Con Red Ferro accedés a capacitación
                    continua, soporte técnico, comercial y legal, materiales listos para comunicarte con tus clientes y
                    una comunidad de colegas con la misma visión de excelencia.
                  </p>
                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
                    <p className="text-primary font-semibold flex items-center gap-2">
                      <Key className="h-5 w-5" />
                      Vos decidís el rumbo, nosotros te damos las herramientas para que llegues más lejos.
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
                    onClick={() => document.getElementById("registro")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Quiero acceder a las herramientas
                  </Button>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <Image
                    src="/capacitacion-digital.png"
                    alt="Capacitación digital y comunidad colaborativa"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 lg:py-16 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
                <div className="flex justify-center lg:justify-start order-2 lg:order-1">
                  <Image
                    src="/productor-exitoso.png"
                    alt="Productor celebrando éxito e independencia"
                    width={400}
                    height={300}
                    className="rounded-lg shadow-lg"
                  />
                </div>
                <div className="space-y-6 order-1 lg:order-2">
                  <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
                    Una alianza que eleva tu independencia
                  </h2>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Ser parte de Red Ferro no significa perder tu identidad, sino potenciarla. Vos mantenés el control
                    de tu cartera y la relación con tus clientes, mientras sumás el respaldo de líderes del mercado,
                    formación constante y nuevas oportunidades de negocio.
                  </p>
                  <div className="bg-primary/10 border-l-4 border-primary p-4 rounded-r-lg">
                    <p className="text-primary font-semibold flex items-center gap-2">
                      <Sparkles className="h-5 w-5" />
                      Independencia con respaldo, confianza con resultados.
                    </p>
                  </div>
                  <Button
                    size="lg"
                    className="bg-primary hover:bg-primary/90 text-white px-8 py-3"
                    onClick={() => document.getElementById("registro")?.scrollIntoView({ behavior: "smooth" })}
                  >
                    Quiero sumarme a Red Ferro
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
