"use client"

import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { InsuranceCompaniesSlider } from "@/components/insurance-companies-slider"
import { Target, TrendingUp, Clock, Shield, Smartphone, Heart, Eye, BookOpen, Handshake } from "lucide-react"
import Link from "next/link"

export default function QuienesSomosPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        {/* Red Ferro al principio */}
        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-6">Red Ferro – Tu Red de Confianza</h1>
              <div className="max-w-4xl mx-auto">
                <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                  Creamos el concepto de <strong>Asesor de Seguros Virtual</strong>, un rol moderno que se relaciona
                  directamente con su <strong>red de confianza</strong>, gestiona su propia cartera y cuida a quienes
                  más quiere, con el respaldo de <strong>Blanco Asesores y Grupo Gaman</strong>.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 mb-16">
              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-600 text-white rounded-xl flex items-center justify-center mr-4">
                    <Heart className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Nuestra Misión</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Formar y acompañar a nuevos asesores para que construyan una carrera rentable, sólida y humana,
                  aprovechando su <strong>red de confianza</strong> y sumando valor a su entorno.
                </p>
              </div>

              <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 bg-amber-600 text-white rounded-xl flex items-center justify-center mr-4">
                    <Eye className="w-6 h-6" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Nuestra Visión</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  Ser la <strong>comunidad de asesores virtuales más confiable</strong>, combinando capacitación
                  continua, respaldo de aseguradoras líderes y relaciones personales para transformar el acceso a
                  seguros.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 rounded-2xl p-8 lg:p-12">
              <div className="text-center mb-10">
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-900 mb-4">Tu respaldo integral</h3>
                <p className="text-lg text-gray-700 max-w-2xl mx-auto">
                  Capacitación continua, alianzas estratégicas y condiciones preferenciales con las principales
                  aseguradoras.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Formación continua",
                    description: "Entrenamientos regulares en productos y coberturas",
                    icon: BookOpen,
                  },
                  {
                    title: "Alianzas estratégicas",
                    description: "Acuerdos con aseguradoras líderes del mercado",
                    icon: Handshake,
                  },
                  {
                    title: "Condiciones preferenciales",
                    description: "Negociaciones únicas y beneficios exclusivos",
                    icon: Target,
                  },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-md text-center">
                    <div className="w-14 h-14 bg-amber-600 text-white rounded-xl flex items-center justify-center mb-4 mx-auto">
                      <item.icon className="w-7 h-7" />
                    </div>
                    <h4 className="text-lg font-bold text-gray-900 mb-3">{item.title}</h4>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Slider de Compañías Aseguradoras */}
        <section className="py-16 bg-white">
          <div className="container mx-auto px-4">
            <InsuranceCompaniesSlider />
          </div>
        </section>

        {/* Por qué elegir RedFerro */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">¿Por Qué Elegir RedFerro?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                No solo te damos una oportunidad laboral, te brindamos un ecosistema completo para tu éxito profesional
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Smartphone className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">100% Digital</h3>
                  <p className="text-sm text-muted-foreground">
                    Plataforma tecnológica avanzada para gestionar clientes desde cualquier lugar
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Clock className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Horarios Flexibles</h3>
                  <p className="text-sm text-muted-foreground">
                    Trabaja cuando quieras, ideal para complementar tu trabajo actual
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Ingresos Escalables</h3>
                  <p className="text-sm text-muted-foreground">
                    Tus ingresos crecen según tu dedicación y red de referidos
                  </p>
                </CardContent>
              </Card>

              <Card className="p-6 text-center hover:shadow-lg transition-shadow">
                <CardContent className="p-0">
                  <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Shield className="h-8 w-8 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">Respaldo Sólido</h3>
                  <p className="text-sm text-muted-foreground">
                    Grupo Gaman te respalda con 25+ años de experiencia en el mercado
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Proceso de Incorporación */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Tu Camino al Éxito</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                En solo 4 pasos simples, estarás listo para comenzar tu nueva carrera como asesor integral digital
              </p>
            </div>

            <div className="grid md:grid-cols-4 gap-6 max-w-5xl mx-auto">
              <div className="text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  1
                </div>
                <h3 className="text-lg font-semibold mb-2">Regístrate</h3>
                <p className="text-sm text-muted-foreground">Completa tu registro en menos de 5 minutos</p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  2
                </div>
                <h3 className="text-lg font-semibold mb-2">Capacítate</h3>
                <p className="text-sm text-muted-foreground">Accede a nuestra capacitación online gratuita</p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  3
                </div>
                <h3 className="text-lg font-semibold mb-2">Practica</h3>
                <p className="text-sm text-muted-foreground">Usa nuestras herramientas con acompañamiento</p>
              </div>

              <div className="text-center">
                <div className="bg-primary text-white w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                  4
                </div>
                <h3 className="text-lg font-semibold mb-2">¡Comienza!</h3>
                <p className="text-sm text-muted-foreground">Inicia tu actividad y genera ingresos</p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link href="/#registro">
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Comenzar Ahora
                </Button>
              </Link>
            </div>
          </div>
        </section>

        {/* Estadísticas Actualizadas */}
        <section className="py-16 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Nuestros Números Hablan</h2>
              <p className="text-muted-foreground">El respaldo de Grupo Gaman garantiza tu éxito</p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">+1600</div>
                <p className="text-muted-foreground">Asesores Activos</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <p className="text-muted-foreground">Países de Operación</p>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-primary mb-2">25+</div>
                <p className="text-muted-foreground">Años de Experiencia</p>
              </div>
            </div>
          </div>
        </section>

        {/* Call to Action Final */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-4">¿Listo Para Cambiar Tu Futuro?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                Únete a cientos de personas que ya transformaron su vida profesional con RedFerro
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/#registro">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Comenzar Hoy Mismo
                  </Button>
                </Link>
                <Link href="/faqs">
                  <Button size="lg" variant="outline">
                    Resolver Dudas
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
