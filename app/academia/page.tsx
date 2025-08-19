import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import AcademiaSection from "@/components/academia-section"

export default function AcademiaPage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main>
        <AcademiaSection />
      </main>
      <Footer />
    </div>
  )
}
