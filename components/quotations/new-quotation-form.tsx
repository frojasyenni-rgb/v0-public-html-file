"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Loader2, ArrowLeft } from "lucide-react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useEffect } from "react"
import { createQuotation } from "@/lib/actions/quotations"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button type="submit" disabled={pending} className="bg-primary hover:bg-primary/90">
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Enviando Cotización...
        </>
      ) : (
        "Enviar Cotización"
      )}
    </Button>
  )
}

interface NewQuotationFormProps {
  user: any
}

export default function NewQuotationForm({ user }: NewQuotationFormProps) {
  const router = useRouter()
  const [state, formAction] = useActionState(createQuotation, null)

  useEffect(() => {
    if (state?.success) {
      router.push("/dashboard/quotations")
    }
  }, [state, router])

  return (
    <div className="space-y-6">
      <Button variant="ghost" asChild>
        <Link href="/dashboard">
          <ArrowLeft className="h-4 w-4 mr-2" />
          Volver al Dashboard
        </Link>
      </Button>

      <Card>
        <CardHeader>
          <CardTitle>Información del Cliente</CardTitle>
          <CardDescription>Completa los datos del cliente para generar la cotización</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-6">
            {state?.error && (
              <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{state.error}</div>
            )}

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
              <div className="space-y-2">
                <Label htmlFor="client_name">Nombre Completo *</Label>
                <Input
                  id="client_name"
                  name="client_name"
                  type="text"
                  required
                  placeholder="Juan Pérez"
                  className="bg-white border-gray-300 focus:border-primary focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="client_email">Email *</Label>
                <Input
                  id="client_email"
                  name="client_email"
                  type="email"
                  required
                  placeholder="juan@email.com"
                  className="bg-white border-gray-300 focus:border-primary focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="client_phone">Teléfono</Label>
                <Input
                  id="client_phone"
                  name="client_phone"
                  type="tel"
                  placeholder="+54 9 11 1234-5678"
                  className="bg-white border-gray-300 focus:border-primary focus:ring-primary"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="insurance_type">Tipo de Seguro *</Label>
                <Select name="insurance_type" required>
                  <SelectTrigger className="bg-white border-gray-300 focus:border-primary focus:ring-primary">
                    <SelectValue placeholder="Selecciona el tipo de seguro" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="auto">Seguro de Auto</SelectItem>
                    <SelectItem value="hogar">Seguro de Hogar</SelectItem>
                    <SelectItem value="vida">Seguro de Vida</SelectItem>
                    <SelectItem value="salud">Seguro de Salud</SelectItem>
                    <SelectItem value="comercial">Seguro Comercial</SelectItem>
                    <SelectItem value="responsabilidad_civil">Responsabilidad Civil</SelectItem>
                    <SelectItem value="art">ART</SelectItem>
                    <SelectItem value="otros">Otros</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="coverage_amount">Monto de Cobertura (ARS)</Label>
                <Input
                  id="coverage_amount"
                  name="coverage_amount"
                  type="number"
                  placeholder="1000000"
                  className="bg-white border-gray-300 focus:border-primary focus:ring-primary"
                />
              </div>

              <div className="space-y-2 sm:col-span-2">
                <Label htmlFor="additional_info">Información Adicional</Label>
                <Textarea
                  id="additional_info"
                  name="additional_info"
                  placeholder="Detalles específicos sobre la cotización, necesidades del cliente, etc."
                  rows={4}
                  className="bg-white border-gray-300 focus:border-primary focus:ring-primary"
                />
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <Button type="button" variant="outline" asChild>
                <Link href="/dashboard">Cancelar</Link>
              </Button>
              <SubmitButton />
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
