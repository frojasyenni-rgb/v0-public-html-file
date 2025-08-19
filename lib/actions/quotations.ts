"use server"

import { createClient } from "@/lib/supabase/server"
import { revalidatePath } from "next/cache"

export async function createQuotation(prevState: any, formData: FormData) {
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

  const clientName = formData.get("client_name")
  const clientEmail = formData.get("client_email")
  const clientPhone = formData.get("client_phone")
  const insuranceType = formData.get("insurance_type")
  const coverageAmount = formData.get("coverage_amount")
  const additionalInfo = formData.get("additional_info")

  if (!clientName || !clientEmail || !insuranceType) {
    return { error: "Nombre, email y tipo de seguro son requeridos" }
  }

  try {
    const { error } = await supabase.from("quotations").insert({
      asesor_id: user.id,
      client_name: clientName.toString(),
      client_email: clientEmail.toString(),
      client_phone: clientPhone?.toString() || null,
      insurance_type: insuranceType.toString(),
      coverage_amount: coverageAmount ? Number.parseFloat(coverageAmount.toString()) : null,
      additional_info: additionalInfo?.toString() || null,
      status: "received",
    })

    if (error) {
      return { error: error.message }
    }

    revalidatePath("/dashboard/quotations")
    return { success: true }
  } catch (error) {
    console.error("Quotation creation error:", error)
    return { error: "Ocurrió un error inesperado. Intenta nuevamente." }
  }
}

export async function sendMessage(prevState: any, formData: FormData) {
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

  const quotationId = formData.get("quotation_id")
  const message = formData.get("message")

  if (!quotationId || !message) {
    return { error: "ID de cotización y mensaje son requeridos" }
  }

  try {
    const { error } = await supabase.from("quotation_messages").insert({
      quotation_id: quotationId.toString(),
      sender_id: user.id,
      message: message.toString(),
      is_internal: false,
    })

    if (error) {
      return { error: error.message }
    }

    revalidatePath(`/dashboard/quotations/${quotationId}`)
    return { success: true }
  } catch (error) {
    console.error("Message sending error:", error)
    return { error: "Ocurrió un error inesperado. Intenta nuevamente." }
  }
}
