import { TopNavShell, PageHeader } from "@/components/layout/TopNavShell"
import { waliAsuhNav } from "./nav"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { students } from "@/lib/data"
import { Link } from "react-router-dom"
import { MessageCircleQuestion } from "lucide-react"
import { cn } from "@/lib/utils"

const riskBadgeClass: Record<string, string> = {
  tinggi: "bg-red-50 text-red-700 border-red-200",
  sedang: "bg-amber-50 text-amber-700 border-amber-200",
  rendah: "bg-emerald-50 text-emerald-700 border-emerald-200",
}

const riskLabel: Record<string, string> = { tinggi: "Risiko Tinggi", sedang: "Risiko Sedang", rendah: "Risiko Rendah" }

export default function WaliAsuhDashboard() {
  const high = students.filter((s) => s.level === "tinggi").length
  const mid = students.filter((s) => s.level === "sedang").length

  return (
    <TopNavShell navItems={waliAsuhNav} userName="Sari Handayani" userSubtitle="Asrama Melati">
      <PageHeader title="Dashboard Wali Asuh" subtitle="Ringkasan kondisi peserta didik asuhan" />
      <main className="flex-1 px-4 sm:px-6 pb-6 space-y-6">
        <div className="grid sm:grid-cols-3 gap-4">
          <Card><CardContent className="pt-1">
            <p className="text-sm text-neutral-500">Total Peserta Didik Asuhan</p>
            <p className="text-2xl font-semibold text-neutral-900 mt-1">{students.length}</p>
          </CardContent></Card>
          <Card className="border-red-200"><CardContent className="pt-1">
            <p className="text-sm text-neutral-500">Risiko Tinggi</p>
            <p className="text-2xl font-semibold text-red-600 mt-1">{high}</p>
          </CardContent></Card>
          <Card className="border-amber-200"><CardContent className="pt-1">
            <p className="text-sm text-neutral-500">Risiko Sedang</p>
            <p className="text-2xl font-semibold text-amber-600 mt-1">{mid}</p>
          </CardContent></Card>
        </div>

        <Card className="p-0 overflow-hidden">
          <div className="px-5 py-4 border-b border-neutral-100 flex items-center justify-between">
            <h2 className="font-semibold text-neutral-900 text-sm">Daftar Prioritas Pendampingan</h2>
            <Link to="/wali-asuh/pemantauan" className="text-sm text-teal-700 font-medium hover:underline">
              + Isi Pemantauan Baru
            </Link>
          </div>
          <ul className="divide-y divide-neutral-100">
            {students.map((s) => (
              <li key={s.id} className="px-5 py-4 flex items-center justify-between gap-4">
                <div className="flex items-center gap-3 min-w-0">
                  <div className="w-9 h-9 rounded-full bg-neutral-100 flex items-center justify-center font-medium text-neutral-600 text-sm shrink-0">
                    {s.name.split(" ").map((n) => n[0]).slice(0, 2).join("")}
                  </div>
                  <div className="min-w-0">
                    <p className="font-medium text-neutral-900 text-sm truncate">{s.name}</p>
                    <p className="text-xs text-neutral-500 truncate">
                      Kelas {s.class} · {s.deltaScore >= 0 ? "Naik" : "Turun"} {Math.abs(s.deltaScore)} poin dari minggu lalu
                    </p>
                    {s.factors.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-1.5">
                        {s.factors.map((f) => (
                          <span key={f} className="text-[10px] px-1.5 py-0.5 rounded-full bg-neutral-100 text-neutral-500 font-medium">
                            {f}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
                <div className="flex items-center gap-3 shrink-0">
                  <Badge variant="outline" className={cn("font-medium", riskBadgeClass[s.level])}>
                    {riskLabel[s.level]} · {s.score}
                  </Badge>
                  {s.level !== "rendah" && (
                    <Link to="/wali-asuh/kms" className="text-xs text-teal-700 hover:underline whitespace-nowrap hidden sm:flex items-center gap-1">
                      <MessageCircleQuestion className="w-3.5 h-3.5" /> Tanya KMS
                    </Link>
                  )}
                </div>
              </li>
            ))}
          </ul>
        </Card>
      </main>
    </TopNavShell>
  )
}
