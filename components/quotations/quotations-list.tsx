"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { FileText, Plus, Eye, Calendar, User, DollarSign } from "lucide-react"
import Link from "next/link"

interface QuotationsListProps {
  quotations: any[]
}

export default function QuotationsList({ quotations }: QuotationsListProps) {
  const getStatusBadge = (status: string) => {
    const statusConfig = {
      received: { label: "Recibida", className: "bg-blue-100 text-blue-800" },
      in_analysis: { label: "En Análisis", className: "bg-yellow-100 text-yellow-800" },
      sent: { label: "Enviada", className: "bg-green-100 text-green-800" },
      closed: { label: "Cerrada", className: "bg-gray-100 text-gray-800" },
      rejected: { label: "Rechazada", className: "bg-red-100 text-red-800" },
    }

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.received

    return <Badge className={config.className}>{config.label}</Badge>
  }

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("es-AR", {
      style: "currency",
      currency: "ARS",
    }).format(amount)
  }

  if (quotations.length === 0) {
    return (
      <div className="text-center py-12">
        <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-900 mb-2">No tienes cotizaciones aún</h3>
        <p className="text-gray-500 mb-6">Comienza creando tu primera cotización para un cliente</p>
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link href="/dashboard/new-quotation">
            <Plus className="h-4 w-4 mr-2" />
            Nueva Cotización
          </Link>
        </Button>
      </div>
    )
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Total: {quotations.length} cotizaciones</h2>
        </div>
        <Button asChild className="bg-primary hover:bg-primary/90">
          <Link href="/dashboard/new-quotation">
            <Plus className="h-4 w-4 mr-2" />
            Nueva Cotización
          </Link>
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {quotations.map((quotation) => (
          <Card key={quotation.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{quotation.client_name}</CardTitle>
                  <CardDescription className="capitalize">{quotation.insurance_type.replace("_", " ")}</CardDescription>
                </div>
                {getStatusBadge(quotation.status)}
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <User className="h-4 w-4 mr-2" />
                  {quotation.client_email}
                </div>

                {quotation.coverage_amount && (
                  <div className="flex items-center text-sm text-gray-600">
                    <DollarSign className="h-4 w-4 mr-2" />
                    Cobertura: {formatCurrency(quotation.coverage_amount)}
                  </div>
                )}

                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  {new Date(quotation.created_at).toLocaleDateString("es-AR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </div>

                {quotation.additional_info && (
                  <p className="text-sm text-gray-600 line-clamp-2">{quotation.additional_info}</p>
                )}

                <div className="pt-3">
                  <Button variant="outline" asChild className="w-full bg-transparent">
                    <Link href={`/dashboard/quotations/${quotation.id}`}>
                      <Eye className="h-4 w-4 mr-2" />
                      Ver Detalles
                    </Link>
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  )
}
