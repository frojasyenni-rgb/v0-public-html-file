import Image from "next/image"
import Link from "next/link"
import { GraduationCap, Users, Award, BookOpen } from "lucide-react"

export default function AcademiaSection() {
  return (
    <section className="py-20 bg-gradient-to-br from-amber-50 to-orange-50">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-3 mb-6">
            <GraduationCap className="w-8 h-8 text-primary" />
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">Academia Red Ferro</h2>
          </div>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Formación, confianza y acompañamiento para tu futuro como Productor Asesor de Seguros
          </p>
          <div className="mt-8">
            <Image
              src="/estudiante-motivado.png"
              alt="Estudiante motivado aprendiendo desde laptop"
              width={600}
              height={400}
              className="mx-auto rounded-2xl shadow-2xl"
              query="persona joven estudiando desde laptop con actitud motivada, escritorio limpio, auriculares, café, ambiente profesional"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <BookOpen className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-gray-900">Cómo vas a formarte</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Accedés a una Academia 100% virtual, con contenidos prácticos y paso a paso para que aprendas a tu propio
              ritmo.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Te damos herramientas concretas para que ganes confianza desde el primer día y te prepares para rendir tu
              matrícula oficial de PAS.
            </p>
          </div>
          <div>
            <Image
              src="/plataforma-digital.png"
              alt="Plataforma de capacitación online"
              width={500}
              height={350}
              className="rounded-xl shadow-lg"
              query="mockup de plataforma digital de capacitación online, interfaz moderna y profesional"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <Image
              src="/mentores-profesionales.png"
              alt="Equipo de mentores profesionales"
              width={500}
              height={350}
              className="rounded-xl shadow-lg"
              query="grupo de profesionales en seguros mentoreando, ambiente cercano y profesional, personas diversas en reunión de trabajo"
            />
          </div>
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Users className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-gray-900">Quién te acompaña</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              No vas a estar solo. Un equipo de especialistas en seguros te guía en cada etapa, respondiendo tus dudas y
              dándote soporte.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Además, contás con el respaldo de Blanco Asesores y Grupo Gaman, con acuerdos con más de 40 aseguradoras,
              y una comunidad de colegas que crece junto a vos.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <Award className="w-6 h-6 text-primary" />
              <h3 className="text-2xl font-bold text-gray-900">Tu objetivo final</h3>
            </div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Al completar tu formación, estarás preparado para rendir ante la Superintendencia de Seguros de la Nación
              y obtener tu matrícula de PAS.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Ese será el comienzo de una carrera profesional sólida, con respaldo, proyección y confianza.
            </p>
          </div>
          <div>
            <Image
              src="/diploma-acreditacion.png"
              alt="Acreditación profesional"
              width={500}
              height={350}
              className="rounded-xl shadow-lg"
              query="persona recibiendo diploma o acreditación profesional, estilo conceptual sin logos oficiales"
            />
          </div>
        </div>

        <div className="text-center bg-white rounded-2xl p-12 shadow-xl border border-primary/10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <span className="text-2xl">👉</span>
            <p className="text-xl font-semibold text-gray-800">
              En Red Ferro formás tu futuro, nosotros te acompañamos en cada paso.
            </p>
          </div>
          <Link
            href="/#registro"
            className="inline-block bg-gradient-to-r from-primary to-amber-600 text-white px-12 py-4 rounded-full text-lg font-bold hover:from-amber-600 hover:to-primary transform hover:scale-105 transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Quiero empezar mi formación
          </Link>
        </div>
      </div>
    </section>
  )
}
