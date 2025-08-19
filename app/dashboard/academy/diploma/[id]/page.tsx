import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { notFound } from "next/navigation"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import DiplomaGenerator from "@/components/academy/diploma-generator"

interface DiplomaPageProps {
  params: {
    id: string
  }
}

export default async function DiplomaPage({ params }: DiplomaPageProps) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: userData } = await supabase.from("users").select("role").eq("id", user.id).single()

  const [{ data: course }, { data: enrollment }, { data: profile }] = await Promise.all([
    supabase.from("courses").select("*").eq("id", params.id).single(),
    supabase
      .from("course_enrollments")
      .select("*")
      .eq("user_id", user.id)
      .eq("course_id", params.id)
      .eq("status", "completed")
      .single(),
    supabase.from("user_profiles").select("first_name, last_name").eq("user_id", user.id).single(),
  ])

  if (!course || !enrollment) {
    notFound()
  }

  const studentName = profile ? `${profile.first_name} ${profile.last_name}` : user.email

  return (
    <DashboardLayout user={user} role={userData?.role || "estudiante"}>
      <DiplomaGenerator course={course} enrollment={enrollment} studentName={studentName} />
    </DashboardLayout>
  )
}
