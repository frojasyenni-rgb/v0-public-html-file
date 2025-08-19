import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Shield, Clock, TrendingUp, Users, Award, Zap } from "lucide-react"

export default function BeneficiosPage() {
  const benefits = [
    {
      icon: Zap,
      title: "Fácil de usar",
      description: "Comienza a referir en minutos con nuestra interfaz intuitiva.",
      category: "Para asesores",
    },
    {
      icon: TrendingUp,
      title: "Resultados medibles",
      description: "Monitorea tu éxito en tiempo real con analytics detallados.",
      category: "Para asesores",
    },
    {
      icon: Shield,
      title: "Confianza garantizada",
      description: "Protegemos tus datos y relaciones con máxima seguridad.",
      category: "Para asesores",
    },
    {
      icon: Award,
      title: "Capacitación personalizada",
      description: "Recibe entrenamiento especializado para maximizar tus referencias.",
      category: "Para quienes nos eligen",
    },
    {
      icon: Users,
      title: "Asesoramiento humano",
      description: "Nuestro equipo te acompaña en cada paso del proceso.",
      category: "Para quienes nos eligen",
    },
    {
      icon: Clock,
      title: "Soluciones integrales",
      description: "Ofrecemos servicios completos adaptados a tus necesidades.",
      category: "Para quienes nos eligen",
    },
  ]

  const advisorBenefits = benefits.filter((b) => b.category === "Para asesores")
  const clientBenefits = benefits.filter((b) => b.category === "Para quienes nos eligen")

  return (
    <div className="min-h-screen bg-white">
      <Header />

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-slate-50 to-amber-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">Beneficios para todos</h1>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Una plataforma diseñada para crear valor tanto para asesores como para quienes buscan soluciones
                profesionales. Descubre todas las ventajas de formar parte de Red Ferro.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Beneficios para asesores */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Beneficios para asesores</h2>
                <div className="space-y-6">
                  {advisorBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 bg-primary/10 text-primary rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Beneficios para clientes */}
              <div>
                <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
                  Beneficios para quienes nos eligen
                </h2>
                <div className="space-y-6">
                  {clientBenefits.map((benefit, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
                    >
                      <div className="w-12 h-12 bg-blue-100 text-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                        <benefit.icon className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-gray-900 mb-2">{benefit.title}</h3>
                        <p className="text-gray-600">{benefit.description}</p>
                      </div>
                    </div>
                  ))}
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
