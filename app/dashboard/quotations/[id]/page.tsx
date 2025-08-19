import { createClient } from "@/lib/supabase/server"
import { redirect } from "next/navigation"
import { notFound } from "next/navigation"
import DashboardLayout from "@/components/dashboard/dashboard-layout"
import QuotationDetail from "@/components/quotations/quotation-detail"

interface QuotationDetailPageProps {
  params: {
    id: string
  }
}

export default async function QuotationDetailPage({ params }: QuotationDetailPageProps) {
  const supabase = createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/auth/login")
  }

  const { data: userData } = await supabase.from("users").select("role").eq("id", user.id).single()

  const { data: quotation } = await supabase
    .from("quotations")
    .select("*")
    .eq("id", params.id)
    .eq("asesor_id", user.id)
    .single()

  if (!quotation) {
    notFound()
  }

  const { data: messages } = await supabase
    .from("quotation_messages")
    .select("*, users(email)")
    .eq("quotation_id", params.id)
    .order("created_at", { ascending: true })

  return (
    <DashboardLayout user={user} role={userData?.role || "asesor"}>
      <QuotationDetail quotation={quotation} messages={messages || []} user={user} />
    </DashboardLayout>
  )
}
