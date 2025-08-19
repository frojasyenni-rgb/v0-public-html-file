"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200 shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center -ml-2 mr-8">
            <Image
              src="/logo-redferro.png"
              alt="RedFerro - Tu Red de Confianza"
              width={200}
              height={66}
              className="h-16 w-auto object-contain"
              priority
              quality={95}
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary font-medium"
            >
              Inicio
            </Link>
            <Link
              href="/quienes-somos"
              className="text-gray-600 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary font-medium"
              scroll={true}
            >
              Quiénes somos
            </Link>
            <Link
              href="/academia"
              className="text-gray-600 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary font-medium"
            >
              Academia
            </Link>
            <Link
              href="/beneficios"
              className="text-gray-600 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary font-medium"
            >
              Beneficios
            </Link>
            <Link
              href="/brokers"
              className="text-gray-600 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary font-medium"
            >
              Brokers
            </Link>
            <Link
              href="/faqs"
              className="text-gray-600 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary font-medium"
            >
              Preguntas frecuentes
            </Link>
            <Link
              href="/iniciar-sesion"
              className="text-gray-600 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary font-medium"
            >
              Iniciar sesión
            </Link>
            <Link href="/#registro">
              <Button className="bg-primary hover:bg-primary/90 focus-visible:outline-2 focus-visible:outline-primary">
                Únete ahora
              </Button>
            </Link>
          </nav>

          {/* Mobile menu button */}
          <button
            className="md:hidden p-2 rounded-md text-gray-600 hover:text-primary focus-visible:outline-2 focus-visible:outline-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Abrir menú de navegación"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden py-4 border-t border-gray-200">
            <div className="flex flex-col space-y-4">
              <Link
                href="/"
                className="text-gray-600 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Inicio
              </Link>
              <Link
                href="/quienes-somos"
                className="text-gray-600 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
                scroll={true}
              >
                Quiénes somos
              </Link>
              <Link
                href="/academia"
                className="text-gray-600 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Academia
              </Link>
              <Link
                href="/beneficios"
                className="text-gray-600 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Beneficios
              </Link>
              <Link
                href="/brokers"
                className="text-gray-600 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Brokers
              </Link>
              <Link
                href="/faqs"
                className="text-gray-600 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Preguntas frecuentes
              </Link>
              <Link
                href="/iniciar-sesion"
                className="text-gray-600 hover:text-primary transition-colors focus-visible:outline-2 focus-visible:outline-primary font-medium"
                onClick={() => setIsMenuOpen(false)}
              >
                Iniciar sesión
              </Link>
              <Link href="/#registro">
                <Button
                  className="bg-primary hover:bg-primary/90 w-full focus-visible:outline-2 focus-visible:outline-primary"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Únete ahora
                </Button>
              </Link>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
