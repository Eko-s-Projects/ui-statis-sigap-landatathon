import { Link, useLocation } from "react-router-dom"
import { ArrowLeftRight, type LucideIcon } from "lucide-react"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ThemeToggle } from "@/components/layout/ThemeToggle"

export interface NavItem {
  to: string
  label: string
  icon: LucideIcon
}

interface KemensosShellProps {
  navItems: NavItem[]
  userName: string
  userSubtitle: string
  children: React.ReactNode
}

export function KemensosShell({ navItems, userName, userSubtitle, children }: KemensosShellProps) {
  const location = useLocation()
  const initials = userName.split(" ").map((n) => n[0]).slice(0, 2).join("")
  const activeItem = navItems.find((item) => item.to === location.pathname)

  return (
    <SidebarProvider>
      <Sidebar collapsible="icon">
        <SidebarHeader>
          <div className="flex items-center gap-2.5 px-2 py-1.5">
            <div className="w-7 h-7 rounded-md bg-indigo-600 flex items-center justify-center shrink-0">
              <span className="text-white font-bold text-[10px]">SR</span>
            </div>
            <div className="group-data-[collapsible=icon]:hidden leading-tight">
              <p className="font-semibold text-sm text-neutral-900">SIGAP-SR</p>
              <p className="text-[11px] text-neutral-400">Kementerian Sosial</p>
            </div>
          </div>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Menu</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {navItems.map((item) => (
                  <SidebarMenuItem key={item.to}>
                    <SidebarMenuButton render={<Link to={item.to} />} isActive={location.pathname === item.to} tooltip={item.label}>
                      <item.icon />
                      <span>{item.label}</span>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <div className="flex items-center gap-2 px-2 py-1.5 group-data-[collapsible=icon]:justify-center">
            <Avatar className="h-7 w-7 shrink-0">
              <AvatarFallback className="bg-indigo-100 text-indigo-700 text-xs font-medium">{initials}</AvatarFallback>
            </Avatar>
            <div className="min-w-0 group-data-[collapsible=icon]:hidden">
              <p className="text-xs font-medium text-neutral-800 truncate">{userName}</p>
              <p className="text-[11px] text-neutral-400 truncate">{userSubtitle}</p>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>

      <SidebarInset>
        <header className="sticky top-0 z-10 flex h-14 items-center justify-between gap-2 border-b border-neutral-200 bg-white px-4">
          <div className="flex items-center gap-2 min-w-0">
            <SidebarTrigger />
            <Separator orientation="vertical" className="h-4" />
            <span className="text-sm font-medium text-neutral-700 truncate">{activeItem?.label ?? "Kemensos"}</span>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <ThemeToggle />
            <Button render={<Link to="/" />} variant="outline" size="sm" className="gap-1.5">
              <ArrowLeftRight className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Ganti peran</span>
            </Button>
          </div>
        </header>
        {children}
      </SidebarInset>
    </SidebarProvider>
  )
}

export function PageHeader({ title, subtitle, actions }: { title: string; subtitle?: string; actions?: React.ReactNode }) {
  return (
    <div className="px-6 pt-6 pb-4 flex items-center justify-between gap-4">
      <div className="min-w-0">
        <h1 className="font-semibold text-neutral-900 text-lg tracking-tight truncate">{title}</h1>
        {subtitle && <p className="text-sm text-neutral-500 mt-0.5 truncate">{subtitle}</p>}
      </div>
      {actions}
    </div>
  )
}
