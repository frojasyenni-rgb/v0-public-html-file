import { CheckCircle2, Users, Target, Award } from "lucide-react"
import Image from "next/image"

export function RequirementsSection() {
  return (
    <section className="py-12 lg:py-16 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          <div className="relative">
            <Image
              src="/persona-checklist.png"
              alt="Persona completando requisitos"
              width={600}
              height={400}
              className="rounded-2xl shadow-2xl"
            />
          </div>

          <div>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">
              Qué necesitás para <span className="text-primary">empezar</span>
            </h2>

            <div className="space-y-4">
              <div className="flex items-start space-x-4">
                <CheckCircle2 className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">Ser mayor de 18 años.</p>
              </div>

              <div className="flex items-start space-x-4">
                <Target className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">Tener ganas de crecer y trabajar por objetivos.</p>
              </div>

              <div className="flex items-start space-x-4">
                <Users className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                <p className="text-gray-700 text-lg">Contar con una red de confianza (familia, amigos, conocidos).</p>
              </div>

              <div className="bg-white p-4 rounded-xl border-l-4 border-primary shadow-lg">
                <div className="flex items-start space-x-4">
                  <Award className="w-6 h-6 text-primary mt-1 flex-shrink-0" />
                  <p className="text-gray-700 text-lg font-medium">
                    <strong>No necesitás experiencia previa ni matrícula</strong>, nosotros te formamos y te acompañamos
                    hasta rendir en la SSN.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
