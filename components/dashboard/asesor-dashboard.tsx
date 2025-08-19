import { createClient } from "@/lib/supabase/server"
import DashboardLayout from "./dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { FileText, GraduationCap, TrendingUp, Plus } from "lucide-react"
import Link from "next/link"

interface AsesorDashboardProps {
  user: any
}

export default async function AsesorDashboard({ user }: AsesorDashboardProps) {
  const supabase = createClient()

  const [{ count: myQuotations }, { count: completedCourses }, { data: recentQuotations }] = await Promise.all([
    supabase.from("quotations").select("*", { count: "exact", head: true }).eq("asesor_id", user.id),
    supabase
      .from("course_enrollments")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user.id)
      .eq("status", "completed"),
    supabase
      .from("quotations")
      .select("client_name, insurance_type, status, created_at")
      .eq("asesor_id", user.id)
      .order("created_at", { ascending: false })
      .limit(5),
  ])

  const { data: profile } = await supabase
    .from("user_profiles")
    .select("first_name, last_name")
    .eq("user_id", user.id)
    .single()

  const userName = profile ? `${profile.first_name} ${profile.last_name}` : user.email

  return (
    <DashboardLayout user={user} role="asesor">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Mi Panel de Asesor</h1>
            <p className="mt-1 text-sm text-gray-600">Bienvenido, {userName}</p>
          </div>

          <div className="mb-8">
            <div className="flex flex-col sm:flex-row gap-4">
              <Button asChild className="bg-primary hover:bg-primary/90">
                <Link href="/dashboard/new-quotation">
                  <Plus className="h-4 w-4 mr-2" />
                  Nueva Cotización
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href="/dashboard/academy">
                  <GraduationCap className="h-4 w-4 mr-2" />
                  Continuar Formación
                </Link>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Mis Cotizaciones</CardTitle>
                <FileText className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{myQuotations || 0}</div>
                <p className="text-xs text-muted-foreground">Total enviadas</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cursos Completados</CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{completedCourses || 0}</div>
                <p className="text-xs text-muted-foreground">Certificaciones obtenidas</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Nivel</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">
                  {completedCourses >= 4 ? "Experto" : completedCourses >= 2 ? "Intermedio" : "Principiante"}
                </div>
                <p className="text-xs text-muted-foreground">Según cursos completados</p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Mis Cotizaciones Recientes</CardTitle>
              <CardDescription>Últimas solicitudes enviadas</CardDescription>
            </CardHeader>
            <CardContent>
              {recentQuotations && recentQuotations.length > 0 ? (
                <div className="space-y-4">
                  {recentQuotations.map((quotation, index) => (
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
              ) : (
                <div className="text-center py-6">
                  <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                  <p className="text-gray-500">No tienes cotizaciones aún</p>
                  <Button asChild className="mt-4">
                    <Link href="/dashboard/new-quotation">Crear Primera Cotización</Link>
                  </Button>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  )
}
