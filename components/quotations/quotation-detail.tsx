"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Textarea } from "@/components/ui/textarea"
import { ArrowLeft, User, Mail, Phone, DollarSign, Calendar, MessageCircle, Send } from "lucide-react"
import Link from "next/link"
import { sendMessage } from "@/lib/actions/quotations"

interface QuotationDetailProps {
  quotation: any
  messages: any[]
  user: any
}

export default function QuotationDetail({ quotation, messages, user }: QuotationDetailProps) {
  const [newMessage, setNewMessage] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

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

  const handleSendMessage = async () => {
    if (!newMessage.trim()) return

    setIsSubmitting(true)
    try {
      const formData = new FormData()
      formData.append("quotation_id", quotation.id)
      formData.append("message", newMessage)

      await sendMessage(null, formData)
      setNewMessage("")
      // In a real app, you'd refresh the messages or use real-time updates
      window.location.reload()
    } catch (error) {
      console.error("Error sending message:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/dashboard/quotations">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a Cotizaciones
            </Link>
          </Button>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{quotation.client_name}</h1>
              <p className="text-lg text-gray-600 capitalize">{quotation.insurance_type.replace("_", " ")}</p>
            </div>
            {getStatusBadge(quotation.status)}
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Información del Cliente</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <User className="h-5 w-5 text-gray-400 mr-3" />
                  <span>{quotation.client_name}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-gray-400 mr-3" />
                  <span>{quotation.client_email}</span>
                </div>
                {quotation.client_phone && (
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 text-gray-400 mr-3" />
                    <span>{quotation.client_phone}</span>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Detalles de la Cotización</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center">
                  <Calendar className="h-5 w-5 text-gray-400 mr-3" />
                  <span>
                    Creada el{" "}
                    {new Date(quotation.created_at).toLocaleDateString("es-AR", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </span>
                </div>
                {quotation.coverage_amount && (
                  <div className="flex items-center">
                    <DollarSign className="h-5 w-5 text-gray-400 mr-3" />
                    <span>Cobertura: {formatCurrency(quotation.coverage_amount)}</span>
                  </div>
                )}
                {quotation.additional_info && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Información Adicional</h4>
                    <p className="text-gray-600">{quotation.additional_info}</p>
                  </div>
                )}
                {quotation.admin_notes && (
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Notas del Administrador</h4>
                    <p className="text-gray-600">{quotation.admin_notes}</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>

          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MessageCircle className="h-5 w-5 mr-2" />
                  Comunicación
                </CardTitle>
                <CardDescription>Historial de mensajes con el equipo administrativo</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto mb-4">
                  {messages.length > 0 ? (
                    messages.map((message, index) => (
                      <div
                        key={index}
                        className={`p-3 rounded-lg ${
                          message.sender_id === user.id ? "bg-primary/10 ml-4" : "bg-gray-100 mr-4"
                        }`}
                      >
                        <p className="text-sm">{message.message}</p>
                        <p className="text-xs text-gray-500 mt-1">
                          {message.sender_id === user.id ? "Tú" : "Administrador"} -{" "}
                          {new Date(message.created_at).toLocaleString("es-AR")}
                        </p>
                      </div>
                    ))
                  ) : (
                    <p className="text-gray-500 text-center py-4">No hay mensajes aún</p>
                  )}
                </div>

                <div className="space-y-3">
                  <Textarea
                    placeholder="Escribe tu mensaje..."
                    value={newMessage}
                    onChange={(e) => setNewMessage(e.target.value)}
                    rows={3}
                    className="bg-white border-gray-300 focus:border-primary focus:ring-primary"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!newMessage.trim() || isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90"
                  >
                    <Send className="h-4 w-4 mr-2" />
                    {isSubmitting ? "Enviando..." : "Enviar Mensaje"}
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
