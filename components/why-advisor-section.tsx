import { CheckCircle, Users, GraduationCap, Shield, Heart } from "lucide-react"
import Image from "next/image"

export function WhyAdvisorSection() {
  return (
    <section className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              ¿Por qué ser asesor en <span className="text-primary">Red Ferro</span>?
            </h2>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <CheckCircle className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">Decidí cuánto querés ganar y manejá tu propio tiempo.</p>
              </div>

              <div className="flex items-start space-x-4">
                <GraduationCap className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">
                  Formación en la Academia 100% virtual para rendir tu matrícula PAS.
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <Shield className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">
                  Respaldo de Blanco Asesores + Grupo Gaman (más de 40 aseguradoras).
                </p>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">Comunidad de colegas y especialistas que te acompaña siempre.</p>
              </div>

              <div className="flex items-start space-x-4">
                <Heart className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">
                  Fidelizá clientes incorporando servicios diferenciales en salud, prevención y seguros.
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <Image
              src="/grupo-networking.png"
              alt="Grupo de personas en reunión de networking"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
