"use server"

import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { revalidatePath } from "next/cache"

export async function signIn(prevState: any, formData: FormData) {
  if (!formData) {
    return { error: "Form data is missing" }
  }

  const email = formData.get("email")
  const password = formData.get("password")

  if (!email || !password) {
    return { error: "Email y contraseña son requeridos" }
  }

  const supabase = createClient()

  try {
    const { error } = await supabase.auth.signInWithPassword({
      email: email.toString(),
      password: password.toString(),
    })

    if (error) {
      return { error: error.message }
    }

    revalidatePath("/", "layout")
    return { success: true }
  } catch (error) {
    console.error("Login error:", error)
    return { error: "Ocurrió un error inesperado. Intenta nuevamente." }
  }
}

export async function signUp(prevState: any, formData: FormData) {
  if (!formData) {
    return { error: "Form data is missing" }
  }

  const email = formData.get("email")
  const password = formData.get("password")
  const firstName = formData.get("firstName")
  const lastName = formData.get("lastName")
  const phone = formData.get("phone")

  if (!email || !password) {
    return { error: "Email y contraseña son requeridos" }
  }

  const supabase = createClient()

  try {
    const { data, error } = await supabase.auth.signUp({
      email: email.toString(),
      password: password.toString(),
      options: {
        emailRedirectTo:
          process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ||
          `${process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"}/auth/callback`,
      },
    })

    if (error) {
      return { error: error.message }
    }

    if (data.user) {
      const { error: profileError } = await supabase.from("user_profiles").insert({
        user_id: data.user.id,
        first_name: firstName?.toString(),
        last_name: lastName?.toString(),
        phone: phone?.toString(),
      })

      if (profileError) {
        console.error("Profile creation error:", profileError)
      }
    }

    return { success: "Revisa tu email para confirmar tu cuenta." }
  } catch (error) {
    console.error("Sign up error:", error)
    return { error: "Ocurrió un error inesperado. Intenta nuevamente." }
  }
}

export async function signOut() {
  const supabase = createClient()
  await supabase.auth.signOut()
  redirect("/auth/login")
}
