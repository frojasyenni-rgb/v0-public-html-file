"use client"

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Loader2 } from "lucide-react"
import Link from "next/link"
import { signUp } from "@/lib/actions/auth"
import Image from "next/image"

function SubmitButton() {
  const { pending } = useFormStatus()

  return (
    <Button
      type="submit"
      disabled={pending}
      className="w-full bg-primary hover:bg-primary/90 text-white py-6 text-lg font-medium rounded-lg h-[60px]"
    >
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Registrando...
        </>
      ) : (
        "Crear Cuenta"
      )}
    </Button>
  )
}

export default function SignUpForm() {
  const [state, formAction] = useActionState(signUp, null)

  return (
    <div className="w-full max-w-md space-y-8 bg-white p-8 rounded-2xl shadow-xl">
      <div className="space-y-4 text-center">
        <div className="flex justify-center">
          <Image src="/logo-redferro.png" alt="Red Ferro" width={120} height={40} className="h-10 w-auto" />
        </div>
        <h1 className="text-3xl font-bold tracking-tight text-gray-900">Únete a Red Ferro</h1>
        <p className="text-lg text-gray-600">Crea tu cuenta y comienza tu carrera</p>
      </div>

      <form action={formAction} className="space-y-6">
        {state?.error && (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg">{state.error}</div>
        )}

        {state?.success && (
          <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded-lg">{state.success}</div>
        )}

        <div className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">
                Nombre
              </label>
              <Input
                id="firstName"
                name="firstName"
                type="text"
                required
                className="bg-white border-gray-300 text-gray-900 focus:border-primary focus:ring-primary"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">
                Apellido
              </label>
              <Input
                id="lastName"
                name="lastName"
                type="text"
                required
                className="bg-white border-gray-300 text-gray-900 focus:border-primary focus:ring-primary"
              />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="tu@email.com"
              required
              className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-primary focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Teléfono
            </label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="+54 9 11 1234-5678"
              className="bg-white border-gray-300 text-gray-900 placeholder:text-gray-500 focus:border-primary focus:ring-primary"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Contraseña
            </label>
            <Input
              id="password"
              name="password"
              type="password"
              required
              className="bg-white border-gray-300 text-gray-900 focus:border-primary focus:ring-primary"
            />
          </div>
        </div>

        <SubmitButton />

        <div className="text-center text-gray-600">
          ¿Ya tienes una cuenta?{" "}
          <Link href="/auth/login" className="text-primary hover:text-primary/80 font-medium">
            Inicia sesión
          </Link>
        </div>
      </form>
    </div>
  )
}
