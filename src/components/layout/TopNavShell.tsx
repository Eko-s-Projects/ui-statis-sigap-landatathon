import { Link, useLocation } from "react-router-dom"
import { ArrowLeftRight, type LucideIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/layout/ThemeToggle"

export interface NavItem {
  to: string
  label: string
  icon: LucideIcon
}

interface TopNavShellProps {
  navItems: NavItem[]
  userName: string
  userSubtitle: string
  children: React.ReactNode
}

export function TopNavShell({ navItems, userName, userSubtitle, children }: TopNavShellProps) {
  const location = useLocation()
  const initials = userName.split(" ").map((n) => n[0]).slice(0, 2).join("")

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50">
      <header className="sticky top-0 z-10 bg-white border-b border-neutral-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="h-14 flex items-center justify-between gap-4">
            <div className="flex items-center gap-2.5 shrink-0">
              <div className="w-7 h-7 rounded-md bg-teal-600 flex items-center justify-center">
                <span className="text-white font-bold text-[10px]">SR</span>
              </div>
              <span className="font-semibold text-neutral-900 text-sm hidden sm:inline">SIGAP-SR</span>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <div className="hidden sm:flex items-center gap-2 mr-1">
                <Avatar className="h-7 w-7">
                  <AvatarFallback className="bg-teal-100 text-teal-700 text-xs font-medium">{initials}</AvatarFallback>
                </Avatar>
                <div className="text-right leading-tight">
                  <p className="text-xs font-medium text-neutral-800">{userName}</p>
                  <p className="text-[11px] text-neutral-400">{userSubtitle}</p>
                </div>
              </div>
              <ThemeToggle />
              <Button render={<Link to="/" />} variant="outline" size="sm" className="gap-1.5">
                <ArrowLeftRight className="w-3.5 h-3.5" />
                <span className="hidden sm:inline">Ganti peran</span>
              </Button>
            </div>
          </div>

          <nav className="flex items-center gap-1 -mb-px overflow-x-auto">
            {navItems.map((item) => {
              const active = location.pathname === item.to
              const Icon = item.icon
              return (
                <Link
                  key={item.to}
                  to={item.to}
                  className={cn(
                    "flex items-center gap-1.5 px-3 py-2.5 text-sm border-b-2 whitespace-nowrap transition-colors",
                    active
                      ? "border-teal-600 text-teal-700 font-medium"
                      : "border-transparent text-neutral-500 hover:text-neutral-900 hover:border-neutral-200"
                  )}
                >
                  <Icon className="w-4 h-4" strokeWidth={2} />
                  {item.label}
                </Link>
              )
            })}
          </nav>
        </div>
      </header>

      <div className="flex-1 flex flex-col max-w-6xl w-full mx-auto">{children}</div>
    </div>
  )
}

export function PageHeader({ title, subtitle, actions }: { title: string; subtitle?: string; actions?: React.ReactNode }) {
  return (
    <div className="px-4 sm:px-6 pt-6 pb-4 flex items-center justify-between gap-4">
      <div className="min-w-0">
        <h1 className="font-semibold text-neutral-900 text-lg tracking-tight truncate">{title}</h1>
        {subtitle && <p className="text-sm text-neutral-500 mt-0.5 truncate">{subtitle}</p>}
      </div>
      {actions}
    </div>
  )
}
