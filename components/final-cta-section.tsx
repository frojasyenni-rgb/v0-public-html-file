import { Button } from "@/components/ui/button"
import { ArrowRight, Users, Shield, TrendingUp } from "lucide-react"
import Link from "next/link"

export function FinalCtaSection() {
  return (
    <section className="py-16 lg:py-20 bg-gradient-to-br from-amber-50 via-white to-primary/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-primary/10"></div>

      <div className="absolute top-10 left-10 w-20 h-20 bg-primary/10 rounded-full blur-xl"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <div className="flex justify-center items-center gap-8 mb-8">
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Users className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-gray-700">+1600 Asesores</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <Shield className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-gray-700">Respaldo Total</span>
            </div>
            <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
              <TrendingUp className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium text-gray-700">Crecimiento</span>
            </div>
          </div>

          <h2 className="text-4xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Únete hoy a{" "}
            <span className="text-primary bg-gradient-to-r from-primary to-amber-600 bg-clip-text text-transparent">
              Red Ferro
            </span>
          </h2>

          <p className="text-xl lg:text-2xl text-gray-600 mb-10 leading-relaxed max-w-3xl mx-auto">
            Transformá tu experiencia en una carrera sólida como{" "}
            <strong className="text-primary">Asesor Integral Digital</strong> con el respaldo de las mejores
            aseguradoras del país.
          </p>

          <div className="mb-8">
            <Link href="/#registro">
              <Button className="bg-gradient-to-r from-primary to-amber-600 hover:from-primary/90 hover:to-amber-600/90 text-white font-bold py-6 px-16 rounded-2xl text-xl lg:text-2xl transition-all duration-300 transform hover:scale-105 shadow-2xl hover:shadow-primary/25 border-2 border-primary/20">
                ¡Comenzar mi carrera ahora!
                <ArrowRight className="w-6 h-6 ml-3" />
              </Button>
            </Link>
          </div>

          {/* Removed the guarantees section */}
        </div>
      </div>
    </section>
  )
}
