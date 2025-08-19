"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, TrendingUp } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative py-12 lg:py-16 overflow-hidden bg-gradient-to-br from-amber-50 via-white to-orange-50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Content */}
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-4">
              <TrendingUp size={16} />
              Oportunidad laboral inmediata
            </div>

            <h1 className="font-bold text-4xl sm:text-5xl lg:text-6xl text-gray-900 mb-4 leading-tight">
              Conviértete en{" "}
              <span className="text-primary relative">
                asesor de seguros virtual
                <svg
                  className="absolute -bottom-2 left-0 w-full h-3 text-primary/20"
                  viewBox="0 0 100 12"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M0 8c30-4 70-4 100 0v4H0z" />
                </svg>
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-gray-600 mb-6 max-w-xl leading-relaxed">
              <strong className="text-gray-800">Comienza hoy mismo</strong> una carrera con horarios 100% flexibles.
              Gestiona tu propia cartera desde tu red de confianza y crece con el respaldo de las principales
              aseguradoras. Ideal para ingresos extra o reconversión profesional.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-white px-8 py-4 text-lg font-semibold group focus-visible w-full sm:w-auto"
                onClick={() => {
                  const registroSection = document.getElementById("registro")
                  registroSection?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Comenzar mi carrera
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-primary/30 text-primary hover:bg-primary/10 px-8 py-4 text-lg focus-visible bg-transparent"
                onClick={() => {
                  const beneficiosSection = document.getElementById("beneficios")
                  beneficiosSection?.scrollIntoView({ behavior: "smooth" })
                }}
              >
                Ver oportunidades
              </Button>
            </div>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative z-10 animate-float">
              <Image
                src="/modern-business-team-collaboration.png"
                alt="Equipo profesional colaborando en oficina moderna"
                width={600}
                height={400}
                className="rounded-2xl shadow-2xl"
                priority
              />
            </div>

            {/* Background decorations */}
            <div className="absolute top-4 right-4 w-72 h-72 bg-primary/20 rounded-full opacity-20 blur-3xl animate-pulse-subtle" />
            <div className="absolute bottom-4 left-4 w-64 h-64 bg-amber-200 rounded-full opacity-20 blur-3xl" />
          </div>
        </div>
      </div>
    </section>
  )
}
