import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import AdminQuotationsManagement from "@/components/admin/quotations-management"

export default async function AdminQuotationsPage() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: userData } = await supabase.from("users").select("role").eq("id", user.id).single()

  if (userData?.role !== "admin") {
    redirect("/dashboard")
  }

  const { data: quotations } = await supabase
    .from("quotations")
    .select("*, users(email, user_profiles(first_name, last_name))")
    .order("created_at", { ascending: false })

  return (
    <DashboardLayout user={user} role="admin">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Gestión de Cotizaciones</h1>
            <p className="mt-1 text-sm text-gray-600">Revisa y gestiona todas las cotizaciones</p>
          </div>

          <AdminQuotationsManagement quotations={quotations || []} />
        </div>
      </div>
    </DashboardLayout>
  )
}
