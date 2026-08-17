import { LayoutDashboard, ClipboardList, MessagesSquare, Drama } from "lucide-react"
import type { NavItem } from "@/components/layout/TopNavShell"

export const waliAsuhNav: NavItem[] = [
  { to: "/wali-asuh", label: "Dashboard", icon: LayoutDashboard },
  { to: "/wali-asuh/pemantauan", label: "Pemantauan", icon: ClipboardList },
  { to: "/wali-asuh/kms", label: "Panduan Pengasuhan (KMS)", icon: MessagesSquare },
  { to: "/wali-asuh/simulasi", label: "Simulasi Penanganan", icon: Drama },
]
