import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { GraduationCap, Clock, Award, Play, CheckCircle } from "lucide-react"
import Link from "next/link"

export default async function AcademyPage() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: userData } = await supabase.from("users").select("role").eq("id", user.id).single()

  const [{ data: courses }, { data: enrollments }] = await Promise.all([
    supabase.from("courses").select("*").eq("is_active", true).order("order_index"),
    supabase.from("course_enrollments").select("*").eq("user_id", user.id),
  ])

  const getEnrollmentStatus = (courseId: string) => {
    return enrollments?.find((e) => e.course_id === courseId)
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "completed":
        return <Badge className="bg-green-100 text-green-800">Completado</Badge>
      case "in_progress":
        return <Badge className="bg-blue-100 text-blue-800">En Progreso</Badge>
      case "failed":
        return <Badge className="bg-red-100 text-red-800">No Aprobado</Badge>
      default:
        return <Badge variant="outline">Disponible</Badge>
    }
  }

  return (
    <DashboardLayout user={user} role={userData?.role || "estudiante"}>
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Academia Red Ferro</h1>
            <p className="mt-1 text-sm text-gray-600">
              Desarrolla tus habilidades como asesor de seguros con nuestros cursos especializados
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 xl:grid-cols-3">
            {courses?.map((course) => {
              const enrollment = getEnrollmentStatus(course.id)
              const isCompleted = enrollment?.status === "completed"
              const isInProgress = enrollment?.status === "in_progress"
              const canStart = !enrollment || enrollment.status === "failed"

              return (
                <Card key={course.id} className="flex flex-col">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <CardTitle className="text-lg">{course.title}</CardTitle>
                        <CardDescription className="mt-2">{course.description}</CardDescription>
                      </div>
                      {getStatusBadge(enrollment?.status || "available")}
                    </div>
                  </CardHeader>

                  <CardContent className="flex-1 flex flex-col">
                    <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        {course.duration_minutes} min
                      </div>
                      <div className="flex items-center gap-1">
                        <Award className="h-4 w-4" />
                        {course.passing_score}% para aprobar
                      </div>
                    </div>

                    {enrollment && (
                      <div className="mb-4">
                        <div className="flex items-center justify-between text-sm mb-2">
                          <span>Progreso</span>
                          <span>{enrollment.score || 0}%</span>
                        </div>
                        <Progress value={enrollment.score || 0} className="h-2" />
                      </div>
                    )}

                    <div className="mt-auto">
                      {isCompleted ? (
                        <div className="space-y-2">
                          <Button className="w-full bg-transparent" variant="outline" asChild>
                            <Link href={`/dashboard/academy/course/${course.id}`}>
                              <CheckCircle className="h-4 w-4 mr-2" />
                              Ver Curso
                            </Link>
                          </Button>
                          <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                            <Link href={`/dashboard/academy/diploma/${course.id}`}>
                              <Award className="h-4 w-4 mr-2" />
                              Descargar Diploma
                            </Link>
                          </Button>
                        </div>
                      ) : isInProgress ? (
                        <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                          <Link href={`/dashboard/academy/course/${course.id}`}>
                            <Play className="h-4 w-4 mr-2" />
                            Continuar Curso
                          </Link>
                        </Button>
                      ) : (
                        <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                          <Link href={`/dashboard/academy/course/${course.id}`}>
                            <GraduationCap className="h-4 w-4 mr-2" />
                            {canStart ? "Comenzar Curso" : "Reintentar"}
                          </Link>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              )
            })}
          </div>

          {(!courses || courses.length === 0) && (
            <div className="text-center py-12">
              <GraduationCap className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-lg font-medium text-gray-900 mb-2">No hay cursos disponibles</h3>
              <p className="text-gray-500">Los cursos estarán disponibles próximamente.</p>
            </div>
          )}
        </div>
      </div>
    </DashboardLayout>
  )
}
