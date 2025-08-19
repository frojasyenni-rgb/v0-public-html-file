"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowLeft, Download } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface DiplomaGeneratorProps {
  course: any
  enrollment: any
  studentName: string
}

export default function DiplomaGenerator({ course, enrollment, studentName }: DiplomaGeneratorProps) {
  const handleDownload = () => {
    const element = document.getElementById("diploma")
    if (element) {
      // Simple implementation - in production use libraries like jsPDF or Puppeteer
      window.print()
    }
  }

  const completionDate = new Date(enrollment.completed_at).toLocaleDateString("es-AR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <div className="py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/dashboard/academy">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a Academia
            </Link>
          </Button>

          <div className="flex items-center justify-between">
            <h1 className="text-2xl font-bold text-gray-900">Diploma de Certificación</h1>
            <Button onClick={handleDownload} className="bg-primary hover:bg-primary/90">
              <Download className="h-4 w-4 mr-2" />
              Descargar Diploma
            </Button>
          </div>
        </div>

        <Card className="overflow-hidden">
          <CardContent className="p-0">
            <div
              id="diploma"
              className="bg-gradient-to-br from-amber-50 to-orange-50 p-12 text-center min-h-[600px] flex flex-col justify-center"
            >
              <div className="border-8 border-primary/20 p-8 bg-white/80 backdrop-blur-sm">
                <div className="mb-8">
                  <Image src="/logo-redferro.png" alt="Red Ferro" width={150} height={50} className="mx-auto mb-4" />
                  <h2 className="text-3xl font-bold text-primary mb-2">CERTIFICADO DE FINALIZACIÓN</h2>
                  <div className="w-24 h-1 bg-primary mx-auto"></div>
                </div>

                <div className="mb-8">
                  <p className="text-lg text-gray-600 mb-4">Se certifica que</p>
                  <h3 className="text-4xl font-bold text-gray-900 mb-4">{studentName}</h3>
                  <p className="text-lg text-gray-600 mb-2">ha completado exitosamente el curso</p>
                  <h4 className="text-2xl font-semibold text-primary mb-6">"{course.title}"</h4>
                </div>

                <div className="mb-8">
                  <div className="grid grid-cols-2 gap-8 text-center">
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Puntuación Obtenida</p>
                      <p className="text-2xl font-bold text-primary">{enrollment.score}%</p>
                    </div>
                    <div>
                      <p className="text-sm text-gray-500 mb-1">Fecha de Finalización</p>
                      <p className="text-lg font-semibold text-gray-900">{completionDate}</p>
                    </div>
                  </div>
                </div>

                <div className="border-t border-gray-200 pt-6">
                  <p className="text-sm text-gray-500 mb-2">Certificado emitido por</p>
                  <p className="text-lg font-semibold text-gray-900">Red Ferro - Tu Red de Confianza</p>
                  <p className="text-sm text-gray-500">Academia de Formación Profesional</p>
                </div>

                <div className="mt-8 text-xs text-gray-400">
                  <p>
                    Certificado ID: RF-{course.id.slice(0, 8)}-{enrollment.id.slice(0, 8)}
                  </p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
