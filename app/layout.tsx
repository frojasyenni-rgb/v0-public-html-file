import type React from "react"
import type { Metadata } from "next"
import { DM_Sans } from "next/font/google"
import "./globals.css"

const dmSans = DM_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-dm-sans",
  weight: ["400", "500", "600", "700"],
})

export const metadata: Metadata = {
  title: "RedFerro | Potencia tu negocio con referencias efectivas",
  description:
    "Únete a la red de referidos más confiable. Genera ingresos conectando personas con soluciones profesionales de seguros y servicios financieros.",
  keywords: "referidos, seguros, comisiones, red de contactos, ingresos adicionales, productores de seguros",
  authors: [{ name: "RedFerro" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  openGraph: {
    title: "RedFerro | Potencia tu negocio con referencias efectivas",
    description: "Genera ingresos conectando personas con soluciones profesionales",
    type: "website",
    locale: "es_ES",
  },
    generator: 'v0.app'
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="es" className={dmSans.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body className="font-sans antialiased">{children}</body>
    </html>
  )
}
