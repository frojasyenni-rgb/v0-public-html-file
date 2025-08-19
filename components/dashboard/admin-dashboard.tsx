import { createClient } from "@/lib/supabase/server"
import DashboardLayout from "./dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Users, GraduationCap, FileText, TrendingUp } from "lucide-react"

interface AdminDashboardProps {
  user: any
}

export default async function AdminDashboard({ user }: AdminDashboardProps) {
  const supabase = createClient()

  const [{ count: totalUsers }, { count: totalCourses }, { count: totalQuotations }, { count: activeAsesores }] =
    await Promise.all([
      supabase.from("users").select("*", { count: "exact", head: true }),
      supabase.from("courses").select("*", { count: "exact", head: true }),
      supabase.from("quotations").select("*", { count: "exact", head: true }),
      supabase.from("users").select("*", { count: "exact", head: true }).eq("role", "asesor").eq("status", "active"),
    ])

  const { data: recentUsers } = await supabase
    .from("users")
    .select("email, role, created_at")
    .order("created_at", { ascending: false })
    .limit(5)

  const { data: recentQuotations } = await supabase
    .from("quotations")
    .select("client_name, insurance_type, status, created_at")
    .order("created_at", { ascending: false })
    .limit(5)

  return (
    <DashboardLayout user={user} role="admin">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Panel de Administración</h1>
            <p className="mt-1 text-sm text-gray-600">Bienvenido al dashboard administrativo de Red Ferro</p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Usuarios</CardTitle>
                <Users className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{totalUsers || 0}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Asesores Activos</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{activeAsesores || 0}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cursos Disponibles</CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{totalCourses || 0}</div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cotizaciones</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{totalQuotations || 0}</div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Usuarios Recientes</CardTitle>
                <CardDescription>Últimos usuarios registrados</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentUsers?.map((user, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{user.email}</p>
                        <p className="text-xs text-gray-500 capitalize">{user.role}</p>
                      </div>
                      <p className="text-xs text-gray-500">{new Date(user.created_at).toLocaleDateString()}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cotizaciones Recientes</CardTitle>
                <CardDescription>Últimas solicitudes de cotización</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {recentQuotations?.map((quotation, index) => (
                    <div key={index} className="flex items-center justify-between">
                      <div>
                        <p className="text-sm font-medium">{quotation.client_name}</p>
                        <p className="text-xs text-gray-500">{quotation.insurance_type}</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xs text-gray-500 capitalize">{quotation.status}</p>
                        <p className="text-xs text-gray-500">{new Date(quotation.created_at).toLocaleDateString()}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
