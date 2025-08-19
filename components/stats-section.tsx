import { Card } from "@/components/ui/card"
import { TrendingUp, Users, Clock, Award } from "lucide-react"

const stats = [
  {
    icon: TrendingUp,
    value: "85%",
    label: "Mejora en Velocidad",
    description: "Reducción promedio en tiempo de carga",
  },
  {
    icon: Users,
    value: "92%",
    label: "Satisfacción Usuario",
    description: "Usuarios reportan mejor experiencia",
  },
  {
    icon: Clock,
    value: "2.1s",
    label: "Tiempo de Carga",
    description: "Promedio después de optimización",
  },
  {
    icon: Award,
    value: "98%",
    label: "Score Lighthouse",
    description: "Puntuación de rendimiento promedio",
  },
]

export function StatsSection() {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-gray-800 mb-4">
            Resultados que Hablan por Sí Solos
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nuestras optimizaciones generan mejoras medibles en rendimiento y experiencia de usuario
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <Card key={index} className="p-6 text-center hover:shadow-lg transition-shadow bg-white border-0 shadow-sm">
              <div className="inline-flex items-center justify-center w-12 h-12 bg-primary/10 text-primary rounded-lg mb-4">
                <stat.icon size={24} />
              </div>
              <div className="font-serif font-bold text-3xl text-gray-800 mb-2">{stat.value}</div>
              <div className="font-medium text-gray-800 mb-1">{stat.label}</div>
              <div className="text-sm text-gray-600">{stat.description}</div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
