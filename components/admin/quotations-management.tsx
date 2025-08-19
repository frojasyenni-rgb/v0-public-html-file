"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { FileText, Search, User, Mail, DollarSign, Calendar, MessageSquare } from "lucide-react"
import { updateQuotationStatus } from "@/lib/actions/admin"

interface QuotationsManagementProps {
  quotations: any[]
}

export default function AdminQuotationsManagement({ quotations }: QuotationsManagementProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [selectedQuotation, setSelectedQuotation] = useState<any>(null)
  const [adminNotes, setAdminNotes] = useState("")

  const filteredQuotations = quotations.filter((quotation) => {
    const matchesSearch =
      quotation.client_name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quotation.client_email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quotation.users?.email.toLowerCase().includes(searchTerm.toLowerCase())

    const matchesStatus = statusFilter === "all" || quotation.status === statusFilter

    return matchesSearch && matchesStatus
  })

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

  const handleStatusUpdate = async (quotationId: string, newStatus: string, notes: string) => {
    const formData = new FormData()
    formData.append("quotation_id", quotationId)
    formData.append("status", newStatus)
    formData.append("admin_notes", notes)

    await updateQuotationStatus(null, formData)
    window.location.reload()
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <FileText className="h-5 w-5 mr-2" />
            Filtros y Búsqueda
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar cotizaciones..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="received">Recibida</SelectItem>
                <SelectItem value="in_analysis">En Análisis</SelectItem>
                <SelectItem value="sent">Enviada</SelectItem>
                <SelectItem value="closed">Cerrada</SelectItem>
                <SelectItem value="rejected">Rechazada</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center text-sm text-gray-600">
              <FileText className="h-4 w-4 mr-2" />
              {filteredQuotations.length} cotizaciones
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          {filteredQuotations.map((quotation) => (
            <Card
              key={quotation.id}
              className={`cursor-pointer transition-all ${
                selectedQuotation?.id === quotation.id ? "ring-2 ring-primary border-primary" : "hover:shadow-md"
              }`}
              onClick={() => setSelectedQuotation(quotation)}
            >
              <CardHeader>
                <div className="flex items-start justify-between">
                  <div>
                    <CardTitle className="text-lg">{quotation.client_name}</CardTitle>
                    <CardDescription className="capitalize">
                      {quotation.insurance_type.replace("_", " ")}
                    </CardDescription>
                  </div>
                  {getStatusBadge(quotation.status)}
                </div>
              </CardHeader>

              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center text-sm text-gray-600">
                    <User className="h-4 w-4 mr-2" />
                    Asesor: {quotation.users?.email}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Mail className="h-4 w-4 mr-2" />
                    {quotation.client_email}
                  </div>
                  {quotation.coverage_amount && (
                    <div className="flex items-center text-sm text-gray-600">
                      <DollarSign className="h-4 w-4 mr-2" />
                      {formatCurrency(quotation.coverage_amount)}
                    </div>
                  )}
                  <div className="flex items-center text-sm text-gray-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    {new Date(quotation.created_at).toLocaleDateString("es-AR")}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div>
          {selectedQuotation ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageSquare className="h-5 w-5 mr-2" />
                  Gestionar Cotización
                </CardTitle>
                <CardDescription>Actualiza el estado y agrega notas administrativas</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Información Completa</h4>
                  <div className="space-y-2 text-sm">
                    <p>
                      <strong>Cliente:</strong> {selectedQuotation.client_name}
                    </p>
                    <p>
                      <strong>Email:</strong> {selectedQuotation.client_email}
                    </p>
                    {selectedQuotation.client_phone && (
                      <p>
                        <strong>Teléfono:</strong> {selectedQuotation.client_phone}
                      </p>
                    )}
                    <p>
                      <strong>Asesor:</strong> {selectedQuotation.users?.email}
                    </p>
                    {selectedQuotation.additional_info && (
                      <div>
                        <strong>Información adicional:</strong>
                        <p className="mt-1 text-gray-600">{selectedQuotation.additional_info}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Cambiar Estado</label>
                  <Select
                    defaultValue={selectedQuotation.status}
                    onValueChange={(value) => setSelectedQuotation({ ...selectedQuotation, newStatus: value })}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="received">Recibida</SelectItem>
                      <SelectItem value="in_analysis">En Análisis</SelectItem>
                      <SelectItem value="sent">Enviada</SelectItem>
                      <SelectItem value="closed">Cerrada</SelectItem>
                      <SelectItem value="rejected">Rechazada</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <label className="block text-sm font-medium mb-2">Notas Administrativas</label>
                  <Textarea
                    placeholder="Agrega notas sobre esta cotización..."
                    value={adminNotes}
                    onChange={(e) => setAdminNotes(e.target.value)}
                    rows={4}
                  />
                  {selectedQuotation.admin_notes && (
                    <div className="mt-2 p-3 bg-gray-50 rounded-lg">
                      <p className="text-sm font-medium">Notas existentes:</p>
                      <p className="text-sm text-gray-600">{selectedQuotation.admin_notes}</p>
                    </div>
                  )}
                </div>

                <Button
                  onClick={() =>
                    handleStatusUpdate(
                      selectedQuotation.id,
                      selectedQuotation.newStatus || selectedQuotation.status,
                      adminNotes,
                    )
                  }
                  className="w-full bg-primary hover:bg-primary/90"
                >
                  Actualizar Cotización
                </Button>
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <FileText className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Selecciona una Cotización</h3>
                <p className="text-gray-500">Haz clic en una cotización para gestionarla</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
