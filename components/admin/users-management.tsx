"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Users, Search, Filter, Mail, Phone, Calendar } from "lucide-react"
import { updateUserStatus } from "@/lib/actions/admin"

interface UsersManagementProps {
  users: any[]
}

export default function UsersManagement({ users }: UsersManagementProps) {
  const [searchTerm, setSearchTerm] = useState("")
  const [roleFilter, setRoleFilter] = useState("all")
  const [statusFilter, setStatusFilter] = useState("all")

  const filteredUsers = users.filter((user) => {
    const matchesSearch =
      user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (user.user_profiles?.first_name &&
        user.user_profiles.first_name.toLowerCase().includes(searchTerm.toLowerCase())) ||
      (user.user_profiles?.last_name && user.user_profiles.last_name.toLowerCase().includes(searchTerm.toLowerCase()))

    const matchesRole = roleFilter === "all" || user.role === roleFilter
    const matchesStatus = statusFilter === "all" || user.status === statusFilter

    return matchesSearch && matchesRole && matchesStatus
  })

  const getRoleBadge = (role: string) => {
    const roleConfig = {
      admin: { label: "Administrador", className: "bg-purple-100 text-purple-800" },
      asesor: { label: "Asesor", className: "bg-blue-100 text-blue-800" },
      estudiante: { label: "Estudiante", className: "bg-green-100 text-green-800" },
    }

    const config = roleConfig[role as keyof typeof roleConfig] || roleConfig.estudiante
    return <Badge className={config.className}>{config.label}</Badge>
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      active: { label: "Activo", className: "bg-green-100 text-green-800" },
      pending: { label: "Pendiente", className: "bg-yellow-100 text-yellow-800" },
      suspended: { label: "Suspendido", className: "bg-red-100 text-red-800" },
    }

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending
    return <Badge className={config.className}>{config.label}</Badge>
  }

  const handleStatusChange = async (userId: string, newStatus: string) => {
    const formData = new FormData()
    formData.append("user_id", userId)
    formData.append("status", newStatus)

    await updateUserStatus(null, formData)
    window.location.reload()
  }

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center">
            <Users className="h-5 w-5 mr-2" />
            Filtros y Búsqueda
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              <Input
                placeholder="Buscar usuarios..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>

            <Select value={roleFilter} onValueChange={setRoleFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filtrar por rol" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los roles</SelectItem>
                <SelectItem value="admin">Administrador</SelectItem>
                <SelectItem value="asesor">Asesor</SelectItem>
                <SelectItem value="estudiante">Estudiante</SelectItem>
              </SelectContent>
            </Select>

            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger>
                <SelectValue placeholder="Filtrar por estado" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos los estados</SelectItem>
                <SelectItem value="active">Activo</SelectItem>
                <SelectItem value="pending">Pendiente</SelectItem>
                <SelectItem value="suspended">Suspendido</SelectItem>
              </SelectContent>
            </Select>

            <div className="flex items-center text-sm text-gray-600">
              <Filter className="h-4 w-4 mr-2" />
              {filteredUsers.length} usuarios
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2">
        {filteredUsers.map((user) => (
          <Card key={user.id}>
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">
                    {user.user_profiles?.first_name && user.user_profiles?.last_name
                      ? `${user.user_profiles.first_name} ${user.user_profiles.last_name}`
                      : user.email}
                  </CardTitle>
                  <CardDescription>{user.email}</CardDescription>
                </div>
                <div className="space-y-2">
                  {getRoleBadge(user.role)}
                  {getStatusBadge(user.status)}
                </div>
              </div>
            </CardHeader>

            <CardContent>
              <div className="space-y-3">
                <div className="flex items-center text-sm text-gray-600">
                  <Mail className="h-4 w-4 mr-2" />
                  {user.email}
                </div>

                {user.user_profiles?.phone && (
                  <div className="flex items-center text-sm text-gray-600">
                    <Phone className="h-4 w-4 mr-2" />
                    {user.user_profiles.phone}
                  </div>
                )}

                <div className="flex items-center text-sm text-gray-600">
                  <Calendar className="h-4 w-4 mr-2" />
                  Registrado el {new Date(user.created_at).toLocaleDateString("es-AR")}
                </div>

                <div className="flex gap-2 pt-3">
                  {user.status === "pending" && (
                    <Button
                      size="sm"
                      onClick={() => handleStatusChange(user.id, "active")}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Activar
                    </Button>
                  )}

                  {user.status === "active" && (
                    <Button
                      size="sm"
                      variant="outline"
                      onClick={() => handleStatusChange(user.id, "suspended")}
                      className="border-red-300 text-red-600 hover:bg-red-50"
                    >
                      Suspender
                    </Button>
                  )}

                  {user.status === "suspended" && (
                    <Button
                      size="sm"
                      onClick={() => handleStatusChange(user.id, "active")}
                      className="bg-green-600 hover:bg-green-700"
                    >
                      Reactivar
                    </Button>
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {filteredUsers.length === 0 && (
        <div className="text-center py-12">
          <Users className="h-16 w-16 text-gray-400 mx-auto mb-4" />
          <h3 className="text-lg font-medium text-gray-900 mb-2">No se encontraron usuarios</h3>
          <p className="text-gray-500">Intenta ajustar los filtros de búsqueda</p>
        </div>
      )}
    </div>
  )
}
