"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { Progress } from "@/components/ui/progress"
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react"
import { supabase } from "@/lib/supabase/client"

interface CourseEvaluationProps {
  course: any
  enrollment: any
  user: any
  onComplete: (passed: boolean, score: number) => void
  onBack: () => void
}

const sampleQuestions = [
  {
    id: 1,
    question: "¿Cuál es el objetivo principal de un seguro?",
    options: [
      "Generar ganancias para la aseguradora",
      "Transferir el riesgo financiero del asegurado a la aseguradora",
      "Crear empleo en el sector financiero",
      "Aumentar los impuestos del gobierno",
    ],
    correctAnswer: 1,
  },
  {
    id: 2,
    question: "¿Qué es una prima de seguro?",
    options: [
      "El monto que paga la aseguradora al cliente",
      "El descuento aplicado a la póliza",
      "El pago periódico que hace el asegurado por la cobertura",
      "La ganancia de la compañía de seguros",
    ],
    correctAnswer: 2,
  },
  {
    id: 3,
    question: "¿Cuál es la diferencia entre deducible y coaseguro?",
    options: [
      "No hay diferencia, son términos sinónimos",
      "El deducible es un monto fijo, el coaseguro es un porcentaje",
      "El deducible es un porcentaje, el coaseguro es un monto fijo",
      "Ambos son montos fijos",
    ],
    correctAnswer: 1,
  },
  {
    id: 4,
    question: "¿Qué significa 'siniestro' en términos de seguros?",
    options: [
      "La firma del contrato de seguro",
      "El evento dañoso cubierto por la póliza",
      "El vencimiento de la póliza",
      "La renovación automática del seguro",
    ],
    correctAnswer: 1,
  },
  {
    id: 5,
    question: "¿Cuál es el rol principal de un productor asesor de seguros?",
    options: [
      "Vender seguros sin asesoramiento",
      "Asesorar y intermediar entre clientes y aseguradoras",
      "Trabajar exclusivamente para una aseguradora",
      "Procesar reclamos de seguros",
    ],
    correctAnswer: 1,
  },
]

export default function CourseEvaluation({ course, enrollment, user, onComplete, onBack }: CourseEvaluationProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0)
  const [answers, setAnswers] = useState<{ [key: number]: number }>({})
  const [showResults, setShowResults] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleAnswerChange = (questionId: number, answerIndex: number) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerIndex,
    }))
  }

  const handleNext = () => {
    if (currentQuestion < sampleQuestions.length - 1) {
      setCurrentQuestion(currentQuestion + 1)
    }
  }

  const handlePrevious = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1)
    }
  }

  const handleSubmit = async () => {
    setIsSubmitting(true)

    let correctAnswers = 0
    sampleQuestions.forEach((question) => {
      if (answers[question.id] === question.correctAnswer) {
        correctAnswers++
      }
    })

    const score = Math.round((correctAnswers / sampleQuestions.length) * 100)
    const passed = score >= course.passing_score

    try {
      const { error } = await supabase
        .from("course_enrollments")
        .update({
          status: passed ? "completed" : "failed",
          score: score,
          completed_at: passed ? new Date().toISOString() : null,
        })
        .eq("id", enrollment.id)

      if (!error) {
        setShowResults(true)
        setTimeout(() => {
          onComplete(passed, score)
        }, 3000)
      }
    } catch (error) {
      console.error("Error updating enrollment:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (showResults) {
    const correctAnswers = sampleQuestions.filter((q) => answers[q.id] === q.correctAnswer).length
    const score = Math.round((correctAnswers / sampleQuestions.length) * 100)
    const passed = score >= course.passing_score

    return (
      <div className="py-6">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card>
            <CardContent className="text-center py-12">
              {passed ? (
                <CheckCircle className="h-16 w-16 text-green-600 mx-auto mb-4" />
              ) : (
                <XCircle className="h-16 w-16 text-red-600 mx-auto mb-4" />
              )}
              <h2 className="text-2xl font-bold mb-2">{passed ? "¡Felicitaciones!" : "No aprobaste esta vez"}</h2>
              <p className="text-gray-600 mb-4">
                {passed
                  ? "Has completado exitosamente el curso"
                  : `Necesitas ${course.passing_score}% para aprobar. Puedes intentarlo nuevamente.`}
              </p>
              <div className="text-3xl font-bold text-primary mb-4">{score}%</div>
              <p className="text-sm text-gray-500">
                Respuestas correctas: {correctAnswers} de {sampleQuestions.length}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }

  const question = sampleQuestions[currentQuestion]
  const progress = ((currentQuestion + 1) / sampleQuestions.length) * 100

  return (
    <div className="py-6">
      <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-6">
          <Button variant="ghost" onClick={onBack} className="mb-4">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Volver al Curso
          </Button>

          <div className="flex items-center justify-between mb-4">
            <h1 className="text-2xl font-bold text-gray-900">Evaluación: {course.title}</h1>
            <span className="text-sm text-gray-500">
              Pregunta {currentQuestion + 1} de {sampleQuestions.length}
            </span>
          </div>

          <Progress value={progress} className="h-2" />
        </div>

        <Card>
          <CardHeader>
            <CardTitle className="text-lg">{question.question}</CardTitle>
          </CardHeader>
          <CardContent>
            <RadioGroup
              value={answers[question.id]?.toString()}
              onValueChange={(value) => handleAnswerChange(question.id, Number.parseInt(value))}
            >
              {question.options.map((option, index) => (
                <div key={index} className="flex items-center space-x-2 p-3 rounded-lg hover:bg-gray-50">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label htmlFor={`option-${index}`} className="flex-1 cursor-pointer">
                    {option}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </CardContent>
        </Card>

        <div className="flex justify-between mt-6">
          <Button variant="outline" onClick={handlePrevious} disabled={currentQuestion === 0}>
            <ArrowLeft className="h-4 w-4 mr-2" />
            Anterior
          </Button>

          {currentQuestion === sampleQuestions.length - 1 ? (
            <Button
              onClick={handleSubmit}
              disabled={!answers[question.id] || isSubmitting}
              className="bg-primary hover:bg-primary/90"
            >
              {isSubmitting ? "Enviando..." : "Finalizar Evaluación"}
            </Button>
          ) : (
            <Button onClick={handleNext} disabled={!answers[question.id]} className="bg-primary hover:bg-primary/90">
              Siguiente
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </div>
  )
}
