import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { notFound } from "next/navigation"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import CourseContent from "@/components/academy/course-content"

interface CoursePageProps {
  params: {
    id: string
  }
}

export default async function CoursePage({ params }: CoursePageProps) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: userData } = await supabase.from("users").select("role").eq("id", user.id).single()

  const { data: course } = await supabase.from("courses").select("*").eq("id", params.id).single()

  if (!course) {
    notFound()
  }

  let { data: enrollment } = await supabase
    .from("course_enrollments")
    .select("*")
    .eq("user_id", user.id)
    .eq("course_id", params.id)
    .single()

  if (!enrollment) {
    const { data: newEnrollment, error } = await supabase
      .from("course_enrollments")
      .insert({
        user_id: user.id,
        course_id: params.id,
        status: "in_progress",
        started_at: new Date().toISOString(),
      })
      .select()
      .single()

    if (!error) {
      enrollment = newEnrollment
    }
  }

  return (
    <DashboardLayout user={user} role={userData?.role || "estudiante"}>
      <CourseContent course={course} enrollment={enrollment} user={user} />
    </DashboardLayout>
  )
}
