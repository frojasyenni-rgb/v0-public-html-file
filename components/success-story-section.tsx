import Image from "next/image"
import { Quote } from "lucide-react"

export function SuccessStorySection() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-10">
            Historia de <span className="text-primary">Éxito</span>
          </h2>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            <div className="flex flex-col items-center lg:items-start">
              <div className="relative">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/foto%20rojas%20yenni.jpg-dgHjgiyD76EWfyNwRxLmJbpgFIdash.jpeg"
                  alt="Fernando Rojas Yenni"
                  width={280}
                  height={320}
                  className="rounded-2xl shadow-2xl w-full max-w-xs"
                />
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-primary rounded-full flex items-center justify-center">
                  <Quote className="w-4 h-4 text-white" />
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-6 text-center lg:text-left">
                Fernando Rojas Yenni
              </h3>

              <div className="space-y-6">
                <p className="text-gray-700 text-lg leading-relaxed">
                  "Venía de otro rubro y descubrí en los seguros la oportunidad de transformar mi red de confianza en
                  una carrera sólida. Con el acompañamiento de Rubén Blanco y a Grupo Gaman, entendí que estaba en el
                  lugar correcto: un espacio donde los valores y las relaciones a largo plazo son la base del
                  crecimiento."
                </p>

                <p className="text-gray-700 font-medium text-lg leading-relaxed">
                  Hoy, con Blanco Asesores y Grupo Gaman, ayudo a optimizar costos, disfruto de mayor independencia
                  financiera y sigo aprendiendo cada día. Así nació Red Ferro, para contagiar a otros esta experiencia
                  de confianza y crecimiento compartido."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
