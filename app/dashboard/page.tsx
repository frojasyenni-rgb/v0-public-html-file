import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import AdminDashboard from "@/components/dashboard/admin-dashboard"
import AsesorDashboard from "@/components/dashboard/asesor-dashboard"
import EstudianteDashboard from "@/components/dashboard/estudiante-dashboard"

export default async function DashboardPage() {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: userData, error } = await supabase.from("users").select("role, status").eq("id", user.id).single()

  if (error || !userData) {
    redirect("/auth/login")
  }

  if (userData.status !== "active") {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Cuenta Pendiente</h1>
          <p className="text-gray-600">Tu cuenta está siendo revisada. Te contactaremos pronto.</p>
        </div>
      </div>
    )
  }

  switch (userData.role) {
    case "admin":
      return <AdminDashboard user={user} />
    case "asesor":
      return <AsesorDashboard user={user} />
    case "estudiante":
      return <EstudianteDashboard user={user} />
    default:
      redirect("/auth/login")
  }
}
