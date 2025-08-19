"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function updateUserStatus(prevState: any, formData: FormData) {
  if (!formData) {
    return { error: "Form data is missing" }
  }

  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { error: "Usuario no autenticado" }
  }

  // Verify admin role
  const { data: userData } = await supabase.from("users").select("role").eq("id", user.id).single()

  if (userData?.role !== "admin") {
    return { error: "No tienes permisos para realizar esta acción" }
  }

  const userId = formData.get("user_id")
  const status = formData.get("status")

  if (!userId || !status) {
    return { error: "ID de usuario y estado son requeridos" }
  }

  try {
    const { error } = await supabase.from("users").update({ status: status.toString() }).eq("id", userId.toString())

    if (error) {
      return { error: error.message }
    }

    revalidatePath("/dashboard/users")
    return { success: true }
  } catch (error) {
    console.error("User status update error:", error)
    return { error: "Ocurrió un error inesperado. Intenta nuevamente." }
  }
}

export async function updateQuotationStatus(prevState: any, formData: FormData) {
  if (!formData) {
    return { error: "Form data is missing" }
  }

  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return { error: "Usuario no autenticado" }
  }

  // Verify admin role
  const { data: userData } = await supabase.from("users").select("role").eq("id", user.id).single()

  if (userData?.role !== "admin") {
    return { error: "No tienes permisos para realizar esta acción" }
  }

  const quotationId = formData.get("quotation_id")
  const status = formData.get("status")
  const adminNotes = formData.get("admin_notes")

  if (!quotationId || !status) {
    return { error: "ID de cotización y estado son requeridos" }
  }

  try {
    const updateData: any = { status: status.toString() }
    if (adminNotes) {
      updateData.admin_notes = adminNotes.toString()
    }

    const { error } = await supabase.from("quotations").update(updateData).eq("id", quotationId.toString())

    if (error) {
      return { error: error.message }
    }

    revalidatePath("/dashboard/quotations")
    return { success: true }
  } catch (error) {
    console.error("Quotation status update error:", error)
    return { error: "Ocurrió un error inesperado. Intenta nuevamente." }
  }
}
