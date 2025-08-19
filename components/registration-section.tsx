"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Send } from "lucide-react"

export function RegistrationSection() {
  const [isVisible, setIsVisible] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    email: "",
    insurance: "",
    motivation: "",
    howDidYouHear: "",
    acceptTerms: false,
  })

  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === "#registro") {
        setIsVisible(true)
      }
    }

    // Verificar al cargar la página
    handleHashChange()

    // Escuchar cambios en el hash
    window.addEventListener("hashchange", handleHashChange)

    return () => {
      window.removeEventListener("hashchange", handleHashChange)
    }
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)
    // Aquí iría la lógica de envío del formulario
  }

  if (!isVisible) {
    return <div id="registro" className="h-0"></div>
  }

  return (
    <section id="registro" className="py-12 lg:py-16 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">Comienza tu carrera hoy</h2>
            <p className="text-xl text-gray-600">
              Completa el formulario y únete a nuestra red de asesores integrales digitales.
            </p>
          </div>

          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-2xl p-6 lg:p-8">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Nombre *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Tu nombre"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white border-gray-200 focus:border-primary focus:ring-primary"
                    required
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="lastName" className="text-sm font-medium text-gray-700">
                    Apellido *
                  </Label>
                  <Input
                    id="lastName"
                    type="text"
                    placeholder="Tu apellido"
                    value={formData.lastName}
                    onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                    className="bg-white border-gray-200 focus:border-primary focus:ring-primary"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email *
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="bg-white border-gray-200 focus:border-primary focus:ring-primary"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="insurance" className="text-sm font-medium text-gray-700">
                  ¿Tienes matricula de Productor de Seguros? *
                </Label>
                <Select onValueChange={(value) => setFormData({ ...formData, insurance: value })}>
                  <SelectTrigger className="bg-white border-gray-200 focus:border-primary focus:ring-primary">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="si">Sí, tengo matrícula</SelectItem>
                    <SelectItem value="no">No, no tengo matrícula</SelectItem>
                    <SelectItem value="tramite">Estoy en trámite</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="motivation" className="text-sm font-medium text-gray-700">
                  ¿Qué te motiva a sumarte? *
                </Label>
                <Textarea
                  id="motivation"
                  placeholder="Cuéntanos qué te motiva a formar parte de nuestra red..."
                  value={formData.motivation}
                  onChange={(e) => setFormData({ ...formData, motivation: e.target.value })}
                  className="bg-white border-gray-200 focus:border-primary focus:ring-primary min-h-[100px]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="howDidYouHear" className="text-sm font-medium text-gray-700">
                  ¿Cómo te enteraste de RedFerro? *
                </Label>
                <Select onValueChange={(value) => setFormData({ ...formData, howDidYouHear: value })}>
                  <SelectTrigger className="bg-white border-gray-200 focus:border-primary focus:ring-primary">
                    <SelectValue placeholder="Selecciona una opción" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="referido">Por un referido</SelectItem>
                    <SelectItem value="redes">Redes sociales</SelectItem>
                    <SelectItem value="google">Búsqueda en Google</SelectItem>
                    <SelectItem value="publicidad">Publicidad online</SelectItem>
                    <SelectItem value="otro">Otro</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="flex items-start space-x-3">
                <Checkbox
                  id="terms"
                  checked={formData.acceptTerms}
                  onCheckedChange={(checked) => setFormData({ ...formData, acceptTerms: checked as boolean })}
                  className="mt-1"
                />
                <Label htmlFor="terms" className="text-sm text-gray-600 leading-relaxed">
                  Acepto los{" "}
                  <a href="#" className="text-primary hover:text-primary/80 underline">
                    términos y condiciones
                  </a>{" "}
                  y la{" "}
                  <a href="#" className="text-primary hover:text-primary/80 underline">
                    política de privacidad
                  </a>
                  . Entiendo que mis datos serán tratados de manera confidencial.
                </Label>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-4 group"
                disabled={!formData.acceptTerms}
              >
                Enviar solicitud
                <Send className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
