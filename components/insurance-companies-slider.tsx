"use client"

import Image from "next/image"
import { useState, useEffect } from "react"

const companies = [
  { name: "Allianz", logo: "/allianz-seguros-logo.png" },
  { name: "Berkley", logo: "/berkley-seguros-logo.png" },
  { name: "Chubb", logo: "/chubb-seguros-logo.png" },
  { name: "HDI Seguros", logo: "/hdi-seguros-logo.png" },
  { name: "Mercantil Andina", logo: "/mercantil-andina-logo.png" },
  { name: "Meridional Seguros", logo: "/meridional-seguros-logo.png", featured: true }, // marcado como destacado para agrandar
  { name: "Asociart", logo: "/asociart-logo.png" },
  { name: "Omint", logo: "/omint-logo.png" },
  { name: "Provincia Seguros", logo: "/provincia-seguros-logo.png" },
  { name: "Prevención ART", logo: "/prevencion-art-logo.png" },
  { name: "Zurich", logo: "/zurich-seguros-logo.png" },
  { name: "Sura", logo: "/sura-seguros-logo.png" },
  { name: "Sancor Seguros", logo: "/sancor-seguros-logo.png" },
]

const companiesPerSlide = 4
const totalSlides = Math.ceil(companies.length / companiesPerSlide)

export function InsuranceCompaniesSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % totalSlides)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToSlide = (slideIndex: number) => {
    setCurrentSlide(slideIndex)
  }

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">Trabajá con las mejores aseguradoras</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Accedé a una amplia cartera de productos de las compañías líderes del mercado argentino y potenciá tus
            ingresos
          </p>
        </div>

        <div className="relative overflow-hidden mb-8">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {Array.from({ length: totalSlides }).map((_, slideIndex) => (
              <div key={slideIndex} className="w-full flex-shrink-0">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6 px-4">
                  {companies
                    .slice(slideIndex * companiesPerSlide, (slideIndex + 1) * companiesPerSlide)
                    .map((company, index) => (
                      <div
                        key={`${slideIndex}-${index}`}
                        className={`group flex items-center justify-center p-6 bg-white rounded-xl shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 hover:border-primary/30 ${
                          company.featured ? "h-32" : "h-24"
                        }`} // altura mayor para compañías destacadas
                      >
                        <Image
                          src={company.logo || "/placeholder.svg"}
                          alt={`Logo de ${company.name}`}
                          width={company.featured ? 160 : 120} // ancho mayor para Meridional
                          height={company.featured ? 80 : 60} // altura mayor para Meridional
                          className={`w-auto object-contain group-hover:scale-110 transition-transform duration-300 ${
                            company.featured ? "max-h-16" : "max-h-12"
                          }`} // altura máxima mayor para destacados
                          quality={95}
                        />
                      </div>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-center space-x-2">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                currentSlide === index ? "bg-primary scale-125" : "bg-gray-300 hover:bg-gray-400"
              }`}
              aria-label={`Ir al slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
