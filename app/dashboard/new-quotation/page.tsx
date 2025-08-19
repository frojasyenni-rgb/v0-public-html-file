import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import NewQuotationForm from "@/components/quotations/new-quotation-form"

export default async function NewQuotationPage() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: userData } = await supabase.from("users").select("role").eq("id", user.id).single()

  if (userData?.role !== "asesor") {
    redirect("/dashboard")
  }

  return (
    <DashboardLayout user={user} role="asesor">
      <div className="py-6">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Nueva Cotización</h1>
            <p className="mt-1 text-sm text-gray-600">
              Completa la información del cliente para generar una cotización personalizada
            </p>
          </div>

          <NewQuotationForm user={user} />
        </div>
      </div>
    </DashboardLayout>
  )
}
