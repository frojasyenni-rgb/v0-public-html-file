import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import UsersManagement from "@/components/admin/users-management"

export default async function UsersPage() {
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

  const { data: users } = await supabase
    .from("users")
    .select("*, user_profiles(first_name, last_name, phone)")
    .order("created_at", { ascending: false })

  return (
    <DashboardLayout user={user} role="admin">
      <div className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-8">
            <h1 className="text-2xl font-bold text-gray-900">Gestión de Usuarios</h1>
            <p className="mt-1 text-sm text-gray-600">Administra todos los usuarios de la plataforma</p>
          </div>

          <UsersManagement users={users || []} />
        </div>
      </div>
    </DashboardLayout>
  )
}
