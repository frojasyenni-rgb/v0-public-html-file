import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function RegistroPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-20">
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-2xl mx-auto">
              <Card>
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold">¡Únete desde la página principal!</CardTitle>
                  <CardDescription>
                    Para una mejor experiencia, completa tu registro desde nuestra página principal donde encontrarás
                    toda la información necesaria.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center">
                    <Link href="/#registro">
                      <Button size="lg" className="bg-primary hover:bg-primary/90">
                        Ir al formulario de registro
                      </Button>
                    </Link>
                  </div>

                  <div className="text-center">
                    <p className="text-sm text-muted-foreground">
                      ¿Ya tienes cuenta?{" "}
                      <Link href="/iniciar-sesion" className="text-primary hover:underline font-medium">
                        Inicia sesión aquí
                      </Link>
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
