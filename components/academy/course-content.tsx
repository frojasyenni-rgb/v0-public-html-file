"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { Clock, Award, ArrowLeft, CheckCircle } from "lucide-react"
import Link from "next/link"
import CourseEvaluation from "./course-evaluation"

interface CourseContentProps {
  course: any
  enrollment: any
  user: any
}

export default function CourseContent({ course, enrollment, user }: CourseContentProps) {
  const [showEvaluation, setShowEvaluation] = useState(false)
  const [courseCompleted, setCourseCompleted] = useState(enrollment?.status === "completed")

  const handleStartEvaluation = () => {
    setShowEvaluation(true)
  }

  const handleEvaluationComplete = (passed: boolean, score: number) => {
    setShowEvaluation(false)
    setCourseCompleted(passed)
  }

  if (showEvaluation) {
    return (
      <CourseEvaluation
        course={course}
        enrollment={enrollment}
        user={user}
        onComplete={handleEvaluationComplete}
        onBack={() => setShowEvaluation(false)}
      />
    )
  }

  return (
    <div className="py-6">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Button variant="ghost" asChild className="mb-4">
            <Link href="/dashboard/academy">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Volver a Academia
            </Link>
          </Button>

          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">{course.title}</h1>
              <p className="mt-2 text-lg text-gray-600">{course.description}</p>
            </div>
            {courseCompleted && (
              <Badge className="bg-green-100 text-green-800">
                <CheckCircle className="h-4 w-4 mr-1" />
                Completado
              </Badge>
            )}
          </div>

          <div className="flex items-center gap-6 mt-4 text-sm text-gray-500">
            <div className="flex items-center gap-1">
              <Clock className="h-4 w-4" />
              {course.duration_minutes} minutos
            </div>
            <div className="flex items-center gap-1">
              <Award className="h-4 w-4" />
              {course.passing_score}% para aprobar
            </div>
          </div>

          {enrollment && (
            <div className="mt-4">
              <div className="flex items-center justify-between text-sm mb-2">
                <span>Tu progreso</span>
                <span>{enrollment.score || 0}%</span>
              </div>
              <Progress value={enrollment.score || 0} className="h-2" />
            </div>
          )}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle>Contenido del Curso</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <div
                  className="text-gray-700 leading-relaxed"
                  dangerouslySetInnerHTML={{
                    __html: course.content || "Contenido del curso en desarrollo...",
                  }}
                />
              </CardContent>
            </Card>
          </div>

          <div className="lg:col-span-1">
            <Card className="sticky top-6">
              <CardHeader>
                <CardTitle>Evaluación</CardTitle>
                <CardDescription>Completa el curso para acceder a la evaluación</CardDescription>
              </CardHeader>
              <CardContent>
                {courseCompleted ? (
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-green-50 rounded-lg">
                      <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
                      <p className="text-green-800 font-medium">¡Curso Completado!</p>
                      <p className="text-green-600 text-sm">Puntuación: {enrollment?.score}%</p>
                    </div>
                    <Button className="w-full bg-primary hover:bg-primary/90" asChild>
                      <Link href={`/dashboard/academy/diploma/${course.id}`}>
                        <Award className="h-4 w-4 mr-2" />
                        Descargar Diploma
                      </Link>
                    </Button>
                  </div>
                ) : (
                  <div className="space-y-4">
                    <div className="text-center p-4 bg-amber-50 rounded-lg">
                      <Award className="h-8 w-8 text-amber-600 mx-auto mb-2" />
                      <p className="text-amber-800 font-medium">Evaluación Disponible</p>
                      <p className="text-amber-600 text-sm">Necesitas {course.passing_score}% para aprobar</p>
                    </div>
                    <Button onClick={handleStartEvaluation} className="w-full bg-primary hover:bg-primary/90">
                      Comenzar Evaluación
                    </Button>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
