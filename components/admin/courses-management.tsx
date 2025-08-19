"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { GraduationCap, Users, BookOpen, Plus } from "lucide-react"

interface CoursesManagementProps {
  courses: any[]
  enrollments: any[]
}

export default function CoursesManagement({ courses, enrollments }: CoursesManagementProps) {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null)

  const getCourseStats = (courseId: string) => {
    const courseEnrollments = enrollments.filter((e) => e.course_id === courseId)
    const completed = courseEnrollments.filter((e) => e.status === "completed").length
    const inProgress = courseEnrollments.filter((e) => e.status === "in_progress").length
    const total = courseEnrollments.length

    return { total, completed, inProgress, completionRate: total > 0 ? (completed / total) * 100 : 0 }
  }

  const getStatusBadge = (status: string) => {
    const statusConfig = {
      completed: { label: "Completado", className: "bg-green-100 text-green-800" },
      in_progress: { label: "En Progreso", className: "bg-blue-100 text-blue-800" },
      pending: { label: "Pendiente", className: "bg-yellow-100 text-yellow-800" },
      failed: { label: "No Aprobado", className: "bg-red-100 text-red-800" },
    }

    const config = statusConfig[status as keyof typeof statusConfig] || statusConfig.pending
    return <Badge className={config.className}>{config.label}</Badge>
  }

  const selectedCourseEnrollments = selectedCourse ? enrollments.filter((e) => e.course_id === selectedCourse) : []

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Cursos Disponibles</h2>
          <p className="text-sm text-gray-600">Total: {courses.length} cursos</p>
        </div>
        <Button className="bg-primary hover:bg-primary/90">
          <Plus className="h-4 w-4 mr-2" />
          Nuevo Curso
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="space-y-4">
          {courses.map((course) => {
            const stats = getCourseStats(course.id)
            const isSelected = selectedCourse === course.id

            return (
              <Card
                key={course.id}
                className={`cursor-pointer transition-all ${
                  isSelected ? "ring-2 ring-primary border-primary" : "hover:shadow-md"
                }`}
                onClick={() => setSelectedCourse(course.id)}
              >
                <CardHeader>
                  <div className="flex items-start justify-between">
                    <div>
                      <CardTitle className="text-lg">{course.title}</CardTitle>
                      <CardDescription>{course.description}</CardDescription>
                    </div>
                    <Badge variant={course.is_active ? "default" : "secondary"}>
                      {course.is_active ? "Activo" : "Inactivo"}
                    </Badge>
                  </div>
                </CardHeader>

                <CardContent>
                  <div className="grid grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-primary">{stats.total}</div>
                      <div className="text-xs text-gray-500">Estudiantes</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-green-600">{stats.completed}</div>
                      <div className="text-xs text-gray-500">Completados</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">{stats.inProgress}</div>
                      <div className="text-xs text-gray-500">En Progreso</div>
                    </div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center justify-between text-sm mb-2">
                      <span>Tasa de Finalización</span>
                      <span>{Math.round(stats.completionRate)}%</span>
                    </div>
                    <Progress value={stats.completionRate} className="h-2" />
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div>
          {selectedCourse ? (
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <Users className="h-5 w-5 mr-2" />
                  Estudiantes Inscritos
                </CardTitle>
                <CardDescription>{selectedCourseEnrollments.length} estudiantes en este curso</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 max-h-96 overflow-y-auto">
                  {selectedCourseEnrollments.map((enrollment, index) => (
                    <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                      <div className="flex-1">
                        <p className="font-medium">{enrollment.users?.email}</p>
                        <p className="text-sm text-gray-500">
                          Puntuación: {enrollment.score || 0}% | Inscrito el{" "}
                          {new Date(enrollment.created_at).toLocaleDateString("es-AR")}
                        </p>
                        {enrollment.completed_at && (
                          <p className="text-xs text-green-600">
                            Completado el {new Date(enrollment.completed_at).toLocaleDateString("es-AR")}
                          </p>
                        )}
                      </div>
                      <div className="ml-4">{getStatusBadge(enrollment.status)}</div>
                    </div>
                  ))}
                </div>

                {selectedCourseEnrollments.length === 0 && (
                  <div className="text-center py-8">
                    <BookOpen className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-500">No hay estudiantes inscritos en este curso</p>
                  </div>
                )}
              </CardContent>
            </Card>
          ) : (
            <Card>
              <CardContent className="text-center py-12">
                <GraduationCap className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                <h3 className="text-lg font-medium text-gray-900 mb-2">Selecciona un Curso</h3>
                <p className="text-gray-500">Haz clic en un curso para ver los estudiantes inscritos</p>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  )
}
