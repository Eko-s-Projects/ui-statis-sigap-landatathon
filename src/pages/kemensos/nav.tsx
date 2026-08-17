import { Gauge, SlidersHorizontal, Library } from "lucide-react"
import type { NavItem } from "@/components/layout/KemensosShell"

export const kemensosNav: NavItem[] = [
  { to: "/kemensos", label: "Monitoring Agregat", icon: Gauge },
  { to: "/kemensos/ahp", label: "Pengaturan AHP", icon: SlidersHorizontal },
  { to: "/kemensos/knowledge-base", label: "Knowledge Base", icon: Library },
]
