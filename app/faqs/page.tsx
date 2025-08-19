import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card, CardContent } from "@/components/ui/card"

export default function FAQsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">Preguntas Frecuentes</h1>
              <p className="text-xl text-muted-foreground mb-8">
                Encuentra respuestas a las preguntas más comunes sobre RedFerro
              </p>
            </div>
          </div>
        </section>

        {/* FAQs */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <Card>
                <CardContent className="p-8">
                  <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                      <AccordionTrigger className="text-left">
                        ¿Cómo funciona el sistema de referidos de RedFerro?
                      </AccordionTrigger>
                      <AccordionContent>
                        Es muy simple: te registras en nuestra plataforma, compartes información de contacto de personas
                        que puedan necesitar seguros o servicios financieros, nuestros profesionales certificados se
                        contactan con ellos, y tú recibes una comisión por cada venta exitosa.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                      <AccordionTrigger className="text-left">¿Cuánto puedo ganar por cada referido?</AccordionTrigger>
                      <AccordionContent>
                        Las comisiones varían según el tipo de producto y el monto de la venta. Generalmente van desde
                        $50 hasta $500 por referido exitoso. Los productos de mayor valor como seguros de vida o
                        inversiones pueden generar comisiones más altas.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                      <AccordionTrigger className="text-left">¿Cuándo recibo mi comisión?</AccordionTrigger>
                      <AccordionContent>
                        Las comisiones se pagan mensualmente, dentro de los primeros 15 días del mes siguiente a la
                        venta confirmada. Puedes elegir recibir el pago por transferencia bancaria o PayPal.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-4">
                      <AccordionTrigger className="text-left">¿Hay algún costo por registrarme?</AccordionTrigger>
                      <AccordionContent>
                        No, el registro en RedFerro es completamente gratuito. No cobramos ninguna tarifa de membresía
                        ni comisiones por adelantado. Solo ganamos cuando tú ganas.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-5">
                      <AccordionTrigger className="text-left">¿Qué tipo de productos puedo referir?</AccordionTrigger>
                      <AccordionContent>
                        Trabajamos con una amplia gama de productos: seguros de auto, vida, hogar, salud, seguros
                        comerciales, inversiones, préstamos, hipotecas, y servicios de planificación financiera.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-6">
                      <AccordionTrigger className="text-left">
                        ¿Necesito experiencia en seguros para participar?
                      </AccordionTrigger>
                      <AccordionContent>
                        No necesitas experiencia previa. Nosotros nos encargamos de toda la parte técnica y de ventas.
                        Tu trabajo es simplemente identificar personas que puedan necesitar estos servicios y
                        conectarlas con nosotros.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-7">
                      <AccordionTrigger className="text-left">
                        ¿Cómo puedo hacer seguimiento de mis referidos?
                      </AccordionTrigger>
                      <AccordionContent>
                        Tendrás acceso a un panel de control donde podrás ver el estado de todos tus referidos en tiempo
                        real: contactados, en proceso, vendidos, y comisiones generadas.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-8">
                      <AccordionTrigger className="text-left">
                        ¿Qué pasa si mi referido no está interesado?
                      </AccordionTrigger>
                      <AccordionContent>
                        No hay problema. Nuestros profesionales respetan completamente la decisión del cliente. Si no
                        están interesados, simplemente actualizamos el estado en tu panel y no hay ninguna penalización
                        para ti.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-9">
                      <AccordionTrigger className="text-left">
                        ¿Puedo referir a personas de otros países?
                      </AccordionTrigger>
                      <AccordionContent>
                        Actualmente operamos principalmente en México, Colombia, Argentina y Chile. Si tienes contactos
                        en otros países de América Latina, contáctanos para evaluar la posibilidad de expandir nuestros
                        servicios.
                      </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-10">
                      <AccordionTrigger className="text-left">
                        ¿Cómo me contacto si tengo más preguntas?
                      </AccordionTrigger>
                      <AccordionContent>
                        Puedes escribirnos a soporte@redferro.com, llamarnos al +52 55 1234-5678, o usar el chat en vivo
                        disponible en nuestra plataforma. Nuestro equipo de soporte está disponible de lunes a viernes
                        de 9:00 AM a 6:00 PM.
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
