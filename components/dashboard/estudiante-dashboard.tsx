import { createClient } from "@/lib/supabase/server"
import DashboardLayout from "./dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { GraduationCap, BookOpen, Award, Play } from "lucide-react"
import Link from "next/link"

interface EstudianteDashboardProps {
  user: any
}

export default async function EstudianteDashboard({ user }: EstudianteDashboardProps) {
  const supabase = createClient()

  const [{ data: enrollments }, { data: availableCourses }, { count: completedCourses }] = await Promise.all([
    supabase.from("course_enrollments").select("*, courses(title, description)").eq("user_id", user.id),
    supabase.from("courses").select("*").eq("is_active", true),
    supabase
      .from("course_enrollments")
      .select("*", { count: "exact", head: true })
      .eq("user_id", user.id)
      .eq("status", "completed"),
  ])

  const { data: profile } = await supabase
    .from("user_profiles")
    .select("first_name, last_name")
    .eq("user_id", user.id)
    .single()

  const userName = profile ? `${profile.first_name} ${profile.last_name}` : user.email
  const totalCourses = availableCourses?.length || 0
  const progressPercentage = totalCourses > 0 ? Math.round(((completedCourses || 0) / totalCourses) * 100) : 0

  return (
    <DashboardLayout user={user} role="estudiante">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Mi Academia</h1>
            <p className="mt-1 text-sm text-gray-600">Bienvenido, {userName}. Continúa tu formación profesional.</p>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-3 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Progreso General</CardTitle>
                <GraduationCap className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{progressPercentage}%</div>
                <Progress value={progressPercentage} className="mt-2" />
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cursos Completados</CardTitle>
                <Award className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{completedCourses || 0}</div>
                <p className="text-xs text-muted-foreground">de {totalCourses} disponibles</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Cursos Disponibles</CardTitle>
                <BookOpen className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">{totalCourses}</div>
                <p className="text-xs text-muted-foreground">Total en la plataforma</p>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Mis Cursos en Progreso</CardTitle>
                <CardDescription>Continúa donde lo dejaste</CardDescription>
              </CardHeader>
              <CardContent>
                {enrollments && enrollments.length > 0 ? (
                  <div className="space-y-4">
                    {enrollments
                      .filter((e) => e.status === "in_progress" || e.status === "pending")
                      .map((enrollment, index) => (
                        <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                          <div className="flex-1">
                            <h4 className="font-medium">{enrollment.courses?.title}</h4>
                            <p className="text-sm text-gray-500 mt-1">{enrollment.courses?.description}</p>
                            <div className="mt-2">
                              <Progress value={enrollment.score || 0} className="h-2" />
                            </div>
                          </div>
                          <Button size="sm" className="ml-4">
                            <Play className="h-4 w-4 mr-2" />
                            Continuar
                          </Button>
                        </div>
                      ))}
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No tienes cursos en progreso</p>
                    <Button asChild className="mt-4">
                      <Link href="/dashboard/academy">Explorar Cursos</Link>
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Cursos Disponibles</CardTitle>
                <CardDescription>Explora nuevos contenidos</CardDescription>
              </CardHeader>
              <CardContent>
                {availableCourses && availableCourses.length > 0 ? (
                  <div className="space-y-4">
                    {availableCourses.slice(0, 3).map((course, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div className="flex-1">
                          <h4 className="font-medium">{course.title}</h4>
                          <p className="text-sm text-gray-500 mt-1">{course.description}</p>
                          <p className="text-xs text-gray-400 mt-1">Duración: {course.duration_minutes} minutos</p>
                        </div>
                        <Button size="sm" variant="outline" className="ml-4 bg-transparent">
                          Comenzar
                        </Button>
                      </div>
                    ))}
                    <Button asChild variant="outline" className="w-full bg-transparent">
                      <Link href="/dashboard/academy">Ver Todos los Cursos</Link>
                    </Button>
                  </div>
                ) : (
                  <div className="text-center py-6">
                    <GraduationCap className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No hay cursos disponibles</p>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </DashboardLayout>
  )
}
