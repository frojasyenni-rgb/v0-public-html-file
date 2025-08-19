"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { LayoutDashboard, GraduationCap, FileText, Users, Settings, LogOut, Menu, X } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { signOut } from "@/lib/actions/auth"

interface DashboardLayoutProps {
  children: React.ReactNode
  user: any
  role: "admin" | "asesor" | "estudiante"
}

export default function DashboardLayout({ children, user, role }: DashboardLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const getNavigationItems = () => {
    const baseItems = [{ name: "Dashboard", href: "/dashboard", icon: LayoutDashboard }]

    switch (role) {
      case "admin":
        return [
          ...baseItems,
          { name: "Usuarios", href: "/dashboard/users", icon: Users },
          { name: "Academia", href: "/dashboard/courses", icon: GraduationCap },
          { name: "Cotizaciones", href: "/dashboard/quotations", icon: FileText },
          { name: "Configuración", href: "/dashboard/settings", icon: Settings },
        ]
      case "asesor":
        return [
          ...baseItems,
          { name: "Nueva Cotización", href: "/dashboard/new-quotation", icon: FileText },
          { name: "Mis Cotizaciones", href: "/dashboard/quotations", icon: FileText },
          { name: "Academia", href: "/dashboard/academy", icon: GraduationCap },
          { name: "Mi Perfil", href: "/dashboard/profile", icon: Settings },
        ]
      case "estudiante":
        return [
          ...baseItems,
          { name: "Academia", href: "/dashboard/academy", icon: GraduationCap },
          { name: "Mi Progreso", href: "/dashboard/progress", icon: GraduationCap },
          { name: "Mi Perfil", href: "/dashboard/profile", icon: Settings },
        ]
      default:
        return baseItems
    }
  }

  const navigationItems = getNavigationItems()

  return (
    <div className="min-h-screen bg-gray-50">
      {sidebarOpen && (
        <div className="fixed inset-0 z-40 lg:hidden">
          <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
          <div className="relative flex w-full max-w-xs flex-1 flex-col bg-white">
            <div className="absolute top-0 right-0 -mr-12 pt-2">
              <button
                type="button"
                className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                onClick={() => setSidebarOpen(false)}
              >
                <X className="h-6 w-6 text-white" />
              </button>
            </div>
            <SidebarContent navigationItems={navigationItems} user={user} />
          </div>
        </div>
      )}

      <div className="hidden lg:fixed lg:inset-y-0 lg:flex lg:w-64 lg:flex-col">
        <div className="flex flex-1 flex-col min-h-0 bg-white border-r border-gray-200">
          <SidebarContent navigationItems={navigationItems} user={user} />
        </div>
      </div>

      <div className="lg:pl-64 flex flex-col flex-1">
        <div className="sticky top-0 z-10 bg-white pl-1 pt-1 sm:pl-3 sm:pt-3 lg:hidden">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>
        <main className="flex-1">{children}</main>
      </div>
    </div>
  )
}

function SidebarContent({ navigationItems, user }: { navigationItems: any[]; user: any }) {
  return (
    <>
      <div className="flex flex-1 flex-col pt-5 pb-4 overflow-y-auto">
        <div className="flex items-center flex-shrink-0 px-4">
          <Image src="/logo-redferro.png" alt="Red Ferro" width={120} height={40} className="h-8 w-auto" />
        </div>

        <nav className="mt-8 flex-1 px-2 space-y-1">
          {navigationItems.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="group flex items-center px-2 py-2 text-sm font-medium rounded-md text-gray-600 hover:bg-gray-50 hover:text-gray-900"
            >
              <item.icon className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-500" />
              {item.name}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex-shrink-0 flex border-t border-gray-200 p-4">
        <div className="flex items-center w-full">
          <Avatar className="h-8 w-8">
            <AvatarImage src={user.user_metadata?.avatar_url || "/placeholder.svg"} />
            <AvatarFallback className="bg-primary text-white">{user.email?.charAt(0).toUpperCase()}</AvatarFallback>
          </Avatar>
          <div className="ml-3 flex-1">
            <p className="text-sm font-medium text-gray-700 truncate">{user.user_metadata?.full_name || user.email}</p>
            <p className="text-xs text-gray-500 truncate">{user.email}</p>
          </div>
          <form action={signOut}>
            <Button type="submit" variant="ghost" size="sm" className="ml-2 text-gray-400 hover:text-gray-600">
              <LogOut className="h-4 w-4" />
            </Button>
          </form>
        </div>
      </div>
    </>
  )
}
