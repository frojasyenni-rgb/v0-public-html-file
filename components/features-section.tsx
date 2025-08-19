import { Card } from "@/components/ui/card"
import { Rocket, Search, Smartphone, Shield } from "lucide-react"

const features = [
  {
    icon: Rocket,
    title: "Velocidad Importa",
    description:
      "Optimizamos cada aspecto técnico para lograr tiempos de carga ultrarrápidos que mantienen a tus usuarios comprometidos.",
    benefits: ["Compresión de imágenes", "Minificación de código", "CDN global"],
  },
  {
    icon: Search,
    title: "SEO-Ready",
    description:
      "Implementamos las mejores prácticas de SEO técnico para mejorar tu visibilidad en motores de búsqueda.",
    benefits: ["Meta tags optimizados", "Schema markup", "Core Web Vitals"],
  },
  {
    icon: Smartphone,
    title: "Diseño Centrado en Usuario",
    description:
      "Creamos experiencias responsivas que funcionan perfectamente en todos los dispositivos y tamaños de pantalla.",
    benefits: ["Mobile-first", "Touch-friendly", "Navegación intuitiva"],
  },
  {
    icon: Shield,
    title: "Accesibilidad Total",
    description: "Garantizamos que tu sitio sea accesible para todos los usuarios, cumpliendo con estándares WCAG 2.1.",
    benefits: ["Contraste adecuado", "Navegación por teclado", "Screen readers"],
  },
]

export function FeaturesSection() {
  return (
    <section id="servicios" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-gray-800 mb-4">
            Optimización Integral para tu Éxito
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Combinamos técnicas avanzadas de desarrollo con principios de UX para crear sitios web que no solo se ven
            bien, sino que funcionan excepcionalmente.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-sm bg-white group"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 text-primary rounded-xl group-hover:bg-primary group-hover:text-white transition-colors">
                    <feature.icon size={28} />
                  </div>
                </div>

                <div className="flex-1">
                  <h3 className="font-serif font-bold text-xl text-gray-800 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 mb-4 leading-relaxed">{feature.description}</p>
                  <ul className="space-y-2">
                    {feature.benefits.map((benefit, benefitIndex) => (
                      <li key={benefitIndex} className="flex items-center text-sm text-gray-600">
                        <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
