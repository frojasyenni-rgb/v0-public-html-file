import { Button } from "@/components/ui/button"
import { ArrowRight, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section className="py-20 bg-gradient-to-br from-primary to-amber-600 text-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl mb-6">¿Listo para Transformar tu Sitio Web?</h2>
          <p className="text-xl text-amber-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            No esperes más para ofrecer a tus usuarios la experiencia que merecen. Comencemos a optimizar tu sitio web
            hoy mismo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              size="lg"
              className="bg-white text-primary hover:bg-gray-50 px-8 py-3 text-lg font-medium group focus-visible"
            >
              <Mail className="mr-2 h-5 w-5" />
              Solicitar Consulta Gratuita
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-white text-white hover:bg-white hover:text-primary px-8 py-3 text-lg focus-visible bg-transparent"
            >
              Ver Casos de Éxito
            </Button>
          </div>

          <div className="mt-12 pt-8 border-t border-amber-500">
            <p className="text-amber-200 text-sm">
              Más de 500 sitios web optimizados • Resultados garantizados • Soporte 24/7
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
