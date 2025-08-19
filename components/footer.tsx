import { Mail, Phone, MapPin, Linkedin, Instagram } from "lucide-react"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/logo-redferro.png"
                alt="RedFerro Logo"
                width={120}
                height={40}
                className="h-8 w-auto brightness-0 invert"
              />
            </div>
            <h3 className="text-primary font-semibold text-lg mb-4">FERRO – Tu red de confianza</h3>
            <p className="text-gray-300 mb-3 max-w-md leading-relaxed">
              Somos la red para construir relaciones a largo plazo, agregando valor para fidelizar clientes.
            </p>
            <p className="text-gray-300 mb-6 max-w-md leading-relaxed">
              Conectamos personas y empresas con seguros, salud, prevención y soluciones confiables.
            </p>
            <div className="flex items-center space-x-6">
              <a
                href="#"
                className="flex items-center space-x-2 text-primary hover:text-gray-300 transition-colors focus-visible"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
                <span>LinkedIn</span>
              </a>
              <a
                href="#"
                className="flex items-center space-x-2 text-primary hover:text-gray-300 transition-colors focus-visible"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
                <span>Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Enlaces útiles</h4>
            <ul className="space-y-3 text-gray-300">
              <li>
                <a href="#como-funciona" className="hover:text-primary transition-colors focus-visible">
                  ¿Cómo funciona?
                </a>
              </li>
              <li>
                <a href="#beneficios" className="hover:text-primary transition-colors focus-visible">
                  Beneficios
                </a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-primary transition-colors focus-visible">
                  Preguntas frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors focus-visible">
                  Términos y condiciones
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors focus-visible">
                  Política de privacidad
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-lg mb-4">Contacto</h4>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start space-x-2">
                <Mail className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>info@redferro.com</span>
              </li>
              <li className="flex items-start space-x-2">
                <Phone className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span>+54 9 11 3568 8283</span>
              </li>
              <li className="flex items-start space-x-2">
                <MapPin className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-sm leading-relaxed">
                  Del Caminante 20 puerta 10F of 113
                  <br />
                  Nordelta, Buenos Aires
                  <br />
                  Argentina
                </span>
              </li>
            </ul>
            <div className="mt-4 p-3 bg-primary/20 rounded-lg">
              <p className="text-sm text-primary/80">Soporte disponible para todos nuestros miembros</p>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
          <p>&copy; 2024 RedFerro. Todos los derechos reservados. Tu red de confianza.</p>
        </div>
      </div>
    </footer>
  )
}
